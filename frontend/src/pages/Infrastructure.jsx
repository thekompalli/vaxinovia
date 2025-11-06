import React from 'react';
import { CheckCircle, FlaskConical, Microscope, Cpu, TestTube, Activity } from 'lucide-react';

export const Infrastructure = () => {
  const labAreas = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Molecular Biology & Genetic Engineering',
      description: 'Gene synthesis, codon optimization, plasmid construction, and molecular cloning facilities'
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Protein Expression & Purification',
      description: 'Multi-host systems: E. coli, Pichia, CHO, insect cells. Chromatography suites with FPLC/HPLC'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Adjuvant Formulation & Compatibility',
      description: 'Formulation development lab with high-pressure homogenizers and particle analyzers'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Immunology & Cell Culture',
      description: 'ELISA, neutralization assays, cytokine profiling, flow cytometry, T-cell analysis'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Preclinical Testing & Animal Unit',
      description: 'OECD/EU compliant animal facility with BSL-2 capabilities for in vivo studies'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Analytical & QC',
      description: 'SDS-PAGE, HPLC, MS, endotoxin testing, sterility testing, potency assays per ICH Q6B'
    }
  ];

  const competencies = [
    'Multi-host expression & purification platforms',
    'Protein folding, stabilization, and structure validation',
    'Adjuvant screening & immune-modulator formulation',
    'Comprehensive immunogenicity & potency assessment',
    'Full analytical characterization & quality control',
    'Process development & technology transfer',
    'GLP-compliant preclinical studies',
    'Pilot-scale bioprocessing (10–100L)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Infrastructure</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              State-of-the-art 2,500 m² integrated facility housing R&D laboratories, GMP pilot suites, and comprehensive analytical capabilities to support vaccine development from concept to clinical materials.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxHTVAlMjBmYWNpbGl0eXxlbnwwfHx8fDE3NjI0MTg1NTR8MA&ixlib=rb-4.1.0&q=85"
            alt="GMP Clean Room Facility"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Laboratory Areas */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Laboratory Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labAreas.map((lab, index) => (
              <div key={index} className="card">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {lab.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{lab.title}</h3>
                <p className="text-gray-600">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1732690233982-1d4567384ea1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnl8ZW58MHx8fHwxNzYyNDE4NTUwfDA&ixlib=rb-4.1.0&q=85"
              alt="Laboratory Equipment"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1617686473830-ba445b0b83ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnl8ZW58MHx8fHwxNzYyNDE4NTUwfDA&ixlib=rb-4.1.0&q=85"
              alt="Clean Room Operations"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {competencies.map((competency, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                <span className="text-gray-700">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>2,500 m²</div>
                <div className="text-sm opacity-90">Total Facility Area</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>ISO 9001</div>
                <div className="text-sm opacity-90">Quality Certified</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>BSL-2/3</div>
                <div className="text-sm opacity-90">Biosafety Levels</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>GMP</div>
                <div className="text-sm opacity-90">Pilot Suites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Bioprocess */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Pilot Bioprocess Capabilities</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our pilot-scale bioprocessing suite enables seamless scale-up from laboratory to GMP manufacturing. Equipped with 10–100L bioreactors, tangential flow filtration systems, and automated formulation equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Process Development</h4>
                    <p className="text-gray-600">Optimization of expression, purification, and formulation protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Tech Transfer</h4>
                    <p className="text-gray-600">Seamless handoff to CDMO partners for commercial production</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Clinical Materials</h4>
                    <p className="text-gray-600">GMP-grade production for Phase 1/2 clinical trials</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
                alt="Bioprocess Equipment"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};