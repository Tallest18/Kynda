import React, { useState } from 'react';
import StudentNavbar from "../../components/StudentNavbar";
import Footer from "../../components/Footer";
import { 
  Heart, 
  Bookmark, 
  Clock, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Users,
  RefreshCw
} from 'lucide-react';

const DashBoard = () => {
  // Sample Data
  const continueLearning = [
    {
      id: '1',
      title: 'Mathematics & Physics Class',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop',
      lesson: 'Lesson 5 of 7',
      progress: 71,
      tutor: {
        name: 'Baran Mercy',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        title: 'Science Tutor'
      }
    },
    {
      id: '2',
      title: 'Advanced English Literature',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      lesson: 'Lesson 3 of 8',
      progress: 45,
      tutor: {
        name: 'Sarah Johnson',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        title: 'English Tutor'
      }
    },
    {
      id: '3',
      title: 'Chemistry Fundamentals',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
      lesson: 'Lesson 6 of 10',
      progress: 85,
      tutor: {
        name: 'Dr. Michael Chen',
        verified: true,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        title: 'Chemistry Tutor'
      }
    }
  ];

  const courses = Array(6).fill(null).map((_, index) => ({
    id: `course-${index + 1}`,
    title: 'Advanced Mathematics',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    category: 'Secondary',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    duration: '45 mins / 60 mins',
    price: '₦1,000 / ₦2,000per Hour',
    availability: 'Today, 4:30 PM',
    tutor: {
      name: 'Baran Mercy',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      title: 'Science Tutor'
    },
    rating: 4.8,
    reviews: 33,
    isFavorite: index === 0,
    isBookmarked: index === 1
  }));

  const recommendedCourses = Array(4).fill(null).map((_, index) => ({
    id: `rec-${index + 1}`,
    title: 'Preparing for Science Based JAMB/UTME Exams.',
    category: 'Sciences',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    weeks: '8Weeks',
    students: '156 Students Taught',
    originalPrice: '₦150,000',
    price: '₦52,000'
  }));

  const [currentContinueIndex, setCurrentContinueIndex] = useState(0);
  const [currentRecommendedIndex, setCurrentRecommendedIndex] = useState(0);

  const subjects = ['Sciences', 'English', 'Mathematics', 'Arts', 'Exam Prep', 'Literacy', 'Senior Classes', 'WAEC/NECO', 'JAMB/UTME'];

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Navigation Pills */}
        <div className="relative z-10 px-3 sm:px-4 lg:px-6 pt-4 sm:pt-5 lg:pt-6">
          <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap justify-center lg:justify-start">
            {subjects.map((subject) => (
              <button
                key={subject}
                className="px-3 py-1.5 sm:px-4 sm:py-1.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors whitespace-nowrap"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 px-3 sm:px-4 lg:px-6 py-6 sm:py-10 lg:py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 mb-4 sm:mb-5 lg:mb-6 justify-center lg:justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                <span className="text-base sm:text-lg lg:text-xl font-bold">KYNDA</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 leading-tight">
                Unlock Your Potential<br className="hidden sm:block" />With Kynda Tutors!
              </h1>

              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-xs">
                    🎨
                  </div>
                  <span className="font-semibold text-xs sm:text-sm lg:text-lg">Arts</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-lg flex items-center justify-center text-xs">
                    🔬
                  </div>
                  <span className="font-semibold text-xs sm:text-sm lg:text-lg">Science</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-lg flex items-center justify-center text-xs">
                    📚
                  </div>
                  <span className="font-semibold text-xs sm:text-sm lg:text-lg">other Subjects</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 text-xs sm:text-sm lg:text-lg text-center lg:text-left">
                <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={10} className="sm:size-3 lg:size-4" />
                  </div>
                  <span>Expert Tutors</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={10} className="sm:size-3 lg:size-4" />
                  </div>
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={10} className="sm:size-3 lg:size-4" />
                  </div>
                  <span>Achieve your Goals</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={10} className="sm:size-3 lg:size-4" />
                  </div>
                  <span>Personalised Learning</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-500 rounded-full opacity-30 lg:opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Tutor"
                className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl object-cover w-full max-w-md mx-auto h-48 sm:h-64 lg:h-[500px]"
              />
              
              {/* Tutor Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-8 lg:left-8 lg:right-auto bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Tutor"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base truncate">Bel Mercy</span>
                    <CheckCircle size={10} className="sm:size-3 lg:size-3 text-blue-500 flex-shrink-0" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600">Verified Kynda Tutor</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star size={8} className="sm:size-3 lg:size-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <section className="px-3 sm:px-4 lg:px-6 py-6 sm:py-10 lg:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 lg:mb-6 gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center sm:text-left">
            Pick up from where you Stopped
          </h2>
          <div className="flex gap-1.5 sm:gap-2 justify-center sm:justify-start">
            <button 
              onClick={() => setCurrentContinueIndex(Math.max(0, currentContinueIndex - 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={14} className="sm:size-4 lg:size-5" />
            </button>
            <button 
              onClick={() => setCurrentContinueIndex(Math.min(continueLearning.length - 1, currentContinueIndex + 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <ChevronRight size={14} className="sm:size-4 lg:size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {continueLearning.map((item) => (
            <div key={item.id} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-36 lg:h-48 object-cover"
                />
                <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100">
                  <Bookmark size={12} className="sm:size-3 lg:size-4" />
                </button>
              </div>
              
              <div className="p-3 sm:p-4 lg:p-5">
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base line-clamp-2">{item.title}</h3>
                
                {/* Progress Bar */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-600 mb-1">
                    <span>{item.lesson}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div 
                      className="bg-cyan-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tutor Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <img 
                      src={item.tutor.avatar}
                      alt={item.tutor.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-800 truncate">{item.tutor.name}</span>
                        {item.tutor.verified && <CheckCircle size={8} className="sm:size-2 lg:size-3 text-blue-500 flex-shrink-0" />}
                      </div>
                      <p className="text-[9px] sm:text-xs text-gray-500 truncate">{item.tutor.title}</p>
                    </div>
                  </div>
                  <button className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-blue-700 text-white text-[10px] sm:text-xs lg:text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap ml-1.5 sm:ml-2">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-3 sm:px-4 lg:px-6 py-6 sm:py-10 lg:py-12 max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6 text-center sm:text-left">Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 sm:h-36 lg:h-48 object-cover"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/70 text-white px-1.5 py-1 sm:px-2 sm:py-1 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs lg:text-sm backdrop-blur-sm">
                  <Star size={10} className="sm:size-3 lg:size-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-[9px] sm:text-xs text-gray-300 hidden sm:inline">{course.reviews} Reviews</span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1.5 sm:gap-2">
                  <button className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    course.isFavorite ? 'bg-red-500 text-white' : 'bg-white hover:bg-gray-100'
                  }`}>
                    <Heart size={12} className={`sm:size-3 lg:size-4 ${course.isFavorite ? 'fill-white' : ''}`} />
                  </button>
                  <button className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    course.isBookmarked ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'
                  }`}>
                    <Bookmark size={12} className={`sm:size-3 lg:size-4 ${course.isBookmarked ? 'fill-white' : ''}`} />
                  </button>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 lg:p-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
                  <span className="text-[10px] sm:text-xs text-orange-600 font-medium">{course.category}</span>
                  <Clock size={10} className="sm:size-3 text-gray-400" />
                  <span className="text-[10px] sm:text-xs text-gray-500">2 weeks</span>
                </div>

                <div className="mb-2 sm:mb-3">
                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Subjects:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {course.subjects.map((subject, index) => (
                      <span 
                        key={index}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm mb-3 sm:mb-4">
                  <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                  <p><span className="font-semibold text-cyan-600">Price:</span> <span className="text-cyan-600">{course.price}</span></p>
                  <p><span className="font-semibold">Availability:</span> {course.availability}</p>
                </div>

                {/* Tutor Info */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <img 
                      src={course.tutor.avatar}
                      alt={course.tutor.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-800 truncate">{course.tutor.name}</span>
                        {course.tutor.verified && <CheckCircle size={8} className="sm:size-2 lg:size-3 text-blue-500 flex-shrink-0" />}
                      </div>
                      <p className="text-[9px] sm:text-xs text-gray-500 truncate">{course.tutor.title}</p>
                    </div>
                  </div>
                  <button className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-blue-700 text-white text-[10px] sm:text-xs lg:text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap ml-1.5 sm:ml-2">
                    Book Section
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
          <button className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-xs sm:text-sm lg:text-base">
            Load More
            <RefreshCw size={14} className="sm:size-4 lg:size-4" />
          </button>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="px-3 sm:px-4 lg:px-6 py-6 sm:py-10 lg:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 lg:mb-6 gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center sm:text-left">Recommended for You</h2>
          <div className="flex gap-1.5 sm:gap-2 justify-center sm:justify-start">
            <button 
              onClick={() => setCurrentRecommendedIndex(Math.max(0, currentRecommendedIndex - 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={14} className="sm:size-4 lg:size-5" />
            </button>
            <button 
              onClick={() => setCurrentRecommendedIndex(Math.min(recommendedCourses.length - 1, currentRecommendedIndex + 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <ChevronRight size={14} className="sm:size-4 lg:size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 sm:h-36 lg:h-48 object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-cyan-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium">
                  {course.category}
                </div>
              </div>
              
              <div className="p-3 sm:p-4 lg:p-5">
                <p className="text-[10px] sm:text-xs text-orange-600 font-medium mb-1.5 sm:mb-2">Exam Prep</p>
                <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base line-clamp-2">{course.title}</h3>
                
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-[10px] sm:text-xs lg:text-sm text-gray-600 mb-3 sm:mb-4 flex-wrap">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Clock size={10} className="sm:size-3 lg:size-4" />
                    <span>{course.weeks}</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Users size={10} className="sm:size-3 lg:size-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="min-w-0">
                    <span className="text-gray-400 line-through text-[10px] sm:text-xs lg:text-sm">{course.originalPrice}</span>
                    <span className="text-cyan-600 font-bold text-sm sm:text-base lg:text-lg ml-1 sm:ml-1.5 lg:ml-2 block sm:inline">{course.price}</span>
                  </div>
                  <button className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 border-2 border-blue-700 text-blue-700 text-[10px] sm:text-xs lg:text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap ml-1.5 sm:ml-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DashBoard;