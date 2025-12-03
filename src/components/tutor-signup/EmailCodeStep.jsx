// src/components/tutor-signup/EmailCodeStep.jsx
import React from 'react';

const EmailCodeStep = ({ formData, updateFormData }) => (
  <div className="text-center space-y-6">
    <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm">
      ✓ Email sent!<br />
      <span className="text-xs">we've sent a verification code to {formData.email}</span>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">One-Time Password Verification</h3>
      <p className="text-sm text-gray-600 mt-2">
        Please enter the one-time password sent to your registered email address
      </p>
    </div>
    <input
      type="text"
      placeholder="Enter verification code"
      value={formData.emailCode}
      onChange={(e) => updateFormData('emailCode', e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
    />
    <button className="text-blue-600 text-sm font-medium">Resend Code link</button>
  </div>
);

export default EmailCodeStep;
