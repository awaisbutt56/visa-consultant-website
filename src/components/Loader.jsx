import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        // SPEED UNTOUCHED (Same as your original)
        this.speedX = (Math.random() - 0.5) * 2.5;
        this.speedY = (Math.random() - 0.5) * 2.5;
        this.color = '#10b981'; // Emerald Green
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      const count = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < Math.min(count, 120); i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${1 - distance / 150})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden">
      
      {/* 1. Mind-Blowing Background Wavy Circles (Emerald Theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[120px] animate-blob-move"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-teal-500/20 rounded-full blur-[100px] animate-blob-move-reverse"></div>
      </div>

      {/* 2. Original Stars Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block pointer-events-none" 
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* 3. Text Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-emerald-600/30 rounded-full blur-[80px] animate-pulse"></div>

        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-[0.25em] uppercase mb-4 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            Visa
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 text-transparent bg-clip-text italic ml-2">
              Consult
            </span>
          </h1>
          
          <div className="flex flex-col items-center gap-6">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            
            <p className="text-emerald-300 font-mono text-xs md:text-sm tracking-[0.6em] uppercase animate-pulse">
              Connecting Your Dreams
            </p>

            {/* Custom Aesthetic Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500 animate-loading-line shadow-[0_0_10px_#10b981]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 40px) scale(1.1); }
        }
        @keyframes blob-move-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -40px) scale(1.2); }
        }
        @keyframes loading-line {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-blob-move { animation: blob-move 10s ease-in-out infinite; }
        .animate-blob-move-reverse { animation: blob-move-reverse 12s ease-in-out infinite; }
        .animate-loading-line { animation: loading-line 2.5s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Loader;