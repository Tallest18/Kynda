import React, { useState } from 'react';
import { Search, Bell, Users, FileText, Download, Eye, ExternalLink } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorResource1 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [resources] = useState([
    { id: 1, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' },
    { id: 2, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' },
    { id: 3, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' },
    { id: 4, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' },
    { id: 5, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' },
    { id: 6, title: 'WAEC Mathematics Past Questions', category: 'Mathematics', downloads: 1205, size: 'PDF', date: 'Post 05th, 2023' }
  ]);

  const [quickLinks] = useState([
    { title: 'JAMB SYLLABUS 2024', subtitle: 'Latest Syllabus for all Subjects', url: '#' },
    { title: 'WAEC Scheme of Work', subtitle: 'Official weekly work schedule', url: '#' },
    { title: 'Teaching Guidelines', subtitle: 'Access our teaching guidelines document', url: '#' },
    { title: 'Marking Scheme', subtitle: 'Guidelines for Grading and Feedback with Criteria', url: '#' }
  ]);

  return (
    <div className="min-h-screen mt-5 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-resource1"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">Resources</h1>
          
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

        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Access learning materials, past questions and educational resources</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Total Resources</span>
              <FileText className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">245</div>
            <p className="text-xs md:text-sm text-gray-500">Available resources</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Downloads</span>
              <Download className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">42</div>
            <p className="text-xs md:text-sm text-gray-500">Files downloaded</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Subjects</span>
              <FileText className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">18</div>
            <p className="text-xs md:text-sm text-gray-500">Hours of content</p>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6 md:mb-8">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-sm md:text-base">Featured Resources</h2>
            </div>
            <button className="text-blue-600 text-xs md:text-sm">6 Resources Added</button>
          </div>

          {resources.length === 0 ? (
            <div className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-300">
                <FileText className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Resources Yet</h3>
              <p className="text-gray-500 text-sm">Resources will appear here when available</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {resources.map(resource => (
                <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{resource.size}</span>
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-1">{resource.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{resource.category}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <span>{resource.date}</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-blue-700">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold text-sm md:text-base">Quick Links</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                  <p className="text-xs text-gray-500">{link.subtitle}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorResource1;