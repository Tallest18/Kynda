import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [currentNetwork, setCurrentNetwork] = useState(null);
  const [walletInstalled, setWalletInstalled] = useState({
    metamask: false,
    binance: false,
    phantom: false
  });

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

  const setupEventListeners = useCallback(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }
  }, []);

  const removeEventListeners = useCallback(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    }
  }, []);

  const handleAccountsChanged = useCallback((accounts) => {
    if (accounts.length === 0) {
      setWalletConnected(false);
      setAccount(null);
      localStorage.removeItem('kynda_wallet_address');
      localStorage.removeItem('kynda_wallet_type');
    } else {
      setAccount(accounts[0]);
      setWalletConnected(true);
      localStorage.setItem('kynda_wallet_address', accounts[0]);
    }
  }, []);

  const handleChainChanged = useCallback((chainId) => {
    setCurrentNetwork(chainId);
    window.location.reload();
  }, []);

  const checkWalletConnection = useCallback(async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setWalletConnected(true);
          
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          setCurrentNetwork(chainId);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
  }, []);

  const redirectToDashboard = useCallback(() => {
    // Check user role and redirect accordingly
    const userData = localStorage.getItem('kynda_user');
    
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const role = user.role || 'student';
        
        if (role === 'tutor') {
          navigate('/tutor-dashboard');
        } else if (role === 'parent') {
          navigate('/parent-dashboard');
        } else {
          navigate('/student-dashboard');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        navigate('/student-dashboard');
      }
    } else {
      // Default to student dashboard if no user data
      navigate('/student-dashboard');
    }
  }, [navigate]);

  useEffect(() => {
    // Check if user already connected
    const savedWallet = localStorage.getItem('kynda_wallet_address');
    const savedWalletType = localStorage.getItem('kynda_wallet_type');
    
    if (savedWallet && savedWalletType) {
      setAccount(savedWallet);
      setWalletConnected(true);
      // Auto-redirect to dashboard if already connected
      const timer = setTimeout(() => {
        redirectToDashboard();
      }, 1500);
      return () => clearTimeout(timer);
    }

    // Function to check all wallet installations
    const checkWalletInstallations = () => {
      setWalletInstalled({
        metamask: typeof window.ethereum !== 'undefined',
        binance: typeof window.BinanceChain !== 'undefined',
        phantom: typeof window.solana !== 'undefined' && window.solana.isPhantom
      });
    };

    checkWalletInstallations();

    const checkMetaMaskLoaded = setInterval(() => {
      checkWalletInstallations();
      if (typeof window.ethereum !== 'undefined') {
        clearInterval(checkMetaMaskLoaded);
        checkWalletConnection();
        setupEventListeners();
      }
    }, 100);

    const timeoutId = setTimeout(() => clearInterval(checkMetaMaskLoaded), 5000);

    return () => {
      clearInterval(checkMetaMaskLoaded);
      clearTimeout(timeoutId);
      removeEventListeners();
    };
  }, [checkWalletConnection, setupEventListeners, removeEventListeners, redirectToDashboard]);

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

  const saveWalletToLocalStorage = (address, walletType, networkInfo = null) => {
    localStorage.setItem('kynda_wallet_address', address);
    localStorage.setItem('kynda_wallet_type', walletType);
    localStorage.setItem('kynda_wallet_connected', 'true');
    localStorage.setItem('kynda_wallet_connected_at', new Date().toISOString());
    
    if (networkInfo) {
      localStorage.setItem('kynda_wallet_network', JSON.stringify(networkInfo));
    }

    // Also save to user data if available
    const userData = localStorage.getItem('kynda_user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        user.walletAddress = address;
        user.walletType = walletType;
        user.walletConnected = true;
        localStorage.setItem('kynda_user', JSON.stringify(user));
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    }
  };

  const connectMetaMask = async () => {
    const isMetaMaskInstalled = typeof window.ethereum !== 'undefined';
    
    setWalletInstalled(prev => ({ ...prev, metamask: isMetaMaskInstalled }));

    if (!isMetaMaskInstalled) {
      setError('MetaMask is not installed. Please install MetaMask extension and refresh this page.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      if (accounts.length > 0) {
        const walletAddress = accounts[0];
        setAccount(walletAddress);
        setWalletConnected(true);
        
        console.log('Switching to Camp Network...');
        const networkSwitched = await switchToCampNetwork();
        
        if (networkSwitched) {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          
          saveWalletToLocalStorage(walletAddress, 'metamask', {
            network: 'Camp Network Testnet V2',
            chainId: chainId
          });
          
          setError(null);
          console.log('Successfully connected to Camp Network');
          
          // Show success message and redirect
          setTimeout(() => {
            redirectToDashboard();
          }, 2000);
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
    const isBinanceInstalled = typeof window.BinanceChain !== 'undefined';
    
    setWalletInstalled(prev => ({ ...prev, binance: isBinanceInstalled }));

    if (!isBinanceInstalled) {
      setError('Binance Chain Wallet is not installed. Please install it and refresh this page.');
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
        const walletAddress = accounts[0];
        setAccount(walletAddress);
        setWalletConnected(true);
        
        saveWalletToLocalStorage(walletAddress, 'binance');
        setError(null);
        
        // Redirect after 2 seconds
        setTimeout(() => {
          redirectToDashboard();
        }, 2000);
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
    const isPhantomInstalled = typeof window.solana !== 'undefined' && window.solana.isPhantom;
    
    setWalletInstalled(prev => ({ ...prev, phantom: isPhantomInstalled }));

    if (!isPhantomInstalled) {
      setError('Phantom Wallet is not installed. Please install it and refresh this page.');
      window.open('https://phantom.app/', '_blank');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      const response = await window.solana.connect();
      const walletAddress = response.publicKey.toString();
      
      setAccount(walletAddress);
      setWalletConnected(true);
      
      saveWalletToLocalStorage(walletAddress, 'phantom');
      setError(null);
      
      // Redirect after 2 seconds
      setTimeout(() => {
        redirectToDashboard();
      }, 2000);
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

          {/* Wallet Installation Status */}
          {!walletConnected && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-semibold mb-2">Wallet Detection Status:</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className={walletInstalled.metamask ? "text-green-600" : "text-gray-500"}>
                    {walletInstalled.metamask ? "✓" : "○"} MetaMask
                  </span>
                  {!walletInstalled.metamask && (
                    <a 
                      href="https://metamask.io/download/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-xs"
                    >
                      (Install)
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={walletInstalled.binance ? "text-green-600" : "text-gray-500"}>
                    {walletInstalled.binance ? "✓" : "○"} Binance Wallet
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={walletInstalled.phantom ? "text-green-600" : "text-gray-500"}>
                    {walletInstalled.phantom ? "✓" : "○"} Phantom Wallet
                  </span>
                </div>
              </div>
              {!walletInstalled.metamask && !walletInstalled.binance && !walletInstalled.phantom && (
                <p className="text-orange-600 text-xs mt-2">
                  ⚠️ No wallets detected. Please install a wallet and refresh the page.
                </p>
              )}
            </div>
          )}

          {/* Wallet Connection Success */}
          {walletConnected && account && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
              <div className="flex items-center justify-center flex-col">
                <div className="text-green-800 font-bold text-xl mb-2">
                  ✓ Wallet Connected Successfully!
                </div>
                <p className="text-green-700 text-sm mb-2">
                  Address: {account.slice(0, 6)}...{account.slice(-4)}
                </p>
                {currentNetwork && currentNetwork === CAMP_NETWORK.chainId && (
                  <p className="text-green-600 text-sm">
                    ✓ Camp Network Testnet V2
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-3">
                  Redirecting to dashboard...
                </p>
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
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
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
            <button 
              onClick={() => redirectToDashboard()}
              className="ml-2 text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              Skip to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectWallet;