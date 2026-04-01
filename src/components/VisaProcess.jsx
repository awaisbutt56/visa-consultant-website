import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FileSearch, 
  ClipboardCheck, 
  Send, 
  GraduationCap, 
  BadgeCheck, 
  ChevronRight 
} from 'lucide-react';

const STEPS = [
  {
    title: "Initial Consultation",
    desc: "We evaluate your academic profile to select the most prestigious universities that align with your career ambitions.",
    icon: <FileSearch className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-blue-600 to-cyan-500",
    glow: "shadow-blue-500/40"
  },
  {
    title: "Document Preparation",
    desc: "Our experts craft compelling SOPs and LORs, ensuring every piece of paperwork meets international standards.",
    icon: <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-indigo-600 to-purple-500",
    glow: "shadow-indigo-500/40"
  },
  {
    title: "Application Submission",
    desc: "We manage the entire submission process with high-priority status to maximize your chances of early acceptance.",
    icon: <Send className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-cyan-600 to-blue-500",
    glow: "shadow-cyan-500/40"
  },
  {
    title: "Visa Interview Prep",
    desc: "Gain confidence with our expert-led mock interviews and strategic guidance to secure your visa approval.",
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-purple-600 to-pink-500",
    glow: "shadow-purple-500/40"
  },
  {
    title: "Success & Departure",
    desc: "Upon visa approval, we provide comprehensive pre-departure briefings for a seamless transition to your new home.",
    icon: <BadgeCheck className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-emerald-600 to-teal-500",
    glow: "shadow-emerald-500/40"
  }
];

const VisaProcess = () => {
  // Performance Optimization: Using useScroll for smooth line animation
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="relative py-5 md:py-12 px-4 md:px-8 bg-[#020617] overflow-hidden">
      
      {/* Background Layer: Optimized for performance using will-change */}
      <div className="absolute inset-0 pointer-events-none opacity-20 will-change-transform">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 block"
          >
            Streamlined Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Application</span> Roadmap
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Animated Line (Visible only on Desktop for cleaner Mobile UI) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center w-full ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* 1. Content Card */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className="group relative p-6 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 will-change-transform">
                    
                    {/* Hover Color Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-[2rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                    
                    <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-6 shadow-2xl ${step.glow}`}>
                      {step.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tighter uppercase italic">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium">
                      {step.desc}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                      Phase {idx + 1} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* 2. Optimized Center Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <motion.div 
                    whileInView={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                    className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#020617] border-2 border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <div className={`w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-[10px] md:text-xs italic`}>
                      {idx + 1}
                    </div>
                  </motion.div>
                </div>

                {/* 3. Empty Spacer (Desktop) */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcess;