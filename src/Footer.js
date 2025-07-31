import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import iconShield from './icons/icon-shield.png';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={iconShield} className="w-[24px] text-white" alt="Spoiler Shield" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Spoiler Shield
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              The ultimate browser extension for spoiler-free browsing across all your favorite platforms.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">🐦</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors text-lg">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors text-lg">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/team" className="hover:text-white transition-colors text-lg">Team</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors text-lg">Contact Us</a></li>
              <li><a href="#support" className="hover:text-white transition-colors text-lg">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © 2025 Spoiler Shield. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-white text-lg transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white text-lg transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;