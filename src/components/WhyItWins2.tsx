'use client';

import { useRef, useEffect, useState } from 'react';

const STATS = [
  { val: '340ms', label: 'Decision Latency', desc: 'Avg signal-to-action', color: 'var(--ax-red)' },
  { val: '99.9%', label: 'Uptime SLA', desc: 'Zero-downtime deploys', color: 'var(--ax-aqua)' },
  { val: '12×', label: 'Throughput Gain', desc: 'vs. legacy tooling', color: 'var(--ax-red)' },
  { val: '$2.4B', label: 'Processed', desc: 'Across 4,200+ teams', color: 'var(--ax-aqua)' },
];

const FEATURES = [
  'Full-stack workflow automation — no glue code',
  'Real-time data pipeline with sub-400ms latency',
  'Role-based access across 12 permission layers',
  'Predictive load balancing across all environments',
  'Integrated audit log with immutable trace chain',
  'One-click rollback on any workflow, any version',
];

export default function WhyItWins() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      style={{ background: 'var(--ax-black2)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Section marker */}
      <div style={{ borderBottom: '1px solid var(--ax-border)', padding: '20px 60px', display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 5 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)' }}>§ 03</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">WHY IT WINS</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
      </div>

      {/* Big headline — full bleed */}
      <div style={{
        padding: '80px 60px 0',
        position: 'relative',
        zIndex: 5,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <h2 className="ax-font-display" style={{
          fontSize: 'clamp(52px, 8vw, 128px)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: 'var(--ax-white)',
          margin: 0,
        }}>
          RUN <span style={{ color: 'var(--ax-red)' }}>FASTER.</span><br />
          SHIP <span style={{ color: 'var(--ax-white2)' }}>SMARTER.</span><br />
          SCALE <span style={{ WebkitTextStroke: '2px var(--ax-white)', color: 'transparent' }}>CLEANLY.</span>
        </h2>
      </div>

      {/* Main grid — stats left, features right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        padding: '60px',
        gap: 60,
        position: 'relative',
        zIndex: 5,
      }}>
        {/* STATS — 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--ax-border)', alignSelf: 'start' }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '36px 28px',
                borderRight: i % 2 === 0 ? '1px solid var(--ax-border)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--ax-border)' : 'none',
                background: 'var(--ax-black)',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--ax-black)'; }}
            >
              {/* Accent bar */}
              <div style={{ height: 2, width: 28, background: s.color, marginBottom: 16 }} />
              <div style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 8 }}>{s.val}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', marginBottom: 4, letterSpacing: '0.02em' }}>{s.label}</div>
              <div style={{ fontSize: 11, color: 'var(--ax-muted)' }}>{s.desc}</div>
              {/* Ghost bg number */}
              <div style={{ position: 'absolute', bottom: -10, right: 8, fontSize: 80, fontWeight: 800, color: `${s.color === 'var(--ax-red)' ? '#E8192C' : '#00D4C8'}06`, fontFamily: 'var(--font-display)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                {s.val}
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES — list with animated reveal */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          <p style={{
            fontSize: 16,
            color: 'var(--ax-white2)',
            lineHeight: 1.7,
            marginBottom: 36,
            fontWeight: 400,
            maxWidth: 440,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}>
            Every legacy SaaS tool adds friction. AXIOM removes it — replacing disconnected workflows with a single, surgical operating layer.
          </p>
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 0',
                borderBottom: i < FEATURES.length - 1 ? '1px solid var(--ax-border)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-24px)',
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.35 + i * 0.07}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.35 + i * 0.07}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => { const el = e.currentTarget; (el.querySelector('.feat-dot') as HTMLElement).style.background = 'var(--ax-red)'; }}
              onMouseLeave={e => { const el = e.currentTarget; (el.querySelector('.feat-dot') as HTMLElement).style.background = 'var(--ax-aqua)'; }}
            >
              <div className="feat-dot" style={{ width: 4, height: 4, background: 'var(--ax-aqua)', flexShrink: 0, transition: 'background 0.2s' }} />
              <span style={{ fontSize: 14, color: 'var(--ax-white2)', fontWeight: 500, lineHeight: 1.5 }}>{feat}</span>
              <div style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--ax-border2)', fontFamily: 'monospace' }}>F{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 32, opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.9s' }}>
            <a href="#pricing" className="ax-btn-ghost" style={{ display: 'inline-flex' }}>
              See Full Specs →
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed bottom marquee text */}
      <div style={{ borderTop: '1px solid var(--ax-border)', overflow: 'hidden', padding: '24px 0', position: 'relative' }}>
        <div style={{ display: 'flex', gap: 80, animation: 'marquee 20s linear infinite', width: 'max-content' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="ax-font-display" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ax-border2)', whiteSpace: 'nowrap' }}>
              AXIOM — THE OPERATING SYSTEM FOR GROWTH — BUILD · SHIP · SCALE · REPEAT
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
