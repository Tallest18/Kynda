// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Onboarding from "./pages/Onboarding";
import ConnectWallet from "./pages/ConnectWallet";
import ConnectAccount from "./pages/ConnectAccount";
import StudentSignUp from "./pages/Student/StudentSignUp";
import TutorSignUp from "./pages/Tutor/TutorSignUp";
import Login from "./pages/Student/Login";
import EnrollmentDetails1 from "./pages/EnrollmentDetails1";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TeachOnKynda from "./pages/TeachOnKynda";
import DashBoard from "./pages/Student/DashBoard";
import TutorLogin from "./pages/Tutor/TutorLogin";
import TutorDashboard from "./pages/Tutor/TutorDashboard";
import ForgetPassword from "./pages/ForgetPassword";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import LearningHub from "./pages/LearningHub";
import ExamPrepGuides from "./pages/ExamPrepGuides";
import ContractTerms from "./pages/ContractTerms";
import TutorPolicy from "./pages/Tutor/TutorPolicy";
import TutorResources from "./pages/Tutor/TutorResources";
import EmailVerificationModal from "./pages/EmailVerificationModal";
import FAQs from "./pages/FAQs";
import TutorChat from "./pages/Tutor/TutorChat";
import TutorCourses from "./pages/Tutor/TutorCourses";
import TutorEarning from "./pages/Tutor/TutorEarning";
import TutorReport from "./pages/Tutor/TutorReport";
import TutorSection from "./pages/Tutor/TutorSection";
import TutorResource1 from "./pages/Tutor/TutorResource1";
import MyLearning from "./pages/Student/MyLearning";
import BookingSection from "./pages/Student/BookingSection";
import DashboardLayout from "./pages/Student/DashboardLayout";
import CourseDetails from "./pages/Student/CourseDetails";
import BookedCourses from "./pages/Student/BookedCourses";
import ConnectBank from "./pages/ConnectBank";
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import FavoritesPage from './pages/FavouritesPage';
import InviteFriendPage from './pages/InviteFriendPage';
import StudentWallet from "./pages/Student/StudentWallet";
import TutorWallet from "./pages/Tutor/TutorWallet";
import NoteDetails from "./pages/NoteDetails";
import KyndaAssistantModal from "./components/KyndaAssistantModal";

export default function App() {
  return (
    
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/connect-account" element={<ConnectAccount />} />
          <Route path="/student-signup" element={<StudentSignUp />} />
          <Route path="/tutor-signup" element={<TutorSignUp />} />
          <Route path="/tutor-login" element={<TutorLogin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/teach" element={<TeachOnKynda />} />
          <Route path="/enrollment-details1" element={<EnrollmentDetails1 />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/exam-prep-guides" element={<ExamPrepGuides />} />
          <Route path="/contract-terms" element={<ContractTerms />} />
          <Route path="/tutor-policy" element={<TutorPolicy />} />
          <Route path="/tutor-resources" element={<TutorResources />} />
          <Route path="/verify-email" element={<EmailVerificationModal />} />
           <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/tutor-chat" element={<TutorChat />} />
          <Route path="/tutor-courses" element={<TutorCourses />} />
          <Route path="/tutor-earning" element={<TutorEarning />} />
          <Route path="/tutor-report" element={<TutorReport />} />
          <Route path="/tutor-section" element={<TutorSection />} />
          <Route path="/tutor-resource1" element={<TutorResource1 />} />
           <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/booking-section" element={<BookingSection />} />
          <Route path="/courses" element={<BookedCourses />} />
           <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/student-wallet" element={<StudentWallet />} />
             <Route path="/tutor-wallet" element={<TutorWallet />} />
            <Route path="/bank-setup" element={<ConnectBank />} />           
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
<Route path="/notifications" element={<NotificationsPage />} />
<Route path="/favorites" element={<FavoritesPage />} />
<Route path="/invite-friend" element={<InviteFriendPage />} />
<Route path="/note-details" element={<NoteDetails />} />
<Route path="/kynda-assistant" element={<KyndaAssistantModal />} />
           

          {/* Protected Routes 
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tutor-dashboard"
            element={
              <ProtectedRoute>
                <TutorDashboard />
              </ProtectedRoute>
            }
          />*/}
        </Routes>
      </AuthProvider>
    
  );
}