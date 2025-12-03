import React from 'react';

const NoteDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6 p-3 bg-white rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold">N</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Note</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* File info bar */}
        <div className="mb-4 text-sm text-gray-500">
          <span>n---1,27node-id=114-4644&t=CmzbojGsFelyF8BWe-0</span>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  Science Section: Mathematics, Physics and Chemistry
                </h2>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Chemistry - Atomic Structure
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>Jan 27, 2024</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                  Share
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200">
                  <span className="text-gray-600">⋮</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6">
            {/* View/Comment Notice */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600">ℹ</span>
                </div>
                <p className="text-blue-700">
                  You can only view and comment on this file. <span className="font-semibold cursor-pointer hover:underline">Ask to edit</span>
                </p>
              </div>
            </div>

            {/* Document Content */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 mb-6">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <p className="text-lg">Document preview would appear here</p>
                <p className="text-sm mt-2">Import your image to display the actual content</p>
              </div>
            </div>

            {/* Mock Content Sections */}
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Atomic Structure</h3>
                <p className="text-gray-600">
                  The atom consists of a nucleus containing protons and neutrons, with electrons orbiting in shells around the nucleus.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Key Concepts</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Protons: Positively charged particles in the nucleus</li>
                  <li>Neutrons: Neutral particles in the nucleus</li>
                  <li>Electrons: Negatively charged particles in orbitals</li>
                  <li>Atomic number = Number of protons</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <span className="mr-2">💬</span> Comment
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <span className="mr-2">🔖</span> Bookmark
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Open in app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-xl">📝</span>
            <span className="text-xs mt-1">Notes</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">📚</span>
            <span className="text-xs mt-1">Library</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">🔍</span>
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">⚙️</span>
            <span className="text-xs mt-1">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;