import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  CheckCircle,
  DollarSign,
  Calendar,
  Search,
  CreditCard,
  TrendingUp,
  Users,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Animation Wrapper Component
const FadeInView = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10'
  };

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directions[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('students');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  // Educational Bodies (with placeholder images)
  const educationalBodies = [
  { name: 'WAEC', logo: '../images/image 40.png' },
    { name: 'NECO', logo: '../images/image 41.png' },
    { name: 'JAMB', logo: '../images/image 42.png' },
    { name: 'NOUN', logo: '../images/image 43.png' },
    { name: 'NUC', logo: '../images/image 44.png' },
    { name: 'NBTE', logo: '../images/image 45.png' },
    { name: 'FME', logo: '../images/image 46.png' },
    { name: 'UNESCO', logo: '../images/image 47.png' }
  ];

  // Learning Categories with images and colors
  const categories = [
        { 
      name: 'English', 
      image: '../images/img (6).png',
      
    },
    { 
      name: 'Mathematics', 
      image: '../images/img (5).png',
      
    },
    { 
      name: 'Social Science', 
      image: '../images/img.png',
      
    },
    { 
      name: 'Sciences', 
      image: '../images/img (1).png',
      
    },
    { 
      name: 'Arts', 
      image: '../images/img (3).png',
      
    },
    { 
      name: 'Junior Subjects', 
      image: '../images/img (4).png',
      
    }
  ];

  const studentSteps = [
    {
      icon: <Search className="text-cyan-500" size={32} />,
      title: 'Search for a tutor by subject',
      description: 'Browse through our verified tutors and find the perfect match for your learning needs. Filter by subject and availability.'
    },
    {
      icon: <CreditCard className="text-cyan-500" size={32} />,
      title: 'Book & Pay securely',
      description: 'Schedule sessions at your convenience and pay securely through our platform. Multiple payment options available.'
    },
    {
      icon: <TrendingUp className="text-cyan-500" size={32} />,
      title: 'Track your child\'s Progress',
      description: 'Attend interactive lessons and monitor improvement through our comprehensive progress tracking system.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="text-cyan-500" size={32} />,
      title: 'Affordable',
      description: 'Learn anytime at just ₦500. Bringing quality education accessible to everyone.'
    },
    {
      icon: <Calendar className="text-cyan-500" size={32} />,
      title: 'Flexible',
      description: '30-40 minute one-time sessions, meeting busy schedules, fitting perfectly into your busy schedule.'
    },
    {
      icon: <CheckCircle className="text-cyan-500" size={32} />,
      title: 'Transparent',
      description: 'Real-time profile reviews and real-time through our intuitive dashboard.'
    },
    {
      icon: <Users className="text-cyan-500" size={32} />,
      title: 'Trusted Tutors',
      description: 'All tutors are verified, vetted, and trusted by students to ensure quality teaching.'
    },
    {
      icon: <Target className="text-cyan-500" size={32} />,
      title: 'Fair Tutor Pay',
      description: 'Claim commission system with fast withdrawals, ensuring tutors are rewarded.'
    },
    {
      icon: <Award className="text-cyan-500" size={32} />,
      title: 'Exam Focused',
      description: 'Sessions designed for WAEC, NECO, JAMB and other important examinations.'
    }
  ];

  const testimonials = [
    {
      name: 'Olumide Johnson',
      role: 'Student',
      rating: 5,
      text: "Kynda has made learning so easy for me. I used to struggle with Physics, but now I understand the concepts clearly because my tutor breaks everything down for my kids. I feel more confident going into my exams.",
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Grace Nwankwolor',
      role: 'Tutor',
      rating: 5,
      text: "Becoming a tutor on Kynda was the best change I got to share my knowledge, connect with students who are eager to learn, and flexible hours to manage my passion and passions.",
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Mr. Ahmed Musa',
      role: 'Parent',
      rating: 5,
      text: "It's a parent, I feel so relieved using kynda, I can track my daughter's classes and progress. The tutors are amazing and the lessons don't cost an arm and leg. I'm loving everything Kynda is offering the support our needs without overspending.",
      image: 'https://i.pravatar.cc/150?img=12'
    }
  ];

  const faqs = [
    {
      question: 'How does Kynda connect students with tutors?',
      answer: 'Kynda matches students to verified tutors based on subjects, class level, and availability. Students (or parents) can browse tutor profiles, check ratings, and book sessions instantly.'
    },
    {
      question: "Can parents monitor their child's learning progress?",
      answer: 'Yes, parents have access to a dedicated dashboard where they can monitor progress, approve sessions, and control spending.'
    },
    {
      question: 'How are tutors verified on Kynda?',
      answer: 'All tutors go through a verification process including credential checks and background verification to ensure quality teaching.'
    },
    {
      question: 'What payment methods are available?',
      answer: 'We accept various payment methods including cards, bank transfers, and mobile money for your convenience.'
    },
    {
      question: 'What happens if a student misses a session?',
      answer: 'Students can reschedule sessions based on tutor availability. Our flexible system makes it easy to manage your learning schedule.'
    }
  ];

  // Dashboard preview images
  const dashboardPreviews = [
    {
      title: "Parent's Dashboard",
      desc: "Parents manage child profiles, approve lessons, monitor progress, and control spending with ease.",
      image: "../images/image 50.png" 
    },
    {
      title: "Tutor's Dashboard", 
      desc: "Tutors track earnings, manage sessions, view student feedback, and set availability — all in one place.",
      image: "../images/image 39.png"
    }
  ];

  function CategoryCard({ name, image, color, delay }) {
    return (
      <FadeInView delay={delay} direction="up">
        <div className="group cursor-pointer">
          <div className={`bg-gradient-to-br ${color} rounded-xl h-48 mb-4 flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:-rotate-2 shadow-lg hover:shadow-2xl overflow-hidden relative`}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center group-hover:text-cyan-600 transition-colors">
            {name}
          </h3>
        </div>
      </FadeInView>
    );
  }

  function DashboardPreview({ title, desc, color, image, delay, direction }) {
    return (
      <FadeInView delay={delay} direction={direction}>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
          <div className={`h-80 bg-gradient-to-br ${color} flex items-center justify-center p-6 relative overflow-hidden`}>
            <div className="shimmer absolute inset-0"></div>
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full flex items-center justify-center">
                <span className="text-sm text-gray-400">{title} Preview</span>
              </div>
            )}
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        </div>
      </FadeInView>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <FadeInView direction="left">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Affordable Lessons.{' '}
                  <span className="text-orange-500 inline-block hover:scale-110 transition-transform">AI Powered</span>{' '}
                  Learning and Trusted Tutors.
                </h1>
                <p className="text-lg text-gray-600 mb-8 animate-pulse-slow">
                  Short lessons (30–120 mins) designed for exam success & homework help starting at just ₦1000.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-indigo-900 text-white px-8 py-3 rounded-lg hover:bg-indigo-800 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl">
                    Find a Tutor
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-indigo-900 hover:text-indigo-900 transition-all duration-300 font-semibold transform hover:scale-105">
                    Teach & Earn
                  </button>
                </div>
              </div>
            </FadeInView>

            {/* Right Side - Image */}
            <FadeInView direction="right">
              <FloatingElement>
                <div className="relative">
                  <div className="rounded-2xl p-8 min-h-[500px] flex items-center justify-center">
                    <img
                      src="/images/boy (1).png"
                      alt="Student learning"
                      className="rounded-2xl shadow-2xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FloatingElement>
            </FadeInView>
          </div>

          {/* Educational Bodies Section */}
          <div className="mt-20">
            <FadeInView delay={200}>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Approved by 30+ Educational Bodies
              </h2>
            </FadeInView>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {educationalBodies.map((body, i) => (
                <FadeInView key={i} delay={i * 100} direction="up">
                  <div className="group cursor-pointer transform transition-all duration-300 hover:scale-110">
                    <img
                      src={body.logo}
                      alt={body.name}
                      className="w-20 h-20 rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300 object-cover"
                    />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {/* Learning Categories Section */}
          <div className="mt-20">
            <FadeInView delay={100}>
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Categories</h2>
                <p className="text-gray-600 mb-6">
                  Short lessons (30-40 mins) designed for exam success & homework help starting at just ₦500.
                </p>
                <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-all duration-300 font-semibold flex items-center gap-2 transform hover:scale-105 hover:shadow-xl">
                  Check Categories <ArrowRight size={20} />
                </button>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  name={category.name}
                  image={category.image}
                  color={category.color}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 mb-8">
                Simple steps to get started with Kynda, whether you're a parent/student or a tutor
              </p>

              {/* Tab Switcher */}
              <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('students')}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                    activeTab === 'students'
                      ? 'bg-cyan-500 text-white transform scale-105'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Students
                </button>
                <button
                  onClick={() => setActiveTab('tutors')}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                    activeTab === 'tutors'
                      ? 'bg-cyan-500 text-white transform scale-105'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Tutors
                </button>
              </div>
            </div>
          </FadeInView>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {studentSteps.map((step, index) => (
              <FadeInView key={index} delay={index * 150} direction="up">
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-cyan-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          {/* Dashboards Section */}
          <FadeInView delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specially Built for Learners & Tutors
              </h2>
              <p className="text-gray-600">
                A learning dashboards for students and tutors with dedicated dashboard for parents to follow up on student's learning.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dashboardPreviews.map((dashboard, index) => (
              <DashboardPreview
                key={index}
                title={dashboard.title}
                desc={dashboard.desc}
                image={dashboard.image}
                delay={index * 200}
                direction={index === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynda */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-orange-500">Kynda?</span>
              </h2>
              <p className="text-gray-600">
                Discover the benefits that make Kynda the preferred learning platform
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-cyan-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-500 rounded-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Select Courses,<br />
                  Schedule Interviews<br />
                  and Join Classes
                </h2>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl">
                  Join Kynda Now
                </button>
              </div>
              <FloatingElement delay={0.5}>
                <div className="bg-white rounded-xl p-4 shadow-2xl">
                  <div className="w-80 h-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img
                      src="../images/all.jpeg"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FloatingElement>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Performance & Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Performance Dashboard */}
            <FadeInView direction="left">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Kynda Performance</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Learners</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="text-3xl font-bold mb-1">+3000</div>
                    <span className="text-xs bg-cyan-500 px-2 py-1 rounded">+20.1%</span>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Payment</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="text-3xl font-bold mb-1">$852.00</div>
                    <span className="text-xs bg-orange-500 px-2 py-1 rounded">-4.2%</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold mb-4">Users</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Norma Henry', role: 'Maths Tutor', stat: '96% Successful Class' },
                      { name: 'Anu Itel', role: 'Parent Account', stat: '95% Completed Learning' }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                          <div>
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-xs text-gray-400">{user.role}</div>
                          </div>
                        </div>
                        <span className="text-green-400 text-sm">{user.stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Right Side Text */}
            <FadeInView direction="right">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Empowering Students, Supporting Parents, and Enabling Tutors Through Accessible and Affordable Learning
                </h2>
                <p className="text-gray-600 mb-8">
                  Kynda connects learners with trusted tutors, making quality education simple, flexible, and within reach.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Equipped with Verified and Qualified Tutors',
                    '98.3% guaranteed Student Satisfaction and Access',
                    'Secured platform with easy funding and payout'
                  ].map((item, index) => (
                    <FadeInView key={index} delay={index * 100}>
                      <div className="flex items-start gap-3 group">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </FadeInView>
                  ))}
                </div>

                <button className="bg-indigo-900 text-white px-8 py-3 rounded-lg hover:bg-indigo-800 transition-all duration-300 font-semibold flex items-center gap-2 transform hover:scale-105 hover:shadow-xl">
                  Contact Us <ArrowRight size={20} />
                </button>
              </div>
            </FadeInView>
          </div>

          {/* Trusted By Section */}
          <FadeInView delay={300}>
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted By Learners & Tutors Worldwide
              </h2>
              <p className="text-gray-600 mb-12">
                Discover the benefits that make Kynda the preferred learning platform
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <FadeInView key={index} delay={index * 150} direction="up">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="flex items-center gap-1 mb-4">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" className="transform group-hover:scale-125 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={400}>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">01 of 60</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 transform hover:scale-110">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Kynda matches students to verified tutors based on subjects, class level, and availability. Students (or parents) can browse tutor profiles, check ratings, and book sessions instantly.
              </p>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all duration-300"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`transform transition-all duration-300 ${
                        openIndex === index ? 'rotate-180 text-cyan-500' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-black-600 opacity-95"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/girls.png" 
            alt="Students learning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInView>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join 34,000+ learners who've grown with Kynda Team
            </h2>
          </FadeInView>
          
          <FadeInView delay={200}>
            <p className="text-lg text-indigo-100 mb-8">
              Let us help you take from zero to serious learners and beyond. Free strings attached free trial lets you test our product today.
            </p>
          </FadeInView>
          
          <FadeInView delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold shadow-xl transform hover:scale-105 hover:shadow-2xl">
                Join as a Student
              </button>
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl transform hover:scale-105 hover:shadow-2xl">
                Join as a Tutor
              </button>
            </div>
          </FadeInView>
        </div>
      </section>
      <Footer />
    </div>
  );
}