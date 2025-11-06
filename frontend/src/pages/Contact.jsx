import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, FileText, Handshake } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    purpose: '',
    region: '',
    message: '',
    gdprConsent: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast.error('Please accept the privacy policy to proceed');
      return;
    }

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contact/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: formType
        }),
      });

      if (response.ok) {
        toast.success('Thank you! We will get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          organization: '',
          email: '',
          purpose: '',
          region: '',
          message: '',
          gdprConsent: false
        });
      } else {
        toast.error('Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: 'Lyon Science Park, 2500m² Facility\n69007 Lyon, France'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+33 (0) 4 72 XX XX XX'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@vaxinovia.com'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6" style={{color: 'var(--vn-deep-indigo)'}}>Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Get in touch with our team to discuss partnerships, request technical information, or learn more about our vaccine development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'rgba(41, 183, 197, 0.1)', color: 'var(--vn-aqua)'}}>
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            {/* Form Type Selector */}
            <div className="flex gap-2 mb-8 flex-wrap">
              <button
                onClick={() => setFormType('general')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  formType === 'general' ? 'text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={formType === 'general' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                <Mail className="w-4 h-4" />
                General Inquiry
              </button>
              <button
                onClick={() => setFormType('regulatory')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  formType === 'regulatory' ? 'text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={formType === 'regulatory' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                <FileText className="w-4 h-4" />
                Regulatory/CMC Request
              </button>
              <button
                onClick={() => setFormType('partnership')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  formType === 'partnership' ? 'text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={formType === 'partnership' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
              >
                <Handshake className="w-4 h-4" />
                Partnership Proposal
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                    Organization *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                    Purpose *
                  </label>
                  <select
                    name="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                  >
                    <option value="">Select purpose</option>
                    <option value="partnership">Partnership Discussion</option>
                    <option value="regulatory">Regulatory Information</option>
                    <option value="technical">Technical Inquiry</option>
                    <option value="licensing">Licensing Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                    Region *
                  </label>
                  <select
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                  >
                    <option value="">Select region</option>
                    <option value="europe">Europe</option>
                    <option value="north-america">North America</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="south-america">South America</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{color: 'var(--vn-deep-indigo)'}}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{'--tw-ring-color': 'var(--vn-aqua)'}}
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="gdprConsent"
                  id="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                  I consent to VaxiNovia S.A. storing and processing my data in accordance with the{' '}
                  <a href="/legal/privacy" className="underline" style={{color: 'var(--vn-aqua)'}}>Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden" style={{height: '400px', backgroundColor: 'var(--vn-mist)'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" style={{color: 'var(--vn-aqua)'}} />
                <div className="text-xl font-semibold mb-2" style={{color: 'var(--vn-deep-indigo)'}}>Lyon Science Park</div>
                <div className="text-gray-600">69007 Lyon, France</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};