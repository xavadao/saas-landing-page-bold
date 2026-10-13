'use client';

import { useRef, useEffect, useState } from 'react';

const FEATURES = [
  {
    num: '01',
    tag: 'Command Center',
    headline: 'ONE\nINTERFACE.\nTOTAL\nCONTROL.',
    accentWord: 'TOTAL',
    accentColor: 'var(--ax-red)',
    body: 'Every signal, every team, every workflow — rendered in a single unified view. No tabs. No toggling. Just clarity at scale.',
    detail: 'Unified dashboard · Real-time feeds · Role-based views · Keyboard-first UX',
    visualType: 'command',
  },
  {
    num: '02',
    tag: 'Workflow Engine',
    headline: 'LOGIC\nTHAT\nNEVER\nSLEEPS.',
    accentWord: 'NEVER',
    accentColor: 'var(--ax-aqua)',
    body: 'Build automation flows that respond to any signal in milliseconds. Conditional branching, parallel execution, zero downtime.',
    detail: 'Visual flow builder · API triggers · Conditional logic · Retry queues',
    visualType: 'workflow',
  },
  {
    num: '03',
    tag: 'Revenue Intelligence',
    headline: 'SEE\nWHAT\'S\nCOMING\nNEXT.',
    accentWord: 'COMING',
    accentColor: 'var(--ax-red)',
    body: 'Predictive revenue modeling trained on your own operational patterns. Know before the quarter ends.',
    detail: 'Forecast engine · Cohort analysis · Churn prediction · Custom signals',
    visualType: 'revenue',
  },
  {
    num: '04',
    tag: 'Team Operating System',
    headline: 'ONE\nSYSTEM.\nEVERYONE.',
    accentWord: 'EVERYONE.',
    accentColor: 'var(--ax-aqua)',
    body: 'Cross-functional clarity from a single source of truth. Every role, every team, every decision — connected.',
    detail: 'Role-based access · Shared views · Org hierarchy · Live presence',
    visualType: 'teams',
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: 'var(--ax-black)', position: 'relative', overflow: 'hidden' }}>
      {/* Section header */}
      <div style={{ borderBottom: '1px solid var(--ax-border)', padding: '20px 60px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-red)' }}>§ 04</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">FEATURE DEPTH</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
        <span className="ax-micro-label" style={{ color: 'var(--ax-muted)' }}>3 MODULES</span>
      </div>

      {FEATURES.map((feat, i) => (
        <FeaturePanel key={i} feat={feat} index={i} />
      ))}
    </section>
  );
}

function FeaturePanel({ feat, index }: { feat: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const isEven = index % 2 === 0;
  const c = feat.accentColor === 'var(--ax-red)' ? '#E8192C' : '#00D4C8';

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '50% 50%' : '50% 50%',
        minHeight: 520,
        borderBottom: '1px solid var(--ax-border)',
      }}
    >
      {/* Text block */}
      <div
        style={{
          padding: '72px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: isEven ? '1px solid var(--ax-border)' : 'none',
          borderLeft: !isEven ? '1px solid var(--ax-border)' : 'none',
          order: isEven ? 0 : 1,
          position: 'relative',
        }}
      >
        {/* Vertical accent bar left */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: vis ? `linear-gradient(180deg, ${c}, transparent)` : 'transparent',
          transition: 'background 1s ease 0.3s',
        }} />

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span className="ax-micro-label" style={{ color: c }}>{feat.num}</span>
            <div style={{ width: 1, height: 12, background: 'var(--ax-border2)' }} />
            <span className="ax-tag" style={{ color: c, borderColor: `${c}40`, background: `${c}12`, fontSize: 9, letterSpacing: '0.16em' }}>{feat.tag}</span>
          </div>

          <h2 className="ax-font-display" style={{
            fontSize: 'clamp(40px, 5.5vw, 80px)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--ax-white)',
            margin: '0 0 28px',
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}>
            {feat.headline.split('\n').map((line, li) => (
              <span key={li} style={{ display: 'block', color: line === feat.accentWord ? feat.accentColor : 'var(--ax-white)' }}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div style={{
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
        }}>
          <div style={{ height: 1, background: `linear-gradient(90deg, ${c}, transparent)`, marginBottom: 24, opacity: 0.5 }} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ax-white2)', maxWidth: 420, marginBottom: 24, fontWeight: 400 }}>
            {feat.body}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {feat.detail.split(' · ').map((d, di) => (
              <span key={di} style={{ fontSize: 10, color: 'var(--ax-muted)', border: '1px solid var(--ax-border)', padding: '3px 10px', letterSpacing: '0.08em', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                {d}
              </span>
            ))}
          </div>
          <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: c, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Explore Feature <span>→</span>
          </a>
        </div>
      </div>

      {/* Visual block */}
      <div
        style={{
          order: isEven ? 1 : 0,
          position: 'relative',
          background: '#050505',
          overflow: 'hidden',
          minHeight: 520,
        }}
      >
        {feat.visualType === 'command' && <CommandVisual c={c} vis={vis} />}
        {feat.visualType === 'workflow' && <WorkflowVisual c={c} vis={vis} />}
        {feat.visualType === 'revenue' && <RevenueVisual c={c} vis={vis} />}
        {feat.visualType === 'teams' && <TeamsVisual c={c} vis={vis} />}
      </div>
    </div>
  );
}

// ─── SECTION 01: ONE INTERFACE. TOTAL CONTROL ───────────────────────────────
// Layer stack: fiber-optic photo (dominant, right-bias crop) → capacity rings (secondary, low opacity) → perspective grid → scattered micro labels
// State: image fades first, graph draws after, labels flicker last
function CommandVisual({ c, vis }: { c: string; vis: boolean }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>

      {/* LAYER 1: Tech photo — right-biased, irregular polygon crop, edge-blur overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: vis ? 1 : 0,
        transition: 'opacity 1s ease 0s',
      }}>
        <img
          src="/cdn/uploads/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
          alt=""
          style={{
            position: 'absolute',
            width: '110%', height: '110%',
            objectFit: 'cover',
            objectPosition: '70% center',
            left: '-5%', top: '-5%',
            clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 22%)',
            filter: 'brightness(0.35) contrast(1.2) saturate(0.6)',
          }}
        />
        {/* Edge-blur vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 60% 70% at 72% 50%, transparent 30%, #050505 90%)`,
        }} />
        {/* Left hard fade — keeps text readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #050505 0%, transparent 45%)',
        }} />
        {/* Colour tint layer */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${c}18 0%, transparent 60%)`,
          mixBlendMode: 'screen',
        }} />
      </div>

      {/* LAYER 2: Perspective grid — subtle, low opacity */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 0.6 : 0,
        transition: 'opacity 0.8s ease 0.4s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="cmd-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="30%" stopColor="transparent" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
        </defs>
        {/* Horizontal scan lines */}
        {Array.from({ length: 26 }, (_, i) => (
          <line key={i} x1="0" y1={i * 20} x2="520" y2={i * 20} stroke={c} strokeWidth="0.4" opacity="0.07" />
        ))}
        {/* Vertical grid */}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="520" stroke={c} strokeWidth="0.4" opacity="0.05" />
        ))}
        {/* One animated scan line sweeping down */}
        <line x1="0" y1="0" x2="520" y2="0" stroke={c} strokeWidth="1" opacity="0.35"
          style={{ animation: 'horzScan 4s linear infinite' }} />
      </svg>

      {/* LAYER 3: Capacity rings (secondary graph) — overlapping right side of image */}
      <svg style={{
        position: 'absolute',
        right: '-6%', top: '50%',
        transform: 'translateY(-50%)',
        width: '55%', height: '55%',
        opacity: vis ? 0.55 : 0,
        transition: 'opacity 1s ease 0.8s',
      }} viewBox="0 0 200 200">
        <defs>
          <radialGradient id="cmd-ring-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c} stopOpacity="0.18" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#cmd-ring-glow)" />
        {/* Capacity arc segments at different radii */}
        {[
          { r: 75, pct: 0.91, label: 'CPU' },
          { r: 60, pct: 0.74, label: 'MEM' },
          { r: 45, pct: 0.88, label: 'NET' },
          { r: 30, pct: 0.56, label: 'I/O' },
        ].map(({ r, pct, label }, i) => {
          const circ = 2 * Math.PI * r;
          return (
            <g key={i}>
              <circle cx="100" cy="100" r={r} fill="none" stroke={c} strokeWidth="1" opacity="0.12" />
              <circle cx="100" cy="100" r={r} fill="none" stroke={c} strokeWidth={i === 0 ? 2 : 1.5}
                strokeDasharray={`${circ * pct} ${circ}`}
                strokeDashoffset={circ * 0.25}
                strokeLinecap="round"
                opacity="0.75"
                style={{ animation: `signalPulse ${3 + i * 0.7}s ease-in-out infinite` }}
              />
              <text x="100" y={100 - r - 5} textAnchor="middle" fill={c} fontSize="6" fontFamily="monospace" opacity="0.5">{label}</text>
            </g>
          );
        })}
        {/* Center dot */}
        <circle cx="100" cy="100" r="4" fill={c} opacity="0.9" />
        <circle cx="100" cy="100" r="10" fill="none" stroke={c} strokeWidth="0.5" opacity="0.3"
          style={{ animation: 'signalPulse 2s ease-in-out infinite' }} />
      </svg>

      {/* LAYER 4: Scattered micro-data labels — irregular positions, some overlapping image edges */}
      {vis && (<>
        <div style={{ position: 'absolute', top: '11%', left: '6%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.2s forwards' }}>
          <div style={{ fontSize: 8, color: c, fontFamily: 'monospace', letterSpacing: '0.1em', opacity: 0.7 }}>signal_latency</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', fontFamily: 'monospace', fontWeight: 700 }}>12ms</div>
        </div>
        <div style={{ position: 'absolute', top: '38%', left: '3%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.5s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', letterSpacing: '0.08em' }}>node_status</div>
          <div style={{ fontSize: 10, color: c, fontFamily: 'monospace', fontWeight: 700 }}>active ●</div>
        </div>
        <div style={{ position: 'absolute', bottom: '28%', left: '8%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.8s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>threads</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace', fontWeight: 700 }}>847</div>
        </div>
        <div style={{ position: 'absolute', top: '18%', right: '2%', opacity: 0, animation: 'dataFlicker 0.4s ease 2.1s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '0.08em' }}>sys_load</div>
          <div style={{ fontSize: 10, color: c, fontFamily: 'monospace' }}>0.91 / 1.00</div>
        </div>
        {/* Corner bracket marks */}
        <div style={{ position: 'absolute', top: 16, left: 16, width: 18, height: 18, borderTop: `1px solid ${c}60`, borderLeft: `1px solid ${c}60` }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: 18, height: 18, borderBottom: `1px solid ${c}60`, borderRight: `1px solid ${c}60` }} />
        {/* System label */}
        <div style={{ position: 'absolute', bottom: 18, left: 22, fontSize: 8, color: `${c}70`, fontFamily: 'monospace', letterSpacing: '0.14em' }}>
          SYS:01 — COMMAND
        </div>
      </>)}
    </div>
  );
}

// ─── SECTION 02: LOGIC THAT NEVER SLEEPS ────────────────────────────────────
// Layer stack: fiber network photo (balanced left-center) → vertical pipeline/timeline graph → scan-line grid → micro data overlays
// State: image + grid together, pipeline draws stroke by stroke, labels flicker
function WorkflowVisual({ c, vis }: { c: string; vis: boolean }) {
  const stages = [
    { label: 'INGEST', x: 100, y: 80, w: 100, status: 'OK' },
    { label: 'PARSE', x: 100, y: 160, w: 80, status: 'OK' },
    { label: 'ROUTE', x: 100, y: 240, w: 90, status: 'OK' },
    { label: 'FILTER', x: 100, y: 320, w: 75, status: 'OK' },
    { label: 'EXEC', x: 100, y: 400, w: 110, status: 'RUN' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>

      {/* LAYER 1: Network photo — left-center bias, diagonal polygon crop */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: vis ? 1 : 0,
        transition: 'opacity 1s ease 0s',
      }}>
        <img
          src="/cdn/uploads/compare-fibre-PAOv9-7VBMI-unsplash.jpg"
          alt=""
          style={{
            position: 'absolute',
            width: '115%', height: '115%',
            objectFit: 'cover',
            objectPosition: '30% 60%',
            left: '-8%', top: '-8%',
            clipPath: 'polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 0% 100%)',
            filter: 'brightness(0.3) contrast(1.3) saturate(0.5) hue-rotate(160deg)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 60% at 35% 50%, transparent 25%, #050505 85%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, #050505 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${c}14 0%, transparent 55%)`, mixBlendMode: 'screen' }} />
      </div>

      {/* LAYER 2: Grid background with faint scan lines */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 0.5 : 0,
        transition: 'opacity 0.7s ease 0.35s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 52 }, (_, i) => (
          <line key={i} x1="0" y1={i * 10} x2="520" y2={i * 10} stroke={c} strokeWidth="0.3" opacity="0.06" />
        ))}
        {Array.from({ length: 26 }, (_, i) => (
          <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="520" stroke={c} strokeWidth="0.3" opacity="0.04" />
        ))}
        {/* Moving scan */}
        <line x1="0" y1="0" x2="520" y2="0" stroke={c} strokeWidth="1.5" opacity="0.25"
          style={{ animation: 'horzScan 3s linear infinite' }} />
      </svg>

      {/* LAYER 3: Vertical pipeline graph — overlapping center-right of image */}
      <svg style={{
        position: 'absolute',
        right: '4%', top: '5%',
        width: '52%', height: '90%',
        opacity: vis ? 0.9 : 0,
        transition: 'opacity 1s ease 0.8s',
      }} viewBox="0 0 200 480">
        <defs>
          <linearGradient id="pipe-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c} stopOpacity="0.9" />
            <stop offset="100%" stopColor={c} stopOpacity="0.2" />
          </linearGradient>
          <filter id="pipe-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Vertical spine */}
        <line x1="30" y1="60" x2="30" y2="420" stroke={`${c}30`} strokeWidth="1" />
        <line x1="30" y1="60" x2="30" y2="420" stroke="url(#pipe-line)" strokeWidth="2"
          strokeDasharray="360" strokeDashoffset={vis ? '0' : '360'}
          style={{ transition: 'stroke-dashoffset 1.5s ease 1s' }} />
        {/* Stage nodes + horizontal bars */}
        {stages.map((s, i) => (
          <g key={i} style={{ opacity: vis ? 1 : 0, transition: `opacity 0.5s ease ${1.2 + i * 0.18}s` }}>
            {/* Connector dot */}
            <circle cx="30" cy={s.y} r="5" fill={s.status === 'RUN' ? c : '#050505'} stroke={c} strokeWidth="1.5" />
            {s.status === 'RUN' && (
              <circle cx="30" cy={s.y} r="10" fill="none" stroke={c} strokeWidth="0.5" opacity="0.4"
                style={{ animation: 'signalPulse 1.8s ease-in-out infinite' }} />
            )}
            {/* Horizontal bar showing throughput */}
            <rect x="44" y={s.y - 7} width={s.w} height="14" rx="2"
              fill={`${c}10`} stroke={`${c}40`} strokeWidth="0.5" />
            <rect x="44" y={s.y - 7} width={s.w * 0.88} height="14" rx="2"
              fill={`${c}25`} />
            {/* Label */}
            <text x="48" y={s.y + 4} fill={c} fontSize="7.5" fontFamily="monospace" fontWeight="700" opacity="0.9">{s.label}</text>
            <text x={44 + s.w + 6} y={s.y + 4} fill={`${c}60`} fontSize="6.5" fontFamily="monospace">88%</text>
            {/* Animated particle along spine */}
            {i < 4 && (
              <circle r="2" fill={c} opacity="0.8">
                <animateMotion dur={`${0.9 + i * 0.15}s`} repeatCount="indefinite"
                  path={`M 30 ${s.y} L 30 ${stages[i + 1]?.y ?? s.y + 80}`} />
              </circle>
            )}
          </g>
        ))}
        {/* Top label */}
        <text x="8" y="30" fill={c} fontSize="7" fontFamily="monospace" opacity="0.45" letterSpacing="0.1em">PIPELINE:LIVE</text>
        <text x="8" y="460" fill={c} fontSize="6.5" fontFamily="monospace" opacity="0.35">5 stages · 0 blocked</text>
      </svg>

      {/* LAYER 4: Micro data overlays — scattered, some bleeding over image */}
      {vis && (<>
        <div style={{ position: 'absolute', top: '8%', left: '5%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.4s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>exec_queue</div>
          <div style={{ fontSize: 12, color: c, fontFamily: 'monospace', fontWeight: 700 }}>0</div>
        </div>
        <div style={{ position: 'absolute', top: '42%', left: '2%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.7s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>uptime</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace', fontWeight: 700 }}>99.97%</div>
        </div>
        <div style={{ position: 'absolute', bottom: '18%', left: '6%', opacity: 0, animation: 'dataFlicker 0.4s ease 2s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>triggers_today</div>
          <div style={{ fontSize: 11, color: c, fontFamily: 'monospace', fontWeight: 700 }}>2,841</div>
        </div>
        <div style={{ position: 'absolute', top: 16, left: 16, width: 18, height: 18, borderTop: `1px solid ${c}50`, borderLeft: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: 18, height: 18, borderBottom: `1px solid ${c}50`, borderRight: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 18, left: 22, fontSize: 8, color: `${c}65`, fontFamily: 'monospace', letterSpacing: '0.14em' }}>
          SYS:02 — WORKFLOW
        </div>
      </>)}
    </div>
  );
}

// ─── SECTION 03: SEE WHAT'S COMING NEXT ─────────────────────────────────────
// Layer stack: data-grid/screen photo (many overlays, balanced) → candlestick OHLC forecast → dense scan grid → heavy micro-data scatter
// State: photo fades, then grid tightens, then OHLC draws bar-by-bar, labels cascade in
function RevenueVisual({ c, vis }: { c: string; vis: boolean }) {
  // OHLC candles: [open, high, low, close] normalised 0-100
  const candles = [
    [38, 55, 30, 50], [50, 62, 44, 58], [58, 70, 50, 52],
    [52, 65, 48, 63], [63, 74, 55, 70], [70, 82, 64, 66],
    [66, 78, 58, 76], [76, 90, 70, 85], [85, 96, 78, 92],
  ];
  const toY = (v: number) => 370 - v * 2.2;
  const cW = 36, gap = 12, startX = 50;

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>

      {/* LAYER 1: Screen/data-field photo — balanced, top-heavy crop */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: vis ? 1 : 0,
        transition: 'opacity 1s ease 0s',
      }}>
        <img
          src="/cdn/uploads/yanmin-yang-3LCnyLPf8RA-unsplash.jpg"
          alt=""
          style={{
            position: 'absolute',
            width: '120%', height: '120%',
            objectFit: 'cover',
            objectPosition: '50% 20%',
            left: '-10%', top: '-10%',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 82%, 78% 100%, 0% 100%)',
            filter: 'brightness(0.28) contrast(1.4) saturate(0.5)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 60% at 50% 40%, transparent 20%, #050505 88%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #050505 0%, transparent 30%, transparent 65%, #050505 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(225deg, ${c}16 0%, transparent 50%)`, mixBlendMode: 'screen' }} />
      </div>

      {/* LAYER 2: Dense scan grid */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 1 : 0,
        transition: 'opacity 0.7s ease 0.45s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 34 }, (_, i) => (
          <line key={i} x1="0" y1={i * 16} x2="520" y2={i * 16} stroke={c} strokeWidth="0.35" opacity="0.055" />
        ))}
        {Array.from({ length: 17 }, (_, i) => (
          <line key={i} x1={i * 32} y1="0" x2={i * 32} y2="520" stroke={c} strokeWidth="0.35" opacity="0.04" />
        ))}
        <line x1="0" y1="0" x2="520" y2="0" stroke={c} strokeWidth="1.5" opacity="0.22"
          style={{ animation: 'horzScan 5s linear infinite' }} />
        {/* X-axis baseline */}
        <line x1="40" y1="380" x2="480" y2="380" stroke={c} strokeWidth="0.7" opacity="0.2" />
        {/* Y-axis */}
        <line x1="40" y1="160" x2="40" y2="380" stroke={c} strokeWidth="0.7" opacity="0.2" />
        {/* Horizontal price levels */}
        {[25, 50, 75, 100].map((v, i) => (
          <g key={i}>
            <line x1="40" y1={toY(v)} x2="480" y2={toY(v)} stroke={c} strokeWidth="0.4" strokeDasharray="4 8" opacity="0.12" />
            <text x="28" y={toY(v) + 3} textAnchor="end" fill={c} fontSize="6.5" fontFamily="monospace" opacity="0.35">{v}</text>
          </g>
        ))}
      </svg>

      {/* LAYER 3: OHLC Candlestick chart — overlapping image, distinct from any area/line chart */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 0.9 : 0,
        transition: 'opacity 1s ease 0.9s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="candle-up" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c} stopOpacity="0.9" />
            <stop offset="100%" stopColor={c} stopOpacity="0.5" />
          </linearGradient>
          <filter id="candle-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {candles.map(([o, h, l, cl], i) => {
          const x = startX + i * (cW + gap);
          const isUp = cl >= o;
          const bodyTop = toY(Math.max(o, cl));
          const bodyH = Math.abs(toY(o) - toY(cl)) || 2;
          return (
            <g key={i} filter="url(#candle-glow)"
              style={{ opacity: vis ? 1 : 0, transition: `opacity 0.4s ease ${1.1 + i * 0.1}s` }}>
              {/* Wick */}
              <line x1={x + cW / 2} y1={toY(h)} x2={x + cW / 2} y2={toY(l)}
                stroke={c} strokeWidth="1" opacity="0.5" />
              {/* Body */}
              <rect x={x} y={bodyTop} width={cW} height={bodyH}
                fill={isUp ? 'url(#candle-up)' : `${c}20`}
                stroke={c} strokeWidth={i === candles.length - 1 ? 1.5 : 0.75}
                opacity={isUp ? 0.85 : 0.45}
              />
              {/* Close marker on last candle */}
              {i === candles.length - 1 && (
                <line x1={x} y1={toY(cl)} x2={x + cW + 20} y2={toY(cl)}
                  stroke={c} strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
              )}
            </g>
          );
        })}
        {/* Projection arrow */}
        <path d={`M ${startX + 8 * (cW + gap) + cW} ${toY(92)} L ${startX + 9 * (cW + gap) + cW} ${toY(108)}`}
          stroke={c} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" fill="none" />
        <polygon
          points={`${startX + 9 * (cW + gap) + cW},${toY(108)} ${startX + 9 * (cW + gap) + cW - 4},${toY(108) + 6} ${startX + 9 * (cW + gap) + cW + 4},${toY(108) + 6}`}
          fill={c} opacity="0.6" />
        {/* Labels */}
        <text x="50" y="150" fill={c} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.1em">OHLC · Q4 FORECAST</text>
        <text x="50" y="400" fill={c} fontSize="6.5" fontFamily="monospace" opacity="0.3">CONFIDENCE:94% · HORIZON:90d</text>
      </svg>

      {/* LAYER 4: Heavy micro-data scatter */}
      {vis && (<>
        <div style={{ position: 'absolute', top: '7%', left: '4%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.3s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>confidence</div>
          <div style={{ fontSize: 14, color: c, fontFamily: 'monospace', fontWeight: 800 }}>94%</div>
        </div>
        <div style={{ position: 'absolute', top: '28%', left: '2%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.6s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>churn_signal</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>low ▼</div>
        </div>
        <div style={{ position: 'absolute', bottom: '22%', left: '5%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.9s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>sync_rate</div>
          <div style={{ fontSize: 11, color: c, fontFamily: 'monospace', fontWeight: 700 }}>99.9%</div>
        </div>
        <div style={{ position: 'absolute', top: '55%', right: '3%', opacity: 0, animation: 'dataFlicker 0.4s ease 2.2s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>rev_forecast</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontFamily: 'monospace', fontWeight: 700 }}>$2.4M</div>
        </div>
        <div style={{ position: 'absolute', top: 16, left: 16, width: 18, height: 18, borderTop: `1px solid ${c}50`, borderLeft: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: 18, height: 18, borderBottom: `1px solid ${c}50`, borderRight: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 18, left: 22, fontSize: 8, color: `${c}65`, fontFamily: 'monospace', letterSpacing: '0.14em' }}>
          SYS:03 — INTELLIGENCE
        </div>
      </>)}
    </div>
  );
}

// ─── SECTION 04: ONE SYSTEM. EVERYONE ───────────────────────────────────────
// Layer stack: abstract tech texture photo (low key, right panel) → org radial hierarchy (NOT radar) → sparse grid → team presence micro labels
// State: photo fades quietly, org tree grows outward, labels blink into place
function TeamsVisual({ c, vis }: { c: string; vis: boolean }) {
  // Radial org hierarchy — NOT concentric rings with sweep
  const root = { x: 260, y: 220, r: 14, label: 'CEO', level: 0 };
  const l1 = [
    { x: 140, y: 320, r: 10, label: 'ENG', level: 1 },
    { x: 260, y: 340, r: 10, label: 'OPS', level: 1 },
    { x: 380, y: 320, r: 10, label: 'GTM', level: 1 },
  ];
  const l2 = [
    { x: 80, y: 410, r: 6.5, label: 'FE', level: 2 },
    { x: 150, y: 420, r: 6.5, label: 'BE', level: 2 },
    { x: 220, y: 420, r: 6.5, label: 'DS', level: 2 },
    { x: 300, y: 420, r: 6.5, label: 'CS', level: 2 },
    { x: 370, y: 415, r: 6.5, label: 'AE', level: 2 },
    { x: 440, y: 410, r: 6.5, label: 'MKT', level: 2 },
  ];
  const l1Parents = [0, 1, 2];

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'hidden' }}>

      {/* LAYER 1: Abstract tech texture — right bias, quiet, dark */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: vis ? 1 : 0,
        transition: 'opacity 1.2s ease 0s',
      }}>
        <img
          src="/cdn/uploads/maximalfocus-HakTxidk36I-unsplash.jpg"
          alt=""
          style={{
            position: 'absolute',
            width: '120%', height: '120%',
            objectFit: 'cover',
            objectPosition: '80% 50%',
            left: '-10%', top: '-10%',
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 88%)',
            filter: 'brightness(0.22) contrast(1.3) saturate(0.4) hue-rotate(170deg)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 65% 65% at 65% 50%, transparent 20%, #050505 82%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, transparent 30%, #050505 75%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(315deg, ${c}12 0%, transparent 55%)`, mixBlendMode: 'screen' }} />
      </div>

      {/* LAYER 2: Very sparse grid */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 0.4 : 0,
        transition: 'opacity 0.8s ease 0.3s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1="0" y1={i * 40} x2="520" y2={i * 40} stroke={c} strokeWidth="0.4" opacity="0.05" />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="520" stroke={c} strokeWidth="0.4" opacity="0.035" />
        ))}
        <line x1="0" y1="0" x2="520" y2="0" stroke={c} strokeWidth="1" opacity="0.15"
          style={{ animation: 'horzScan 6s linear infinite' }} />
      </svg>

      {/* LAYER 3: Org radial tree — distinct from radar (no sweeping wedge, no concentric rings, no degree labels) */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: vis ? 0.88 : 0,
        transition: 'opacity 1s ease 0.85s',
      }} viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="teams-glow" cx="50%" cy="42%" r="35%">
            <stop offset="0%" stopColor={c} stopOpacity="0.12" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
          <filter id="teams-bloom">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="260" cy="220" r="160" fill="url(#teams-glow)" />

        {/* L0 → L1 connectors */}
        {l1.map((n, i) => (
          <line key={i} x1={root.x} y1={root.y} x2={n.x} y2={n.y}
            stroke={c} strokeWidth="1" opacity="0.25"
            style={{ opacity: vis ? 0.25 : 0, transition: `opacity 0.4s ease ${1.0 + i * 0.12}s` }} />
        ))}
        {/* L1 → L2 connectors */}
        {l2.map((n, i) => {
          const parent = l1[l1Parents[Math.floor(i / 2)]];
          return <line key={i} x1={parent.x} y1={parent.y} x2={n.x} y2={n.y}
            stroke={c} strokeWidth="0.75" opacity="0.15"
            style={{ opacity: vis ? 0.15 : 0, transition: `opacity 0.4s ease ${1.3 + i * 0.08}s` }} />;
        })}

        {/* L2 nodes */}
        {l2.map((n, i) => (
          <g key={i} filter="url(#teams-bloom)"
            style={{ opacity: vis ? 1 : 0, transition: `opacity 0.4s ease ${1.4 + i * 0.1}s` }}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="#050505" stroke={c} strokeWidth="0.75" opacity="0.6" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill={c} fontSize="5.5" fontFamily="monospace" opacity="0.7" fontWeight="700">{n.label}</text>
          </g>
        ))}
        {/* L1 nodes */}
        {l1.map((n, i) => (
          <g key={i} filter="url(#teams-bloom)"
            style={{ opacity: vis ? 1 : 0, transition: `opacity 0.4s ease ${0.95 + i * 0.12}s` }}>
            <circle cx={n.x} cy={n.y} r={n.r * 1.8} fill={c} opacity="0.06" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#050505" stroke={c} strokeWidth="1.25" opacity="0.8" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" opacity="0.8" fontWeight="700">{n.label}</text>
          </g>
        ))}
        {/* Root node */}
        <g filter="url(#teams-bloom)"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.4s ease 0.9s' }}>
          <circle cx={root.x} cy={root.y} r={root.r * 2.2} fill={c} opacity="0.07" />
          <circle cx={root.x} cy={root.y} r={root.r} fill={c} opacity="0.9" />
          <circle cx={root.x} cy={root.y} r={root.r * 1.7} fill="none" stroke={c} strokeWidth="0.75" opacity="0.3"
            style={{ animation: 'signalPulse 2.5s ease-in-out infinite' }} />
          <text x={root.x} y={root.y + 4} textAnchor="middle" fill="#050505" fontSize="8" fontFamily="monospace" fontWeight="800">ORG</text>
        </g>

        {/* Active presence indicators */}
        {[
          { x: 100, y: 170, n: '12' }, { x: 380, y: 160, n: '31' }, { x: 240, y: 140, n: '8' },
        ].map((p, i) => (
          <g key={i} style={{ opacity: vis ? 1 : 0, transition: `opacity 0.4s ease ${1.8 + i * 0.15}s` }}>
            <rect x={p.x - 14} y={p.y - 9} width="28" height="16" rx="2" fill={`${c}15`} stroke={`${c}35`} strokeWidth="0.5" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace">{p.n} online</text>
          </g>
        ))}
        <text x="20" y="25" fill={c} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.1em">ORG:LIVE</text>
        <text x="20" y="500" fill={c} fontSize="6.5" fontFamily="monospace" opacity="0.3">48 teams · 312 active</text>
      </svg>

      {/* LAYER 4: Team micro data — staggered flicker */}
      {vis && (<>
        <div style={{ position: 'absolute', top: '6%', left: '5%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.5s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>teams</div>
          <div style={{ fontSize: 14, color: c, fontFamily: 'monospace', fontWeight: 800 }}>48</div>
        </div>
        <div style={{ position: 'absolute', top: '35%', left: '3%', opacity: 0, animation: 'dataFlicker 0.4s ease 1.8s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>roles</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', fontWeight: 700 }}>12</div>
        </div>
        <div style={{ position: 'absolute', bottom: '24%', left: '5%', opacity: 0, animation: 'dataFlicker 0.4s ease 2.1s forwards' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>active_now</div>
          <div style={{ fontSize: 12, color: c, fontFamily: 'monospace', fontWeight: 700 }}>312 ●</div>
        </div>
        <div style={{ position: 'absolute', top: 16, left: 16, width: 18, height: 18, borderTop: `1px solid ${c}50`, borderLeft: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: 18, height: 18, borderBottom: `1px solid ${c}50`, borderRight: `1px solid ${c}50` }} />
        <div style={{ position: 'absolute', bottom: 18, left: 22, fontSize: 8, color: `${c}65`, fontFamily: 'monospace', letterSpacing: '0.14em' }}>
          SYS:04 — TEAMS
        </div>
      </>)}
    </div>
  );
}
