// src/components/tutor-signup/AccountUnderReviewStep.jsx
import React from 'react';
import { Check } from 'lucide-react';

const AccountUnderReviewStep = () => (
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

    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      <p className="text-sm text-gray-700">
        <strong>Note:</strong> We'll email your username within <strong>1-3 business days</strong>.
        <br />• You'll receive an email confirmation once your application has been reviewed.
        <br />• Our team verifies all educator information
        <br />• Application process typically takes 1-3 days
        <br />• Check your email (including spam) for updates from Kynda
      </p>
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

        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Identity Verification</span>
          </div>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Pending</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            <span className="text-sm font-medium">Professional Profile</span>
          </div>
          <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Pending</span>
        </div>
      </div>
    </div>

    <div className="pt-4">
      <p className="text-sm text-gray-600 text-center">
        Need to update your information or have questions?
      </p>
      <button className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Contact Support
      </button>
    </div>
  </div>
);

export default AccountUnderReviewStep;