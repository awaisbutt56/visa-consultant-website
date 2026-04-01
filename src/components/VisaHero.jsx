import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, ShieldCheck, GraduationCap } from 'lucide-react';

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center px-4 overflow-hidden bg-[#020617]">
      
      {/* 1. Fully Responsive Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={BG_IMAGES[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }} // Opacity thori kam taake text parha jaye
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            // Mobile par image center rahay gi, desktop par top focus
            className="w-full h-full object-cover object-center md:object-[center_20%]" 
            alt="Background"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050853063-bd80e27433fb?q=80&w=2070'; }}
          />
        </AnimatePresence>
        
        {/* Responsive Gradient - Darker on edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-transparent to-[#020617] z-10" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 max-w-5xl w-full text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6 backdrop-blur-md"
        >
          <Sparkles size={12} className="text-blue-400 animate-pulse" />
          <span className="text-blue-200 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Future Architects</span>
        </motion.div>

        {/* Responsive Text Sizes */}
        <div className="h-[90px] md:h-[150px] flex items-center justify-center overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Sizes: 3xl (Mobile), 5xl (Tablet), 6xl (Laptop) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tighter leading-none uppercase italic">
                {SLIDER_TEXT[index].main} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {SLIDER_TEXT[index].sub}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs md:text-lg max-w-xl mx-auto font-medium leading-relaxed opacity-80 px-4">
          {SLIDER_TEXT[index].desc}
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="group px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-widest rounded-xl transition-all shadow-xl shadow-blue-950/20 flex items-center gap-3 mx-auto active:scale-95">
            Start Application 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Badges - Grid for Mobile */}
        <div className="mt-8 grid grid-cols-3 gap-2 md:flex md:justify-center md:gap-10 text-[7px] md:text-[10px] font-black text-white/50 uppercase tracking-widest pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-2"><Globe size={14} className="text-blue-400" /> Worldwide</div>
          <div className="flex flex-col md:flex-row items-center gap-2 border-x border-white/5 md:border-none"><GraduationCap size={14} className="text-blue-400" /> 500+ Unis</div>
          <div className="flex flex-col md:flex-row items-center gap-2"><ShieldCheck size={14} className="text-blue-400" /> Verified</div>
        </div>
      </div>
    </section>
  );
};

export default VisaHero;