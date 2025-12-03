// ===============================================
// CAMP NETWORK WALLET INTEGRATION GUIDE
// ===============================================

// 1. INSTALLATION
// ===============================================
// Install required packages:
// npm install ethers @walletconnect/web3-provider

// 2. FRONTEND SETUP
// ===============================================

// src/utils/campWallet.js
import { ethers } from 'ethers';

export const CAMP_NETWORK_CONFIG = {
  chainId: '0x...', // Camp Network Chain ID (get from Camp Network docs)
  chainName: 'Camp Network',
  nativeCurrency: {
    name: 'CAMP',
    symbol: 'CAMP',
    decimals: 18
  },
  rpcUrls: ['https://rpc.camp.network'], // Replace with actual RPC URL
  blockExplorerUrls: ['https://explorer.camp.network']
};

// Connect to Camp Network Wallet
export const connectCampWallet = async () => {
  try {
    if (!window.ethereum) {
      throw new Error('Camp Network Wallet not installed');
    }

    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    // Switch to Camp Network if needed
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CAMP_NETWORK_CONFIG.chainId }]
      });
    } catch (switchError) {
      // Add network if it doesn't exist
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [CAMP_NETWORK_CONFIG]
        });
      }
    }

    return accounts[0];
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
};

// Get wallet balance
export const getBalance = async (address) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error('Error getting balance:', error);
    throw error;
  }
};

// Send payment transaction
export const sendPayment = async (toAddress, amountInEther) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    const tx = await signer.sendTransaction({
      to: toAddress,
      value: ethers.utils.parseEther(amountInEther.toString())
    });

    // Wait for transaction confirmation
    const receipt = await tx.wait();
    return receipt;
  } catch (error) {
    console.error('Error sending payment:', error);
    throw error;
  }
};

// Listen for account changes
export const onAccountChange = (callback) => {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      callback(accounts[0]);
    });
  }
};

// Listen for network changes
export const onChainChange = (callback) => {
  if (window.ethereum) {
    window.ethereum.on('chainChanged', (chainId) => {
      callback(chainId);
    });
  }
};

