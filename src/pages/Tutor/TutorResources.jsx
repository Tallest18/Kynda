import React, { useState } from 'react';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  PlayCircle,
  Search,
  Filter,
  Users,
  TrendingUp,
  Award,
  Star,
  Clock,
  ArrowRight,
  BookMarked
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TutorResources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 89 },
    { id: 'teaching', name: 'Teaching Guides', count: 23 },
    { id: 'technology', name: 'Tech Tools', count: 15 },
    { id: 'business', name: 'Business Growth', count: 18 },
    { id: 'subject', name: 'Subject Resources', count: 33 }
  ];

  const resources = [
    {
      id: 1,
      title: "Effective Online Teaching Strategies",
      category: "teaching",
      type: "guide",
      format: "PDF",
      pages: 45,
      duration: "30 min read",
      level: "All Levels",
      rating: 4.9,
      downloads: 1200,
      featured: true,
      description: "Comprehensive guide to engaging students in virtual classrooms"
    },
    {
      id: 2,
      title: "Virtual Classroom Tools Masterclass",
      category: "technology",
      type: "video",
      format: "MP4",
      duration: "45 minutes",
      level: "Beginner",
      rating: 4.7,
      downloads: 890,
      featured: false,
      description: "Learn to use all Kynda platform features effectively"
    },
    {
      id: 3,
      title: "Building Your Tutor Brand",
      category: "business",
      type: "worksheet",
      format: "PDF + Excel",
      pages: 28,
      duration: "2 weeks",
      level: "Intermediate",
      rating: 4.8,
      downloads: 650,
      featured: true,
      description: "Step-by-step guide to growing your tutoring business"
    },
    {
      id: 4,
      title: "Mathematics Teaching Resources Pack",
      category: "subject",
      type: "resource-pack",
      format: "ZIP",
      pages: 156,
      duration: "Ongoing",
      level: "All Levels",
      rating: 4.9,
      downloads: 2100,
      featured: true,
      description: "Complete set of worksheets, exercises, and lesson plans"
    },
    {
      id: 5,
      title: "Student Engagement Techniques",
      category: "teaching",
      type: "video",
      format: "MP4",
      duration: "38 minutes",
      level: "Intermediate",
      rating: 4.6,
      downloads: 720,
      featured: false,
      description: "Proven methods to keep students engaged and motivated"
    },
    {
      id: 6,
      title: "Science Experiment Demonstrations",
      category: "subject",
      type: "video-series",
      format: "MP4 Series",
      duration: "4 hours",
      level: "Advanced",
      rating: 4.9,
      downloads: 540,
      featured: false,
      description: "Virtual science experiments for online teaching"
    }
  ];

  const featuredResources = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tutor Success Dashboard",
      description: "Track your performance and growth metrics",
      link: "/tutor-dashboard"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Forum",
      description: "Connect with other tutors and share best practices",
      link: "/community"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Program",
      description: "Advanced teaching certifications and badges",
      link: "/certification"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Weekly Webinars",
      description: "Live training sessions with education experts",
      link: "/webinars"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-5 h-5" />;
      case 'guide': return <BookOpen className="w-5 h-5" />;
      case 'worksheet': return <FileText className="w-5 h-5" />;
      case 'resource-pack': return <BookMarked className="w-5 h-5" />;
      case 'video-series': return <Video className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-600';
      case 'guide': return 'bg-blue-100 text-blue-600';
      case 'worksheet': return 'bg-green-100 text-green-600';
      case 'resource-pack': return 'bg-purple-100 text-purple-600';
      case 'video-series': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48 opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Tutor Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive teaching materials, training resources, and professional development tools to enhance your tutoring practice.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for teaching guides, tools, or subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Tools & Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {activeCategory === 'all' ? 'All Tutor Resources' : 
                 categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredResources.length} resources found
              </p>
            </div>
            <button className="flex items-center space-x-2 bg-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <div 
                key={resource.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${
                  resource.featured ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                      <span className="capitalize">{resource.type}</span>
                    </div>
                    {resource.featured && (
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>{resource.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{resource.duration}</span>
                    </div>
                    {resource.pages && (
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{resource.pages} pages</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                        {resource.level}
                      </span>
                    </div>
                  </div>

                  {/* Stats & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <button className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors duration-200 group-hover:scale-110 transform transition-transform duration-200 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Load More Resources
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Enhance Your Teaching Practice
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of tutors who are using our resources to improve their teaching skills, grow their business, and make a greater impact on students.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Access All Resources
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Request a Resource
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TutorResources;