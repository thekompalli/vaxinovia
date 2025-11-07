import React from 'react';
import { DollarSign, TrendingUp, PieChart, Download } from 'lucide-react';

export const Financing = () => {
  const useOfFunds = [
    { category: 'Preclinical GLP Studies & Assay Validation', amount: 2.0, percentage: 22 },
    { category: 'GMP Process Development & Clinical-Lot Manufacture', amount: 3.0, percentage: 33 },
    { category: 'Phase 1 & Phase 2 Clinical Trials', amount: 3.5, percentage: 39 },
    { category: 'Regulatory, QA, PM & Contingency', amount: 0.5, percentage: 6 }
  ];

  const financingData = [
    {
      timeline: '1.5 yr',
      tasks: 'Development & Scale-up (Analytical testing, Pilot & GMP batches, CMC for IND)',
      vaxinovia: 0.9,
      earivac: 0.9,
      sanofi: 0.9,
      total: 2.7
    },
    {
      timeline: '6 months',
      tasks: 'Preclinical Studies (In vivo immunogenicity, dose finding, GLP toxicology, and challenge studies)',
      vaxinovia: 0.2,
      earivac: 0.2,
      sanofi: 0.2,
      total: 0.6
    },
    {
      timeline: '6 months',
      tasks: 'Process Development & GMP Manufacturing, Regulatory Preparation (Pre-IND / IND / CTA) and initiate Phase I',
      vaxinovia: 0.4,
      earivac: 0.4,
      sanofi: 0.4,
      total: 1.2
    },
    {
      timeline: '1 year',
      tasks: 'Phase I Clinical Trial (safety & dosage)',
      vaxinovia: 0.4,
      earivac: 0.4,
      sanofi: 0.4,
      total: 1.2
    },
    {
      timeline: '2 years',
      tasks: 'Phase II Clinical Trial (100-300) Immunogenicity Analysis',
      vaxinovia: 0.9,
      earivac: 0.9,
      sanofi: 0.9,
      total: 2.7
    },
    {
      timeline: '6 months',
      tasks: 'Phase II Clinical Trial completion; data analysis & reporting',
      vaxinovia: 0.2,
      earivac: 0.2,
      sanofi: 0.2,
      total: 0.6
    }
  ];

  const totalFunding = financingData.reduce((sum, year) => sum + year.total, 0);
  const totalBySource = {
    vaxinovia: financingData.reduce((sum, year) => sum + year.vaxinovia, 0),
    earivac: financingData.reduce((sum, year) => sum + year.earivac, 0),
    sanofi: financingData.reduce((sum, year) => sum + year.sanofi, 0)
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Financing Plan</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive 6-year funding strategy totaling USD {totalFunding.toFixed(1)}M, with balanced contributions from VaxiNovia, EA-RIVAC, and strategic partner Sanofi.
            </p>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Use of Funds: USD 9M Total</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              {useOfFunds.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold flex-1" style={{color: 'var(--vn-deep-indigo)'}}>{item.category}</h3>
                    <span className="text-xl font-bold ml-4" style={{color: 'var(--vn-aqua)'}}>USD {item.amount}M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full" 
                      style={{backgroundColor: 'var(--vn-aqua)', width: `${item.percentage}%`}}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.percentage}% of total budget</div>
                </div>
              ))}
            </div>
            <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
              <h3 className="text-2xl font-bold mb-6">Funding Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="opacity-90">EA-RIVAC Co-Funding:</span>
                  <span className="text-2xl font-bold" style={{color: 'var(--vn-aqua)'}}>USD 3M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">VaxiNovia Investment:</span>
                  <span className="text-2xl font-bold" style={{color: 'var(--vn-aqua)'}}>USD 3M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Strategic Partner (Sanofi):</span>
                  <span className="text-2xl font-bold" style={{color: 'var(--vn-aqua)'}}>USD 3M</span>
                </div>
                <div className="border-t border-white border-opacity-20 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total Program:</span>
                    <span className="text-3xl font-bold" style={{color: 'var(--vn-aqua)'}}>USD 9M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Overview */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <DollarSign className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>USD {totalBySource.vaxinovia.toFixed(1)}M</div>
              <div className="text-gray-600 mb-2">VaxiNovia S.A.</div>
              <div className="text-sm text-gray-500">{((totalBySource.vaxinovia / totalFunding) * 100).toFixed(0)}% of total funding</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>USD {totalBySource.earivac.toFixed(1)}M</div>
              <div className="text-gray-600 mb-2">EA-RIVAC</div>
              <div className="text-sm text-gray-500">{((totalBySource.earivac / totalFunding) * 100).toFixed(0)}% of total funding</div>
            </div>
            <div className="card text-center">
              <DollarSign className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>USD {totalBySource.sanofi.toFixed(1)}M</div>
              <div className="text-gray-600 mb-2">Sanofi</div>
              <div className="text-sm text-gray-500">{((totalBySource.sanofi / totalFunding) * 100).toFixed(0)}% of total funding</div>
            </div>
          </div>

          <div className="card" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white', textAlign: 'center'}}>
            <PieChart className="w-12 h-12 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
            <div className="text-5xl font-bold mb-2">USD {totalFunding.toFixed(1)}M</div>
            <div className="text-xl opacity-90">Total Program Funding Over 6 Years</div>
          </div>
        </div>
      </section>

      {/* Annual Budget Table */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Annual Tasks & Budget</h2>
          <div className="card overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Timeline</th>
                  <th>Key Tasks</th>
                  <th className="text-right">VaxiNovia</th>
                  <th className="text-right">EA-RIVAC</th>
                  <th className="text-right">Sanofi</th>
                  <th className="text-right">Total (USD M)</th>
                </tr>
              </thead>
              <tbody>
                {financingData.map((row, index) => (
                  <tr key={index}>
                    <td className="font-bold">{row.timeline}</td>
                    <td>{row.tasks}</td>
                    <td className="text-right">${row.vaxinovia.toFixed(1)}M</td>
                    <td className="text-right">${row.earivac.toFixed(1)}M</td>
                    <td className="text-right">${row.sanofi.toFixed(1)}M</td>
                    <td className="text-right font-bold">${row.total.toFixed(1)}M</td>
                  </tr>
                ))}
                <tr style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
                  <td className="font-bold" colSpan="2">TOTAL</td>
                  <td className="text-right font-bold">${totalBySource.vaxinovia.toFixed(1)}M</td>
                  <td className="text-right font-bold">${totalBySource.earivac.toFixed(1)}M</td>
                  <td className="text-right font-bold">${totalBySource.sanofi.toFixed(1)}M</td>
                  <td className="text-right font-bold">${totalFunding.toFixed(1)}M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Funding Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Key Funding Milestones</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="badge badge-primary mb-4">Years 1-2</div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>Preclinical & Regulatory</h3>
              <p className="text-gray-700 mb-4">USD 1.5M investment in GLP toxicology, process optimization, and regulatory dossier preparation for Phase 1 CTA submission.</p>
              <div className="text-sm text-gray-600">
                <strong>Key Deliverables:</strong> IND/CTA filing, clinical material production, safety data package
              </div>
            </div>
            <div className="card">
              <div className="badge badge-primary mb-4">Years 3-4</div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>Phase 1 Clinical</h3>
              <p className="text-gray-700 mb-4">USD 3.6M for dose-escalation safety trials, immunogenicity assessment, and Phase 2 preparation.</p>
              <div className="text-sm text-gray-600">
                <strong>Key Deliverables:</strong> Safety profile, preliminary immunogenicity data, dose selection for Phase 2
              </div>
            </div>
            <div className="card">
              <div className="badge badge-primary mb-4">Years 5-6</div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>Phase 2 Clinical</h3>
              <p className="text-gray-700 mb-4">USD 3.9M for expanded immunogenicity trials, adjuvant optimization, and comprehensive data analysis.</p>
              <div className="text-sm text-gray-600">
                <strong>Key Deliverables:</strong> Proof-of-concept efficacy, Phase 3 design, regulatory submission package
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Cost Allocation Overview</h2>
          <div className="card">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>Clinical Operations</span>
                  <span className="font-bold" style={{color: 'var(--vn-aqua)'}}>45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{backgroundColor: 'var(--vn-aqua)', width: '45%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>Manufacturing & CMC</span>
                  <span className="font-bold" style={{color: 'var(--vn-aqua)'}}>30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{backgroundColor: 'var(--vn-aqua)', width: '30%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>Preclinical Studies</span>
                  <span className="font-bold" style={{color: 'var(--vn-aqua)'}}>15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{backgroundColor: 'var(--vn-aqua)', width: '15%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold" style={{color: 'var(--vn-deep-indigo)'}}>Regulatory & QA</span>
                  <span className="font-bold" style={{color: 'var(--vn-aqua)'}}>10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{backgroundColor: 'var(--vn-aqua)', width: '10%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Request Detailed Cost Breakdown</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download our comprehensive financial model with detailed cost breakdowns, milestone payments, and risk mitigation strategies.
          </p>
          <button 
            onClick={() => {
              const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
              window.open(`${BACKEND_URL}/api/downloads/financing`, '_blank');
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Financial Package
          </button>
        </div>
      </section>
    </div>
  );
};