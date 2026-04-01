import React, { useState, useEffect } from 'react';

const LoaderResidency = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 38);

    const timeout = setTimeout(() => {
      onFinished();
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onFinished]);

  // Data Rain Lines ki tadad yahan se manage ho rahi hai
  const rainLines = [
    { left: '10%', delay: '0s', duration: '3s' },
    { left: '20%', delay: '1.5s', duration: '4s' },
    { left: '35%', delay: '0.5s', duration: '2.5s' },
    { left: '50%', delay: '2s', duration: '5s' },
    { left: '65%', delay: '1s', duration: '3.5s' },
    { left: '80%', delay: '0.2s', duration: '4.5s' },
    { left: '90%', delay: '1.8s', duration: '3s' },
    { left: '15%', delay: '2.5s', duration: '6s' },
    { left: '45%', delay: '0.8s', duration: '3.2s' },
    { left: '75%', delay: '1.2s', duration: '4.8s' },
  ];

  return (
    <div className="fixed inset-0 z-[250] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Mind-Blowing Background: Heavy Data Rain & Circuit Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Increased Data Rain Lines */}
        {rainLines.map((line, i) => (
          <div 
            key={i}
            className="absolute top-[-20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-amber-500/40 to-transparent animate-drop"
            style={{ 
              left: line.left, 
              animationDelay: line.delay, 
              animationDuration: line.duration 
            }}
          ></div>
        ))}

        {/* Pulsing Circuit Nodes (New Animation) */}
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-ping [animation-delay:1s]"></div>
        <div className="absolute top-[60%] right-[10%] w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-ping [animation-delay:2s]"></div>
      </div>

      {/* 2. Central Scanning Core */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        
        {/* Outer Tech Ring - Rotating */}
        <div className="absolute inset-0 border-t-2 border-b-2 border-dashed border-amber-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-l-2 border-r-2 border-amber-500/10 rounded-full animate-spin-reverse-slow"></div>
        
        {/* Progress Ring with Laser */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/5 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm">
           
           {/* Progress Fill */}
           <div 
             className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-600/30 via-amber-500/10 to-transparent transition-all duration-300"
             style={{ height: `${progress}%` }}
           ></div>

           {/* Glowing Laser Scan Line */}
           <div 
             className="absolute w-full h-[3px] bg-amber-400 shadow-[0_0_20px_#f59e0b] z-10"
             style={{ bottom: `${progress}%` }}
           ></div>

           {/* Percentage Display */}
           <div className="relative z-20 text-center">
             <div className="text-4xl md:text-5xl font-black italic text-white tracking-tighter leading-none">
               {progress}<span className="text-amber-500 text-xl">%</span>
             </div>
             <div className="mt-2 flex items-center justify-center gap-1">
                <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-[7px] font-mono text-amber-500/60 uppercase tracking-[0.4em]">Secure Auth</span>
             </div>
           </div>
        </div>

        {/* Satellite Pings */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute inset-0 border border-amber-500/5 rounded-full animate-ping-slow" style={{ animationDelay: `${i * 1.5}s` }}></div>
        ))}
      </div>

      {/* 3. Status Decryption */}
      <div className="mt-16 text-center space-y-4 px-6 relative z-10">
        <p className="text-amber-500 font-black font-mono text-[10px] tracking-[0.6em] uppercase italic">
          Accessing Residency Node_{progress}
        </p>
        
        <div className="h-4 overflow-hidden">
          <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em] animate-pulse">
            {progress < 25 && ">> Loading Encryption Modules..."}
            {progress >= 25 && progress < 50 && ">> Bypassing Global Firewall..."}
            {progress >= 50 && progress < 75 && ">> Authenticating Citizenship..."}
            {progress >= 75 && ">> Finalizing Neural Interface..."}
          </p>
        </div>

        {/* Sleek Progress Bar */}
        <div className="w-40 h-[1px] bg-white/10 mx-auto rounded-full">
           <div className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse 15s linear infinite; }
        .animate-ping-slow { animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes drop {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-drop { animation: drop linear infinite; }
      `}</style>
    </div>
  );
};

export default LoaderResidency;