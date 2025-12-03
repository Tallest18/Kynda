import React, { useState, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

const ConnectWallet = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [currentNetwork, setCurrentNetwork] = useState(null);

  // Camp Network Configuration
  const CAMP_NETWORK = {
    chainId: '0x2C4E8', // 181480 in decimal
    chainName: 'Camp Network Testnet V2',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://rpc-camp-network-4xje7wy105.t.conduit.xyz'],
    blockExplorerUrls: ['https://explorerl2new-camp-network-4xje7wy105.t.conduit.xyz']
  };

  useEffect(() => {
    checkWalletConnection();
    setupEventListeners();
    
    return () => {
      removeEventListeners();
    };
  }, []);

  const setupEventListeners = () => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }
  };

  const removeEventListeners = () => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      setWalletConnected(false);
      setAccount(null);
    } else {
      setAccount(accounts[0]);
      setWalletConnected(true);
    }
  };

  const handleChainChanged = (chainId) => {
    setCurrentNetwork(chainId);
    window.location.reload();
  };

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setWalletConnected(true);
          
          // Check current network
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          setCurrentNetwork(chainId);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
  };

  const addCampNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [CAMP_NETWORK]
      });
      return true;
    } catch (error) {
      console.error('Error adding Camp network:', error);
      if (error.code === 4001) {
        setError('You rejected the network addition request');
      } else {
        setError('Failed to add Camp network. Please try again.');
      }
      return false;
    }
  };

  const switchToCampNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CAMP_NETWORK.chainId }]
      });
      return true;
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      if (error.code === 4902) {
        console.log('Camp network not found, adding it...');
        return await addCampNetwork();
      } else if (error.code === 4001) {
        setError('You rejected the network switch request');
        return false;
      }
      console.error('Error switching to Camp network:', error);
      setError('Failed to switch to Camp network. Please try again.');
      return false;
    }
  };

  const connectMetaMask = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
      setError('MetaMask is not installed. Please install MetaMask extension first.');
      // Open MetaMask download page
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setWalletConnected(true);
        
        // Switch to Camp Network after connecting
        console.log('Switching to Camp Network...');
        const networkSwitched = await switchToCampNetwork();
        
        if (networkSwitched) {
          setError(null);
          console.log('Successfully connected to Camp Network');
        } else {
          setError('Connected to MetaMask but failed to switch to Camp Network');
        }
      }
    } catch (error) {
      console.error('MetaMask connection error:', error);
      if (error.code === 4001) {
        setError('You rejected the connection request');
      } else {
        setError(error.message || 'Failed to connect MetaMask');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const connectBinance = async () => {
    // Check if Binance Chain Wallet is installed
    if (typeof window.BinanceChain === 'undefined') {
      setError('Binance Chain Wallet is not installed. Please install it first.');
      window.open('https://www.bnbchain.org/en/binance-wallet', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const accounts = await window.BinanceChain.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setWalletConnected(true);
        setError(null);
      }
    } catch (error) {
      console.error('Binance wallet connection error:', error);
      if (error.code === 4001) {
        setError('You rejected the connection request');
      } else {
        setError(error.message || 'Failed to connect Binance wallet');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const connectPhantom = async () => {
    // Check if Phantom is installed
    if (typeof window.solana === 'undefined' || !window.solana.isPhantom) {
      setError('Phantom Wallet is not installed. Please install it first.');
      window.open('https://phantom.app/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const response = await window.solana.connect();
      setAccount(response.publicKey.toString());
      setWalletConnected(true);
      setError(null);
    } catch (error) {
      console.error('Phantom connection error:', error);
      if (error.code === 4001) {
        setError('You rejected the connection request');
      } else {
        setError(error.message || 'Failed to connect Phantom wallet');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const handleConnect = async () => {
    if (!selectedCard) {
      setError('Please select a wallet to connect');
      return;
    }

    switch (selectedCard) {
      case 'learn':
        await connectBinance();
        break;
      case 'parent':
        await connectMetaMask();
        break;
      case 'teach':
        await connectPhantom();
        break;
      default:
        setError('Invalid wallet selection');
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setAccount(null);
    setSelectedCard(null);
    setCurrentNetwork(null);
    setError(null);
  };

  const onboardingStates = {
    initial: {
      title: "Connect Your Wallet with KYNDA!!!",
      subtitle: "Withdraw your earnings and convert bonuses to coins",
    },
    learn: {
      title: "Connect Your Wallet with KYNDA!!!",
      subtitle: "Connect with Binance Chain Wallet for seamless transactions",
    },
    parent: {
      title: "Connect Your Wallet with KYNDA!!!",
      subtitle: "Connect with MetaMask on Camp Network for secure transactions",
    },
    teach: {
      title: "Connect Your Wallet with KYNDA!!!",
      subtitle: "Connect with Phantom Wallet for Solana-based transactions",
    }
  };

  const cards = [
    {
      id: 'learn',
      title: "Connect Binance",
      image: "../images/token-branded (5).png",
    },
    {
      id: 'parent',
      title: "Connect MetaMask",
      image: "../images/Vector (2).png",
    },
    {
      id: 'teach',
      title: "Connect Phantom",
      image: "../images/token-branded (6).png",
    }
  ];

  const currentState = selectedCard ? onboardingStates[selectedCard] : onboardingStates.initial;
  const isButtonActive = selectedCard !== null && !isConnecting;

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setError(null);
  };

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

          {/* Wallet Connection Status */}
          {walletConnected && account && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 font-semibold">
                    Connected: {account.slice(0, 6)}...{account.slice(-4)}
                  </p>
                  {currentNetwork && currentNetwork === CAMP_NETWORK.chainId && (
                    <p className="text-green-600 text-sm mt-1">
                      ✓ Camp Network Testnet V2
                    </p>
                  )}
                </div>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                >
                  Disconnect
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cards.map((card) => {
              const isSelected = selectedCard === card.id;
              
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  disabled={walletConnected}
                  className={`
                    relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#F1F5F9]
                    ${walletConnected ? 'opacity-50 cursor-not-allowed' : ''}
                    ${isSelected 
                      ? 'bg-gradient-to-br from-blue-50 to-white shadow-xl ring-4 ring-blue-400 ring-opacity-50' 
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
                      ${isSelected ? 'text-[#1E2382]' : 'text-gray-800'}
                    `}>
                      {card.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connect Button */}
          <div className="flex justify-center mb-4">
            <button
              disabled={!isButtonActive || walletConnected}
              onClick={handleConnect}
              className={`
                px-32 py-4 rounded-lg text-white font-semibold text-lg
                transition-all duration-300 transform
                ${isButtonActive && !walletConnected
                  ? 'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
                }
              `}
            >
              {isConnecting ? 'Connecting...' : walletConnected ? 'Connected ✓' : 'Continue'}
            </button>
          </div>
          
          {/* Alternative Link */}
          <div className="flex items-center justify-center text-gray-700">
            <span>Connect with Fiat Instead?</span>
            <button className="ml-2 text-blue-600 hover:text-blue-800 underline font-semibold">
              Connect Bank
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectWallet;