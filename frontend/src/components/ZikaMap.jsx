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

  // Create a map of country IDs to case data
  const zikaMap = zikaData.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  // Color scale based on cases - matching VaxiNovia theme colors
  const getColor = (cases) => {
    if (cases >= 100000) return '#1A365D'; // Deep indigo - highest
    if (cases >= 50000) return '#2B4C7E';  // VN deep indigo
    if (cases >= 10000) return '#3B6EA5';  // Medium blue
    if (cases >= 5000) return '#4D8FBF';   // Light blue
    if (cases >= 2000) return '#29B7C5';   // VN aqua
    return '#4DD4E6'; // Light aqua - lowest
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
                const countryId = geo.id;
                const countryData = zikaMap[countryId];
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryData ? getColor(countryData.cases) : 'var(--map-country-fill, #E5E7EB)'}
                    stroke={countryData ? '#1A365D' : 'var(--map-stroke, #D1D5DB)'}
                    strokeWidth={countryData ? 1.5 : 0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: {
                        fill: countryData ? getColor(countryData.cases) : 'var(--map-hover, #D1D5DB)',
                        outline: 'none',
                        cursor: countryData ? 'pointer' : 'default',
                        filter: countryData ? 'brightness(1.1)' : 'none'
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
            <Marker key={item.id} coordinates={item.coords}>
              <circle 
                r={4} 
                fill={getColor(item.cases)} 
                stroke="#fff" 
                strokeWidth={1.5} 
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  setTooltipContent(`${item.country}: ${item.cases.toLocaleString()} cases`);
                  handleMouseMove(e);
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
              />
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
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#4DD4E6'}}></div>
          <span className="text-xs text-gray-600">&lt;2,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#29B7C5'}}></div>
          <span className="text-xs text-gray-600">2,000 - 5,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#4D8FBF'}}></div>
          <span className="text-xs text-gray-600">5,000 - 10,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#3B6EA5'}}></div>
          <span className="text-xs text-gray-600">10,000 - 50,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#2B4C7E'}}></div>
          <span className="text-xs text-gray-600">50,000 - 100,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 rounded" style={{backgroundColor: '#1A365D'}}></div>
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
