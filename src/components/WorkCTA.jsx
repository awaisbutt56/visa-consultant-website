import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Globe2, Zap, Users } from 'lucide-react';

const STATS = [
  { label: "Visa Success", value: "98%", icon: <ShieldCheck size={18} /> },
  { label: "Countries", value: "120+", icon: <Globe2 size={18} /> },
  { label: "Active Cases", value: "2.5k", icon: <Users size={18} /> },
];

const WorkCTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#020617] overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT SIDE: THE TEXT IMPACT --- */}
          <div className="text-left">
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6"
  >
    <Zap size={14} fill="currentColor" /> Premium Global Access
  </motion.div>

  {/* Main Heading */}
  <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-[1.1] mb-8">
    Start Your <span className="text-blue-500">Global Career</span> Journey with Professional <span className="text-slate-500">Assistance.</span>
  </h2>

  <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-lg mb-10 border-l-2 border-blue-600 pl-6 uppercase tracking-wider">
    Experience the next generation of visa consultancy. Secure, fast, and fully transparent protocols for 2026.
  </p>

  {/* ✅ Navigation Button */}
  <motion.div whileHover={{ x: 10 }}>
    <Link to="/applicationform" className="flex items-center gap-4 text-white group">
      
      <span className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)]">
        <ArrowUpRight size={20} />
      </span>

      <span className="font-black uppercase italic tracking-widest text-sm border-b border-white/20 pb-1 group-hover:border-blue-500 transition-all">
        Get Started Now
      </span>

    </Link>
  </motion.div>
</div>

          {/* --- RIGHT SIDE: THE STATS CARD (Mind-Blowing Info) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl"
          >
            {/* Subtle Grid Background inside card */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 grid grid-cols-1 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h4>
                      <div className="h-[2px] w-0 group-hover:w-full bg-blue-600 transition-all duration-500" />
                    </div>
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-white italic tracking-tighter">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Info Badge */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Systems Online &bull; 24/7 NOC Support Active
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WorkCTA;