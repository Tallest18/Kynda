import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users,
  Award,
  FileText,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Star,
  Target
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TutorPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const policySections = [
    {
      title: "Tutor Eligibility & Verification",
      content: "Requirements and verification process for becoming a Kynda tutor.",
      points: [
        "Minimum educational qualification: Bachelor's degree or equivalent",
        "Subject matter expertise with verifiable credentials",
        "Clean background check and professional references",
        "Teaching experience or demonstrated tutoring ability",
        "Technical requirements: Stable internet, webcam, and microphone"
      ]
    },
    {
      title: "Quality Standards & Teaching Guidelines",
      content: "Maintaining high-quality teaching standards and professional conduct.",
      points: [
        "Punctuality: Start and end sessions on time",
        "Professional appearance and teaching environment",
        "Use of approved teaching materials and methods",
        "Regular session preparation and follow-up",
        "Adaptive teaching based on student needs"
      ]
    },
    {
      title: "Payment & Compensation",
      content: "Transparent payment structure and compensation guidelines.",
      points: [
        "Competitive hourly rates based on qualifications and subject",
        "Weekly payout processing every Monday",
        "70-80% commission on session fees (based on tutor level)",
        "Clear breakdown of earnings and deductions",
        "Secure payment methods: Bank transfer and mobile money"
      ]
    },
    {
      title: "Session Management",
      content: "Guidelines for scheduling, conducting, and managing tutoring sessions.",
      points: [
        "24-hour cancellation notice required",
        "Session duration: 30-120 minutes as booked",
        "Record sessions for quality assurance (optional)",
        "Use Kynda's virtual classroom for all sessions",
        "Maintain session notes and progress tracking"
      ]
    },
    {
      title: "Student Interaction & Communication",
      content: "Professional communication standards and student relationship management.",
      points: [
        "Professional and respectful communication at all times",
        "Respond to student messages within 24 hours",
        "Maintain appropriate boundaries with students",
        "Use platform messaging for all communications",
        "Provide constructive feedback and encouragement"
      ]
    },
    {
      title: "Rating & Review System",
      content: "How the rating system works and its impact on your tutor profile.",
      points: [
        "Students rate sessions on 5-star scale after completion",
        "Ratings based on knowledge, teaching style, and professionalism",
        "Maintain minimum 4.0 rating for active tutor status",
        "Respond professionally to all reviews",
        "Regular performance reviews and feedback"
      ]
    },
    {
      title: "Content & Intellectual Property",
      content: "Rights and responsibilities regarding teaching materials and content.",
      points: [
        "Tutors retain ownership of original teaching materials",
        "Kynda licensed to use materials for platform purposes",
        "Respect copyright and intellectual property rights",
        "Share session recordings for quality improvement",
        "Use approved curriculum and learning objectives"
      ]
    },
    {
      title: "Code of Conduct & Professional Ethics",
      content: "Professional standards and ethical guidelines for all tutors.",
      points: [
        "Zero tolerance for discrimination or harassment",
        "Maintain student confidentiality and privacy",
        "No sharing of personal contact information",
        "Professional conflict resolution procedures",
        "Immediate reporting of any safety concerns"
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Earnings",
      description: "Earn up to ₦5,000 per hour based on your expertise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Teach on your own time and set your availability"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Matching",
      description: "Get matched with students based on your expertise"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Access training and development resources"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white overflow-hidden">
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
            Tutor Policies
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Clear guidelines and policies designed to support our tutors in delivering exceptional learning experiences while maintaining professional standards.
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

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tutor Policy Handbook
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive guidelines for successful tutoring on Kynda
            </p>
          </div>

          <div className="space-y-6">
            {policySections.map((section, index) => (
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
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements Summary */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Requirements Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Minimum 4.0 tutor rating</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>90% session completion rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Professional development completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Need Clarification?
            </h3>
            <p className="text-yellow-700 mb-6">
              Our tutor support team is here to help you understand and navigate our policies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200">
                Contact Tutor Support
              </button>
              <button className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200">
                Download Policy PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TutorPolicy;