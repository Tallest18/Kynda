// src/components/Login.jsx - COMPLETE CORRECTED VERSION

import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        {type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default function Login() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast("Please fix the errors above", "error");
      return;
    }

    if (isSubmitting || loading) {
      console.log("Already submitting...");
      return;
    }

    setIsSubmitting(true);
    console.log("🚀 Starting login process...");

    try {
      console.log("📧 Email:", formData.email);
      
      const response = await login({
        email: formData.email.trim(),
        password: formData.password
      });

      console.log("✅ Login response:", response);

      // Check if login was successful (including bypassed verification)
      if (response) {
        showToast("Login successful! Redirecting...", "success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        throw new Error("Login failed with no response");
      }
      
    } catch (err) {
      console.error("❌ Login failed:", err);
      
      const errorMessage = 
        err?.message ||
        err?.response?.data?.message ||
        err?.response?.data?.detail ||
        err?.response?.data?.error ||
        "Invalid credentials. Please try again.";

      console.error("Error message:", errorMessage);

      setErrors({ submit: errorMessage });
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Login process completed");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading && !isSubmitting) {
      handleSubmit(e);
    }
  };

  const isLoading = loading || isSubmitting;

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen flex">
        {/* Left Side */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
          <img
            src="/images/boy3.png"
            alt="Student"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="relative z-10 p-12 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/Vector (1).png"
                alt="Logo"
                className="w-12 h-12"
              />
              <span className="text-white text-2xl font-bold">KYNDA</span>
            </div>

            <div className="mt-70">
              <h1 className="text-white text-4xl font-bold mb-4">
                Welcome Back to <span className="text-orange-500">Kynda</span>
              </h1>
              <p className="text-gray-200 text-xl">
                Continue your learning journey, support your child, or inspire
                new learners — all in one place.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                  />
                ))}
              </div>
              <div className="ml-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-white text-lg font-semibold">4.5</p>
                <p className="text-gray-300 text-lg">from 100+ Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full lg:px-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Welcome Back to{" "}
                  <span className="text-blue-600">Kynda!</span>
                </h2>
                <p className="text-gray-600">Login to your account to continue</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="example@gmail.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter password"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10 ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                <div className="mb-6 text-right">
                  <a
                    href="/forget-password"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Logging in...
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              {errors.submit && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm">
                  {errors.submit}
                </div>
              )}

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an Account?{" "}
                  <a
                    href="/onboarding"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}