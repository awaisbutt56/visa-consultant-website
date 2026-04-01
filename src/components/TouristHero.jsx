import React, { useState, useEffect } from 'react';
import { Plane, Compass, Globe, Navigation, Search } from 'lucide-react';

const sliderData = [
  {
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop", // LIGHT IMAGE
    text: "Tropical Paradise",
    sub: "Exotic Island Escapes",
    lightTheme: true // Add this property to identify light slides
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", // DARK IMAGE
    text: "Royal Heritage",
    sub: "European Classic Tours",
    lightTheme: false
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop", // DARK IMAGE
    text: "Modern Luxury",
    sub: "Metropolitan Adventures",
    lightTheme: false
  }
];

const TouristHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const isLightTheme = sliderData[current].lightTheme;

  // Define Adaptive Colors based on lightTheme
  const textColor = isLightTheme ? 'text-black' : 'text-white';
  const subTextColor = isLightTheme ? 'text-black/90' : 'text-slate-200';
  const headlineColor = isLightTheme ? 'from-blue-700 via-orange-400 to-yellow-600' : 'from-orange-400 via-red-400 to-rose-400';
  const wavyColor = isLightTheme ? 'border-amber-600/30' : 'border-amber-500/10';
  const labelBg = isLightTheme ? 'bg-black/80' : 'bg-black/40';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-6 pt-20">
      
      {/* 1. Background Dynamic Image Overlay (Peeche Halki Image) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out opacity-${current === index ? '[0.07]' : '0'}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
        {/* Dynamic Glow: Emerald for Dark, Amber for Light */}
        <div className={`absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse transition-all duration-1000 ${isLightTheme ? 'bg-amber-600/10' : 'bg-emerald-500/10'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center gap-10 lg:gap-20 transition-all duration-1000">
        
        {/* 2. Left Side: Heavy Adaptive Text (3xl/5xl) */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20 backdrop-blur-md">
            <Plane className={`w-4 h-4 transition-colors duration-1000 ${isLightTheme ? 'text-amber-700' : 'text-amber-500'} rotate-45`} />
            <span className={`transition-colors duration-1000 ${isLightTheme ? 'text-amber-800' : 'text-amber-400'} font-black tracking-[0.4em] text-[10px] uppercase italic`}>
              Elite Travel Solutions
            </span>
          </div>

          {/* Animated Headline & Subtext */}
          <div className="h-[180px] md:h-[220px] flex flex-col justify-center">
             <h1 className={`text-3xl md:text-5xl font-black transition-colors duration-1000 ${textColor} uppercase italic tracking-tighter leading-[0.9]`}>
               Explore <br />
               <span className={`text-transparent bg-clip-text bg-gradient-to-r ${headlineColor}`}>
                 {sliderData[current].text}
               </span>
             </h1>
             <p className={`mt-6 max-w-lg transition-colors duration-1000 ${subTextColor} text-sm md:text-xl font-medium animate-in fade-in slide-in-from-left duration-700`}>
                {sliderData[current].sub}. Professional visa consultancy with a touch of luxury and class.
             </p>
          </div>
        </div>

        {/* 3. Right Side: Compact Wavy Image Slider with Adaptive Waves */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Moving Lehrain behind the image - Adaptive Color */}
          <div className={`absolute inset-[-30px] border ${wavyColor} transition-colors duration-1000 rounded-[3rem] animate-wavy-ring`}></div>
          <div className={`absolute inset-[-60px] border ${wavyColor}/50 transition-colors duration-1000 rounded-[4rem] animate-wavy-ring [animation-delay:1s]`}></div>

          {/* Main Cinematic Image Box */}
          <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px] bg-black rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
             {sliderData.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-[1500ms] transform scale-${current === index ? '100' : '110'} opacity-${current === index ? '100' : '0'}`}
                >
                  <img src={item.image} alt={item.text} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                  
                  {/* Glass Label on Image - Adaptive Background */}
                  <div className={`absolute bottom-6 left-6 right-6 p-4 ${labelBg} transition-colors duration-1000 backdrop-blur-xl border border-white/10 rounded-2xl`}>
                     <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-black text-[10px] uppercase tracking-widest italic">{item.text}</span>
                        <Navigation className="w-4 h-4 text-white/50" />
                     </div>
                  </div>
                </div>
             ))}

             {/* Tech Scanline Effect */}
             <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-${isLightTheme ? 'amber-600' : 'amber-500'}/40 to-transparent animate-scan`}></div>
          </div>

          {/* Floating Orbiting Icons (Adaptive Color) */}
          <Globe className={`absolute -top-6 -right-6 w-12 h-12 transition-colors duration-1000 ${isLightTheme ? 'text-amber-700/20' : 'text-amber-500/20'} animate-spin-slow hidden md:block`} />
          <Compass className={`absolute -bottom-6 -left-6 w-10 h-10 transition-colors duration-1000 ${isLightTheme ? 'text-amber-700/20' : 'text-amber-500/20'} animate-pulse hidden md:block`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes wavy-ring {
          0% { transform: scale(0.9); border-radius: 3rem; opacity: 0.5; }
          50% { transform: scale(1.05); border-radius: 40% 60% 50% 50%; opacity: 0.2; }
          100% { transform: scale(1.15); border-radius: 3rem; opacity: 0; }
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-wavy-ring { animation: wavy-ring 5s infinite ease-in-out; }
        .animate-scan { animation: scan 4s linear infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default TouristHero;