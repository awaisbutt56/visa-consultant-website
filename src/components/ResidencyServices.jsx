import React from 'react';
import { Landmark, Globe, Briefcase, Users, Cpu, ShieldCheck, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Golden Visa",
    highlight: "EU Protocol",
    desc: "Direct path to European residency via strategic property or capital investment. Full family inclusion.",
    icon: <Landmark className="w-6 h-6" />,
    code: "NODE_EU_01",
    tag: "Most Popular"
  },
  {
    title: "EB-5 Program",
    highlight: "USA Direct",
    desc: "The fastest legal route to a US Green Card through job-creating investments in targeted areas.",
    icon: <Globe className="w-6 h-6" />,
    code: "NODE_US_05",
    tag: "High Priority"
  },
  {
    title: "Startup Visa",
    highlight: "Global Innovation",
    desc: "For entrepreneurs looking to scale in tech-friendly ecosystems like Canada or the UAE.",
    icon: <Cpu className="w-6 h-6" />,
    code: "NODE_INN_09",
    tag: "Fast Track"
  },
  {
    title: "Family Security",
    highlight: "Heritage Protection",
    desc: "Ensure your next generation holds global access. Multi-national residency audits and execution.",
    icon: <Users className="w-6 h-6" />,
    code: "NODE_FAM_04",
    tag: "Secure"
  }
];

const ResidencyServices = () => {
  return (
    <section className="relative py-24 bg-[#050505] px-6 overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[10rem] font-black text-white/[0.01] italic select-none pointer-events-none uppercase">
        Services
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Swag */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-amber-500"></div>
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.5em] uppercase italic">Service Modules</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Solutions</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Tech Info */}
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-amber-500 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <span className="font-mono text-[8px] text-slate-700 tracking-widest">{service.code}</span>
              </div>

              {/* Service Content */}
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-amber-500/60 font-bold uppercase tracking-widest">
                    {service.highlight}
                  </p>
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="text-[9px] font-black text-white uppercase italic tracking-widest">Audit Protocol</span>
                 <ChevronRight className="w-4 h-4 text-amber-500" />
              </div>

              {/* Hover Background Animation */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Subtle Scan Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Global Verification Footer */}
        <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#0a0a0a] to-[#050505] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-amber-500/20 flex items-center justify-center relative">
                 <ShieldCheck className="w-6 h-6 text-amber-500" />
                 <div className="absolute inset-0 border border-amber-500/40 rounded-full animate-ping"></div>
              </div>
              <div>
                 <h4 className="text-white font-bold italic uppercase tracking-tight">100% Legal Compliance</h4>
                 <p className="text-slate-600 text-[10px] uppercase tracking-widest mt-1">Global audit standards applied to every application.</p>
              </div>
           </div>
           
           <div className="flex items-center gap-12">
              <div className="text-center">
                 <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Response Time</div>
                 <div className="text-xl font-black text-white italic">{"<"} 24H</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="text-center">
                 <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Success Rate</div>
                 <div className="text-xl font-black text-amber-500 italic">99.8%</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ResidencyServices;