// src/components/tutor-signup/SuccessModal.jsx
import React from 'react';
import { Check } from 'lucide-react';

const SuccessModal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{message}</h3>
        <p className="text-sm text-gray-600">
          You have successfully verified your {message.toLowerCase()}. 
          Proceed to complete your application
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
