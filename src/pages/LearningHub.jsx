import React, { useState } from 'react';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Award, 
  Clock, 
  Users,
  PlayCircle,
  Search,
  Filter,
  Star,
  ArrowRight,
  Calendar
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LearningHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 156 },
    { id: 'math', name: 'Mathematics', count: 34 },
    { id: 'science', name: 'Sciences', count: 28 },
    { id: 'english', name: 'English & Literature', count: 22 },
    { id: 'programming', name: 'Programming', count: 18 },
    { id: 'test-prep', name: 'Test Preparation', count: 32 },
    { id: 'study-tips', name: 'Study Techniques', count: 22 }
  ];

  const resources = [
    {
      id: 1,
      title: "Mastering Quadratic Equations",
      category: "math",
      type: "video",
      duration: "15 min",
      level: "Intermediate",
      rating: 4.8,
      students: 1250,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
      tutor: "Dr. Sarah Johnson",
      featured: true
    },
    {
      id: 2,
      title: "Organic Chemistry Basics",
      category: "science",
      type: "article",
      duration: "8 min read",
      level: "Beginner",
      rating: 4.6,
      students: 890,
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
      tutor: "Prof. Michael Chen"
    },
    {
      id: 3,
      title: "WAEC English Comprehension Guide",
      category: "test-prep",
      type: "guide",
      duration: "25 min",
      level: "All Levels",
      rating: 4.9,
      students: 2100,
      thumbnail: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
      tutor: "Mrs. Adeola Williams",
      featured: true
    },
    {
      id: 4,
      title: "Python Programming for Beginners",
      category: "programming",
      type: "video",
      duration: "45 min",
      level: "Beginner",
      rating: 4.7,
      students: 1560,
      thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400",
      tutor: "David Techson"
    },
    {
      id: 5,
      title: "Effective Note-Taking Strategies",
      category: "study-tips",
      type: "article",
      duration: "6 min read",
      level: "All Levels",
      rating: 4.5,
      students: 3200,
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      tutor: "Learning Experts Team"
    },
    {
      id: 6,
      title: "Physics: Laws of Motion",
      category: "science",
      type: "video",
      duration: "20 min",
      level: "Intermediate",
      rating: 4.8,
      students: 980,
      thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8c3af2913?w=400",
      tutor: "Dr. James Physics"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tutor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-5 h-5" />;
      case 'article': return <FileText className="w-5 h-5" />;
      case 'guide': return <BookOpen className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-600';
      case 'article': return 'bg-blue-100 text-blue-600';
      case 'guide': return 'bg-green-100 text-green-600';
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
            Learning Hub
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Access free educational resources, video tutorials, study guides, and expert tips to enhance your learning journey.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for tutorials, guides, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                {activeCategory === 'all' ? 'All Learning Resources' : 
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
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.thumbnail} 
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {resource.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                      <span className="capitalize">{resource.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{resource.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">By {resource.tutor}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span>{resource.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{resource.students.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <button className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors duration-200 group-hover:scale-110 transform transition-transform duration-200">
                      <ArrowRight className="w-5 h-5" />
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
            Ready to Accelerate Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using our Learning Hub to master new subjects and achieve their academic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore All Resources
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Suggest a Topic
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LearningHub;