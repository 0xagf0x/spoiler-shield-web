
import React, { useState, useEffect } from 'react';
import { Shield, Download, Star, Check, Play, Menu, X, Chrome, Globe, Eye, EyeOff, Zap, Users, Lock, ArrowRight, Sparkles, Heart, AlertTriangle } from 'lucide-react';
import iconShield from './icons/icon-shield.png'

// Firefox icon component since it's not in lucide-react
const Firefox = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 12c0 1.657-.672 3.157-1.757 4.243S14.157 17.5 12.5 17.5 9.343 16.828 8.257 15.743 6.5 13.657 6.5 12s.672-3.157 1.757-4.243S10.343 6.5 12 6.5s3.157.672 4.243 1.757S18.5 10.343 18.5 12z"/>
  </svg>
);

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Protection",
      description: "AI-powered spoiler detection across all major social platforms and news sites.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Selective Reveal",
      description: "Choose exactly what you want to see with one-click spoiler reveals.",
      color: "from-violet-400 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Scanning",
      description: "Instant protection as you scroll with advanced content analysis.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy First",
      description: "All processing happens locally. Your data never leaves your device.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Coverage",
      description: "Works on Reddit, Twitter/X, Facebook, YouTube, Instagram, and more.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join thousands of users browsing spoiler-free across the web.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "TV Show Enthusiast",
      content: "Finally! I can browse Reddit without having season finales ruined. Spoiler Shield is a game-changer.",
      rating: 5,
      avatar: "SC",
      bgColor: "from-pink-500 to-rose-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Formula 1 Fan", 
      content: "As someone who watches races on delay, this extension has saved my weekends. No more accidental spoilers!",
      rating: 5,
      avatar: "MR",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Watson",
      role: "Movie Buff",
      content: "The Marvel protection alone makes this worth it. I can finally use social media on opening weekend.",
      rating: 5,
      avatar: "EW",
      bgColor: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "1M+", label: "Spoilers Blocked", icon: <Shield className="w-6 h-6" /> },
    { number: "15+", label: "Platforms Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4.9★", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}>
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
                <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
                  Features
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
                  How It Works
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
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
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
              <div className="px-6 py-6 space-y-6">
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors text-lg">Features</a>
                <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors text-lg">How It Works</a>
                <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors text-lg">Reviews</a>
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

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm group hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2 text-violet-400" />
                Trusted by 50,000+ users worldwide
                <Heart className="w-4 h-4 ml-2 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block text-white">Browse the Web</span>
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-pulse">
                  Spoiler-Free
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Never get spoiled again. Our AI shields you from unwanted plot reveals across 
                <span className="text-violet-400 font-semibold"> Reddit, Twitter, Facebook</span>, and more.
                Add your watchlist and browse with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button className="group bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 flex items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Chrome className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Install for Chrome</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
                
                <button className="group bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 flex items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Firefox className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Install for Firefox</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
              </div>

              {/* Stats with animations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                    <div className="text-violet-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                Powerful Protection,
                <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Zero Hassle
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Advanced AI technology meets beautiful design to keep your browsing experience completely spoiler-free
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`text-white mb-6 p-3 rounded-2xl bg-gradient-to-r ${feature.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                Three Steps to
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Spoiler Freedom
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connection lines */}
              <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-violet-500/50 to-emerald-500/50"></div>
              
              <div className="text-center group">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-violet-500/25">
                    1
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-violet-500/20 rounded-3xl blur-xl group-hover:bg-violet-500/40 transition-all duration-500"></div>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-violet-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Install Extension</h3>
                <p className="text-gray-300 text-lg leading-relaxed">One-click installation from Chrome Web Store or Firefox Add-ons. Takes literally 3 seconds.</p>
              </div>

              <div className="text-center group md:mt-12">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-cyan-500/25">
                    2
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-cyan-500/20 rounded-3xl blur-xl group-hover:bg-cyan-500/40 transition-all duration-500"></div>
                  <AlertTriangle className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Add Keywords</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Tell us what shows, movies, or sports you want to protect. Simple as that.</p>
              </div>

              <div className="text-center group md:mt-24">
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-emerald-500/25">
                    3
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-emerald-500/20 rounded-3xl blur-xl group-hover:bg-emerald-500/40 transition-all duration-500"></div>
                  <Shield className="absolute -top-2 -right-2 w-6 h-6 text-emerald-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Browse Safely</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Enjoy completely spoiler-free browsing with automatic content protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                Loved by Users
                <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Worldwide
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${testimonial.bgColor} flex items-center justify-center text-white font-bold mr-4`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-8 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Browse
              <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Without Fear?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join 50,000+ users who browse the web spoiler-free every single day
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Chrome className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Install for Chrome</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>

              <button className="group bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Firefox className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Install for Firefox</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src={iconShield} className="w-[24px] text-white" />
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
                  <li><a href="#" className="hover:text-white transition-colors text-lg">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-lg">How It Works</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors text-lg">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-lg">Bug Reports</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-lg">Feature Requests</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-lg">
                © 2025 Spoiler Shield. All rights reserved.
              </p>
              <div className="flex space-x-8 mt-6 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}