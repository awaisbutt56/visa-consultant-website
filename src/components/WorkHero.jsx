import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Optimized Professional Images
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", // Modern Corporate
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070", // Professional Team
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070"  // Business Strategy
];

const WorkHero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  // Automatic Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* 1. Animated Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={HERO_IMAGES[currentImg]}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
            animate={{ opacity: 0.3, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="Work Permit Background"
          />
        </AnimatePresence>
        
        {/* Professional Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/80 z-10" />
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="relative z-20 max-w-6xl w-full text-center px-6">
        
        {/* A. Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md mb-8"
        >
          <Sparkles size={14} className="text-blue-400 animate-pulse" />
          <span className="text-blue-200 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
            Global Career Pathways
          </span>
        </motion.div>

        {/* B. Centered Responsive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          {/* Mobile: 3xl | Desktop: 5xl */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] md:leading-[1.2] italic uppercase tracking-tighter">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Professional</span> <br />
            Legacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Overseas</span>
          </h1>
        </motion.div>

        {/* C. Sub-text Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 text-slate-400 text-xs md:text-lg max-w-2xl mx-auto font-medium leading-relaxed opacity-80"
        >
          Navigate the complexities of international work permits with our verified, 
          high-success rate solutions for top-tier global markets.
        </motion.p>

        {/* D. Decorative Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center gap-3 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent" />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-blue-400">Scroll Experience</span>
        </motion.div>

      </div>

      {/* Background Glows for Performance & Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};

export default WorkHero;