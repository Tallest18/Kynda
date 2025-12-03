// src/components/EmailVerificationModal.jsx
import React, { useState } from 'react';
import { useAuth } from "../auth/AuthContext";

const EmailVerificationModal = ({ isOpen, onClose, email, onSuccess }) => {
  const { verifyEmail, resendVerificationCode, loading } = useAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isResending, setIsResending] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!code.trim()) {
      setError('Please enter the verification code');
      return;
    }

    if (code.length !== 6) {
      setError('Verification code must be 6 digits');
      return;
    }

    try {
      console.log('🔐 Verifying email with code:', code);
      const result = await verifyEmail({ 
        email, 
        otp: code.trim()
      });
      
      console.log('✅ Email verification successful:', result);
      setMessage('Email verified successfully!');
      
      setTimeout(() => {
        onSuccess();
      }, 1500);
      
    } catch (err) {
      console.error('❌ Email verification failed:', err);
      setError(err.message || 'Invalid verification code. Please try again.');
    }
  };

  const handleResendCode = async () => {
    setError('');
    setMessage('');
    setIsResending(true);

    try {
      console.log('📧 Resending verification code to:', email);
      const result = await resendVerificationCode(email);
      console.log('✅ Resend successful:', result);
      setMessage('Verification code sent successfully! Check your email.');
    } catch (err) {
      console.error('❌ Resend failed:', err);
      setError(err.message || 'Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
    if (error) setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Verify Your Email</h2>
        
        <p className="text-gray-600 mb-4">
          We've sent a 6-digit verification code to <strong className="text-gray-900">{email}</strong>. 
          Please enter the code below to continue.
        </p>

        <form onSubmit={handleVerify}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="000000"
              className="w-full px-4 py-3 text-center text-2xl tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              maxLength={6}
              disabled={loading || isResending}
            />
            <p className="text-xs text-gray-500 mt-1 text-center">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
              {message}
            </div>
          )}

          <div className="flex gap-3 mb-4">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending || loading}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isResending ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                'Resend Code'
              )}
            </button>
            
            <button
              type="submit"
              disabled={loading || !code.trim() || code.length !== 6}
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                'Verify'
              )}
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          disabled={loading || isResending}
          className="w-full py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
        >
          Cancel
        </button>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Didn't receive the code? Check your spam folder or click "Resend Code"
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationModal;