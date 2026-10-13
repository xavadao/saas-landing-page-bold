'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ProductPageContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeModule, setActiveModule] = useState(0);

  // Animated canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Horizontal scan lines
      for (let y = 0; y < canvas.height; y += 3) {
        ctx.fillStyle = `rgba(255,255,255,${0.012 + Math.sin(y * 0.1 + t * 0.3) * 0.006})`;
        ctx.fillRect(0, y, canvas.width, 1);
      }

      // Moving diagonal lines
      ctx.save();
      for (let i = -5; i < 20; i++) {
        const x = (i * 160 + (t * 40) % 160) - 160;
        ctx.strokeStyle = `rgba(220,38,38,${0.03 + Math.sin(i + t) * 0.01})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + canvas.height * 0.4, canvas.height);
        ctx.stroke();
      }
      ctx.restore();

      // Data grid
      const gx = 60, gy = 60;
      for (let xi = 0; xi < canvas.width; xi += gx) {
        ctx.strokeStyle = `rgba(255,255,255,0.025)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(xi, 0);
        ctx.lineTo(xi, canvas.height);
        ctx.stroke();
      }
      for (let yi = 0; yi < canvas.height; yi += gy) {
        ctx.strokeStyle = `rgba(255,255,255,0.025)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, yi);
        ctx.lineTo(canvas.width, yi);
        ctx.stroke();
      }

      // Aqua glow pulse
      const grd = ctx.createRadialGradient(canvas.width * 0.75, canvas.height * 0.4, 0, canvas.width * 0.75, canvas.height * 0.4, 400);
      grd.addColorStop(0, `rgba(6,182,212,${0.04 + Math.sin(t * 0.7) * 0.02})`);
      grd.addColorStop(1, 'rgba(6,182,212,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += 0.008;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const modules = [
    {
      id: '01',
      title: 'COMMAND\nCENTER',
      sub: 'Unified Operations Hub',
      desc: 'Every team signal, KPI, and workflow converges in a single real-time dashboard. Custom views per role. No context switching.',
      stats: [{ v: '4.2s', l: 'avg load time' }, { v: '100%', l: 'data fidelity' }],
      color: 'var(--ax-red)',
    },
    {
      id: '02',
      title: 'WORKFLOW\nENGINE',
      sub: 'Automation at Scale',
      desc: 'Build multi-step automations with a visual drag-and-drop builder. Conditional logic, parallel branches, and AI-powered decision nodes.',
      stats: [{ v: '800+', l: 'templates' }, { v: '0ms', l: 'trigger latency' }],
      color: 'var(--ax-aqua)',
    },
    {
      id: '03',
      title: 'AI\nINTELLIGENCE',
      sub: 'Predictive Layer',
      desc: 'Machine learning models trained on your data surface anomalies, forecast outcomes, and recommend next actions before humans notice.',
      stats: [{ v: '94%', l: 'forecast accuracy' }, { v: '3× faster', l: 'decisions' }],
      color: 'var(--ax-red)',
    },
    {
      id: '04',
      title: 'COLLAB\nLAYER',
      sub: 'Built for Teams',
      desc: 'Threaded context on every object. Approvals, assignments, shared workspaces. Everyone stays in sync without the meeting.',
      stats: [{ v: '-68%', l: 'email volume' }, { v: '12min', l: 'avg resolution' }],
      color: 'var(--ax-aqua)',
    },
    {
      id: '05',
      title: 'INTEGRATIONS\nECO',
      sub: '200+ Native Connectors',
      desc: 'Salesforce, HubSpot, Slack, Jira, NetSuite, and 200 more. Bidirectional sync. Custom webhooks. REST & GraphQL APIs.',
      stats: [{ v: '200+', l: 'integrations' }, { v: '< 5min', l: 'setup time' }],
      color: 'var(--ax-red)',
    },
    {
      id: '06',
      title: 'SECURITY\nARCH',
      sub: 'Enterprise-Grade',
      desc: 'SOC 2 Type II certified. End-to-end encryption. SSO/SAML, RBAC, audit logs, custom retention policies, and private cloud options.',
      stats: [{ v: 'SOC 2', l: 'Type II certified' }, { v: '99.99%', l: 'uptime SLA' }],
      color: 'var(--ax-aqua)',
    },
  ];

  const active = modules[activeModule];

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#050505' }}>
        {/* LAYER 0: Cinematic photo — full bleed, right-biased, slow drift */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
        }}>
          <img
            src="/cdn/uploads/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-5%', left: '-5%',
              width: '115%', height: '115%',
              objectFit: 'cover',
              objectPosition: '65% center',
              filter: 'brightness(0.55) contrast(1.15) saturate(0.7)',
              animation: 'bgDrift 28s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* LAYER 1: Directional gradient overlays — left dark, right reveal */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.72) 35%, rgba(5,5,5,0.38) 60%, rgba(5,5,5,0.18) 100%)',
        }} />
        {/* Red glow bloom — upper right */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 55% at 78% 30%, rgba(232,25,44,0.14) 0%, transparent 70%)',
        }} />
        {/* Aqua hint — lower right */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 40% at 85% 72%, rgba(0,212,200,0.07) 0%, transparent 65%)',
        }} />
        {/* Vignette — all edges */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 90% 85% at 55% 50%, transparent 40%, rgba(0,0,0,0.72) 100%)',
        }} />

        {/* LAYER 2: Minimal SVG overlay — faint grid + 2 data markers + scan line */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="pScanFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(232,25,44,0)" />
              <stop offset="30%" stopColor="rgba(232,25,44,0.18)" />
              <stop offset="100%" stopColor="rgba(232,25,44,0)" />
            </linearGradient>
          </defs>

          {/* Faint grid — right two-thirds only, very low opacity */}
          {Array.from({ length: 13 }, (_, i) => {
            const x = 480 + i * 80;
            return <line key={`gv${i}`} x1={x} y1={0} x2={x} y2={900} stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />;
          })}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`gh${i}`} x1={480} y1={i * 100} x2={1440} y2={i * 100} stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
          ))}

          {/* Single horizon accent line */}
          <line x1="0" y1="430" x2="1440" y2="430" stroke="url(#pScanFade)" strokeWidth="1" />

          {/* Data node 1 — right center */}
          <circle cx={1080} cy={320} r="3" fill="#E8192C" opacity="0.7" />
          <circle cx={1080} cy={320} r="10" fill="none" stroke="rgba(232,25,44,0.25)" strokeWidth="0.75" />
          <circle cx={1080} cy={320} r="22" fill="none" stroke="rgba(232,25,44,0.1)" strokeWidth="0.5" />
          <text x={1096} y={316} fill="rgba(232,25,44,0.45)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">CMD_NODE_01</text>

          {/* Data node 2 — far right lower */}
          <circle cx={1280} cy={520} r="2.5" fill="#00D4C8" opacity="0.6" />
          <circle cx={1280} cy={520} r="8" fill="none" stroke="rgba(0,212,200,0.2)" strokeWidth="0.75" />
          <text x={1292} y={516} fill="rgba(0,212,200,0.38)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">SYS_ACTIVE</text>

          {/* Corner bracket — top left */}
          <path d="M 60 80 L 60 56 L 84 56" stroke="#00D4C8" strokeWidth="1.5" fill="none" opacity="0.35" />
          {/* Corner bracket — bottom right */}
          <path d="M 1380 820 L 1380 844 L 1356 844" stroke="#E8192C" strokeWidth="1.5" fill="none" opacity="0.35" />

          {/* System labels */}
          <text x="88" y="54" fill="rgba(0,212,200,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">[ PLATFORM CORE ]</text>
          <text x="60" y="860" fill="rgba(232,25,44,0.25)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">SYS:ONLINE · BUILD.247.PROD</text>

          {/* Animated scan line */}
          <line x1="0" y1="0" x2="1440" y2="0" stroke="rgba(232,25,44,0.2)" strokeWidth="1" style={{ animation: 'scanLine 9s linear infinite' }} />
        </svg>

        {/* LAYER 3: Film grain texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.6,
          mixBlendMode: 'overlay',
        }} />

        {/* Drift keyframe injected inline */}
        <style>{`
          @keyframes bgDrift {
            0%   { transform: translate(0px, 0px) scale(1.06); }
            33%  { transform: translate(-8px, -5px) scale(1.08); }
            66%  { transform: translate(6px, -10px) scale(1.07); }
            100% { transform: translate(-4px, 4px) scale(1.06); }
          }
        `}</style>

        {/* Horizontal hairline */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.04)', zIndex: 3 }} />

        {/* Version label */}
        <div className="ax-micro-label ax-vert-label" style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%) rotate(90deg)', color: 'var(--ax-red)', letterSpacing: '0.2em', zIndex: 4 }}>
          PLATFORM v3.0
        </div>

        {/* Floating data labels */}
        <div style={{ position: 'absolute', top: '22%', right: '8%', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 10px', border: '1px solid rgba(232,25,44,0.25)', background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: 4, height: 4, background: '#E8192C', boxShadow: '0 0 6px #E8192C', animation: 'pulseRed 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 8, color: 'rgba(232,25,44,0.8)', fontFamily: 'monospace', letterSpacing: '0.14em' }}>PLATFORM ONLINE</span>
          </div>
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>6 MODULES ACTIVE</span>
        </div>
        <div style={{ position: 'absolute', top: '42%', right: '4%', zIndex: 10 }}>
          <span style={{ fontSize: 8, color: 'rgba(0,212,200,0.5)', fontFamily: 'monospace', letterSpacing: '0.12em' }}>THROUGHPUT: 12B+ EVT/MO</span>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 0 100px 0' }}>
          <div className="ax-container">
            {/* Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
              <div style={{ width: 32, height: 1, background: 'var(--ax-red)' }} />
              <span className="ax-micro-label" style={{ color: 'var(--ax-red)', letterSpacing: '0.2em' }}>THE PLATFORM</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-end' }}>
              {/* Left: Headline */}
              <div>
                <h1 className="ax-font-display" style={{
                  fontSize: 'clamp(64px, 9vw, 130px)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  margin: 0,
                  color: 'var(--ax-white)',
                }}>
                  THE<br />
                  OPERATING<br />
                  SYSTEM<br />
                  <span style={{ WebkitTextStroke: '2px var(--ax-white)', color: 'transparent' }}>FOR MODERN</span><br />
                  <span style={{ color: 'var(--ax-red)' }}>TEAMS.</span>
                </h1>
              </div>

              {/* Right: Description + stats */}
              <div style={{ paddingBottom: 8 }}>
                <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, var(--ax-aqua))', marginBottom: 32 }} />
                <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', maxWidth: 400, marginBottom: 48 }}>
                  Six interconnected platform layers. One unified experience. Built for teams that operate at a level most companies aspire to.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 48 }}>
                  {[['40K+', 'Teams'], ['99.99%', 'Uptime'], ['200+', 'Integrations']].map(([v, l]) => (
                    <div key={l}>
                      <div className="ax-font-display" style={{ fontSize: 28, fontWeight: 800, color: 'var(--ax-white)', letterSpacing: '-0.02em' }}>{v}</div>
                      <div className="ax-micro-label" style={{ color: 'var(--ax-white2)', marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <Link href="/pricing" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: 13 }}>Start Building →</Link>
                  <Link href="/features" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: 13 }}>Explore Features</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hairline */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, var(--ax-red), transparent)' }} />
      </section>

      {/* Platform Modules — Interactive */}
      <section style={{ background: '#0a0a0a', padding: '120px 0 0' }}>
        <div className="ax-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 1, height: 48, background: 'var(--ax-aqua)' }} />
            <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.2em' }}>SIX LAYERS</span>
          </div>
          <h2 className="ax-font-display" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9, marginBottom: 80, color: 'var(--ax-white)' }}>
            PLATFORM<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>ARCHITECTURE.</span>
          </h2>

          {/* Module selector + detail */}
          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 2, minHeight: 600, border: '1px solid #1a1a1a' }}>
            {/* Left: Module list */}
            <div style={{ borderRight: '1px solid #1a1a1a' }}>
              {modules.map((mod, i) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    width: '100%',
                    padding: '24px 28px',
                    background: activeModule === i ? '#111' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #1a1a1a',
                    borderLeft: activeModule === i ? `3px solid ${mod.color}` : '3px solid transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span className="ax-micro-label" style={{ color: activeModule === i ? mod.color : '#444', minWidth: 24 }}>{mod.id}</span>
                  <div>
                    <div className="ax-font-display" style={{ fontSize: 13, fontWeight: 700, color: activeModule === i ? 'var(--ax-white)' : 'var(--ax-white2)', letterSpacing: '0.05em', whiteSpace: 'pre-line' }}>
                      {mod.title.replace('\n', ' ')}
                    </div>
                    <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>{mod.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Active module detail */}
            <div style={{ padding: '60px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0d0d0d' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                  <span className="ax-micro-label" style={{ color: active.color }}>{active.id}</span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                  <span className="ax-micro-label" style={{ color: '#444' }}>{active.sub}</span>
                </div>
                <h3 className="ax-font-display" style={{
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  whiteSpace: 'pre-line',
                  color: 'var(--ax-white)',
                  marginBottom: 32,
                }}>
                  {active.title}
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 480 }}>
                  {active.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>
                  {active.stats.map(s => (
                    <div key={s.l} style={{ borderTop: `1px solid ${active.color}`, paddingTop: 16 }}>
                      <div className="ax-font-display" style={{ fontSize: 40, fontWeight: 900, color: active.color, letterSpacing: '-0.03em' }}>{s.v}</div>
                      <div className="ax-micro-label" style={{ color: '#555', marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Link href="/features" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '12px 28px', fontSize: 12 }}>See All Features →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width visual break */}
      <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', background: '#080808' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)' }} />
        <div className="ax-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ax-aqua)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>WHY IT MATTERS</div>
              <h2 className="ax-font-display" style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--ax-white)', marginBottom: 24 }}>
                ONE<br />PLATFORM.<br />
                <span style={{ color: 'var(--ax-red)' }}>ZERO</span><br />SILOS.
              </h2>
              <div style={{ width: 40, height: 2, background: 'var(--ax-red)', marginBottom: 24 }} />
              <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontSize: 15 }}>
                The average enterprise runs 137 SaaS tools. AXIOM replaces 6 of the most expensive and replaces them with one coherent system.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#1a1a1a' }}>
              {[
                { tool: 'Salesforce', replace: 'CRM & Pipeline', save: '$48K/yr' },
                { tool: 'Monday.com', replace: 'Project Tracking', save: '$18K/yr' },
                { tool: 'Zapier', replace: 'Automations', save: '$12K/yr' },
                { tool: 'Tableau', replace: 'Analytics & BI', save: '$36K/yr' },
                { tool: 'Slack', replace: 'Team Comms', save: '$22K/yr' },
                { tool: 'Jira', replace: 'Issue Tracking', save: '$14K/yr' },
              ].map((item) => (
                <div key={item.tool} style={{ background: '#0d0d0d', padding: '32px 24px' }}>
                  <div style={{ fontSize: 10, color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>REPLACES</div>
                  <div className="ax-font-display" style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', marginBottom: 4 }}>{item.tool}</div>
                  <div style={{ fontSize: 12, color: 'var(--ax-white2)', marginBottom: 12 }}>{item.replace}</div>
                  <div className="ax-font-display" style={{ fontSize: 18, fontWeight: 900, color: 'var(--ax-aqua)' }}>{item.save}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '140px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="ax-container" style={{ textAlign: 'center' }}>
          <div className="ax-micro-label" style={{ color: 'var(--ax-red)', letterSpacing: '0.2em', marginBottom: 24 }}>READY TO BUILD</div>
          <h2 className="ax-font-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ax-white)', marginBottom: 48 }}>
            SEE IT IN<br />
            <span style={{ WebkitTextStroke: '2px var(--ax-white)', color: 'transparent' }}>ACTION.</span>
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link href="/pricing" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '18px 48px', fontSize: 14 }}>Start Free Trial →</Link>
            <Link href="/case-studies" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '18px 48px', fontSize: 14 }}>Read Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
