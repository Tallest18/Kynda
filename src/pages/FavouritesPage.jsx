import React, { useState } from 'react';
import { Heart, Star, Trash2, BookOpen, Clock, Users, Filter, Grid, List, Search } from 'lucide-react';
import { MdVerified } from 'react-icons/md';
import StudentNavbar from '../components/StudentNavbar';
import Footer from '../components/Footer';

const FavoritesPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      type: 'tutor',
      name: 'Belrah Mercy',
      title: 'Science Tutor',
      rating: 4.9,
      reviews: 156,
      students: 234,
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      price: '₦5,000/hr',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      verified: true
    },
    {
      id: 2,
      type: 'tutor',
      name: 'Chidi Okonkwo',
      title: 'Mathematics Expert',
      rating: 4.8,
      reviews: 143,
      students: 198,
      subjects: ['Mathematics', 'Further Math'],
      price: '₦4,500/hr',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      verified: true
    },
    {
      id: 3,
      type: 'course',
      name: 'Advanced Chemistry',
      title: '12-Week Course',
      rating: 4.7,
      reviews: 89,
      students: 156,
      subjects: ['Chemistry'],
      price: '₦45,000',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&h=200&fit=crop',
      verified: false
    },
    {
      id: 4,
      type: 'tutor',
      name: 'Amina Hassan',
      title: 'English & Literature',
      rating: 5.0,
      reviews: 201,
      students: 312,
      subjects: ['English', 'Literature'],
      price: '₦4,000/hr',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      verified: true
    },
    {
      id: 5,
      type: 'course',
      name: 'JAMB Preparation',
      title: '8-Week Intensive',
      rating: 4.9,
      reviews: 167,
      students: 423,
      subjects: ['Mathematics', 'English', 'Physics'],
      price: '₦35,000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop',
      verified: false
    },
    {
      id: 6,
      type: 'tutor',
      name: 'Tunde Bakare',
      title: 'Physics Specialist',
      rating: 4.6,
      reviews: 92,
      students: 145,
      subjects: ['Physics', 'Mathematics'],
      price: '₦5,500/hr',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      verified: true
    }
  ]);

  const filters = [
    { id: 'all', label: 'All', count: favorites.length },
    { id: 'tutor', label: 'Tutors', count: favorites.filter(f => f.type === 'tutor').length },
    { id: 'course', label: 'Courses', count: favorites.filter(f => f.type === 'course').length }
  ];

  const filteredFavorites = favorites.filter(item => {
    const matchesFilter = filter === 'all' || item.type === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRemove = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const FavoriteCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => handleRemove(item.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group"
        >
          <Heart size={20} className="fill-red-500 text-red-500 group-hover:fill-red-600 group-hover:text-red-600" />
        </button>
        <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
          {item.type === 'tutor' ? 'Tutor' : 'Course'}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
            {item.name}
            {item.verified && <MdVerified className="text-green-500" size={18} />}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} className="fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.title}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.subjects.map((subject, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
              {subject}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Users size={16} />
            {item.students} students
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={16} />
            {item.reviews} reviews
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-xl font-bold text-blue-600">{item.price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            {item.type === 'tutor' ? 'Book Session' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </div>
  );

  const FavoriteListItem = ({ item }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      <div className="flex gap-4 p-5">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                {item.name}
                {item.verified && <MdVerified className="text-green-500" size={18} />}
              </h3>
              <p className="text-gray-600 text-sm">{item.title}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} className="fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {item.subjects.map((subject, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                {subject}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Users size={16} />
                {item.students} students
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={16} />
                {item.reviews} reviews
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-blue-600">{item.price}</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {item.type === 'tutor' ? 'Book' : 'Enroll'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
            <Heart size={32} className="text-red-500 fill-red-500" />
            My Favorites
          </h1>
          <p className="text-gray-600">Your saved tutors and courses</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search favorites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters & View Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 flex-1 md:flex-initial">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === f.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {f.label}
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      filter === f.id ? 'bg-blue-500' : 'bg-gray-300'
                    }`}>
                      {f.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Favorites List */}
        {filteredFavorites.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Heart size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">Start adding tutors and courses to your favorites!</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Browse Tutors
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavorites.map((item) => (
              <FavoriteCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFavorites.map((item) => (
              <FavoriteListItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;