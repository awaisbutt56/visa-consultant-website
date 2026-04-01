import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';

const ContactHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the 3 Dynamic Slides
  const slides = [
    {
      upper: "Connecting Your",
      lower: "Global Dreams",
      subtext: "Navigating complex borders with algorithmic precision and elite support.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      icon: <Globe size={16} className="text-emerald-400" />
    },
    {
      upper: "Unmatched Technical",
      lower: "Visa Precision",
      subtext: "Our intelligence system ensures every detail of your application is flawless.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      icon: <Cpu size={16} className="text-emerald-400" />
    },
    {
      upper: "Securing Your",
      lower: "International Future",
      subtext: "Trusted by thousands of professionals to bridge the gap to global opportunities.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      icon: <Shield size={16} className="text-emerald-400" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Har 4 second baad change hoga
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#02040a] px-6 py-20">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-30 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1s ease-in-out, transform 4s linear'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-transparent to-[#02040a]"></div>
      </div>

      {/* --- NEON ORBS --- */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-violet-600/10 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* --- DYNAMIC BADGE --- */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-8 backdrop-blur-md">
          {slides[currentSlide].icon}
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-400">
            {currentSlide === 0 ? "Global Experts" : currentSlide === 1 ? "Technical Hub" : "Secure Portal"}
          </span>
        </div>

        {/* --- ANIMATED HEADINGS --- */}
        <div className="overflow-hidden mb-2">
          <h2 key={`upper-${currentSlide}`} className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase animate-slide-left">
            {slides[currentSlide].upper}
          </h2>
        </div>

        <div className="overflow-hidden mb-8">
          <h1 key={`lower-${currentSlide}`} className="text-4xl md:text-5xl font-black leading-none tracking-tighter animate-slide-right">
            <span className="bg-gradient-to-r from-emerald-400 via-white to-violet-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
              {slides[currentSlide].lower}
            </span>
          </h1>
        </div>

        {/* --- SUBTEXT --- */}
        <p key={`sub-${currentSlide}`} className="max-w-xl mx-auto text-slate-400 text-sm md:text-lg leading-relaxed mb-12 font-medium animate-fade-in">
          {slides[currentSlide].subtext}
        </p>

        {/* --- BUTTONS --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/applicationform"
            className="group relative flex items-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <Zap size={18} fill="currentColor" />
            Apply Now
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>

      {/* --- CUSTOM CSS ANIMATIONS --- */}
      <style jsx>{`
        @keyframes slide-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-right {
          animation: slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          animation: gradient-text 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;