import React from 'react';
import { Check } from 'lucide-react';

const StepIndicator = ({ step, label, isActive, isCompleted }) => (
  <div className="flex flex-col items-center">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
      isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-600' : 'bg-gray-300'
    }`}>
      {isCompleted ? (
        <Check className="w-5 h-5 text-white" />
      ) : (
        <span className="text-white text-sm font-semibold">{step}</span>
      )}
    </div>
    <span className="text-xs mt-1 text-gray-600">{label}</span>
  </div>
);

export default StepIndicator;
