import React, { useState } from 'react';
import { Search, Bell, Users, DollarSign, TrendingUp, Download, X, Calendar, Trash2 } from 'lucide-react';
import TutorSidebar, { MobileHeader } from './TutorSidebar';

const TutorEarning = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showPayoutSettings, setShowPayoutSettings] = useState(false);

  const [transactions] = useState([
    { id: 1, student: 'Earning History', date: '07/10/2025', type: 'Mathematics', decision: 'Videotapes', duration: '1.5 Years', session_fee: '₦4,500', net_earnings: '₦4,385', status: 'Completed' },
    { id: 2, student: 'Mid Aud', date: '07/10/2025', type: 'B', decision: 'Mathematics', duration: '1.5 Years', session_fee: '₦4,500', net_earnings: '₦4,385', status: 'Failed' },
    { id: 3, student: 'Mid Aud', date: '07/10/2025', type: 'A', decision: 'Mathematics', duration: '1.5 Years', session_fee: '₦4,500', net_earnings: '₦4,385', status: 'Completed' },
    { id: 4, student: 'Mid Aud', date: '07/10/2025', type: 'B', decision: 'Mathematics', duration: '1.5 Years', session_fee: '₦4,500', net_earnings: '₦4,385', status: 'Pending' },
    { id: 5, student: 'Mid Aud', date: '07/10/2025', type: 'C', decision: 'Mathematics', duration: '1.5 Years', session_fee: '₦4,500', net_earnings: '₦4,385', status: 'Completed' }
  ]);

  return (
    <div className="min-h-screen mt-4 bg-gray-50">
      <TutorSidebar 
        currentPath="/tutor-earning"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="lg:ml-64 pt-16 lg:pt-0 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold">Earnings</h1>
          
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 text-sm"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
            <button className="hidden md:flex text-blue-600 items-center gap-1 text-sm">
              <Users className="w-5 h-5" />
              Kynda Assistant
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Total Earned</span>
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">₦110,000</div>
            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>Available for withdrawal</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Pending Earnings</span>
              <DollarSign className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">₦15,000</div>
            <div className="flex items-center gap-1 text-gray-600 text-xs md:text-sm">
              <span>Yet to be processed</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-xs md:text-sm">Total Earned</span>
              <DollarSign className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">₦125,000</div>
            <div className="flex items-center gap-1 text-gray-600 text-xs md:text-sm">
              <span>All time earnings</span>
            </div>
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <div>
              <h3 className="font-semibold text-sm md:text-base">Withdraw Earnings</h3>
              <p className="text-xs md:text-sm text-gray-600">25% Kynda Commission</p>
            </div>
            <button 
              onClick={() => setShowPayoutSettings(true)}
              className="text-blue-600 text-xs md:text-sm flex items-center gap-1"
            >
              Payout Settings
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium mb-2">Available Amount</label>
              <div className="text-xl md:text-2xl font-bold text-green-600">₦110,000</div>
              <p className="text-xs md:text-sm text-gray-500">Withdrawal will be processed within 1-3 business days</p>
            </div>
            <button 
              onClick={() => setShowWithdrawModal(true)}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700 text-sm"
            >
              Withdraw Earnings
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-200 gap-3">
            <h2 className="font-semibold text-sm md:text-base">Recent Transactions</h2>
            <div className="flex items-center gap-2">
              <button className="text-gray-600 text-xs md:text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Date Range
              </button>
              <button className="text-gray-600 text-xs md:text-sm flex items-center gap-1">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {transactions.length === 0 ? (
            <div className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-300">
                <DollarSign className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Transactions Yet</h3>
              <p className="text-gray-500 text-sm">Your earning transactions will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Decision</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Session Fee</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net Earnings</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map(transaction => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 text-sm">{transaction.student}</td>
                      <td className="px-4 md:px-6 py-4 text-sm">{transaction.date}</td>
                      <td className="px-4 md:px-6 py-4 text-sm">{transaction.decision}</td>
                      <td className="px-4 md:px-6 py-4 text-sm">{transaction.duration}</td>
                      <td className="px-4 md:px-6 py-4 text-sm">{transaction.session_fee}</td>
                      <td className="px-4 md:px-6 py-4 text-sm font-semibold">{transaction.net_earnings}</td>
                      <td className="px-4 md:px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          transaction.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : transaction.status === 'Failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-bold">Select Account</h3>
              <button onClick={() => setShowWithdrawModal(false)}>
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">Withdraw your earnings to either your crypto wallet or bank account</p>

            <div className="space-y-3">
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="w-full p-4 border-2 border-blue-600 rounded-lg flex items-center justify-between hover:bg-blue-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">To Bank Account</span>
                </div>
              </button>

              <button
                onClick={() => setShowWithdrawModal(false)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">To Wallet Address</span>
                </div>
              </button>
            </div>

            <button className="w-full mt-4 text-center text-blue-600 text-sm underline">
              View Bank Account Details
            </button>
          </div>
        </div>
      )}

      {/* Payout Settings Modal */}
      {showPayoutSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-bold">Payout Settings</h2>
              <button onClick={() => setShowPayoutSettings(false)}>
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
              </button>
            </div>

            <div className="p-4 md:p-6">
              <p className="text-xs md:text-sm text-gray-600 mb-6">Configure your automatic payout preferences</p>

              {/* Bank Payout */}
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="font-semibold text-sm md:text-base">Bank Payout</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                    Add Account
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-gray-200 rounded-lg gap-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-sm">Classic Bank</p>
                          <p className="text-xs text-gray-500">Account ****4242</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 text-sm">
                          {i === 1 ? 'Set as Default' : ''}
                        </button>
                        <button className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crypto Payout */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="font-semibold text-sm md:text-base">Crypto Payout</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                    Connect Wallet
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-gray-200 rounded-lg gap-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-sm">Classic Bank</p>
                          <p className="text-xs text-gray-500">ALGP1O...****4242</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 text-sm">
                          {i === 1 ? 'Set as Default' : ''}
                        </button>
                        <button className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorEarning;