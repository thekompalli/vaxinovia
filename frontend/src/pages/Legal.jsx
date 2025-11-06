import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, Cookie } from 'lucide-react';

export const Legal = () => {
  const { type } = useParams();

  const legalContent = {
    privacy: {
      icon: <Shield className="w-12 h-12" />,
      title: 'Privacy Policy',
      content: `
## Data Collection and Usage

VaxiNovia S.A. is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.

### Information We Collect

- **Contact Information**: Name, email address, phone number, organization
- **Professional Information**: Job title, work address, professional interests
- **Communication Data**: Correspondence, inquiry details, meeting notes
- **Technical Data**: IP address, browser type, device information

### How We Use Your Information

We use your personal data to:

- Respond to inquiries and partnership requests
- Provide technical and regulatory information
- Maintain business relationships
- Improve our services and website
- Comply with legal obligations

### Data Security

We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.

### Your Rights (GDPR)

Under EU GDPR, you have the right to:

- Access your personal data
- Rectify inaccurate data
- Request data deletion
- Object to data processing
- Data portability

### Contact

For privacy-related inquiries, contact: privacy@vaxinovia.com

**Last Updated**: January 2025
      `
    },
    terms: {
      icon: <FileText className="w-12 h-12" />,
      title: 'Terms of Service',
      content: `
## Terms of Service

### Acceptance of Terms

By accessing and using the VaxiNovia S.A. website, you accept and agree to be bound by these Terms of Service.

### Intellectual Property

All content on this website, including text, graphics, logos, and software, is the property of VaxiNovia S.A. and protected by international copyright and trademark laws.

#### Patents and Proprietary Technology

- ASIP® is a registered trademark of VaxiNovia S.A.
- All patent information is provided for informational purposes only
- Unauthorized use of our proprietary technology is prohibited

### Disclaimer of Warranties

The information on this website is provided "as is" without warranties of any kind. VaxiNovia S.A. makes no representations regarding:

- Accuracy or completeness of information
- Suitability for any particular purpose
- Uninterrupted or error-free operation

### Limitation of Liability

VaxiNovia S.A. shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or services.

### Confidential Information

Any confidential information shared requires a separate Non-Disclosure Agreement (NDA). Submission of inquiries through our contact forms does not create any confidential relationship.

### Governing Law

These terms are governed by the laws of France. Any disputes shall be subject to the exclusive jurisdiction of French courts.

### Changes to Terms

We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.

**Last Updated**: January 2025
      `
    },
    compliance: {
      icon: <Cookie className="w-12 h-12" />,
      title: 'Compliance & Certifications',
      content: `
## Compliance & Certifications

VaxiNovia S.A. maintains the highest standards of regulatory compliance and quality management.

### Quality Management

#### ISO 9001:2015 Certification

- Comprehensive quality management system
- Regular internal and external audits
- Continuous improvement processes
- Document control and record management

### Biosafety

#### BSL-2/3 Certification

- Containment facilities for handling infectious agents
- Trained personnel in biosafety protocols
- Regular safety audits and monitoring
- Compliance with WHO and EU biosafety guidelines

### GMP Compliance

#### Good Manufacturing Practices

- GMP-compliant pilot manufacturing suites
- Validated processes and equipment
- Batch record documentation
- Quality control and assurance programs

### Regulatory Compliance

#### EMA Guidelines

- Adherence to European Medicines Agency regulations
- ICH Q5C compliance for biologics
- IMPD/CMC documentation standards

#### WHO Guidelines

- WHO Good Manufacturing Practices
- Vaccine quality standards
- Prequalification pathway alignment

### Ethics and Animal Welfare

#### OECD/EU Standards

- Ethical review committee oversight
- 3Rs principles (Replace, Reduce, Refine)
- Compliance with Directive 2010/63/EU
- Regular veterinary oversight

### Data Protection

#### GDPR Compliance

- Data protection impact assessments
- Privacy by design principles
- Secure data storage and processing
- Regular compliance audits

#### Nagoya Protocol

- Compliance with ABS regulations
- Genetic resource documentation
- Benefit-sharing agreements

### Certifications Contact

For certification documentation and compliance inquiries:

**Email**: compliance@vaxinovia.com  
**Phone**: +33 (0) 4 72 XX XX XX

**Last Updated**: January 2025
      `
    }
  };

  const currentContent = legalContent[type] || legalContent.privacy;

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4" style={{color: 'var(--vn-deep-indigo)'}}>{line.replace('## ', '')}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3" style={{color: 'var(--vn-deep-indigo)'}}>{line.replace('### ', '')}</h3>;
      } else if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-semibold mt-4 mb-2" style={{color: 'var(--vn-aqua)'}}>{line.replace('#### ', '')}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-gray-700">{line.replace('- ', '')}</li>;
      } else if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-gray-800 mt-4">{line.replace(/\*\*/g, '')}</p>;
      } else {
        return <p key={index} className="text-gray-700 mb-2">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div style={{color: 'var(--vn-aqua)'}}>
              {currentContent.icon}
            </div>
            <h1 className="text-5xl font-bold" style={{color: 'var(--vn-deep-indigo)'}}>{currentContent.title}</h1>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to="/legal/privacy"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                type === 'privacy' ? 'text-white' : 'bg-white hover:bg-gray-50'
              }`}
              style={type === 'privacy' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/terms"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                type === 'terms' ? 'text-white' : 'bg-white hover:bg-gray-50'
              }`}
              style={type === 'terms' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
            >
              Terms of Service
            </Link>
            <Link
              to="/legal/compliance"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                type === 'compliance' ? 'text-white' : 'bg-white hover:bg-gray-50'
              }`}
              style={type === 'compliance' ? {backgroundColor: 'var(--vn-aqua)'} : {color: 'var(--vn-deep-indigo)'}}
            >
              Compliance
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            {formatContent(currentContent.content)}
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-20" style={{backgroundColor: 'var(--vn-mist)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--vn-deep-indigo)'}}>Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about our legal policies or compliance, please don't hesitate to reach out.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Legal Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};