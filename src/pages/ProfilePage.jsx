import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';
import StudentNavbar from '../components/StudentNavbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Belrah Mercy',
    email: 'belrah.mercy@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    bio: 'Passionate science tutor with 5+ years of experience helping students excel in Mathematics, Physics, and Chemistry.',
    dateJoined: 'January 2024',
    studentType: 'Science Student',
    grade: 'SS3'
  });

  const stats = [
    { label: 'Sessions Completed', value: '24', color: 'bg-blue-100 text-blue-600' },
    { label: 'Hours Learned', value: '48', color: 'bg-green-100 text-green-600' },
    { label: 'Tutors Connected', value: '5', color: 'bg-purple-100 text-purple-600' },
    { label: 'Certificates', value: '3', color: 'bg-orange-100 text-orange-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save profile data logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <StudentNavbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
            <button className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
              <Camera size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            {/* Profile Picture */}
            <div className="flex items-end justify-between -mt-16 mb-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <button 
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  isEditing 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isEditing ? (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit2 size={18} />
                    Edit Profile
                  </>
                )}
              </button>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-2xl font-bold text-gray-800">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={18} />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={18} />
                      <span>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Type</label>
                  {isEditing ? (
                    <select
                      name="studentType"
                      value={profileData.studentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Science Student</option>
                      <option>Arts Student</option>
                      <option>Commercial Student</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{profileData.studentType}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
                  {isEditing ? (
                    <select
                      name="grade"
                      value={profileData.grade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>JSS1</option>
                      <option>JSS2</option>
                      <option>JSS3</option>
                      <option>SS1</option>
                      <option>SS2</option>
                      <option>SS3</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{profileData.grade}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>Joined {profileData.dateJoined}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.color} mb-3`}>
                <span className="text-xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subjects */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Enrolled Subjects</h3>
            <div className="space-y-3">
              {['Mathematics', 'Physics', 'Chemistry', 'English'].map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{subject}</span>
                  <span className="text-sm text-green-600 font-medium">Active</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Completed Math session', time: '2 hours ago' },
                { action: 'Booked Physics tutorial', time: '5 hours ago' },
                { action: 'Updated profile', time: '1 day ago' },
                { action: 'Earned certificate', time: '3 days ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;