import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle, ArrowRight, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function EnrollmentDetails1() {
  const navigate = useNavigate();
  const { signupPage2, loading } = useAuth();

  const [formData, setFormData] = useState({
    schoolLevel: "",
    age: "",
    subjects: "",
    lessonType: "",
    location: "",
    struggles: "",
  });

  const [signupData] = useState(() => {
    const storedData = localStorage.getItem('kynda_signup_data');
    
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        console.log("📥 Enrollment page - Signup data:", parsedData);
        return parsedData;
      } catch (error) {
        console.error("Failed to parse signup data:", error);
        return null;
      }
    }
    return null;
  });

  const [showFinalModal, setShowFinalModal] = useState(false);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);
  const [showLessonDropdown, setShowLessonDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (signupData === null) {
      console.warn("No signup data found, redirecting to signup");
      navigate("/signup");
    }
  }, [signupData, navigate]);

  const schoolLevels = ["Primary", "Secondary", "Exam Prep", "Tertiary"];
  const lessonTypes = ["Quick Help", "Structured Tutoring", "Exam Prep"];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.schoolLevel) newErrors.schoolLevel = "School level is required";
    if (!formData.age) newErrors.age = "Age is required";
    else if (parseInt(formData.age) < 16) newErrors.age = "Minimum age is 16 years";
    if (!formData.subjects) newErrors.subjects = "Subjects are required";
    if (!formData.location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = async () => {
    if (!validateForm()) return;

    if (!signupData?.studentId) {
      setApiError("Student ID not found. Please start over.");
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      console.log("🚀 Submitting enrollment for student:", signupData.studentId);
      
      const enrollmentData = {
        studentId: signupData.studentId,
        schoolLevel: formData.schoolLevel,
        Age: formData.age,
        subjects: formData.subjects,
        preferredLessonType: formData.lessonType,
        location: formData.location,
        struggles: formData.struggles,
      };

      const result = await signupPage2(enrollmentData);
      console.log("✅ Enrollment successful:", result);
      
      // Update user as verified after successful enrollment
      const userData = JSON.parse(localStorage.getItem('kynda_user') || '{}');
      userData.isEmailVerified = true;
      localStorage.setItem('kynda_user', JSON.stringify(userData));
      
      setShowFinalModal(true);
      
    } catch (error) {
      console.error("❌ Error:", error);
      setApiError(error?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToDashboard = () => {
    localStorage.removeItem('kynda_signup_data');
    navigate("/dashboard");
  };

  const handleCreateWallet = () => {
    localStorage.removeItem('kynda_signup_data');
    navigate("/connect-account");
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
    if (apiError) setApiError("");
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowSchoolDropdown(false);
      setShowLessonDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  if (!signupData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const isLoading = loading || isSubmitting;
  
  return (
    <div className="min-h-screen flex relative">
      {showFinalModal && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Setup Complete!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Your account has been created successfully. What would you like to do next?
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleGoToDashboard}
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight size={20} />
                  Go to Dashboard
                </button>
                
                <button
                  onClick={handleCreateWallet}
                  className="w-full flex items-center justify-center gap-3 border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Wallet size={20} />
                  Create Wallet
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                You can create your wallet now or later from the dashboard.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[url('../images/boy2.png')] bg-cover bg-center opacity-80 relative overflow-hidden">
        <div className="relative z-10 p-12 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <img src="../images/Vector (1).png" className="w-12 h-12" alt="Kynda Logo" />
            <span className="text-2xl font-bold text-gray-800">KYNDA</span>
          </div>

          <div className="mt-70">
            <h1 className="text-white text-5xl font-bold mb-4">
              Learn <span className="text-orange-500">Smarter</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Tell us about yourself so we can match you with the perfect tutor.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Enrollment Details</h2>
              <p className="text-gray-600 text-sm">Help us understand your learning preferences</p>
            </div>

            {apiError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {apiError}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    School Level *
                  </label>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSchoolDropdown(!showSchoolDropdown);
                    }}
                    className={`w-full px-4 py-3 border ${
                      errors.schoolLevel ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-left flex items-center justify-between ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  >
                    <span className={formData.schoolLevel ? "text-gray-900" : "text-gray-500"}>
                      {formData.schoolLevel || "Select"}
                    </span>
                    <ChevronRight 
                      size={16} 
                      className={`transform transition-transform ${
                        showSchoolDropdown ? "rotate-90" : ""
                      }`} 
                    />
                  </button>

                  {showSchoolDropdown && (
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {schoolLevels.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => {
                            updateFormData("schoolLevel", level);
                            setShowSchoolDropdown(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-blue-50 text-left text-sm border-b border-gray-100 last:border-b-0"
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  )}

                  {errors.schoolLevel && (
                    <p className="text-red-500 text-xs mt-1">{errors.schoolLevel}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => updateFormData("age", e.target.value)}
                    placeholder="Minimum of 16"
                    className={`w-full px-4 py-3 border ${
                      errors.age ? "border-red-500" : "border-gray-300"
                    } rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    min="16"
                    max="100"
                    disabled={isLoading}
                  />
                  {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Subjects *
                </label>
                <input
                  type="text"
                  value={formData.subjects}
                  onChange={(e) => updateFormData("subjects", e.target.value)}
                  placeholder="Math, English, Physics..."
                  className={`w-full px-4 py-3 border ${
                    errors.subjects ? "border-red-500" : "border-gray-300"
                  } rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                />
                {errors.subjects && <p className="text-red-500 text-xs mt-1">{errors.subjects}</p>}
              </div>

              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Preferred Lesson Type
                </label>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLessonDropdown(!showLessonDropdown);
                  }}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  <span className={formData.lessonType ? "text-gray-900" : "text-gray-500"}>
                    {formData.lessonType || "Select"}
                  </span>
                  <ChevronRight 
                    size={16} 
                    className={`transform transition-transform ${
                      showLessonDropdown ? "rotate-90" : ""
                    }`} 
                  />
                </button>

                {showLessonDropdown && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {lessonTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          updateFormData("lessonType", type);
                          setShowLessonDropdown(false);
                        }}
                        className="w-full px-4 py-3 hover:bg-blue-50 text-left text-sm border-b border-gray-100 last:border-b-0"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Location *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData("location", e.target.value)}
                    placeholder="Your location"
                    className={`w-full px-4 py-3 pr-10 border ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    } rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Struggles
                </label>
                <textarea
                  value={formData.struggles}
                  onChange={(e) => updateFormData("struggles", e.target.value)}
                  placeholder="Explain any struggles you have in learning"
                  rows={3}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg resize-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNextClick}
                disabled={isLoading}
                className="flex items-center gap-2 px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}