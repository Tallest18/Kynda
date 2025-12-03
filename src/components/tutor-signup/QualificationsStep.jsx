// QualificationsStep.jsx - FIXED
// ============================================
import React from 'react';

const QualificationsStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Qualifications</h3>
      
      {/* Highest Education */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Highest Education <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.highestEducation || ''}
          onChange={(e) => updateFormData('highestEducation', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your highest education</option>
          <option value="High School">High School</option>
          <option value="SSCE">SSCE</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
          <option value="Professional Certification">Professional Certification</option>
        </select>
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={formData.age || ''}
          onChange={(e) => updateFormData('age', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your age"
          min="18"
        />
      </div>

      {/* Subjects You Teach */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subjects You Teach <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.subjectsYouTeach || ''}
          onChange={(e) => updateFormData('subjectsYouTeach', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Mathematics, Physics, English"
        />
      </div>

      {/* Teaching Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teaching Level <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.teachingLevel || ''}
          onChange={(e) => updateFormData('teachingLevel', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Primary, Secondary, University"
        />
      </div>

      {/* Hourly Rate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hourly Rate (₦) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={formData.hourlyRate || ''}
          onChange={(e) => updateFormData('hourlyRate', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your hourly rate"
          min="0"
        />
      </div>

      {/* Years of Experience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={formData.yearsOfExperience || ''}
          onChange={(e) => updateFormData('yearsOfExperience', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter years of teaching experience"
          min="0"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.location || ''} 
          onChange={(e) => updateFormData('location', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Lagos, Nigeria"
        />
      </div>
    </div>
  );
};

export default QualificationsStep;
