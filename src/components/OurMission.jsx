import React, { useState } from 'react';
import { ShieldCheck, Scale, Zap, Headset, ArrowRight } from 'lucide-react';

const OurMission = () => {
  const missionData = [
    {
      id: 0,
      title: 'Transparent Process',
      label: 'Transparency',
      icon: <Scale size={24} />,
      desc: 'No hidden fees or surprises.',
      blog: 'Our commitment to transparency means you are informed at every milestone. We provide a full breakdown of costs and legal requirements upfront, ensuring a journey built on mutual trust and clarity.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 1,
      title: 'Expert Legal Advice',
      label: 'Expertise',
      icon: <ShieldCheck size={24} />,
      desc: 'Precision in every document.',
      blog: 'Navigating international law requires precision. Our certified consultants stay updated with the latest immigration policies to ensure your application meets 100% of the legal criteria for a smooth approval.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Fast-Track Processing',
      label: 'Speed',
      icon: <Zap size={24} />,
      desc: 'Swift and efficient results.',
      blog: 'Time is of the essence in global mobility. We utilize digital-first filing systems and direct diplomatic channels to reduce waiting times and accelerate your visa or residency permits.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: '24/7 Global Support',
      label: 'Availability',
      icon: <Headset size={24} />,
      desc: 'Always there when you need us.',
      blog: 'Borders never sleep, and neither does our support. Whether you are in a different time zone or facing an urgent travel query, our NOC team is available around the clock to assist you.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-[#020617] overflow-hidden selection:bg-emerald-500/30">
      
      {/* --- Aesthetic Tech Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-600/10 rounded-full blur-[100px] md:blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-amber-900/10 rounded-full blur-[80px] md:blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-left mb-12 md:mb-20 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 md:w-12 bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
            <span className="text-emerald-400 font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] italic">Protocol // Core_Mission</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            The Intelligence Behind <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">VISACONSULT Operations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* LEFT SIDE: Interactive Selector - Responsive Scroll on Mobile */}
          <div className="lg:col-span-5 flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
            {missionData.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`group cursor-pointer relative p-[1px] min-w-[280px] md:min-w-full transition-all duration-300 rounded-2xl overflow-hidden shrink-0 ${
                  activeIndex === i ? 'bg-gradient-to-r from-emerald-500 via-amber-500 to-transparent' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`relative z-10 p-4 md:p-5 rounded-[15px] flex items-center gap-4 md:gap-5 transition-all duration-300 ${
                  activeIndex === i ? 'bg-[#020617]' : 'bg-transparent'
                }`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                    activeIndex === i ? 'bg-emerald-600 text-white rotate-[360deg] shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-emerald-400'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className={`font-black uppercase tracking-widest text-[11px] md:text-sm truncate transition-colors duration-300 ${
                      activeIndex === i ? 'text-white' : 'text-emerald-200/30'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-[10px] font-bold uppercase tracking-tight mt-1 truncate transition-all duration-300 ${
                      activeIndex === i ? 'text-amber-400 opacity-100' : 'text-white/10 opacity-0'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                  {activeIndex === i && (
                    <div className="text-emerald-500 animate-bounce-x hidden md:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Holographic Content Display */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 to-amber-600/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative bg-white/[0.02] backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 border border-white/10 shadow-2xl overflow-hidden transform-gpu">
              
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-white/5 pb-4 md:pb-6">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                </div>
                <span className="text-[9px] md:text-[10px] font-mono text-emerald-400 tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60 italic truncate ml-4">
                  Data_Archive // {missionData[activeIndex].label}
                </span>
              </div>

              <div key={activeIndex} className="animate-in fade-in slide-in-from-right-4 duration-500">
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-80 rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden mb-6 md:mb-10 group/img border border-white/5">
                  <div className="absolute inset-0 bg-emerald-950/20 group-hover/img:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={missionData[activeIndex].image} 
                    alt="Mission" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-400 shadow-[0_0_15px_#10b981] animate-scan-v-slow z-20 opacity-40"></div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase italic tracking-tighter">
                    {missionData[activeIndex].title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium border-l-4 border-emerald-600 pl-4 md:pl-6 italic bg-emerald-500/5 py-3 md:py-4 rounded-r-xl">
                    {missionData[activeIndex].blog}
                  </p>
                  
                  {/* FOOTER SECTION: Fixed overlap for Mobile */}
                  <div className="pt-8 md:pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 mt-6">
                    
                    <button 
                      className="group/btn relative w-full sm:w-auto px-8 py-4 overflow-hidden rounded-xl transition-all duration-500 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 opacity-20 group-hover/btn:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute inset-[1px] bg-[#020617] rounded-[11px] z-10 transition-colors duration-500 group-hover/btn:bg-transparent"></div>
                      <div className="relative z-20 flex items-center justify-center gap-4 text-emerald-400 group-hover/btn:text-black font-black text-[10px] md:text-xs uppercase tracking-[0.3em] transition-colors duration-500">
                        <span>Verify Authorization</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] z-30 pointer-events-none"></div>
                    </button>

                    {/* Image-Part Responsive Fix */}
                    <div className="flex items-center gap-3 sm:self-center self-end">
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] md:text-[10px] font-mono text-emerald-500/40 uppercase tracking-widest">Security: High</span>
                        <span className="text-[9px] md:text-[10px] font-mono text-white/20 italic">ID_REF: 00{activeIndex + 1}</span>
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center bg-emerald-500/5">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corners - Hidden on small mobile to save space */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-lg hidden md:block"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-500/20 rounded-br-lg hidden md:block"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        @keyframes scan-v-slow {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-v-slow { animation: scan-v-slow 4s ease-in-out infinite; }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        .animate-bounce-x { animation: bounce-x 0.8s infinite; }
      `}</style>
    </section>
  );
};

export default OurMission;