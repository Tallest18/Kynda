import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Users, 
  CreditCard, 
  Shield,
  Clock,
  Star,
  MessageCircle,
  Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const categories = [
    {
      id: 'general',
      name: 'General',
      icon: <BookOpen className="w-6 h-6" />,
      count: 8
    },
    {
      id: 'students',
      name: 'Students & Parents',
      icon: <Users className="w-6 h-6" />,
      count: 6
    },
    {
      id: 'tutors',
      name: 'Tutors',
      icon: <Star className="w-6 h-6" />,
      count: 7
    },
    {
      id: 'payments',
      name: 'Payments',
      icon: <CreditCard className="w-6 h-6" />,
      count: 5
    },
    {
      id: 'safety',
      name: 'Safety & Security',
      icon: <Shield className="w-6 h-6" />,
      count: 4
    }
  ];

  const faqData = {
    general: [
      {
        question: "What is Kynda and how does it work?",
        answer: "Kynda is an online learning platform that connects students with verified tutors for personalized one-on-one sessions. Students can browse tutor profiles, book sessions based on their learning needs, and learn through our interactive virtual classroom. Tutors create profiles showcasing their expertise and availability, then get matched with students who need their specific skills."
      },
      {
        question: "What subjects and levels does Kynda cover?",
        answer: "We cover a wide range of subjects including Mathematics, Sciences, English, Social Studies, Languages, Programming, Test Preparation (WAEC, NECO, JAMB), and more. Our platform serves students from primary school through university level, as well as adult learners seeking professional development or skill enhancement."
      },
      {
        question: "How do I create an account on Kynda?",
        answer: "Creating an account is simple! Click the 'Sign Up' button, choose whether you're a student or tutor, provide your basic information, verify your email address, and complete your profile. The entire process takes less than 5 minutes. For tutors, there's an additional verification step to ensure teaching qualifications."
      },
      {
        question: "Is Kynda available on mobile devices?",
        answer: "Yes! Kynda is fully optimized for mobile devices. You can access our platform through any web browser on your smartphone or tablet. We're also developing dedicated mobile apps for iOS and Android to provide an even better mobile learning experience."
      },
      {
        question: "What are the technical requirements for using Kynda?",
        answer: "You'll need a stable internet connection, a modern web browser (Chrome, Firefox, Safari, or Edge), and a device with a camera and microphone for video sessions. We recommend at least 5Mbps download speed for smooth video calls. Our platform works on computers, tablets, and smartphones."
      },
      {
        question: "Can I change from student to tutor account or vice versa?",
        answer: "Absolutely! You can switch between student and tutor modes in your account settings. However, becoming a tutor requires completing our verification process, which includes submitting qualifications and passing a background check. Your profile and data will be maintained across both account types."
      },
      {
        question: "How does Kynda ensure quality education?",
        answer: "We maintain quality through multiple layers: thorough tutor verification, student feedback and rating systems, session recording for quality assurance, regular performance reviews, and continuous platform improvements based on user feedback and educational best practices."
      },
      {
        question: "What languages does Kynda support?",
        answer: "Currently, Kynda is available in English, with plans to add more Nigerian languages and international languages soon. Our support team can assist in multiple languages, and you can find tutors who teach in various languages based on their proficiency."
      }
    ],
    students: [
      {
        question: "How do I find the right tutor for my needs?",
        answer: "You can search for tutors by subject, availability, price range, rating, and specific qualifications. Use our advanced filters to narrow down options, read tutor profiles and reviews, and even schedule introductory sessions to find the perfect match for your learning style and goals."
      },
      {
        question: "What happens if I need to cancel or reschedule a session?",
        answer: "You can cancel or reschedule sessions through your dashboard. Cancellations made 24+ hours in advance receive full refunds. Cancellations within 24 hours may incur a 50% charge. In case of emergencies, contact our support team for assistance. Tutors are also expected to provide adequate notice for cancellations."
      },
      {
        question: "How can parents monitor their child's progress?",
        answer: "Parents have access to a dedicated dashboard where they can view session history, progress reports, tutor feedback, and learning analytics. You can also communicate directly with tutors, set learning goals, and receive regular updates on your child's academic development."
      },
      {
        question: "Are sessions recorded? Can I access them later?",
        answer: "Yes, sessions are automatically recorded (with participant consent) and stored securely for 90 days. You can access recordings through your dashboard to review lessons, catch up on missed sessions, or reinforce learning. Recordings are also used for quality assurance and dispute resolution."
      },
      {
        question: "What if I'm not satisfied with a tutoring session?",
        answer: "We want you to be completely satisfied! If a session doesn't meet your expectations, please contact our support team within 24 hours. We'll review the case and may offer a session credit, partial refund, or help you find a better-matched tutor. Your feedback helps us maintain quality standards."
      },
      {
        question: "Can I request a specific teaching approach or curriculum?",
        answer: "Absolutely! When booking sessions, you can specify your learning preferences, desired teaching methods, or particular curriculum requirements. Many tutors are flexible and can adapt their teaching style. You can also discuss specific needs during your introductory session with a new tutor."
      }
    ],
    tutors: [
      {
        question: "What are the requirements to become a Kynda tutor?",
        answer: "To become a tutor, you need: a Bachelor's degree or equivalent qualification, proven expertise in your subject area, teaching/tutoring experience, reliable internet connection, webcam and microphone, and must pass our background check and verification process. We also value passion for teaching and strong communication skills."
      },
      {
        question: "How does Kynda's payment system work for tutors?",
        answer: "Tutors earn 70-80% of session fees (based on experience level and subject). Payments are processed weekly every Monday, deposited directly to your bank account or mobile money. You can track your earnings, upcoming payments, and transaction history in your tutor dashboard. All payments are secure and transparent."
      },
      {
        question: "How do I set my availability and session prices?",
        answer: "You can set your available hours through the calendar in your tutor dashboard. For pricing, we provide suggested rates based on your qualifications and subject, but you have flexibility to set your own prices within reasonable ranges. You can also offer package deals or adjust prices for different time slots."
      },
      {
        question: "What teaching tools are available on Kynda?",
        answer: "Our virtual classroom includes: interactive whiteboard, screen sharing, file sharing, real-time chat, session recording, breakout rooms, and educational widgets. We're constantly adding new tools based on tutor feedback and educational technology advancements."
      },
      {
        question: "How does Kynda help tutors find students?",
        answer: "We use smart matching algorithms to connect you with suitable students based on your expertise, availability, and teaching style. You'll also appear in search results when students look for your subjects. Maintaining a complete profile, good ratings, and prompt responses increases your visibility to potential students."
      },
      {
        question: "Can I teach multiple subjects on Kynda?",
        answer: "Yes! You can list multiple subjects in your profile after demonstrating proficiency in each. Each subject goes through our verification process. Teaching multiple subjects can help you reach more students and increase your earning potential, but we recommend focusing on your strongest areas."
      },
      {
        question: "What support does Kynda provide to tutors?",
        answer: "We offer comprehensive support including: 24/7 technical assistance, teaching resources and training materials, community forums, marketing support, regular webinars and workshops, and a dedicated tutor success team to help you grow your tutoring business and improve your teaching practice."
      }
    ],
    payments: [
      {
        question: "What payment methods does Kynda accept?",
        answer: "We accept various payment methods including: debit/credit cards (Visa, MasterCard, Verve), bank transfers, USSD codes, and mobile money. All payments are processed securely through our encrypted payment gateway. We're continuously adding more payment options for user convenience."
      },
      {
        question: "Are there any hidden fees or charges?",
        answer: "No hidden fees! The price you see is what you pay. Session prices are clearly displayed before booking. For tutors, our commission is transparently shown in your earnings breakdown. We believe in complete transparency in all financial transactions on our platform."
      },
      {
        question: "How does the refund policy work?",
        answer: "Full refunds are provided for cancellations made 24+ hours in advance. Cancellations within 24 hours receive 50% refunds. If a tutor doesn't show up or there are technical issues from our side, you get a full refund automatically. Refund requests are processed within 3-5 business days."
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely! We use bank-level SSL encryption and comply with PCI DSS standards to protect your payment information. We don't store your full card details on our servers. All transactions are processed through secure, certified payment gateways with multiple layers of security."
      },
      {
        question: "Can I get a receipt for my payments?",
        answer: "Yes, automatic receipts are generated for all transactions and available in your account dashboard. You can download or print receipts for accounting or reimbursement purposes. Receipts include all relevant details: session information, tutor name, amount paid, and transaction date."
      }
    ],
    safety: [
      {
        question: "How does Kynda verify tutors?",
        answer: "Our verification process includes: identity verification, qualification checks, background screening, teaching experience validation, and sometimes demo sessions or interviews. We continuously monitor tutor performance and maintain high standards through regular reviews and student feedback."
      },
      {
        question: "What safety measures are in place for students?",
        answer: "We implement multiple safety layers: verified tutors only, session recording (with consent), secure messaging platform, emergency reporting features, parental controls for minors, and 24/7 moderation. Students and parents can also rate and review tutors after each session."
      },
      {
        question: "How is my personal data protected?",
        answer: "We take data protection seriously. Your information is encrypted, stored on secure servers, and never shared with third parties without consent. We comply with data protection regulations and regularly undergo security audits. You have control over your privacy settings and can request data deletion."
      },
      {
        question: "What should I do if I encounter inappropriate behavior?",
        answer: "Immediately use the 'Report' feature during sessions or contact our safety team directly. We take all reports seriously and investigate promptly. In case of emergencies, end the session and contact local authorities if necessary, then inform our team for appropriate action and support."
      }
    ]
  };

  const currentFAQs = faqData[activeCategory];
  const filteredFAQs = currentFAQs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularQuestions = [
    "How much does tutoring cost on Kynda?",
    "Can I try a session before committing?",
    "What if I have technical issues during a session?",
    "How do I become a verified tutor?",
    "Are there group session options?"
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-y-48 translate-x-48 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about Kynda. Can't find what you're looking for? Our support team is here to help.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-500 text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          activeCategory === category.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm ${
                        activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Popular Questions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Popular Questions</h4>
                  <div className="space-y-2">
                    {popularQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(question.replace('?', ''))}
                        className="w-full text-left p-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    {categories.find(cat => cat.id === activeCategory)?.icon}
                    <h2 className="text-2xl font-bold">
                      {categories.find(cat => cat.id === activeCategory)?.name} Questions
                    </h2>
                  </div>
                  <p className="text-blue-100">
                    {filteredFAQs.length} questions found {searchQuery && `for "${searchQuery}"`}
                  </p>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                  {filteredFAQs.map((faq, index) => (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(activeCategory, index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors duration-200">
                          {faq.question}
                        </h3>
                        {openItems[`${activeCategory}-${index}`] ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-200" />
                        )}
                      </button>
                      <div 
                        className={`px-6 transition-all duration-300 overflow-hidden ${
                          openItems[`${activeCategory}-${index}`] ? 'max-h-96 pb-6' : 'max-h-0'
                        }`}
                      >
                        <div className="pl-2 border-l-2 border-blue-200">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No Results */}
                {filteredFAQs.length === 0 && (
                  <div className="p-12 text-center">
                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any questions matching "{searchQuery}"
                    </p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear search and show all questions
                    </button>
                  </div>
                )}
              </div>

              {/* Support CTA */}
              <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Our support team is available 24/7 to help you with any questions or concerns you might have about using Kynda.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Live Chat</span>
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Email Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;