import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, TrendingUp, Mail } from 'lucide-react';

export const About = () => {
  const leadership = [
    {
      name: 'Dr. Rao Zubair Khaliq',
      credentials: 'MD, DPhil (Oncology, University of Oxford)',
      role: 'Chief Executive Officer / Principal Investigator',
      fte: '0.5 FTE',
      experience: '>20 years in translational vaccine and immuno-oncology programs',
      responsibilities: 'Strategic oversight, high-level scientific decisions, regulatory strategy sign-off and primary sponsor representative.',
      achievement: 'Led Rvexia® from discovery to licensing',
      image: 'https://customer-assets.emergentagent.com/job_vaxinovia-vaccine/artifacts/o8nwqzih_Rao.jpg'
    },
    {
      name: 'Dr. Meije Forest',
      credentials: 'DPharm, DPhil (Stanford University)',
      role: 'Legal Representative / Head of Regulatory & Legal Affairs',
      fte: '0.25 FTE',
      experience: 'Expert in corporate governance and IP strategy',
      responsibilities: 'Corporate governance, contract negotiation, IP strategy, regulatory compliance, and submissions oversight.',
      achievement: 'Secured 28 active patents and 3 major licensing deals',
      image: 'https://customer-assets.emergentagent.com/job_vaxinovia-vaccine/artifacts/82fvmcrc_Meije.jpg'
    },
    {
      name: 'Dr. Huma Liaqat',
      credentials: 'MD, DPhil (University of Basel)',
      role: 'Clinical Project Manager',
      fte: '0.8 FTE',
      experience: 'Experienced in Phase 1/2 vaccine trials',
      responsibilities: 'CRO oversight, site selection, eTMF and GCP auditing. Responsible for trial execution, safety reporting and liaising with clinical sites.',
      achievement: 'Successfully managed 4 clinical programs to Phase 2',
      image: 'https://customer-assets.emergentagent.com/job_vaxinovia-vaccine/artifacts/3rnhcbfp_Huma.jpg'
    },
    {
      name: 'Dr. Suvroto Kormokar',
      credentials: 'Postdoc (Baylor College of Medicine)',
      role: 'Senior Scientist (Immunoinformatics & Antigen Stabilization)',
      fte: '1.0 FTE',
      experience: 'Expert in computational structural biology',
      responsibilities: 'Leads ASIP® computational/structural design, antigen optimization and preclinical immunogenicity strategy.',
      achievement: 'Developed ASIP® platform and VaxiPredict™ software',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Krishna',
      credentials: 'PhD (INSEAD)',
      role: 'Chief Financial Officer',
      fte: '0.25 FTE',
      experience: 'Financial strategy and fundraising expert',
      responsibilities: 'Budget oversight, resource allocation, fundraising liaison, and financial reporting to funders.',
      achievement: 'Secured €12M annual funding from diverse sources',
      image: 'https://customer-assets.emergentagent.com/job_vaxinovia-vaccine/artifacts/oo26mnbo_Krishna.jpg'
    },
    {
      name: 'Dr. Noof Javed',
      credentials: 'PhD (MIT)',
      role: 'Research Scientist / Translational Lead',
      fte: '1.0 FTE',
      experience: 'Specialist in preclinical immunology',
      responsibilities: 'Coordinates preclinical assays, GLP study execution, and assay validation (ELISA, PRNT, ELISpot). Responsible for data integrity and technical documentation.',
      achievement: 'Established GLP-compliant immunology laboratory',
      image: 'https://customer-assets.emergentagent.com/job_vaxinovia-vaccine/artifacts/e08crp8o_Noor.jpg'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '200+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8" />, value: '70', label: 'Scientists' },
    { icon: <Globe className="w-8 h-8" />, value: '30+', label: 'Years Experience' },
    { icon: <TrendingUp className="w-8 h-8" />, value: 'USD 9M', label: 'Total Program Funding' }
  ];

  const values = [
    {
      title: 'Scientific Excellence',
      description: 'Commitment to rigorous science, peer-reviewed research, and evidence-based vaccine development'
    },
    {
      title: 'Patient-Centered Innovation',
      description: 'Developing vaccines that address critical unmet medical needs and improve global health outcomes'
    },
    {
      title: 'Regulatory Integrity',
      description: 'Maintaining highest standards of compliance with EMA, WHO, and international regulatory guidelines'
    },
    {
      title: 'Collaborative Partnership',
      description: 'Building strong relationships with academic institutions, industry partners, and funding organizations'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>About VaxiNovia</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Founded in 1995 in Lyon, France, VaxiNovia S.A. is a leading biotechnology company specializing in recombinant vaccine development. Our mission is to accelerate safe, scalable vaccines from structure-guided antigens to GMP-grade clinical materials.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With over 30 years of collective expertise, our team has advanced four subunit vaccine candidates to Phase 2, secured €12M in annual funding, and established 40+ global collaborations across Europe, North America, and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{background: 'linear-gradient(135deg, #2B4C7E 0%, #29B7C5 100%)', color: 'white'}}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                <TrendingUp className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-2xl leading-relaxed mb-6 opacity-95">
                To transform global health security by delivering breakthrough vaccines that protect billions from emerging infectious diseases—faster, safer, and more equitably than ever before.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2030</div>
                  <div className="text-sm opacity-90">5+ licensed vaccines in our portfolio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8 Countries</div>
                  <div className="text-sm opacity-90">Target markets for ZIKAvia™</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Leadership</div>
                  <div className="text-sm opacity-90">Top 3 in structure-guided vaccine design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Our multidisciplinary leadership combines decades of vaccine development expertise with robust scientific and operational capabilities.
            </p>
          </div>

          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover rounded-lg"
                      style={{objectPosition: 'center top'}}
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>{leader.name}</h3>
                        <div className="text-sm mb-2" style={{color: 'var(--vn-aqua)'}}>{leader.credentials}</div>
                        <div className="text-lg font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{leader.role}</div>
                      </div>
                      <div className="badge badge-primary">{leader.fte}</div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Experience:</div>
                        <p className="text-gray-700">{leader.experience}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>Key Responsibilities:</div>
                        <p className="text-gray-700">{leader.responsibilities}</p>
                      </div>

                      <div className="flex items-start gap-2">
                        <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
                        <div>
                          <span className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>Key Achievement: </span>
                          <span className="text-gray-700">{leader.achievement}</span>
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

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Our Facility</h2>
              <p className="text-lg text-gray-700 mb-6">
                Located in Lyon Science Park, our 2,500 m² integrated R&D and GMP facility houses state-of-the-art laboratories, pilot bioprocessing suites, and comprehensive analytical capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                  <span className="text-gray-700">BSL-2/3 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                  <span className="text-gray-700">GMP Pilot Manufacturing</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxHTVAlMjBmYWNpbGl0eXxlbnwwfHx8fDE3NjI0MTg1NTR8MA&ixlib=rb-4.1.0&q=85"
                alt="VaxiNovia Facility"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in partnering with VaxiNovia or learning more about career opportunities? We welcome inquiries from scientific collaborators, industry partners, and funding organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <Link to="/partners" className="btn-secondary">View Partnerships</Link>
          </div>
        </div>
      </section>
    </div>
  );
};