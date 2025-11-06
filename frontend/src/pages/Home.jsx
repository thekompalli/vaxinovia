import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, Globe, TrendingUp, Award, Microscope, FlaskConical } from 'lucide-react';

export const Home = () => {
  const partners = [
    { name: 'Sanofi Pasteur', logo: 'SP' },
    { name: 'GSK', logo: 'GSK' },
    { name: 'Bio-Mérieux', logo: 'BM' },
    { name: 'ImmunoVax GmbH', logo: 'IV' },
    { name: 'PharmAlliance Biotech', logo: 'PAB' }
  ];

  const valueCards = [
    {
      icon: <Users className="w-8 h-8" />,
      stat: '30+',
      label: 'Years Translational Vaccine Experience'
    },
    {
      icon: <Award className="w-8 h-8" />,
      stat: 'ISO 9001:2015',
      label: 'Labs; BSL-2/3 Certified'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      stat: '40+',
      label: 'Global Collaborations'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      stat: '4',
      label: 'Candidates to Phase 2'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="protein-network"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>
                Recombinant Vaccines.
                <span className="block" style={{color: 'var(--vn-aqua)'}}>Real-World Impact.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From structure-guided antigens to GMP-grade clinical materials—VaxiNovia accelerates safe, scalable vaccines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Partner with VaxiNovia <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/strategy" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Explore the Zika Program
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1668600372069-e39ec2ab28af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNoJTIwbGFib3JhdG9yeXxlbnwwfHx8fDE3NjI0MTg1MTZ8MA&ixlib=rb-4.1.0&q=85"
                alt="VaxiNovia Laboratory"
                className="rounded-2xl shadow-2xl floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Strips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, index) => (
              <div key={index} className="card text-center stat-item" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {card.icon}
                </div>
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{card.stat}</div>
                <div className="text-gray-600">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program - Zika */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-primary mb-4">Featured Program</div>
              <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>ZIKAvia™ Vaccine</h2>
              <p className="text-lg text-gray-700 mb-6">
                Chimeric E + NS1 recombinant antigen with optimized adjuvant. Preclinical potency demonstrated with exceptional neutralizing antibody titers (PRNT₅₀ > 1:6400 in NHP).
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Phase 1–2 pathway in motion with strong backing from EA-RIVAC, Sanofi, and institutional partners. Addressing a critical global health need with no currently licensed vaccine.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: 'var(--vn-aqua)'}}>USD 9M</div>
                  <div className="text-sm text-gray-600">Total Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: 'var(--vn-aqua)'}}>6 Years</div>
                  <div className="text-sm text-gray-600">Development Plan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: 'var(--vn-aqua)'}}>Phase 2</div>
                  <div className="text-sm text-gray-600">Target Milestone</div>
                </div>
              </div>
              <Link to="/strategy" className="btn-primary inline-flex items-center gap-2">
                See Strategy & Milestones <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707863081130-7048e715688f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3RydWN0dXJlfGVufDB8fHx8MTc2MjQxODU4Mnww&ixlib=rb-4.1.0&q=85"
                alt="Protein Structure"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Trusted by Global Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center w-32 h-24 card">
                <div className="text-2xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{partner.logo}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/partners" className="text-lg font-medium inline-flex items-center gap-2" style={{color: 'var(--vn-aqua)'}}>
              View All Partners <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Band */}
      <section className="py-16" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€5M/yr</div>
              <div className="text-sm opacity-90">Grant Funding</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€4M</div>
              <div className="text-sm opacity-90">Industrial Contracts</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€3M</div>
              <div className="text-sm opacity-90">Co-funding</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>€12M</div>
              <div className="text-sm opacity-90">Annual Base</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Microscope className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Ready to Partner with VaxiNovia?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Request our comprehensive Zika IMPD/CMC overview and learn how we can collaborate on the next generation of recombinant vaccines.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Request the Zika IMPD/CMC Overview <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};