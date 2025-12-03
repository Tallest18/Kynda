import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectAccount = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const options = [
    {
      id: 'wallet',
      title: 'Connect Wallet',
      image: '../images/token-branded.png',
      buttonText: 'Select Wallet'
    },
    {
      id: 'bank',
      title: 'Connect Bank',
      image: '../images/token-branded (1).png',
      buttonText: 'Connect Bank Account'
    }
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (selectedOption === 'wallet') {
      navigate('/connect-wallet');
    } else if (selectedOption === 'bank') {
      navigate('/bank-setup');
    }
  };

  const getButtonText = () => {
    if (!selectedOption) return 'Get Started';
    const option = options.find(opt => opt.id === selectedOption);
    return option ? option.buttonText : 'Get Started';
  };

  const isButtonActive = selectedOption !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src="../images/Vector (1).png"
              alt="Kynda Logo"
              className="w-10 h-10"
            />
          </div>
          <span className="text-2xl font-bold text-gray-800">KYNDA</span>
        </div>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <HelpCircle size={20} />
          <span>Help</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E2382] mb-4">
              Connect your Account with{' '}
              <span className="text-orange-500">KYNDA</span>!!!
            </h1>
            <p className="text-[#344256] text-lg">
              Withdraw your earnings and convert bonuses to coins
            </p>
          </div>

          {/* Options Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            {options.map((option) => {
              const isSelected = selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`
                    relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#F1F5F9]
                    ${isSelected
                      ? 'bg-gradient-to-br from-blue-50 to-white shadow-xl ring-4 ring-blue-400 ring-opacity-50'
                      : 'bg-white shadow-lg hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-center text-gray-800">
                      {option.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!isButtonActive}
              className={`
                px-24 py-4 rounded-lg text-white font-semibold text-lg
                transition-all duration-300 transform
                ${isButtonActive
                  ? 'bg-[#1E2382] hover:bg-[#151a5f] hover:scale-105 shadow-lg cursor-pointer'
                  : 'bg-gray-300 cursor-not-allowed'
                }
              `}
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectAccount;