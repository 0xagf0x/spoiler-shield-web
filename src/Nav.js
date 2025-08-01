import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Chrome,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import iconShield from "./icons/icon-shield.png";

// Firefox icon component since it's not in lucide-react
const Firefox = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 12c0 1.657-.672 3.157-1.757 4.243S14.157 17.5 12.5 17.5 9.343 16.828 8.257 15.743 6.5 13.657 6.5 12s.672-3.157 1.757-4.243S10.343 6.5 12 6.5s3.157.672 4.243 1.757S18.5 10.343 18.5 12z" />
  </svg>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src={iconShield} className="w-[24px] text-white" />
                <div className="absolute inset-0 w-10 h-10 bg-violet-500/20 rounded-2xl blur-xl group-hover:bg-violet-500/40 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Spoiler Shield
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Features
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                How It Works
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Reviews
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <div className="flex space-x-3">
                <button className="group bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded-2xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center">
                  <Chrome className="w-5 h-5 mr-2" />
                  Chrome
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center">
                  <Firefox className="w-5 h-5 mr-2" />
                  Firefox
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <button
              className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-6 py-6 space-y-6">
              <a
                href="#features"
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors text-lg"
              >
                Reviews
              </a>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center">
                  <Chrome className="w-5 h-5 mr-2" />
                  Add to Chrome
                </button>
                <button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center">
                  <Firefox className="w-5 h-5 mr-2" />
                  Add to Firefox
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
