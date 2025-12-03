import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const privacySections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, including name, email, phone number, educational background, and payment information. We also automatically collect usage data and device information to improve our services.",
      details: [
        "Personal identification information",
        "Academic and professional background",
        "Payment and billing information",
        "Session recordings and materials",
        "Technical and usage data"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "Your information helps us provide, maintain, and improve our services, process transactions, communicate with you, and ensure platform security.",
      details: [
        "Facilitate tutoring sessions and connections",
        "Process payments and prevent fraud",
        "Provide customer support",
        "Send important service updates",
        "Improve platform features and user experience"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell your personal information. We only share information with tutors/students as necessary for sessions, with service providers who assist our operations, or when required by law.",
      details: [
        "Only necessary information shared between matched tutors and students",
        "Trusted service providers under strict confidentiality",
        "Legal compliance and protection of rights",
        "Business transfers (in case of merger or acquisition)"
      ]
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures including encryption, secure servers, and regular security assessments to protect your personal information.",
      details: [
        "End-to-end encryption for all communications",
        "Regular security audits and penetration testing",
        "Secure data storage with access controls",
        "Employee training on data protection"
      ]
    },
    {
      title: "Your Rights & Choices",
      content: "You have the right to access, correct, or delete your personal information. You can manage your communication preferences and data sharing settings in your account.",
      details: [
        "Access and download your personal data",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Control session recording preferences"
      ]
    },
    {
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to enhance your experience, analyze platform usage, and deliver personalized content.",
      details: [
        "Essential cookies for platform functionality",
        "Analytics cookies to improve services",
        "Preference cookies for personalized experience",
        "Advertising cookies (with your consent)"
      ]
    },
    {
      title: "International Data Transfers",
      content: "Your data may be processed in countries outside your residence. We ensure adequate protection through standard contractual clauses and compliance with international data protection standards.",
      details: [
        "Data processed in secure cloud infrastructure",
        "Compliance with GDPR and other regulations",
        "Standard contractual clauses for transfers",
        "Regular privacy impact assessments"
      ]
    },
    {
      title: "Policy Updates",
      content: "We may update this policy to reflect changes in our practices or legal requirements. We will notify you of significant changes and obtain consent when required.",
      details: [
        "Regular policy reviews and updates",
        "Notification of material changes",
        "Continued use constitutes acceptance",
        "Archive of previous versions available"
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Shield className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our priority. Learn how we protect and handle your personal information with the utmost care and security.
          </p>
          <div className="mt-8 text-sm text-purple-200">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Lock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600">256-bit SSL encryption protecting all your data and transactions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Practices</h3>
                <p className="text-gray-600">Clear information about how we collect and use your data</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <UserCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Control</h3>
                <p className="text-gray-600">Full control over your data and privacy preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {privacySections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                        {section.content}
                      </p>
                    </div>
                  </div>
                  {openSections[index] ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ${
                    openSections[index] ? 'max-h-96 pb-6' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="pl-14 border-l-2 border-purple-200">
                    <ul className="space-y-3">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3 text-gray-700">
                          <div className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                            •
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Privacy Questions?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our privacy team is dedicated to protecting your data and answering any questions you may have about our practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Contact Privacy Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                Download Policy
              </button>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {['GDPR Compliant', 'Data Protection', 'Secure Encryption', 'Regular Audits'].map((badge, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <Database className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;