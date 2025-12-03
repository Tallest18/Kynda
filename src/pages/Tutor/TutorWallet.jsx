import React, { useState, useEffect, useCallback } from 'react';
import { Wallet, ArrowDownLeft, History, DollarSign, Copy, Check, RefreshCw, TrendingUp, Clock } from 'lucide-react';

const TutorWallet = () => {
  const [balance, setBalance] = useState(0);
  const [pendingEarnings, setPendingEarnings] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  
  const [earnings] = useState([
    { id: 1, student: 'Alice Johnson', amount: 5000, date: '2024-12-01', status: 'completed', session: 'Mathematics' },
    { id: 2, student: 'Bob Smith', amount: 3500, date: '2024-11-28', status: 'completed', session: 'Physics' },
    { id: 3, student: 'Carol White', amount: 4500, date: '2024-11-25', status: 'pending', session: 'Chemistry' },
  ]);

  const [withdrawals, setWithdrawals] = useState([
    { id: 1, amount: 10000, date: '2024-11-20', status: 'completed', txHash: '0x1234...5678' },
    { id: 2, amount: 8500, date: '2024-11-10', status: 'completed', txHash: '0xabcd...efgh' },
  ]);

  const calculateEarnings = useCallback(() => {
    const completed = earnings
      .filter(e => e.status === 'completed')
      .reduce((sum, e) => sum + e.amount, 0);
    const pending = earnings
      .filter(e => e.status === 'pending')
      .reduce((sum, e) => sum + e.amount, 0);
    
    setBalance(completed);
    setPendingEarnings(pending);
  }, [earnings]);

  const checkWalletConnection = useCallback(async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  }, []);

  useEffect(() => {
    checkWalletConnection();
    calculateEarnings();
  }, [checkWalletConnection, calculateEarnings]);

  const connectWallet = async () => {
    setLoading(true);
    try {
      if (!window.ethereum) {
        alert('Please install Camp Network Wallet extension');
        setLoading(false);
        return;
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      setWalletAddress(accounts[0]);
      setIsConnected(true);
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
    setLoading(false);
  };

  const handleWithdrawal = async () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (parseFloat(withdrawAmount) > balance) {
      alert('Insufficient balance');
      return;
    }

    setLoading(true);
    try {
      // Convert amount to Wei (assuming conversion rate)
      const amountInWei = (parseFloat(withdrawAmount) / 450000 * Math.pow(10, 18)).toString(16);
      
      // This would be your backend API call to process withdrawal
      // The backend would then send funds from the platform wallet to tutor's wallet
      await fetch('/api/tutors/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          amount: withdrawAmount,
          amountInWei
        })
      });

      // For demo purposes, simulate transaction
      const txHash = '0x' + Math.random().toString(36).substring(2, 15);
      
      const newWithdrawal = {
        id: withdrawals.length + 1,
        amount: parseFloat(withdrawAmount),
        date: new Date().toISOString().split('T')[0],
        status: 'completed',
        txHash: txHash
      };
      
      setWithdrawals([newWithdrawal, ...withdrawals]);
      setBalance(balance - parseFloat(withdrawAmount));
      setShowWithdrawModal(false);
      setWithdrawAmount('');
      alert('Withdrawal successful!');
      
    } catch (error) {
      console.error('Withdrawal error:', error);
      alert('Withdrawal failed. Please try again.');
    }
    setLoading(false);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Tutor Earnings</h1>
          {isConnected && (
            <button
              onClick={calculateEarnings}
              className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <RefreshCw className="w-5 h-5 text-purple-600" />
            </button>
          )}
        </div>

        {!isConnected ? (
          /* Connect Wallet Card */
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect Your Camp Network Wallet
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Connect your Camp Network wallet to receive payments and withdraw your earnings securely.
            </p>
            <button
              onClick={connectWallet}
              disabled={loading}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connecting...' : 'Connect Wallet'}
            </button>
          </div>
        ) : (
          <>
            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Available Balance */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-6 h-6" />
                    <span className="text-sm opacity-90">Available Balance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
                    <span className="text-xs font-mono">{formatAddress(walletAddress)}</span>
                    <button onClick={copyAddress} className="hover:opacity-80">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold mb-2">₦{balance.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Ready to withdraw</div>
                </div>

                <button
                  onClick={() => setShowWithdrawModal(true)}
                  disabled={balance <= 0}
                  className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowDownLeft className="w-5 h-5" />
                  Withdraw to Wallet
                </button>
              </div>

              {/* Pending Earnings */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  <span className="text-sm text-gray-600">Pending Earnings</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-800 mb-2">
                    ₦{pendingEarnings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    Awaiting session completion
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-sm text-yellow-800">
                    These funds will be available after students confirm session completion.
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Earned</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  ₦{(balance + withdrawals.reduce((sum, w) => sum + w.amount, 0)).toLocaleString()}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Withdrawn</span>
                  <ArrowDownLeft className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  ₦{withdrawals.reduce((sum, w) => sum + w.amount, 0).toLocaleString()}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Sessions Completed</span>
                  <DollarSign className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {earnings.filter(e => e.status === 'completed').length}
                </div>
              </div>
            </div>

            {/* Recent Earnings */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                Recent Earnings
              </h2>
              
              <div className="space-y-4">
                {earnings.map((earning) => (
                  <div key={earning.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {earning.session} Session
                        </div>
                        <div className="text-sm text-gray-500">
                          {earning.student} • {earning.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">
                        +₦{earning.amount.toLocaleString()}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                        earning.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {earning.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Withdrawal History */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <History className="w-6 h-6 text-purple-600" />
                Withdrawal History
              </h2>
              
              <div className="space-y-4">
                {withdrawals.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No withdrawals yet
                  </div>
                ) : (
                  withdrawals.map((withdrawal) => (
                    <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <ArrowDownLeft className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
                            Withdrawal to Wallet
                          </div>
                          <div className="text-sm text-gray-500">
                            {withdrawal.date} • {formatAddress(withdrawal.txHash)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">
                          ₦{withdrawal.amount.toLocaleString()}
                        </div>
                        <div className="text-xs text-green-600 capitalize">
                          {withdrawal.status}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Withdrawal Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Withdraw Earnings</h3>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <div className="text-sm text-purple-800 mb-2">
                Withdrawing to:
              </div>
              <div className="font-mono text-sm text-purple-900 break-all">
                {walletAddress}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-500">
                    Available: ₦{balance.toLocaleString()}
                  </div>
                  <button
                    onClick={() => setWithdrawAmount(balance.toString())}
                    className="text-sm text-purple-600 font-medium hover:text-purple-700"
                  >
                    Withdraw All
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="text-sm text-yellow-800">
                Funds will be sent to your connected Camp Network wallet. Transaction may take a few minutes to complete.
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowWithdrawModal(false);
                  setWithdrawAmount('');
                }}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawal}
                disabled={loading || !withdrawAmount || parseFloat(withdrawAmount) <= 0}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Withdraw'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorWallet;