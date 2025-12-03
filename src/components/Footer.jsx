
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Facebook, Linkedin, Twitter, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = {
    facebook: "https://facebook.com/kynda",
    linkedin: "https://linkedin.com/company/kynda",
    twitter: "https://twitter.com/kynda",
    youtube: "https://youtube.com/@kynda"
  };

  return (
    <footer className="bg-gray-900 text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo and Contact */}
          <div className="lg:col-span-1 transform transition-all duration-700 delay-100 hover:scale-105">
            <div className="flex items-center space-x-2 mb-6">
            <img
                src="../images/Vector (1).png"
                alt="Logo"
                className="w-12 h-12 animate-pulse"
              />
              <span className="text-3xl font-bold text-white">KYNDA</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="flex items-center space-x-2 text-lg group cursor-pointer">
                <Phone size={16} className="text-cyan-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-300">Emergency Line: +1-800-SKY-HELP</span>
              </div>
              <div className="flex items-center space-x-2 text-lg group cursor-pointer">
                <Mail size={16} className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-300">info@kynda.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-700 delay-200">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Home</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/about-us" className="hover:text-cyan-400 transition-colors duration-300 inline-block">About</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/howitworks" className="hover:text-cyan-400 transition-colors duration-300 inline-block">How It Works</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300 inline-block">For Parent</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300 inline-block">For Tutors</a>
                </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="transform transition-all duration-700 delay-300">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-lg">
               <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/learning-hub" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Learning Hub</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/tutor-resources" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Tutor Resources</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/exam-prep-guides" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Exam Prep Guides</a>
                </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="transform transition-all duration-700 delay-400">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-lg">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/tutor-policy" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Tutor Policy</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/contract-terms" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Contract Terms</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/refund-policy" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Refund Policy</a>
                </li>
            </ul>
          </div>

          {/* Help */}
          <div className="transform transition-all duration-700 delay-500">
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-lg">
                 <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/faqs" className="hover:text-cyan-400 transition-colors duration-300 inline-block">FAQ's</a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="/contact" className="hover:text-cyan-400 transition-colors duration-300 inline-block">Message Us</a>
                </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 text-lg">
            <span>© 2025 Kynda. All Rights Reserved.</span>
            <a href="/terms-and-conditions" className="hover:text-cyan-400 transition-colors duration-300">Terms & Conditions</a>
            <a href="/privacy-policy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:text-cyan-400 hover:scale-125 hover:-translate-y-1"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:text-cyan-400 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:text-cyan-400 hover:scale-125 hover:-translate-y-1"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:text-cyan-400 hover:scale-125 hover:-translate-y-1"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;