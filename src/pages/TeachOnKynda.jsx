import React from 'react';
import { 
  Star, 
  Users, 
  TrendingUp, 
  Clock, 
  Shield, 
  DollarSign,
  CheckCircle,
  Award,
  Calendar,
  Video
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const TeachOnKynda = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Earnings",
      description: "Earn up to ₦5,000 per hour teaching subjects you're passionate about"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Teach on your own time - choose when and how much you want to work"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connect with students from across Nigeria and beyond"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Get paid reliably with our secure payment system"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Build your teaching reputation and grow your student base"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Get rated and build your professional teaching portfolio"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Sign up and create a compelling tutor profile showcasing your expertise"
    },
    {
      step: "02",
      title: "Get Verified",
      description: "Complete our verification process to build trust with students"
    },
    {
      step: "03",
      title: "Set Your Schedule",
      description: "Choose your availability and set your preferred teaching hours"
    },
    {
      step: "04",
      title: "Start Teaching",
      description: "Accept booking requests and begin your teaching journey"
    }
  ];

  const subjects = [
    "Mathematics & Sciences", "English & Literature", "Programming & Tech",
    "Arts & Music", "Languages", "Business Studies",
    "Social Sciences", "Test Preparation", "Junior Level Subjects"
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48 opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4" fill="white" />
                <span className="text-sm font-medium">Join 2,000+ Trusted Tutors</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Teach on <span className="text-yellow-300">Kynda</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Share your knowledge, inspire learners, and earn competitive income on Africa's fastest-growing learning platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Start Teaching Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">₦5K+</div>
                    <div className="text-orange-200 text-sm">Per Hour</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-orange-200 text-sm">Students</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-orange-200 text-sm">Satisfaction</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-orange-200 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Teach With Kynda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to build a successful teaching practice and make a real impact on students' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Teaching in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process makes it easy to begin your teaching journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 bg-gray-200 -z-10 group-hover:bg-orange-200 transition-colors duration-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Teach What You Love
            </h2>
            <p className="text-xl text-gray-600">
              We're looking for experts in various subjects and fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors duration-300">
                  {subject}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your subject? We're always adding new categories!
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Apply to Teach
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Video className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Teaching Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of tutors who are already making a difference while earning competitive income.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Become a Tutor
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TeachOnKynda;