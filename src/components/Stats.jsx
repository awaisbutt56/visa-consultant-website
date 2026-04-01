import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 200, suffix: "+", label: "Visas Approved", icon: "🌐" },
  { value: 95, suffix: "%", label: "Success Rate", icon: "📈" },
  { value: 2, suffix: "+", label: "Years Exp", icon: "🛡️" },
  { value: 15, suffix: "+", label: "Countries", icon: "✈️" },
  { value: 80, suffix: "+", label: "Happy Clients", icon: "🤝" },
  { value: 24, suffix: "/7", label: "Support", icon: "💬" },
];

function useCountUp(target, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const duration = 800; // Thora sa duration barhaya taake counting nazar aaye
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, started]);
  return count;
}

function FloatingBalloon({ stat, index, started }) {
  const count = useCountUp(stat.value, started);
  
  return (
    <div 
      className={`relative flex flex-col items-center transition-all duration-700 ease-out ${started ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Balloon Head - Emerald Glassmorphism */}
      <div 
        className="relative w-28 h-32 md:w-36 md:h-44 bg-gradient-to-br from-emerald-500/20 to-teal-600/5 border border-emerald-500/20 rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] flex flex-col items-center justify-center p-4 text-center shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] animate-float transition-all duration-500 hover:scale-110 group cursor-default"
        style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s' }}
      >
        {/* Reflection light */}
        <div className="absolute top-4 left-6 w-8 h-4 bg-white/20 rounded-full rotate-[-25deg] blur-[2px]"></div>
        
        <div className="text-2xl md:text-3xl mb-2 drop-shadow-md">{stat.icon}</div>

        <div className="flex items-baseline justify-center">
          <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
            {count.toLocaleString()}
          </span>
          <span className="text-lg font-black text-emerald-400 ml-0.5">{stat.suffix}</span>
        </div>

        <div className="mt-2">
          <h4 className="text-emerald-100 font-bold uppercase tracking-[0.2em] text-[8px] md:text-[10px] leading-tight px-2">
            {stat.label}
          </h4>
        </div>

        {/* Knot at bottom */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-emerald-600/40 rounded-full"></div>
      </div>

      {/* String - Emerald Glow Line */}
      <div 
        className="w-[1.5px] h-12 md:h-24 bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent animate-string origin-top"
        style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s' }}
      ></div>
    </div>
  );
}

export default function StatsBalloons() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#020617] py-24 px-4 overflow-hidden">
      
      {/* Background Tech Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
             <span className="text-emerald-400 font-bold tracking-[0.4em] uppercase text-[10px]">Real-Time Data</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Our Journey In{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 text-transparent bg-clip-text italic">
              Numbers
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 items-start justify-items-center">
          {statsData.map((stat, i) => (
            <FloatingBalloon key={i} stat={stat} index={i} started={visible} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-1.5deg); }
          50% { transform: translateY(-20px) rotate(1.5deg); }
        }
        @keyframes string {
          0%, 100% { transform: scaleY(1) skewX(-1deg); }
          50% { transform: scaleY(1.1) skewX(1deg); }
        }
        .animate-float { animation: float infinite ease-in-out; }
        .animate-string { animation: string infinite ease-in-out; }
      `}</style>
    </section>
  );
}