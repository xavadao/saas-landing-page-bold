'use client';
'use client';


import { useRef, useEffect, useState } from 'react';

const PANELS = [
  {
    num: '01',
    tag: 'Automation Engine',
    headline: 'KILL\nTHE\nBUSYWORK.',
    accent: 'KILL',
    accentColor: 'var(--ax-red)',
    body: 'Trigger multi-step workflows the moment signals fire. No code. No delays. Relentless execution at machine speed.',
    stat: '12×',
    statLabel: 'Faster than manual ops',
    color: 'var(--ax-red)',
    side: 'left',
  },
  {
    num: '02',
    tag: 'Intelligence Layer',
    headline: 'DATA\nTHAT\nACTS.',
    accent: 'ACTS.',
    accentColor: 'var(--ax-aqua)',
    body: 'Real-time signals surface decisions before your team knows to ask. The system thinks while you ship.',
    stat: '340ms',
    statLabel: 'Avg decision latency',
    color: 'var(--ax-aqua)',
    side: 'right',
  },
  {
    num: '03',
    tag: 'Collaboration OS',
    headline: 'ONE\nSYSTEM.\nEVERYONE.',
    accent: 'EVERYONE.',
    accentColor: 'var(--ax-red)',
    body: 'Kill the silos. Every team, every tool, every context — converged into a single operating layer.',
    stat: '98%',
    statLabel: 'Cross-team adoption rate',
    color: 'var(--ax-red)',
    side: 'left',
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product"
      style={{ background: 'var(--ax-black)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Noise + dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', opacity: 0.5 }} />

      {/* Full-bleed section label */}
      <div style={{ borderBottom: '1px solid var(--ax-border)', padding: '20px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="ax-vert-label" style={{ transform: 'none', writingMode: 'horizontal-tb', fontSize: 9, letterSpacing: '0.24em' }}>PRODUCT CAPABILITIES</span>
          <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
          <span className="ax-micro-label">§ 02 — WHAT WE DO</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {PANELS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePanel(i)}
              style={{
                width: 32, height: 3,
                background: activePanel === i ? 'var(--ax-red)' : 'var(--ax-border2)',
                border: 'none', cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Editorial panels */}
      {PANELS.map((panel, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: panel.side === 'left' ? '45% 55%' : '55% 45%',
            minHeight: 480,
            borderBottom: '1px solid var(--ax-border)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(60px)',
            transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
            cursor: 'pointer',
          }}
          onClick={() => setActivePanel(i)}
        >
          {/* Visual side */}
          {panel.side === 'right' && (
            <PanelVisual panel={panel} active={activePanel === i} />
          )}

          {/* Text side */}
          <div style={{
            padding: '64px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: panel.side === 'left' ? '1px solid var(--ax-border)' : 'none',
            borderLeft: panel.side === 'right' ? '1px solid var(--ax-border)' : 'none',
            background: activePanel === i ? 'rgba(255,255,255,0.01)' : 'transparent',
            transition: 'background 0.3s ease',
            position: 'relative',
          }}>
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
              <div>
                <span className="ax-micro-label" style={{ color: panel.color }}>{panel.num} / {String(PANELS.length).padStart(2, '0')}</span>
                <div style={{ marginTop: 8 }}>
                  <span className="ax-tag" style={{ color: panel.color, borderColor: panel.color, background: `${panel.color.replace('var(', '').replace(')', '')} / 0.1)`.replace('--ax-red', 'rgba(232,25,44,0.1)').replace('--ax-aqua', 'rgba(0,212,200,0.1)'), fontSize: 10, letterSpacing: '0.14em' }}>
                    {panel.tag}
                  </span>
                </div>
              </div>
              {activePanel === i && (
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: panel.color, boxShadow: `0 0 16px ${panel.color}` }} />
              )}
            </div>

            {/* Massive headline */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <h2
                className="ax-font-display"
                style={{
                  fontSize: 'clamp(52px, 6vw, 96px)',
                  fontWeight: 800,
                  lineHeight: 0.85,
                  letterSpacing: '-0.04em',
                  color: 'var(--ax-white)',
                  whiteSpace: 'pre-line',
                  margin: 0,
                }}
              >
                {panel.headline.split('\n').map((line, li) => (
                  <span key={li} style={{ display: 'block', color: line === panel.accent ? panel.accentColor : 'var(--ax-white)' }}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            {/* Body + stat */}
            <div style={{ marginTop: 32 }}>
              <div style={{ height: 1, background: `linear-gradient(90deg, ${panel.color.replace('var(--ax-red)', '#E8192C').replace('var(--ax-aqua)', '#00D4C8')}, transparent)`, marginBottom: 24, opacity: activePanel === i ? 1 : 0.3, transition: 'opacity 0.3s' }} />
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ax-white2)', maxWidth: 380, marginBottom: 28, fontWeight: 400 }}>
                {panel.body}
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 48, fontWeight: 800, color: panel.color, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.04em' }}>{panel.stat}</div>
                  <div style={{ fontSize: 10, color: 'var(--ax-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{panel.statLabel}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual side right */}
          {panel.side === 'left' && (
            <PanelVisual panel={panel} active={activePanel === i} />
          )}
        </div>
      ))}
    </section>
  );
}

function PanelVisual({ panel, active }: { panel: typeof PANELS[0]; active: boolean }) {
  const c = panel.color === 'var(--ax-red)' ? '#E8192C' : '#00D4C8';
  const isAutomation = panel.num === '01';
  const isIntelligence = panel.num === '02';

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#080808',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 480,
    }}>
      {/* Full-bleed SVG environment — distinct per panel */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 560 480" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`pg${panel.num}`} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor={c} stopOpacity="0.10" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`sweep${panel.num}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c} stopOpacity="0.3" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
          {isAutomation && (
            <clipPath id="radarClipPS">
              <circle cx="280" cy="240" r="180" />
            </clipPath>
          )}
        </defs>

        {/* Background glow */}
        <rect width="560" height="480" fill={`url(#pg${panel.num})`} />

        {/* Base grid */}
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="560" y2={i * 40} stroke={`${c}12`} strokeWidth="0.5" />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="480" stroke={`${c}10`} strokeWidth="0.5" />
        ))}

        {isAutomation && (
          <g>
            {/* Radar targeting system */}
            {[60, 110, 160, 180].map((r, i) => (
              <circle key={i} cx="280" cy="240" r={r} stroke={c} strokeWidth={i === 3 ? 1 : 0.5} fill="none" opacity={i === 3 ? 0.3 : 0.12} />
            ))}
            <line x1="100" y1="240" x2="460" y2="240" stroke={`${c}20`} strokeWidth="1" />
            <line x1="280" y1="60" x2="280" y2="420" stroke={`${c}20`} strokeWidth="1" />
            <line x1="153" y1="113" x2="407" y2="367" stroke={`${c}10`} strokeWidth="0.5" />
            <line x1="407" y1="113" x2="153" y2="367" stroke={`${c}10`} strokeWidth="0.5" />
            {/* Radar sweep */}
            <g clipPath="url(#radarClipPS)" style={{ transformOrigin: '280px 240px', animation: 'radarSweep 4s linear infinite' }}>
              <path d={`M 280 240 L 280 60 A 180 180 0 0 1 ${280 + 180 * Math.sin(Math.PI / 3)} ${240 - 180 * Math.cos(Math.PI / 3)} Z`}
                fill={`url(#sweep${panel.num})`} opacity="0.45" />
              <line x1="280" y1="240" x2="280" y2="60" stroke={c} strokeWidth="1.5" opacity="0.7" />
            </g>
            {/* Target blips */}
            {[[340, 170], [190, 300], [380, 310], [160, 190], [310, 370]].map(([bx, by], i) => (
              <g key={i}>
                <circle cx={bx} cy={by} r="3.5" fill={c} opacity="0.85" />
                <circle cx={bx} cy={by} r="9" fill="none" stroke={c} strokeWidth="0.5" opacity="0.35"
                  style={{ animation: `signalPulse ${2 + i * 0.4}s ease-in-out infinite` }} />
              </g>
            ))}
            <circle cx="280" cy="240" r="5" fill={c} opacity="0.9" />
            <circle cx="280" cy="240" r="12" fill="none" stroke={c} strokeWidth="1" opacity="0.4" />
            {/* Tick marks */}
            {Array.from({ length: 24 }, (_, i) => {
              const a = (i * 15 * Math.PI) / 180;
              return <line key={i} x1={280 + 177 * Math.cos(a)} y1={240 + 177 * Math.sin(a)} x2={280 + 183 * Math.cos(a)} y2={240 + 183 * Math.sin(a)} stroke={c} strokeWidth="0.5" opacity="0.35" />;
            })}
            <text x="290" y="68" fill={c} fontSize="7" fontFamily="monospace" opacity="0.5" letterSpacing="0.1em">000°</text>
            <text x="460" y="244" fill={c} fontSize="7" fontFamily="monospace" opacity="0.5" letterSpacing="0.1em">090°</text>
          </g>
        )}

        {isIntelligence && (
          <g>
            {/* Particle network / intelligence graph */}
            {[
              [280, 120], [160, 200], [400, 200], [100, 320], [220, 340], [340, 340], [460, 320], [280, 380]
            ].map(([nx, ny], ni) => {
              const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[4,7],[5,7]];
              return null; // rendered below
            })}
            {/* Edges */}
            {[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[4,7],[5,7]].map(([a, b], i) => {
              const pts: [number,number][] = [[280,120],[160,200],[400,200],[100,320],[220,340],[340,340],[460,320],[280,380]];
              const [ax, ay] = pts[a], [bx, by] = pts[b];
              return (
                <g key={i}>
                  <line x1={ax} y1={ay} x2={bx} y2={by} stroke={c} strokeWidth="0.5" opacity="0.18" />
                  <line x1={ax} y1={ay} x2={bx} y2={by} stroke={c} strokeWidth="1.5" opacity="0.45"
                    strokeDasharray="4 20" style={{ animation: `particleFlow ${1.5 + i * 0.3}s linear infinite` }} />
                </g>
              );
            })}
            {/* Nodes */}
            {([[280,120,10],[160,200,7],[400,200,7],[100,320,5],[220,340,5],[340,340,5],[460,320,5],[280,380,4]] as [number,number,number][]).map(([nx, ny, ns], ni) => (
              <g key={ni}>
                <circle cx={nx} cy={ny} r={ns * 2.5} fill={c} opacity="0.05" />
                <circle cx={nx} cy={ny} r={ns} fill={ni === 0 ? c : 'rgba(8,8,8,0.9)'} stroke={c} strokeWidth={ni === 0 ? 0 : 1} opacity={ni === 0 ? 0.9 : 0.65} />
                {ni === 0 && <circle cx={nx} cy={ny} r={ns * 2} fill="none" stroke={c} strokeWidth="0.5" opacity="0.3" style={{ animation: 'signalPulse 2s ease-in-out infinite' }} />}
              </g>
            ))}
            {/* Animated signal pulses */}
            {([[280,120],[160,200],[400,200],[220,340]] as [number,number][]).map(([ax, ay], i) => {
              const targets: [number,number][] = [[160,200],[100,320],[340,340],[280,380]];
              const [bx, by] = targets[i];
              return (
                <circle key={i} r="2.5" fill={c} opacity="0.9">
                  <animateMotion dur={`${1.2 + i * 0.4}s`} repeatCount="indefinite"
                    path={`M ${ax} ${ay} L ${bx} ${by}`} />
                </circle>
              );
            })}
            <text x="20" y="20" fill={c} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.1em">NET:ACTIVE</text>
          </g>
        )}

        {!isAutomation && !isIntelligence && (
          <g>
            {/* Collaboration OS — dashboard grid system */}
            {/* Perspective floor */}
            {Array.from({ length: 10 }, (_, i) => {
              const y = 260 + i * 24;
              const spread = i * 28;
              return <line key={i} x1={280 - spread} y1={y} x2={280 + spread} y2={y} stroke={c} strokeWidth="0.5" opacity={0.05 + i * 0.01} />;
            })}
            {/* Dashboard panels */}
            <rect x="60" y="80" width="180" height="100" rx="1" fill={`${c}08`} stroke={c} strokeWidth="0.5" opacity="0.6" />
            <rect x="260" y="80" width="240" height="100" rx="1" fill={`${c}05`} stroke={c} strokeWidth="0.5" opacity="0.5" />
            <rect x="60" y="200" width="120" height="80" rx="1" fill={`${c}06`} stroke={c} strokeWidth="0.5" opacity="0.5" />
            <rect x="200" y="200" width="300" height="80" rx="1" fill={`${c}04`} stroke={c} strokeWidth="0.5" opacity="0.4" />
            {/* Mini chart in first panel */}
            <polyline points="80,160 100,148 120,155 140,138 160,145 180,130 200,138 220,125" fill="none" stroke={c} strokeWidth="1" opacity="0.5" />
            {/* Connecting lines between panels */}
            <line x1="240" y1="130" x2="260" y2="130" stroke={c} strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
            <line x1="150" y1="180" x2="150" y2="200" stroke={c} strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
            {/* Data nodes at intersections */}
            {[[240,130],[260,130],[150,180],[150,200],[500,130]].map(([nx, ny], ni) => (
              <circle key={ni} cx={nx} cy={ny} r="3" fill={c} opacity="0.6" />
            ))}
            {/* Scanning line */}
            <line x1="0" y1="0" x2="560" y2="0" stroke={`${c}40`} strokeWidth="1"
              style={{ animation: 'scanLine 5s linear infinite' }} />
            <text x="20" y="20" fill={c} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.1em">COLLAB:ACTIVE</text>
          </g>
        )}

        {/* Corner brackets */}
        <path d="M 30 30 L 30 16 L 44 16" stroke={c} strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M 530 450 L 530 464 L 516 464" stroke={c} strokeWidth="1" fill="none" opacity="0.4" />
        <text x="48" y="14" fill={c} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.1em">SYS:{panel.num}</text>
      </svg>

      {/* Ghost large number */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(120px, 18vw, 220px)',
        fontWeight: 800,
        color: `${c}05`,
        fontFamily: 'var(--font-display)',
        letterSpacing: '-0.06em',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        {panel.num}
      </div>

      {/* Stat card overlay */}
      <div style={{
        position: 'absolute', bottom: 24, left: 24, right: 24,
        background: 'rgba(8,8,8,0.88)',
        border: `1px solid ${c}40`,
        padding: '12px 16px',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
        opacity: active ? 1 : 0.5,
        transition: 'opacity 0.3s',
      }}>
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Performance Index</span>
        <span style={{ fontSize: 18, fontWeight: 800, color: c, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{panel.stat}</span>
      </div>

      {/* Brackets */}
      <div style={{ position: 'absolute', top: 16, left: 16, width: 20, height: 20, borderTop: `1px solid ${c}`, borderLeft: `1px solid ${c}`, opacity: 0.5, zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: 16, right: 16, width: 20, height: 20, borderBottom: `1px solid ${c}`, borderRight: `1px solid ${c}`, opacity: 0.5, zIndex: 10 }} />
    </div>
  );
}
