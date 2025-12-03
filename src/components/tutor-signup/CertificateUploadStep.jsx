// CertificateUploadStep.jsx - FIXED
// ============================================
import React from 'react';

const CertificateUploadStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certificate Information (Optional)</h3>
      
      <div className="p-4 bg-blue-50 rounded-lg mb-6">
        <p className="text-sm text-blue-700">
          If you have any teaching certifications, you can provide the details below. This step is optional.
        </p>
      </div>

      {/* Certificate Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Certificate Title
        </label>
        <input
          type="text"
          value={formData.certificateTitle || ''} 
          onChange={(e) => updateFormData('certificateTitle', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Certified Mathematics Teacher"
        />
      </div>

      {/* Skill Obtained */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Skill/Subject Obtained
        </label>
        <input
          type="text"
          value={formData.smsObserver || ''} 
          onChange={(e) => updateFormData('smsObserver', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Advanced Teaching Methods"
        />
      </div>

      {/* Institution/Issuer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Institution/Issuer
        </label>
        <input
          type="text"
          value={formData.institutionIssuer || ''}
          onChange={(e) => updateFormData('institutionIssuer', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., National Teaching Council"
        />
      </div>
    </div>
  );
};

export default CertificateUploadStep;
