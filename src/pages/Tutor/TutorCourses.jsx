import React, { useState } from 'react';
import { Search, Bell, Users, BookOpen, Plus, Eye, Edit, Trash2, Copy, X, Check, Upload } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseDescription: '',
    courseOverview: '',
    courseLevel: '',
    subject: '',
    setPrice: '',
    courseDuration: ''
  });

  const [courses] = useState([
    {
      id: 1,
      title: 'Advanced Mathematics for JAMB',
      category: 'Mathematics',
      status: 'Published',
      students: 234,
      enrolled: 234,
      revenue: 5832,
      reviews: 234,
      price: '₦15,000'
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      category: 'Physics',
      status: 'Published',
      students: 234,
      enrolled: 234,
      revenue: 3582,
      reviews: 234,
      price: '₦12,000'
    },
    {
      id: 3,
      title: 'English Language Mastery',
      category: 'English',
      status: 'Draft',
      students: 234,
      enrolled: 234,
      revenue: 2582,
      reviews: 234,
      price: '₦10,000'
    },
    {
      id: 4,
      title: 'Advanced Mathematics for JAMB',
      category: 'Mathematics',
      status: 'Published',
      students: 234,
      enrolled: 234,
      revenue: 3582,
      reviews: 234,
      price: '₦15,000'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowCreateModal(false);
      setShowPublishModal(true);
    }
  };

  const handlePublish = () => {
    setShowPublishModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-courses"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">My Courses</h1>
          
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

        {/* Stats */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <p className="text-sm text-gray-600">Earning and course offerings</p>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 justify-center sm:justify-start"
            >
              <Plus className="w-4 h-4" />
              Add Course
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-sm">Total Revenue</span>
                <Eye className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">₦5,832,000</div>
              <p className="text-xs md:text-sm text-gray-500">from all courses</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-sm">Total Courses</span>
                <BookOpen className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">435</div>
              <p className="text-xs md:text-sm text-gray-500">Active enrollments</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600 text-sm">Students</span>
                <Users className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">435</div>
              <p className="text-xs md:text-sm text-gray-500">All time</p>
            </div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-sm md:text-base">Your Courses</h2>
            </div>
            <button className="text-blue-600 text-xs md:text-sm">4 Courses</button>
          </div>
          
          {courses.length === 0 ? (
            <div className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-300">
                <BookOpen className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Courses Yet</h3>
              <p className="text-gray-500 text-sm mb-4">Create your first course to start teaching</p>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Create Course
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrolled</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reviews</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {courses.map(course => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4">
                        <div className="font-medium text-sm">{course.title}</div>
                        <div className="text-sm text-gray-500">{course.price}</div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900">{course.category}</td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900">{course.enrolled}</td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900">₦{course.revenue}</td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900">{course.reviews}</td>
                      <td className="px-4 md:px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          course.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Copy className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <div>
                <h2 className="text-lg md:text-xl font-bold">Upload New Course</h2>
                <p className="text-xs md:text-sm text-gray-600">Create and upload course for your students</p>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5, 6, 7].map(step => (
                  <div key={step} className="flex items-center flex-shrink-0">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm ${
                      step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 7 && <div className={`w-8 md:w-12 h-0.5 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Title *</label>
                    <input
                      type="text"
                      name="courseTitle"
                      value={formData.courseTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Insert your course title"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Description *</label>
                    <textarea
                      name="courseDescription"
                      value={formData.courseDescription}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Write a brief description of what students will learn"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Overview *</label>
                    <textarea
                      name="courseOverview"
                      value={formData.courseOverview}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Provide a detailed overview of this course (Max 500 words)"
                    />
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Level *</label>
                    <select
                      name="courseLevel"
                      value={formData.courseLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="">Select subject</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Set Price *</label>
                    <input
                      type="text"
                      name="setPrice"
                      value={formData.setPrice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="e.g 15,000"
                    />
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center">
                      <Upload className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Drop file here or click to upload a file</p>
                      <p className="text-xs text-gray-400 mt-1">Supports JPG, PNG (Max 5mb)</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Materials (PDFs, Videos, Zip)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center">
                      <Upload className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Drop file here or click to upload a file</p>
                      <p className="text-xs text-gray-400 mt-1">If there are no files, just click on Submit.</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 7 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Add Quiz Questions</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-8 text-center">
                      <Plus className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Create quiz questions to test your students</p>
                      <p className="text-xs text-gray-400 mt-1">If there are no quiz, just click on Finish</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-6 md:mt-8">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 md:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="ml-auto px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  {currentStep === 7 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Publish Course</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">Are you sure you want to publish this course? It will then be accessible to students.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPublishModal(false)}
                className="flex-1 px-4 md:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handlePublish}
                className="flex-1 px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Publish Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Course Created</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">Your course has been successfully created and is now available to your students.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                View All Courses
              </button>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 px-4 md:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorCourses;