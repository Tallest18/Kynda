import React, { useState, useEffect, useCallback } from 'react';
import { Wallet, Send, History, Plus, ArrowUpRight, ArrowDownLeft, Copy, Check, RefreshCw } from 'lucide-react';

const StudentWallet = () => {
  const [balance, setBalance] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showPayModal, setShowPayModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'payment', amount: 5000, date: '2024-12-01', tutor: 'John Doe', status: 'completed' },
    { id: 2, type: 'deposit', amount: 10000, date: '2024-11-28', status: 'completed' },
    { id: 3, type: 'payment', amount: 3500, date: '2024-11-25', tutor: 'Jane Smith', status: 'completed' },
  ]);

  const fetchBalance = useCallback(async (address) => {
    try {
      // Fetch balance from Camp Network
      const balanceHex = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      
      // Convert from Wei to ETH (or your token)
      const balanceInEth = parseInt(balanceHex, 16) / Math.pow(10, 18);
      setBalance(balanceInEth * 450000); // Convert to Naira (example rate)
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance(25000); // Fallback for demo
    }
  }, []);

  const checkWalletConnection = useCallback(async () => {
    try {
      // Check if Camp Network wallet is installed
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
          fetchBalance(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  }, [fetchBalance]);

  // Initialize Camp Network connection
  useEffect(() => {
    checkWalletConnection();
  }, [checkWalletConnection]);

  const connectWallet = async () => {
    setLoading(true);
    try {
      if (!window.ethereum) {
        alert('Please install Camp Network Wallet extension');
        setLoading(false);
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      setWalletAddress(accounts[0]);
      setIsConnected(true);
      fetchBalance(accounts[0]);
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
    setLoading(false);
  };

  const handlePayment = async () => {
    if (!paymentAmount || !recipientAddress) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // Convert amount to Wei
      const amountInWei = (parseFloat(paymentAmount) / 450000 * Math.pow(10, 18)).toString(16);
      
      // Send transaction via Camp Network
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: walletAddress,
          to: recipientAddress,
          value: '0x' + amountInWei,
          gas: '0x5208', // 21000 gas
        }],
      });

      // Add to transaction history
      const newTransaction = {
        id: transactions.length + 1,
        type: 'payment',
        amount: parseFloat(paymentAmount),
        date: new Date().toISOString().split('T')[0],
        tutor: 'Tutor',
        status: 'completed',
        txHash: txHash
      };
      
      setTransactions([newTransaction, ...transactions]);
      setBalance(balance - parseFloat(paymentAmount));
      setShowPayModal(false);
      setPaymentAmount('');
      setRecipientAddress('');
      alert('Payment successful!');
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Wallet</h1>
          {isConnected && (
            <button
              onClick={() => fetchBalance(walletAddress)}
              className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <RefreshCw className="w-5 h-5 text-blue-600" />
            </button>
          )}
        </div>

        {!isConnected ? (
          /* Connect Wallet Card */
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect Your Camp Network Wallet
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Connect your Camp Network wallet to make payments to tutors and manage your funds securely.
            </p>
            <button
              onClick={connectWallet}
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connecting...' : 'Connect Wallet'}
            </button>
          </div>
        ) : (
          <>
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wallet className="w-6 h-6" />
                  <span className="text-sm opacity-90">Wallet Balance</span>
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
                <div className="text-sm opacity-90">Available Balance</div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowPayModal(true)}
                  className="flex-1 bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Pay Tutor
                </button>
                <button className="flex-1 bg-white/20 backdrop-blur-sm py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Funds
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Spent</span>
                  <ArrowUpRight className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">₦8,500</div>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total Deposits</span>
                  <ArrowDownLeft className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">₦10,000</div>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Transactions</span>
                  <History className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{transactions.length}</div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <History className="w-6 h-6 text-blue-600" />
                Transaction History
              </h2>
              
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'payment' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {tx.type === 'payment' ? (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        ) : (
                          <ArrowDownLeft className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {tx.type === 'payment' ? `Payment to ${tx.tutor}` : 'Wallet Deposit'}
                        </div>
                        <div className="text-sm text-gray-500">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${tx.type === 'payment' ? 'text-red-600' : 'text-green-600'}`}>
                        {tx.type === 'payment' ? '-' : '+'}₦{tx.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{tx.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Payment Modal */}
      {showPayModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pay Tutor</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tutor Wallet Address
                </label>
                <input
                  type="text"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <div className="text-sm text-gray-500 mt-1">
                  Available: ₦{balance.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPayModal(false);
                  setPaymentAmount('');
                  setRecipientAddress('');
                }}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={loading || !paymentAmount || !recipientAddress}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Pay Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentWallet;