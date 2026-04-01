import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

const COUNTRIES = [
  {
    name: "United Kingdom",
    uniCount: "150+ Unis",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=500&auto=format&fit=crop",
    color: "from-blue-600 to-cyan-400"
  },
  {
    name: "United States",
    uniCount: "300+ Unis",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=500&auto=format&fit=crop",
    color: "from-indigo-600 to-purple-400"
  },
  {
    name: "Canada",
    uniCount: "95+ Unis",
    image: "https://images.unsplash.com/photo-1503125595091-6e789440c267?q=80&w=500&auto=format&fit=crop", 
    color: "from-red-600 to-orange-400"
  },
  {
    name: "Australia",
    uniCount: "120+ Unis",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=500&auto=format&fit=crop",
    color: "from-purple-600 to-pink-400"
  },
  {
    name: "Germany",
    uniCount: "200+ Unis",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=500&auto=format&fit=crop",
    color: "from-amber-600 to-yellow-400"
  }
];

// Replicating data for seamless loop
const DUPLICATED_COUNTRIES = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES];

const CountryGrid = () => {
  return (
    <section className="relative py-16 bg-[#020617] overflow-hidden">
      
      {/* Header Section - Fully Centered & Professional */}
<div className="max-w-7xl mx-auto px-6 mb-12 text-center flex flex-col items-center">
  
  {/* Top Badge/Span */}
  <span className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-3 block">
    Global Reach
  </span>
  
  {/* Main Heading */}
  <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
    Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Destinations</span>
  </h2>

  {/* Optional: Modern Underline Divider to enhance the "Mind-Blowing" look */}
  <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mt-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
  
</div>

      {/* Main Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden select-none">
        
        {/* The Animated Track */}
        <motion.div 
          className="flex flex-nowrap gap-6 py-4 will-change-transform"
          animate={{ x: ["0%", "-33.33%"] }} // Perfect mathematical loop
          transition={{
            ease: "linear",
            duration: 30, // Adjust this for speed (higher = smoother/slower)
            repeat: Infinity,
          }}
          style={{ display: 'flex' }}
        >
          {DUPLICATED_COUNTRIES.map((country, idx) => (
            <div 
              key={idx}
              className="relative w-[220px] md:w-[260px] h-[320px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 bg-[#0a0f1d] group transform transition-all duration-500 hover:scale-105"
            >
              {/* Image with fallbacks */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end pointer-events-none">
                <div className={`w-fit p-2 rounded-xl bg-gradient-to-br ${country.color} text-white mb-3 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  <MapPin size={18} />
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-white uppercase italic tracking-tight mb-1">
                  {country.name}
                </h3>
                
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                  <GraduationCap size={14} className="text-blue-400" />
                  {country.uniCount}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-blue-500/20 rounded-2xl" />
            </div>
          ))}
        </motion.div>

        {/* High-Performance Side Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020617] to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020617] to-transparent z-20" />
      </div>
    </section>
  );
};

export default CountryGrid;