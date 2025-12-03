import React, { useState } from 'react';
import { 
  Search, 
  CreditCard, 
  TrendingUp, 
  Users, 
  Calendar,
  Shield,
  Star,
  CheckCircle,
  PlayCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState('student');

  const studentSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find Your Perfect Tutor",
      description: "Browse through our verified tutors, filter by subject, availability, and ratings to find the best match for your learning needs.",
      details: ["Search by subject or topic", "View tutor profiles and reviews", "Check availability and pricing"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book & Pay Securely",
      description: "Schedule your sessions and make secure payments through our platform. Multiple payment options available for your convenience.",
      details: ["Flexible scheduling", "Secure payment processing", "Instant booking confirmation"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Learn & Track Progress",
      description: "Attend interactive sessions and monitor your learning journey with our comprehensive progress tracking and feedback system.",
      details: ["Interactive virtual classroom", "Progress tracking dashboard", "Regular performance reports"]
    }
  ];

  const tutorSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Create Your Profile",
      description: "Set up your professional teaching profile showcasing your expertise, qualifications, and teaching style to attract students.",
      details: ["Highlight your qualifications", "Set your teaching schedule", "Define your pricing"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Get Matched with Students",
      description: "Receive booking requests from students who match your expertise and availability. Manage your schedule efficiently.",
      details: ["Automatic student matching", "Flexible booking management", "Calendar synchronization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Teach & Grow Your Impact",
      description: "Deliver quality sessions, receive ratings and reviews, and build your teaching reputation while earning competitive income.",
      details: ["Interactive teaching tools", "Student feedback system", "Earnings tracking"]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Tutors",
      description: "All tutors undergo thorough background checks and verification processes"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "We maintain high teaching standards with regular quality assessments"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Your payments are protected with bank-level security encryption"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Learn or teach at your convenience with 24/7 scheduling options"
    }
  ];

  const currentSteps = activeRole === 'student' ? studentSteps : tutorSteps;

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full translate-y-48 translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            How Kynda Works
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent, and effective - discover how our platform connects learners with expert tutors for transformative educational experiences.
          </p>

          {/* Role Toggle */}
          <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-2xl p-2 mt-12">
            <button
              onClick={() => setActiveRole('student')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeRole === 'student'
                  ? 'bg-white text-indigo-600 shadow-lg transform scale-105'
                  : 'text-indigo-100 hover:text-white'
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveRole('tutor')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeRole === 'tutor'
                  ? 'bg-white text-indigo-600 shadow-lg transform scale-105'
                  : 'text-indigo-100 hover:text-white'
              }`}
            >
              For Tutors
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeRole === 'student' ? 'Start Learning in 3 Easy Steps' : 'Start Teaching in 3 Simple Steps'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeRole === 'student' 
                ? 'Your journey to academic excellence begins here' 
                : 'Begin your teaching journey and make an impact today'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentSteps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center group"
              >
                {/* Connection Line */}
                {index < currentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-1/2 w-full h-1 bg-gray-200 -z-10 group-hover:bg-indigo-200 transition-colors duration-300"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="bg-indigo-100 text-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kynda?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our platform designed for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                See Kynda in Action
              </h2>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Watch how students and tutors connect, learn, and grow together on our platform. Experience the seamless learning environment we've created.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Interactive virtual classroom",
                  "Real-time progress tracking",
                  "Secure payment system",
                  "Quality assurance features"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-indigo-100">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                <PlayCircle className="w-6 h-6" />
                <span>Watch Platform Demo</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-black/30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/80">Platform Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to {activeRole === 'student' ? 'Start Learning' : 'Start Teaching'}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {activeRole === 'student' 
              ? 'Join thousands of students achieving their academic goals with Kynda' 
              : 'Join our community of expert tutors and make a difference in students\' lives'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <span>{activeRole === 'student' ? 'Find a Tutor' : 'Become a Tutor'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300">
              {activeRole === 'student' ? 'Browse Subjects' : 'Learn More'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;