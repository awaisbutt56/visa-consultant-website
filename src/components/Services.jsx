import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { GraduationCap, Briefcase, Globe, Landmark, ArrowRight } from "lucide-react";

const ICONS = {
  study: <GraduationCap size={28} />,
  work: <Briefcase size={28} />,
  travel: <Globe size={28} />,
  residency: <Landmark size={28} />,
};

const SERVICES = [
  { id: 1, title: "Study Visa", path: "/study-visa", desc: "Unlock global education opportunities with our expert guidance.", icon: ICONS.study, color: "text-emerald-400", glow: "group-hover:shadow-emerald-500/40", bg: "from-emerald-600/20" },
  { id: 2, title: "Work Permit", path: "/work-permit", desc: "Build your career internationally with our professional services.", icon: ICONS.work, color: "text-teal-400", glow: "group-hover:shadow-teal-500/40", bg: "from-teal-600/20" },
  { id: 3, title: "Tourist Visa", path: "/tourist-visa", desc: "Explore the world with confidence through our reliable visa support.", icon: ICONS.travel, color: "text-cyan-400", glow: "group-hover:shadow-cyan-500/40", bg: "from-cyan-600/20" },
  { id: 4, title: "PR Residency", path: "/residency", desc: "Start your journey toward permanent settlement abroad.", icon: ICONS.residency, color: "text-emerald-500", glow: "group-hover:shadow-emerald-600/40", bg: "from-emerald-700/20" },
];

const ServiceColumn = ({ service, index, visible }) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`relative group flex-1 md:hover:flex-[3] transition-all duration-500 ease-in-out border-l border-white/5 bg-[#0a1120] overflow-hidden transform-gpu ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }} 
    >
      {/* Background Gradient Layer */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Moving Tech Scanline */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div>

      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12">
        <div className="flex flex-col gap-8">
          {/* Icon Box */}
          <div className={`w-fit p-5 rounded-2xl bg-white/5 ${service.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/10 ${service.glow} shadow-2xl`}>
            {service.icon}
          </div>
          
          {/* Title Logic */}
          <h3 className="text-3xl md:text-4xl font-black text-white leading-none uppercase tracking-tighter italic">
            {service.title.split(' ')[0]} <br/> 
            <span className="text-slate-500 group-hover:text-emerald-300 transition-colors duration-300">
              {service.title.split(' ')[1]}
            </span>
          </h3>
        </div>

        {/* Content visible on hover */}
        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <p className="text-slate-300 text-xs leading-relaxed mb-8 font-bold uppercase tracking-[0.2em] line-clamp-2 max-w-[200px]">
            {service.desc}
          </p>
          
          <button 
            onClick={() => navigate(service.path)} 
            className="group/btn inline-flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 shadow-[0_10px_20px_rgba(16,185,129,0.3)]"
          >
            Launch Case <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Big Background Number */}
        <div className="absolute -bottom-6 -right-4 text-[8rem] font-black text-white/[0.03] tracking-tighter pointer-events-none group-hover:text-emerald-500/[0.05] transition-all italic select-none">
          0{index + 1}
        </div>
      </div>
    </div>
  );
};

export default function SleekServices() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVis(true);
    }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#020617] py-28 px-6 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        <div className={`mb-16 transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-emerald-500"></div>
            <span className="text-emerald-400 font-black tracking-[0.6em] uppercase text-[10px]">Solutions</span>
            <div className="w-12 h-[1px] bg-emerald-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none text-center">
            Global{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-600 text-transparent bg-clip-text">
              Access
            </span>
          </h2>
        </div>

        {/* Main Service Container */}
        <div className="relative z-10 flex flex-col md:flex-row min-h-[550px] border border-white/5 rounded-[3rem] overflow-hidden bg-[#050b18] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          {SERVICES.map((s, i) => (
            <ServiceColumn key={i} service={s} index={i} visible={vis} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(550px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}