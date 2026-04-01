import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617] transform-gpu">
      
      {/* 1. Specialized Emerald/Gold Animations */}
      <style>
        {`
          @keyframes scanLine {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          @keyframes dataFlow {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          .v-line {
            position: absolute;
            width: 1px;
            height: 250px;
            background: linear-gradient(to bottom, transparent, #10b981, transparent);
            animation: scanLine 5s linear infinite;
            will-change: transform;
          }
          .h-line {
            position: absolute;
            height: 1px;
            width: 400px;
            background: linear-gradient(to right, transparent, #f59e0b, transparent);
            animation: dataFlow 8s linear infinite;
            will-change: transform;
          }
          .hero-glow {
            filter: blur(120px);
            opacity: 0.25;
            pointer-events: none;
          }
        `}
      </style>

      {/* 2. Enhanced Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Thematic Glows */}
        <div className="hero-glow absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600 rounded-full"></div>
        <div className="hero-glow absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-600 rounded-full"></div>

        {/* Dynamic Scanning Grid Nodes */}
        {[20, 40, 60, 80].map((pos, i) => (
          <div
            key={`v-${i}`}
            className="v-line opacity-20"
            style={{ left: `${pos}%`, animationDelay: `${i * 1.2}s`, animationDuration: '6s' }}
          />
        ))}
        {[30, 70].map((pos, i) => (
          <div
            key={`h-${i}`}
            className="h-line opacity-20"
            style={{ top: `${pos}%`, animationDelay: `${i * 2}s`, animationDuration: '9s' }}
          />
        ))}

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* 3. Content Section */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto antialiased">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-10 animate-bounce-slow">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           <span className="text-emerald-400 font-black tracking-[0.4em] uppercase text-[9px] italic">
             Legacy Intelligence Protocol
           </span>
        </div>

        {/* Main Headline with Emerald & Gold Accent */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1] uppercase tracking-tighter">
          Mastering <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] italic">Global</span><br />
          <span className="relative">
            Boundaries
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        {/* High-Impact Description */}
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-gray-400 text-lg md:text-2xl font-medium leading-relaxed tracking-tight">
            VISACONSULT is the <span className="text-white font-bold">Gold Standard</span> in international mobility. 
            We don't just process applications; we engineer <span className="text-emerald-400 underline decoration-amber-500/50 underline-offset-8">seamless transitions</span> for the world's visionaries.
          </p>
          
          {/* Glassmorphism Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-8">
            {[
              { label: "Success Rate", val: "99.9%", color: "emerald" },
              { label: "Global Presence", val: "50+ Nations", color: "amber" },
              { label: "Elite Support", val: "24/7 Live", color: "emerald" }
            ].map((stat, idx) => (
              <div key={idx} className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-all duration-500">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-${stat.color}-500/50`}></div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {stat.val}
                </h4>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 group-hover:text-emerald-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Decorative "Blade" */}
      <div className="absolute bottom-0 w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        <div className="h-[100px] bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>

    </section>
  );
};

export default AboutHero;