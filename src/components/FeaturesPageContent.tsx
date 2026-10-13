'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const FEATURES = [
  {
    id: '01',
    category: 'AUTOMATION',
    title: 'Kill the\nrepetitive\nwork.',
    desc: 'Visual workflow builder with 800+ templates. Multi-step logic, conditional branches, time-based triggers, and AI decision nodes that learn your patterns.',
    details: ['Visual drag-and-drop builder', 'Conditional & parallel logic', 'Time + event triggers', 'AI-powered decision nodes', '800+ workflow templates'],
    metric: '92%', metricLabel: 'reduction in manual tasks',
    accentColor: 'var(--ax-red)',
  },
  {
    id: '02',
    category: 'FORECASTING',
    title: 'See around\nthe corner.',
    desc: 'ML models trained on your data surface anomalies, predict churn, and forecast revenue with 94% accuracy — before issues become crises.',
    details: ['Revenue forecasting', 'Churn prediction', 'Anomaly detection', 'Custom ML models', 'Scenario planning'],
    metric: '94%', metricLabel: 'forecast accuracy',
    accentColor: 'var(--ax-aqua)',
  },
  {
    id: '03',
    category: 'ALERTS',
    title: 'Never miss\na signal.',
    desc: 'Smart threshold alerts with context. Multi-channel delivery — Slack, SMS, email, webhook. Escalation ladders. Silence after resolution.',
    details: ['AI-powered thresholds', 'Multi-channel delivery', 'Escalation workflows', 'Alert grouping', 'Contextual summaries'],
    metric: '<90s', metricLabel: 'avg alert response time',
    accentColor: 'var(--ax-red)',
  },
  {
    id: '04',
    category: 'CRM SYNC',
    title: 'Your entire\nrevenue stack\naligned.',
    desc: 'Bidirectional sync with Salesforce, HubSpot, Pipedrive, and 40 more CRMs. Real-time field mapping. Custom objects. Zero data lag.',
    details: ['40+ CRM connectors', 'Bidirectional real-time sync', 'Custom field mapping', 'Object relationship mapping', 'Conflict resolution'],
    metric: '40+', metricLabel: 'CRM integrations',
    accentColor: 'var(--ax-aqua)',
  },
  {
    id: '05',
    category: 'REPORTING',
    title: 'Data that\nmoves people\nto act.',
    desc: 'Board-ready dashboards. Custom report builder. Scheduled delivery. Embeddable widgets. One-click exports to PDF, CSV, or Notion.',
    details: ['Custom dashboard builder', 'Scheduled email delivery', 'Embeddable widgets', 'PDF/CSV/Notion export', '200+ chart types'],
    metric: '200+', metricLabel: 'chart and visualization types',
    accentColor: 'var(--ax-red)',
  },
  {
    id: '06',
    category: 'PERMISSIONS',
    title: 'The right\naccess for\nevery role.',
    desc: 'Granular RBAC. SSO/SAML. Custom role builder. Data row-level security. Full audit trail. Compliance exports for SOC 2 and ISO 27001.',
    details: ['Granular RBAC engine', 'SSO / SAML support', 'Custom role builder', 'Row-level data security', 'Full audit trail'],
    metric: 'SOC 2', metricLabel: 'Type II certified',
    accentColor: 'var(--ax-aqua)',
  },
  {
    id: '07',
    category: 'MOBILE',
    title: 'Full power\nin your\npocket.',
    desc: 'Native iOS and Android apps. Offline mode. Biometric auth. Push alerts. The same workflows and dashboards — mobile-first redesigned.',
    details: ['Native iOS & Android', 'Offline-first mode', 'Biometric authentication', 'Push notifications', 'Mobile-optimized UX'],
    metric: '4.9★', metricLabel: 'App Store rating',
    accentColor: 'var(--ax-red)',
  },
  {
    id: '08',
    category: 'API ACCESS',
    title: 'Build on\ntop of\nAXIOM.',
    desc: 'REST and GraphQL APIs. Webhooks. SDK libraries for Python, Node, Go, and Ruby. Sandbox environments. 99.99% API uptime SLA.',
    details: ['REST + GraphQL APIs', 'Webhook subscriptions', 'Python, Node, Go, Ruby SDKs', 'Sandbox environment', '99.99% API uptime SLA'],
    metric: '99.99%', metricLabel: 'API uptime SLA',
    accentColor: 'var(--ax-aqua)',
  },
];

export default function FeaturesPageContent() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* HERO — System map composition */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#060606',
          '--mx': '60%',
          '--my': '40%',
        } as React.CSSProperties}
      >
        {/* LAYER 1: Full-bleed SVG system map environment */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="fAquaBloom" cx="65%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#00D4C8" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="fRedBloom" cx="25%" cy="60%" r="40%">
              <stop offset="0%" stopColor="#E8192C" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#E8192C" stopOpacity="0" />
            </radialGradient>
            <filter id="fNodeGlow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <rect width="1440" height="900" fill="url(#fAquaBloom)" />
          <rect width="1440" height="900" fill="url(#fRedBloom)" />

          {/* Background grid */}
          {Array.from({ length: 19 }, (_, i) => (
            <line key={`fh${i}`} x1="0" y1={i * 50} x2="1440" y2={i * 50} stroke="rgba(255,255,255,0.018)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 25 }, (_, i) => (
            <line key={`fv${i}`} x1={i * 60} y1="0" x2={i * 60} y2="900" stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
          ))}

          {/* System map nodes — 8 feature modules */}
          {[
            { x: 820, y: 200, label: 'AUTOMATION', color: '#E8192C', size: 12 },
            { x: 1020, y: 280, label: 'FORECASTING', color: '#00D4C8', size: 10 },
            { x: 1160, y: 180, label: 'ALERTS', color: '#E8192C', size: 9 },
            { x: 1100, y: 400, label: 'CRM SYNC', color: '#00D4C8', size: 10 },
            { x: 920, y: 460, label: 'REPORTING', color: '#E8192C', size: 9 },
            { x: 1240, y: 320, label: 'PERMISSIONS', color: '#00D4C8', size: 8 },
            { x: 1300, y: 480, label: 'MOBILE', color: '#E8192C', size: 8 },
            { x: 1060, y: 540, label: 'API ACCESS', color: '#00D4C8', size: 9 },
          ].map((n, i) => (
            <g key={i}>
              {/* Glow halo */}
              <circle cx={n.x} cy={n.y} r={n.size * 3} fill={n.color} opacity="0.06" filter="url(#fNodeGlow)" />
              {/* Node */}
              <circle cx={n.x} cy={n.y} r={n.size} fill="rgba(8,8,8,0.9)" stroke={n.color} strokeWidth="1" opacity="0.8" />
              <circle cx={n.x} cy={n.y} r={n.size * 0.4} fill={n.color} opacity="0.7" />
              {/* Outer ring */}
              <circle cx={n.x} cy={n.y} r={n.size * 2} fill="none" stroke={n.color} strokeWidth="0.5" opacity="0.2" style={{ animation: `signalPulse ${2.5 + i * 0.3}s ease-in-out infinite` }} />
              {/* Label */}
              <text x={n.x} y={n.y - n.size - 8} textAnchor="middle" fill={n.color} fontSize="7" fontFamily="monospace" opacity="0.6" letterSpacing="0.1em">{n.label}</text>
            </g>
          ))}

          {/* Connection lines between nodes */}
          {[
            [820, 200, 1020, 280],
            [1020, 280, 1160, 180],
            [1020, 280, 1100, 400],
            [1100, 400, 920, 460],
            [1100, 400, 1240, 320],
            [1240, 320, 1300, 480],
            [920, 460, 1060, 540],
            [1060, 540, 1300, 480],
            [1160, 180, 1240, 320],
          ].map(([x1, y1, x2, y2], i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,212,200,0.12)" strokeWidth="1" />
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,212,200,0.4)" strokeWidth="1"
                strokeDasharray="3 18" style={{ animation: `particleFlow ${1.8 + i * 0.25}s linear infinite` }} />
            </g>
          ))}

          {/* Central hub — connects to all */}
          <circle cx="820" cy="200" r="18" fill="none" stroke="#E8192C" strokeWidth="1" opacity="0.3" />
          <circle cx="820" cy="200" r="28" fill="none" stroke="#E8192C" strokeWidth="0.5" opacity="0.15" style={{ animation: 'signalPulse 3s ease-in-out infinite' }} />

          {/* Animated signal dots on connections */}
          {[[820, 200, 1020, 280], [1020, 280, 1100, 400], [1100, 400, 1060, 540]].map(([x1, y1, x2, y2], i) => (
            <circle key={i} r="2.5" fill="#00D4C8" opacity="0.9">
              <animateMotion dur={`${1.4 + i * 0.5}s`} repeatCount="indefinite"
                path={`M ${x1} ${y1} L ${x2} ${y2}`} />
            </circle>
          ))}

          {/* Corner brackets */}
          <path d="M 60 80 L 60 56 L 84 56" stroke="#00D4C8" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M 1380 820 L 1380 844 L 1356 844" stroke="#E8192C" strokeWidth="1.5" fill="none" opacity="0.4" />

          {/* Micro labels */}
          <text x="88" y="54" fill="rgba(0,212,200,0.4)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">[ SYSTEM MAP — 8 MODULES ]</text>
          <text x="60" y="860" fill="rgba(232,25,44,0.3)" fontSize="7" fontFamily="monospace" letterSpacing="0.12em">CAPABILITIES:ACTIVE</text>

          {/* Scan line */}
          <line x1="0" y1="0" x2="1440" y2="0" stroke="rgba(0,212,200,0.2)" strokeWidth="1" style={{ animation: 'scanLine 6s linear infinite' }} />
        </svg>

        {/* Animated mouse-follow glow */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'radial-gradient(circle 600px at var(--mx) var(--my), rgba(6,182,212,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Scan lines texture */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.006) 2px, rgba(255,255,255,0.006) 4px)', pointerEvents: 'none' }} />

        {/* Vertical coordinate */}
        <div style={{ position: 'absolute', left: 28, top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: 10, color: '#333', letterSpacing: '0.15em', fontFamily: 'monospace', zIndex: 5 }}>
          LAT 37.7749 · LON -122.4194
        </div>

        {/* Corner bracket — top right */}
        <div style={{ position: 'absolute', top: 100, right: 40, width: 40, height: 40, borderTop: '1px solid rgba(255,255,255,0.15)', borderRight: '1px solid rgba(255,255,255,0.15)', zIndex: 5 }} />
        <div style={{ position: 'absolute', bottom: 60, left: 60, width: 40, height: 40, borderBottom: '1px solid rgba(255,255,255,0.15)', borderLeft: '1px solid rgba(255,255,255,0.15)', zIndex: 5 }} />

        {/* Floating system status labels */}
        <div style={{ position: 'absolute', top: '18%', right: '6%', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 10px', border: '1px solid rgba(0,212,200,0.25)', background: 'rgba(6,6,6,0.7)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: 4, height: 4, background: '#00D4C8', boxShadow: '0 0 6px #00D4C8', animation: 'pulseRed 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 8, color: 'rgba(0,212,200,0.8)', fontFamily: 'monospace', letterSpacing: '0.14em' }}>8 MODULES ONLINE</span>
          </div>
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>ALL SYSTEMS NOMINAL</span>
        </div>

        <div className="ax-container" style={{ position: 'relative', zIndex: 2, paddingTop: 120 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'center', minHeight: '70vh' }}>
            {/* Left */}
            <div style={{ paddingRight: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
                <div style={{ width: 24, height: 1, background: 'var(--ax-aqua)' }} />
                <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.2em' }}>8 CORE CAPABILITIES</span>
              </div>
              <h1 className="ax-font-display" style={{
                fontSize: 'clamp(56px, 8vw, 120px)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: 'var(--ax-white)',
                margin: 0,
              }}>
                EVERY<br />
                THING<br />
                <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', color: 'transparent' }}>YOU</span><br />
                NEED.
              </h1>
              <div style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid #1a1a1a' }}>
                <h2 className="ax-font-display" style={{
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  color: 'var(--ax-red)',
                  margin: '0 0 32px',
                }}>
                  NOTHING<br />YOU DON'T.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', maxWidth: 380 }}>
                  Precision-engineered features. No bloat, no enterprise bloatware. Every capability earns its place.
                </p>
              </div>
            </div>

            {/* Right: Feature count grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#111' }}>
              {FEATURES.map((f, i) => (
                <div
                  key={f.id}
                  style={{
                    background: '#080808',
                    padding: '32px 28px',
                    cursor: 'pointer',
                    borderLeft: `2px solid transparent`,
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = '#0f0f0f';
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = f.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = '#080808';
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'transparent';
                  }}
                >
                  <div className="ax-micro-label" style={{ color: f.accentColor, marginBottom: 8, fontSize: 10 }}>{f.id} · {f.category}</div>
                  <div className="ax-font-display" style={{ fontSize: 14, fontWeight: 700, color: 'var(--ax-white)', letterSpacing: '-0.01em' }}>
                    {f.title.split('\n')[0]}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 11, color: '#444' }}>↓ scroll to explore</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, var(--ax-aqua), transparent)' }} />
      </section>

      {/* FEATURES — Alternating full editorial panels */}
      {FEATURES.map((feature, i) => (
        <section
          key={feature.id}
          style={{
            padding: '120px 0',
            background: i % 2 === 0 ? '#080808' : '#060606',
            borderBottom: '1px solid #111',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: i % 2 === 0
              ? `radial-gradient(ellipse 50% 60% at ${i % 4 < 2 ? '80%' : '20%'} 50%, rgba(220,38,38,0.03) 0%, transparent 70%)`
              : `radial-gradient(ellipse 50% 60% at ${i % 4 < 2 ? '20%' : '80%'} 50%, rgba(6,182,212,0.03) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          <div className="ax-container" style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 80,
              alignItems: 'center',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }}>
              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                  <span className="ax-micro-label" style={{ color: feature.accentColor }}>{feature.id}</span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                  <span className="ax-micro-label" style={{ color: '#444' }}>{feature.category}</span>
                </div>

                <h2 className="ax-font-display" style={{
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  whiteSpace: 'pre-line',
                  color: 'var(--ax-white)',
                  marginBottom: 32,
                }}>
                  {feature.title}
                </h2>

                <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 440, marginBottom: 40 }}>
                  {feature.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
                  {feature.details.map((d) => (
                    <li key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #151515' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: feature.accentColor, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{d}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: `1px solid ${feature.accentColor}`, paddingTop: 24, display: 'inline-block' }}>
                  <div className="ax-font-display" style={{ fontSize: 40, fontWeight: 900, color: feature.accentColor, letterSpacing: '-0.03em' }}>{feature.metric}</div>
                  <div className="ax-micro-label" style={{ color: '#555', marginTop: 4 }}>{feature.metricLabel}</div>
                </div>
              </div>

              {/* Visual panel */}
              <div style={{ direction: 'ltr', position: 'relative' }}>
                <div style={{
                  background: '#0d0d0d',
                  border: `1px solid ${feature.accentColor}22`,
                  borderTop: `3px solid ${feature.accentColor}`,
                  padding: 0,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {/* Window chrome */}
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#333' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#333' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: feature.accentColor, opacity: 0.6 }} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace' }}>axiom.app · {feature.category.toLowerCase()}</span>
                    </div>
                  </div>

                  {/* Feature-specific visual */}
                  <FeatureVisual feature={feature} />
                </div>

                {/* Floating accent label */}
                <div style={{
                  position: 'absolute',
                  bottom: -20, right: -20,
                  background: feature.accentColor,
                  padding: '8px 16px',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#000',
                  fontFamily: 'monospace',
                }}>
                  {feature.category}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ padding: '160px 0', background: '#050505' }}>
        <div className="ax-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.2em', marginBottom: 24 }}>EVERYTHING INCLUDED</div>
              <h2 className="ax-font-display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ax-white)', marginBottom: 0 }}>
                ALL OF IT.<br />
                <span style={{ color: 'var(--ax-red)' }}>DAY ONE.</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', marginBottom: 40 }}>
                Every plan gets access to every feature. No locked tiers. No "upgrade to unlock". Just full platform access from day one.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link href="/pricing" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: 13 }}>View Pricing →</Link>
                <Link href="/case-studies" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: 13 }}>Read Case Studies</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureVisual({ feature }: { feature: typeof FEATURES[0] }) {
  const visuals: Record<string, JSX.Element> = {
    'AUTOMATION': (
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['Trigger: Deal closed', '→ Notify Sales Slack', '→ Create invoice', '→ Schedule onboarding call', '✓ 3 actions queued'].map((step, i) => (
            <div key={step} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 14px',
              background: i === 4 ? 'rgba(220,38,38,0.08)' : '#111',
              border: `1px solid ${i === 4 ? 'rgba(220,38,38,0.3)' : '#1a1a1a'}`,
              borderRadius: 4,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: i === 0 ? 'var(--ax-aqua)' : i === 4 ? 'var(--ax-red)' : '#333', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: i === 4 ? 'var(--ax-red)' : '#888', fontFamily: 'monospace' }}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    'FORECASTING': (
      <div style={{ padding: 32 }}>
        <div style={{ marginBottom: 16, fontSize: 11, color: '#555', fontFamily: 'monospace' }}>REVENUE FORECAST · 90 DAYS</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 100, marginBottom: 16 }}>
          {[60, 72, 68, 80, 85, 90, 88, 95, 100, 94, 98, 105].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i > 7 ? `rgba(6,182,212,0.4)` : 'rgba(6,182,212,0.8)', borderTop: i > 7 ? `1px dashed var(--ax-aqua)` : 'none', transition: 'height 0.3s ease' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace' }}>ACTUAL</span>
          <span style={{ fontSize: 10, color: 'var(--ax-aqua)', fontFamily: 'monospace' }}>PROJECTED ↑18%</span>
        </div>
      </div>
    ),
    'ALERTS': (
      <div style={{ padding: 32 }}>
        {[
          { level: 'CRITICAL', msg: 'Churn rate spike detected', time: '2m ago', color: 'var(--ax-red)' },
          { level: 'WARNING', msg: 'Pipeline coverage below 3×', time: '14m ago', color: '#f59e0b' },
          { level: 'INFO', msg: 'Monthly target hit 87%', time: '1h ago', color: 'var(--ax-aqua)' },
        ].map(a => (
          <div key={a.msg} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #111' }}>
            <div style={{ width: 3, background: a.color, flexShrink: 0, borderRadius: 2 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 9, color: a.color, letterSpacing: '0.1em', fontFamily: 'monospace' }}>{a.level}</span>
                <span style={{ fontSize: 9, color: '#444', fontFamily: 'monospace' }}>{a.time}</span>
              </div>
              <div style={{ fontSize: 12, color: '#888' }}>{a.msg}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  const fallback = (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {feature.details.slice(0, 4).map((d) => (
        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#111', border: '1px solid #1a1a1a' }}>
          <div style={{ width: 4, height: 4, background: feature.accentColor }} />
          <span style={{ fontSize: 11, color: '#777', fontFamily: 'monospace' }}>{d}</span>
          <div style={{ marginLeft: 'auto', fontSize: 10, color: feature.accentColor }}>✓</div>
        </div>
      ))}
    </div>
  );

  return visuals[feature.category] || fallback;
}
