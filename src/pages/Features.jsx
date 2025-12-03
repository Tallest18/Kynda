import React from 'react';
import { 
  Video, 
  Users, 
  Shield, 
  TrendingUp, 
  Clock, 
  Award,
  BookOpen,
  DollarSign,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Live Interactive Sessions",
      description: "Real-time video lessons with interactive whiteboard, screen sharing, and collaborative tools for engaging learning experiences.",
      highlights: ["HD Video Quality", "Interactive Whiteboard", "Screen Sharing", "Session Recording"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Verified Expert Tutors",
      description: "Carefully vetted tutors with proven expertise, teaching experience, and passion for student success.",
      highlights: ["Background Verified", "Subject Experts", "Teaching Experience", "Student Reviews"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Platform",
      description: "Bank-level security protecting your data, payments, and personal information with end-to-end encryption.",
      highlights: ["Data Encryption", "Secure Payments", "Privacy Protection", "Safe Environment"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Progress Tracking",
      description: "Comprehensive analytics and progress reports to monitor learning outcomes and celebrate achievements.",
      highlights: ["Performance Analytics", "Goal Tracking", "Progress Reports", "Achievement Badges"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with 24/7 scheduling that fits your busy lifestyle and timezone."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Quality education starting from just ₦500 per session, making learning accessible to everyone."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Rich Learning Resources",
      description: "Access to study materials, practice exercises, and educational content across all subjects."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Learning",
      description: "Receive certificates of completion and recognition for your learning achievements and progress."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Smart algorithm that matches you with the perfect tutor based on learning style and goals."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We ensure teaching quality with regular assessments and student feedback systems."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students" },
    { number: "2,000+", label: "Expert Tutors" },
    { number: "50+", label: "Subjects Covered" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48 opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Discover everything you need for successful online learning with our comprehensive suite of tools and features designed for modern education.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for effective online learning and teaching, built with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Amazing Features
            </h2>
            <p className="text-xl text-gray-600">
              Additional tools and benefits that enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group text-center"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and tutors who are already benefiting from our platform's powerful features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Learning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Become a Tutor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;