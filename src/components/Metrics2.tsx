'use client';

import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ val, pfx = '', sfx = '', started }: { val: number; pfx?: string; sfx?: string; started: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = val;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(ease * end);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, val]);
  return <>{pfx}{val % 1 !== 0 ? display.toFixed(2) : Math.round(display)}{sfx}</>;
}

export default function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="metrics"
      style={{ position: 'relative', overflow: 'hidden', background: '#050505', minHeight: 680 }}
    >
      {/* LAYER 1: Full-bleed SVG canyon/terrain environment */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 1440 680"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="60%" stopColor="#0a0808" />
            <stop offset="100%" stopColor="#0d0505" />
          </linearGradient>
          <linearGradient id="mRedGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8192C" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mAquaGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="mBloom1" cx="25%" cy="40%" r="35%">
            <stop offset="0%" stopColor="#E8192C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mBloom2" cx="75%" cy="35%" r="30%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="1440" height="680" fill="url(#mSky)" />
        <rect width="1440" height="680" fill="url(#mBloom1)" />
        <rect width="1440" height="680" fill="url(#mBloom2)" />

        {/* Canyon terrain silhouettes */}
        {/* Far left mesa */}
        <path d="M 0 680 L 0 420 L 60 380 L 120 360 L 180 340 L 220 320 L 260 310 L 300 330 L 340 360 L 380 400 L 420 440 L 460 480 L 500 520 L 540 560 L 580 600 L 620 640 L 660 680 Z" fill="#0a0808" opacity="0.9" />
        {/* Left canyon wall */}
        <path d="M 0 680 L 0 460 L 40 440 L 80 420 L 120 400 L 160 380 L 200 370 L 240 360 L 280 370 L 320 390 L 360 420 L 400 460 L 440 500 L 480 540 L 520 580 L 560 620 L 600 660 L 640 680 Z" fill="#0d0a0a" opacity="0.7" />
        {/* Right canyon wall */}
        <path d="M 1440 680 L 1440 380 L 1400 360 L 1360 340 L 1320 320 L 1280 310 L 1240 300 L 1200 310 L 1160 330 L 1120 360 L 1080 400 L 1040 440 L 1000 480 L 960 520 L 920 560 L 880 600 L 840 640 L 800 680 Z" fill="#0a0808" opacity="0.9" />
        {/* Far right mesa */}
        <path d="M 1440 680 L 1440 440 L 1380 420 L 1320 400 L 1260 390 L 1200 380 L 1140 390 L 1080 420 L 1020 460 L 960 500 L 900 540 L 840 580 L 780 620 L 720 660 L 680 680 Z" fill="#0d0a0a" opacity="0.7" />
        {/* Canyon floor */}
        <path d="M 400 680 L 420 620 L 460 580 L 520 560 L 600 550 L 700 545 L 800 545 L 900 550 L 980 560 L 1040 580 L 1080 620 L 1100 680 Z" fill="#080606" opacity="0.95" />

        {/* LAYER 2: Grid / system layer */}
        {/* Perspective grid on canyon floor */}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`fg${i}`} x1={400 + i * 100} y1={680} x2={720} y2={545} stroke="rgba(232,25,44,0.06)" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`fh${i}`} x1={400} y1={680 - i * 22} x2={1100} y2={680 - i * 22} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}

        {/* Horizon accent lines */}
        <line x1="0" y1="340" x2="1440" y2="340" stroke="rgba(232,25,44,0.08)" strokeWidth="1" />
        <line x1="0" y1="360" x2="1440" y2="360" stroke="rgba(0,212,200,0.05)" strokeWidth="0.5" />

        {/* Vertical measurement lines */}
        {[240, 480, 720, 960, 1200].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x} y2="680" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
        ))}

        {/* LAYER 3: Data overlay — coordinate markers */}
        {/* Crosshair markers at stat positions */}
        {[
          { x: 180, y: 300, color: '#E8192C' },
          { x: 480, y: 280, color: '#00D4C8' },
          { x: 760, y: 270, color: '#E8192C' },
          { x: 1040, y: 280, color: '#00D4C8' },
        ].map((pt, i) => (
          <g key={i}>
            <line x1={pt.x - 12} y1={pt.y} x2={pt.x + 12} y2={pt.y} stroke={pt.color} strokeWidth="1" opacity="0.4" />
            <line x1={pt.x} y1={pt.y - 12} x2={pt.x} y2={pt.y + 12} stroke={pt.color} strokeWidth="1" opacity="0.4" />
            <circle cx={pt.x} cy={pt.y} r="3" fill={pt.color} opacity="0.6" />
            <circle cx={pt.x} cy={pt.y} r="8" fill="none" stroke={pt.color} strokeWidth="0.5" opacity="0.25" />
          </g>
        ))}

        {/* Connecting lines between data points */}
        <path d="M 180 300 L 480 280 L 760 270 L 1040 280" stroke="rgba(0,212,200,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 8" />

        {/* Micro coordinate labels */}
        <text x="60" y="330" fill="rgba(232,25,44,0.35)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">LAT:34.0522</text>
        <text x="1300" y="330" fill="rgba(0,212,200,0.35)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">LON:118.2437</text>
        <text x="700" y="538" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">GROUND ZERO</text>

        {/* Scan line */}
        <line x1="0" y1="0" x2="1440" y2="0" stroke="rgba(0,212,200,0.3)" strokeWidth="1" style={{ animation: 'scanLine 6s linear infinite' }} />
      </svg>

      {/* LAYER 4: Section header */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: 72, paddingBottom: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: 'var(--ax-red)' }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--ax-red)', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>Performance Index</span>
          <div style={{ width: 24, height: 1, background: 'var(--ax-red)' }} />
        </div>
        <h2 className="ax-font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: 'var(--ax-white)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Numbers that <span style={{ color: 'var(--ax-red)' }}>define</span> the system
        </h2>
      </div>

      {/* LAYER 4: Stats floating in scene space — NO BOXES */}
      <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '40px 60px 60px' }}>
        {[
          { val: 4200, sfx: '+', label: 'Teams Worldwide', note: 'Active orgs on platform', color: '#E8192C', x: '12%', y: '38%' },
          { val: 99.98, sfx: '%', label: 'Uptime SLA', note: 'Zero-downtime deployments', color: '#00D4C8', x: '36%', y: '52%' },
          { val: 2.1, pfx: '$', sfx: 'M', label: 'Avg Rev / Team', note: 'Revenue unlocked annually', color: '#E8192C', x: '60%', y: '44%' },
          { val: 18, sfx: 'ms', label: 'Response Latency', note: 'Median across all endpoints', color: '#00D4C8', x: '82%', y: '36%' },
        ].map((m, i) => (
          <div key={i} style={{ padding: '40px 32px', position: 'relative' }}>
            {/* Accent line — no box */}
            <div style={{ height: 2, width: 28, background: m.color, marginBottom: 16, boxShadow: `0 0 12px ${m.color}` }} />
            {/* Giant floating number */}
            <div style={{
              fontSize: 'clamp(52px, 5.5vw, 88px)',
              fontWeight: 800,
              color: m.color,
              fontFamily: 'var(--font-display)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: 10,
              textShadow: `0 0 40px ${m.color}40`,
            }}>
              <AnimatedCounter val={m.val} pfx={m.pfx} sfx={m.sfx} started={started} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', marginBottom: 4 }}>
              {m.label}
            </div>
            <div style={{ fontSize: 10, color: 'var(--ax-muted)' }}>{m.note}</div>
            {/* Vertical separator — not a box border */}
            {i < 3 && <div style={{ position: 'absolute', right: 0, top: '20%', bottom: '20%', width: 1, background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }} />}
          </div>
        ))}
      </div>

      {/* Bottom strip — stats embedded in scene */}
      <div style={{ position: 'relative', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[
          { val: '12B+', label: 'Events / month', color: 'var(--ax-red)' },
          { val: '340ms', label: 'Signal-to-action', color: 'var(--ax-aqua)' },
          { val: '98%', label: 'Team adoption rate', color: 'var(--ax-red)' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '20px 60px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.val}</div>
            <div style={{ width: 1, height: 24, background: 'var(--ax-border2)' }} />
            <div style={{ fontSize: 10, color: 'var(--ax-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
