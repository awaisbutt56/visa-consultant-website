import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Globe, ShieldCheck, GraduationCap } from 'lucide-react';

const BG_IMAGES = [
  "/src/assets/images/Study Visa guidence.jpg", 
  "/src/assets/images/Global Future addmissions.jpg", 
  "/src/assets/images/Expert Career consult.jpg",
];

const SLIDER_TEXT = [
  { 
    main: "Study Visa", 
    sub: "Guidance.", 
    desc: "Seamlessly transition to top-tier international universities with our expert-led strategies."
  },
  { 
    main: "Global Future", 
    sub: "Admissions.", 
    desc: "Your academic excellence deserves a global stage. We bridge the gap to your dream campus."
  },
  { 
    main: "Expert Career", 
    sub: "Consulting.", 
    desc: "Strategic career mapping and personalized documentation to ensure a 99% success rate."
  }
];

const VisaHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDER_TEXT.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center px-4 overflow-hidden bg-[#020617] selection:bg-blue-500/30">
      
      {/* 1. BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={BG_IMAGES[index]}
              className="w-full h-full object-cover grayscale-[20%]" 
              alt="Background"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050853063-bd80e27433fb?q=80&w=2070'; }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10" />
      </div>

      {/* 2. CONTENT AREA - Added 'pt-24' for Navbar Clearance */}
      <div className="relative z-20 max-w-6xl w-full text-center pt-24 md:pt-32">
        
        {/* Compact Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8 backdrop-blur-md"
        >
          <Sparkles size={12} className="text-blue-400" />
          <span className="text-blue-200 text-[9px] font-black uppercase tracking-[0.3em]">Protocol // Active</span>
        </motion.div>

        {/* HERO TITLE: Exact Requested Sizes */}
        <div className="min-h-[120px] md:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -15 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase italic">
                {SLIDER_TEXT[index].main} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {SLIDER_TEXT[index].sub}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Optimized Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-blue-100/70 text-xs md:text-lg max-w-xl mx-auto font-medium leading-relaxed mt-4 mb-12 px-6"
        >
          {SLIDER_TEXT[index].desc}
        </motion.p>

        {/* Responsive Trust Bar */}
        <div className="mt-6 grid grid-cols-3 gap-2 md:flex md:justify-center md:gap-12 py-8 border-t border-white/5 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 group">
            <Globe size={16} className="text-blue-400/60" />
            <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Global</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 group border-x border-white/5 md:border-none px-2">
            <GraduationCap size={16} className="text-blue-400/60" />
            <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest text-center">500+ Unis</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <ShieldCheck size={16} className="text-blue-400/60" />
            <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Verified</span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Grid Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default VisaHero;