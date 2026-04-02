import React, { useState } from 'react';
import { Users, Briefcase, Heart, Mountain, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Family Vacation",
    tag: "Most Popular",
    icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
    intro: "Seamless visa processing for your loved ones to explore the world together.",
    description: "Whether it's a summer holiday in Europe or a relaxing beach trip to Bali, our dedicated team handles complete family documentation. We ensure synchronized visa applications for all members, including spouse, children, and parents, maximizing approval chances so you can focus on creating memories.",
    details: ["Group Applications", "Children/Parent Documentation", "Synchronized Travel Dates"]
  },
  {
    title: "Business Tour",
    tag: "Priority",
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />,
    intro: "Fast-track corporate visas for conferences, meetings, and global networking.",
    description: "Time is money in business. Our priority service handles single-entry and multiple-entry corporate visas (B-1/B-2, B-3, etc.). We assist with invitation letters, company documents, and prioritize processing for your crucial international engagements, keeping you ahead of the schedule.",
    details: ["Multi-Entry Solutions", "Priority Support", "Invitation Letter Assistance"]
  },
  {
    title: "Honeymoon Trip",
    tag: "Luxury",
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
    intro: "Romantic support for couples to start their journey in dream destinations.",
    description: "Begin your new life with a stress-free romantic getaway to Paris, Maldives, or Swiss Alps. Our special couples packages focus on smooth embassy interviews, specialized travel history builds, and premium support to ensure you get your visas without a hitch, allowing you to plan your special moments.",
    details: ["Special Couples Consultation", "Interview Coaching", "Romantic Destinations Focus"]
  },
  {
    title: "Adventure Quest",
    tag: "Trending",
    icon: <Mountain className="w-8 h-8 md:w-10 md:h-10" />,
    intro: "Visas for off-beat locations and adrenaline-pumping experiences.",
    description: "For the restless souls seeking trekking in Nepal, safaris in Africa, or Northern Lights in Iceland. We specialize in navigating complex visa processes for rare and exotic destinations, ensuring your adventure documentation is as solid as your spirit. Expedited services are available for last-minute expeditions.",
    details: ["Off-beat Destination Expert", "Complex Documentation", "Expedited Handling"]
  }
];

const TouristServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] px-6 overflow-hidden min-h-screen">
      
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${selectedService ? 'w-[1000px] h-[1000px] bg-amber-500/10 blur-[150px]' : 'w-[500px] h-[500px] bg-amber-500/5 blur-[100px]'}`}></div>

      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${selectedService ? 'blur-sm scale-95 opacity-20' : ''}`}>
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none transition-colors duration-500 hover:text-amber-300 cursor-default">
              Exclusive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-200 to-amber-500">
                Visa Solution
              </span>
            </h2>
            <p className="text-slate-500 max-w-lg font-medium text-sm md:text-lg">
              Unlock global mobility with our tailored visa streams, ensuring perfect documentation for every type of journey.
            </p>
          </div>
          <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-amber-500/30 via-transparent to-transparent mx-12 mb-5"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 hover:bg-black/50 hover:border-amber-500/30 cursor-pointer overflow-hidden transform-gpu hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]"
            >
              <div className="absolute top-7 right-7 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10 group-hover:bg-amber-500/10 transition-colors">
                <span className="text-amber-500/50 group-hover:text-amber-400 font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px]">
                  {service.tag}
                </span>
              </div>

              <div className="mb-10 w-20 h-20 rounded-3xl bg-amber-500/5 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:rotate-6 border border-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
                {service.icon}
              </div>

              <div className="space-y-4 relative z-10 min-h-[100px]">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed group-hover:text-slate-400 transition-colors line-clamp-2">
                  {service.intro}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 transition-all duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <ArrowUpRight size={16} className="text-amber-500/60 group-hover:text-amber-500" />
                <span className="text-amber-500 font-black text-[10px] uppercase tracking-widest italic transition-colors">Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP OVERLAY WITH COLORFUL SCROLLBAR --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-500">
          <div className="custom-scrollbar relative bg-[#0a0a0a] w-full max-w-4xl p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-amber-500/30 shadow-[0_0_100px_rgba(245,158,11,0.25)] overflow-hidden max-h-[90vh] overflow-y-auto transform-gpu animate-in slide-in-from-bottom duration-700">
            
            {/* Header Row: Icon & Mobile Close Button */}
            <div className="flex items-center justify-between md:justify-start gap-6 mb-10 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-400">
                {selectedService.icon}
              </div>

              {/* Mobile Close Button (Next to Icon) */}
              <button 
                onClick={() => setSelectedService(null)}
                className="md:hidden flex items-center gap-2 px-5 py-3 bg-amber-500 text-black rounded-2xl font-black uppercase tracking-tighter text-[11px] active:scale-95 shadow-lg shadow-amber-500/30"
              >
                Close <X size={16} />
              </button>

              {/* Desktop Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="hidden md:flex absolute top-0 right-0 text-amber-500/50 hover:text-amber-500 p-3 bg-white/5 rounded-full transition-all group hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                   <div className="space-y-3">
                      <span className="text-amber-500 font-black tracking-[0.3em] uppercase text-[10px] italic bg-amber-500/10 px-4 py-1.5 rounded-full inline-block">{selectedService.tag}</span>
                      <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">{selectedService.title}</h4>
                   </div>
                </div>

                <div className="space-y-8 border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12">
                   <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                      {selectedService.description}
                   </p>
                   
                   <div className="space-y-4 pt-6 border-t border-white/5">
                      <h5 className="text-amber-500/50 font-black uppercase tracking-widest text-[11px] mb-4">Core Protocols:</h5>
                      {selectedService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                           <span className="text-slate-200 text-sm md:text-base font-semibold">{detail}</span>
                        </div>
                      ))}
                   </div>
                </div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent animate-scan"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* COLORFUL NEON SCROLLBAR */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          margin: 30px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(234, 88, 12, 0.4);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #fbbf24;
        }

        @keyframes scan {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </section>
  );
};

export default TouristServices;