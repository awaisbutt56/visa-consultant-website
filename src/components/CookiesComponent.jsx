import React, { useState } from 'react';
import { Fingerprint, Cpu, Zap, BarChart3, ShieldCheck, Activity, Terminal } from 'lucide-react';

const CookiesComponent = () => {
  const [activeNode, setActiveNode] = useState(0);

  const cookieData = [
    { 
      id: "ESSENTIAL_CORE", 
      icon: <Cpu size={18} />, 
      title: "Core Infrastructure",
      subtitle: "Session_Persistence / Handshake_v4",
      content: "These are military-grade essential tokens required for secure handshakes between your browser and our global visa processing nodes. Without these, secure document transmission is impossible.",
      status: "STRICT_MANDATORY",
      color: "from-cyan-500 to-blue-600"
    },
    { 
      id: "GLOBAL_PERFORMANCE", 
      icon: <Zap size={18} />, 
      title: "Edge Optimization",
      subtitle: "Latency_Reduction / Cache_Stream",
      content: "Utilizes edge-caching to ensure high-speed delivery of heavy biometric dossiers and application forms. This reduces latency by 40% across international server clusters.",
      status: "OPTIMIZED_PERFORMANCE",
      color: "from-teal-400 to-cyan-500"
    },
    { 
      id: "ANALYTIC_STREAM", 
      icon: <BarChart3 size={18} />, 
      title: "Anonymized Insights",
      subtitle: "Traffic_Throughput / UX_Monitoring",
      content: "Monitors anonymized traffic patterns to detect system bottlenecks and optimize the user journey. No personal identity metadata is ever recorded in this stream.",
      status: "OPTIONAL_INSIGHTS",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="relative py-8 px-4 group transform-gpu overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 p-6 md:p-12 bg-white/[0.01] border border-white/5 rounded-[2.5rem] hover:border-cyan-500/20 transition-all duration-700">
        
        {/* Top Header - Compact */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Fingerprint size={16} className="text-cyan-500 animate-pulse" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-500/60 italic">Node_Selection_Protocol</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* LEFT SIDE: DYNAMIC CONTENT (Tabs Content) */}
          <div className="flex-grow space-y-6 w-full min-h-[250px] transition-all duration-500">
            <div key={activeNode} className="animate-in fade-in slide-in-from-left-4 duration-700">
               {/* Sizing: 3xl Mobile / 5xl Desktop */}
              <h2 className="text-2xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
                {cookieData[activeNode].title.split(' ')[0]} <br /> 
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${cookieData[activeNode].color}`}>
                  {cookieData[activeNode].title.split(' ')[1]}.
                </span>
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                 <Terminal size={12} className="text-cyan-800" />
                 <span className="text-[10px] font-mono text-cyan-700 uppercase tracking-widest">{cookieData[activeNode].subtitle}</span>
              </div>

              <p className="text-slate-500 text-[12px] md:text-[15px] font-bold uppercase tracking-widest leading-relaxed border-l-2 border-cyan-500/30 pl-6 italic">
                {cookieData[activeNode].content}
              </p>

              <div className="pt-6 flex items-center gap-4">
                 <div className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center gap-2 text-[9px] font-black text-cyan-400 tracking-widest">
                    <ShieldCheck size={12} /> STATUS: {cookieData[activeNode].status}
                 </div>
                 <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
                    <span className="text-[8px] text-slate-700 uppercase font-bold tracking-tighter transition-all">Node_Active</span>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE TABS (The Switchers) */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
            {cookieData.map((node, i) => (
              <button
                key={i}
                onClick={() => setActiveNode(i)}
                className={`w-full p-5 rounded-2xl border transition-all duration-500 group/btn relative overflow-hidden text-left
                  ${activeNode === i 
                    ? 'bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
              >
                {/* Active Indicator Light */}
                {activeNode === i && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 rounded-r-full"></div>
                )}

                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors duration-500 ${activeNode === i ? 'text-cyan-400 bg-cyan-500/20' : 'text-slate-600'}`}>
                    {node.icon}
                  </div>
                  <div>
                    <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeNode === i ? 'text-white' : 'text-slate-500'}`}>
                      {node.id}
                    </h4>
                    <p className="text-[8px] font-mono text-slate-700 mt-1 uppercase">Node_Index_0{i+1}</p>
                  </div>
                </div>

                {/* Aesthetic Detail: Micro Scanning line on active tab */}
                {activeNode === i && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Decorative Watermark */}
        <div className="absolute -bottom-4 left-6 text-[8vw] font-black text-white/[0.01] italic select-none pointer-events-none uppercase">
          Session_Cache
        </div>
      </div>

      {/* Styles for animation */}
      <style jsx>{`
        .animate-in {
          animation: slide-in-from-left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slide-in-from-left {
          from { transform: translateX(-15px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CookiesComponent;