import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Target, Users, Award, CheckCircle, ArrowRight, ThumbsUp, MessageSquare } from 'lucide-react';
import ZikaMap from '../components/ZikaMap';
import { toast } from '../components/ui/sonner';

export const Investment = () => {
  const [liked, setLiked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLike = async () => {
    if (!liked) {
      setLiked(true);
      toast.success('Thank you for your interest!');
      
      // Send like notification to Formspree
      try {
        await fetch('https://formspree.io/f/mblpnaaa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'Investment Page Like',
            message: 'A visitor liked the Investment Opportunity page',
            timestamp: new Date().toISOString()
          }),
        });
      } catch (error) {
        console.error('Error sending like notification:', error);
      }
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mblpnaaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Investment Page Comment',
          name: formData.name,
          email: formData.email,
          comment: formData.comment,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast.success('Thank you for your feedback!');
        setFormData({ name: '', email: '', comment: '' });
        setShowCommentForm(false);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const useOfFunds = [
    { category: 'Preclinical GLP Studies & Assay Validation', amount: 2.0, percentage: 22 },
    { category: 'GMP Process Development & Clinical-Lot Manufacture', amount: 3.0, percentage: 33 },
    { category: 'Phase 1 & Phase 2 Clinical Trials', amount: 3.5, percentage: 39 },
    { category: 'Regulatory, QA, PM & Contingency', amount: 0.5, percentage: 6 }
  ];

  const financialProjections = [
    { year: 'Year 0-2', activity: 'R&D & CMC Spend', cashFlow: -6.5, description: 'GLP studies, process development, Phase 1 initiation' },
    { year: 'Year 3', activity: 'Phase 1 Completion', cashFlow: -1.0, description: 'Safety & dose-finding completed' },
    { year: 'Year 4', activity: 'Phase 2 Completion', cashFlow: -0.5, description: 'Immunogenicity validation, licensing discussions begin' },
    { year: 'Year 5', activity: 'Licensing & Commercialization', cashFlow: 7.5, description: 'Upfront licensing $5-10M + royalties $1-3M/yr' }
  ];

  const revenueStreams = [
    {
      title: 'Licensing & Milestone Payments',
      description: 'Primary revenue after Phase 2: upfront licensing fees, development milestones, and sales royalties from industrial partners',
      timing: 'Year 4-5+',
      potential: 'USD 5-10M upfront + royalties'
    },
    {
      title: 'Government Procurement',
      description: 'Direct sales to national immunization programs and international health agencies (WHO, PAHO, Gavi)',
      timing: 'Post-approval',
      potential: 'Subject to commercialization partnerships'
    },
    {
      title: 'Platform Services',
      description: 'Contract R&D: antigen design, immunoassay development, and ASIP® platform licensing to generate near-term revenue',
      timing: 'Ongoing',
      potential: 'USD 500K-1M annually'
    }
  ];

  const customerSegments = [
    {
      segment: 'National Ministries of Health',
      size: 'Tens to hundreds of millions at-risk',
      need: 'Immunization programs in endemic tropical/subtropical regions'
    },
    {
      segment: 'International Health Agencies',
      size: 'WHO, PAHO, Gavi procurement',
      need: 'Epidemic preparedness and maternal health protection'
    },
    {
      segment: 'Travel Health Market',
      size: 'Millions of travelers annually',
      need: 'Pre-travel vaccination for endemic zone visitors'
    },
    {
      segment: 'Industrial Partners',
      size: 'Global pharmaceutical companies',
      need: 'De-risked vaccine assets for licensing and scale-up'
    }
  ];

  const achievements = [
    'Preclinical NHP data: PRNT₅₀ > 1:6400 (exceptional neutralizing titers)',
    'Balanced Th1/Th2 immune response; no ADE observed',
    'ASIP® platform validated with 20+ patent families',
    'GMP CDMO partnerships pre-qualified',
    'Core team assembled with 30+ years combined experience',
    'Regulatory pathway mapped (IND/CTA-ready within 36 months)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-deep-indigo)', color: 'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{backgroundColor: 'rgba(77, 212, 230, 0.2)'}}>
              <span className="font-semibold" style={{color: 'var(--vn-aqua)'}}>Investment Opportunity</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">ZIKAvia™ Co-Funding Opportunity</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              USD 9M co-funded program to deliver Phase 1 and Phase 2 proof-of-concept for our stabilized Zika E+NS1 vaccine candidate. Partnership-ready asset addressing a critical global health need with significant commercial potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="font-semibold">USD 3M EA-RIVAC Ask</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="font-semibold">36-Month Timeline</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="font-semibold">USD 1B+ Market</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>The Problem: A Global Health Gap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>0</div>
              <div className="text-gray-600">Licensed Zika Vaccines</div>
              <div className="text-sm text-gray-500 mt-2">Global preparedness gap</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>100M+</div>
              <div className="text-gray-600">At-Risk Population</div>
              <div className="text-sm text-gray-500 mt-2">Tropical/subtropical regions</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>USD 1B+</div>
              <div className="text-gray-600">Market by 2032</div>
              <div className="text-sm text-gray-500 mt-2">Preparedness + travel markets</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{color: 'var(--vn-aqua)'}}>High</div>
              <div className="text-gray-600">Economic Burden</div>
              <div className="text-sm text-gray-500 mt-2">Congenital complications + care costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Target Customer Segments</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our vaccine targets regions with the highest Zika burden and epidemic risk, serving both public health systems and travelers.
          </p>
          
          {/* Interactive World Map */}
          <div className="card mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{color: 'var(--vn-deep-indigo)'}}>
              Global Zika Distribution: Highest-Impact Markets
            </h3>
            <ZikaMap />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {customerSegments.map((customer, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{customer.segment}</h3>
                <div className="mb-2">
                  <span className="font-semibold" style={{color: 'var(--vn-aqua)'}}>Market Size: </span>
                  <span className="text-gray-700">{customer.size}</span>
                </div>
                <div>
                  <span className="font-semibold" style={{color: 'var(--vn-aqua)'}}>Need: </span>
                  <span className="text-gray-700">{customer.need}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Revenue Model</h2>
          <div className="space-y-6">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)'}}>
                    <DollarSign className="w-6 h-6" style={{color: 'var(--vn-aqua)'}} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{stream.title}</h3>
                    <p className="text-gray-700 mb-3">{stream.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <span className="text-sm font-semibold" style={{color: 'var(--vn-aqua)'}}>Timing: </span>
                        <span className="text-sm text-gray-600">{stream.timing}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold" style={{color: 'var(--vn-aqua)'}}>Potential: </span>
                        <span className="text-sm text-gray-600">{stream.potential}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>5-Year Financial Projections</h2>
          <div className="card overflow-x-auto mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Activity</th>
                  <th className="text-right">Net Cash Flow (USD M)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {financialProjections.map((proj, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{proj.year}</td>
                    <td>{proj.activity}</td>
                    <td className={`text-right font-bold ${proj.cashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {proj.cashFlow > 0 ? '+' : ''}{proj.cashFlow.toFixed(1)}
                    </td>
                    <td className="text-sm text-gray-600">{proj.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card" style={{backgroundColor: 'rgba(41, 183, 197, 0.05)'}}>
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Projections are conservative, based on modest licensing deal assumptions and initial royalty ramp. Heavy investment during R&D years (0-3) transitions to licensing monetization post-Phase 2. Detailed line-item assumptions available in financial appendix.
            </p>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--vn-deep-indigo)'}}>Use of Funds: USD 9M Total</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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

      {/* Achievements */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12\" style={{color: 'var(--vn-deep-indigo)'}}>Progress to Date</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-success)'}} />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" style={{color: 'var(--vn-aqua)'}} />
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Ready to Invest in Global Health Impact?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join EA-RIVAC, Sanofi, and VaxiNovia in delivering the world's first licensed Zika vaccine. Download our full investment prospectus or schedule a partnership discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
                window.open(`${BACKEND_URL}/api/downloads/financing`, '_blank');
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Investment Prospectus <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Schedule Partnership Discussion
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-16" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-center mb-4" style={{color: 'var(--vn-deep-indigo)'}}>
              Interested in This Opportunity?
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Let us know what you think! Your feedback helps us understand investor interest.
            </p>
            
            {/* Like and Comment Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  liked 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg transform scale-105' 
                    : 'bg-white border-2 hover:bg-gray-50 text-gray-700'
                }`}
                style={liked ? {} : {borderColor: 'var(--vn-aqua)'}}
              >
                <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>{liked ? 'Liked!' : 'Like This'}</span>
              </button>
              
              <button
                onClick={() => setShowCommentForm(!showCommentForm)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 hover:bg-gray-50 transition-all text-gray-700"
                style={{borderColor: 'var(--vn-aqua)'}}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Leave a Comment</span>
              </button>
            </div>

            {/* Comment Form */}
            {showCommentForm && (
              <form onSubmit={handleCommentSubmit} className="space-y-4 mt-8 pt-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                    Your Comment *
                  </label>
                  <textarea
                    id="comment"
                    required
                    rows="4"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Share your thoughts about this investment opportunity..."
                  />
                </div>
                
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowCommentForm(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
