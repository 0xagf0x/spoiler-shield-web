import './App.css';
import React, { useState, useEffect } from 'react';
import { Shield, Download, Star, Check, Play, Menu, X, Chrome, Globe, Eye, EyeOff, Zap, Users, Lock } from 'lucide-react';
import iconShield from './icons/icon-shield.png'



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Protection",
      description: "AI-powered spoiler detection across all major social platforms and news sites."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Selective Reveal",
      description: "Choose exactly what you want to see with one-click spoiler reveals."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Scanning",
      description: "Instant protection as you scroll with advanced content analysis."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy First",
      description: "All processing happens locally. Your data never leaves your device."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Coverage",
      description: "Works on Reddit, Twitter/X, Facebook, YouTube, Instagram, and more."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join thousands of users browsing spoiler-free across the web."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "TV Show Enthusiast",
      content: "Finally! I can browse Reddit without having season finales ruined. Spoiler Shield is a game-changer.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Formula 1 Fan",
      content: "As someone who watches races on delay, this extension has saved my weekends. No more accidental spoilers!",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Movie Buff",
      content: "The Marvel protection alone makes this worth it. I can finally use social media on opening weekend.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Spoilers Blocked" },
    { number: "15+", label: "Platforms Supported" },
    { number: "4.9★", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* <Shield className="w-8 h-8 text-purple-400" /> */}
                <img src={iconShield} className='flex w-full max-w-[24px]' />
                <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-xl font-bold text-white">Spoiler Shield</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">Reviews</a>
              <a href="/" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <Chrome className="w-4 h-4 inline mr-2" />
                Add to Chrome
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-purple-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-purple-400 transition-colors">Reviews</a>
              <a href="/" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <Chrome className="w-4 h-4 inline mr-2" />
                Add to Chrome
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 50,000+ users
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Browse the Web
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Spoiler-Free
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Protect yourself from spoilers across Reddit, Twitter, Facebook, and more. 
              Add keywords to your watchlist and browse worry-free until you're ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/" className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 flex items-center">
                <Chrome className="w-5 h-5 mr-3" />
                Add to Chrome - It's Free
                <div className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </a>
              
              {/* <button className="flex items-center text-purple-300 hover:text-white transition-colors text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Protection,
              <span className="block text-purple-400">Simple to Use</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology meets intuitive design to keep your browsing experience spoiler-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Three Steps to
              <span className="block text-purple-400">Spoiler Freedom</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Install Extension</h3>
              <p className="text-gray-300">Add Spoiler Shield to Chrome in seconds with just one click</p>
            </div>

            <div className="text-center group md:mt-8">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-content text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 justify-center">
                  2
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Add Keywords</h3>
              <p className="text-gray-300">Tell us what shows, movies, or sports you want to protect</p>
            </div>

            <div className="text-center group md:mt-16">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Safely</h3>
              <p className="text-gray-300">Enjoy spoiler-free browsing with automatic content protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by Users
              <span className="block text-purple-400">Worldwide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Browse
            <span className="block text-purple-400">Without Fear?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of users who browse the web spoiler-free every day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 flex items-center">
              <Chrome className="w-5 h-5 mr-3" />
              Install Spoiler Shield Free
              <div className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                →
              </div>
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Free forever • No account required • Privacy-first design
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                {/* <Shield className="w-8 h-8 text-purple-400" /> */}
                  <img src={iconShield} className='flex w-full max-w-[24px]' />
                <span className="text-xl font-bold text-white">Spoiler Shield</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate browser extension for spoiler-free browsing across all your favorite platforms.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-white">🐦</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-white">💬</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-white">📧</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">How It Works</a></li>
                {/* <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li> */}
                {/* <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {/* <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li> */}
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Bug Reports</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Feature Requests</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Spoiler Shield. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
