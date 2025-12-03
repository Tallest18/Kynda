import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, Search, TrendingUp, Users, BookOpen, DollarSign, Plus, Calendar, FileText, Upload } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Training session reminder', message: 'You have scheduled a training session for tomorrow', time: '2m ago', unread: true },
    { id: 2, title: 'New integration announcement', message: 'Join the integrated important list', time: '5m ago', unread: true },
    { id: 3, title: 'User feedback received', message: 'We want to hear your take on our platform', time: '1h ago', unread: false }
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  const monthlyEarnings = [
    { month: 'Jan', amount: 20 },
    { month: 'Feb', amount: 30 },
    { month: 'Mar', amount: 25 },
    { month: 'Apr', amount: 40 },
    { month: 'May', amount: 35 },
    { month: 'Jun', amount: 55 },
    { month: 'Jul', amount: 45 },
    { month: 'Aug', amount: 60 },
    { month: 'Sep', amount: 50 },
    { month: 'Oct', amount: 48 },
    { month: 'Nov', amount: 52 },
    { month: 'Dec', amount: 45 }
  ];

  const enrolledCourses = [
    { name: 'English', value: 582, color: '#3B82F6' },
    { name: 'Exam Prep', value: 356, color: '#10B981' },
    { name: 'Veterinaria', value: 442, color: '#06B6D4' },
    { name: 'Midwifery', value: 356, color: '#8B5CF6' },
    { name: 'Chemistry', value: 291, color: '#F59E0B' }
  ];

  const intelligenceData = [
    { title: 'Smart Content Matching', description: 'Automatically matches your content to topics and saves you time before students', percentage: 82, color: 'bg-blue-500' },
    { title: 'Student Sentiment', description: 'Gives sentiment analysis on student feedback and reviews', percentage: 88, color: 'bg-orange-500' },
    { title: 'Freshness Alert', description: 'Find content that may be outdated or need improvement', percentage: 65, color: 'bg-purple-500' }
  ];

  const premiumImpact = [
    { title: "Earl's Tutoring", benefit: 'Access to Premium Tools', impact: '+50% Session Booking Rate' },
    { title: "At Digital", benefit: 'Advanced Analytics', impact: '+30% Student Retention' },
    { title: "Kate and Evidence", benefit: 'Priority Support', impact: '95% Satisfaction Rate' },
    { title: "Session's Ability", benefit: 'Enhanced Visibility', impact: '+45% Profile Views' }
  ];

  const handleShowAllNotifications = () => {
    setHasNewNotifications(false);
  };

  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-dashboard" 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Welcome Back Belrah! 👋</h1>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 text-sm"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
            <button className="hidden md:flex text-blue-600 items-center gap-1 text-sm">
              <Users className="w-5 h-5" />
              Kynda Assistant
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-gray-100 rounded-lg relative"
              >
                <Bell className="w-5 h-5 md:w-6 md:h-6" />
                {hasNewNotifications && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-semibold">Notification</h3>
                    <button onClick={() => setShowNotifications(false)} className="text-gray-400">×</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-gray-100 ${notif.unread ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{notif.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-200">
                    <button 
                      onClick={handleShowAllNotifications}
                      className="w-full text-center text-blue-600 text-sm font-medium py-2 hover:bg-gray-50 rounded"
                    >
                      Show All Notification
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Total Earned</span>
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">₦125,000</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>12% from last week</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Completed Courses</span>
              <BookOpen className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">84</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>8% from last week</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Success Rate</span>
              <BarChart className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">96%</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>2% from last week</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Active Students</span>
              <Users className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">428</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>15% from last week</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4 text-sm md:text-base">Monthly Earning</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyEarnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4 text-sm md:text-base">Students by Subject</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={enrolledCourses}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {enrolledCourses.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-auto">
                {enrolledCourses.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: course.color }}></div>
                    <span className="text-xs md:text-sm">{course.name}</span>
                    <span className="text-xs md:text-sm font-semibold ml-auto">{course.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mb-6 md:mb-8">
          <h3 className="font-semibold mb-4 text-sm md:text-base">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
              <Plus className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-center">Create Course</span>
              <span className="text-xs text-gray-500 text-center hidden md:block">Add New Teaching Material</span>
            </button>
            
            <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-center">Schedule Session</span>
              <span className="text-xs text-gray-500 text-center hidden md:block">Set up new class sections</span>
            </button>
            
            <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
              <BarChart className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-center">View Reports</span>
              <span className="text-xs text-gray-500 text-center hidden md:block">Analyze your performance</span>
            </button>
            
            <button className="p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
              <Upload className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-xs md:text-sm font-medium text-center">Upload Resources</span>
              <span className="text-xs text-gray-500 text-center hidden md:block">Share more resources</span>
            </button>
          </div>
        </div>

        {/* AI Intelligence */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mb-6 md:mb-8">
          <h3 className="font-semibold mb-2 text-sm md:text-base">AI Matching Intelligence</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">How AI is working behind the scenes to help you with your best students</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {intelligenceData.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold">{item.percentage}%</span>
                </div>
                <h4 className="font-semibold text-xs md:text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Impact */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold mb-2 text-sm md:text-base">Premium Membership Impact</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">How premium has helped productivity and performance with a premium</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {premiumImpact.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-xs md:text-sm mb-2">{item.title}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">{item.benefit}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">Student Number:</p>
                  <p className="text-xs font-semibold">50K</p>
                  <p className="text-xs text-gray-600">Pass Rate:</p>
                  <p className="text-xs font-semibold">95%</p>
                  <p className="text-xs text-gray-600">Premium Offer:</p>
                  <p className="text-xs font-semibold">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;