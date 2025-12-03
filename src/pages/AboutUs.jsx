import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  TrendingUp,
  Globe,
  BookOpen,
  Star,
  CheckCircle
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Adebola Johnson",
      role: "Founder & CEO",
      bio: "Education specialist with 15+ years experience in curriculum development",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
    },
    {
      name: "Chinwe Okafor",
      role: "Head of Tutoring",
      bio: "Former university lecturer passionate about accessible education",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "Mohammed Bello",
      role: "Technology Director",
      bio: "Tech entrepreneur focused on educational technology solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Grace Williams",
      role: "Student Success",
      bio: "Learning psychologist dedicated to student achievement",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
    }
  ];

  const milestones = [
    { year: "2022", event: "Kynda Founded", description: "Started with a vision to democratize quality education" },
    { year: "2023", event: "First 1,000 Students", description: "Reached milestone of 1,000 active learners" },
    { year: "2023", event: "Tutor Network Launch", description: "Onboarded 500+ verified tutors" },
    { year: "2024", event: "Platform 2.0", description: "Launched enhanced learning platform with AI features" },
    { year: "2024", event: "10,000+ Users", description: "Growing community of learners and educators" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student First",
      description: "Every decision we make prioritizes student learning outcomes and success."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in teaching quality and platform experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making quality education accessible and affordable for everyone."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving through technology and educational research."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full translate-y-48 translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                About Kynda
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                We're on a mission to make quality education accessible to every African student, 
                connecting learners with expert tutors through innovative technology and personalized learning experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Our Story
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Meet the Team
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-green-200">Active Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2K+</div>
                    <div className="text-green-200">Expert Tutors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-green-200">Subjects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-green-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize quality education by making personalized learning accessible, affordable, 
                and effective for every African student, regardless of their location or background.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A future where every African learner has access to world-class educational resources 
                and personalized guidance to unlock their full potential and achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Kynda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our mission to transform education
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-green-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate educators and innovators driving Kynda's mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group text-center"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Join Our Educational Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Be part of the movement transforming education in Africa and beyond. 
            Together, we can create a future where every learner thrives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Learning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
              Teach with Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;