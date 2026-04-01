import React, { useState } from 'react';
import { FileText, Fingerprint, CreditCard, TicketCheck, X, CheckCircle2, Navigation } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Document Audit",
    intro: "Detailed review of your passports, photos, and statements.",
    description: "Our experts perform a multi-point audit on all your submitted documents. We verify passport validity, photograph compliance, financial stability proofs, and travel itinerary consistency. This crucial step minimizes risk and ensures your application is absolutely bulletproof before submission.",
    icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
    checklist: ["Passport Validity Check", "Photo Compliance Verify", "Financial Proofs Audit"]
  },
  {
    id: "02",
    title: "Biometric Sync",
    intro: "Scheduling and assistance for fingerprint and photo sessions.",
    description: "Once docs are ready, we handle the complex biometric scheduling across different embassy systems. We provide detailed guidance on the biometric process, location specifics, and necessary identification documents, ensuring your in-person appointment is smooth, quick, and stress-free.",
    icon: <Fingerprint className="w-6 h-6 md:w-8 md:h-8" />,
    checklist: [" Embassy Slot Booking", "Biometric Center Guide", "Appointment Confirmation"]
  },
  {
    id: "03",
    title: "Fee Clearance",
    intro: "Secure processing of embassy fees and consultancy charges.",
    description: "Embassy and visa fee structures can be tricky. We provide a transparent breakdown and facilitate secure, real-time payment processing for all required fees. This includes consulate fees, service charges, and any additional expedited processing costs, giving you a full digital receipt and peace of mind.",
    icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
    checklist: ["Consulate Fee Payment", "Consultancy Charges Sync", "Digital Payment Receipt"]
  },
  {
    id: "04",
    title: "Visa Grant",
    intro: "Final collection of your stamped passport or digital e-visa.",
    description: "The moment of truth! We monitor the application status around the clock. Once granted, we assist in the prompt collection of your passport with the visa stamp or the secure retrieval of your digital e-visa. We also provide a complete arrival protocol guide for your destination, finalizing your journey's setup.",
    icon: <TicketCheck className="w-6 h-6 md:w-8 md:h-8" />,
    checklist: ["Status Tracking", "Passport Collection Assist", "Arrival Protocol Guide"]
  }
];

const TouristProcess = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section className="relative py-16 bg-[#050505] px-6 overflow-hidden min-h-screen">
      
      {/* Dynamic Background Glow - Pulse */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${selectedStep ? 'w-[800px] h-[800px] bg-amber-500/10 blur-[120px]' : 'w-[400px] h-[400px] bg-amber-500/5 blur-[80px]'}`}></div>

      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${selectedStep ? 'blur-sm scale-95 opacity-30' : ''}`}>
        
        {/* Header Section - Fixed Text Sizes 3xl/5xl */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none transition-colors hover:text-amber-300">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-500">
                Stealth Process
              </span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-lg font-medium text-sm md:text-lg">
              A highly optimized 4-step workflow designed to take you from documentation to destination without the stress.
            </p>
          </div>

          {/* New Right Side: Live Network Tracker */}
          <div className="flex-1 flex flex-col items-center md:items-end space-y-4 md:space-y-6 pt-8 md:pt-0 border-t md:border-t-0 border-white/5 w-full max-w-lg md:max-w-xl mx-auto md:mx-0">
             <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0a0a] border border-amber-500/10">
                <div className="flex -space-x-1">
                   {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[7px] text-white font-bold animate-pulse" style={{ animationDelay: `${i*0.2}s` }}>UK</div>
                   ))}
                </div>
                <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px]">Applications Tracking</span>
             </div>
             <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent">
                <div className="absolute inset-x-0 h-full bg-amber-500 animate-process-line"></div>
             </div>
             <span className="text-slate-500 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.5em] italic animate-pulse">Syncing embassy servers...</span>
          </div>
        </div>

        {/* Process Grid (Clickable Cards) */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent">
             <div className="absolute inset-0 bg-amber-500 w-20 animate-process-line"></div>
          </div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedStep(step)}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 cursor-pointer transform-gpu transition-all duration-500 hover:border-amber-500/30 hover:bg-black/50 hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]"
            >
              
              {/* Step Number & Icon Circle */}
              <div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-black border border-white/10 group-hover:border-amber-500/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] flex items-center justify-center text-amber-500 transition-all duration-500 group-hover:scale-105">
                 <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-black px-2.5 py-1 rounded italic transition-colors">
                    {step.id}
                 </span>
                 {step.icon}
                 <div className="absolute inset-[-4px] border-2 border-dashed border-amber-500/0 rounded-full group-hover:border-amber-500/20 group-hover:rotate-180 transition-all duration-1000"></div>
              </div>

              {/* Title & Intro */}
              <div className="mt-8 space-y-3 min-h-[100px]">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[250px] mx-auto md:mx-0 group-hover:text-slate-400">
                  {step.intro}
                </p>
              </div>

              {/* Tech Label Hint on Hover */}
              <div className="mt-8 flex items-center gap-3 transition-all duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 w-full justify-center md:justify-start">
                 <Navigation size={16} className="text-amber-500/60" />
                 <span className="text-amber-500/0 group-hover:text-amber-500 font-black text-[10px] uppercase tracking-widest italic transition-colors">Detailed Specs</span>
              </div>
              
              {/* Decorative Corner Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/40 transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Expanding Checklist Overlay (Click par open hoga) --- */}
      {selectedStep && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="relative bg-[#0a0a0a] w-full max-w-4xl p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-amber-500/30 shadow-[0_0_100px_rgba(245,158,11,0.25)] overflow-hidden transform-gpu animate-in slide-in-from-bottom duration-700">
            
            {/* Background Map Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>

            {/* Close Button */}
            <button 
              onClick={() => setSelectedStep(null)}
              className="absolute top-8 right-8 text-amber-500/50 hover:text-amber-500 p-3 bg-white/5 rounded-full transition-all group hover:scale-110 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-center relative z-10">
                
                {/* Left Visual Part */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                   <div className="w-24 h-24 rounded-full bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-all">
                      {selectedStep.icon}
                   </div>
                   <div className="space-y-3">
                      <span className="text-amber-500 font-black tracking-[0.3em] uppercase text-[10px] italic bg-amber-500/10 px-4 py-1.5 rounded-full">{selectedStep.id} Protocol</span>
                      <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">{selectedStep.title}</h4>
                   </div>
                </div>

                {/* Right Detailed Content */}
                <div className="space-y-8 border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0 md:pl-12">
                   <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-medium">
                      {selectedStep.description}
                   </p>
                   
                   {/* Key Benefits */}
                   <div className="space-y-4 pt-6 border-t border-white/5">
                      <h5 className="text-white font-black uppercase tracking-widest text-[11px] mb-4">Internal Checklist:</h5>
                      {selectedStep.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-amber-500" />
                           <span className="text-slate-200 text-sm md:text-base font-semibold">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
            </div>
            
            {/* Tech Scanline Effect on Overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent animate-scan"></div>
          </div>
        </div>
      )}

      {/* Decorative Golden Blur (Corner) */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <style jsx>{`
        @keyframes process-line {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-process-line { animation: process-line 6s infinite linear; }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </section>
  );
};

export default TouristProcess;