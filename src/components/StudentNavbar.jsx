import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Grid3x3,
  Wallet,
  Sparkles,
  Heart,
  Bell,
  User,
  Settings,
  LogOut,
  UserPlus,
  ChevronDown,
  MoreHorizontal,
  X,
  Menu,
} from "lucide-react";
import KyndaAssistantModal from "./KyndaAssistantModal"; // Import the AI modal

const StudentNavbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false); // AI Modal state
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: "Training session reminder",
      message: "Don't forget to join your upcoming tra...",
      time: "2:30 PM",
      icon: "calendar",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      unread: true,
    },
    {
      id: 2,
      type: "announcement",
      title: "New integration announcemen...",
      message: "Our admin have update new course for le...",
      time: "3:00 PM",
      icon: "info",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      unread: false,
    },
    {
      id: 3,
      type: "approval",
      title: "Parent Approval",
      message: "Your course enrollment request have bee...",
      time: "12:50 PM",
      icon: "check",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      unread: false,
    },
  ];

  const navLinks = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      active: true,
    },
    { icon: BookOpen, label: "My Learning", href: "/my-learning" },
    { icon: Grid3x3, label: "My Sessions", href: "/booking-section" },
    { icon: Wallet, label: "Wallet", href: "/student-wallet" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Left Section - Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="../images/Vector (1).png"
                alt="Kynda Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-800">
                KYNDA
              </span>
            </div>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={`flex items-center gap-2 font-medium transition-colors ${
                  link.active
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Right Section - Actions & Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Kynda Assistant Button - Opens AI Modal */}
            <button 
              onClick={() => setShowAIAssistant(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              <Sparkles size={16} className="sm:size-4" />
              <span className="font-medium">Kynda Assistant</span>
            </button>

            {/* Mobile Kynda Assistant Icon */}
            <button 
              onClick={() => setShowAIAssistant(true)}
              className="sm:hidden p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Sparkles size={20} />
            </button>

            {/* Favorites Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart size={20} className="sm:size-5" />
            </button>

            {/* Notification Icon with Badge */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                <Bell size={20} className="sm:size-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">
                      Notification
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors"
                      >
                        <div className="flex gap-3">
                          {/* Icon */}
                          <div
                            className={`flex-shrink-0 w-10 h-10 ${notification.iconBg} rounded-full flex items-center justify-center`}
                          >
                            {notification.icon === "calendar" && (
                              <div className={`${notification.iconColor}`}>
                                <Bell size={18} />
                              </div>
                            )}
                            {notification.icon === "info" && (
                              <div className={`${notification.iconColor}`}>
                                <BookOpen size={18} />
                              </div>
                            )}
                            {notification.icon === "check" && (
                              <div className={`${notification.iconColor}`}>
                                <User size={18} />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-medium text-gray-800 text-sm">
                                {notification.title}
                              </p>
                              {notification.unread && (
                                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-gray-200">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                      Show All Notification
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1 pr-2 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-gray-200"
                />
                <ChevronDown
                  size={16}
                  className="text-gray-600 hidden sm:block"
                />
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                  <a
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <User size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">Profile</span>
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <Settings size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">Settings</span>
                  </a>
                  <a
                    href="/favorites"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <Heart size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">Favorites</span>
                  </a>
                  <a
                    href="/notifications"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <Bell size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">
                      Notification
                    </span>
                  </a>
                  <a
                    href="/invite-friend"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <UserPlus size={18} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">
                      Invite a friend
                    </span>
                  </a>
                  <div className="border-t border-gray-200 my-2"></div>
                  <a
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={18} className="text-red-600" />
                    <span className="text-red-600 font-medium">Logout</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="../images/Vector (1).png"
                  alt="Kynda Logo"
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold text-gray-800">KYNDA</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    link.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Kynda Assistant Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => {
                  setShowAIAssistant(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Sparkles size={20} />
                <span className="font-medium">Kynda Assistant</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Modal */}
      <KyndaAssistantModal 
        isOpen={showAIAssistant} 
        onClose={() => setShowAIAssistant(false)} 
      />
    </>
  );
};

export default StudentNavbar;