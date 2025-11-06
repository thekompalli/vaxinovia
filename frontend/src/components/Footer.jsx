import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg" style={{backgroundColor: 'var(--vn-deep-indigo)'}}>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8L28 14V26L20 32L12 26V14L20 8Z" fill="var(--vn-aqua)" />
                  <circle cx="20" cy="20" r="4" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold" style={{color: 'var(--vn-deep-indigo)'}}>VaxiNovia</div>
                <div className="text-xs" style={{color: 'var(--vn-aqua)'}}>S.A.</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Recombinant Vaccines. Real-World Impact.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'var(--vn-aqua)'}} />
              <span>Lyon Science Park, 2500m² Facility<br />69007 Lyon, France</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Phone className="w-4 h-4" style={{color: 'var(--vn-aqua)'}} />
              <span>+33 (0) 4 72 XX XX XX</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" style={{color: 'var(--vn-aqua)'}} />
              <span>contact@vaxinovia.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Research & Development</h3>
            <ul className="space-y-2">
              <li><Link to="/experience" className="text-sm text-gray-600 hover:text-gray-900">Institutional Experience</Link></li>
              <li><Link to="/infrastructure" className="text-sm text-gray-600 hover:text-gray-900">Infrastructure</Link></li>
              <li><Link to="/innovation" className="text-sm text-gray-600 hover:text-gray-900">Innovation & IP</Link></li>
              <li><Link to="/strategy" className="text-sm text-gray-600 hover:text-gray-900">Vaccine Strategy</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-600 hover:text-gray-900">Projects & Portfolio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Company</h3>
            <ul className="space-y-2">
              <li><Link to="/staffing" className="text-sm text-gray-600 hover:text-gray-900">Staffing & Governance</Link></li>
              <li><Link to="/financing" className="text-sm text-gray-600 hover:text-gray-900">Financing Plan</Link></li>
              <li><Link to="/results" className="text-sm text-gray-600 hover:text-gray-900">Expected Results</Link></li>
              <li><Link to="/partners" className="text-sm text-gray-600 hover:text-gray-900">Partners</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Certifications & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Certifications</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="text-sm text-gray-600">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="text-sm text-gray-600">BSL-2/3 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                <span className="text-sm text-gray-600">GMP Compliant</span>
              </div>
            </div>
            
            <h4 className="font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2"
                style={{'--tw-ring-color': 'var(--vn-aqua)'}}
              />
              <button className="px-4 py-2 text-sm font-medium text-white rounded-md" style={{backgroundColor: 'var(--vn-aqua)'}}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 VaxiNovia S.A. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/legal/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="/legal/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
              <Link to="/legal/compliance" className="text-sm text-gray-600 hover:text-gray-900">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};