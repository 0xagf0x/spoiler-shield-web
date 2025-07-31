import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Code,
  Lightbulb,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Heart,
  Globe,
  Award,
  Coffee,
  Zap,
} from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import iconShield from "./icons/icon-shield.png";

export default function TeamPage() {
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

  const teamMembers = [
    {
      name: "You",
      role: "Founder",
      avatar: "YF",
      bgColor: "from-violet-500 to-purple-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mike M.",
      role: "Full Stack Developer",
      avatar: "MM",
      bgColor: "from-emerald-500 to-teal-500",
      skills: ["React", "Node.js", "AI/ML", "Browser Extensions"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  const companyStats = [
    {
      number: "50K+",
      label: "Happy Users",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "1M+",
      label: "Spoilers Blocked",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Platforms Protected",
      icon: <Globe className="w-6 h-6" />,
    },
    { number: "2025", label: "Founded", icon: <Award className="w-6 h-6" /> },
  ];

  const companyValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your data stays on your device. Always.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Obsessed",
      description: "Every decision starts with our users in mind.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Quality",
      description: "Obsessing over every detail, every interaction.",
      color: "from-emerald-400 to-teal-500",
    },
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
        <Nav />

        {/* About Us Section */}
        <section className="py-32 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                About
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Spoiler Shield
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                    Founded in 2025 with a simple but powerful mission:{" "}
                    <span className="text-violet-400 font-semibold">
                      to protect the joy of discovery in our digital age
                    </span>
                    . We believe everyone deserves to experience their favorite
                    stories, shows, and sporting events without fear of
                    accidental spoilers.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                    Using cutting-edge AI and machine learning technology,
                    Spoiler Shield has become the trusted companion for over{" "}
                    <span className="text-emerald-400 font-semibold">
                      50,000+ users worldwide
                    </span>
                    , protecting them across social media platforms, news sites,
                    and forums.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    Our commitment to{" "}
                    <span className="text-cyan-400 font-semibold">
                      privacy-first technology
                    </span>{" "}
                    means all processing happens locally on your device - your
                    browsing habits stay yours, while you enjoy spoiler-free
                    browsing across the entire web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                Our
                <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Two passionate individuals dedicated to making the web a
                spoiler-free place for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 hover:border-white/30 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${member.bgColor} flex items-center justify-center text-2xl font-black text-white mr-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                          {member.name}
                        </h3>
                        <p
                          className={`text-lg font-semibold bg-gradient-to-r ${member.bgColor} bg-clip-text text-transparent`}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a
                        href={member.social.twitter}
                        className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group/social"
                      >
                        <Twitter className="w-5 h-5 text-gray-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group/social"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                      </a>
                      <a
                        href={member.social.github}
                        className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group/social"
                      >
                        <Github className="w-5 h-5 text-gray-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                      </a>
                    </div>
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
              Join Our
              <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to browse the web without fear of spoilers? Join 50,000+
              users who trust Spoiler Shield every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <img
                  src={iconShield}
                  className="w-[24px] text-white mr-[12px]"
                />
                <span className="relative z-10">Get Spoiler Shield</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>

              <button className="group bg-white/10 border border-white/20 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
