import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, MessageCircle, Send, MapPin, Phone, Mail } from "lucide-react";

// Updated NAV with correct paths matching your App.js
const NAV = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Book Now", path: "/applicationform" }, // Routing to Application Form
];

const SOCIALS = [
  { icon: <Facebook size={22} />, href: "#", color: "hover:text-blue-500" },
  { icon: <Linkedin size={22} />, href: "#", color: "hover:text-cyan-400" },
  { icon: <MessageCircle size={22} />, href: "https://wa.me/923033930638", color: "hover:text-green-500" },
];

const CONTACT = [
  { icon: <MapPin size={20} />, text: "86 Fairways Commercial, DHA Raya Phase 6, Lahore, Pakistan", label: "HEADQUARTERS" },
  { icon: <Phone size={20} />, text: "+92 3033930638", label: "DIRECT_LINE" },
  { icon: <Mail size={20} />, text: "visainfo@gmail.com", label: "CORE_SUPPORT" },
];

const RISING_EMOJIS = [
  { icon: "✈️", left: "5%", delay: "0s", duration: "12s" },
  { icon: "🌍", left: "15%", delay: "2s", duration: "15s" },
  { icon: "🛂", left: "25%", delay: "4s", duration: "10s" },
  { icon: "🎓", left: "35%", delay: "1s", duration: "14s" },
  { icon: "🇺🇸", left: "45%", delay: "7s", duration: "11s" },
  { icon: "🇨🇦", left: "55%", delay: "3s", duration: "13s" },
  { icon: "🇬🇧", left: "65%", delay: "6s", duration: "16s" },
  { icon: "🇦🇺", left: "75%", delay: "2s", duration: "12s" },
  { icon: "💼", left: "50%", delay: "10s", duration: "15s" },
  { icon: "🗺️", left: "20%", delay: "12s", duration: "13s" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="relative bg-[#01040a] pt-12 pb-6 overflow-hidden border-t border-white/10 font-sans">
      
      {/* 1. Enhanced Random Rising Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.15]">
        {RISING_EMOJIS.map((item, index) => (
          <span
            key={index}
            className="absolute bottom-[-10%] text-2xl animate-rise-random"
            style={{ 
              left: item.left, 
              animationDelay: item.delay,
              animationDuration: item.duration 
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Section 1: Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
              VISA<span className="text-blue-500">CONSULT</span>
            </h2>
            <p className="text-slate-300 text-sm font-semibold leading-relaxed tracking-wide max-w-xs">
              Next-generation immigration protocols. We engineer your global future with precision.
            </p>
            <div className="flex gap-5 pt-2">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className={`text-gray-400 transition-all duration-300 hover:scale-125 ${s.color}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Directory (Updated Routing) */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 flex items-center gap-2">
              DIRECTORY <div className="h-px w-8 bg-blue-500/40"></div>
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-white text-sm md:text-base font-semibold uppercase tracking-tight hover:text-blue-400 transition-all duration-300 flex items-center group"
                  onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
                >
                  <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 text-blue-500">» </span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 flex items-center gap-2">
              CONTACT_NODES <div className="h-px w-8 bg-blue-500/40"></div>
            </h4>
            <div className="space-y-4">
              {CONTACT.map((c, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-[8px] text-blue-500/60 font-black mb-1 tracking-widest">{c.label}</p>
                  <div className="flex gap-3 items-start">
                    <div className="text-white mt-1 group-hover:text-blue-500 transition-colors">{c.icon}</div>
                    <span className="text-sm text-white font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
                      {c.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 flex items-center gap-2">
              NETWORK_SYNC <div className="h-px w-8 bg-blue-500/40"></div>
            </h4>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative group/news">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/news:opacity-100 transition-opacity rounded-2xl"></div>
              <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-widest relative z-10">Subscribe for encrypted updates.</p>
              <form onSubmit={handleSubmit} className="relative z-10">
                <input
                  type="email"
                  placeholder="USER@DOMAIN.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-xs text-white font-mono outline-none focus:border-blue-500 transition-all"
                  required
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all active:scale-90">
                  <Send size={14} />
                </button>
              </form>
              {sent && <p className="text-[9px] text-green-500 mt-2 font-bold animate-pulse">Email Saved!</p>}
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            © 2026 <span className="text-white">VISACONSULT_INTL</span> — ALL_SYSTEMS_OPERATIONAL
          </p>
          <div className="flex gap-6">
            <Link to="/policy" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors">Privacy</Link>
            <Link to="/policy" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rise-random {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-300px) translateX(20px) scale(1); }
          90% { opacity: 0.8; }
          100% { transform: translateY(-700px) translateX(-20px) scale(1.2); opacity: 0; }
        }
        .animate-rise-random {
          animation: rise-random linear infinite;
        }
      `}} />
    </footer>
  );
}