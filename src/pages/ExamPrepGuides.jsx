import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Download,
  PlayCircle,
  Search,
  Filter,
  Award,
  Target,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ExamPrepGuides = () => {
  const [activeExam, setActiveExam] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const exams = [
    { id: 'all', name: 'All Exams', count: 45 },
    { id: 'waec', name: 'WAEC', count: 15 },
    { id: 'neco', name: 'NECO', count: 12 },
    { id: 'jamb', name: 'JAMB', count: 10 },
    { id: 'post-utme', name: 'Post-UTME', count: 8 }
  ];

  const guides = [
    {
      id: 1,
      title: "WAEC Mathematics Complete Guide 2024",
      exam: "waec",
      subject: "Mathematics",
      pages: 156,
      duration: "6 weeks",
      rating: 4.9,
      students: 3200,
      downloads: 1500,
      price: "₦2,500",
      free: false,
      featured: true,
      lastUpdated: "2024-01-15",
      tutor: "Mathematics Experts Team"
    },
    {
      id: 2,
      title: "JAMB English Language Mastery",
      exam: "jamb",
      subject: "English Language",
      pages: 89,
      duration: "4 weeks",
      rating: 4.8,
      students: 2800,
      downloads: 1200,
      price: "Free",
      free: true,
      featured: false,
      lastUpdated: "2024-01-10",
      tutor: "English Department"
    },
    {
      id: 3,
      title: "NECO Physics Question Patterns",
      exam: "neco",
      subject: "Physics",
      pages: 112,
      duration: "5 weeks",
      rating: 4.7,
      students: 1900,
      downloads: 950,
      price: "₦1,800",
      free: false,
      featured: true,
      lastUpdated: "2024-01-08",
      tutor: "Dr. Physics Expert"
    },
    {
      id: 4,
      title: "Post-UTME Success Strategies",
      exam: "post-utme",
      subject: "General Preparation",
      pages: 67,
      duration: "3 weeks",
      rating: 4.9,
      students: 2100,
      downloads: 1100,
      price: "Free",
      free: true,
      featured: false,
      lastUpdated: "2024-01-12",
      tutor: "Admission Experts"
    },
    {
      id: 5,
      title: "WAEC Biology Comprehensive Guide",
      exam: "waec",
      subject: "Biology",
      pages: 134,
      duration: "6 weeks",
      rating: 4.8,
      students: 2400,
      downloads: 1300,
      price: "₦2,200",
      free: false,
      featured: false,
      lastUpdated: "2024-01-05",
      tutor: "Biology Masters Team"
    },
    {
      id: 6,
      title: "JAMB Mathematics Formula Sheet",
      exam: "jamb",
      subject: "Mathematics",
      pages: 45,
      duration: "2 weeks",
      rating: 4.6,
      students: 3500,
      downloads: 1800,
      price: "Free",
      free: true,
      featured: true,
      lastUpdated: "2024-01-18",
      tutor: "Math Quick Review"
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesExam = activeExam === 'all' || guide.exam === activeExam;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesExam && matchesSearch;
  });

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-y-32 -translate-x-32 opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Target className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Exam Prep Guides
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive study guides, past questions, and expert strategies to help you excel in your examinations and achieve academic success.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for exam guides, subjects, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {exams.map(exam => (
              <button
                key={exam.id}
                onClick={() => setActiveExam(exam.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeExam === exam.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{exam.name}</span>
                <span className="text-sm opacity-75">({exam.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {activeExam === 'all' ? 'All Exam Preparation Guides' : 
                 exams.find(e => e.id === activeExam)?.name + ' Preparation Guides'}
              </h2>
              <p className="text-gray-600">
                {filteredGuides.length} guides found
              </p>
            </div>
            <button className="flex items-center space-x-2 bg-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
              <Filter className="w-5 h-5" />
              <span>Filter by Subject</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map(guide => (
              <div 
                key={guide.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${
                  guide.featured ? 'ring-2 ring-yellow-400' : ''
                } ${guide.free ? 'border-2 border-green-200' : ''}`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {guide.exam.toUpperCase()}
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        {guide.subject}
                      </span>
                    </div>
                    {guide.featured && (
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                    {guide.title}
                  </h3>

                  {/* Tutor */}
                  <p className="text-gray-600 text-sm mb-4">By {guide.tutor}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{guide.pages} pages</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.duration}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span>{guide.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span>{guide.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {guide.free ? (
                        <span className="text-2xl font-bold text-green-600">FREE</span>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900">{guide.price}</span>
                      )}
                    </div>
                    <button className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                      guide.free 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    } group-hover:scale-105 transform transition-transform duration-200`}>
                      {guide.free ? <Download className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                      <span>{guide.free ? 'Download' : 'Get Guide'}</span>
                    </button>
                  </div>

                  {/* Last Updated */}
                  <div className="mt-4 text-xs text-gray-500 flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {new Date(guide.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold border-2 border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
              Load More Guides
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h2 className="text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how students achieved excellent results using our exam preparation guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chiamaka O.", score: "A1 in Mathematics", story: "The WAEC Math guide helped me understand complex topics easily." },
              { name: "Ibrahim S.", score: "320 in JAMB", story: "Comprehensive preparation materials made all the difference." },
              { name: "Grace M.", score: "A1 in Physics", story: "The structured approach helped me cover the syllabus efficiently." }
            ].map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {story.score.split(' ')[0]}
                </div>
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <p className="text-orange-400 font-semibold mb-4">{story.score}</p>
                <p className="text-gray-300 text-sm">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamPrepGuides;