import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, FlaskConical, Activity } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      name: 'ZIKAvia™',
      disease: 'Zika Virus',
      stage: 'IND Planned Q4 2025',
      status: 'Active Development',
      description: 'Stabilized chimeric E + NS1 recombinant antigen with optimized saponin adjuvant. Preclinical data shows exceptional neutralizing antibody titers (PRNT₅₀ > 1:6400) and robust cellular immunity.',
      kpis: [
        { label: 'Preclinical Efficacy', value: 'PRNT₅₀ > 1:6400' },
        { label: 'Safety Profile', value: 'Excellent' },
        { label: 'Funding Secured', value: 'USD 9M' },
        { label: 'Target', value: 'Phase 2 by 2029' }
      ],
      image: 'https://images.unsplash.com/photo-1707863081130-7048e715688f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3RydWN0dXJlfGVufDB8fHx8MTc2MjQxODU4Mnww&ixlib=rb-4.1.0&q=85',
      color: 'var(--vn-aqua)'
    },
    {
      name: 'Rvexia®',
      disease: 'Respiratory Syncytial Virus (RSV)',
      stage: 'Phase 3 Licensed',
      status: 'Tech-Transferred',
      description: 'Recombinant F-protein subunit vaccine with novel adjuvant. Achieved 80% seroconversion in elderly populations. Successfully licensed to commercial partner for Phase 3 development in 2023.',
      kpis: [
        { label: 'Seroconversion', value: '80%' },
        { label: 'Target Population', value: 'Elderly (65+)' },
        { label: 'Status', value: 'Licensed 2023' },
        { label: 'Commercial Partner', value: 'Active' }
      ],
      image: 'https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxiaW90ZWNoJTIwbGFib3JhdG9yeXxlbnwwfHx8fDE3NjI0MTg1MTZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'var(--vn-success)'
    },
    {
      name: 'NeoMenA®',
      disease: 'Meningococcus B',
      stage: 'Phase 2a Complete',
      status: 'Partnership Opportunity',
      description: 'Innovative outer membrane protein complex targeting underserved MenB strains. EU Orphan Drug Designation obtained. Phase 2a demonstrated favorable safety and robust bactericidal antibody response.',
      kpis: [
        { label: 'Designation', value: 'EU Orphan Drug' },
        { label: 'Phase Completed', value: 'Phase 2a' },
        { label: 'Safety', value: 'Favorable' },
        { label: 'Antibody Response', value: 'Robust' }
      ],
      image: 'https://images.unsplash.com/photo-1579684256060-d5a308109e21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtaWNyb3Njb3B5fGVufDB8fHx8MTc2MjQxODU5MXww&ixlib=rb-4.1.0&q=85',
      color: 'var(--vn-warning)'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Projects & Portfolio</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our vaccine portfolio spans multiple high-impact infectious diseases, with programs ranging from preclinical development to successful commercial licensing.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <FlaskConical className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>3</div>
              <div className="text-gray-600">Active Programs</div>
            </div>
            <div className="card text-center">
              <Activity className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>4</div>
              <div className="text-gray-600">Phase 2 Candidates</div>
            </div>
            <div className="card text-center">
              <Award className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>1</div>
              <div className="text-gray-600">Licensed Product</div>
            </div>
            <div className="card text-center">
              <Award className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>1</div>
              <div className="text-gray-600">Orphan Designation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{project.name}</h2>
                      <span className="badge badge-primary">{project.status}</span>
                    </div>
                    <div className="text-lg mb-2" style={{color: project.color}}>{project.disease}</div>
                    <div className="text-sm text-gray-600 mb-4">{project.stage}</div>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.kpis.map((kpi, idx) => (
                        <div key={idx}>
                          <div className="text-sm text-gray-600">{kpi.label}</div>
                          <div className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>{kpi.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                      Request Dossier <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
            <div className="text-center max-w-3xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
              <h2 className="text-3xl font-bold mb-6">ASIP® Technology Platform</h2>
              <p className="text-xl opacity-90 mb-6">
                Our proprietary Antigen Stabilization & Immune Profiling (ASIP®) platform underpins all vaccine programs, enabling rapid development cycles from molecular design to GMP manufacturing.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="badge badge-primary">Structure-Guided Design</span>
                <span className="badge badge-primary">AI-Powered Optimization</span>
                <span className="badge badge-primary">Rapid GMP Scale-up</span>
                <span className="badge badge-primary">Broad Applicability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Interested in Our Portfolio?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore partnership opportunities, licensing arrangements, or collaborative development for our vaccine programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Discuss Partnership</Link>
            <Link to="/publications" className="btn-secondary">View Publications</Link>
          </div>
        </div>
      </section>
    </div>
  );
};