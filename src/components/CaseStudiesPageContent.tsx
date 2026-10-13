'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const CASE_STUDIES = [
  {
    id: '01',
    company: 'Meridian Capital',
    industry: 'FINANCIAL SERVICES',
    challenge: 'A 340-person investment firm running deal flow across 11 disconnected systems. Analysts spending 60% of their time in spreadsheets. Pipeline reporting lagged by 3 weeks.',
    outcome: 'Unified all deal tracking, investor comms, and compliance workflows into AXIOM. First week: full pipeline visibility. First month: 3-week reporting lag eliminated.',
    quote: 'We closed our Series B 40 days faster than our last raise. AXIOM turned our data chaos into a competitive advantage.',
    author: 'Sarah Chen',
    role: 'COO, Meridian Capital',
    initials: 'SC',
    stats: [
      { value: '+60%', label: 'Faster deal velocity' },
      { value: '-78%', label: 'Reporting time' },
      { value: '$2.1M', label: 'Annual cost savings' },
      { value: '3 weeks', label: 'Eliminated reporting lag' },
    ],
    accentColor: 'var(--ax-red)',
    tag: 'SERIES B GROWTH',
  },
  {
    id: '02',
    company: 'Helix Systems',
    industry: 'ENTERPRISE SOFTWARE',
    challenge: 'A 1,200-person SaaS company with fragmented revenue operations. Sales, CS, and Finance spoke different data languages. Forecast accuracy was 52%.',
    outcome: 'AXIOM became the single source of truth across all revenue functions. Forecast accuracy jumped to 94% in 90 days. Churn dropped as CS got predictive signals.',
    quote: 'Revenue operations used to be our biggest internal argument. Now it\'s our biggest competitive moat.',
    author: 'Marcus Webb',
    role: 'VP Revenue Operations, Helix Systems',
    initials: 'MW',
    stats: [
      { value: '94%', label: 'Forecast accuracy (from 52%)' },
      { value: '-32%', label: 'Customer churn rate' },
      { value: '+$8.4M', label: 'ARR recovered from churn prevention' },
      { value: '12 weeks', label: 'Full deployment timeline' },
    ],
    accentColor: 'var(--ax-aqua)',
    tag: 'REVENUE INTELLIGENCE',
  },
  {
    id: '03',
    company: 'Volta Commerce',
    industry: 'RETAIL OPERATIONS',
    challenge: 'A 60-person e-commerce operator managing 3 brands, 4 warehouses, and 200K+ SKUs. Ops team drowning in manual workflows. 40 hours/week lost to spreadsheet reconciliation.',
    outcome: 'AXIOM automated 94% of inventory reconciliation, supplier comms, and order routing. Ops team pivoted from data entry to strategic work. Team grew 0% while revenue grew 80%.',
    quote: 'We scaled 3× without adding headcount. Every founder should be asking: what does AXIOM make possible for us?',
    author: 'Priya Nair',
    role: 'Founder & CEO, Volta Commerce',
    initials: 'PN',
    stats: [
      { value: '-80%', label: 'Manual workload eliminated' },
      { value: '3×', label: 'Revenue growth, same team size' },
      { value: '40hrs', label: 'Weekly hours reclaimed' },
      { value: '94%', label: 'Workflows automated' },
    ],
    accentColor: 'var(--ax-red)',
    tag: 'OPERATIONAL SCALE',
  },
  {
    id: '04',
    company: 'Stratus Health',
    industry: 'HEALTHCARE TECH',
    challenge: 'A 180-person healthcare platform managing clinical ops, billing, and partner networks. HIPAA-compliant data fragmented across 8 vendor tools costing $1.2M/year.',
    outcome: 'Consolidated to AXIOM with full HIPAA compliance. Cut tool spend by 71%. Billing cycle reduced from 45 to 8 days. Clinical ops teams got real-time dashboards for the first time.',
    quote: 'We told the board we\'d replace 7 tools with one. They were skeptical. Six months later, we\'re saving $860K a year and shipping faster.',
    author: 'Dr. James Okafor',
    role: 'CTO, Stratus Health',
    initials: 'JO',
    stats: [
      { value: '-71%', label: 'SaaS tool spend' },
      { value: '45→8', label: 'Day billing cycle' },
      { value: '$860K', label: 'Annual savings' },
      { value: '100%', label: 'HIPAA compliant' },
    ],
    accentColor: 'var(--ax-aqua)',
    tag: 'ENTERPRISE CONSOLIDATION',
  },
];

const LOGOS = ['MERIDIAN', 'HELIX', 'VOLTA', 'STRATUS', 'FORGE', 'ATLAS', 'NUCLEUS', 'VANTAGE'];

export default function CaseStudiesPageContent() {
  const [activeStudy, setActiveStudy] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setCountersStarted(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO — Full-bleed cinematic editorial header */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#050505' }}>
        {/* LAYER 1: Full-bleed SVG editorial environment — human+system blend */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="csHeroRed" cx="15%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#E8192C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="csHeroAqua" cx="85%" cy="30%" r="40%">
              <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="csHeroFigure" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="csHeroFigure2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8192C" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#csHeroRed)" />
          <rect width="1440" height="900" fill="url(#csHeroAqua)" />

          {/* Subtle grid */}
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`ch${i}`} x1="0" y1={i * 80} x2="1440" y2={i * 80} stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 19 }, (_, i) => (
            <line key={`cv${i}`} x1={i * 80} y1="0" x2={i * 80} y2="900" stroke="rgba(255,255,255,0.012)" strokeWidth="0.5" />
          ))}

          {/* Blurred human silhouette forms — editorial feel */}
          <ellipse cx="160" cy="480" rx="90" ry="280" fill="url(#csHeroFigure)" />
          <ellipse cx="140" cy="500" rx="50" ry="200" fill="url(#csHeroFigure2)" />
          <ellipse cx="1280" cy="420" rx="70" ry="240" fill="url(#csHeroFigure)" />

          {/* Diagonal editorial accent lines */}
          <line x1="0" y1="180" x2="500" y2="700" stroke="rgba(232,25,44,0.07)" strokeWidth="1" />
          <line x1="0" y1="240" x2="400" y2="700" stroke="rgba(232,25,44,0.04)" strokeWidth="0.5" />
          <line x1="1440" y1="120" x2="940" y2="720" stroke="rgba(0,212,200,0.06)" strokeWidth="1" />

          {/* Horizontal data lines */}
          <line x1="0" y1="420" x2="1440" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="rgba(232,25,44,0.06)" strokeWidth="0.5" />

          {/* Floating data markers — editorial metrics */}
          {[
            { x: 320, y: 280, val: '$11M+', label: 'SAVINGS', color: '#E8192C' },
            { x: 720, y: 200, val: '4.2×', label: 'AVG ROI', color: '#00D4C8' },
            { x: 1100, y: 260, val: '94%', label: 'ACCURACY', color: '#E8192C' },
          ].map((m, i) => (
            <g key={i}>
              <line x1={m.x} y1={m.y - 20} x2={m.x} y2={m.y + 20} stroke={m.color} strokeWidth="0.5" opacity="0.3" />
              <line x1={m.x - 20} y1={m.y} x2={m.x + 20} y2={m.y} stroke={m.color} strokeWidth="0.5" opacity="0.3" />
              <circle cx={m.x} cy={m.y} r="3" fill={m.color} opacity="0.6" />
              <text x={m.x + 12} y={m.y - 8} fill={m.color} fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.5" letterSpacing="-0.02em">{m.val}</text>
              <text x={m.x + 12} y={m.y + 8} fill={m.color} fontSize="7" fontFamily="monospace" opacity="0.35" letterSpacing="0.12em">{m.label}</text>
            </g>
          ))}

          {/* Connecting line between markers */}
          <path d="M 320 280 L 720 200 L 1100 260" stroke="rgba(0,212,200,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 8" />

          {/* Corner brackets */}
          <path d="M 60 80 L 60 56 L 84 56" stroke="#E8192C" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M 1380 820 L 1380 844 L 1356 844" stroke="#00D4C8" strokeWidth="1.5" fill="none" opacity="0.4" />

          {/* Micro labels */}
          <text x="88" y="54" fill="rgba(232,25,44,0.4)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">[ CUSTOMER PROOF — VERIFIED ]</text>
          <text x="60" y="860" fill="rgba(0,212,200,0.3)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">RESULTS:CONFIRMED · 4 STUDIES</text>

          {/* Scan line */}
          <line x1="0" y1="0" x2="1440" y2="0" stroke="rgba(232,25,44,0.2)" strokeWidth="1" style={{ animation: 'scanLine 9s linear infinite' }} />
        </svg>

        {/* Film grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`, backgroundSize: '256px 256px', pointerEvents: 'none', zIndex: 1, opacity: 0.5, mixBlendMode: 'overlay' }} />

        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 50% 100%, transparent 40%, rgba(5,5,5,0.85) 100%)', zIndex: 2 }} />

        {/* Left red column accent */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, transparent, var(--ax-red), transparent)', zIndex: 3 }} />

        {/* Diagonal scan texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.006) 2px, rgba(255,255,255,0.006) 4px)', pointerEvents: 'none', zIndex: 3 }} />

        {/* Counter strip - top right */}
        <div style={{ position: 'absolute', top: 100, right: 40, textAlign: 'right', zIndex: 5 }}>
          <div className="ax-font-display" style={{ fontSize: 72, fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1, letterSpacing: '-0.05em' }}>04</div>
          <div className="ax-micro-label" style={{ color: '#333' }}>CASE STUDIES</div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 0 120px' }}>
          <div className="ax-container">
            <div className="ax-micro-label" style={{ color: 'var(--ax-red)', letterSpacing: '0.25em', marginBottom: 48 }}>CUSTOMER PROOF</div>
            <h1 className="ax-font-display" style={{
              fontSize: 'clamp(72px, 12vw, 180px)',
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              margin: 0,
              color: 'var(--ax-white)',
            }}>
              RESULTS<br />
              THAT<br />
              <span style={{ WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}>COMPOUND.</span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 60 }}>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 420 }}>
                Four companies. Four different industries. The same outcome — operations transformed, numbers that don't lie.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, textAlign: 'right' }}>
                {[['$11M+', 'Customer savings'], ['4.2×', 'Avg ROI'], ['<90 days', 'Time to value']].map(([v, l]) => (
                  <div key={l}>
                    <div className="ax-font-display" style={{ fontSize: 32, fontWeight: 900, color: 'var(--ax-white)', letterSpacing: '-0.03em' }}>{v}</div>
                    <div className="ax-micro-label" style={{ color: '#444', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, var(--ax-red), transparent)' }} />
      </section>

      {/* Logo strip */}
      <section style={{ padding: '48px 0', background: '#080808', borderBottom: '1px solid #111', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 64, animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={i} className="ax-font-display" style={{ fontSize: 13, fontWeight: 800, color: '#2a2a2a', letterSpacing: '0.2em' }}>{logo}</span>
          ))}
        </div>
      </section>

      {/* Case Studies — Full editorial layout */}
      {CASE_STUDIES.map((study, i) => (
        <section key={study.id} style={{ background: i % 2 === 0 ? '#070707' : '#050505', borderBottom: '1px solid #0f0f0f', position: 'relative', overflow: 'hidden' }}>

          {/* Oversized background number */}
          <div className="ax-font-display" style={{
            position: 'absolute',
            top: '50%', right: i % 2 === 0 ? -20 : 'auto', left: i % 2 === 0 ? 'auto' : -20,
            transform: 'translateY(-50%)',
            fontSize: 'clamp(200px, 25vw, 360px)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'rgba(255,255,255,0.018)',
            letterSpacing: '-0.05em',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            {study.id}
          </div>

          <div className="ax-container" style={{ position: 'relative', padding: '120px 0' }}>
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 80 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 2, background: study.accentColor }} />
                  <span className="ax-micro-label" style={{ color: study.accentColor }}>{study.id} · {study.industry}</span>
                </div>
                <h2 className="ax-font-display" style={{ fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9, color: 'var(--ax-white)', margin: 0 }}>
                  {study.company}
                </h2>
              </div>
              <div style={{ background: study.accentColor + '15', border: `1px solid ${study.accentColor}30`, padding: '8px 16px' }}>
                <span className="ax-micro-label" style={{ color: study.accentColor }}>{study.tag}</span>
              </div>
            </div>

            {/* Body: 3-column */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#111', marginBottom: 1 }}>
              {/* Challenge */}
              <div style={{ background: '#080808', padding: '40px 36px' }}>
                <div className="ax-micro-label" style={{ color: '#444', marginBottom: 20 }}>THE CHALLENGE</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  {study.challenge}
                </p>
              </div>
              {/* Outcome */}
              <div style={{ background: '#090909', padding: '40px 36px' }}>
                <div className="ax-micro-label" style={{ color: '#444', marginBottom: 20 }}>THE OUTCOME</div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  {study.outcome}
                </p>
              </div>
              {/* Quote */}
              <div style={{ background: '#0a0a0a', padding: '40px 36px', borderLeft: `3px solid ${study.accentColor}` }}>
                <div className="ax-micro-label" style={{ color: study.accentColor, marginBottom: 20 }}>IN THEIR WORDS</div>
                <blockquote style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', margin: '0 0 24px' }}>
                  "{study.quote}"
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: study.accentColor + '30', border: `1px solid ${study.accentColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="ax-font-display" style={{ fontSize: 11, fontWeight: 800, color: study.accentColor }}>{study.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ax-white)' }}>{study.author}</div>
                    <div style={{ fontSize: 10, color: '#555' }}>{study.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 1, background: '#111' }}>
              {study.stats.map((stat) => (
                <div key={stat.label} style={{ background: '#080808', padding: '32px 28px', borderTop: `1px solid ${study.accentColor}30` }}>
                  <div className="ax-font-display" style={{ fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 900, color: study.accentColor, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div className="ax-micro-label" style={{ color: '#555', marginTop: 8 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Aggregate metrics */}
      <section ref={metricsRef} style={{ padding: '120px 0', background: '#060606', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div className="ax-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 80 }}>
            <div style={{ width: 1, height: 48, background: 'var(--ax-red)' }} />
            <h2 className="ax-font-display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9, margin: 0, color: 'var(--ax-white)' }}>
              ACROSS ALL<br />CUSTOMERS.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#111' }}>
            {[
              { v: '4,200+', label: 'Teams on AXIOM', color: 'var(--ax-white)' },
              { v: '$11M+', label: 'Customer savings to date', color: 'var(--ax-red)' },
              { v: '94%', label: 'Avg forecast accuracy', color: 'var(--ax-aqua)' },
              { v: '4.2×', label: 'Average ROI in 6 months', color: 'var(--ax-white)' },
            ].map((m) => (
              <div key={m.label} style={{ background: '#080808', padding: '48px 36px' }}>
                <div className="ax-font-display" style={{ fontSize: 'clamp(40px, 4vw, 64px)', fontWeight: 900, color: m.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {m.v}
                </div>
                <div className="ax-micro-label" style={{ color: '#555', marginTop: 12 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '160px 0', background: '#050505', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(220,38,38,0.04) 0%, transparent 70%)' }} />
        <div className="ax-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="ax-micro-label" style={{ color: 'var(--ax-red)', letterSpacing: '0.2em', marginBottom: 24 }}>YOUR TURN</div>
              <h2 className="ax-font-display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--ax-white)', margin: 0 }}>
                WRITE YOUR<br />
                <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>OWN STORY.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 240 }}>
              <Link href="/pricing" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '18px 40px', fontSize: 14, textAlign: 'center' }}>Start Free Trial →</Link>
              <Link href="/product" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '18px 40px', fontSize: 14, textAlign: 'center' }}>Explore the Platform</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
