import React, { useState, useEffect } from 'react';
import { Cpu, Lock, Globe, Terminal } from 'lucide-react';

const LoaderWorkpermit = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next === 20) setStatus("Accessing Global Database...");
        if (next === 45) setStatus("Syncing Work Nodes...");
        if (next === 70) setStatus("Encrypting Identity...");
        if (next === 90) setStatus("Finalizing System...");
        return next <= 100 ? next : 100;
      });
    }, 38); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center overflow-hidden font-mono px-6">
      
      {/* 1. Background Grid (Responsive size) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px]"></div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-blue-500/10 to-transparent animate-scan"></div>
      </div>

      {/* 2. Responsive Decorative Icons */}
      <div className="absolute top-6 left-6 text-blue-500/10 hidden sm:block">
        <Cpu className="w-8 h-8 md:w-12 md:h-12 animate-pulse" />
      </div>
      <div className="absolute bottom-6 right-6 text-blue-500/10 hidden sm:block">
        <Globe className="w-8 h-8 md:w-12 md:h-12 animate-spin-slow" />
      </div>

      {/* 3. Central Core */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm md:max-w-md">
        
        {/* Animated Hub (Smaller on Mobile) */}
        <div className="relative mb-10 md:mb-16 scale-75 md:scale-100">
          <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-dashed border-blue-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-[-6px] md:inset-[-8px] border-t-2 border-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-[-12px] md:inset-[-15px] border-b-2 border-indigo-600/40 rounded-full animate-reverse-spin"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                <Lock className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-500 ${progress > 95 ? 'text-green-500 scale-110' : 'text-blue-500'}`} />
                {progress > 95 && <div className="absolute inset-0 bg-green-500 blur-xl opacity-40"></div>}
             </div>
          </div>
        </div>

        {/* 4. Text & Progress Bar */}
        <div className="w-full space-y-5 md:space-y-6">
          <div className="space-y-1 text-center">
            <h2 className="text-white text-base md:text-xl font-black italic tracking-[0.3em] md:tracking-[0.5em] uppercase">
               Work Protocol
            </h2>
            <div className="h-4">
               <p className="text-[8px] md:text-[10px] text-blue-400/70 font-bold tracking-[0.1em] md:tracking-[0.2em] animate-pulse">
                 {status}
               </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative px-2">
            <div className="h-[3px] md:h-[4px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-400 to-cyan-300 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {/* Corner Accents (Mobile Optimized) */}
            <div className="absolute -top-1 left-1 w-1.5 h-1.5 border-t border-l border-blue-500/50"></div>
            <div className="absolute -bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-blue-500/50"></div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 mx-2">
            <div className="flex flex-col">
              <span className="text-[7px] md:text-[8px] text-slate-500 uppercase tracking-widest">Status</span>
              <span className="text-[9px] md:text-[10px] text-green-500 font-bold uppercase italic tracking-tighter">Ready_To_Sync</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[7px] md:text-[8px] text-slate-500 uppercase tracking-widest">Progress</span>
              <span className="text-[9px] md:text-[10px] text-blue-500 font-bold">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Scrolling Console (Auto-Hidden on very small screens if needed) */}
      <div className="absolute bottom-6 left-6 right-6 h-8 md:h-12 overflow-hidden opacity-20 pointer-events-none">
        <div className="text-[6px] md:text-[7px] text-blue-300/50 space-y-1 animate-scroll-text">
           <p>{">"} INITIALIZING SECURITY_AUDIT...</p>
           <p>{">"} CONNECTING SINGAPORE_NODE_4G...</p>
           <p>{">"} BYPASSING LATENCY... OK</p>
           <p>{">"} FETCHING PERMIT_REQS... 200</p>
           <p>{">"} DEPLOYING ENCRYPTION L7...</p>
           <p>{">"} SYNCING SUCCESSFUL</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan { from { transform: translateY(-100%); } to { transform: translateY(100vh); } }
        @keyframes scroll-text { from { transform: translateY(0); } to { transform: translateY(-100%); } }
        @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-scan { animation: scan 3s infinite linear; }
        .animate-spin-slow { animation: spin 10s infinite linear; }
        .animate-reverse-spin { animation: reverse-spin 5s infinite linear; }
        .animate-scroll-text { animation: scroll-text 8s infinite linear; }
      `}</style>
    </div>
  );
};

export default LoaderWorkpermit;