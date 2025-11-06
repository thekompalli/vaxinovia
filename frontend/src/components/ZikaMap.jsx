import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ZikaMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const zikaData = [
    { country: "Brazil", id: "076", cases: 215000, coords: [-47.9292, -15.7942] },
    { country: "Colombia", id: "170", cases: 91000, coords: [-74.2973, 4.5709] },
    { country: "Mexico", id: "484", cases: 55000, coords: [-102.5528, 23.6345] },
    { country: "USA", id: "840", cases: 5900, coords: [-95.7129, 37.0902] },
    { country: "India", id: "356", cases: 3000, coords: [78.9629, 20.5937] },
    { country: "Thailand", id: "764", cases: 2000, coords: [100.9925, 15.8700] },
    { country: "Nigeria", id: "566", cases: 1500, coords: [8.6753, 9.0820] },
    { country: "South Africa", id: "710", cases: 500, coords: [22.9375, -30.5595] }
  ];

  // Create a map of ISO codes to case data
  const zikaMap = zikaData.reduce((acc, item) => {
    acc[item.iso] = item;
    return acc;
  }, {});

  // Color scale based on cases - more realistic outbreak data
  const getColor = (cases) => {
    if (cases >= 100000) return '#8B0000'; // Dark red - highest
    if (cases >= 50000) return '#DC143C'; // Crimson
    if (cases >= 10000) return '#FF6347';  // Tomato
    if (cases >= 5000) return '#FF8C00';  // Dark orange
    if (cases >= 2000) return '#FFA500';  // Orange
    return '#FFD700'; // Gold
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 147
        }}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup center={[0, 20]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isoA3 = geo.properties.ISO_A3;
                const countryData = zikaMap[isoA3];
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryData ? getColor(countryData.cases) : '#E5E7EB'}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: {
                        fill: countryData ? getColor(countryData.cases) : '#D1D5DB',
                        outline: 'none',
                        opacity: 0.8
                      },
                      pressed: { outline: 'none' }
                    }}
                    onMouseEnter={(e) => {
                      if (countryData) {
                        setTooltipContent(`${countryData.country}: ${countryData.cases.toLocaleString()} cases`);
                        handleMouseMove(e);
                      }
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                  />
                );
              })
            }
          </Geographies>
          
          {/* Markers for emphasis */}
          {zikaData.map((item) => (
            <Marker key={item.iso} coordinates={item.coords}>
              <circle r={4} fill="#29B7C5" stroke="#fff" strokeWidth={1} opacity={0.8} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-2 text-sm rounded-lg shadow-lg"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 10}px`,
            backgroundColor: 'var(--vn-deep-indigo)',
            color: 'white'
          }}
        >
          {tooltipContent}
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <div className="text-sm font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>
          Reported Zika Cases (2015-2016):
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#FFD700'}}></div>
          <span className="text-xs text-gray-600">&lt;2,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#FFA500'}}></div>
          <span className="text-xs text-gray-600">2,000 - 5,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#FF8C00'}}></div>
          <span className="text-xs text-gray-600">5,000 - 10,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#FF6347'}}></div>
          <span className="text-xs text-gray-600">10,000 - 50,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#DC143C'}}></div>
          <span className="text-xs text-gray-600">50,000 - 100,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#8B0000'}}></div>
          <span className="text-xs text-gray-600">100,000+</span>
        </div>
      </div>
      
      {/* Data Source Note */}
      <div className="mt-4 text-xs text-gray-500 text-center italic">
        Source: CDC/WHO Zika outbreak surveillance data (2015-2016 epidemic)
      </div>
    </div>
  );
};

export default ZikaMap;
