import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Beaker, Users, Globe, TrendingUp, FileText } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export const InstitutionalExperience = () => {
  const highlights = [
    {
      icon: <FileText className="w-6 h-6" />,
      badge: '9 Patents',
      title: 'Joint Patent Applications',
      description: 'WO/2016/112233 – WO/2024/005476',
      color: 'var(--vn-aqua)'
    },
    {
      icon: <Award className="w-6 h-6" />,
      badge: '€24M',
      title: 'Tech-Transfer & Licensing Deals',
      description: 'Royalties + milestone payments secured',
      color: 'var(--vn-success)'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      badge: 'EU Leader',
      title: 'Major EU Programs',
      description: 'IMPACT-Vax (€6.2M), PROTEO-VIR (€4.5M)',
      color: 'var(--vn-aqua)'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      badge: 'Phase 2',
      title: 'Clinical Validation',
      description: 'Four subunit vaccine candidates advanced',
      color: 'var(--vn-success)'
    }
  ];

  const projects = [
    {
      name: 'Rvexia®',
      disease: 'RSV (Respiratory Syncytial Virus)',
      achievement: '80% seroconversion rate',
      status: 'Licensed for Phase 3 (2023)',
      details: 'Recombinant F-protein subunit vaccine with novel adjuvant formulation. Demonstrated superior immunogenicity in elderly populations. Successfully tech-transferred to commercial partner for Phase 3 development.'
    },
    {
      name: 'NeoMenA®',
      disease: 'Meningococcus B',
      achievement: 'EU Orphan Drug Designation',
      status: '2016–2020 development',
      details: 'Innovative outer membrane protein complex targeting underserved MenB strains. Received EU Orphan Drug Designation. Completed Phase 2a trials with favorable safety profile and robust bactericidal antibody response.'
    },
    {
      name: 'ZIKAvia™',
      disease: 'Zika Virus',
      achievement: 'PRNT₅₀ > 1:6400 in NHP',
      status: 'IND planned Q4 2025',
      details: 'Stabilized chimeric E + NS1 recombinant antigen with saponin-based adjuvant. Exceptional preclinical immunogenicity with neutralizing titers exceeding protective thresholds. Strong cellular immune responses (IFN-γ, IL-2). GLP toxicology studies completed with excellent safety profile.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Institutional Experience</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded in 1995 in Lyon, France, VaxiNovia operates a 2,500 m² integrated R&D and GMP facility with 200 dedicated staff members (70 scientists, 90 technicians, 20 engineers, 20 regulatory/administrative professionals).
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Specialized Expertise</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Beaker className="w-6 h-6 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Recombinant Antigen Engineering & Stabilization</h3>
                    <p className="text-gray-600">Advanced protein design, structure-guided mutagenesis, and stability optimization for challenging viral antigens.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Beaker className="w-6 h-6 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Rational Adjuvant Formulation</h3>
                    <p className="text-gray-600">AI-supported immune-profiling models to optimize adjuvant selection and formulation for enhanced immunogenicity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Global Collaboration Network</h3>
                    <p className="text-gray-600">40+ active partnerships across EU, North America, and Asia advancing programs in Zika, Chikungunya, RSV, and AMR pathogens.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxiaW90ZWNoJTIwbGFib3JhdG9yeXxlbnwwfHx8fDE3NjI0MTg1MTZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Laboratory Research"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Backing */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Strong Financial Foundation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€5M/yr</div>
              <div className="text-lg font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Grant Funding</div>
              <p className="text-gray-600">EIC, Horizon Europe, Gates Foundation, CNRS, ANR</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€4M/yr</div>
              <div className="text-lg font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Industrial Contracts</div>
              <p className="text-gray-600">Sanofi, GSK, Bio-Mérieux partnerships</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€3M/yr</div>
              <div className="text-lg font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Venture Co-funding</div>
              <p className="text-gray-600">Strategic investment and licensing deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: `rgba(41, 183, 197, 0.1)`, color: item.color}}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="badge badge-primary mb-2">{item.badge}</div>
                    <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Projects */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Representative Projects</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {projects.map((project, index) => (
              <AccordionItem key={index} value={`project-${index}`} className="card border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div>
                      <div className="text-xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{project.name}</div>
                      <div className="text-sm text-gray-600">{project.disease}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-success">{project.achievement}</span>
                      <span className="badge badge-primary">{project.status}</span>
                    </div>
                    <p className="text-gray-700">{project.details}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Learn More About Our Capabilities</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our institutional experience and proven track record can accelerate your vaccine development program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/infrastructure" className="btn-primary">Explore Infrastructure</Link>
            <Link to="/contact" className="btn-secondary">Request Full Dossier</Link>
          </div>
        </div>
      </section>
    </div>
  );
};