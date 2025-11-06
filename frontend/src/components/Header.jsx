import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/experience', label: 'Institutional Experience' },
    { path: '/infrastructure', label: 'Infrastructure' },
    { path: '/innovation', label: 'Innovation & IP' },
    { path: '/strategy', label: 'Vaccine Strategy' },
    { path: '/staffing', label: 'Staffing & Governance' },
    { path: '/financing', label: 'Financing Plan' },
    { path: '/results', label: 'Expected Results' },
    { path: '/projects', label: 'Projects & Portfolio' },
    { path: '/publications', label: 'Publications & Patents' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg" style={{backgroundColor: 'var(--vn-deep-indigo)'}}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8L28 14V26L20 32L12 26V14L20 8Z" fill="var(--vn-aqua)" />
                <circle cx="20" cy="20" r="4" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>VaxiNovia</div>
              <div className="text-xs" style={{color: 'var(--vn-aqua)'}}>S.A.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                {link.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-gray-50" style={{color: 'var(--vn-deep-indigo)'}}>
                More <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navLinks.slice(6).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    style={{color: 'var(--vn-deep-indigo)'}}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary">
              Request Dossier
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md"
            style={{color: 'var(--vn-deep-indigo)'}}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  isActive(link.path) ? 'text-white' : ''
                }`}
                style={isActive(link.path) ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 mx-4 text-center btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Request Dossier
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};