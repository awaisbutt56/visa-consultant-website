import React from 'react';

const LoaderContact = () => {
  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#03000a] overflow-hidden">
      
      {/* --- 1. FULL SCREEN DYNAMIC PARTICLES (Emerald & Violet Stars) --- */}
      <div className="absolute inset-0 z-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#10b981' : '#a855f7', // Emerald and Violet mix
              animationDuration: `${Math.random() * 12 + 8}s`,
              animationDelay: `${Math.random() * -20}s`,
              boxShadow: i % 2 === 0 ? '0 0 12px #10b981' : '0 0 12px #a855f7',
            }}
          >
            <div className="absolute inset-0 bg-white/30 blur-[2px] rounded-full"></div>
          </div>
        ))}
      </div>

      {/* --- 2. SCANNING BEAM EFFECT (Neon Emerald) --- */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent animate-scan-line shadow-[0_0_20px_#10b981]"></div>
      </div>

      {/* --- 3. CENTRAL CORE (The Mind-Blowing Part) --- */}
      <div className="relative z-10 flex flex-col items-center scale-90 md:scale-110">
        
        {/* Triple Ripple Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-36 h-36 border-2 border-emerald-500/30 rounded-full animate-ping-slow"></div>
          <div className="absolute inset-0 w-36 h-36 border border-violet-500/20 rounded-full animate-ping-slower"></div>
        </div>

        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Central Orbiting Rings */}
          <div className="absolute w-full h-full border-2 border-dashed border-violet-500/40 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[80%] h-[80%] border-2 border-emerald-400/30 rounded-full animate-spin-reverse"></div>
          
          {/* The Core Hub (Glassmorphism + Glow) */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#10b981] rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.5)] z-20 border border-white/30 backdrop-blur-md rotate-45">
             <div className="w-5 h-5 bg-white rounded-full animate-pulse shadow-[0_0_15px_#fff] -rotate-45"></div>
          </div>

          {/* Shooting Light Trails */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-20"
              style={{ transform: `rotate(${i * 30}deg)` }}
            ></div>
          ))}
        </div>

        {/* --- 4. TEXT CONTENT --- */}
        <div className="text-center mt-16 relative">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 italic uppercase">
            LINK_<span className="text-emerald-400">INITIALIZED</span>
          </h2>
          
          <div className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-white to-violet-500 bg-clip-text text-transparent font-mono text-sm font-bold tracking-[0.5em] animate-text-shimmer">
              Your Journey Begins Here
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(60px, -40px) scale(1.4); opacity: 1; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        @keyframes scan-line {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
        @keyframes ping-slow {
          0% { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping-slower {
          0% { transform: scale(0.7); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0; }
        }
        .animate-ping-slower {
          animation: ping-slower 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoaderContact;