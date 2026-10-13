'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', resize);

    type Trail = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string };
    const colors = ['rgba(232,25,44,', 'rgba(0,212,200,', 'rgba(240,237,232,'];
    const trails: Trail[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * 800, y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4,
      life: Math.random() * 200, maxLife: 200 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * 3)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // Subtle grid
      ctx.strokeStyle = 'rgba(255,255,255,0.022)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      // Red glow
      const rg = ctx.createRadialGradient(w * 0.7, h * 0.35, 0, w * 0.7, h * 0.35, 400);
      rg.addColorStop(0, 'rgba(232,25,44,0.10)'); rg.addColorStop(1, 'transparent');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, w, h);
      // Aqua glow
      const ag = ctx.createRadialGradient(w * 0.88, h * 0.7, 0, w * 0.88, h * 0.7, 320);
      ag.addColorStop(0, 'rgba(0,212,200,0.08)'); ag.addColorStop(1, 'transparent');
      ctx.fillStyle = ag; ctx.fillRect(0, 0, w, h);
      // Light trails
      for (const t of trails) {
        t.x += t.vx; t.y += t.vy; t.life++;
        if (t.life > t.maxLife || t.x < 0 || t.x > w || t.y < 0 || t.y > h) {
          t.x = Math.random() * w; t.y = Math.random() * h;
          t.vx = (Math.random() - 0.5) * 1.4; t.vy = (Math.random() - 0.5) * 1.4;
          t.life = 0; t.maxLife = 200 + Math.random() * 200;
          t.color = colors[Math.floor(Math.random() * 3)];
        }
        const alpha = Math.sin((t.life / t.maxLife) * Math.PI) * 0.32;
        const len = 50;
        const g = ctx.createLinearGradient(t.x, t.y, t.x - t.vx * len, t.y - t.vy * len);
        g.addColorStop(0, t.color + alpha + ')'); g.addColorStop(1, t.color + '0)');
        ctx.beginPath(); ctx.strokeStyle = g; ctx.lineWidth = 1.5;
        ctx.moveTo(t.x, t.y); ctx.lineTo(t.x - t.vx * len, t.y - t.vy * len); ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', background: 'var(--ax-black)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Film grain */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`, backgroundSize: '256px 256px', pointerEvents: 'none', zIndex: 1, opacity: 0.55, mixBlendMode: 'overlay' }} />

      {/* Vertical center divider */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '52%', width: 1, background: 'linear-gradient(180deg, transparent 0%, var(--ax-border2) 20%, var(--ax-border2) 80%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Horizontal measurement line */}
      <div style={{ position: 'absolute', top: '62%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      {[0.1,0.2,0.3,0.4,0.6,0.7,0.8,0.9].map((p, i) => (
        <div key={i} style={{ position: 'absolute', top: '62%', left: `${p*100}%`, width: 1, height: 8, background: 'rgba(255,255,255,0.1)', zIndex: 3, transform: 'translateY(-4px)' }} />
      ))}
      <div style={{ position: 'absolute', top: 'calc(62% + 6px)', left: '52%', transform: 'translateX(10px)', zIndex: 5, pointerEvents: 'none' }}>
        <span className="ax-micro-label">X:52.00 / Y:62.00</span>
      </div>

      {/* Split grid */}
      <div className="ax-hero-grid" style={{ position: 'relative', zIndex: 10, display: 'grid' }}>

        {/* LEFT — text anchored bottom-left */}
        <div className="ax-hero-copy" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {/* Top status */}
          <div className="ax-hero-status" style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 12px', border: '1px solid var(--ax-border2)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ax-aqua)', boxShadow: '0 0 8px var(--ax-aqua)', animation: 'pulseRed 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>System Online</span>
            </div>
            <span className="ax-micro-label">v2.4.1</span>
            <span className="ax-micro-label" style={{ color: 'var(--ax-border2)' }}>—</span>
            <span className="ax-micro-label">2024.Q4</span>
          </div>

          {/* Vertical sidebar */}
          <div className="ax-hero-sidebar" style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 1, height: 60, background: 'var(--ax-border)' }} />
            <span className="ax-vert-label">Axiom Platform</span>
            <div style={{ width: 1, height: 60, background: 'var(--ax-border)' }} />
          </div>

          {/* Massive headline — glitch-reveal animation per word */}
          <h1 className="ax-font-display" style={{ fontSize: 'clamp(32px, 8vw, 120px)', fontWeight: 800, lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--ax-white)', margin: 0 }}>
            <span className="animate-glitch-reveal" style={{ opacity: 0, display: 'block', animationDelay: '0.05s' }}>BUILD</span>
            <span className="animate-glitch-reveal" style={{ opacity: 0, display: 'block', animationDelay: '0.18s' }}>THE</span>
            <span className="animate-glitch-reveal" style={{ opacity: 0, display: 'block', animationDelay: '0.31s' }}>SYSTEM</span>
            <span className="animate-glitch-reveal" style={{ opacity: 0, display: 'block', animationDelay: '0.44s', color: 'var(--ax-white2)' }}>
              THAT <span style={{ color: 'var(--ax-red)' }}>MOVES</span>
            </span>
            <span className="animate-glitch-reveal" style={{ opacity: 0, display: 'block', animationDelay: '0.57s' }}>
              BUSINESS<span style={{ color: 'var(--ax-red)' }}>.</span>
            </span>
          </h1>

          {/* Red line */}
          <div className="animate-line-expand" style={{ height: 3, background: 'linear-gradient(90deg, var(--ax-red), rgba(232,25,44,0.2))', marginTop: 28, marginBottom: 28, animationDelay: '0.75s', transform: 'scaleX(0)', transformOrigin: 'left' }} />

          {/* Copy */}
          <p className="animate-fade-up" style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ax-white2)', maxWidth: 400, marginBottom: 36, opacity: 0, animationDelay: '0.88s', fontWeight: 400, letterSpacing: '0.01em' }}>
            The command-center for high-growth teams. Run faster.{' '}
            <span style={{ color: 'var(--ax-white)', fontWeight: 600 }}>Ship smarter.</span>{' '}
            Scale without complexity.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', opacity: 0, animationDelay: '1.0s', marginBottom: 44 }}>
            <a href="/pricing" className="ax-btn-primary">Start Building →</a>
            <a href="#features" className="ax-btn-ghost">See Product ↓</a>
          </div>

          {/* Trust strip */}
          <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: 20, opacity: 0, animationDelay: '1.15s', paddingTop: 20, borderTop: '1px solid var(--ax-border)', flexWrap: 'wrap' }}>
            {[
              { val: '4,200+', label: 'Teams', color: 'var(--ax-red)' },
              { val: '99.9%', label: 'Uptime', color: 'var(--ax-aqua)' },
              { val: '$2.4B', label: 'Processed', color: 'var(--ax-red)' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.val.slice(0,-1)}<span style={{ color: s.color }}>{s.val.slice(-1)}</span></div>
                  <div style={{ fontSize: 9, color: 'var(--ax-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 3 }}>{s.label}</div>
                </div>
                {i < 2 && <div style={{ width: 1, height: 28, background: 'var(--ax-border2)' }} />}
              </div>
            ))}
            <div style={{ width: 1, height: 28, background: 'var(--ax-border2)' }} />
            <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="var(--ax-red)">
                  <polygon points="6,1 7.5,4.5 11,4.5 8.3,6.8 9.3,10.3 6,8.2 2.7,10.3 3.7,6.8 1,4.5 4.5,4.5" />
                </svg>
              ))}
              <span style={{ fontSize: 11, color: 'var(--ax-white2)', fontWeight: 700, marginLeft: 6 }}>4.9/5</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Cinematic SVG environment + floating cards */}
        <div className="ax-hero-art" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #090909 0%, #0c0c0c 50%, #080808 100%)' }} />

          {/* SVG architectural world */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 560 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="hRed" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E8192C" stopOpacity="0" />
                <stop offset="50%" stopColor="#E8192C" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hAqua" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00D4C8" stopOpacity="0" />
                <stop offset="50%" stopColor="#00D4C8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8192C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vAqua" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4C8" stopOpacity="0" />
                <stop offset="55%" stopColor="#00D4C8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="rBloom" cx="38%" cy="38%" r="50%">
                <stop offset="0%" stopColor="#E8192C" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="aBloom" cx="75%" cy="68%" r="38%">
                <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="560" height="900" fill="url(#rBloom)" />
            <rect width="560" height="900" fill="url(#aBloom)" />
            {/* Grid lines */}
            {Array.from({ length: 16 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 60} x2="560" y2={i * 60} stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            ))}
            {Array.from({ length: 15 }, (_, i) => (
              <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="900" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            ))}
            {/* Perspective structure */}
            <line x1="280" y1="0" x2="0" y2="900" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            <line x1="280" y1="0" x2="560" y2="900" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            <line x1="280" y1="0" x2="140" y2="900" stroke="rgba(255,255,255,0.028)" strokeWidth="1" />
            <line x1="280" y1="0" x2="420" y2="900" stroke="rgba(255,255,255,0.028)" strokeWidth="1" />
            {/* Accent lines */}
            <line x1="0" y1="300" x2="560" y2="300" stroke="url(#hRed)" strokeWidth="1.5" />
            <line x1="0" y1="560" x2="560" y2="560" stroke="url(#hAqua)" strokeWidth="1" />
            <line x1="0" y1="150" x2="560" y2="150" stroke="rgba(232,25,44,0.1)" strokeWidth="0.5" />
            <line x1="185" y1="0" x2="185" y2="900" stroke="url(#vRed)" strokeWidth="1.5" />
            <line x1="415" y1="0" x2="415" y2="900" stroke="url(#vAqua)" strokeWidth="1" />
            {/* Data nodes */}
            {([[185,300,'#E8192C'],[415,300,'#fff'],[185,560,'#fff'],[415,560,'#00D4C8'],[280,150,'#E8192C']] as [number,number,string][]).map(([x,y,c], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="3" fill={c} opacity="0.7" />
                <circle cx={x} cy={y} r="7" fill="none" stroke={c} strokeWidth="1" opacity="0.25" />
                {i === 0 && <circle cx={x} cy={y} r="14" fill="none" stroke={c} strokeWidth="0.5" opacity="0.12" />}
              </g>
            ))}
            {/* Corner brackets */}
            <path d="M 50 50 L 50 24 L 76 24" stroke="#00D4C8" strokeWidth="1.5" fill="none" opacity="0.45" />
            <path d="M 510 850 L 510 876 L 484 876" stroke="#E8192C" strokeWidth="1.5" fill="none" opacity="0.45" />
            {/* Micro labels */}
            <text x="80" y="22" fill="rgba(0,212,200,0.45)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">[ AX-CORE ]</text>
            <text x="418" y="590" fill="rgba(0,212,200,0.4)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">SYS:OK</text>
            <text x="50" y="320" fill="rgba(232,25,44,0.5)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">NODE:01</text>
            {/* Circuit paths */}
            <path d="M 280 0 L 280 140 L 340 140 L 340 220 L 415 220 L 415 300" stroke="rgba(0,212,200,0.22)" strokeWidth="1" fill="none" />
            <path d="M 185 300 L 185 430 L 120 430 L 120 560 L 50 560" stroke="rgba(232,25,44,0.18)" strokeWidth="1" fill="none" />
            {/* Diagonal motion lines */}
            <line x1="520" y1="80" x2="430" y2="210" stroke="rgba(232,25,44,0.18)" strokeWidth="1" />
            <line x1="460" y1="60" x2="370" y2="190" stroke="rgba(232,25,44,0.1)" strokeWidth="0.5" />
            <line x1="70" y1="720" x2="175" y2="580" stroke="rgba(0,212,200,0.15)" strokeWidth="1" />
          </svg>

          {/* Large outer ring — partially off screen */}
          <div style={{ position: 'absolute', top: '12%', right: '-12%', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(232,25,44,0.18)', boxShadow: '0 0 100px 30px rgba(232,25,44,0.05), inset 0 0 60px 20px rgba(232,25,44,0.04)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 'calc(12% + 36px)', right: 'calc(-12% + 36px)', width: 248, height: 248, borderRadius: '50%', border: '1px solid rgba(232,25,44,0.1)', pointerEvents: 'none' }} />

          {/* Floating card 1 — crosses divider line (left edge) */}
          <div className="animate-panel-slide" style={{ position: 'absolute', top: '26%', left: '-56px', width: 204, background: 'rgba(9,9,9,0.94)', border: '1px solid var(--ax-border2)', backdropFilter: 'blur(16px)', padding: 16, zIndex: 20, opacity: 0, animationDelay: '1.3s' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Revenue / Mo</span>
              <span style={{ fontSize: 9, color: 'var(--ax-aqua)', fontFamily: 'monospace' }}>↑ 34%</span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 10 }}>
              $2.4<span style={{ color: 'var(--ax-red)', fontSize: 20 }}>M</span>
            </div>
            <MiniSparkline color="var(--ax-aqua)" />
          </div>

          {/* Floating card 2 */}
          <div className="animate-panel-slide" style={{ position: 'absolute', bottom: '24%', right: '6%', width: 176, background: 'rgba(9,9,9,0.94)', border: '1px solid var(--ax-border2)', backdropFilter: 'blur(16px)', padding: 16, zIndex: 20, opacity: 0, animationDelay: '1.5s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-red)', boxShadow: '0 0 8px var(--ax-red)' }} />
              <span style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Active Pipelines</span>
            </div>
            <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.03em' }}>847</div>
            <div style={{ fontSize: 10, color: 'var(--ax-muted)', marginTop: 5 }}>+12 this hour</div>
          </div>

          {/* Floating card 3 — ops health */}
          <div className="animate-panel-slide" style={{ position: 'absolute', top: '53%', left: '4%', width: 220, background: 'rgba(9,9,9,0.94)', border: '1px solid var(--ax-border2)', backdropFilter: 'blur(16px)', padding: 16, zIndex: 20, opacity: 0, animationDelay: '1.7s' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Ops Health</span>
              <span style={{ fontSize: 9, color: 'var(--ax-aqua)', letterSpacing: '0.1em' }}>● LIVE</span>
            </div>
            {[
              { label: 'API Latency', val: '12ms' },
              { label: 'Deploy Queue', val: '3 jobs' },
              { label: 'Error Rate', val: '0.002%' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < 2 ? '1px solid var(--ax-border)' : 'none' }}>
                <span style={{ fontSize: 10, color: 'var(--ax-muted)' }}>{r.label}</span>
                <span style={{ fontSize: 10, color: 'var(--ax-aqua)', fontWeight: 700, fontFamily: 'monospace' }}>{r.val}</span>
              </div>
            ))}
          </div>

          {/* Version tag top-right */}
          <div style={{ position: 'absolute', top: 96, right: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, zIndex: 10 }}>
            <span className="ax-micro-label">AXIOM PLATFORM</span>
            <span className="ax-micro-label" style={{ color: 'var(--ax-border2)' }}>—————————</span>
            <span className="ax-micro-label">BUILD.247.PROD</span>
          </div>

          {/* Floating LIVE SYSTEM label */}
          <div className="ax-float-label animate-fade-in" style={{ top: '18%', right: '8%', zIndex: 25, opacity: 0, animationDelay: '2s', animationFillMode: 'forwards' }}>
            <span style={{ fontSize: 9, color: 'var(--ax-aqua)', letterSpacing: '0.16em', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>LIVE SYSTEM</span>
          </div>

          {/* Floating THROUGHPUT INDEX label */}
          <div className="ax-float-label ax-float-label-red animate-fade-in" style={{ top: '38%', right: '4%', zIndex: 25, opacity: 0, animationDelay: '2.2s', animationFillMode: 'forwards' }}>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.16em', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>THROUGHPUT <span style={{ color: 'var(--ax-red)', fontWeight: 700 }}>INDEX</span></span>
          </div>

          {/* Floating ACTIVE SIGNALS label */}
          <div className="ax-float-label animate-fade-in" style={{ bottom: '14%', right: '12%', zIndex: 25, opacity: 0, animationDelay: '2.4s', animationFillMode: 'forwards' }}>
            <span style={{ fontSize: 9, color: 'var(--ax-aqua)', letterSpacing: '0.16em', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>ACTIVE <span style={{ color: 'var(--ax-white)', fontWeight: 500 }}>SIGNALS</span></span>
          </div>

          {/* Scan line on right panel */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,200,0.35), transparent)', animation: 'scanLine 5s linear infinite', animationDelay: '2.2s' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(232,25,44,0.2), transparent)', animation: 'scanLine 8s linear infinite', animationDelay: '4s' }} />
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--ax-border2) 30%, var(--ax-border2) 70%, transparent)', zIndex: 20 }} />
    </section>
  );
}

function MiniSparkline({ color }: { color: string }) {
  const pts = [40, 28, 52, 38, 60, 44, 72, 52, 58, 68];
  const max = Math.max(...pts), min = Math.min(...pts);
  const h = 28, w = 148, step = w / (pts.length - 1);
  const points = pts.map((p, i) => `${i * step},${h - ((p - min) / (max - min)) * h}`).join(' ');
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      {pts.map((p, i) => i === pts.length - 1 ? (
        <circle key={i} cx={i * step} cy={h - ((p - min) / (max - min)) * h} r="3" fill={color} />
      ) : null)}
    </svg>
  );
}
