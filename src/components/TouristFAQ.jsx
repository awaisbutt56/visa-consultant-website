import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Globe2, Clock, Landmark, BadgeCheck, Zap, HelpCircle, ArrowRight } from 'lucide-react';

const faqs = [
  { id: "01", question: "Visa Processing Timeline?", answer: "Typically, it takes 10-15 working days depending on the destination. We provide real-time tracking.", icon: <Clock className="w-5 h-5" /> },
  { id: "02", question: "Guarantee Approval?", answer: "Our 98% success rate comes from rigorous document auditing before submission.", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: "03", question: "Countries Covered?", answer: "UK, USA, Schengen, Canada, and major Asian hubs like Singapore and Dubai.", icon: <Globe2 className="w-5 h-5" /> },
  { id: "04", question: "Rejection Protocol?", answer: "We offer post-rejection analysis and re-file with corrected documentation.", icon: <HelpCircle className="w-5 h-5" /> },
  { id: "05", question: "Mandatory Documents?", answer: "Passport (6m), bank statements, and photos. We provide a custom checklist.", icon: <Landmark className="w-5 h-5" /> },
  { id: "06", question: "Interview Prep?", answer: "We conduct mock interviews and provide embassy question sets.", icon: <BadgeCheck className="w-5 h-5" /> },
  { id: "07", question: "Family Applications?", answer: "Yes, we specialize in synchronized group and family approvals.", icon: <Sparkles className="w-5 h-5" /> },
  { id: "08", question: "Urgent Processing?", answer: "24-hour express processing available for Dubai and Turkey.", icon: <Zap className="w-5 h-5" /> }
];

const TouristFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <section className="relative py-16 bg-[#050505] px-6 overflow-hidden min-h-[600px] flex items-center">
      
      {/* Performance Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className={`max-w-7xl mx-auto w-full relative z-10 transition-all duration-500 ${activeFAQ ? 'blur-md scale-95 opacity-20' : ''}`}>
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          
          {/* Left Side: Fixed 3xl/5xl Heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 mb-4">
               <span className="text-amber-500 font-black text-[10px] tracking-[0.3em] uppercase italic">Support Center</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              Client <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Intel Feed
              </span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Quick access to our core protocols. Click any query to expand the encrypted data.
            </p>
          </div>

          {/* Right Side: Small Sleek Question Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                onClick={() => setActiveFAQ(faq)}
                className="group relative bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl cursor-pointer hover:border-amber-500/40 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <span className="text-amber-500/30 font-mono text-xs font-bold">{faq.id}</span>
                      <h3 className="text-sm md:text-base font-bold text-slate-300 group-hover:text-white transition-colors tracking-tight">
                        {faq.question}
                      </h3>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-amber-500 transition-all -rotate-45 group-hover:rotate-0" />
                </div>
                {/* Underline Effect */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Mind-Blowing Focus Overlay --- */}
      {activeFAQ && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 transition-all duration-500 animate-in fade-in">
          {/* Overlay Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setActiveFAQ(null)}></div>

          <div className="relative bg-[#0d0d0d] border border-amber-500/30 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(245,158,11,0.15)] overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Tech Header */}
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                    {activeFAQ.icon}
                  </div>
                  <div>
                    <span className="text-amber-500/50 font-mono text-[10px] tracking-widest uppercase">Protocol {activeFAQ.id}</span>
                    <h4 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">{activeFAQ.question}</h4>
                  </div>
               </div>
               <button 
                  onClick={() => setActiveFAQ(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-all"
               >
                  <X className="w-6 h-6" />
               </button>
            </div>

            {/* Content */}
            <div className="space-y-6 relative z-10">
               <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                  {activeFAQ.answer}
               </p>
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-amber-500/40 font-mono text-[9px] uppercase tracking-[0.5em] italic animate-pulse">Sync Complete // 100%</span>
                  <button 
                    onClick={() => setActiveFAQ(null)}
                    className="text-white font-black text-[10px] uppercase tracking-widest italic border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    Close Intel
                  </button>
               </div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-scan"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </section>
  );
};

export default TouristFAQ;