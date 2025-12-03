// src/components/tutor-signup/DocumentUploadStep.jsx
import React from 'react';
import { Upload } from 'lucide-react';

const DocumentUploadStep = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold text-gray-800">Upload Verification Document</h3>
    <p className="text-sm text-gray-600">These documents help verify your professional credentials</p>

    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-1">Government ID (Driver's license, passport, or state ID)</p>
        <p className="text-xs text-gray-400 mb-2">Supports: JPG, PNG, PDF or Max file size: 10 MB each</p>
        {formData.governmentId && (
          <p className="text-sm text-green-600 mb-2">✓ {formData.governmentId.name}</p>
        )}
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => updateFormData('governmentId', e.target.files[0])}
          className="hidden"
          id="govId"
        />
        <label htmlFor="govId" className="text-blue-600 text-sm cursor-pointer hover:underline">
          Browse
        </label>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-1">Educational Proof (Degree certificate, Transcript, or Teaching Cert)</p>
        <p className="text-xs text-gray-400 mb-2">Supports: JPG, PNG, PDF or Max file size: 10 MB each</p>
        {formData.educationalProof && (
          <p className="text-sm text-green-600 mb-2">✓ {formData.educationalProof.name}</p>
        )}
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => updateFormData('educationalProof', e.target.files[0])}
          className="hidden"
          id="eduProof"
        />
        <label htmlFor="eduProof" className="text-blue-600 text-sm cursor-pointer hover:underline">
          Browse
        </label>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-1">Profile Image</p>
        <p className="text-xs text-gray-400 mb-2">Supports: JPG, PNG, PDF or Max file size: 10 MB each</p>
        {formData.profileImage && (
          <p className="text-sm text-green-600 mb-2">✓ {formData.profileImage.name}</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => updateFormData('profileImage', e.target.files[0])}
          className="hidden"
          id="profileImg"
        />
        <label htmlFor="profileImg" className="text-blue-600 text-sm cursor-pointer hover:underline">
          Browse
        </label>
      </div>
    </div>
  </div>
);

export default DocumentUploadStep;