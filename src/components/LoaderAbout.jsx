import React, { useEffect, useRef } from 'react';

const LoaderAbout = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let bubblesArray = [];
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Bubble {
      constructor() {
        this.radius = Math.random() * 12 + 8; 
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulse = Math.random() * 0.02;
        this.pulseDir = 1;
        // About Page Theme: Emerald and Gold
        this.colorMain = Math.random() > 0.5 ? '16, 185, 129' : '245, 158, 11'; 
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.radius += this.pulse * this.pulseDir;
        if (this.radius > 18 || this.radius < 8) this.pulseDir *= -1;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.speedX *= -1;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.speedY *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${this.colorMain}, ${this.opacity + 0.1})`);
        gradient.addColorStop(1, `rgba(${this.colorMain}, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function init() {
      bubblesArray = [];
      for (let i = 0; i < 50; i++) {
        bubblesArray.push(new Bubble());
      }
    }

    function drawReverseGrid(t) {
      // Emerald tinted grid
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.04)';
      ctx.lineWidth = 1;
      const spacing = 50;
      const shift = (t * 0.02) % spacing;

      for (let x = shift; x < canvas.width; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = -shift; y < canvas.height; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y + spacing); ctx.lineTo(canvas.width, y + spacing); ctx.stroke();
      }
    }

    function animate(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawReverseGrid(t);
      bubblesArray.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#02040a] flex flex-col items-center justify-center overflow-hidden">
      
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Main Glassmorphism UI */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Navigator with Liquid Wave Effect */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center animate-bounce-slow">
          
          {/* LEHRAATA HUA CIRCLE (Liquid Wave) */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl animate-blob"></div>
          <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 200 200">
            <path 
              fill="rgba(16, 185, 129, 0.15)" 
              d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.4,-0.9C83.8,13.8,77.2,27.7,68.4,39.6C59.6,51.5,48.7,61.4,36,68.9C23.3,76.3,8.7,81.4,-6.2,80.1C-21.2,78.8,-36.5,71.1,-49.2,60.5C61.8,50,-71.8,36.5,-77.3,21.2C-82.8,5.8,-80.1,-11.4,-73.4,-26.4C-66.7,-41.4,-56,-54.2,-42.6,-61.4C-29.2,-68.6,-14.6,-70.2,0.4,-70.9C15.4,-71.6,31.3,-71.4,44.7,-76.4Z" 
              transform="translate(100 100)" 
            />
          </svg>
          
          {/* Spinning Rings (Amber Gold & Emerald) */}
          <div className="absolute inset-0 border-2 border-dashed border-amber-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 border-t-2 border-b-2 border-emerald-400/50 rounded-full animate-[spin_3s_linear_infinite]"></div>

          {/* High-End Glass Core */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.2)] overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-amber-500 tracking-widest mt-2 uppercase">Vision 4.0</span>
            </div>
            
            {/* Liquid Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite]"></div>
          </div>
        </div>

        {/* Text Section with High Spacing */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.02em] uppercase italic group">
            ABOUT{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-500 text-transparent bg-clip-text relative inline-block drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              LEGACY
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-emerald-500/50 blur-sm"></span>
            </span>
          </h2>
          
          <div className="mt-10 flex flex-col items-center gap-6">
            <p className="text-emerald-300/40 text-[10px] md:text-xs font-black tracking-[1.2em] uppercase ml-[1.2em]">
              Establishing Protocol
            </p>
            
            {/* Custom Aesthetic Progress Bar */}
            <div className="w-56 h-[1px] bg-white/5 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-[loading_2.5s_infinite_linear]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-bounce-slow {
          animation: bounce-custom 5s ease-in-out infinite;
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blob {
          0%, 100% { transform: scale(1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { transform: scale(1.1); border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
      `}</style>
    </div>
  );
};

export default LoaderAbout;