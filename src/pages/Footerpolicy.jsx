import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Activity, Globe, Lock, Cpu, Server } from 'lucide-react';
import PrivacyComponent from '../components/PrivacyComponent';
import TermsComponent from '../components/TermsComponent';
import CookiesComponent from '../components/CookiesComponent';

const Footerpolicy = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  const systemStats = [
    { label: "Encryption", value: "AES-256", icon: <Lock size={12} /> },
    { label: "Uptime", value: "99.9%", icon: <Activity size={12} /> },
    { label: "Nodes", value: "Global", icon: <Globe size={12} /> },
    { label: "Security", value: "Level 5", icon: <ShieldCheck size={12} /> },
  ];

  return (
    <div className="relative w-full bg-[#020617] text-white selection:bg-rose-500/30 overflow-x-hidden transform-gpu">
      
      {/* --- HERO SECTION --- */}
      {/* Height maintained as requested: min-h-60vh on mobile, 70vh on desktop */}
      <div className="relative min-h-[65vh] md:h-[70vh] w-full flex items-center overflow-hidden border-b border-white/5 bg-[#01040a]">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:30px_30px]"></div>
          
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-rose-600/10 rounded-full blur-2xl animate-float-particle"
                style={{
                  width: `${Math.random() * 60 + 30}px`,
                  height: `${Math.random() * 60 + 30}px`,
                  left: `${Math.random() * 60}%`,
                  top: `${Math.random() * 60}%`,
                  animationDuration: `${Math.random() * 20 + 10}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Huge Background Text - Scaled for mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            <h2 className="text-[22vw] md:text-[18vw] font-black text-white/[0.01] italic leading-none tracking-tighter uppercase">
              Security
            </h2>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]"></div>
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* Left Column: Main Text */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 md:w-16 h-[2px] bg-rose-600"></div>
                <span className="text-rose-500 font-black tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-[12px] italic animate-pulse whitespace-nowrap">
                  System_Integrity_v2.0
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic leading-[0.95] md:leading-[0.9] tracking-tighter">
                Institutional <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600">
                  Trust Architecture.
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <p className="max-w-md text-slate-500 text-[11px] md:text-[14px] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] leading-relaxed border-l-2 border-rose-600/30 pl-4 md:pl-6">
                  Governing the digital frontiers of global mobility. Our legal protocols are hard-coded for maximum privacy and zero-point failure.
                </p>
                
                {/* Micro Terminal Data - Visible on all screens, adjusted for mobile */}
                <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-xl md:rounded-2xl backdrop-blur-sm w-full sm:w-auto justify-around sm:justify-start">
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-rose-500 shrink-0" />
                    <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Nodes: 04</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server size={14} className="text-rose-500 shrink-0" />
                    <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Ping: 0.02ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Stats - Now visible on tablets/large phones too */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
              {systemStats.map((stat, i) => (
                <div key={i} className="p-4 md:p-6 bg-white/[0.01] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] hover:bg-rose-500/5 hover:border-rose-500/20 transition-all duration-500 group">
                  <div className="text-rose-500 mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-[8px] md:text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1 italic">
                    {stat.label}
                  </div>
                  <div className="text-lg md:text-2xl font-black text-white tracking-tighter italic">
                    {stat.value}
                  </div>
                </div>
              ))}
              {/* Extra Security Badge */}
              <div className="col-span-2 p-3 md:p-4 bg-gradient-to-r from-rose-600/10 to-transparent border border-rose-500/20 rounded-xl md:rounded-2xl flex items-center justify-between">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-rose-500">Cloud_Secure_Auth</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-rose-600 rounded-full animate-pulse"></div>)}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Scan Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-500/20 animate-scanline"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-20">
        <div className="flex flex-col gap-16 md:gap-32 lg:gap-40">
          <div id="privacy"><PrivacyComponent /></div>
          <div id="terms"><TermsComponent /></div>
          <div id="cookies"><CookiesComponent /></div>
        </div>

        {/* Footer Return Path */}
        <div className="mt-24 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.3em]">Protocol status: Operational</p>
            <p className="text-slate-800 text-[8px] uppercase mt-1 italic tracking-widest">VISACONSULT — Legal Department v1.0</p>
          </div>
          <button 
            onClick={() => window.history.back()} 
            className="group w-full md:w-auto px-10 py-4 bg-white/[0.02] border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-rose-500 hover:border-rose-500/30 transition-all duration-500"
          >
            ← Return_To_Secure_Home
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.1); }
        }
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 0.5; }
          95% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-float-particle { animation: float-particle infinite ease-in-out; }
        .animate-scanline { animation: scanline 10s linear infinite; }
      `}</style>
    </div>
  );
};

export default Footerpolicy;