// src/components/tutor-signup/AgreementFormStep.jsx
import React from 'react';

const AgreementFormStep = () => (
  <div className="max-h-[500px] overflow-y-auto space-y-4 p-4">
    <div className="text-center mb-6">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Tutor Agreement Form</h2>
      <p className="text-sm text-gray-600">These documents help verify your professional credentials</p>
    </div>

    <div className="space-y-4 text-sm">
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Kynda Tutor Agreement</h3>
        <p className="text-gray-600">Welcome to Kynda! By accepting this agreement, you agree to provide tutoring services through the Kynda platform.</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Provide high-quality tutoring sessions</li>
          <li>Maintain professionalism with students</li>
          <li>Respond to queries on a timely manner</li>
          <li>Keep updated teaching materials</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Payment Terms:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Payments processed within 7-14 days post-session</li>
          <li>Kynda retains a 20% service fee of your gross earnings</li>
          <li>All payments are subject to tax withholding as per local law</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Code of Conduct:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Treat all users with respect and courtesy</li>
          <li>Maintain privacy standards</li>
          <li>Follow Kynda's quality standards</li>
          <li>Promptly report any suspicious or inappropriate activities or behavior</li>
          <li>Comply with Kynda's Code of Conduct and all applicable policies</li>
        </ul>
      </div>

      <div className="pt-4">
        <p className="text-gray-600 text-xs">
          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms, Terms and Conditions</a>
        </p>
      </div>
    </div>
  </div>
);

export default AgreementFormStep;