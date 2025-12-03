// src/pages/Tutor/TutorSignUp.jsx - MERGED VERSION (Left side from first, Right side from second)
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import StepIndicator from '../../components/tutor-signup/StepIndicator';
import PersonalInfoStep from '../../components/tutor-signup/PersonalInfoStep';
import EmailVerificationStep from '../../components/tutor-signup/EmailVerificationStep';
import EmailCodeStep from '../../components/tutor-signup/EmailCodeStep';
import PhoneVerificationStep from '../../components/tutor-signup/PhoneVerificationStep';
import PhoneCodeStep from '../../components/tutor-signup/PhoneCodeStep';
import QualificationsStep from '../../components/tutor-signup/QualificationsStep';
import CertificateUploadStep from '../../components/tutor-signup/CertificateUploadStep';
import DocumentUploadStep from '../../components/tutor-signup/DocumentUploadStep';
import AboutYouStep from '../../components/tutor-signup/AboutYouStep';
import AgreementFormStep from '../../components/tutor-signup/AgreementFormStep';
import RegistrationCompleteStep from '../../components/tutor-signup/RegistrationCompleteStep';
import AccountUnderReviewStep from '../../components/tutor-signup/AccountUnderReviewStep';
import AllVerifiedStep from '../../components/tutor-signup/AllVerifiedStep';
import SuccessModal from '../../components/tutor-signup/SuccessModal';
import { X } from 'lucide-react';


const TutorSignUp = () => {
  const navigate = useNavigate();
  const { 
    tutorSignup, 
    tutorEmailVerifyCode, 
    tutorVerifyEmail, 
    tutorPhoneVerifyCode, 
    tutorVerifyPhone,
    tutorQualifications,
    tutorUploadDocuments
  } = useAuth();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailCode: '',
    phoneCode: '',
    highestEducation: '',
    age: '',
    subjectsYouTeach: '',
    teachingLevel: '',
    hourlyRate: '',
    yearsOfExperience: '',
    location: '',
    certificateTitle: '',
    smsObserver: '',
    institutionIssuer: '',
    governmentId: null,
    educationalProof: null,
    profileImage: null,
    tellUsAboutYou: '',
    tellUsAboutYourLessons: '',
    explainYourTeachingMethods: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\s/g, '');
    return cleanPhone.length >= 10;
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateStep1 = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (!formData.confirmPassword) {
      setError('Please confirm your password');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    setError('');
    setLoading(true);

    try {
      if (currentStep === 1) {
        if (!validateStep1()) {
          setLoading(false);
          return;
        }

        const cleanPhoneNumber = formData.phone.replace(/\s/g, '');

        const signupPayload = {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: cleanPhoneNumber,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        };

        try {
          await tutorSignup(signupPayload);
          setCurrentStep(2);
        } catch (signupError) {
          if (signupError.message.includes('required fields')) {
            const missing = [];
            if (!formData.firstName.trim()) missing.push('First Name');
            if (!formData.lastName.trim()) missing.push('Last Name');
            if (!formData.email.trim()) missing.push('Email');
            if (!formData.phone.trim()) missing.push('Phone Number');
            if (!formData.password) missing.push('Password');
            if (!formData.confirmPassword) missing.push('Confirm Password');
            
            if (missing.length > 0) {
              setError(`Please fill in: ${missing.join(', ')}`);
            } else {
              setError(signupError.message);
            }
          } else {
            setError(signupError.message);
          }
          throw signupError;
        }
      }
         
      else if (currentStep === 2) {
        await tutorEmailVerifyCode({ email: formData.email });
        setCurrentStep(3);
      }
      
      else if (currentStep === 3) {
        if (!formData.emailCode.trim()) {
          setError('Please enter the verification code');
          setLoading(false);
          return;
        }
        
        const otp = parseInt(formData.emailCode);
        if (isNaN(otp)) {
          setError('Please enter a valid verification code (numbers only)');
          setLoading(false);
          return;
        }
        
        await tutorVerifyEmail({ otp: otp });
        
        setSuccessMessage('Email Verified');
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          setCurrentStep(4);
        }, 2000);
      }
      
      else if (currentStep === 4) {
        const cleanPhone = formData.phone.replace(/\s/g, '');
        await tutorPhoneVerifyCode({ phoneNumber: cleanPhone });
        setCurrentStep(5);
      }
      
      else if (currentStep === 5) {
        if (!formData.phoneCode.trim()) {
          setError('Please enter the verification code');
          setLoading(false);
          return;
        }
        
        const otp = parseInt(formData.phoneCode);
        if (isNaN(otp)) {
          setError('Please enter a valid verification code (numbers only)');
          setLoading(false);
          return;
        }
        
        await tutorVerifyPhone({ otp: otp });
        
        setSuccessMessage('Phone Number');
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          setCurrentStep(6);
        }, 2000);
      }
      
      else if (currentStep === 6) {
        if (!formData.highestEducation || !formData.age || !formData.subjectsYouTeach || 
            !formData.teachingLevel || !formData.hourlyRate || !formData.yearsOfExperience || 
            !formData.location) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }
        
        if (isNaN(parseInt(formData.age)) || parseInt(formData.age) < 18) {
          setError('Please enter a valid age (must be at least 18)');
          setLoading(false);
          return;
        }
        
        if (isNaN(parseInt(formData.hourlyRate)) || parseInt(formData.hourlyRate) <= 0) {
          setError('Please enter a valid hourly rate');
          setLoading(false);
          return;
        }
        
        if (isNaN(parseInt(formData.yearsOfExperience)) || parseInt(formData.yearsOfExperience) < 0) {
          setError('Please enter valid years of experience');
          setLoading(false);
          return;
        }
        
        const qualificationsPayload = {
          highestEducation: formData.highestEducation,
          age: parseInt(formData.age),
          subjects: formData.subjectsYouTeach,
          teachingLevels: formData.teachingLevel,
          hourlyRate: parseInt(formData.hourlyRate),
          yearsOfExperience: parseInt(formData.yearsOfExperience),
          location: formData.location
        };
        
        await tutorQualifications(qualificationsPayload);
        setCurrentStep(7);
      }
      
      else if (currentStep === 7) {
        setCurrentStep(8);
      }
      
      else if (currentStep === 8) {
        if (!formData.governmentId || !formData.educationalProof || !formData.profileImage) {
          setError('Please upload all required documents');
          setLoading(false);
          return;
        }
        
        const documentFormData = new FormData();
        documentFormData.append('governmentId', formData.governmentId);
        documentFormData.append('educationProof', formData.educationalProof);
        documentFormData.append('profilePicture', formData.profileImage);
        
        if (formData.certificateTitle) {
          documentFormData.append('certificateTitle', formData.certificateTitle);
        }
        if (formData.smsObserver) {
          documentFormData.append('skillObtained', formData.smsObserver);
        }
        if (formData.institutionIssuer) {
          documentFormData.append('institutionIssuer', formData.institutionIssuer);
        }
        
        await tutorUploadDocuments(documentFormData);
        setCurrentStep(9);
      }
      
      else if (currentStep === 9) {
        if (!formData.tellUsAboutYou || !formData.tellUsAboutYourLessons || 
            !formData.explainYourTeachingMethods) {
          setError('Please complete all fields');
          setLoading(false);
          return;
        }
        setCurrentStep(10);
      }
      
      else if (currentStep === 10) {
        setCurrentStep(11);
      }
      
      else if (currentStep === 11) {
        setCurrentStep(12);
      }
      
      else if (currentStep === 12) {
        setCurrentStep(13);
      }
      
      else if (currentStep === 13) {
        navigate('/tutor-dashboard');
      }

    } catch (err) {
      let errorMessage = 'An error occurred. Please try again.';
      
      if (err.response?.data) {
        if (err.response.data.message) {
          errorMessage = err.response.data.message;
        } else if (err.response.data.error) {
          errorMessage = err.response.data.error;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError('');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep 
          formData={formData} 
          updateFormData={updateFormData}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
        />;
      case 2:
        return <EmailVerificationStep handleNext={handleNext} loading={loading} />;
      case 3:
        return <EmailCodeStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <PhoneVerificationStep handleNext={handleNext} loading={loading} />;
      case 5:
        return <PhoneCodeStep formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <QualificationsStep formData={formData} updateFormData={updateFormData} />;
      case 7:
        return <CertificateUploadStep formData={formData} updateFormData={updateFormData} />;
      case 8:
        return <DocumentUploadStep formData={formData} updateFormData={updateFormData} />;
      case 9:
        return <AboutYouStep formData={formData} updateFormData={updateFormData} />;
      case 10:
        return <AgreementFormStep />;
      case 11:
        return <RegistrationCompleteStep handleNext={handleNext} />;
      case 12:
        return <AccountUnderReviewStep />;
      case 13:
        return <AllVerifiedStep />;
      default:
        return null;
    }
  };

  const shouldShowBackButton = () => {
    return currentStep > 1 && currentStep !== 2 && currentStep !== 4 && 
           currentStep !== 11 && currentStep !== 12 && currentStep !== 13;
  };

  const shouldShowNextButton = () => {
    return currentStep !== 2 && currentStep !== 4 && currentStep !== 11 && 
           currentStep !== 12 && currentStep !== 13;
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - From First Code */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <img
          src="/images/boy3.png"
          alt="Student"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 p-12 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/Vector (1).png"
              alt="Logo"
              className="w-12 h-12"
            />
            <span className="text-white text-2xl font-bold">KYNDA</span>
          </div>

          <div className="mt-170">
            <h1 className="text-white text-4xl font-bold mb-4">
              With <span className="text-orange-500">Kynda</span> You Can Teach, Inspire and Earn
            </h1>
            <p className="text-gray-200 text-xl">
              Continue your learning journey, support your child, or inspire
              new learners — all in one place.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-800"
                />
              ))}
            </div>
            <div className="ml-3">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-white text-lg font-semibold">4.5</p>
              <p className="text-gray-300 text-lg">from 100+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form styled like Second Code */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Tutor Application</h2>
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {currentStep <= 10 && (
            <div className="flex justify-between items-center mb-8">
              <StepIndicator step={1} label="Personal Info" isActive={currentStep === 1} isCompleted={currentStep > 1} />
              <div className="flex-1 h-1 bg-gray-300 mx-2">
                <div className={`h-full ${currentStep > 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
              </div>
              <StepIndicator step={2} label="Verification" isActive={currentStep >= 2 && currentStep <= 5} isCompleted={currentStep > 5} />
              <div className="flex-1 h-1 bg-gray-300 mx-2">
                <div className={`h-full ${currentStep > 6 ? 'bg-blue-600' : 'bg-gray-300'}`} />
              </div>
              <StepIndicator step={3} label="Qualifications" isActive={currentStep >= 6 && currentStep <= 9} isCompleted={currentStep > 9} />
              <div className="flex-1 h-1 bg-gray-300 mx-2">
                <div className={`h-full ${currentStep > 10 ? 'bg-blue-600' : 'bg-gray-300'}`} />
              </div>
              <StepIndicator step={4} label="Agreement" isActive={currentStep === 10} isCompleted={currentStep > 10} />
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between">
            {shouldShowBackButton() && (
              <button
                onClick={handleBack}
                disabled={loading}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Back
              </button>
            )}
            {shouldShowNextButton() && (
              <button
                onClick={handleNext}
                disabled={loading}
                className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : currentStep === 13 ? 'Go to Dashboard' : 'Next'}
              </button>
            )}
          </div>

          {/* Google Sign Up - Only for Step 1 */}
          {currentStep === 1 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-medium">Sign up with Google</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <SuccessModal 
        show={showSuccessModal}
        message={successMessage}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default TutorSignUp;