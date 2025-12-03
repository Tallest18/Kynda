// src/components/tutor-signup/AllVerifiedStep.jsx
import React from 'react';
import { Check } from 'lucide-react';

const AllVerifiedStep = () => (
  <div className="max-h-[500px] overflow-y-auto space-y-6 p-4">
    <div className="text-center mb-6">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Account Under Review</h2>
      <p className="text-sm text-gray-600">Thank you for submitting your information. We're currently reviewing your application</p>
    </div>

    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Verification Status</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Email Verification</span>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Verified</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Phone Number</span>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Verified</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Identity Verification</span>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Verified</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Professional Profile</span>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Verified</span>
        </div>
      </div>
    </div>

    <div className="pt-4">
      <p className="text-sm text-gray-600 text-center mb-3">
        Need to update your information or have questions?
      </p>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Return to Account Details
      </button>
    </div>
  </div>
);

export default AllVerifiedStep;