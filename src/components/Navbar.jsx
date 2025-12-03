import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileLoginDropdown, setShowMobileLoginDropdown] = useState(false);
  const [showMobileSignupDropdown, setShowMobileSignupDropdown] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with hover animation */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center space-x-2">
                <img
                  src="../images/Vector (1).png"
                  alt="Kynda Logo"
                  className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-900">
                  KYNDA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with underline animation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'How it Works', path: '/how-it-works' },
                { name: 'Features', path: '/features' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-900 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/teach"
                className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-900 group"
              >
                Teach on Kynda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Dropdown with animation */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  className="flex items-center space-x-1 text-gray-700 font-medium hover:text-indigo-900 transition-colors duration-300"
                >
                  <span>Login</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-300 ${
                      showDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                    showDropdown
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200"
                  >
                    Student Login
                  </Link>
                  <Link
                    to="/tutor-login"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200"
                  >
                    Tutor Login
                  </Link>
                </div>
              </div>

              <Link to="/onboarding">
                <button className="relative bg-indigo-900 text-white px-6 py-2 rounded-md overflow-hidden group">
                  <span className="relative z-10">Sign Up</span>
                  <span className="absolute inset-0 bg-indigo-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </Link>
            </div>

            {/* Mobile menu button with animation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 space-y-1">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'How it Works', path: '/how-it-works' },
            { name: 'Features', path: '/features' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'Teach on Kynda', path: '/teach-on-kynda' }
          ].map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 rounded-lg transition-all duration-300 transform ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.name}
              </Link>
            )
          )}

          <div className="pt-4 space-y-3">
            {/* Mobile Login Dropdown */}
            <div className={`transform transition-all duration-300 ${
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}>
              <button
                onClick={() => setShowMobileLoginDropdown(!showMobileLoginDropdown)}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-700 border-2 border-indigo-900 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
              >
                <span>Login</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${
                    showMobileLoginDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Mobile Login Dropdown Options */}
              <div
                className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  showMobileLoginDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-900 rounded-lg transition-colors duration-200 ml-4"
                >
                  Student Login
                </Link>
                <Link
                  to="/tutor-login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-900 rounded-lg transition-colors duration-200 ml-4"
                >
                  Tutor Login
                </Link>
              </div>
            </div>

            {/* Mobile Sign Up Dropdown */}
            <div className={`transform transition-all duration-300 ${
              isMenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}>
              <button
                onClick={() => setShowMobileSignupDropdown(!showMobileSignupDropdown)}
                className="w-full flex items-center justify-between py-3 px-4 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                <span>Sign Up</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${
                    showMobileSignupDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Mobile Sign Up Dropdown Options */}
              <div
                className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  showMobileSignupDropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <Link
                  to="/student-signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-900 rounded-lg transition-colors duration-200 ml-4"
                >
                  Student Sign Up
                </Link>
                <Link
                  to="/tutor-signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-900 rounded-lg transition-colors duration-200 ml-4"
                >
                  Tutor Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;