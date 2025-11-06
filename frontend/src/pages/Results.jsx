import React from 'react';
import { Award, Target, TrendingUp, Globe, Users, Heart } from 'lucide-react';

export const Results = () => {
  const outcomes = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Immunogenicity',
      description: 'Alum + CpG adjuvant formulation generating strong humoral and cellular immune responses',
      metrics: ['PRNT₅₀ > 1:6400 in non-human primates', 'Robust IFN-γ and IL-2 T-cell responses', 'Sustained antibody titers at 6+ months']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Safety Profile',
      description: 'Minimal toxicity with excellent tolerability in preclinical and anticipated Phase 1 results',
      metrics: ['No adverse findings in GLP toxicology', 'Mild, transient injection site reactions', 'No systemic safety signals identified']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Efficacy Signals',
      description: 'Strong neutralization capacity and T-cell activation suggesting protective immunity',
      metrics: ['Broad neutralization across Zika strains', 'CD4+ and CD8+ T-cell activation', 'Early protective indicators in Phase 2 design']
    }
  ];

  const impacts = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Public Health Impact',
      points: [
        'Reduced Zika-associated congenital anomalies and microcephaly cases',
        'Protection for pregnant women in endemic regions',
        'Significant DALYs saved through prevention of neurological complications',
        'Foundation for rapid response during future Zika outbreaks'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Health Preparedness',
      points: [
        'Epidemic preparedness backbone for flavivirus threats',
        'Platform technology applicable to Dengue, West Nile, Yellow Fever',
        'Scalable manufacturing for endemic and at-risk regions',
        'Contribution to WHO vaccination targets and pandemic readiness'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Scientific & Commercial',
      points: [
        'Validated ASIP® platform for future vaccine programs',
        'Phase 3 trial design and regulatory pathway established',
        'Market entry in USD 1.2B annual Zika vaccine market',
        'Licensing and partnership opportunities with global health organizations'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Expected Results & Impact</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our ZIKAvia™ vaccine program is positioned to deliver breakthrough results in immunogenicity, safety, and real-world impact—addressing a critical unmet need in global health.
            </p>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Expected Outcomes</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="card">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {outcome.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{outcome.title}</h3>
                <p className="text-gray-700 mb-6">{outcome.description}</p>
                <div className="space-y-2">
                  {outcome.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: 'var(--vn-aqua)'}}></div>
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Transformative Global Health Impact</h2>
              <p className="text-lg text-gray-700 mb-6">
                ZIKAvia™ represents more than a vaccine candidate—it's a comprehensive solution to a persistent threat affecting millions in endemic regions and travelers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>87+</div>
                  <div className="text-sm text-gray-600">Countries with Zika transmission</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>1.2B USD</div>
                  <div className="text-sm text-gray-600">Projected annual market by 2032</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>Zero</div>
                  <div className="text-sm text-gray-600">Licensed Zika vaccines currently</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>High</div>
                  <div className="text-sm text-gray-600">Thermostability for field deployment</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1738778344503-f6e0df318895?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyNDE4NTIzfDA&ixlib=rb-4.1.0&q=85"
                alt="Vaccine Research"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Multidimensional Impact</h2>
          <div className="space-y-6">
            {impacts.map((impact, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                    {impact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>{impact.title}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {impact.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: 'var(--vn-aqua)'}}></div>
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Pathway */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-3xl font-bold mb-6">Regulatory Pathway & Next Steps</h2>
          <p className="text-xl opacity-90 mb-8">
            Phase 2 completion will provide comprehensive efficacy data supporting Phase 3 trial design and regulatory submissions to EMA, WHO PQ, and FDA. Our robust dataset positions ZIKAvia™ for accelerated review and rapid deployment in endemic regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="badge badge-primary text-base px-6 py-3">Phase 3 Trial Design Ready</div>
            <div className="badge badge-primary text-base px-6 py-3">Regulatory Submissions Prepared</div>
            <div className="badge badge-primary text-base px-6 py-3">Manufacturing Scale-up Planned</div>
          </div>
        </div>
      </section>
    </div>
  );
};