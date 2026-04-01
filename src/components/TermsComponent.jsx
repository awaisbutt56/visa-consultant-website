import React from 'react';
import { Scale, FileText, AlertCircle, CheckCircle2, Gavel, History, ShieldAlert } from 'lucide-react';

const TermsComponent = () => {
  const legalClauses = [
    {
      id: "CON-01",
      title: "Document Authenticity",
      icon: <FileText size={18} />,
      content: "Applicants are strictly mandated to provide 100% authentic, verifiable documentation. Any discovery of forged credentials results in immediate termination of the dossier and blacklisting from our server nodes.",
      status: "MANDATORY"
    },
    {
      id: "CON-02",
      title: "Intermediary Disclaimer",
      icon: <Gavel size={18} />,
      content: "VISACONSULT operates strictly as a legal facilitator. Final visa adjudication rests solely with the sovereign discretion of the respective embassy or consulate. We do not guarantee outcomes.",
      status: "LEGAL_LIMIT"
    },
    {
      id: "CON-03",
      title: "Non-Refundable Policy",
      icon: <AlertCircle size={18} />,
      content: "Once an application is digitally transmitted or physically submitted to the consulate, all service fees are categorized as 'Fully Earned' and are non-refundable under any circumstances.",
      status: "FINANCIAL"
    },
    {
      id: "CON-04",
      title: "System Usage Rights",
      icon: <History size={18} />,
      content: "By accessing our portal, you grant VISACONSULT the right to process your metadata for the sole purpose of visa processing. Unauthorized scraping of our portal is strictly prohibited.",
      status: "USAGE"
    }
  ];

  return (
    <div className="relative py-4 px-4 overflow-hidden group transform-gpu">
      
      {/* Background Aesthetic - Indigo Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-indigo-600/20"></div>

      {/* Header Section */}
      <div className="relative z-10 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <Scale size={16} className="text-indigo-500 animate-pulse" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-indigo-400">Section_02 // Legal_Terms</span>
        </div>
        
        {/* Responsive Text: 3xl Mobile / 5xl Desktop */}
        <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-8">
          Terms of <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600">
            Service Protocol.
          </span>
        </h2>
        
        <p className="max-w-2xl text-slate-500 text-[12px] md:text-[14px] font-bold uppercase tracking-widest leading-relaxed border-l-2 border-indigo-500/30 pl-6">
          Usage of VISACONSULT systems constitutes an irrevocable agreement to our legal framework. These terms ensure a secure and transparent processing environment for all applicants.
        </p>
      </div>

      {/* The Interactive Contract Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {legalClauses.map((clause, i) => (
          <div 
            key={i} 
            className="group/card relative p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:border-indigo-500/40 hover:bg-indigo-500/[0.02] transition-all duration-500 overflow-hidden"
          >
            {/* Animated Scanner Effect on Hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent -translate-y-full group-hover/card:translate-y-[400px] transition-all duration-[2s] ease-in-out"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="text-indigo-500 group-hover/card:scale-110 transition-transform duration-500">
                  {clause.icon}
                </div>
                <span className="text-[8px] font-black px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-500 group-hover/card:border-indigo-500/30 group-hover/card:text-indigo-400">
                  {clause.id}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-black text-white uppercase italic mb-4 tracking-tight group-hover/card:text-indigo-300">
                {clause.title}
              </h3>
              
              <p className="text-[11px] md:text-[13px] leading-relaxed text-slate-500 font-bold uppercase tracking-wide group-hover/card:text-slate-300 transition-colors">
                {clause.content}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                <span className="text-[9px] font-black text-indigo-500/60 uppercase tracking-widest">
                  Status: {clause.status}
                </span>
              </div>
            </div>

            {/* Subtle Corner Accents */}
            <div className="absolute bottom-4 right-4 opacity-10 group-hover/card:opacity-30">
              <ShieldAlert size={40} className="text-indigo-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Large Decorative Background Text */}
      <div className="absolute -bottom-10 -right-10 text-[12vw] font-black text-white/[0.01] italic select-none pointer-events-none group-hover:text-indigo-500/[0.03] transition-all duration-1000">
        AGREEMENT
      </div>

      {/* Floating Scale Icon */}
      <div className="absolute top-0 right-10 opacity-[0.02] animate-bounce duration-[5000ms] pointer-events-none">
        <Scale size={200} className="text-indigo-500" />
      </div>

    </div>
  );
};

export default TermsComponent;