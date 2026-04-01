import React, { useState, useEffect, useRef } from 'react';

const PHASES = [
  { at: 0,  text: "Initializing Global Education Matrix...", sub: "BOOT_SEQ::0x00" },
  { at: 20, text: "Scanning 4,200+ Universities Worldwide...", sub: "SCAN::DB_UNIVERSITIES" },
  { at: 42, text: "Verifying Admission Protocols...", sub: "AUTH::PROTOCOL_v9.2" },
  { at: 63, text: "Syncing Global Visa Nodes...", sub: "SYNC::VISA_MESH_ACTIVE" },
  { at: 82, text: "Compiling Academic Profile...", sub: "COMPILE::PROFILE_COMPLETE" },
  { at: 96, text: "Launching Your Future...", sub: "STATUS::READY" },
];

const COUNTRIES = ['🇬🇧 UK', '🇺🇸 USA', '🇨🇦 CAN', '🇦🇺 AUS', '🇩🇪 GER', '🇫🇷 FRA', '🇳🇿 NZL', '🇸🇬 SGP'];

export default function LoaderStudyvisa() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [dots, setDots] = useState('');
  const canvasRef = useRef(null);

  // Progress
  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        const next = Math.min(p + 0.55, 100);
        const newPhase = PHASES.findLastIndex(ph => next >= ph.at);
        setPhase(Math.max(0, newPhase));
        return next;
      });
    }, 22);
    return () => clearInterval(t);
  }, []);

  // Glitch effect
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  // Animated dots
  useEffect(() => {
    const t = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 400);
    return () => clearInterval(t);
  }, []);

  // Canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 210 : 270,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.alpha})`;
        ctx.fill();
      });
      // Connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(220, 80%, 65%, ${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  const pct = Math.round(progress);
  const currentPhase = PHASES[phase];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&family=Inter:wght@300;400&display=swap');

        .ldr-root {
          position: fixed; inset: 0; z-index: 9999;
          background: #030711;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden; font-family: 'Space Mono', monospace;
        }

        /* ── BACKGROUND RINGS ── */
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid transparent;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: ringPulse 4s ease-in-out infinite;
        }
        .ring-1 { width: 320px; height: 320px; border-color: rgba(99,179,237,0.12); animation-delay: 0s; }
        .ring-2 { width: 480px; height: 480px; border-color: rgba(167,139,250,0.08); animation-delay: 0.6s; }
        .ring-3 { width: 640px; height: 640px; border-color: rgba(99,179,237,0.05); animation-delay: 1.2s; }
        .ring-4 { width: 820px; height: 820px; border-color: rgba(167,139,250,0.03); animation-delay: 1.8s; }
        @keyframes ringPulse {
          0%,100% { opacity: 0.4; transform: translate(-50%,-50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%,-50%) scale(1.03); }
        }

        /* rotating dashes */
        .ring-spin {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border: 1px dashed rgba(99,179,237,0.15);
          animation: spinCW 20s linear infinite;
        }
        .ring-spin-2 {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 560px; height: 560px;
          border: 1px dashed rgba(167,139,250,0.1);
          animation: spinCCW 28s linear infinite;
        }
        .ring-spin { width: 400px; height: 400px; }
        @keyframes spinCW  { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spinCCW { to { transform: translate(-50%,-50%) rotate(-360deg); } }

        /* corner dots on ring */
        .ring-dot {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #63b3ed;
          box-shadow: 0 0 10px #63b3ed, 0 0 20px #63b3ed;
          animation: dotGlow 2s ease-in-out infinite;
        }
        @keyframes dotGlow { 0%,100%{opacity:1} 50%{opacity:0.2} }

        /* ── CORE ICON ── */
        .icon-core {
          position: relative;
          width: 100px; height: 100px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 48px;
        }
        .hex {
          position: absolute; inset: 0;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, rgba(99,179,237,0.15), rgba(167,139,250,0.15));
          border: 1px solid rgba(99,179,237,0.3);
          animation: hexSpin 8s linear infinite;
        }
        .hex-inner {
          position: absolute; inset: 10px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, rgba(99,179,237,0.08), rgba(167,139,250,0.08));
          animation: hexSpin 6s linear infinite reverse;
        }
        @keyframes hexSpin { to { transform: rotate(360deg); } }
        .cap-icon {
          position: relative; z-index: 2;
          font-size: 36px;
          filter: drop-shadow(0 0 12px rgba(99,179,237,0.8)) drop-shadow(0 0 28px rgba(167,139,250,0.5));
          animation: iconFloat 3s ease-in-out infinite;
        }
        @keyframes iconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        /* orbit satellites */
        .orbit-ring {
          position: absolute; inset: -28px;
          border-radius: 50%;
          animation: orbitSpin 4s linear infinite;
        }
        .orbit-ring-2 {
          position: absolute; inset: -50px;
          border-radius: 50%;
          animation: orbitSpin 7s linear infinite reverse;
        }
        @keyframes orbitSpin { to { transform: rotate(360deg); } }
        .sat {
          position: absolute;
          width: 24px; height: 24px;
          background: #030711;
          border: 1px solid rgba(99,179,237,0.4);
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px;
          top: -12px; left: 50%; transform: translateX(-50%);
        }

        /* ── GLITCH TITLE ── */
        .glitch-wrap { position: relative; text-align: center; }
        .glitch-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(18px, 4vw, 26px);
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          position: relative;
        }
        .glitch-title.active::before,
        .glitch-title.active::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0; right: 0;
          overflow: hidden;
        }
        .glitch-title.active::before {
          color: #63b3ed;
          clip: rect(0, 9999px, 30%, 0);
          animation: glitchTop 0.12s steps(2) forwards;
        }
        .glitch-title.active::after {
          color: #a78bfa;
          clip: rect(70%, 9999px, 100%, 0);
          animation: glitchBot 0.12s steps(2) forwards;
        }
        @keyframes glitchTop {
          0%   { transform: translate(-3px, -2px); }
          50%  { transform: translate(3px, 2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitchBot {
          0%   { transform: translate(3px, 2px); }
          50%  { transform: translate(-3px, -2px); }
          100% { transform: translate(0); }
        }

        /* ── STATUS LOG ── */
        .status-log {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #63b3ed;
          letter-spacing: 0.12em;
          text-align: center;
          min-height: 18px;
          animation: fadeSwap 0.3s ease;
        }
        @keyframes fadeSwap { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .status-sub {
          font-size: 9px;
          color: rgba(167,139,250,0.6);
          letter-spacing: 0.25em;
          text-align: center;
          margin-top: 4px;
        }

        /* ── PROGRESS BAR ── */
        .progress-shell {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          height: 3px;
          border-radius: 2px;
          position: relative;
          overflow: visible;
        }
        .progress-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #63b3ed);
          background-size: 200% 100%;
          animation: barShimmer 2s linear infinite;
          position: relative;
          transition: width 0.3s ease;
        }
        @keyframes barShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .progress-glow {
          position: absolute;
          right: -2px; top: 50%;
          transform: translateY(-50%);
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa, 0 0 20px #8b5cf6, 0 0 40px rgba(139,92,246,0.4);
        }

        /* segmented ticks */
        .ticks {
          display: flex; gap: 3px; margin-top: 10px;
        }
        .tick {
          flex: 1; height: 4px; border-radius: 1px;
          background: rgba(255,255,255,0.05);
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .tick.lit {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          box-shadow: 0 0 6px rgba(139,92,246,0.6);
        }

        /* ── COUNTRY NODES ── */
        .nodes-row {
          display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
        }
        .node {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 10px;
          background: rgba(99,179,237,0.05);
          border: 1px solid rgba(99,179,237,0.15);
          border-radius: 4px;
          font-size: 9px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.1em;
          animation: nodeEntry 0.4s ease backwards;
        }
        .node-pulse {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 6px #34d399;
          animation: dotGlow 1.5s ease-in-out infinite;
          animation-delay: var(--d);
        }
        @keyframes nodeEntry { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }

        /* ── TERMINAL ── */
        .terminal {
          width: 100%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(99,179,237,0.1);
          border-radius: 8px;
          padding: 14px 16px;
          font-size: 9px;
          color: rgba(99,179,237,0.5);
          letter-spacing: 0.12em;
          line-height: 1.8;
        }
        .t-line { display: flex; gap: 8px; }
        .t-prompt { color: #8b5cf6; }
        .t-cursor {
          display: inline-block;
          width: 6px; height: 10px;
          background: #63b3ed;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          margin-left: 3px;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* PCT big number */
        .pct-num {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(48px, 10vw, 72px);
          font-weight: 900;
          background: linear-gradient(135deg, #63b3ed, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          letter-spacing: -0.02em;
          text-align: center;
          filter: drop-shadow(0 0 20px rgba(99,179,237,0.3));
        }
        .pct-label {
          font-size: 9px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.4em;
          text-align: center;
          margin-top: 4px;
        }
      `}</style>

      <div className="ldr-root">
        {/* Canvas particles */}
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

        {/* Rings */}
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <div className="ring ring-4" />
        <div className="ring-spin">
          <div className="ring-dot" style={{ top: '-3px', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="ring-dot" style={{ bottom: '-3px', left: '50%', transform: 'translateX(-50%)', animationDelay: '1s' }} />
        </div>
        <div className="ring-spin-2" />

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', width: '100%', maxWidth: '440px', padding: '0 24px' }}>

          {/* Icon */}
          <div className="icon-core">
            <div className="hex" />
            <div className="hex-inner" />
            <div className="orbit-ring">
              <div className="sat">🌐</div>
            </div>
            <div className="orbit-ring-2">
              <div className="sat" style={{ borderColor: 'rgba(167,139,250,0.4)' }}>📚</div>
            </div>
            <span className="cap-icon">🎓</span>
          </div>

          {/* Title */}
          <div className="glitch-wrap">
            <div
              className={`glitch-title${glitch ? ' active' : ''}`}
              data-text="Study Visa Protocol"
            >
              Study Visa{' '}
              <span style={{ background: 'linear-gradient(90deg,#63b3ed,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Protocol
              </span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <div className="status-log" key={phase}>{currentPhase.text}{dots}</div>
              <div className="status-sub">{currentPhase.sub}</div>
            </div>
          </div>

          {/* Big percent */}
          <div>
            <div className="pct-num">{pct}<span style={{ fontSize: '0.4em', verticalAlign: 'super' }}>%</span></div>
            <div className="pct-label">LOADING COMPLETE</div>
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%' }}>
            <div className="progress-shell">
              <div className="progress-fill" style={{ width: `${progress}%` }}>
                <div className="progress-glow" />
              </div>
            </div>
            <div className="ticks">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className={`tick${progress >= (i + 1) * 5 ? ' lit' : ''}`} />
              ))}
            </div>
          </div>

          {/* Country nodes */}
          <div className="nodes-row">
            {COUNTRIES.map((c, i) => (
              <div key={c} className="node" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="node-pulse" style={{ '--d': `${i * 0.2}s` }} />
                {c}
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="terminal">
            <div className="t-line">
              <span className="t-prompt">root@visa-sys:~$</span>
              <span>query --university-db --live</span>
            </div>
            <div className="t-line" style={{ marginTop: '4px' }}>
              <span className="t-prompt">&gt;</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>{currentPhase.sub}</span>
              <span className="t-cursor" />
            </div>
            <div className="t-line" style={{ marginTop: '4px' }}>
              <span className="t-prompt">&gt;</span>
              <span>nodes_active: {COUNTRIES.length} · uptime: 99.98%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}