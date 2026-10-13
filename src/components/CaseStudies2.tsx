'use client';

import { useRef, useEffect, useState } from 'react';

const CASES = [
  {
    company: 'Meridian Labs',
    industry: 'Biotech / R&D Platform',
    quote: 'We compressed 6 months of operational overhead into 3 weeks. AXIOM isn\'t a tool — it\'s the operating system for how we work.',
    author: 'Priya Nambiar',
    role: 'VP Engineering',
    stats: [
      { val: '3 wks', label: 'Time to production' },
      { val: '94%', label: 'Less manual work' },
      { val: '$1.2M', label: 'Annual savings' },
    ],
    accent: 'var(--ax-red)',
    accentHex: '#E8192C',
    tag: 'AUTOMATION',
  },
  {
    company: 'Vanta Capital',
    industry: 'Fintech / Investment OS',
    quote: 'Risk modeling that used to take 2 days now happens before our morning standup. The speed advantage is existential.',
    author: 'Marcus Osei',
    role: 'Chief Product Officer',
    stats: [
      { val: '340ms', label: 'Decision latency' },
      { val: '12×', label: 'Throughput gain' },
      { val: '99.9%', label: 'Uptime SLA' },
    ],
    accent: 'var(--ax-aqua)',
    accentHex: '#00D4C8',
    tag: 'INTELLIGENCE',
  },
  {
    company: 'Reflex Studio',
    industry: 'Creative Tech / Production',
    quote: 'Our entire post-production pipeline is now autonomous. AXIOM watches the workflow so our directors don\'t have to.',
    author: 'Zara Volta',
    role: 'Co-founder & CEO',
    stats: [
      { val: '8×', label: 'Faster delivery' },
      { val: '100%', label: 'Team adoption' },
      { val: '4,200+', label: 'Projects shipped' },
    ],
    accent: 'var(--ax-red)',
    accentHex: '#E8192C',
    tag: 'WORKFLOW',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.06 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      style={{ background: '#060606', position: 'relative', overflow: 'hidden' }}
    >
      {/* LAYER 1: Full-bleed cinematic SVG scene */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="csRedBloom" cx="20%" cy="40%" r="40%">
            <stop offset="0%" stopColor="#E8192C" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="csAquaBloom" cx="80%" cy="60%" r="35%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="csFigureGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#csRedBloom)" />
        <rect width="1440" height="900" fill="url(#csAquaBloom)" />

        {/* Subtle grid */}
        {Array.from({ length: 18 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="1440" y2={i * 50} stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 24 }, (_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="900" stroke="rgba(255,255,255,0.012)" strokeWidth="0.5" />
        ))}

        {/* Blurred human silhouette — editorial feel */}
        <ellipse cx="200" cy="500" rx="80" ry="200" fill="url(#csFigureGrad)" />
        <ellipse cx="1240" cy="450" rx="60" ry="180" fill="url(#csFigureGrad)" />

        {/* Diagonal accent lines */}
        <line x1="0" y1="200" x2="400" y2="600" stroke="rgba(232,25,44,0.06)" strokeWidth="1" />
        <line x1="1440" y1="150" x2="1040" y2="650" stroke="rgba(0,212,200,0.05)" strokeWidth="1" />

        {/* Horizontal accent */}
        <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

        {/* Corner brackets */}
        <path d="M 40 40 L 40 20 L 60 20" stroke="#00D4C8" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M 1400 860 L 1400 880 L 1380 880" stroke="#E8192C" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Micro labels */}
        <text x="64" y="18" fill="rgba(0,212,200,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">[ CUSTOMER PROOF — VERIFIED ]</text>
        <text x="1180" y="878" fill="rgba(232,25,44,0.35)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">RESULTS:CONFIRMED</text>

        {/* Scanning line */}
        <line x1="0" y1="0" x2="1440" y2="0" stroke="rgba(232,25,44,0.2)" strokeWidth="1"
          style={{ animation: 'scanLine 9s linear infinite' }} />
      </svg>

      {/* Noise texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")`, pointerEvents: 'none', opacity: 0.6 }} />

      {/* Section marker */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 60px', display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 5 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)' }}>§ 05</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">CUSTOMER PROOF</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
        <span className="ax-micro-label" style={{ color: 'var(--ax-muted)' }}>VERIFIED RESULTS</span>
      </div>

      {/* EDITORIAL HERO ROW — full-width, no equal columns */}
      <div style={{ position: 'relative', zIndex: 5, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Left — massive headline */}
        <div style={{
          padding: '72px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}>
          <h2 className="ax-font-display" style={{
            fontSize: 'clamp(56px, 7vw, 112px)',
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: 'var(--ax-white)',
            margin: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(48px)',
            transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}>
            RESULTS<br />
            THAT<br />
            <span style={{ WebkitTextStroke: '2px var(--ax-white)', color: 'transparent' }}>SPEAK.</span>
          </h2>
          {/* Floating metrics — embedded in scene */}
          <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
            {[
              { val: '4,200+', label: 'Teams', color: 'var(--ax-red)' },
              { val: '$2.4B', label: 'Processed', color: 'var(--ax-aqua)' },
              { val: '99.9%', label: 'Uptime', color: 'var(--ax-red)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.03em', textShadow: `0 0 30px ${s.color}50` }}>{s.val}</div>
                <div style={{ fontSize: 9, color: 'var(--ax-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — featured quote + data overlay */}
        <div style={{ padding: '72px 60px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Data overlay lines */}
          <div style={{ position: 'absolute', top: 24, right: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <span className="ax-micro-label">MERIDIAN LABS</span>
            <span className="ax-micro-label" style={{ color: 'var(--ax-border2)' }}>—————</span>
            <span className="ax-micro-label" style={{ color: 'var(--ax-red)' }}>FEATURED</span>
          </div>
          <div style={{ height: 2, width: 40, background: 'var(--ax-red)', marginBottom: 24, boxShadow: '0 0 12px var(--ax-red)' }} />
          <blockquote style={{ margin: 0 }}>
            <p style={{ fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.5, color: 'var(--ax-white)', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em', margin: '0 0 28px' }}>
              &ldquo;We compressed 6 months of operational overhead into 3 weeks. AXIOM isn&apos;t a tool — it&apos;s the operating system for how we work.&rdquo;
            </p>
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, rgba(232,25,44,0.4), rgba(232,25,44,0.1))', border: '1px solid rgba(232,25,44,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: 'var(--ax-red)', fontFamily: 'var(--font-display)' }}>P</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)' }}>Priya Nambiar</div>
              <div style={{ fontSize: 10, color: 'var(--ax-muted)' }}>VP Engineering · Meridian Labs</div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY GRID — editorial, no equal boxes */}
      <div style={{ position: 'relative', zIndex: 5, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {CASES.map((c, i) => (
          <CaseCard key={i} c={c} index={i} visible={visible} />
        ))}
      </div>

      {/* Bottom CTA row */}
      <div style={{ padding: '28px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 5 }}>
        <span style={{ fontSize: 13, color: 'var(--ax-white2)', fontWeight: 500 }}>Join 4,200+ teams already running on AXIOM.</span>
        <a href="#pricing" className="ax-btn-ghost" style={{ display: 'inline-flex' }}>Read All Case Studies →</a>
      </div>
    </section>
  );
}

function CaseCard({ c, index, visible }: { c: typeof CASES[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const accentHex = c.accentHex;

  return (
    <div
      style={{
        background: hovered ? 'rgba(255,255,255,0.015)' : 'transparent',
        borderRight: index < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, background 0.3s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent top bar — appears on hover */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: hovered ? `linear-gradient(90deg, ${accentHex}, transparent)` : 'transparent', transition: 'background 0.4s' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span className="ax-tag" style={{ color: c.accent, borderColor: `${accentHex}40`, background: `${accentHex}10`, fontSize: 9 }}>{c.tag}</span>
        <span className="ax-micro-label" style={{ color: 'var(--ax-border2)' }}>0{index + 1}</span>
      </div>

      {/* Quote — no box */}
      <blockquote style={{ margin: 0, flex: 1 }}>
        <div style={{ fontSize: 32, lineHeight: 0.8, color: c.accent, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 10, opacity: 0.4 }}>&ldquo;</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ax-white2)', fontStyle: 'normal', fontWeight: 500, margin: 0 }}>
          {c.quote}
        </p>
      </blockquote>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          width: 36, height: 36, flexShrink: 0,
          background: `linear-gradient(135deg, ${accentHex}35, ${accentHex}08)`,
          border: `1px solid ${accentHex}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 800, color: c.accent, fontFamily: 'var(--font-display)',
        }}>
          {c.author.charAt(0)}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)' }}>{c.author}</div>
          <div style={{ fontSize: 9, color: 'var(--ax-muted)', marginTop: 1 }}>{c.role} · {c.company}</div>
        </div>
      </div>

      {/* Stats — floating, no box */}
      <div style={{ display: 'flex', gap: 24 }}>
        {c.stats.map((s, si) => (
          <div key={si}>
            <div style={{ fontSize: 20, fontWeight: 800, color: c.accent, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.02em', textShadow: `0 0 20px ${accentHex}40` }}>{s.val}</div>
            <div style={{ fontSize: 8, color: 'var(--ax-muted)', marginTop: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Industry label */}
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase' }}>{c.industry}</div>
    </div>
  );
}
