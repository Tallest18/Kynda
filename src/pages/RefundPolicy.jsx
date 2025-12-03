import React, { useState } from 'react';
import { 
  Clock, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Calendar,
  Shield
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RefundPolicy = () => {
  const [activeTab, setActiveTab] = useState('students');

  const studentRefunds = [
    {
      situation: "Session Cancelled 24+ Hours Before",
      refund: "Full refund",
      timeline: "Processed within 3-5 business days",
      status: "eligible",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      situation: "Session Cancelled Less Than 24 Hours Before",
      refund: "50% refund",
      timeline: "Processed within 5-7 business days",
      status: "partial",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      situation: "Tutor No-Show or Technical Issues",
      refund: "Full refund",
      timeline: "Processed within 24 hours",
      status: "eligible",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      situation: "Session Completed Successfully",
      refund: "No refund",
      timeline: "Not applicable",
      status: "ineligible",
      icon: <XCircle className="w-6 h-6" />
    },
    {
      situation: "Dissatisfaction with Session Quality",
      refund: "Case-by-case review",
      timeline: "Reviewed within 48 hours",
      status: "review",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const tutorPayouts = [
    {
      situation: "Student Cancels 24+ Hours Before",
      payout: "No payout",
      timeline: "Session removed from schedule",
      status: "ineligible",
      icon: <XCircle className="w-6 h-6" />
    },
    {
      situation: "Student Cancels Less Than 24 Hours Before",
      payout: "50% of session fee",
      timeline: "Added to next payout cycle",
      status: "partial",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      situation: "Tutor Cancels Session",
      payout: "No payout",
      timeline: "Affects tutor rating",
      status: "ineligible",
      icon: <XCircle className="w-6 h-6" />
    },
    {
      situation: "Session Completed Successfully",
      payout: "Full session fee (minus platform commission)",
      timeline: "Weekly payout",
      status: "eligible",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'eligible': return 'text-green-600 bg-green-50 border-green-200';
      case 'partial': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'ineligible': return 'text-red-600 bg-red-50 border-red-200';
      case 'review': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full translate-y-48 translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <DollarSign className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Clear, fair, and transparent refund policies designed to protect both students and tutors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg inline-flex">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'students'
                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Students
              </button>
              <button
                onClick={() => setActiveTab('tutors')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'tutors'
                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Tutors
              </button>
            </div>
          </div>

          {/* Policy Cards */}
          <div className="space-y-6">
            {(activeTab === 'students' ? studentRefunds : tutorPayouts).map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6 flex items-start space-x-6">
                  <div className={`p-3 rounded-2xl ${getStatusColor(item.status)} border-2`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 lg:mb-0">
                        {item.situation}
                      </h3>
                      <div className={`px-4 py-2 rounded-full font-bold ${getStatusColor(item.status)}`}>
                        {item.refund}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-3 text-yellow-700">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">•</span>
                    <span>All refund requests must be submitted through the platform within 7 days of the session</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">•</span>
                    <span>Refunds are processed to the original payment method used</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">•</span>
                    <span>Bank processing times may vary depending on your financial institution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">•</span>
                    <span>For quality concerns, please provide detailed feedback for our review team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with a Refund?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you understand our refund process and resolve any issues quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
                Submit Refund Request
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RefundPolicy;