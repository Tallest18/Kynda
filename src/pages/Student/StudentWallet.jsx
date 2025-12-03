import React, { useState, useEffect, useCallback } from 'react';
import { Wallet, Send, History, ArrowUpRight, ArrowDownLeft, Copy, Check, RefreshCw, BookOpen, FileText, Award, DollarSign, CreditCard } from 'lucide-react';
import Footer from '../../components/Footer';
import StudentNavbar from "../../components/StudentNavbar";

const StudentWallet = () => {
  const [balance, setBalance] = useState(0);
  const [cryptoBalance, setCryptoBalance] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showPayModal, setShowPayModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawType, setWithdrawType] = useState('bank'); // 'bank' or 'crypto'
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    accountName: '',
    bankName: ''
  });
  
  // Earnings tracking
  const [earnings] = useState([
    { id: 1, type: 'reading', title: 'Completed Chapter 5: Mathematics', amount: 500, date: '2024-12-03', status: 'credited' },
    { id: 2, type: 'assignment', title: 'Physics Assignment #3', amount: 750, date: '2024-12-02', status: 'credited' },
    { id: 3, type: 'quiz', title: 'Chemistry Quiz - 95% Score', amount: 1000, date: '2024-12-01', status: 'credited' },
    { id: 4, type: 'reading', title: 'Completed Chapter 4: History', amount: 500, date: '2024-11-30', status: 'credited' },
  ]);
  
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'withdrawal', amount: 5000, date: '2024-12-01', destination: 'Bank Account', status: 'completed' },
    { id: 2, type: 'earning', amount: 2250, date: '2024-12-02', source: 'Learning Activities', status: 'completed' },
    { id: 3, type: 'crypto_transfer', amount: 3500, date: '2024-11-28', destination: '0x742d...3a8f', status: 'completed' },
  ]);

  // Camp Network Configuration
  const CAMP_NETWORK_CONFIG = {
    chainId: '0x1e4', // 484 in hex
    chainName: 'Camp Network Mainnet',
    nativeCurrency: {
      name: 'CAMP',
      symbol: 'CAMP',
      decimals: 18
    },
    rpcUrls: ['https://rpc.camp.raas.gelato.cloud'],
    blockExplorerUrls: ['https://camp.cloud.blockscout.com/']
  };

  const addCampNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [CAMP_NETWORK_CONFIG],
      });
      return true;
    } catch (error) {
      console.error('Error adding Camp Network:', error);
      return false;
    }
  };

  const switchToCampNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CAMP_NETWORK_CONFIG.chainId }],
      });
      return true;
    } catch (error) {
      if (error.code === 4902) {
        return await addCampNetwork();
      }
      console.error('Error switching to Camp Network:', error);
      return false;
    }
  };

  const fetchBalance = useCallback(async (address) => {
    try {
      const balanceHex = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      
      const balanceInCamp = parseInt(balanceHex, 16) / Math.pow(10, 18);
      setCryptoBalance(balanceInCamp * 450000); // Convert to Naira
    } catch (error) {
      console.error('Error fetching balance:', error);
      setCryptoBalance(0);
    }
  }, []);

  const checkWalletConnection = useCallback(async () => {
    try {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      checkWalletConnection();
    }, 0);
    
    return () => clearTimeout(timer);
  }, [checkWalletConnection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
      setBalance(totalEarnings);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [earnings]);

  const connectWallet = async () => {
    setLoading(true);
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask or another Web3 wallet to use Camp Network');
        setLoading(false);
        return;
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const switched = await switchToCampNetwork();
      if (!switched) {
        alert('Failed to switch to Camp Network. Please try manually.');
        setLoading(false);
        return;
      }
      
      setWalletAddress(accounts[0]);
      setIsConnected(true);
      await fetchBalance(accounts[0]);
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
    setLoading(false);
  };

  const handleCryptoPayment = async () => {
    if (!paymentAmount || !recipientAddress) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await switchToCampNetwork();

      const amountInWei = (parseFloat(paymentAmount) / 450000 * Math.pow(10, 18)).toString(16);
      
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: walletAddress,
          to: recipientAddress,
          value: '0x' + amountInWei,
          gas: '0x5208',
        }],
      });

      const newTransaction = {
        id: transactions.length + 1,
        type: 'crypto_transfer',
        amount: parseFloat(paymentAmount),
        date: new Date().toISOString().split('T')[0],
        destination: recipientAddress,
        status: 'completed',
        txHash: txHash
      };
      
      setTransactions([newTransaction, ...transactions]);
      setCryptoBalance(cryptoBalance - parseFloat(paymentAmount));
      setShowPayModal(false);
      setPaymentAmount('');
      setRecipientAddress('');
      alert('Payment successful!');
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + error.message);
    }
    setLoading(false);
  };

  const handleWithdrawal = async () => {
    if (!withdrawAmount) {
      alert('Please enter withdrawal amount');
      return;
    }

    const amount = parseFloat(withdrawAmount);
    if (amount > balance) {
      alert('Insufficient balance');
      return;
    }

    setLoading(true);
    
    try {
      if (withdrawType === 'bank') {
        if (!bankDetails.accountNumber || !bankDetails.bankName) {
          alert('Please fill in bank details');
          setLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const newTransaction = {
          id: transactions.length + 1,
          type: 'withdrawal',
          amount: amount,
          date: new Date().toISOString().split('T')[0],
          destination: `${bankDetails.bankName} - ${bankDetails.accountNumber}`,
          status: 'completed'
        };
        
        setTransactions([newTransaction, ...transactions]);
        setBalance(balance - amount);
        alert('Bank withdrawal initiated! Funds will arrive in 1-3 business days.');
        
      } else if (withdrawType === 'crypto') {
        await switchToCampNetwork();
        
        const newTransaction = {
          id: transactions.length + 1,
          type: 'crypto_transfer',
          amount: amount,
          date: new Date().toISOString().split('T')[0],
          destination: walletAddress,
          status: 'completed'
        };
        
        setTransactions([newTransaction, ...transactions]);
        setBalance(balance - amount);
        setCryptoBalance(cryptoBalance + amount);
        alert('Successfully transferred to your crypto wallet!');
      }
      
      setShowWithdrawModal(false);
      setWithdrawAmount('');
      setBankDetails({ accountNumber: '', accountName: '', bankName: '' });
      
    } catch (error) {
      console.error('Withdrawal error:', error);
      alert('Withdrawal failed: ' + error.message);
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

  const getEarningIcon = (type) => {
    switch(type) {
      case 'reading': return BookOpen;
      case 'assignment': return FileText;
      case 'quiz': return Award;
      default: return DollarSign;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <StudentNavbar />
      
      <main className="flex-1 p-4 md:p-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Student Wallet</h1>
              <p className="text-gray-600 mt-1">Earn while you learn</p>
            </div>
            {isConnected && (
              <button
                onClick={() => fetchBalance(walletAddress)}
                className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </button>
            )}
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Earnings Balance */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6" />
                <span className="text-sm opacity-90">Learning Earnings</span>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">₦{balance.toLocaleString()}</div>
                <div className="text-sm opacity-90">Available to Withdraw</div>
              </div>

              <button
                onClick={() => setShowWithdrawModal(true)}
                className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowDownLeft className="w-5 h-5" />
                Withdraw Earnings
              </button>
            </div>

            {/* Crypto Balance */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-6 md:p-8 text-white">
              {isConnected ? (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-6 h-6" />
                      <span className="text-sm opacity-90">Camp Network Wallet</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 self-start">
                      <span className="text-xs font-mono">{formatAddress(walletAddress)}</span>
                      <button onClick={copyAddress} className="hover:opacity-80">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-bold mb-2">₦{cryptoBalance.toLocaleString()}</div>
                    <div className="text-sm opacity-90">Crypto Balance</div>
                  </div>

                  <button
                    onClick={() => setShowPayModal(true)}
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Payment
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Wallet className="w-6 h-6" />
                    <span className="text-sm opacity-90">Camp Network</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold mb-2">Connect Wallet</div>
                    <div className="text-sm opacity-90">Use crypto for payments</div>
                  </div>

                  <button
                    onClick={connectWallet}
                    disabled={loading}
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Connecting...' : 'Connect Camp Wallet'}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Earnings */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-600" />
                Recent Earnings
              </h2>
              
              <div className="space-y-3">
                {earnings.slice(0, 4).map((earning) => {
                  const Icon = getEarningIcon(earning.type);
                  return (
                    <div key={earning.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 flex-shrink-0">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-800 truncate">{earning.title}</div>
                          <div className="text-sm text-gray-500">{earning.date}</div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-3">
                        <div className="font-bold text-green-600">+₦{earning.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 capitalize">{earning.status}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <History className="w-6 h-6 text-blue-600" />
                Transaction History
              </h2>
              
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'earning' ? 'bg-green-100' : 'bg-blue-100'
                      } flex-shrink-0`}>
                        {tx.type === 'earning' ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-800 truncate">
                          {tx.type === 'earning' ? tx.source : tx.destination}
                        </div>
                        <div className="text-sm text-gray-500">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <div className={`font-bold ${tx.type === 'earning' ? 'text-green-600' : 'text-blue-600'}`}>
                        {tx.type === 'earning' ? '+' : '-'}₦{tx.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{tx.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Crypto Payment Modal */}
      {showPayModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Crypto Payment</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient Wallet Address
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
                  Available: ₦{cryptoBalance.toLocaleString()}
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
                onClick={handleCryptoPayment}
                disabled={loading || !paymentAmount || !recipientAddress}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Send Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdrawal Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Withdraw Earnings</h3>
            
            {/* Withdrawal Type Selection */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setWithdrawType('bank')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  withdrawType === 'bank' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Bank Account
              </button>
              <button
                onClick={() => setWithdrawType('crypto')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  withdrawType === 'crypto' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Wallet className="w-5 h-5" />
                Crypto Wallet
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {withdrawType === 'bank' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
                      placeholder="e.g., GTBank, Access Bank"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                      placeholder="0123456789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Name
                    </label>
                    <input
                      type="text"
                      value={bankDetails.accountName}
                      onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </>
              )}

              {withdrawType === 'crypto' && !isConnected && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    Please connect your Camp Network wallet first to withdraw to crypto.
                  </p>
                  <button
                    onClick={connectWallet}
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Connect Wallet
                  </button>
                </div>
              )}

              {(withdrawType === 'bank' || (withdrawType === 'crypto' && isConnected)) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (₦)
                  </label>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Available: ₦{balance.toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowWithdrawModal(false);
                  setWithdrawAmount('');
                  setBankDetails({ accountNumber: '', accountName: '', bankName: '' });
                }}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawal}
                disabled={loading || !withdrawAmount || (withdrawType === 'crypto' && !isConnected)}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Withdraw'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default StudentWallet;