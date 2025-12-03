// AboutYouStep.jsx - FIXED
// ============================================
import React from 'react';

const AboutYouStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tell Us About Yourself</h3>
      
      {/* Tell Us About You */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tell Us About You <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.tellUsAboutYou || ''}
          onChange={(e) => updateFormData('tellUsAboutYou', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Share your background, interests, and what makes you passionate about teaching..."
          rows="4"
        />
      </div>

      {/* Tell Us About Your Lessons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tell Us About Your Lessons <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.tellUsAboutYourLessons || ''}
          onChange={(e) => updateFormData('tellUsAboutYourLessons', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your typical lesson structure, what students can expect..."
          rows="4"
        />
      </div>

      {/* Explain Your Teaching Methods */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Explain Your Teaching Methods <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.explainYourTeachingMethods || ''}
          onChange={(e) => updateFormData('explainYourTeachingMethods', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Explain your approach to teaching, how you engage students, assessment methods..."
          rows="4"
        />
      </div>

      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-700">
          <strong>Tip:</strong> Be detailed and authentic. This information helps students choose the right tutor for their needs.
        </p>
      </div>
    </div>
  );
};

export default AboutYouStep;