import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe2, ShieldCheck, Zap } from 'lucide-react';

// Counter Logic Component
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const ResidencyStats = () => {
  const stats = [
    { label: "Successful Migrations", value: 8500, icon: <Users className="w-5 h-5" />, suffix: "+" },
    { label: "Global Node Access", value: 54, icon: <Globe2 className="w-5 h-5" />, suffix: "" },
    { label: "Security Clearance", value: 100, icon: <ShieldCheck className="w-5 h-5" />, suffix: "%" },
    { label: "Avg. Protocol Speed", value: 24, icon: <Zap className="w-5 h-5" />, suffix: " Days" },
  ];

  return (
    <section className="relative py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-amber-500"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-amber-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {item.map((item, index) => (
            <div key={index} className="group relative">
              {/* Decorative Border Line */}
              <div className="absolute -top-4 left-0 w-8 h-[1px] bg-amber-500/40"></div>
              
              <div className="space-y-4">
                {/* Icon & Label */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-amber-500/50 transition-colors duration-500 text-amber-500/60 group-hover:text-amber-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">
                    {item.label}
                  </span>
                </div>

                {/* Big Bold Number */}
                <div className="text-4xl md:text-6xl font-black text-white italic tracking-tighter transition-all duration-500 group-hover:translate-x-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-500">
                  <Counter end={item.value} />
                  <span className="text-amber-500 text-2xl md:text-3xl ml-1">{item.suffix}</span>
                </div>

                {/* Status Bar */}
                <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
                   <div className="absolute inset-0 bg-amber-500/40 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Global Latency Display (Just for Swag) */}
        <div className="mt-20 flex flex-wrap items-center justify-between border border-white/5 bg-white/[0.01] p-4 rounded-xl backdrop-blur-sm">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[9px] font-mono text-slate-200 uppercase tracking-widest">Server Status: Optimal</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
              <div className="hidden sm:block">
                 <span className="text-[9px] font-mono text-slate-200 uppercase tracking-widest italic">Latency: 24ms // Protocol: 4G_SOLUTIONS_SINGAPORE</span>
              </div>
           </div>
           <div className="text-[10px] font-black text-amber-500/40 italic uppercase tracking-tighter">
              Real-Time Residency Audit v2.0
           </div>
        </div>
      </div>
    </section>
  );
};

// Fix for mapping (Bhai, mapping thora check kar lena upar stats array hai)
const item = [
  { label: "Successful Migrations", value: 8500, icon: <Users className="w-5 h-5" />, suffix: "+" },
  { label: "Global Node Access", value: 54, icon: <Globe2 className="w-5 h-5" />, suffix: "" },
  { label: "Security Clearance", value: 100, icon: <ShieldCheck className="w-5 h-5" />, suffix: "%" },
  { label: "Avg. Protocol Speed", value: 24, icon: <Zap className="w-5 h-5" />, suffix: " Days" },
];

export default ResidencyStats;