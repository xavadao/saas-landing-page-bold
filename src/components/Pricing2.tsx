'use client';

import { useRef, useEffect, useState } from 'react';

const PLANS = [
  {
    name: 'LAUNCH',
    price: { monthly: '49', annual: '39' },
    label: 'For teams shipping fast.',
    body: 'All the essentials, zero friction. Get from zero to production in days.',
    highlight: false,
    tag: null,
    cta: 'Start Free',
    ctaClass: 'ghost',
    features: [
      '5 team members',
      '10 active workflows',
      '1M events / month',
      'Standard integrations',
      'Community support',
      'Basic analytics',
    ],
  },
  {
    name: 'COMMAND',
    price: { monthly: '199', annual: '159' },
    label: 'For teams that move fast.',
    body: 'Full automation stack. Intelligence layer. Built for teams with no patience for slowdown.',
    highlight: true,
    tag: 'MOST POPULAR',
    cta: 'Start Building',
    ctaClass: 'primary',
    features: [
      'Unlimited team members',
      'Unlimited workflows',
      '100M events / month',
      'All integrations + API',
      'Priority support + SLA',
      'Advanced analytics',
      'Revenue intelligence',
      'Role-based access (12 tiers)',
    ],
  },
  {
    name: 'ENTERPRISE',
    price: { monthly: 'Custom', annual: 'Custom' },
    label: 'For organizations at scale.',
    body: 'Custom contracts. Dedicated infrastructure. White-glove onboarding. Built for the demanding.',
    highlight: false,
    tag: 'WHITE GLOVE',
    cta: 'Talk to Sales',
    ctaClass: 'aqua',
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'Custom SLAs (99.99%)',
      'SSO + SAML',
      'Audit log (immutable)',
      'Custom integrations',
      'Dedicated success team',
      'Volume pricing',
    ],
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [annual, setAnnual] = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="pricing"
      style={{ background: 'var(--ax-black2)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Section marker */}
      <div style={{ borderBottom: '1px solid var(--ax-border)', padding: '20px 60px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-red)' }}>§ 07</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">PRICING</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
      </div>

      {/* Header */}
      <div style={{ padding: '72px 60px 48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        <h2 className="ax-font-display" style={{
          fontSize: 'clamp(48px, 6vw, 96px)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: 'var(--ax-white)',
          margin: 0,
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(48px)',
          transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}>
          NO HIDDEN<br />
          FEES<span style={{ color: 'var(--ax-red)' }}>.</span><br />
          <span style={{ WebkitTextStroke: '2px var(--ax-white)', color: 'transparent' }}>EVER.</span>
        </h2>

        {/* Toggle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', border: '1px solid var(--ax-border2)' }}>
            <button
              onClick={() => setAnnual(false)}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-display)', border: 'none', cursor: 'pointer', color: !annual ? 'var(--ax-white)' : 'var(--ax-muted)', textTransform: 'uppercase', padding: '4px 12px', background: !annual ? 'var(--ax-surface)' : 'transparent' } as React.CSSProperties}
            >
              Monthly
            </button>
            <div style={{ width: 1, height: 14, background: 'var(--ax-border2)' }} />
            <button
              onClick={() => setAnnual(true)}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-display)', border: 'none', cursor: 'pointer', color: annual ? 'var(--ax-white)' : 'var(--ax-muted)', textTransform: 'uppercase', padding: '4px 12px', background: annual ? 'var(--ax-surface)' : 'transparent' } as React.CSSProperties}
            >
              Annual
            </button>
          </div>
          {annual && (
            <span style={{ fontSize: 10, color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em' }}>
              Save 20% with annual
            </span>
          )}
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, padding: '0 60px 60px', position: 'relative', zIndex: 5 }}>
        {PLANS.map((plan, i) => (
          <PricingCard key={i} plan={plan} annual={annual} index={i} vis={vis} />
        ))}
      </div>

      {/* Guarantee strip */}
      <div style={{ borderTop: '1px solid var(--ax-border)', padding: '24px 60px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[
          { icon: '●', label: '14-day free trial', color: 'var(--ax-aqua)' },
          { icon: '●', label: 'No credit card required', color: 'var(--ax-aqua)' },
          { icon: '●', label: 'Cancel anytime', color: 'var(--ax-aqua)' },
          { icon: '●', label: 'SOC 2 Type II certified', color: 'var(--ax-aqua)' },
        ].map((g, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: g.color, fontSize: 6 }}>{g.icon}</span>
            <span style={{ fontSize: 12, color: 'var(--ax-white2)', fontWeight: 500 }}>{g.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingCard({ plan, annual, index, vis }: { plan: typeof PLANS[0]; annual: boolean; index: number; vis: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: plan.highlight ? 'var(--ax-black)' : 'var(--ax-black)',
        border: plan.highlight ? '1px solid var(--ax-red)' : hovered ? '1px solid var(--ax-border2)' : '1px solid var(--ax-border)',
        padding: '44px 36px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: plan.highlight ? '0 0 60px rgba(232,25,44,0.1)' : 'none',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: plan.highlight ? 'var(--ax-red)' : 'transparent', transition: 'background 0.3s' }} />

      {/* Tag */}
      {plan.tag && (
        <div style={{ marginBottom: 16 }}>
          <span className="ax-tag" style={{ color: plan.highlight ? 'var(--ax-red)' : 'var(--ax-aqua)', borderColor: plan.highlight ? 'var(--ax-red)' : 'var(--ax-aqua)', background: plan.highlight ? 'var(--ax-red-dim)' : 'var(--ax-aqua-dim)', fontSize: 9 }}>
            {plan.tag}
          </span>
        </div>
      )}
      {!plan.tag && <div style={{ height: 28, marginBottom: 16 }} />}

      {/* Plan name */}
      <div className="ax-font-display" style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: 'var(--ax-muted)', marginBottom: 12, textTransform: 'uppercase' }}>
        {plan.name}
      </div>

      {/* Price */}
      <div style={{ marginBottom: 20 }}>
        {plan.price.monthly === 'Custom' ? (
          <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.03em' }}>
            Custom<span style={{ color: plan.highlight ? 'var(--ax-red)' : 'var(--ax-aqua)', fontSize: 28 }}>.</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontSize: 16, color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>$</span>
            <span style={{ fontSize: 56, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '-0.04em' }}>
              {annual ? plan.price.annual : plan.price.monthly}
            </span>
            <span style={{ fontSize: 13, color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>/mo</span>
          </div>
        )}
      </div>

      {/* Label & body */}
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', marginBottom: 8 }}>{plan.label}</div>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--ax-muted)', marginBottom: 28 }}>{plan.body}</p>

      {/* Hairline */}
      <div style={{ height: 1, background: plan.highlight ? 'linear-gradient(90deg, var(--ax-red), transparent)' : 'var(--ax-border)', marginBottom: 24 }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
        {plan.features.map((f, fi) => (
          <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 5, height: 5, background: plan.highlight ? 'var(--ax-red)' : 'var(--ax-border2)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: 'var(--ax-white2)', lineHeight: 1.4 }}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={plan.ctaClass === 'primary' ? 'ax-btn-primary' : plan.ctaClass === 'aqua' ? 'ax-btn-aqua' : 'ax-btn-ghost'}
        style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}
      >
        {plan.cta} →
      </a>
    </div>
  );
}
