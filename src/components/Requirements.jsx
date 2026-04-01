import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ClipboardCheck, CreditCard, Briefcase, CheckCircle2, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const REQ_DATA = [
  {
    id: 'docs',
    title: "Core Documents",
    icon: <FileText size={20} />,
    items: ["Valid Passport (6 months)", "Recent Biometric Photos", "National Identity Card", "Previous Travel History"]
  },
  {
    id: 'finance',
    title: "Financial Proof",
    icon: <CreditCard size={20} />,
    items: ["6 Months Bank Statement", "Tax Return Certificates", "Salary Slips / Income Proof", "Sponsorship Letter (if any)"]
  },
  {
    id: 'work',
    title: "Professional",
    icon: <Briefcase size={20} />,
    items: ["Employer Invitation Letter", "Job Contract Details", "Educational Degrees (Attested)", "Professional Certifications"]
  },
  {
    id: 'health',
    title: "Legal & Health",
    icon: <ClipboardCheck size={20} />,
    items: ["Police Clearance Certificate", "Health Insurance Cover", "Medical Examination Report", "Vaccination Records"]
  }
];

const Requirements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTab = REQ_DATA[currentIndex];

  const nextTab = () => setCurrentIndex((prev) => (prev === REQ_DATA.length - 1 ? 0 : prev + 1));
  const prevTab = () => setCurrentIndex((prev) => (prev === 0 ? REQ_DATA.length - 1 : prev - 1));

  return (
    <section className="relative py-12 md:py-16 bg-[#020617] overflow-hidden border-t border-white/5">
      
      {/* 1. Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -80, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8 + i, repeat: Infinity }}
            className="absolute rounded-full bg-blue-500/10 blur-2xl"
            style={{
              width: '100px', height: '100px',
              left: `${15 * i}%`, top: `${20 * i}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div className="flex items-center justify-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            <Zap size={12} fill="currentColor" /> System Scan v2.0
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
            Mandatory <span className="text-blue-500">Requirements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* --- MOBILE NAVIGATION (Single Item with Arrows) --- */}
          <div className="lg:hidden flex items-center justify-between gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
            <button onClick={prevTab} className="p-3 text-white bg-white/5 rounded-xl active:bg-blue-600 transition-colors">
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-blue-400">{activeTab.icon}</div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{activeTab.title}</span>
            </div>

            <button onClick={nextTab} className="p-3 text-white bg-white/5 rounded-xl active:bg-blue-600 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* --- DESKTOP NAVIGATION (Vertical List) --- */}
          <div className="hidden lg:col-span-4 lg:flex flex-col gap-5">
            {REQ_DATA.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl border transition-all duration-500 w-full group
                  ${currentIndex === idx 
                    ? 'bg-blue-600/10 border-blue-500/40 text-white shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                    : 'bg-white/[0.02] border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300'
                  }`}
              >
                <div className={`${currentIndex === idx ? 'text-blue-400 scale-110' : 'text-slate-600'} transition-all`}>
                  {tab.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Display with Dual-Axis Scanner */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#0a0f1d]/80 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 min-h-[310px] relative overflow-hidden backdrop-blur-xl"
              >
                {/* DUAL AXIS SCANNER */}
                <motion.div 
                  animate={{ top: ["-5%", "105%", "-5%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-blue-500/40 z-10 pointer-events-none shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
                <motion.div 
                  animate={{ left: ["-5%", "105%", "-5%"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-[1px] bg-blue-400/20 z-10 pointer-events-none"
                />

                <div className="relative z-20">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <h3 className="text-lg md:text-2xl font-black text-white uppercase italic tracking-widest leading-none">
                      Documents <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">Matrix</span>
                    </h3>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-600/50 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                    {activeTab.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all group/item"
                      >
                        <div className="mt-0.5">
                          <CheckCircle2 size={14} className="text-blue-500 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-slate-300 text-[10px] md:text-sm font-semibold tracking-wide uppercase">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <span className="px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02] text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">
            Official Protocol &bull; Secure Verification
          </span>
        </div>

      </div>
    </section>
  );
};

export default Requirements;