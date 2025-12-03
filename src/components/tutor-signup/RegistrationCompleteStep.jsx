// src/components/tutor-signup/RegistrationCompleteStep.jsx
import React from 'react';
import { Check } from 'lucide-react';

const RegistrationCompleteStep = ({ handleNext }) => (
  <div className="text-center space-y-6">
    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
      <Check className="w-10 h-10 text-white" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800">Registration Complete</h3>
      <p className="text-gray-600 mt-2">
        You have successfully completed your account creation.<br />
        Go on to review application status
      </p>
    </div>
    <button
      onClick={handleNext}
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
    >
      Next
    </button>
  </div>
);

export default RegistrationCompleteStep;
