import React, { useState } from 'react';
import { 
  Lock, Bell, Eye, Globe, CreditCard, Shield, 
  Smartphone, Mail, MessageSquare, Moon, Volume2,
  ChevronRight, AlertCircle, Check
} from 'lucide-react';
import StudentNavbar from '../components/StudentNavbar';
import Footer from '../components/Footer';

// Move ToggleSwitch component outside to prevent recreation on each render
const ToggleSwitch = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      enabled ? 'bg-blue-600' : 'bg-gray-300'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    sessionReminders: true,
    marketingEmails: false,
    weeklyDigest: true,
    twoFactorAuth: false,
    darkMode: false,
    soundEffects: true,
    language: 'English',
    timezone: 'Africa/Lagos'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <Check size={20} className="text-green-600" />
            <span className="text-green-800 font-medium">Settings saved successfully!</span>
          </div>
        )}

        {/* Account Security */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <Shield size={20} className="text-blue-600" />
              Account Security
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-600" />
                <div>
                     <a 
                    href="/forget-password" 
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                  <p className="font-medium text-gray-800">Change Password</p></a>
                  <p className="text-sm text-gray-600">Update your password regularly</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.twoFactorAuth}
                onChange={() => handleToggle('twoFactorAuth')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Eye size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Privacy Settings</p>
                  <p className="text-sm text-gray-600">Control who can see your profile</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <Bell size={20} className="text-blue-600" />
              Notifications
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Push Notifications</p>
                  <p className="text-sm text-gray-600">Get instant updates on your device</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.pushNotifications}
                onChange={() => handleToggle('pushNotifications')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Receive text message alerts</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.smsNotifications}
                onChange={() => handleToggle('smsNotifications')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Session Reminders</p>
                  <p className="text-sm text-gray-600">Remind me before sessions start</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.sessionReminders}
                onChange={() => handleToggle('sessionReminders')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Weekly Digest</p>
                  <p className="text-sm text-gray-600">Get weekly progress summary</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.weeklyDigest}
                onChange={() => handleToggle('weeklyDigest')}
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <Globe size={20} className="text-blue-600" />
              Preferences
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Dark Mode</p>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Sound Effects</p>
                  <p className="text-sm text-gray-600">Play sounds for actions</p>
                </div>
              </div>
              <ToggleSwitch 
                enabled={settings.soundEffects}
                onChange={() => handleToggle('soundEffects')}
              />
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Language</p>
                  <p className="text-sm text-gray-600">Choose your preferred language</p>
                </div>
              </div>
              <select 
                value={settings.language}
                onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>English</option>
                <option>Yoruba</option>
                <option>Igbo</option>
                <option>Hausa</option>
              </select>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Timezone</p>
                  <p className="text-sm text-gray-600">Set your local timezone</p>
                </div>
              </div>
              <select 
                value={settings.timezone}
                onChange={(e) => setSettings(prev => ({ ...prev, timezone: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Africa/Lagos</option>
                <option>Africa/Accra</option>
                <option>Africa/Nairobi</option>
                <option>Europe/London</option>
                <option>America/New_York</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment & Billing */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <CreditCard size={20} className="text-blue-600" />
              Payment & Billing
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Payment Methods</p>
                  <p className="text-sm text-gray-600">Manage your payment options</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-800">Transaction History</p>
                  <p className="text-sm text-gray-600">View all your transactions</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-red-200">
            <h2 className="font-semibold text-lg text-red-800 flex items-center gap-2">
              <AlertCircle size={20} className="text-red-600" />
              Danger Zone
            </h2>
          </div>
          <div className="p-6">
            <button className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              Delete Account
            </button>
            <p className="text-sm text-red-600 mt-2">Once deleted, your account cannot be recovered.</p>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button 
            onClick={handleSave}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Save All Changes
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;