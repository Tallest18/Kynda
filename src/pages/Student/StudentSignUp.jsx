import React, { useState, useRef, useCallback } from "react";
import { Eye, EyeOff, BookOpen, Atom, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export default function StudentSignUp() {
  const navigate = useNavigate();
  const { signUp, sendVerificationCode, loading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const debounceTimerRef = useRef(null);
  const isProcessingRef = useRef(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (apiError) setApiError("");
  };

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) newErrors.phone = "Phone number required";
    
    if (!formData.password) {
      newErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleGetStarted = useCallback(async (e) => {
    e.preventDefault();
    
    if (isProcessingRef.current || isSubmitting) {
      console.log("⏸️ Request already in progress, ignoring...");
      return;
    }

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!validate()) {
      return;
    }

    isProcessingRef.current = true;
    setIsSubmitting(true);

    debounceTimerRef.current = setTimeout(async () => {
      try {
        console.log("🚀 Starting signup process...");
        
        const result = await signUp({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        });

        console.log("🎉 Signup successful, full response:", result);
        
        const studentId = result.studentId || localStorage.getItem('kynda_student_id');
        console.log("🎓 Student ID:", studentId);
        
        if (studentId) {
          console.log("✅ Student ID found, sending verification code...");
          
          // Store signup data
          localStorage.setItem('kynda_signup_data', JSON.stringify({
            studentId: studentId,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone
          }));
          
          try {
            // Send verification code using tutor endpoint
            await sendVerificationCode(formData.email);
            console.log("✅ Verification code sent");
          } catch (verifyError) {
            console.warn("⚠️ Failed to send verification code:", verifyError);
            // Continue anyway - user can resend later
          }
          
          // TEMPORARY: Skip verification and go directly to enrollment
          setTimeout(() => {
            navigate("/enrollment-details1");
          }, 500);
        } else {
          console.error("❌ No student ID received from backend");
          setApiError("Signup completed but there was an issue. Please contact support.");
          isProcessingRef.current = false;
          setIsSubmitting(false);
        }
        
      } catch (error) {
        console.error("❌ Signup failed:", error);
        setApiError(
          error.message || 
          error.details?.[0]?.message || 
          "Signup failed. Please try again."
        );
        isProcessingRef.current = false;
        setIsSubmitting(false);
      }
    }, 500);

  }, [formData, signUp, sendVerificationCode, navigate, isSubmitting, validate]);

  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleGoogleSignup = () => {
    console.log("Google signup coming soon...");
  };

  const isLoading = loading || isSubmitting;

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE (Hero Section) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[url('/images/boy2.png')] bg-cover bg-center opacity-80 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-white/20 text-6xl">
          <Atom size={60} className="animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 text-white/20 text-4xl">
          <BookOpen size={40} />
        </div>
        <div className="absolute bottom-32 left-20 text-white/20 text-5xl">
          <DollarSign size={50} />
        </div>

        <div className="flex flex-col justify-between p-12 z-10 w-full">
          <div className="flex items-center gap-2">
            <img
              src="/images/Vector (1).png"
              alt="Kynda Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-800">KYNDA</span>
          </div>

          <div className="space-y-4 mt-70">
            <h1 className="text-4xl font-bold text-gray-900">
              Learn <span className="text-orange-500">Smarter</span> and Improve
              Faster
            </h1>
            <p className="text-gray-700 text-lg">
              Find the right tutors, build confidence, and excel in your exams.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Signup Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-2xl ">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
              <img
                src="/images/Vector (1).png"
                alt="Kynda Logo"
                className="w-10 h-10"
              />
              <span className="text-3xl font-bold">KYNDA</span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Create Your <span className="text-blue-600">Student Account</span>
              </h2>
              <p className="text-gray-600">Join Kynda to start learning today</p>
            </div>

            {apiError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {apiError}
              </div>
            )}

            <form onSubmit={handleGetStarted} className="space-y-4 space-x-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Anabel"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Mercy"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select 
                      disabled={isLoading}
                      className="px-1 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option>🇺🇸 +1</option>
                      <option>🇳🇬 +234</option>
                      <option>🇬🇧 +44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="808 765 4321"
                      disabled={isLoading}
                      className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1E2382] text-white py-3 rounded-lg font-semibold hover:bg-[#151a5f] transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  "Get Started"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-semibold hover:underline">
                Login
              </a>
            </p>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 border-t" />
              <span className="text-gray-500 text-sm">Or</span>
              <div className="flex-1 border-t" />
            </div>

            <button
              onClick={handleGoogleSignup}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}