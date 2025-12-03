import React, { useState, useEffect } from 'react';
import { ArrowLeft, Building2, Shield, CheckCircle2, AlertCircle, Loader2, Wallet } from 'lucide-react';

const ConnectBank = () => {
  const [userType, setUserType] = useState('student');
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [showBankForm, setShowBankForm] = useState(false);
  const [banks, setBanks] = useState([]);
  
  // Bank account form state
  const [bankData, setBankData] = useState({
    accountNumber: '',
    bankCode: '',
    accountName: ''
  });

  // Use environment variable or fallback to hardcoded URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kynda-backend.onrender.com';

  useEffect(() => {
    if (userType === 'tutor' && showBankForm) {
      fetchBanks();
    }
  }, [userType, showBankForm]);

  // Fetch list of Nigerian banks from Paystack
  const fetchBanks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/paystack/banks`);
      const data = await response.json();
      setBanks(data.banks || []);
    } catch (error) {
      console.error('Error fetching banks:', error);
    }
  };

  // Verify account number with bank
  const verifyAccountNumber = async () => {
    if (!bankData.accountNumber || !bankData.bankCode) {
      setError('Please enter account number and select bank');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/paystack/verify-account`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountNumber: bankData.accountNumber,
          bankCode: bankData.bankCode
        })
      });

      const data = await response.json();

      if (data.success) {
        setBankData(prev => ({
          ...prev,
          accountName: data.accountName
        }));
        setError('');
      } else {
        setError('Could not verify account. Please check details.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // For students: Initialize Paystack payment
  const connectStudentPayment = async () => {
    setLoading(true);
    setError('');

    try {
      // In production, this would save card details via Paystack
      // For now, we'll simulate the connection
      
      setTimeout(() => {
        setConnected(true);
        setAccountInfo({
          paymentMethod: 'Paystack',
          status: 'active',
          type: 'Card Payment'
        });
        setLoading(false);
      }, 2000);

    } catch (error) {
      console.error('Payment setup error:', error);
      setError('Failed to setup payment method. Please try again.');
      setLoading(false);
    }
  };

  // For tutors: Create transfer recipient in Paystack
  const connectTutorBank = async () => {
    if (!bankData.accountName) {
      setError('Please verify your account number first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/paystack/create-recipient`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'current-user-id', // Replace with actual user ID from auth
          accountNumber: bankData.accountNumber,
          bankCode: bankData.bankCode,
          accountName: bankData.accountName
        })
      });

      const data = await response.json();

      if (data.success) {
        setConnected(true);
        setAccountInfo({
          bankName: banks.find(b => b.code === bankData.bankCode)?.name,
          accountNumber: bankData.accountNumber,
          accountName: bankData.accountName,
          recipientCode: data.recipientCode
        });
      } else {
        setError(data.message || 'Failed to connect bank account');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setError('Connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = () => {
    if (userType === 'student') {
      connectStudentPayment();
    } else {
      setShowBankForm(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear account name when account number or bank changes
    if (name === 'accountNumber' || name === 'bankCode') {
      setBankData(prev => ({ ...prev, accountName: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <Building2 className="text-green-600" size={24} />
            <span className="text-xl font-bold text-gray-800">Bank Connection</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {!connected ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!showBankForm ? (
              <>
                {/* User Type Selection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    I am a...
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setUserType('student')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        userType === 'student'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎓</div>
                        <div className="font-semibold">Student</div>
                        <div className="text-sm text-gray-600">Make payments</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setUserType('tutor')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        userType === 'tutor'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">👨‍🏫</div>
                        <div className="font-semibold">Tutor</div>
                        <div className="text-sm text-gray-600">Receive payouts</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Information Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {userType === 'student' ? 'Setup Payment Method' : 'Connect Your Bank Account'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {userType === 'student'
                      ? 'Setup Paystack to make secure payments for tutoring sessions.'
                      : 'Connect your Nigerian bank account to receive payments directly.'}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-gray-800">Powered by Paystack</div>
                        <div className="text-sm text-gray-600">
                          Trusted by thousands of Nigerian businesses
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-gray-800">Instant verification</div>
                        <div className="text-sm text-gray-600">
                          Verify your bank account in seconds
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-gray-800">
                          {userType === 'student' ? 'Secure payments' : 'Fast transfers'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {userType === 'student'
                            ? 'Pay with card, bank transfer, or USSD'
                            : 'Receive funds directly to your bank account'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paystack Badge */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Wallet className="text-green-600 flex-shrink-0" size={24} />
                      <div className="text-sm text-green-800">
                        <div className="font-semibold mb-1">Nigerian Banks Supported</div>
                        <div>
                          All major Nigerian banks including GTBank, Access, UBA, First Bank, Zenith, and more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-800">
                      <AlertCircle size={20} />
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                {/* Connect Button */}
                <button
                  onClick={handleConnect}
                  disabled={loading}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Building2 size={20} />
                      <span>
                        {userType === 'student' ? 'Setup Payment' : 'Connect Bank Account'}
                      </span>
                    </>
                  )}
                </button>
              </>
            ) : (
              /* Bank Account Form for Tutors */
              <div>
                <button
                  onClick={() => setShowBankForm(false)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>

                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Enter Your Bank Details
                </h3>

                <div className="space-y-4">
                  {/* Bank Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Bank
                    </label>
                    <select
                      name="bankCode"
                      value={bankData.bankCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Choose your bank</option>
                      {banks.map(bank => (
                        <option key={bank.code} value={bank.code}>
                          {bank.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Account Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={bankData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit account number"
                      maxLength="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {/* Verify Button */}
                  {!bankData.accountName && (
                    <button
                      onClick={verifyAccountNumber}
                      disabled={!bankData.accountNumber || !bankData.bankCode || loading}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={20} />
                          <span>Verify Account</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Account Name Display */}
                  {bankData.accountName && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-green-800 mb-2">
                        <CheckCircle2 size={20} />
                        <span className="font-semibold">Account Verified</span>
                      </div>
                      <div className="text-gray-800 font-medium">
                        {bankData.accountName}
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle size={20} />
                        <span>{error}</span>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  {bankData.accountName && (
                    <button
                      onClick={connectTutorBank}
                      disabled={loading}
                      className="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <Building2 size={20} />
                          <span>Connect Bank Account</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-4">
                <span>🔒 Bank-level security</span>
                <span>•</span>
                <span>PCI DSS compliant</span>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Successfully Connected!
              </h2>
              <p className="text-gray-600">
                {userType === 'student'
                  ? 'Your payment method has been setup.'
                  : 'Your bank account has been connected successfully.'}
              </p>
            </div>

            {accountInfo && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                {userType === 'student' ? (
                  <>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-semibold">{accountInfo.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">{accountInfo.type}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Bank:</span>
                      <span className="font-semibold">{accountInfo.bankName}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Account Name:</span>
                      <span className="font-semibold">{accountInfo.accountName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-semibold">{accountInfo.accountNumber}</span>
                    </div>
                  </>
                )}
              </div>
            )}

            <button
              onClick={() => window.location.href = '/dashboard'}
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ConnectBank;