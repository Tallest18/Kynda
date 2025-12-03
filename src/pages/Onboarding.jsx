import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const onboardingStates = {
    initial: {
      title: "Fill the Knowledge Gap with KYNDA!!!",
      subtitle: "Are you signing up to Kynda as a Student, Parent or Tutor?",
    },
    learn: {
      title: "Welcome, Future Achiever!",
      subtitle: "Choose your subjects, connect with tutors, and take control of your learning journey.",
    },
    parent: {
      title: "Support Your Child's Learning Journey",
      subtitle: "Support your child with affordable, Reliable tutors, transparent progress, and cost-effective lessons you can trust.",
    },
    teach: {
      title: "Share Knowledge. Earn Respect. Get Paid.",
      subtitle: "Join Kynda to reach more students, build credibility, Flexible hours, fast payouts and make real impact.",
    }
  };

  const cards = [
    {
      id: 'learn',
      title: "I'm Here to Learn",
      image: "../images/Group.png",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 'parent',
      title: "I'm Here for My Child",
      image: "../images/Group (1).png",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 'teach',
      title: "I'm Here to Teach & Earn",
      image: "../images/Group (2).png",
      gradient: "from-blue-600 to-cyan-500"
    }
  ];

  const currentState = selectedCard ? onboardingStates[selectedCard] : onboardingStates.initial;
  const isButtonActive = selectedCard !== null;

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleGetStarted = () => {
    if (selectedCard === 'teach') {
      navigate('/tutor-signup');
    } else if (selectedCard === 'learn' || selectedCard === 'parent') {
      navigate('/student-signup');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex flex-col">
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
        <div className="max-w-4xl w-full">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-4xl font-bold text-[#1E2382] mb-4">
              {currentState.title.split('KYNDA').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-orange-500">KYNDA</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-[#344256] text-lg max-w-3xl mx-auto">
              {currentState.subtitle}
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cards.map((card) => {
              const isSelected = selectedCard === card.id;
              
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105
                    ${isSelected 
                      ? 'bg-linear-to-br ' + card.gradient + ' shadow-xl ring-4 ring-blue-400 ring-opacity-50' 
                      : 'bg-white shadow-lg hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex flex-col items-center gap-4">
                    {/* Illustration Image */}
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`
                      text-lg font-semibold text-center
                      ${isSelected ? 'text-white' : 'text-gray-800'}
                    `}>
                      {card.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Get Started Button */}
          <div className="flex justify-center">
            <button
              onClick={handleGetStarted}
              disabled={!isButtonActive}
              className={`
                px-32 py-4 rounded-lg text-white font-semibold text-lg
                transition-all duration-300 transform
                ${isButtonActive
                  ? 'bg-linear-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
                }
              `}
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;