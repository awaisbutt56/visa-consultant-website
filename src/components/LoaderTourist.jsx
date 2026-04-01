import React from 'react';
import { Globe, MapPin, Compass } from 'lucide-react';

const LoaderTourist = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Orbs - Size Chota aur Opacity Kam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[15%] w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] bg-orange-600/10 rounded-full blur-[70px] animate-pulse"></div>
      </div>

      {/* 2. Wavy Lehrain (Morphing Rings) - Chotay aur Mazeedar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute border border-amber-500/20 animate-wavy-ring"
            style={{ 
              width: `${(i + 1) * 120}px`, // Size chota kar dia
              height: `${(i + 1) * 120}px`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.5 - (i * 0.15)
            }}
          ></div>
        ))}
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        
        {/* 3. Central Compass Glass Box - More Compact */}
        <div className="relative flex items-center justify-center group mb-12">
          
          {/* External Spinning Tech Ring */}
          <div className="absolute w-36 h-36 md:w-44 md:h-44 border-2 border-dashed border-amber-500/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
          
          {/* Main Icon Box */}
          <div className="relative z-10 bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-amber-500/20 shadow-[0_20px_50px_rgba(245,158,11,0.1)]">
            
            <MapPin className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 text-amber-500 animate-bounce" />
            
            <div className="relative flex items-center justify-center">
               <Compass className="w-12 h-12 md:w-16 md:h-16 text-amber-400 animate-[spin_8s_linear_infinite]" />
               <Globe className="absolute w-6 h-6 text-white/30" />
            </div>
          </div>
        </div>

        {/* 4. Swag Text Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
            <span className="text-amber-500/80 font-mono text-[8px] uppercase tracking-[0.3em]">
              Mapping New Trails
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
            Tourist <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-500">
              Navigator
            </span>
          </h2>

          {/* Compact Progress Line */}
          <div className="w-32 md:w-40 h-[1.5px] bg-white/5 mx-auto rounded-full overflow-hidden mt-6">
             <div className="h-full bg-amber-500 w-full animate-shimmer-fast"></div>
          </div>
          
          <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.5em] italic">
            Connecting to World...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wavy-ring {
          0% { 
            transform: scale(0.8) rotate(0deg); 
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            opacity: 0;
          }
          50% { 
            opacity: 0.4;
            border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; // Yeh hai "Wavy" magic
          }
          100% { 
            transform: scale(1.3) rotate(180deg); 
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            opacity: 0;
          }
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-wavy-ring { animation: wavy-ring 3s infinite ease-in-out; }
        .animate-shimmer-fast { animation: shimmer-fast 1.5s infinite linear; }
      `}</style>
    </div>
  );
};

export default LoaderTourist;