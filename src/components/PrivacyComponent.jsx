import React from 'react';
import { Terminal, Shield, Zap, Lock, Globe, Fingerprint, Database, EyeOff, Server } from 'lucide-react';

const PrivacyComponent = () => {
  const securityLogs = [
    { 
      title: "ENCRYPTION_LAYER_ALPHA", 
      icon: <Lock size={20} />, 
      content: "All client dossiers are processed via 256-bit AES military-grade encryption. Data is fragmented across decentralized, air-gapped nodes to ensure zero-point failure and absolute confidentiality during high-stakes visa processing.", 
      tag: "LEVEL_01",
      code: "0x882_SEC"
    },
    { 
      title: "BIOMETRIC_ENCLAVE_PROTOCOL", 
      icon: <Fingerprint size={20} />, 
      content: "Identity documents and biometric markers are processed within hardware-level secure enclaves. We enforce a zero-retention policy on raw imagery; only encrypted hash-keys are used for authentication with embassy servers.", 
      tag: "LEVEL_02",
      code: "BIO_HASH_7"
    },
    { 
      title: "GLOBAL_COMPLIANCE_MATRIX", 
      icon: <Globe size={20} />, 
      content: "Strict adherence to GDPR (Europe), CCPA (California), and PDPA (Singapore) frameworks. Our legal architecture includes an automated 'Right to Erasure' trigger that purges sensitive metadata 12 months after case finalization.", 
      tag: "LEVEL_03",
      code: "ISO_27001"
    },
    { 
      title: "ANONYMOUS_STREAM_LOGGING", 
      icon: <Zap size={20} />, 
      content: "Session traffic is obfuscated via internal routing. We monitor system throughput and security integrity without profiling individual movements. Your digital footprint within VISACONSULT is non-persistent.", 
      tag: "LEVEL_04",
      code: "V_SHIELD_v2"
    },
    { 
      title: "THIRD_PARTY_FIREWALL", 
      icon: <EyeOff size={20} />, 
      content: "Strict zero-sharing mandate. Your professional and financial records are shielded from commercial data-mining entities. Access is restricted to authorized legal officers via multi-factor biometric authentication.", 
      tag: "LEVEL_05",
      code: "NO_LEAK_POL"
    }
  ];

  return (
    <div className="relative py-12 md:py-8 px-4 transform-gpu overflow-hidden">
      
      {/* Background Aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[100vw] h-[600px] bg-rose-600/5 blur-[100px] md:blur-[160px] rounded-full rotate-12 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none"></div>

      {/* Main Header */}
      <div className="relative z-10 mb-16 md:mb-8 max-w-4xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 mb-6 md:mb-8 backdrop-blur-md">
          <Terminal size={12} className="text-rose-500 animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-rose-400">Security_Protocol_Active</span>
        </div>
        
        {/* Sizing: 3xl Mobile / 5xl Desktop */}
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-[1] md:leading-[0.9] uppercase">
          Privacy <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 animate-gradient-x">
            Security Manifesto.
          </span>
        </h2>
        <div className="w-16 md:w-24 h-[1px] bg-rose-600 mt-6 md:mt-8 opacity-50"></div>
      </div>

      {/* Interaction Layer */}
      {/* Gap adjusted: 24 for mobile / 40 for desktop to keep it tight */}
      <div className="relative z-10 space-y-24 md:space-y-40">
        {securityLogs.map((log, i) => (
          <div key={i} className="group relative flex flex-col md:flex-row items-start gap-6 md:gap-24 transition-all duration-700">
            
            {/* The "Laser" Vertical Indicator - Adjusted for mobile position */}
            <div className="absolute -left-4 md:-left-12 top-0 h-full w-[1px] bg-gradient-to-b from-rose-600 via-transparent to-transparent opacity-20 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.8)] transition-all duration-500"></div>

            {/* Index Number - Reduced size for mobile to prevent overflow */}
            <div className="text-6xl md:text-8xl font-black text-white/[0.03] italic group-hover:text-rose-500/10 transition-all duration-500 select-none group-hover:skew-x-12 leading-none">
              0{i + 1}
            </div>

            {/* Content Core */}
            <div className="flex-grow space-y-4 md:space-y-6 w-full">
              <div className="flex items-center gap-4 md:gap-5">
                {/* Rotating Icon - Scaled for mobile */}
                <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl group-hover:border-rose-500/50 group-hover:bg-rose-500/10 group-hover:rotate-[360deg] transition-all duration-1000 shrink-0">
                  <div className="text-rose-500 group-hover:text-rose-300 scale-90 md:scale-100">
                    {log.icon}
                  </div>
                </div>
                
                <div className="space-y-1">
                   <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                     <h3 className="text-lg md:text-3xl font-black text-white italic tracking-tight uppercase group-hover:text-rose-400 transition-colors duration-300">
                        {log.title}
                      </h3>
                      <span className="text-[7px] md:text-[8px] font-mono text-slate-700 uppercase">{log.code}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-pulse"></div>
                     <span className="text-[8px] md:text-[9px] font-black text-rose-500/60 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                        {log.tag}
                      </span>
                   </div>
                </div>
              </div>

              {/* Data Content */}
              <div className="max-w-4xl relative">
                <p className="text-[11px] md:text-lg leading-relaxed text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-200 transition-colors duration-500">
                  {log.content}
                </p>
                {/* Decorative scanning line */}
                <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-rose-500/30 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            {/* Side Terminal Tag - Hidden on mobile & tablet */}
            <div className="hidden xl:block self-center opacity-20 group-hover:opacity-100 transition-opacity">
              <div className="text-[10px] font-black text-slate-500 rotate-90 tracking-[1.5em] flex items-center gap-4">
                <Server size={10} />
                ENCRYPTED_ARCHIVE_NODE
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Floating Large Icon - Adjusted size for mobile */}
      <div className="fixed bottom-10 md:bottom-20 right-4 md:right-10 pointer-events-none opacity-[0.02] md:opacity-[0.03] animate-pulse">
        <Database className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] text-rose-500" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>

    </div>
  );
};

export default PrivacyComponent;