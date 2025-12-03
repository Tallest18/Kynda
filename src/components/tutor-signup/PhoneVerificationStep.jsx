// src/components/tutor-signup/PhoneVerificationStep.jsx
import React from 'react';

const PhoneVerificationStep = ({ handleNext, loading }) => (
  <div className="text-center space-y-6">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">Verify Phone Number</h3>
      <p className="text-sm text-gray-600 mt-2">We'll send a code to verify your number</p>
    </div>
    <button
      onClick={handleNext}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {loading ? 'Sending...' : 'Send Verification Code'}
    </button>
  </div>
);

export default PhoneVerificationStep;