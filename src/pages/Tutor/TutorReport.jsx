import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Search, Bell, Users, TrendingUp } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const monthlyData = [
    { month: 'Jan', sessions: 30, earnings: 20 },
    { month: 'Feb', sessions: 40, earnings: 30 },
    { month: 'Mar', sessions: 35, earnings: 25 },
    { month: 'Apr', sessions: 50, earnings: 40 },
    { month: 'May', sessions: 45, earnings: 35 },
    { month: 'Jun', sessions: 60, earnings: 55 },
    { month: 'Jul', sessions: 55, earnings: 45 },
    { month: 'Aug', sessions: 70, earnings: 60 },
    { month: 'Sep', sessions: 65, earnings: 50 },
    { month: 'Oct', sessions: 58, earnings: 48 },
    { month: 'Nov', sessions: 52, earnings: 45 },
    { month: 'Dec', sessions: 45, earnings: 40 }
  ];

  const studentsBySubject = [
    { name: 'English', value: 582, color: '#3B82F6' },
    { name: 'Exam Prep', value: 356, color: '#10B981' },
    { name: 'Veterinaria', value: 442, color: '#06B6D4' },
    { name: 'Midwifery', value: 356, color: '#8B5CF6' },
    { name: 'Chemistry', value: 291, color: '#F59E0B' }
  ];

  const premiumEarnings = [
    { month: 'Jan', premium: 25, basic: 15 },
    { month: 'Feb', premium: 30, basic: 20 },
    { month: 'Mar', premium: 35, basic: 22 },
    { month: 'Apr', premium: 40, basic: 25 },
    { month: 'May', premium: 42, basic: 28 },
    { month: 'Jun', premium: 45, basic: 30 },
    { month: 'Jul', premium: 50, basic: 32 },
    { month: 'Aug', premium: 48, basic: 35 },
    { month: 'Sep', premium: 52, basic: 38 },
    { month: 'Oct', premium: 55, basic: 40 },
    { month: 'Nov', premium: 58, basic: 42 },
    { month: 'Dec', premium: 60, basic: 45 }
  ];

  const intelligenceMatching = [
    { title: 'Smart Subject Matching', percentage: 82, description: 'Understand student queries and matches to relevant courses' },
    { title: 'Student Sentiment', percentage: 88, description: 'Gives sentiment analysis on student feedback and reviews' },
    { title: 'Freshness Alert', percentage: 65, description: 'Find content that may be outdated or need improvement' }
  ];

  const premiumImpact = [
    { title: "Earl's Tutoring", metric: '100% Retention Rate', members: '50K', passRate: '95%', benefit: 'Access to Premium Tools' },
    { title: "At Digital", metric: 'Advanced Analytics', members: '30K', passRate: '92%', benefit: 'Priority Support' },
    { title: "Kate and Evidence", metric: 'Popular Advantages', members: '45K', passRate: '93%', benefit: 'Enhanced Visibility' },
    { title: "Session's Ability", metric: 'Enhanced Visibility', members: '35K', passRate: '94%', benefit: 'Premium Features' }
  ];

  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-report"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">Reports</h1>
          
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
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Overview of your teaching activities and performance</p>

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
              <span className="text-gray-600 text-xs md:text-sm">Total Students</span>
              <Users className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">84</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>8% from last week</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Session Completed</span>
              <TrendingUp className="w-4 h-4 text-gray-400" />
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

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm md:text-base">Sessions & Earnings Trend</h3>
              <button className="text-gray-600 text-xs md:text-sm">Last 12 months</button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="sessions" fill="#3B82F6" name="Sessions" />
                <Bar dataKey="earnings" fill="#10B981" name="Earnings (k)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4 text-sm md:text-base">Students by Subject</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={studentsBySubject}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {studentsBySubject.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {studentsBySubject.map((subject, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }}></div>
                  <span className="text-xs md:text-sm">{subject.name}</span>
                  <span className="text-xs md:text-sm font-semibold ml-auto">{subject.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4 text-sm md:text-base">Monthly Earnings Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#3B82F6" strokeWidth={2} name="Earnings (k)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-4 text-sm md:text-base">Premium Earning Impact</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={premiumEarnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line type="monotone" dataKey="premium" stroke="#F59E0B" strokeWidth={2} name="Premium Users" />
                <Line type="monotone" dataKey="basic" stroke="#3B82F6" strokeWidth={2} name="Basic Users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Intelligence */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mb-6 md:mb-8">
          <h3 className="font-semibold mb-2 text-sm md:text-base">AI Matching Intelligence</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">How AI is working behind the scenes to help you with your best students</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {intelligenceMatching.map((item, idx) => (
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
                <h4 className="font-semibold text-xs md:text-sm mb-3">{item.title}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">{item.benefit}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">Student Number:</p>
                  <p className="text-xs font-semibold">{item.members}</p>
                  <p className="text-xs text-gray-600">Pass Rate:</p>
                  <p className="text-xs font-semibold">{item.passRate}</p>
                  <p className="text-xs text-gray-600">Premium Offer:</p>
                  <p className="text-xs font-semibold">{item.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorReport;