import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, X, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword, resetPassword } = useAuth();
  
  const [step, setStep] = useState(1); // 1: Email, 2: Check Email, 3: Reset Password, 4: Success
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Extract token from URL when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setResetToken(token);
      setStep(3); // Go directly to reset password step
    }
  }, []);

  // Step 1: Send reset email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await forgotPassword(email);
      setStep(2); // Move to "Check Your Email" step
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  // Resend email
  const handleResendEmail = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await forgotPassword(email);
      alert('Reset email resent successfully!');
    } catch (err) {
      setError(err.message || 'Failed to resend email');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Reset password with token
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    try {
      await resetPassword({ 
        token: resetToken,
        password, 
        confirmPassword 
      });
      setStep(4); // Move to success step
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          {/* Step 1: Enter Email */}
          {step === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {/* Back Button */}
              <button
                onClick={handleBackToLogin}
                className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Logo - Replace with your actual logo */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  {/* Uncomment and use your logo: */}
                  {/* <img src={KyndaLogo} alt="Kynda" className="w-10 h-10" /> */}
                  
                  {/* Placeholder logo - Replace with your actual logo */}
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Forgot Your Password?
                </h1>
                <p className="text-gray-500 text-sm">
                  Enter your email address and we will send you instructions to reset your password
                </p>
              </div>

              {/* Email Input */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-sm"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleEmailSubmit}
                  disabled={isLoading || !email}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Continue'
                  )}
                </button>

                {/* Back Link */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Check Your Email */}
          {step === 2 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative">
              {/* Close Button */}
              <button
                onClick={handleBackToLogin}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Check Your Email
              </h2>
              
              <p className="text-gray-600 text-sm mb-6">
                Please check the email address <span className="font-semibold text-gray-900">{email}</span> for instructions to reset your password.
              </p>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              {/* Resend Button */}
              <button
                onClick={handleResendEmail}
                disabled={isLoading}
                className="w-full max-w-xs mx-auto bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Resending...' : 'Resend mail'}
              </button>
            </div>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {/* Back Button */}
              <button
                onClick={() => setStep(1)}
                className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Reset password
                </h1>
              </div>

              {/* Password Inputs */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="**********"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="**********"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleResetPassword}
                  disabled={isLoading || !password || !confirmPassword}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Resetting...</span>
                    </div>
                  ) : (
                    'Continue'
                  )}
                </button>

                {/* Back Link */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative">
              {/* Close Button */}
              <button
                onClick={handleBackToLogin}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Successful!
              </h2>
              
              <p className="text-gray-600 text-sm mb-8">
                Your password has successfully been reset. Kindly login to proceed to the dashboard
              </p>

              {/* Login Button */}
              <button
                onClick={handleBackToLogin}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Login to Account
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ForgetPassword;