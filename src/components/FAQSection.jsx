import React, { useState } from 'react';
import { MessageSquare, ChevronDown, Activity, Cpu, ShieldCheck } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      q: 'How long is the assessment?', 
      a: 'Our team typically completes a comprehensive initial profile assessment within 24 to 48 hours.',
      icon: <Activity size={16} />
    },
    { 
      q: 'Do you offer online meetings?', 
      a: 'Yes, we conduct global consultations via Zoom, Google Meet, or Microsoft Teams at your convenience.',
      icon: <Cpu size={16} />
    },
    { 
      q: 'Are your fees transparent?', 
      a: 'Absolutely. We provide a detailed fee structure upfront with zero hidden costs or surprise charges.',
      icon: <ShieldCheck size={16} />
    }
  ];

  return (
    <div className="w-full space-y-8">
      {/* 1. HIGH-CONTRAST SUPPORT WIDGET */}
      <div className="bg-[#0f111a] p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">System Online</span>
              </div>
              {/* Heading: Pure White for visibility */}
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic">
                Priority <span className="text-emerald-400">Support</span>
              </h4>
            </div>
            <div className="w-12 h-12 bg-emerald-500 text-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <MessageSquare size={22} fill="currentColor" />
            </div>
          </div>

          {/* Subtext: Light Silver (Gray-300) for readability */}
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-8">
            Average response time is <span className="text-white font-bold border-b-2 border-emerald-500">15 Minutes</span>. Connect with our experts now.
          </p>

          <button className="w-full py-5 bg-white text-black text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-emerald-500 transition-all duration-500 shadow-xl active:scale-95">
             Initialize Direct Chat
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC ACCORDION FAQS (Improved Visibility) */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] px-4 mb-4">Common Inquiries</h4>

        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`transition-all duration-500 rounded-[1.8rem] border overflow-hidden ${
              openIndex === i 
              ? 'bg-[#161925] border-emerald-500/50 shadow-lg' 
              : 'bg-[#0a0c14] border-white/10 hover:border-white/30'
            }`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left outline-none group/faq"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openIndex === i ? 'bg-emerald-500 text-black' : 'bg-white/5 text-emerald-400'}`}>
                   {faq.icon}
                </div>
                {/* Question: Always White or Bright Silver */}
                <span className={`text-sm md:text-lg font-bold tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-slate-200 group-hover/faq:text-white'}`}>
                  {faq.q}
                </span>
              </div>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                openIndex === i 
                ? 'rotate-180 bg-white border-white text-black' 
                : 'rotate-0 border-white/10 text-slate-400'
              }`}>
                <ChevronDown size={16} strokeWidth={3} />
              </div>
            </button>
            
            {/* Answer: Clean Silver-Gray for easy reading */}
            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
              <div className="px-6 pb-6 pt-2">
                <div className="h-[1px] w-full bg-white/10 mb-4"></div>
                <p className="text-sm md:text-base leading-relaxed text-slate-300 font-medium pl-4 border-l-2 border-emerald-500">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;