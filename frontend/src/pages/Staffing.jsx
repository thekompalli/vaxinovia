import React from 'react';
import { Users, Award, TrendingUp, Shield, GraduationCap } from 'lucide-react';

export const Staffing = () => {
  const leadership = [
    {
      name: 'Dr. Rao Zubair Khaliq',
      role: 'CEO / Principal Investigator',
      credentials: 'MD, DPhil Oxford',
      experience: '20+ years in vaccine development; led Rvexia® to successful licensing',
      fte: '0.5 FTE'
    },
    {
      name: 'Dr. Meije Forest',
      role: 'Head of Legal & Compliance',
      credentials: 'DPharm, DPhil Stanford',
      experience: 'Corporate governance, IP strategy, regulatory affairs leadership',
      fte: '0.25 FTE'
    },
    {
      name: 'Dr. Huma Liaqat',
      role: 'Clinical Project Manager',
      credentials: 'MD, DPhil Basel',
      experience: 'Phase 1/2 operations, CRO oversight, clinical site management',
      fte: '0.8 FTE'
    },
    {
      name: 'Dr. Suvroto Kormokar',
      role: 'Senior Scientist',
      credentials: 'Postdoc Baylor',
      experience: 'ASIP® platform development, antigen design, immunogenicity assessment',
      fte: '1.0 FTE'
    },
    {
      name: 'Dr. Krishna',
      role: 'Chief Financial Officer',
      credentials: 'PhD INSEAD',
      experience: 'Budget management, financial reporting, grant administration',
      fte: '0.25 FTE'
    },
    {
      name: 'Dr. Noof Javed',
      role: 'Translational Lead',
      credentials: 'PhD MIT',
      experience: 'Preclinical assay development, GLP validation, immunological profiling',
      fte: '1.0 FTE'
    }
  ];

  const teamRoles = [
    { role: 'Principal Investigator (CEO)', count: 1, fte: 0.5 },
    { role: 'Head of Legal', count: 1, fte: 0.25 },
    { role: 'Clinical PM', count: 1, fte: 0.8 },
    { role: 'Senior Scientist', count: 1, fte: 1.0 },
    { role: 'CFO', count: 1, fte: 0.25 },
    { role: 'Translational Lead', count: 1, fte: 1.0 },
    { role: 'Process Development Lead', count: 1, fte: 1.0 },
    { role: 'Regulatory Affairs Manager', count: 1, fte: 0.8 },
    { role: 'QA Manager (GMP)', count: 1, fte: 1.0 },
    { role: 'Clinical Research Associates', count: 2, fte: 2.0 },
    { role: 'Research Scientists', count: 3, fte: 3.0 },
    { role: 'Lab Technicians', count: 4, fte: 4.0 },
    { role: 'QC Analysts', count: 2, fte: 2.0 },
  ];

  const totalFTE = teamRoles.reduce((sum, role) => sum + role.fte, 0);

  const kpis = [
    { label: 'Staffing Fill Rate', target: '≥95%', icon: <Users className="w-5 h-5" /> },
    { label: 'Senior Time-to-Hire', target: '≤90 days', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Training Completion', target: '100%', icon: <GraduationCap className="w-5 h-5" /> },
    { label: 'Turnover Rate', target: '<10%', icon: <Shield className="w-5 h-5" /> },
    { label: 'Critical Findings Pre-Audit', target: '0', icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Staffing & Governance</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our multidisciplinary team combines decades of vaccine development expertise with robust governance structures to ensure project success and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="card">
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{backgroundColor: 'var(--vn-aqua)', color: 'white'}}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--vn-deep-indigo)'}}>{leader.name}</h3>
                <div className="text-sm font-semibold mb-2" style={{color: 'var(--vn-aqua)'}}>{leader.role}</div>
                <div className="text-sm text-gray-600 mb-2">{leader.credentials}</div>
                <p className="text-sm text-gray-700 mb-3">{leader.experience}</p>
                <div className="badge badge-primary">{leader.fte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Project Team */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Core Project Team</h2>
          <div className="card overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th className="text-center">Count</th>
                  <th className="text-center">Total FTE</th>
                </tr>
              </thead>
              <tbody>
                {teamRoles.map((role, index) => (
                  <tr key={index}>
                    <td className="font-medium">{role.role}</td>
                    <td className="text-center">{role.count}</td>
                    <td className="text-center">{role.fte.toFixed(2)}</td>
                  </tr>
                ))}
                <tr style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
                  <td className="font-bold">TOTAL</td>
                  <td className="text-center font-bold">{teamRoles.reduce((sum, r) => sum + r.count, 0)}</td>
                  <td className="text-center font-bold">{totalFTE.toFixed(2)} FTE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Governance Structure</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Steering Committee</h3>
              <p className="text-gray-700 mb-4">
                Comprises CEO, Head of Legal, CFO, Clinical PM, and external industry representative. Meets monthly to review milestones, budget, and strategic direction.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strategic decision-making authority</li>
                <li>• Risk assessment and mitigation</li>
                <li>• Resource allocation oversight</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Project Management Office</h3>
              <p className="text-gray-700 mb-4">
                Weekly KPI tracking with monthly reporting to EA-RIVAC and funding partners. Ensures timeline adherence and milestone achievement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Timeline and milestone tracking</li>
                <li>• Budget monitoring and reporting</li>
                <li>• Cross-functional coordination</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>IP & Ethics Committee</h3>
              <p className="text-gray-700 mb-4">
                Reviews patentability assessments, publication strategies, Nagoya Protocol compliance, and GDPR adherence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Invention disclosure review</li>
                <li>• Ethical compliance oversight</li>
                <li>• Data protection monitoring</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>External Scientific Advisory Board</h3>
              <p className="text-gray-700 mb-4">
                Five independent experts in virology, CMC, clinical development, regulatory affairs, and public health. Provides strategic guidance biannually.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Scientific strategy review</li>
                <li>• Technical troubleshooting</li>
                <li>• Best practice recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Surge */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Capacity & Partnerships</h2>
          <div className="card">
            <p className="text-lg text-gray-700 mb-6">
              Beyond our core team of 200 staff, VaxiNovia maintains pre-qualified partnerships with leading CRO and CDMO organizations for surge capacity and specialized services:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>GenPro S.A.</h4>
                <p className="text-gray-600">Fill-finish operations and large-scale GMP manufacturing</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>Biovionics AG</h4>
                <p className="text-gray-600">GLP toxicology studies and preclinical safety assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Key Performance Indicators</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="kpi-chip">
                <div style={{color: 'var(--vn-aqua)'}}>{kpi.icon}</div>
                <div>
                  <div className="text-xs text-gray-600">{kpi.label}</div>
                  <div className="font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{kpi.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};