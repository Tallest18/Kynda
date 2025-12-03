// EmailCodeStep.jsx - FIXED
// ============================================
import React from 'react';

const EmailCodeStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Email Verification Code</h3>
      
      <p className="text-gray-600 mb-4">
        We've sent a verification code to <strong>{formData.email}</strong>
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Verification Code <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.emailCode || ''}
          onChange={(e) => updateFormData('emailCode', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
          placeholder="000000"
          maxLength="6"
        />
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-700">
          Didn't receive the code? Check your spam folder or click the button in the previous step to resend.
        </p>
      </div>
    </div>
  );
};

export default EmailCodeStep;