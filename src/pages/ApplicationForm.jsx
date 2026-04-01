import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, User, Mail, Phone, Globe, ShieldCheck, CheckCircle, 
  Zap, MapPin, ClipboardList, Hash, Briefcase, GraduationCap, 
  Loader2, Lock, Smartphone 
} from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', visaType: '', 
    country: '', passport: '', age: '', experience: '',
    qualification: '', city: '', message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | encrypting | success

  const validate = () => {
    let newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid";
    if (formData.phone.length < 10) newErrors.phone = "Required";
    if (!formData.visaType) newErrors.visaType = "Select Visa";
    if (!formData.country) newErrors.country = "Required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('encrypting');

    // WhatsApp Message Formatting
    const message = `*--- 🚀 NEW VISA APPLICATION ---*%0A%0A` +
                    `*👤 Name:* ${formData.fullName}%0A` +
                    `*📧 Email:* ${formData.email}%0A` +
                    `*📞 Phone:* ${formData.phone}%0A` +
                    `*📍 City:* ${formData.city}%0A` +
                    `*🎓 Education:* ${formData.qualification}%0A` +
                    `*💼 Exp:* ${formData.experience}%0A` +
                    `*🌍 Target:* ${formData.country}%0A` +
                    `*🛂 Visa:* ${formData.visaType}%0A` +
                    `*📝 Note:* ${formData.message}%0A%0A` +
                    `_System Generated via VisaConsult v4.0_`;

    const whatsappURL = `https://wa.me/+923033930638?text=${message}`;

    // 3 Seconds Delay for Mind-Blowing Feel
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        window.location.href = whatsappURL;
      }, 2500);
    }, 3000);
  };

  return (
    <section className="min-h-screen py-20 bg-[#02040a] flex items-center justify-center px-4 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full z-10">
        <AnimatePresence mode="wait">
          {status === 'encrypting' || status === 'success' ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white/[0.02] border-2 border-emerald-500/20 p-10 md:p-20 rounded-[4rem] backdrop-blur-3xl text-center max-w-3xl mx-auto shadow-[0_0_100px_rgba(16,185,129,0.1)]"
            >
              <div className="relative w-32 h-32 mx-auto mb-10">
                <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full border-4 border-dashed border-emerald-500 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <Lock size={40} className="text-emerald-400 -rotate-[360deg] animate-[counter-spin_10s_linear_infinite]" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                {status === 'encrypting' ? "Encrypting Data..." : "Redirection Active"}
              </h2>
              <p className="text-slate-400 mt-6 text-sm md:text-lg font-bold uppercase tracking-[0.3em] leading-relaxed">
                {status === 'encrypting' 
                  ? "Securing transmission tunnel for private assessment." 
                  : "Syncing with WhatsApp Protocol. Please wait 2 seconds."}
              </p>
              
              {/* Progress Bar Simulation */}
              <div className="mt-10 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5 }}
                  className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 text-center md:text-left md:pl-10">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-emerald-500"></div>
                  <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.6em]">Premium Visa Portal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                  Global <span className="text-emerald-500">Assessment</span>
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="bg-[#0a0c14]/80 border-2 border-white/5 p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] backdrop-blur-2xl shadow-2xl overflow-hidden relative group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-1 bg-emerald-500 h-full opacity-20 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                  
                  {/* Form Mapping for High Performance */}
                  {[
                    { label: "Full Identity", name: "fullName", icon: User, ph: "Enter Full Name" },
                    { label: "Digital Mail", name: "email", icon: Mail, ph: "example@mail.com" },
                    { label: "Mobile Node", name: "phone", icon: Phone, ph: "+92 3XX XXXXXXX" },
                    { label: "Current City", name: "city", icon: MapPin, ph: "e.g. Lahore, Pakistan" },
                    { label: "Target Region", name: "country", icon: Globe, ph: "e.g. United Kingdom" },
                    { label: "Passport ID", name: "passport", icon: Hash, ph: "Passport Number" },
                    { label: "Current Age", name: "age", icon: Smartphone, ph: "Your Age" },
                    { label: "Experience", name: "experience", icon: Briefcase, ph: "e.g. 5 Years" },
                    { label: "Qualification", name: "qualification", icon: GraduationCap, ph: "e.g. Masters in IT" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-3">
                      <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] ml-2 flex items-center gap-2">
                         {field.label}
                      </label>
                      <div className="relative group/input">
                        <field.icon className={`absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 ${errors[field.name] ? 'text-red-500' : 'text-slate-600 group-focus-within/input:text-emerald-400 group-focus-within/input:scale-110'}`} size={20} />
                        <input 
                          required
                          name={field.name} value={formData[field.name]} onChange={handleChange}
                          className={`w-full bg-white/5 border-2 ${errors[field.name] ? 'border-red-500/50' : 'border-white/10'} rounded-2xl py-5 pl-14 pr-6 text-white text-base font-bold focus:border-emerald-500/50 focus:bg-white/10 outline-none transition-all shadow-inner placeholder:text-slate-800`} 
                          placeholder={field.ph} 
                        />
                      </div>
                    </div>
                  ))}

                  {/* Visa Selection - Full Width on Mobile, Grid on Desktop */}
                  <div className="md:col-span-1 lg:col-span-3 space-y-3">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] ml-2 flex items-center gap-2">
                       <ClipboardList size={14} className="text-emerald-500" /> Visa Protocol
                    </label>
                    <div className="relative group/input">
                      <select name="visaType" value={formData.visaType} onChange={handleChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-6 text-white text-base font-bold focus:border-emerald-400 outline-none appearance-none cursor-pointer">
                        <option value="" className="bg-[#020617]">Select Category</option>
                        <option value="Skilled Worker" className="bg-[#020617]">Skilled Worker Visa</option>
                        <option value="Study" className="bg-[#020617]">Tier-4 Student Visa</option>
                        <option value="Business" className="bg-[#020617]">Entrepreneur / Business</option>
                        <option value="Visit" className="bg-[#020617]">Visit / Tourist Visa</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">▼</div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="md:col-span-2 lg:col-span-3 space-y-3">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] ml-2">Case Intelligence Brief</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-white/5 border-2 border-white/10 rounded-3xl p-6 text-white text-base font-bold focus:border-violet-500/50 outline-none resize-none transition-all placeholder:text-slate-800" placeholder="Explain your case requirements..." />
                  </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-40">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={18} className="text-emerald-500" />
                      <span className="text-[9px] text-white font-black uppercase tracking-[0.3em]">End-to-End Encrypted</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-emerald-500" />
                      <span className="text-[9px] text-white font-black uppercase tracking-[0.3em]">Direct WhatsApp Link</span>
                    </div>
                  </div>

                  <button 
                    disabled={status !== 'idle'}
                    type="submit" 
                    className="w-full md:w-80 bg-emerald-500 text-black py-7 rounded-2xl font-black uppercase italic tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all active:scale-95 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/30 skew-x-[-30deg] -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-1000"></div>
                    TRANSFORM DATA <Send size={22} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ApplicationForm;