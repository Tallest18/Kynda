import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Shield, 
  DollarSign, 
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Printer
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContractTerms = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const contractSections = [
    {
      title: "Service Agreement",
      content: "This agreement governs the relationship between Kynda, tutors, and students using our platform for educational services.",
      clauses: [
        "Platform serves as a marketplace connecting tutors and students",
        "Kynda facilitates payments and provides learning tools",
        "Tutors are independent contractors, not employees",
        "Students are responsible for their learning progress"
      ]
    },
    {
      title: "Tutor Responsibilities",
      content: "Tutors agree to provide quality educational services in accordance with platform standards and student expectations.",
      clauses: [
        "Maintain professional conduct during all sessions",
        "Provide accurate qualifications and experience",
        "Adhere to scheduled session times",
        "Submit to platform quality reviews",
        "Protect student privacy and information"
      ]
    },
    {
      title: "Student Responsibilities",
      content: "Students agree to engage in learning activities respectfully and comply with platform policies.",
      clauses: [
        "Provide accurate academic information",
        "Respect tutor time and cancel with proper notice",
        "Maintain appropriate behavior during sessions",
        "Use platform features as intended",
        "Provide constructive feedback"
      ]
    },
    {
      title: "Payment Terms",
      content: "Clear guidelines for payment processing, tutor compensation, and financial transactions on the platform.",
      clauses: [
        "Session fees paid in advance via secure payment methods",
        "Tutors receive payment minus platform commission",
        "Weekly payout processing for tutors",
        "Refund policies as per cancellation terms",
        "Transparent pricing with no hidden fees"
      ]
    },
    {
      title: "Cancellation Policy",
      content: "Policies governing session cancellations, rescheduling, and associated fees for both tutors and students.",
      clauses: [
        "24-hour cancellation notice for full refund",
        "50% charge for cancellations under 24 hours",
        "Tutor no-show results in full refund",
        "Emergency cancellations reviewed case-by-case",
        "Repeated cancellations may affect account status"
      ]
    },
    {
      title: "Intellectual Property",
      content: "Rights and ownership of educational content, teaching materials, and platform intellectual property.",
      clauses: [
        "Tutors retain rights to original teaching materials",
        "Kynda licensed to use materials for platform purposes",
        "Session recordings for quality and training purposes",
        "Students may not redistribute tutor materials",
        "Platform content protected by copyright"
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: "Commitment to protecting user data and complying with privacy regulations in all jurisdictions.",
      clauses: [
        "Personal data collected for service provision only",
        "Data encryption and secure storage practices",
        "User control over personal information",
        "Compliance with data protection regulations",
        "Regular security audits and updates"
      ]
    },
    {
      title: "Dispute Resolution",
      content: "Process for resolving conflicts between users and addressing service-related issues.",
      clauses: [
        "Initial resolution through platform support",
        "Mediation process for unresolved issues",
        "Clear escalation path for serious concerns",
        "Fair hearing for all parties involved",
        "Platform final decision on service matters"
      ]
    }
  ];

  const keyPoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protected Rights",
      description: "Clear protection for both tutors and students"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Fair Compensation",
      description: "Transparent payment terms and schedules"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Protection",
      description: "Respect for everyone's time and schedule"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Maintained standards for all services"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FileText className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Contract Terms
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Clear, comprehensive terms that protect the rights and define the responsibilities of all parties using the Kynda platform.
          </p>
          <div className="mt-8 text-sm text-blue-200">
            Effective Date: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Sections */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Contract Terms & Conditions</h2>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {contractSections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
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
                  <div className="pl-14 border-l-2 border-blue-200">
                    <ul className="space-y-3">
                      {section.clauses.map((clause, clauseIndex) => (
                        <li key={clauseIndex} className="flex items-start space-x-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{clause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Acceptance Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Acceptance of Terms</h3>
                <p className="text-blue-100 mb-6">
                  By using the Kynda platform, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. 
                  These terms constitute a legally binding agreement between you and Kynda.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Version 2.1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Last updated: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-yellow-700 mb-6">
              Our legal team is available to clarify any aspects of these terms and address your concerns.
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200">
              Contact Legal Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContractTerms;