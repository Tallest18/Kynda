import React, { useState } from 'react';
import { 
  Bell, CheckCheck, Trash2, Filter, Calendar, 
  BookOpen, User, CreditCard, Award, MessageSquare,
  Clock, X
} from 'lucide-react';
import Footer from '../components/Footer';
import StudentNavbar from '../components/StudentNavbar'

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'session',
      title: 'Upcoming Math Session',
      message: 'Your Mathematics tutorial with Belrah Mercy starts in 30 minutes',
      time: '10 mins ago',
      read: false,
      icon: Calendar,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment of ₦5,000 for Physics session has been confirmed',
      time: '1 hour ago',
      read: false,
      icon: CreditCard,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message from Tutor',
      message: 'Belrah Mercy sent you a message about tomorrow\'s class',
      time: '2 hours ago',
      read: true,
      icon: MessageSquare,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Achievement Unlocked! 🎉',
      message: 'You\'ve completed 10 sessions! Keep up the great work',
      time: '3 hours ago',
      read: true,
      icon: Award,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 5,
      type: 'course',
      title: 'New Course Available',
      message: 'Advanced Chemistry course is now available for enrollment',
      time: '5 hours ago',
      read: true,
      icon: BookOpen,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 6,
      type: 'profile',
      title: 'Profile Update Reminder',
      message: 'Complete your profile to get better tutor recommendations',
      time: '1 day ago',
      read: true,
      icon: User,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: 7,
      type: 'session',
      title: 'Session Completed',
      message: 'Your Chemistry session has been completed successfully',
      time: '2 days ago',
      read: true,
      icon: CheckCheck,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 8,
      type: 'reminder',
      title: 'Session Reminder',
      message: 'Don\'t forget to book your weekly Physics session',
      time: '3 days ago',
      read: true,
      icon: Bell,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ]);

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'session', label: 'Sessions', count: notifications.filter(n => n.type === 'session').length },
    { id: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length },
    { id: 'message', label: 'Messages', count: notifications.filter(n => n.type === 'message').length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const handleMarkAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const handleDelete = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
        <StudentNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              Notifications
              {unreadCount > 0 && (
                <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold bg-red-500 text-white rounded-full">
                  {unreadCount}
                </span>
              )}
            </h1>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleMarkAllAsRead}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <CheckCheck size={18} />
                Mark all as read
              </button>
              <button 
                onClick={handleDeleteAll}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Trash2 size={18} />
                Clear all
              </button>
            </div>
          </div>
          <p className="text-gray-600">Stay updated with your learning journey</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={20} className="text-gray-600" />
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
                {f.count > 0 && (
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    filter === f.id ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    {f.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Bell size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No notifications</h3>
            <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl shadow-sm border transition-all hover:shadow-md ${
                    notification.read ? 'border-gray-200' : 'border-blue-300 bg-blue-50'
                  }`}
                >
                  <div className="p-4">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 ${notification.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon size={20} className={notification.iconColor} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                          {!notification.read && (
                            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {notification.time}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-start gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <CheckCheck size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(notification.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Load More Notifications
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NotificationsPage;