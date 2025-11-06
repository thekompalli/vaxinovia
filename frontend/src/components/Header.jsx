import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  const navStructure = {
    main: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' }
    ],
    science: {
      label: 'Science & Technology',
      items: [
        { path: '/experience', label: 'Institutional Experience', desc: '30+ years in vaccine development' },
        { path: '/infrastructure', label: 'Infrastructure', desc: 'ISO 9001:2015 certified facility' },
        { path: '/innovation', label: 'Innovation & IP', desc: '28 active patents, ASIP® platform' },
        { path: '/strategy', label: 'Vaccine Strategy', desc: 'Development process & QA/RA' }
      ]
    },
    programs: {
      label: 'Programs',
      items: [
        { path: '/projects', label: 'Projects Portfolio', desc: 'ZIKAvia™, Rvexia®, NeoMenA®' },
        { path: '/results', label: 'Expected Results', desc: 'Clinical outcomes & impact' },
        { path: '/publications', label: 'Publications & Patents', desc: 'Scientific publications & IP' }
      ]
    },
    investors: {
      label: 'Investors',
      items: [
        { path: '/investment', label: 'Investment Opportunity', desc: 'USD 9M co-funding program' },
        { path: '/financing', label: 'Financing Plan', desc: '6-year financial strategy' },
        { path: '/staffing', label: 'Team & Governance', desc: 'Leadership & organizational structure' }
      ]
    },
    partners: [
      { path: '/partners', label: 'Partners' }
    ],
    contact: [
      { path: '/contact', label: 'Contact' }
    ]
  };

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
              <div className="text-xs" style={{color: 'var(--vn-aqua)'}}>Engineering Immunity. Empowering Life.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main Links */}
            {navStructure.main.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path) ? 'text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={isActive(link.path) ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Science & Technology Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('science')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all" style={{color: 'var(--vn-deep-indigo)'}}>
                {navStructure.science.label} <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'science' && (
                <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 z-50">
                  {navStructure.science.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <div className="font-semibold text-sm mb-1" style={{color: 'var(--vn-deep-indigo)'}}>{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all" style={{color: 'var(--vn-deep-indigo)'}}>
                {navStructure.programs.label} <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 z-50">
                  {navStructure.programs.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <div className="font-semibold text-sm mb-1" style={{color: 'var(--vn-deep-indigo)'}}>{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Investors Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('investors')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all" style={{color: 'var(--vn-deep-indigo)'}}>
                {navStructure.investors.label} <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'investors' && (
                <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 z-50">
                  {navStructure.investors.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <div className="font-semibold text-sm mb-1" style={{color: 'var(--vn-deep-indigo)'}}>{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Partners & Contact */}
            {navStructure.partners.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path) ? 'text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={isActive(link.path) ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
              ) : (
                <Moon className="w-5 h-5" style={{color: 'var(--vn-deep-indigo)'}} />
              )}
            </button>
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
            <div className="flex items-center justify-between mx-4 mt-4 mb-2">
              <span className="text-sm font-medium" style={{color: 'var(--vn-deep-indigo)'}}>Dark Mode</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" style={{color: 'var(--vn-aqua)'}} />
                ) : (
                  <Moon className="w-5 h-5" style={{color: 'var(--vn-deep-indigo)'}} />
                )}
              </button>
            </div>
            <Link
              to="/contact"
              className="block mt-2 mx-4 text-center btn-primary"
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