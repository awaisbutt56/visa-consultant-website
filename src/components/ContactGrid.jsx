import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const ContactGrid = () => {
  const info = [
    { 
      title: 'Call Us', 
      detail: '+92 3033930638', 
      sub: 'Mon-Fri, 9am-10pm', 
      icon: <Phone size={22} />, 
      color: 'emerald'
    },
    { 
      title: 'Email Us', 
      detail: 'info@4gsolutions.sg', 
      sub: '24/7 Online Support', 
      icon: <Mail size={22} />,
      color: 'violet'
    },
    { 
      title: 'Visit Us', 
      detail: 'DHA Raya Phase 6, Lahore', 
      sub: '86 Fairways Commercial', 
      icon: <MapPin size={22} />,
      color: 'emerald'
    }
  ];

  return (
    <section className="px-6 -mt-16 md:-mt-24 relative z-30 mb-20">
      {/* Optional: Section Heading if you want to show it elsewhere, 
          but for now focusing on the grid responsiveness */}
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {info.map((item, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden bg-[#0a0c14]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-center text-center shadow-2xl"
            >
              {/* --- BACKGROUND GLOW ON HOVER --- */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color === 'emerald' ? 'from-emerald-500/20 to-cyan-500/20' : 'from-violet-600/20 to-fuchsia-500/20'} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* --- ICON DESIGN --- */}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 overflow-hidden
                ${item.color === 'emerald' 
                  ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                  : 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]'}
              `}>
                {item.icon}
                {/* Shine effect on icon box */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-white/20 skew-x-[-30deg] group-hover:left-[100%] transition-all duration-700"></div>
              </div>

              {/* --- CONTENT --- */}
              <div className="relative z-10 w-full">
                <span className={`text-[11px] font-black uppercase tracking-[0.3em] block mb-3 
                  ${item.color === 'emerald' ? 'text-emerald-500/70' : 'text-violet-500/70'}`}>
                  {item.title}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-50 group-hover:scale-105 transition-transform duration-300">
                  {item.detail}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium mb-6">
                  {item.sub}
                </p>

                {/* --- CONNECT BUTTON (Small) --- */}
                <div className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                  ${item.color === 'emerald' ? 'text-emerald-400' : 'text-violet-400'}`}>
                  Open Connection <ExternalLink size={12} />
                </div>
              </div>

              {/* --- DECORATIVE CORNER GRADIENT --- */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 blur-[40px] opacity-20 transition-opacity group-hover:opacity-40
                ${item.color === 'emerald' ? 'bg-emerald-500' : 'bg-violet-500'}`}>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESPONSIVE TYPOGRAPHY STYLES (AS PER YOUR REQUEST) --- */}
      <style jsx>{`
        /* Desktop Heading Override (5xl as requested) */
        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem; /* 5xl equivalent approx */
            line-height: 1;
          }
        }
        /* Mobile Heading Constraint */
        @media (max-width: 767px) {
          .section-title {
            font-size: 2.25rem; /* 4xl equivalent - not too large */
            line-height: 1.1;
          }
          /* Ensure no scroll lag on mobile */
          section {
            will-change: transform;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactGrid;