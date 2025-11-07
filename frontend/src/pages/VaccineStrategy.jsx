import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { CheckCircle, Beaker, FlaskConical, Syringe, Users, FileCheck } from 'lucide-react';

export const VaccineStrategy = () => {
  const processSteps = [
    {
      no: 1,
      stage: 'Antigen Design',
      objectives: 'Stabilize E (no PrM), fuse NS1 for breadth',
      tech: 'Structure modeling, codon optimization, sequence verification',
      icon: <Beaker className="w-6 h-6" />
    },
    {
      no: 2,
      stage: 'Expression & Purification',
      objectives: 'Baculovirus–insect + CHO; purity >95%',
      tech: 'SDS-PAGE, Western blot, HPLC; endotoxin <0.1 EU/μg',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      no: 3,
      stage: 'Adjuvant Formulation',
      objectives: 'Alum or emulsion to enhance response',
      tech: 'Stability testing, particle size analysis, potency assays',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      no: 4,
      stage: 'Analytical Methods and Scale up',
      objectives: 'Create and qualify the assays needed to test vaccine in animal models',
      tech: 'ELISA & other In-vitro assays',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      no: 5,
      stage: 'Pre-clinical Testing',
      objectives: 'Safety, immunogenicity, efficacy',
      tech: 'GLP toxicology, cytokine profiling, neutralization assays',
      icon: <Users className="w-6 h-6" />
    },
    {
      no: 6,
      stage: 'Clinical-Grade Manufacturing',
      objectives: 'Scale up under GMP for human use',
      tech: 'Process validation; sterility/identity per ICH Q5C',
      icon: <Syringe className="w-6 h-6" />
    },
    {
      no: 7,
      stage: 'Phase 1 Trial',
      objectives: 'Safety, tolerability, immunogenicity (dose-escalation)',
      tech: 'Randomized controlled trial with DSMB oversight',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      no: 8,
      stage: 'Phase 2 Trial',
      objectives: 'Confirm safety; dose & adjuvant optimization',
      tech: 'Neutralizing antibody titers; T-cell ELISpot',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const opportunities = [
    'No licensed Zika vaccine; high neonatal & economic burden',
    'Platform technology applicable to other flaviviruses (Dengue, West Nile)',
    'Market projection: USD 1.2B annually by 2032 (preparedness + travel clinics)',
    'Enhanced thermostability reduces cold-chain costs; higher scalability',
    'High preclinical potency (PRNT₅₀ > 1:6400) suggests strong potential for DALY savings & societal ROI'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Vaccine Strategy & Process</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Structure-guided chimeric E + NS1 recombinant antigen with optimized adjuvant formulation. Our systematic approach takes candidates from molecular design through preclinical validation to Phase 1–2 clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Development Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--vn-aqua)', color: 'white'}}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge badge-primary">Stage {step.no}</span>
                        <h3 className="text-xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{step.stage}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Main Objectives:</div>
                          <p className="text-gray-700">{step.objectives}</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Tech & QC:</div>
                          <p className="text-gray-700">{step.tech}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Regulatory */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Quality & Regulatory Framework</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Comprehensive GMP framework with documented SOPs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Batch records and in-process control procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Identity, purity, potency, and sterility testing per ICH guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">ICH stability studies for clinical materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Regular internal and external audits</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Regulatory Affairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Alignment with EMA and WHO guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">GLP-compliant nonclinical studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">IMPD/CMC documentation for Phase 1 submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">CTA preparation and regulatory alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                  <span className="text-gray-700">Continuous monitoring and compliance oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Opportunity */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
            <h2 className="text-3xl font-bold mb-6">Strategic Opportunity</h2>
            <div className="space-y-3">
              {opportunities.map((opp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                  <span className="opacity-90">{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Process */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1707863080066-bf2a5c660c5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm90ZWluJTIwc3RydWN0dXJlfGVufDB8fHx8MTc2MjQxODU4Mnww&ixlib=rb-4.1.0&q=85"
              alt="Protein Analysis"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1706639996436-3c90695c7dd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxpbW11bm9sb2d5JTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyNDE4NTg3fDA&ixlib=rb-4.1.0&q=85"
              alt="Immunology Research"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};