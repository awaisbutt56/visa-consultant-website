import React, { useState, useEffect } from 'react';
import { ShieldCheck, Globe2, ChevronRight, Activity } from 'lucide-react';

const pathways = [
  { id: "PT", name: "Portugal", scheme: "GOLDEN VISA D2", benefit: "EU Access" },
  { id: "AE", name: "UAE", scheme: "INVESTOR VISA 10YR", benefit: "Tax Free" },
  { id: "GR", name: "Greece", scheme: "GOLDEN VISA", benefit: "€250K+" },
  { id: "CA", name: "Canada", scheme: "EXPRESS ENTRY", benefit: "PR Fast" },
  { id: "US", name: "USA", scheme: "EB-5 PROGRAM", benefit: "GreenCard" }
];

const ResidencyHero = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % pathways.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center px-4 md:px-10 py-20 lg:py-0 overflow-hidden bg-[#050505]">
      
      {/* 1. Background Grid & Scanning */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-scan-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Side: Heavy Typography */}
        <div className="space-y-6 md:space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-md bg-amber-500/5 border border-amber-500/20 mx-auto lg:mx-0">
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-amber-500" />
            <span className="text-amber-500 font-black text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase italic">System Authenticated</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              Your Path To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Global Freedom
              </span>
            </h1>
            <p className="text-slate-400 max-w-md mx-auto lg:mx-0 text-xs md:text-base font-medium leading-relaxed">
              We architect life-changing residency and citizenship solutions — Golden Visas, EB-5, and European Residency — with absolute legal precision.
            </p>
          </div>

          {/* Bottom Badge */}
          <div className="pt-4 md:pt-8 flex items-center justify-center lg:justify-start gap-4 opacity-40">
             <div className="hidden sm:block h-[1px] w-12 bg-amber-500"></div>
             <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] md:tracking-[0.5em]">Trusted By Families Worldwide</span>
          </div>
        </div>

        {/* Right Side: Live Pathway Terminal */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
           {/* Terminal Frame */}
           <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-10 shadow-2xl overflow-hidden">
              
              <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-white/5 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Top Pathways // 2026</span>
                 </div>
                 <Globe2 className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
              </div>

              {/* Pathway List */}
              <div className="space-y-2 md:space-y-3">
                {pathways.map((item, index) => (
                  <div 
                    key={index}
                    className={`group flex items-center justify-between p-3 md:p-4 rounded-xl border transition-all duration-500 ${activeLine === index ? 'bg-amber-500/10 border-amber-500/30' : 'bg-transparent border-white/5 opacity-30 md:opacity-40'}`}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                       <span className="font-mono text-[10px] md:text-xs text-amber-500/50 font-bold">{item.id}</span>
                       <div>
                          <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-tight">{item.name}</h4>
                          <p className="text-[8px] md:text-[9px] text-slate-200 font-mono tracking-widest">{item.scheme}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                       <span className="hidden md:block text-[9px] font-black text-white/40 border border-white/10 px-3 py-1 rounded-full uppercase italic">
                         {item.benefit}
                       </span>
                       <ChevronRight className={`w-3 h-3 md:w-4 md:h-4 ${activeLine === index ? 'text-amber-500' : 'text-slate-800'}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3 justify-between items-center text-center sm:text-left">
                 <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-amber-500" />
                    <span className="text-[7px] md:text-[8px] font-mono text-slate-600 uppercase">24/7 Global Support Synced</span>
                 </div>
                 <span className="text-[7px] md:text-[8px] font-mono text-amber-500 animate-pulse tracking-tighter sm:tracking-normal">AUTHENTICATION_COMPLETE_100%</span>
              </div>
           </div>

           {/* Floating Background Decoration */}
           <div className="absolute -top-6 -right-6 text-6xl md:text-[12rem] font-black text-white/[0.02] italic select-none pointer-events-none z-[-1]">
              PR
           </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 8s infinite linear; }
      `}</style>
    </section>
  );
};

export default ResidencyHero;