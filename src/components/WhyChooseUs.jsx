import React from 'react';
import { Globe, Rocket, Headset, Gavel } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Global Expertise',
      desc: 'Certified consultants navigating international laws for your success.',
      icon: <Globe size={28} />,
      id: '01'
    },
    {
      title: 'Fast Processing',
      desc: 'Swift and efficient filing systems to save your valuable time.',
      icon: <Rocket size={28} />,
      id: '02'
    },
    {
      title: '24/7 Support',
      desc: 'Round-the-clock assistance for all your visa and residency queries.',
      icon: <Headset size={28} />,
      id: '03'
    },
    {
      title: 'Legal Precision',
      desc: '100% compliant documentation to ensure high approval rates.',
      icon: <Gavel size={28} />,
      id: '04'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#020617] overflow-hidden transform-gpu">
      
      {/* --- Specialized Emerald Backdrop --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4 antialiased">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-emerald-500/30 shadow-[0_0_10px_#10b981]"></div>
            <span className="text-emerald-400 font-black tracking-[0.5em] uppercase text-[10px] italic">System_Advantages</span>
            <div className="h-[1px] w-12 bg-emerald-500/30 shadow-[0_0_10px_#10b981]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-500">VISACONSULT?</span>
          </h2>
          <p className="text-emerald-200/20 font-mono text-[10px] uppercase tracking-[0.2em] max-w-md mx-auto">
            Deployment of elite excellence in every functional module
          </p>
        </div>

        {/* --- High-Tech Holographic Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white/[0.02] p-10 border border-white/5 transition-all duration-500 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] rounded-3xl overflow-hidden transform-gpu hover:-translate-y-2 shadow-2xl"
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[10px] font-mono text-white/5 group-hover:text-amber-500 transition-colors duration-500 tracking-widest">
                  SYS_MOD_{item.id}
                </span>
              </div>

              {/* Icon Container with Neo-Glow */}
              <div className="relative mb-10 inline-block">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0a0f1e] border border-white/10 rounded-2xl flex items-center justify-center text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:text-black group-hover:bg-emerald-500 shadow-[0_0_0px_#10b981]">
                  {item.icon}
                </div>
                {/* Underline pulse */}
                <div className="absolute -bottom-4 left-0 w-8 h-[3px] bg-amber-500/20 rounded-full group-hover:w-full group-hover:bg-amber-500 transition-all duration-700"></div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tight italic transition-all duration-500 group-hover:text-emerald-400">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>

              {/* Hover Scan Beam Animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-[-100%] left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent animate-scan-ultra"></div>
              </div>

              {/* Border Glow Corner */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* --- Bottom Status Bar --- */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-12">
          <div className="flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-[#020617] bg-emerald-600/20 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-emerald-400 shadow-xl group hover:z-30 hover:bg-emerald-500 hover:text-black transition-all cursor-default">
                  ID_{i}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-white font-black text-xs uppercase tracking-[0.2em]">Trusted Global Network</p>
              <p className="text-emerald-500/30 text-[9px] font-mono uppercase tracking-[0.3em]">Verified_Endpoints: 5,420+</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-center bg-white/[0.03] px-6 py-3 rounded-full border border-white/5">
            <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest font-bold">Node_Status: Fully_Optimized</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-ultra {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        .animate-scan-ultra {
          animation: scan-ultra 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;