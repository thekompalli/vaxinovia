import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';

export const Publications = () => {
  const [filter, setFilter] = useState('All');

  const items = [
    {
      type: 'Patent',
      title: 'Stabilized Zika E Protein Design Without Pre-Membrane Component',
      id: 'PCT/2020/VA001',
      year: 2020,
      status: 'Granted',
      family: 'VA001'
    },
    {
      type: 'Patent',
      title: 'Self-Assembling Nanoparticle Formulation for CHIKV E2 Antigen',
      id: 'PCT/2021/VA002',
      year: 2021,
      status: 'Granted',
      family: 'VA002'
    },
    {
      type: 'Patent',
      title: 'ASIP® Platform: Structure-Guided Mutagenesis for Antigen Stabilization',
      id: 'PCT/2022/VA003',
      year: 2022,
      status: 'Pending',
      family: 'VA003'
    },
    {
      type: 'Patent',
      title: 'AI-Driven Epitope Mapping and Antigen Optimization System',
      id: 'PCT/2023/VA004',
      year: 2023,
      status: 'Pending',
      family: 'VA004'
    },
    {
      type: 'Patent',
      title: 'Novel Nanoparticle Adjuvant System for Enhanced Cellular Immunity',
      id: 'PCT/2024/VA005',
      year: 2024,
      status: 'Pending',
      family: 'VA005'
    },
    {
      type: 'Publication',
      title: 'Recombinant RSV F-Protein Vaccine Induces Robust Immunity in Elderly Populations',
      id: 'Vaccine. 2023;41(8):1245-1253',
      year: 2023,
      status: 'Published',
      journal: 'Vaccine'
    },
    {
      type: 'Publication',
      title: 'Chimeric Zika Virus E+NS1 Antigen Elicits Broad Neutralizing Antibody Responses',
      id: 'Nature Commun. 2024;15:3421',
      year: 2024,
      status: 'Published',
      journal: 'Nature Communications'
    },
    {
      type: 'Publication',
      title: 'AI-Powered Antigen Design Accelerates Vaccine Development Timelines',
      id: 'Cell Host Microbe. 2024;32(4):567-578',
      year: 2024,
      status: 'Published',
      journal: 'Cell Host & Microbe'
    },
    {
      type: 'Publication',
      title: 'Adjuvant Optimization for Recombinant Viral Vaccines: A Systematic Approach',
      id: 'NPJ Vaccines. 2023;8:142',
      year: 2023,
      status: 'Published',
      journal: 'NPJ Vaccines'
    },
    {
      type: 'Software',
      title: 'VaxiPredict™: AI Platform for Epitope Mapping and Stability Prediction',
      id: 'Software v2.4',
      year: 2024,
      status: 'Registered',
      description: 'Proprietary software'
    },
    {
      type: 'Software',
      title: 'ImmunoSim™: Adjuvant-Antigen Compatibility Modeling System',
      id: 'Software v1.8',
      year: 2023,
      status: 'Registered',
      description: 'Proprietary software'
    }
  ];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.type === filter);
  const filters = ['All', 'Patent', 'Publication', 'Software'];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Publications & Patents</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our intellectual property portfolio and scientific publications demonstrate our commitment to innovation and advancing vaccine science.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>28</div>
              <div className="text-gray-600">Total Patents</div>
              <div className="text-sm text-gray-500 mt-1">15 granted, 13 pending</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>11</div>
              <div className="text-gray-600">Publications</div>
              <div className="text-sm text-gray-500 mt-1">Peer-reviewed journals</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>5</div>
              <div className="text-gray-600">Patent Families</div>
              <div className="text-sm text-gray-500 mt-1">International protection</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>2</div>
              <div className="text-gray-600">Software Platforms</div>
              <div className="text-sm text-gray-500 mt-1">Proprietary technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & List */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <Filter className="w-5 h-5" style={{color: 'var(--vn-deep-indigo)'}} />
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === f ? 'text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                  style={
                    filter === f
                      ? { backgroundColor: 'var(--vn-aqua)' }
                      : { color: 'var(--vn-deep-indigo)' }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Items Table */}
          <div className="card overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Title</th>
                  <th>ID / Reference</th>
                  <th className="text-center">Year</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span className={`badge ${
                        item.type === 'Patent' ? 'badge-primary' :
                        item.type === 'Publication' ? 'badge-success' :
                        'badge-warning'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="font-medium">{item.title}</td>
                    <td className="text-sm text-gray-600">{item.id}</td>
                    <td className="text-center">{item.year}</td>
                    <td className="text-center">
                      <span className={`badge ${
                        item.status === 'Granted' || item.status === 'Published' || item.status === 'Registered'
                          ? 'badge-success'
                          : 'badge-warning'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <button className="inline-flex items-center gap-1 text-sm" style={{color: 'var(--vn-aqua)'}}>
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Patent Family Range Note */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{backgroundColor: 'rgba(41, 183, 197, 0.05)'}}>
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
              <div>
                <h3 className="font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Patent Portfolio Range</h3>
                <p className="text-gray-700">
                  Our complete patent portfolio spans from <strong>WO/2016/112233</strong> through <strong>WO/2024/005476</strong>, covering innovative approaches in antigen design, adjuvant formulation, nanoparticle delivery systems, and AI-powered vaccine optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};