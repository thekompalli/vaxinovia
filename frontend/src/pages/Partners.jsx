import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Globe, Award, TrendingUp, Users, Building2 } from 'lucide-react';

export const Partners = () => {
  const partners = [
    {
      name: 'Sanofi Pasteur',
      type: 'Strategic Partner',
      focus: 'Clinical development, commercial expertise, global distribution',
      logo: 'SP',
      engagement: 'Co-funding ZIKAvia™ development program'
    },
    {
      name: 'GSK',
      type: 'Research Collaboration',
      focus: 'Adjuvant technology, formulation optimization',
      logo: 'GSK',
      engagement: 'Adjuvant screening and optimization studies'
    },
    {
      name: 'Bio-Mérieux',
      type: 'Diagnostic Partnership',
      focus: 'Immunoassay development, potency testing',
      logo: 'BM',
      engagement: 'Analytical methods for vaccine characterization'
    },
    {
      name: 'European Commission',
      type: 'Funding Partner',
      focus: 'Horizon Europe, EIC Accelerator programs',
      logo: 'EC',
      engagement: 'IMPACT-Vax (€6.2M), PROTEO-VIR (€4.5M)'
    },
    {
      name: 'Gates Foundation',
      type: 'Grant Funding',
      focus: 'Global health initiatives, vaccine access',
      logo: 'GF',
      engagement: 'Grant funding for neglected disease vaccines'
    }
  ];

  const partnershipTypes = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Co-Development',
      description: 'Joint vaccine development programs with shared IP and milestone payments'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Licensing',
      description: 'Technology licensing for platform applications and commercial rights'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Manufacturing',
      description: 'CDMO partnerships for GMP production and scale-up services'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Research Collaboration',
      description: 'Academic and industry partnerships for technology advancement'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Partners</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              VaxiNovia's success is built on strong partnerships with leading pharmaceutical companies, research institutions, and funding organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <Globe className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>40+</div>
              <div className="text-gray-600">Global Partners</div>
            </div>
            <div className="card text-center">
              <Award className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>3</div>
              <div className="text-gray-600">Major Tech-Transfer Deals</div>
            </div>
            <div className="card text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>€24M</div>
              <div className="text-gray-600">Licensing Revenue</div>
            </div>
            <div className="card text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>11</div>
              <div className="text-gray-600">Joint Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Image */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Partnership Collaboration"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Our Strategic Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold" style={{backgroundColor: 'var(--vn-aqua)', color: 'white'}}>
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{partner.name}</h3>
                    <div className="text-sm" style={{color: 'var(--vn-aqua)'}}>{partner.type}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Focus:</strong> {partner.focus}
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Engagement:</strong> {partner.engagement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Partnership Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Team Collaboration"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b"
              alt="Professional Meeting"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Partnership Success"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-3xl font-bold mb-6">Propose a Partnership</h2>
          <p className="text-xl opacity-90 mb-8">
            We welcome discussions with pharmaceutical companies, research institutions, funding organizations, and manufacturing partners interested in advancing vaccine development.
          </p>
          <Link to="/contact" className="btn-primary">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};