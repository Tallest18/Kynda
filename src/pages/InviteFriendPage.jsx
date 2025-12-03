import React, { useState } from 'react';
import { 
  Send, Copy, Mail, Share2, 
  Facebook, Instagram, Twitter, Gift, Check,
  Users, Award, TrendingUp
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../components/Footer';
import StudentNavbar from '../components/StudentNavbar';

const InviteFriendPage = () => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  const referralCode = 'KYNDA2024BM';
  const referralLink = `https://kynda.app/join/${referralCode}`;

  const stats = [
    { icon: Users, label: 'Friends Invited', value: '12', color: 'bg-blue-100 text-blue-600' },
    { icon: Award, label: 'Friends Joined', value: '8', color: 'bg-green-100 text-green-600' },
    { icon: TrendingUp, label: 'Rewards Earned', value: '₦4,000', color: 'bg-purple-100 text-purple-600' }
  ];

  const rewards = [
    {
      title: 'Invite 1 friend',
      reward: '₦500 credit',
      description: 'Get ₦500 when your friend completes their first session',
      completed: true
    },
    {
      title: 'Invite 5 friends',
      reward: '₦3,000 credit',
      description: 'Unlock bonus when 5 friends join and complete sessions',
      completed: true
    },
    {
      title: 'Invite 10 friends',
      reward: '₦7,000 credit',
      description: 'Massive reward for bringing 10 active users',
      completed: false
    },
    {
      title: 'Invite 20 friends',
      reward: '₦15,000 credit',
      description: 'Ultimate bonus for 20 successful referrals',
      completed: false
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmail = () => {
    if (email) {
      // Email sending logic here
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleShare = (platform) => {
    const text = `Join me on KYNDA - Nigeria's best online tutoring platform! Use my code ${referralCode} to get started.`;
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + referralLink)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(referralLink)}`,
      instagram: referralLink
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <StudentNavbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Gift size={32} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Invite Friends & Earn Rewards</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share KYNDA with your friends and earn credits when they join. The more friends you invite, the more you earn!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.color} mb-3`}>
                  <Icon size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Invite Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Referral Code */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Your Referral Code</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-4">
                <p className="text-sm text-gray-600 mb-2">Share this code with friends:</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl font-bold text-blue-600 tracking-wider">{referralCode}</p>
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Your referral link:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Invite */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Mail size={20} className="text-blue-600" />
                Invite by Email
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="friend@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendEmail}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {emailSent ? 'Invitation Sent!' : 'Send Invitation'}
                </button>
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Share2 size={20} className="text-blue-600" />
                Share on Social Media
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex flex-col items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                >
                  <FaWhatsapp size={32} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <Facebook size={32} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex flex-col items-center gap-2 p-4 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors group"
                >
                  <Twitter size={32} className="text-sky-600" />
                  <span className="text-sm font-medium text-gray-700">Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('instagram')}
                  className="flex flex-col items-center gap-2 p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors group"
                >
                  <Instagram size={32} className="text-pink-600" />
                  <span className="text-sm font-medium text-gray-700">Instagram</span>
                </button>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Share Your Link</h3>
                    <p className="text-sm text-gray-600">Send your unique referral link or code to friends</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Friend Signs Up</h3>
                    <p className="text-sm text-gray-600">Your friend creates an account using your referral code</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Friend Completes Session</h3>
                    <p className="text-sm text-gray-600">They book and complete their first tutoring session</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">You Both Get Rewarded!</h3>
                    <p className="text-sm text-gray-600">You earn credits and your friend gets a welcome bonus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Rewards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Reward Milestones</h2>
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      reward.completed
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{reward.title}</h3>
                      {reward.completed && (
                        <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-lg font-bold text-blue-600 mb-1">{reward.reward}</p>
                    <p className="text-xs text-gray-600">{reward.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Terms & Conditions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Rewards credited after friend completes first paid session</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>No limit on number of friends you can invite</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Credits valid for 1 year from date of issue</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>KYNDA reserves the right to modify rewards program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InviteFriendPage;