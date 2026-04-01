import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, CheckCircle2, Zap } from 'lucide-react';

const OfficeLocation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      setIsSubmitted(true);
      // Logic for API call
    }
  };

  return (
    <section className="relative py-24 px-6 bg-[#020617] overflow-hidden selection:bg-emerald-500/30">
      
      {/* --- Optimized Backdrop --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white/5 overflow-hidden flex flex-col lg:flex-row transition-all duration-500 hover:border-emerald-500/20">
          
          {/* 1. CONTACT INFO: The Emerald Command Side */}
          <div className="p-10 md:p-16 lg:w-3/5 bg-gradient-to-br from-[#064e3b]/80 to-[#022c22]/95 text-white relative overflow-hidden group">
            {/* Moving Scanner Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan-v-fast opacity-40"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Globe className="text-emerald-400 animate-spin-slow" size={20} />
                </div>
                <span className="text-emerald-400 font-black tracking-[0.4em] uppercase text-[10px] italic">Global_Nodes // 01</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase italic leading-tight">
                Visit Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-emerald-200">Headquarters</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Address */}
                <div className="space-y-4 group/item">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <MapPin size={18} className="group-hover/item:animate-bounce" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Location_ID</p>
                  </div>
                  <p className="text-xl md:text-2xl font-bold leading-tight group-hover/item:text-emerald-300 transition-colors duration-300">
                    86 Fairways Commercial, <br/>
                    <span className="text-emerald-200/40 font-medium text-lg">DHA Raya Phase 6, Lahore</span>
                  </p>
                </div>
                
                {/* Communication */}
                <div className="space-y-4 group/item">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Phone size={18} />
                    <p className="text-[10px] font-black uppercase tracking-widest">Comms_Link</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold group-hover/item:text-amber-300 transition-colors duration-300 cursor-pointer">+92 303 3930638</p>
                    <p className="text-lg font-medium text-emerald-200/40 hover:text-white transition-colors duration-300 cursor-pointer italic underline underline-offset-4 decoration-emerald-500/30">info@visaconsult.com</p>
                  </div>
                </div>

                {/* Timing */}
                <div className="space-y-4 md:col-span-2 group/item">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Clock size={18} />
                    <p className="text-[10px] font-black uppercase tracking-widest">Uptime_Protocol</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <p className="text-2xl font-black tracking-tight italic">Mon - Fri: 09:00 - 22:00</p>
                    <div className="px-5 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/30 backdrop-blur-md flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">NOC Support: 24/7 Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-emerald-500/10 rounded-br-[2rem]"></div>
          </div>

          {/* 2. NEWSLETTER: The Emerald Uplink Side */}
          <div className="p-10 md:p-16 lg:w-2/5 flex flex-col justify-center items-start bg-[#020617] relative group min-h-[450px]">
            
            {!isSubmitted ? (
              <div className="w-full animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="mb-10 space-y-2">
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">Stay Synchronized</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    Uplink your credentials to receive real-time updates on global immigration protocols.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div className="relative group/input">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-10 group-hover/input:opacity-40 transition duration-500"></div>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ACCESS_EMAIL@PROTOCOL.COM" 
                      className="relative w-full px-6 py-5 rounded-2xl bg-[#0a0f1e] border border-white/5 text-emerald-400 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-emerald-900 font-mono text-xs uppercase tracking-widest"
                    />
                  </div>
                  
                  <button type="submit" className="w-full group/btn relative overflow-hidden bg-emerald-600 text-black py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Establish Connection <Zap size={16} className="fill-current" />
                    </span>
                    <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>
              </div>
            ) : (
              /* --- SUCCESS MESSAGE: Mind Blowing --- */
              <div className="w-full flex flex-col items-center text-center space-y-8 animate-in zoom-in-95 fade-in duration-700">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 animate-pulse"></div>
                  <div className="w-24 h-24 rounded-full border-2 border-emerald-500/50 flex items-center justify-center relative z-10 bg-[#020617]">
                     <CheckCircle2 size={48} className="text-emerald-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center animate-bounce shadow-lg">
                    <Zap size={14} className="text-black fill-current" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">Uplink Successful</h4>
                  <p className="text-emerald-400 font-mono text-[10px] tracking-[0.4em] uppercase">Status: Secure // Access_Granted</p>
                </div>
                <p className="text-gray-500 text-sm font-medium px-4">
                  Welcome to the elite network. Your terminal is now synchronized with global intelligence.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border border-emerald-500/20 rounded-full text-emerald-500/40 text-[9px] font-black uppercase tracking-[0.3em] hover:text-emerald-400 hover:border-emerald-400 transition-all"
                >
                  [ Re-initiate Terminal ]
                </button>
              </div>
            )}
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-emerald-900/50 flex items-center justify-center text-[8px] font-black text-emerald-400">
                    N_{i}
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-gray-600 uppercase font-black tracking-[0.2em]">
                5.4K+ Active Data Nodes
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <style jsx>{`
        @keyframes scan-v-fast {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan-v-fast {
          animation: scan-v-fast 3s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OfficeLocation;