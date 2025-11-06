import React from 'react';
import { Award, Lightbulb, FileText, Code, Users, TrendingUp } from 'lucide-react';

export const Innovation = () => {
  const practices = [
    'Quarterly invention disclosure & IP evaluation committees',
    'PCT/EPO filing & prosecution',
    'Licensing & co-development frameworks',
    'Digital portfolio tracking (InnoTrack™)',
    'Comprehensive training on IP, regulatory, and ethics'
  ];

  const patents = [
    {
      id: 'PCT/2020/VA001',
      title: 'Stabilized Zika E Protein Design',
      year: '2020',
      status: 'Granted',
      description: 'Novel approach to stabilize Zika envelope protein without pre-membrane protein, enhancing immunogenicity'
    },
    {
      id: 'PCT/2021/VA002',
      title: 'CHIKV E2 Nanoparticle Formulation',
      year: '2021',
      status: 'Granted',
      description: 'Self-assembling nanoparticle technology for Chikungunya E2 antigen presentation'
    },
    {
      id: 'PCT/2022/VA003',
      title: 'ASIP® Structure-Guided Mutagenesis',
      year: '2022',
      status: 'Pending',
      description: 'AI-driven platform for antigen stabilization and immune profiling'
    },
    {
      id: 'PCT/2023/VA004',
      title: 'AI Antigen Mapping & Epitope Optimization',
      year: '2023',
      status: 'Pending',
      description: 'Machine learning algorithms for predictive epitope identification and optimization'
    },
    {
      id: 'PCT/2024/VA005',
      title: 'Nanoparticle Adjuvant for Cellular Immunity',
      year: '2024',
      status: 'Pending',
      description: 'Novel adjuvant system specifically designed to enhance T-cell responses'
    }
  ];

  const software = [
    {
      name: 'VaxiPredict™',
      description: 'AI-powered epitope mapping and antigen stability prediction platform',
      capabilities: 'B-cell epitope prediction, T-cell epitope mapping, structural stability analysis, immunogenicity scoring'
    },
    {
      name: 'ImmunoSim™',
      description: 'Advanced adjuvant–antigen compatibility and immune response modeling system',
      capabilities: 'Adjuvant compatibility screening, dose optimization, immune response simulation, formulation stability prediction'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Innovation & IP Management</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our Integrated Innovation & IP Management Unit (IIPMU) comprises 10 specialists—patent attorneys, tech transfer experts, business development professionals, and data analysts—ensuring robust protection and commercialization of breakthrough vaccine technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Innovation Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <FileText className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>28</div>
              <div className="text-gray-600">Active Patents</div>
              <div className="text-sm text-gray-500 mt-1">15 granted, 13 pending</div>
            </div>
            <div className="card text-center">
              <Award className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>5</div>
              <div className="text-gray-600">Patent Families</div>
              <div className="text-sm text-gray-500 mt-1">International protection</div>
            </div>
            <div className="card text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>3</div>
              <div className="text-gray-600">Tech-Transfer Deals</div>
              <div className="text-sm text-gray-500 mt-1">Major licensing agreements</div>
            </div>
            <div className="card text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>11</div>
              <div className="text-gray-600">Joint Publications</div>
              <div className="text-sm text-gray-500 mt-1">With leading institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Key IP Management Practices</h2>
          <div className="space-y-3">
            {practices.map((practice, index) => (
              <div key={index} className="card flex items-center gap-4">
                <Lightbulb className="w-6 h-6 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                <span className="text-gray-700">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Patent Portfolio</h2>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>{patent.title}</h3>
                      <span className={`badge ${patent.status === 'Granted' ? 'badge-success' : 'badge-warning'}`}>
                        {patent.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">{patent.id} • {patent.year}</div>
                  </div>
                </div>
                <p className="text-gray-700">{patent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Platforms */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Proprietary Software Platforms</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {software.map((sw, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <Code className="w-8 h-8 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{sw.name}</h3>
                    <p className="text-gray-700 mb-4">{sw.description}</p>
                    <div className="text-sm text-gray-600">
                      <strong>Key Capabilities:</strong> {sw.capabilities}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASIP Platform Callout */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
              <h2 className="text-3xl font-bold mb-4">ASIP® Platform</h2>
              <p className="text-xl opacity-90">
                Antigen Stabilization & Immune Profiling: From molecular design to GMP in rapid cycles. Our proprietary platform integrates structure-guided engineering, AI-powered optimization, and comprehensive immunological profiling to accelerate vaccine development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};