import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'Visa Assessment', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    localStorage.setItem('inquiries', JSON.stringify([...existingInquiries, formData]));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', type: 'Visa Assessment', message: '' });
    }, 6000);
  };

  if (submitted) {
    return (
      /* Width increased to w-full with max-w-6xl for better desktop presence */
      <div className="w-full max-w-6xl mx-auto bg-[#0a0c14]/90 backdrop-blur-3xl p-12 md:p-20 rounded-[3.5rem] shadow-[0_0_60px_rgba(16,185,129,0.15)] border border-emerald-500/40 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 min-h-[600px]">
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative w-28 h-28 bg-emerald-500 text-black rounded-full flex items-center justify-center border-4 border-white/20 shadow-[0_0_30px_#10b981]">
            <CheckCircle size={56} strokeWidth={3} />
          </div>
        </div>
        <h3 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
          System <span className="text-emerald-400">Synced</span>
        </h3>
        <p className="text-slate-200 font-bold max-w-xl text-xl md:text-2xl leading-relaxed">
          Entry Logged: <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-8">{formData.name}</span>. 
          Our intelligence team is now reviewing your protocols.
        </p>
        <div className="mt-12 px-10 py-4 bg-white/5 border border-white/20 text-white text-[12px] font-black rounded-full uppercase tracking-[0.5em] animate-pulse shadow-inner">
          Data Transmission Successful
        </div>
      </div>
    );
  }

  return (
    /* lg:w-full max-w-7xl ensures it uses more horizontal space on desktop */
    <div className="w-full max-w-7xl mx-auto bg-[#0a0c14]/80 backdrop-blur-2xl p-8 md:p-16 rounded-[4rem] shadow-2xl border border-white/10 relative overflow-hidden group">
      
      {/* Intense Cinematic Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/15 blur-[120px] rounded-full group-hover:bg-emerald-500/25 transition-all duration-1000" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-600/15 blur-[120px] rounded-full group-hover:bg-violet-600/25 transition-all duration-1000" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[3px] bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
              <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.5em]">Secure Terminal</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase leading-none">
              Direct <span className="text-emerald-500">Inquiry</span>
            </h3>
          </div>
          <p className="text-slate-300 text-sm md:text-lg font-bold max-w-md italic border-l-2 border-emerald-500/50 pl-6">
            Establishing a high-priority link with our global visa consultants.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Name Input */}
            <div className="space-y-4">
              <label className="text-[11px] font-black text-white uppercase ml-2 tracking-[0.4em] flex items-center gap-2 opacity-70">
                <User size={14} className="text-emerald-400" /> Full Identity
              </label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                type="text" 
                placeholder="Name" 
                className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-3xl focus:ring-8 focus:ring-emerald-500/5 focus:border-emerald-500 focus:bg-white/10 transition-all outline-none font-black text-white text-lg placeholder:text-slate-700" 
              />
            </div>

            {/* Email Input */}
            <div className="space-y-4">
              <label className="text-[11px] font-black text-white uppercase ml-2 tracking-[0.4em] flex items-center gap-2 opacity-70">
                <Mail size={14} className="text-violet-400" /> Communication Node
              </label>
              <input 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                type="email" 
                placeholder="Email" 
                className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-3xl focus:ring-8 focus:ring-violet-500/5 focus:border-violet-400 focus:bg-white/10 transition-all outline-none font-black text-white text-lg placeholder:text-slate-700" 
              />
            </div>
          </div>
          
          {/* Service Selector */}
          <div className="space-y-4">
            <label className="text-[11px] font-black text-white uppercase ml-2 tracking-[0.4em] flex items-center gap-2 opacity-70">
              <Briefcase size={14} className="text-emerald-400" /> Operational Domain
            </label>
            <div className="relative">
              <select 
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-3xl focus:ring-8 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all outline-none font-black text-white text-lg appearance-none cursor-pointer"
              >
                <option className="bg-[#0a0c14]">Visa Assessment</option>
                <option className="bg-[#0a0c14]">Business Migration</option>
                <option className="bg-[#0a0c14]">Residency Permits</option>
                <option className="bg-[#0a0c14]">Global Education</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500 text-xl">▼</div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-4">
            <label className="text-[11px] font-black text-white uppercase ml-2 tracking-[0.4em] flex items-center gap-2 opacity-70">
              <MessageSquare size={14} className="text-violet-400" /> Intelligence Brief
            </label>
            <textarea 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6" 
              placeholder="Supply specific details for assessment..." 
              className="w-full px-8 py-6 bg-white/5 border-2 border-white/10 rounded-3xl focus:ring-8 focus:ring-violet-500/5 focus:border-violet-400 transition-all outline-none resize-none font-black text-white text-lg placeholder:text-slate-700"
            ></textarea>
          </div>

          {/* Epic Cyber Button */}
          <div className="flex justify-center">
  <button 
    type="submit"
    className="w-1/2 py-7 bg-white text-black font-black rounded-3xl hover:bg-emerald-500 transition-all duration-500 transform active:scale-[0.98] flex items-center justify-center gap-5 group overflow-hidden relative shadow-[0_0_40px_rgba(255,255,255,0.1)]"
  >
    <div className="absolute inset-0 bg-emerald-400/20 skew-x-[-30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000"></div>
    <span className="text-xl md:text-1xl uppercase tracking-[0.2em] italic">
      Transmit Data
    </span>
    <Send size={28} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;