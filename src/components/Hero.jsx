import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const canvasRef = useRef(null);

  const images = [
    hero1, 
    hero2, 
    hero3, 
    hero4
  ];

  // --- Background Particles (Emerald Theme) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let bubblesArray = [];

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Bubble {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1; // Smaller, more tech-like particles
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`; // Emerald Color
        ctx.fill();
      }
    }

    const init = () => {
      bubblesArray = [];
      for (let i = 0; i < 40; i++) bubblesArray.push(new Bubble());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubblesArray.forEach(b => { b.update(); b.draw(); });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', setSize);
    setSize();
    init();
    animate();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen w-full bg-[#020617] flex items-center overflow-hidden pt-20">
      
      {/* 1. Tech Particles Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />

      {/* 2. Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-emerald-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md transition-all hover:bg-emerald-500/10">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-emerald-400 text-[10px] font-bold tracking-[0.4em] uppercase">
                Global Mobility Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Global Future
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              VisaConsult delivers elite consultancy for international visas. Experience a 
              <span className="text-emerald-400 font-bold ml-1">98% Success Rate</span> with our AI-driven assessment process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-6">
              <Link to="/contact" className="group relative w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white font-black rounded-xl overflow-hidden transition-all hover:scale-105 hover:bg-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <Link to="/about" className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all text-center">
                Explore More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Fast Processing</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Premium Slider) --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-square group">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-emerald-500/20 rounded-[3rem] animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50" />
              
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl transition-transform duration-500 hover:rotate-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                      index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="Success" />
                    {/* Glassy Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" />
                  </div>
                ))}

                {/* Floating Info Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transform transition-all group-hover:-translate-y-2">
                   <div className="flex justify-between items-center">
                      <div>
                        <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-1">Current Status</p>
                        <h4 className="text-white font-bold text-lg">Worldwide Access Open</h4>
                      </div>
                      <Globe className="w-8 h-8 text-emerald-500 opacity-50" />
                   </div>
                </div>
              </div>

              {/* Progress Navigation */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-white/5 p-3 rounded-full border border-white/10 backdrop-blur-md">
                {images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImg ? 'w-10 bg-emerald-500' : 'w-3 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;