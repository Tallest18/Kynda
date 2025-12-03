import React from 'react';
import { BarChart, Calendar, BookOpen, FileText, DollarSign, Users, Menu, X } from 'lucide-react';

const TutorSidebar = ({ currentPath, isOpen, onClose }) => {
  const navItems = [
    { path: '/tutor-dashboard', icon: BarChart, label: 'Dashboard' },
    { path: '/tutor-section', icon: Calendar, label: 'My Sessions' },
    { path: '/tutor-courses', icon: BookOpen, label: 'Courses' },
    { path: '/tutor-resource1', icon: FileText, label: 'Resources' },
    { path: '/tutor-earning', icon: DollarSign, label: 'Earnings' },
    { path: '/tutor-report', icon: BarChart, label: 'Report' },
    { path: '/tutor-chat', icon: Users, label: 'Message' }
  ];

  const isActive = (path) => currentPath === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-opacity-20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4 z-50 
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Close button for mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-8">
          <div className="rounded flex items-center justify-center text-white font-bold">
            <img
              src="/images/Vector (1).png"
              alt="Kynda Logo"
              className="w-10 h-10"
            />
          </div>
          <span className="text-xl font-bold">KYNDA</span>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-3">
            <p className="text-sm text-orange-800 mb-2">
              <span className="font-semibold">Upgraded to Premium 🎉</span>
              <br />
              Get 7 days free and unlock all the features of the premium.
            </p>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
              🔥 Upgrade Now
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">BM</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Belrah Merry</p>
              <p className="text-xs text-gray-500">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Mobile Header Component
export const MobileHeader = ({ onMenuClick }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-30 flex items-center justify-between">
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-2">
        <img
          src="/images/Vector (1).png"
          alt="Kynda Logo"
          className="w-8 h-8"
        />
        <span className="text-lg font-bold">KYNDA</span>
      </div>
      <div className="w-10" /> {/* Spacer for centering */}
    </div>
  );
};

export default TutorSidebar;