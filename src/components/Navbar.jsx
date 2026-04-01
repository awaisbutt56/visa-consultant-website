import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 py-3' 
      : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo Section (Futuristic) */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* Outer Rotating Neon Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 animate-spin-slow blur-[2px]"></div>
              
              {/* Main Logo Container */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white border border-white/20 z-10">
                <img 
                  src="src/assets/images/navbar-logo.jpeg" 
                  alt="Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <Link to="/" className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-[0.2em] text-white leading-none">
                VISA<span className="text-blue-500 group-hover:text-cyan-400 transition-colors">CONSULT</span>
              </span>
              <span className="text-[7px] md:text-[8px] text-slate-500 uppercase tracking-[0.4em] mt-1 font-bold">
                Global_Intelligence_Node
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Neon Hover) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`relative text-xs uppercase font-black tracking-widest transition-colors duration-300 group ${
                  location.pathname === link.path ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {/* Neon Underline Animation */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full shadow-[0_0_10px_#3b82f6]' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* 3. Action Button (Cyber Style) */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/applicationform" 
              className="relative group px-6 py-2 overflow-hidden rounded-full border border-blue-500/50"
            >
              <div className="absolute inset-0 bg-blue-600 transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
              <span className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-white">
                <Zap className="w-3 h-3 fill-current" />
                Book Now
              </span>
            </Link>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu (Overlay Style) */}
      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[90] transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-white uppercase tracking-[0.2em] flex items-center gap-4 hover:text-blue-500 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-blue-600 text-xs font-mono">0{index + 1}</span>
              {link.name}
              <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 hover:opacity-100" />
            </Link>
          ))}
          
          <Link 
            to="/applicationform"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Start Application
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </nav>
  );
};

export default Navbar;