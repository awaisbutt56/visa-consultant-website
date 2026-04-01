import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Timer, Briefcase, Globe, Laptop, ShieldCheck, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const PERMITS = [
  { 
    title: "Skilled Worker", 
    desc: "Strategic pathways for technical experts and engineers.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <UserCheck className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-blue-600 to-cyan-500" 
  },
  { 
    title: "Seasonal Work", 
    desc: "Short-term placement in hospitality and agriculture.",
    image: "https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Timer className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-emerald-600 to-teal-500" 
  },
  { 
    title: "Intra-Company", 
    desc: "Executive transfers for global organizations.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Briefcase className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-indigo-600 to-purple-500" 
  },
  { 
    title: "Digital Nomad", 
    desc: "Remote authorization for the modern workforce.",
    image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-purple-600 to-pink-500" 
  },
  { 
    title: "Business Visa", 
    desc: "Exclusive access for entrepreneurs and trade.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Laptop className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-amber-600 to-orange-500" 
  },
  { 
    title: "Permanent Res", 
    desc: "Long-term pathways for total global integration.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <ShieldCheck className="w-5 h-5 md:w-7 md:h-7" />, 
    color: "from-red-600 to-rose-500" 
  }
];

const PermitTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === PERMITS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? PERMITS.length - 1 : prev - 1));

  return (
    <section className="relative py-12 md:py-20 bg-[#020617] overflow-hidden min-h-[600px] md:min-h-[750px] flex flex-col items-center justify-center">
      
      {/* 1. Header Section - Reduced Margins */}
      <div className="max-w-4xl mx-auto px-6 mb-10 md:mb-16 text-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-3"
        >
          <Sparkles size={12} className="animate-pulse" /> Global Opportunities
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
          Permit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Pathways</span>
        </h2>
        <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      </div>

      {/* 2. Slider Container */}
      <div className="relative w-full max-w-[1200px] flex items-center justify-center px-2 md:px-10">
        
        {/* LEFT BUTTON - Responsive Size */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-4 z-50 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-2xl active:scale-90"
        >
          <ChevronLeft size={20} className="md:hidden" />
          <ChevronLeft size={28} className="hidden md:block" />
        </button>

        {/* --- CARDS DISPLAY - Compact Heights --- */}
        <div className="flex items-center justify-center w-full h-[380px] md:h-[500px] relative">
          <AnimatePresence mode="popLayout">
            {PERMITS.map((item, idx) => {
              let position = "hidden";
              if (idx === currentIndex) position = "active";
              else if (idx === (currentIndex - 1 + PERMITS.length) % PERMITS.length) position = "prev";
              else if (idx === (currentIndex + 1) % PERMITS.length) position = "next";

              if (position === "hidden") return null;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, x: position === "next" ? 150 : -150 }}
                  animate={{ 
                    opacity: position === "active" ? 1 : 0.3, 
                    scale: position === "active" ? 1 : 0.75,
                    x: position === "active" ? 0 : position === "next" ? (window.innerWidth < 768 ? 160 : 280) : (window.innerWidth < 768 ? -160 : -280),
                    zIndex: position === "active" ? 30 : 10,
                    filter: position === "active" ? "blur(0px)" : "blur(2px)"
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 25 }}
                  className="absolute w-[240px] md:w-[350px] h-[320px] md:h-[420px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0f1d] shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  </div>

                  {/* Card Content - Compact Padding */}
                  <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                    <motion.div 
                      animate={{ y: position === "active" ? 0 : 10 }}
                      className={`w-fit p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4`}
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    
                    {position === "active" && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-slate-400 text-[10px] md:text-sm font-semibold leading-snug"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* RIGHT BUTTON - Responsive Size */}
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-50 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-2xl active:scale-90"
        >
          <ChevronRight size={20} className="md:hidden" />
          <ChevronRight size={28} className="hidden md:block" />
        </button>
      </div>

      {/* 3. Indicators - Tightened Margin */}
      <div className="flex gap-2 mt-6 md:mt-8">
        {PERMITS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-white/10'}`} 
          />
        ))}
      </div>

    </section>
  );
};

export default PermitTypes;