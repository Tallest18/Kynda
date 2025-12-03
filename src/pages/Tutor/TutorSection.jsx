import React, { useState } from 'react';
import { Search, Bell, Users, Calendar, Clock, MapPin, Plus, Activity } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sessions] = useState([
    { id: 1, tutor: 'Kehid Oludiji', subject: 'Science, KCSE', avatar: 'KO', status: 'Online', time: '12:00-05:00pm', location: '10:00 aftmoon' },
    { id: 2, tutor: 'Kehid Oludiji', subject: 'Science, KCSE', avatar: 'KO', status: 'Online', time: '12:00-05:00pm', location: '10:00 aftmoon' },
    { id: 3, tutor: 'Kehid Oludiji', subject: 'Science, KCSE', avatar: 'KO', status: 'Online', time: '12:00-05:00pm', location: '10:00 aftmoon' }
  ]);

  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-section"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">My Sessions</h1>
          
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

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <p className="text-gray-600 text-sm md:text-base">Manage your upcoming and past sessions</p>
          <div className="flex items-center gap-2 flex-wrap">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
              Profile Setting
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
              Get Availability
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Completed Sessions</span>
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">₦125,000</div>
            <p className="text-xs md:text-sm text-gray-500">1 completed, 1 running</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Upcoming</span>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">84</div>
            <p className="text-xs md:text-sm text-gray-500">6 more, 1 pending chat</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Session Completed</span>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">98%</div>
            <p className="text-xs md:text-sm text-gray-500">All successful and completed</p>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="font-semibold text-sm md:text-base">Upcoming Sessions</h2>
            <button className="text-blue-600 text-xs md:text-sm">3 Sessions</button>
          </div>

          {sessions.length === 0 ? (
            <div className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-300">
                <Calendar className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Upcoming Sessions</h3>
              <p className="text-gray-500 text-sm mb-4">You don't have any sessions scheduled yet</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Schedule Session
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {sessions.map(session => (
                <div key={session.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-semibold text-blue-600 text-sm md:text-base">{session.avatar}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm">{session.tutor}</h3>
                      <p className="text-xs text-gray-500">{session.subject}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-8">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Mathematics</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Sat, Dec 28</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{session.location}</span>
                    </div>

                    <span className="text-green-600 text-xs md:text-sm font-medium">{session.status}</span>
                  </div>
                    
                  <div className="flex gap-2 flex-wrap">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50">
                      Join Section
                    </button>
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorSection;