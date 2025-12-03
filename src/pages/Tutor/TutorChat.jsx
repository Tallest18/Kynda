import React, { useState } from 'react';
import { Search, Send, Smile, Paperclip, Bell, Users } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorChat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [chats] = useState([
    { id: 1, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: true, online: true },
    { id: 2, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: false, online: false },
    { id: 3, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: false, online: false },
    { id: 4, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: false, online: false },
    { id: 5, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '11:55 am', unread: true, online: true },
    { id: 6, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: false, online: false },
    { id: 7, name: 'Jane Doe', message: 'Hi, I want these hungry about...', time: '12:55 am', unread: true, online: true }
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [message, setMessage] = useState('');

  const [messages] = useState([
    { id: 1, sender: 'Jane Doe', text: 'Hello, I want to know enquiries about a course.', time: '12:55 am', isOwn: false },
    { id: 2, sender: 'You', text: 'Hello Jane, thank you for the message sir!', time: '12:57 am', isOwn: true },
    { id: 3, sender: 'You', text: 'What do you need to know?', time: '12:57 am', isOwn: true },
    { id: 4, sender: 'Jane Doe', text: 'Okay', time: '12:57 am', isOwn: false },
    { id: 5, sender: 'Jane Doe', text: 'Hi again, I want to ask if weekend classes are available within the area.', time: '12:58 am', isOwn: false },
    { id: 6, sender: 'You', text: 'Roger, I will be waiting so get your feedbacks', time: '12:57 am', isOwn: true }
  ]);

  return (
    <div className="min-h-screen mt-5 bg-gray-50 flex">
      <TutorSidebar 
        currentPath="/tutor-chat"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* Chat List - Hidden on mobile when chat is selected */}
      <div className={`${selectedChat ? 'hidden lg:block' : 'block'} fixed lg:static left-0 right-0 top-16 lg:top-0 bottom-0 lg:ml-64 w-full lg:w-96 bg-white border-r border-gray-200 z-20`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold">All Chats</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {['All', 'New', 'Opened'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-sm ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-240px)] lg:h-[calc(100vh-200px)]">
          {chats.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-300">
                  <rect x="20" y="30" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No messages Yet</h3>
              <p className="text-gray-500 text-sm">Your messages will appear here once you start</p>
            </div>
          ) : (
            chats.map(chat => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs md:text-sm font-semibold">JD</span>
                    </div>
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{chat.name}</span>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                  </div>
                  {chat.unread && (
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`${selectedChat ? 'flex' : 'hidden lg:flex'} flex-1 flex-col fixed lg:static inset-0 lg:inset-auto top-16 lg:top-0 z-20 lg:z-0`}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedChat(null)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  ←
                </button>
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs md:text-sm font-semibold">JD</span>
                  </div>
                  {selectedChat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">{selectedChat.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{selectedChat.online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline">Kynda Assistant</span>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="text-center text-xs md:text-sm text-gray-500 mb-6">12 August 2023</div>
                
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] md:max-w-md ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                      <div className={`p-3 rounded-lg ${
                        msg.isOwn 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-200 text-gray-900'
                      }`}>
                        <p className="text-xs md:text-sm">{msg.text}</p>
                      </div>
                      <div className={`flex items-center gap-1 mt-1 ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                        {msg.isOwn && (
                          <span className="text-blue-600">✓✓</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-3 md:p-4">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Smile className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write message"
                  className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
                <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
                  <Users className="w-5 h-5 text-gray-600" />
                </button>
                <button className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm">
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline">Send</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center p-4">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-300">
                  <rect x="20" y="30" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No Open Conversation</h3>
              <p className="text-sm md:text-base text-gray-500">Your messages will appear here when you start them</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorChat;