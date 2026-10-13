'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="product-teaser"
      style={{ position: 'relative', overflow: 'hidden', background: '#050505' }}
    >
      {/* Section marker */}
      <div className="panel-padding-20-60 layout-wrap" style={{ borderBottom: '1px solid var(--ax-border)',  display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 10 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-red)' }}>§ 07</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">SYSTEM PREVIEW</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
      </div>

      {/* Main visual block */}
      <div style={{ position: 'relative', minHeight: 700, display: 'flex', flexDirection: 'column' }}>

        {/* BG image — full bleed */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cdn/uploads/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.35, filter: 'saturate(0.6) brightness(0.7)' }}
          />
          {/* Gradient vignette — stronger at left/bottom so text reads clean */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.55) 50%, rgba(5,5,5,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,5,5,0.85) 0%, transparent 50%)' }} />
        </div>

        {/* Scan line overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,200,0.018) 3px, rgba(0,255,200,0.018) 4px)' }} />

        {/* Animated vertical scan beam */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, width: 1,
          background: 'linear-gradient(to bottom, transparent 0%, var(--ax-aqua) 50%, transparent 100%)',
          opacity: 0.4, zIndex: 3, pointerEvents: 'none',
          animation: 'horzScan 6s linear infinite',
        }} />

        {/* SVG data overlay — floating labels, crosshairs, nodes */}
        <svg
          viewBox="0 0 1400 700"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 4, pointerEvents: 'none', overflow: 'visible' }}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Corner brackets — top-left */}
          <path d="M60,60 L60,20 L100,20" stroke="var(--ax-aqua)" strokeWidth="1.5" fill="none" opacity="0.5" />
          {/* Corner brackets — top-right */}
          <path d="M1340,60 L1340,20 L1300,20" stroke="var(--ax-aqua)" strokeWidth="1.5" fill="none" opacity="0.5" />
          {/* Corner brackets — bottom-left */}
          <path d="M60,640 L60,680 L100,680" stroke="var(--ax-red)" strokeWidth="1.5" fill="none" opacity="0.4" />
          {/* Corner brackets — bottom-right */}
          <path d="M1340,640 L1340,680 L1300,680" stroke="var(--ax-red)" strokeWidth="1.5" fill="none" opacity="0.4" />

          {/* Right-side data panel outlines */}
          <rect x="880" y="80" width="200" height="36" rx="0" fill="none" stroke="rgba(0,255,200,0.12)" strokeWidth="1" />
          <rect x="880" y="130" width="140" height="36" rx="0" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <rect x="880" y="180" width="170" height="36" rx="0" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <rect x="880" y="240" width="280" height="100" rx="0" fill="rgba(0,0,0,0.25)" stroke="rgba(0,255,200,0.1)" strokeWidth="1" />

          {/* Mini bar chart in right data panel */}
          {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
            <rect
              key={i}
              x={892 + i * 24}
              y={340 - h * 0.7}
              width={14}
              height={h * 0.7}
              fill={i === 9 ? 'var(--ax-red)' : 'rgba(0,255,200,0.25)'}
              opacity={0.7 + i * 0.03}
            />
          ))}

          {/* Horizontal rule separators */}
          <line x1="60" y1="350" x2="500" y2="350" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="60" y1="420" x2="400" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          {/* Floating metric node — top right */}
          <circle cx="1100" cy="560" r="4" fill="var(--ax-aqua)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="560" r="12" fill="none" stroke="var(--ax-aqua)" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" values="12;20;12" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line x1="1100" y1="560" x2="1190" y2="520" stroke="rgba(0,255,200,0.3)" strokeWidth="1" />
          <text x="1195" y="517" fill="rgba(0,255,200,0.7)" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">LIVE · THROUGHPUT +18%</text>

          {/* Floating metric node — mid left */}
          <circle cx="660" cy="460" r="3" fill="var(--ax-red)" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <line x1="660" y1="460" x2="760" y2="430" stroke="rgba(232,25,44,0.25)" strokeWidth="1" />
          <text x="765" y="428" fill="rgba(232,25,44,0.65)" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">ALERT · ANOMALY DETECTED</text>

          {/* Grid coordinates — bottom */}
          <text x="68" y="692" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace">0.00°N · 0.00°E · SYS:ACTIVE</text>
          <text x="1200" y="692" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace" textAnchor="end">FRAME: 004092</text>

          {/* Pulsing targeting reticle on image center-right */}
          <circle cx="950" cy="360" r="30" fill="none" stroke="rgba(232,25,44,0.25)" strokeWidth="1">
            <animate attributeName="r" values="30;42;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.08;0.25" dur="3s" repeatCount="indefinite" />
          </circle>
          <line x1="930" y1="360" x2="970" y2="360" stroke="rgba(232,25,44,0.4)" strokeWidth="1" />
          <line x1="950" y1="340" x2="950" y2="380" stroke="rgba(232,25,44,0.4)" strokeWidth="1" />
        </svg>

        {/* Text content — left-anchored */}
        <div className="panel-padding-80-60-80" style={{ position: 'relative', zIndex: 10,  maxWidth: 700, marginTop: 'auto', marginBottom: 'auto', alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 700 }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, background: 'var(--ax-red)', borderRadius: '50%', animation: 'dotPulse 1.5s ease-in-out infinite' }} />
            <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.2em' }}>LIVE SYSTEM</span>
            <div style={{ width: 40, height: 1, background: 'var(--ax-border2)' }} />
            <span className="ax-micro-label" style={{ color: 'var(--ax-muted)' }}>AXIOM OS v4.1</span>
          </div>

          {/* Headline */}
          <h2
            className="ax-font-display"
            style={{
              fontSize: 'clamp(32px, 7vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              color: 'var(--ax-white)',
              margin: '0 0 40px',
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            SEE THE<br />
            SYSTEM<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent' }}>IN MOTION</span>
            <span style={{ color: 'var(--ax-red)' }}>.</span>
          </h2>

          {/* Sub copy */}
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.45)',
              maxWidth: 440,
              margin: '0 0 48px',
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s',
            }}
          >
            The command center for high-growth teams. Real-time data. Automated workflows. Revenue intelligence. All in one system built to run at speed.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              flexWrap: 'wrap',
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s',
            }}
          >
            <Link
              href="/product"
              className="ax-btn-primary"
              style={{ textDecoration: 'none', padding: '16px 36px', fontSize: 13, letterSpacing: '0.06em' }}
            >
              Explore Product →
            </Link>
            <Link
              href="/pricing"
              style={{
                fontSize: 12,
                color: 'var(--ax-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ax-white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ax-muted)')}
            >
              View Pricing →
            </Link>
          </div>

          {/* Trust micro-strip */}
          <div style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
            {['14-day free trial', 'No credit card', 'Cancel anytime'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 4, height: 4, background: 'var(--ax-aqua)', borderRadius: '50%' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--ax-border2), transparent)' }} />
    </section>
  );
}
