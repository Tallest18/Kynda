import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Shield, UserCheck } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TermsAndCondition = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Kynda, you accept and agree to be bound by the terms and provision of this agreement. Your use of our platform indicates your acceptance of these terms."
    },
    {
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      title: "Payment Terms",
      content: "All payments are processed securely through our platform. Sessions must be paid for in advance. Refunds are subject to our cancellation policy outlined in the refund policy section."
    },
    {
      title: "Intellectual Property",
      content: "All content on Kynda, including text, graphics, logos, and software, is the property of Kynda and protected by intellectual property laws. Tutors retain rights to their original teaching materials."
    },
    {
      title: "Code of Conduct",
      content: "Users must maintain respectful behavior during sessions. Any form of harassment, inappropriate content, or misconduct will result in immediate account termination."
    },
    {
      title: "Cancellation Policy",
      content: "Sessions canceled with less than 24 hours notice may be subject to charges. Tutors must provide adequate notice for cancellations to maintain their rating status."
    },
    {
      title: "Privacy and Data",
      content: "We collect and use personal information as described in our Privacy Policy. By using Kynda, you consent to such processing and you warrant that all data provided is accurate."
    },
    {
      title: "Limitation of Liability",
      content: "Kynda shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <FileText className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Terms & Conditions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Understanding our platform rules and guidelines to ensure a safe and productive learning environment for everyone.
          </p>
          <div className="mt-8 text-sm text-blue-200">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600">Your data and payments are protected with enterprise-grade security</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <UserCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Tutors</h3>
              <p className="text-gray-600">All tutors undergo thorough background checks and verification</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FileText className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Policies</h3>
              <p className="text-gray-600">Transparent terms that protect both students and tutors</p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  {openSections[index] ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 transform transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 transform transition-transform duration-200" />
                  )}
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ${
                    openSections[index] ? 'max-h-96 pb-6' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="pl-12 border-l-2 border-blue-200">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you understand our policies and address any concerns you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default TermsAndCondition;