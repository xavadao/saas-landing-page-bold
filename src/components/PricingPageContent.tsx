'use client';

import { useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    id: '01',
    name: 'LAUNCH',
    tagline: 'Start fast.',
    priceMonthly: 49,
    priceAnnual: 39,
    description: 'For founding teams and early-stage companies building their operational foundation.',
    features: [
      'Up to 10 team members',
      'Core automation workflows',
      'Standard dashboards',
      'CRM sync (1 connection)',
      'Email + chat alerts',
      'Mobile app access',
      'Community support',
      '5GB data storage',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/pricing',
    accent: 'rgba(255,255,255,0.12)',
    accentText: 'var(--ax-white2)',
    featured: false,
  },
  {
    id: '02',
    name: 'COMMAND',
    tagline: 'Move faster.',
    priceMonthly: 149,
    priceAnnual: 119,
    description: 'For scaling teams that need serious power, real-time intelligence, and deep integrations.',
    features: [
      'Up to 100 team members',
      'Unlimited automations',
      'AI forecasting + anomaly detection',
      'All CRM integrations (40+)',
      'Multi-channel smart alerts',
      'Advanced reporting + exports',
      'SSO / SAML support',
      'Priority support (4hr SLA)',
      '100GB data storage',
      'Custom roles & permissions',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/pricing',
    accent: 'var(--ax-red)',
    accentText: '#fff',
    featured: true,
  },
  {
    id: '03',
    name: 'SCALE',
    tagline: 'Operate at altitude.',
    priceMonthly: 399,
    priceAnnual: 319,
    description: 'For enterprise teams demanding maximum depth, control, and white-glove service.',
    features: [
      'Unlimited team members',
      'Everything in COMMAND',
      'Custom ML model training',
      'Dedicated infrastructure',
      'Private cloud / on-prem option',
      'HIPAA + SOC 2 Type II',
      'Advanced audit logs',
      'Custom integrations + API SLA',
      'Dedicated success manager',
      '24/7 enterprise support',
      'Unlimited storage',
    ],
    cta: 'Talk to Sales',
    ctaHref: '/pricing',
    accent: 'var(--ax-aqua)',
    accentText: '#000',
    featured: false,
  },
];

const FAQ = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. No penalties.',
  },
  {
    q: 'Is there a free trial?',
    a: '14-day free trial on all plans. No credit card required to start. Full access to every feature in your selected plan tier.',
  },
  {
    q: 'How does annual billing work?',
    a: 'Annual plans are billed once per year and save you 20% compared to monthly. You can cancel within 30 days for a full refund.',
  },
  {
    q: 'What happens when I exceed my seat limit?',
    a: 'You\'ll receive a notification when you\'re at 90% capacity. We don\'t cut off access — we work with you to right-size your plan.',
  },
  {
    q: 'Do you offer nonprofit or startup discounts?',
    a: 'Yes. Verified nonprofits get 40% off. YC-backed companies get 6 months free. Contact our team to apply.',
  },
  {
    q: 'What does enterprise pricing look like?',
    a: 'Enterprise contracts are custom-scoped based on team size, use case, and required SLAs. Most enterprise customers pay between $20K–$200K annually.',
  },
];

export default function PricingPageContent() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO — Dark vertical composition */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#060606' }}>
        {/* Vertical grid lines */}
        {[20, 40, 60, 80].map(p => (
          <div key={p} style={{ position: 'absolute', top: 0, bottom: 0, left: `${p}%`, width: 1, background: 'rgba(255,255,255,0.02)' }} />
        ))}
        {/* Animated scan */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.006) 2px, rgba(255,255,255,0.006) 4px)', pointerEvents: 'none' }} />

        {/* Top bar — plan count */}
        <div style={{ position: 'absolute', top: 100, right: 0, left: 0 }}>
          <div className="ax-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right' }}>
              <div className="ax-font-display" style={{ fontSize: 96, fontWeight: 900, color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em', lineHeight: 1 }}>03</div>
              <div className="ax-micro-label" style={{ color: '#222' }}>PLANS</div>
            </div>
          </div>
        </div>

        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, transparent 20%, var(--ax-aqua) 60%, transparent)' }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 0 100px' }}>
          <div className="ax-container">
            <div className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.25em', marginBottom: 40 }}>TRANSPARENT PRICING</div>
            <h1 className="ax-font-display" style={{
              fontSize: 'clamp(64px, 10vw, 148px)',
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: '-0.04em',
              margin: '0 0 48px',
              color: 'var(--ax-white)',
            }}>
              PRICING<br />
              BUILT TO<br />
              <span style={{ WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}>SCALE.</span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 400, margin: 0 }}>
                No hidden fees. No surprise overage bills. One price that scales with your team — and always includes everything.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, background: '#111', border: '1px solid #1a1a1a', borderRadius: 2 }}>
                <button
                  onClick={() => setAnnual(false)}
                  style={{
                    padding: '12px 24px',
                    background: !annual ? '#1a1a1a' : 'transparent',
                    border: 'none',
                    color: !annual ? 'var(--ax-white)' : '#555',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                >
                  MONTHLY
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  style={{
                    padding: '12px 24px',
                    background: annual ? 'var(--ax-aqua)' : 'transparent',
                    border: 'none',
                    color: annual ? '#000' : '#555',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ANNUAL · SAVE 20%
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, var(--ax-aqua), transparent)' }} />
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '80px 0 120px', background: '#080808' }}>
        <div className="ax-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#1a1a1a' }}>
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                style={{
                  background: plan.featured ? '#0d0d0d' : '#090909',
                  padding: '48px 40px',
                  position: 'relative',
                  borderTop: plan.featured ? `3px solid ${plan.accent}` : '3px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background 0.2s ease',
                }}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: -1, left: 40,
                    background: 'var(--ax-red)',
                    padding: '4px 12px',
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    color: '#fff',
                    fontFamily: 'monospace',
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: 40 }}>
                  <div className="ax-micro-label" style={{ color: '#444', marginBottom: 8 }}>{plan.id}</div>
                  <div className="ax-font-display" style={{ fontSize: 28, fontWeight: 900, color: 'var(--ax-white)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {plan.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#555', fontStyle: 'italic' }}>{plan.tagline}</div>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <span className="ax-font-display" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ax-white2)', marginTop: 8 }}>$</span>
                    <span className="ax-font-display" style={{ fontSize: 64, fontWeight: 900, color: 'var(--ax-white)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                      {annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: '#444', marginTop: 4 }}>per seat / month{annual ? ', billed annually' : ''}</div>
                </div>

                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
                  {plan.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #111' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke={plan.featured ? 'var(--ax-red)' : '#444'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px',
                    background: plan.featured ? plan.accent : 'transparent',
                    border: plan.featured ? 'none' : `1px solid #2a2a2a`,
                    color: plan.featured ? plan.accentText : 'var(--ax-white2)',
                    textDecoration: 'none',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#444';
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-white)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2a2a2a';
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-white2)';
                    }
                  }}
                >
                  {plan.cta} →
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise strip */}
          <div style={{ background: '#0a0a0a', border: '1px solid #151515', borderTop: 'none', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="ax-font-display" style={{ fontSize: 20, fontWeight: 800, color: 'var(--ax-white)', letterSpacing: '-0.02em', marginBottom: 4 }}>ENTERPRISE CUSTOM</div>
              <div style={{ fontSize: 13, color: '#555' }}>500+ seats · Custom SLAs · Private cloud · Dedicated success team</div>
            </div>
            <Link href="/pricing" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: 12, whiteSpace: 'nowrap' }}>
              Talk to Sales →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '120px 0', background: '#060606', borderTop: '1px solid #0f0f0f' }}>
        <div className="ax-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 80 }}>
            <div style={{ width: 1, height: 48, background: 'var(--ax-red)' }} />
            <h2 className="ax-font-display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--ax-white)', margin: 0 }}>
              WHAT'S INCLUDED<br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>IN EVERY PLAN.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 1, background: '#111' }}>
            {/* Header */}
            <div style={{ background: '#080808', padding: '20px 24px' }}>
              <span className="ax-micro-label" style={{ color: '#444' }}>FEATURE</span>
            </div>
            {['LAUNCH', 'COMMAND', 'SCALE'].map(n => (
              <div key={n} style={{ background: n === 'COMMAND' ? '#0d0d0d' : '#080808', padding: '20px 24px', textAlign: 'center', borderTop: n === 'COMMAND' ? '2px solid var(--ax-red)' : '2px solid transparent' }}>
                <span className="ax-micro-label" style={{ color: n === 'COMMAND' ? 'var(--ax-red)' : '#555' }}>{n}</span>
              </div>
            ))}

            {/* Rows */}
            {[
              ['Automation workflows', '10 workflows', 'Unlimited', 'Unlimited + AI'],
              ['Team members', 'Up to 10', 'Up to 100', 'Unlimited'],
              ['CRM integrations', '1 connection', '40+ connections', '40+ + custom'],
              ['AI forecasting', '—', '✓', '✓ + custom models'],
              ['Data storage', '5 GB', '100 GB', 'Unlimited'],
              ['SSO / SAML', '—', '✓', '✓'],
              ['Audit logs', '30 days', '1 year', 'Unlimited + export'],
              ['SLA guarantee', '99.5%', '99.9%', '99.99%'],
              ['Support', 'Community', 'Priority (4hr)', 'Dedicated (1hr)'],
            ].map(([feature, launch, command, scale], i) => (
              <>
                <div key={feature + 'f'} style={{ background: i % 2 === 0 ? '#080808' : '#070707', padding: '16px 24px', borderTop: '1px solid #111' }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{feature}</span>
                </div>
                {[launch, command, scale].map((val, j) => (
                  <div key={feature + j} style={{ background: j === 1 ? (i % 2 === 0 ? '#0d0d0d' : '#0c0c0c') : (i % 2 === 0 ? '#080808' : '#070707'), padding: '16px 24px', textAlign: 'center', borderTop: '1px solid #111' }}>
                    <span style={{ fontSize: 12, color: val === '—' ? '#333' : val === '✓' ? 'var(--ax-aqua)' : 'rgba(255,255,255,0.55)', fontFamily: 'monospace' }}>
                      {val}
                    </span>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '120px 0', background: '#070707' }}>
        <div className="ax-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <div className="ax-micro-label" style={{ color: 'var(--ax-aqua)', letterSpacing: '0.2em', marginBottom: 24 }}>FAQ</div>
              <h2 className="ax-font-display" style={{ fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ax-white)', marginBottom: 32 }}>
                FAIR<br />QUESTIONS.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.35)' }}>
                Everything you need to know before you commit. Still have questions? Chat with our team.
              </p>
            </div>
            <div>
              {FAQ.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid #111' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '24px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 24,
                    }}
                  >
                    <span className="ax-font-display" style={{ fontSize: 16, fontWeight: 700, color: openFaq === i ? 'var(--ax-white)' : 'var(--ax-white2)', letterSpacing: '-0.01em', transition: 'color 0.2s' }}>
                      {faq.q}
                    </span>
                    <div style={{ width: 20, height: 20, border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: openFaq === i ? 'var(--ax-red)' : '#555', fontSize: 14, transition: 'all 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                      +
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 24 }}>
                      <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee + CTA */}
      <section style={{ padding: '120px 0', background: '#050505', borderTop: '1px solid #0f0f0f', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 80% at 30% 50%, rgba(220,38,38,0.04) 0%, transparent 70%)' }} />
        <div className="ax-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40, padding: '20px 28px', border: '1px solid #1a1a1a', background: '#0a0a0a' }}>
                <div style={{ width: 40, height: 40, border: '1px solid var(--ax-aqua)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 4.5" stroke="var(--ax-aqua)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="ax-font-display" style={{ fontSize: 14, fontWeight: 800, color: 'var(--ax-white)', letterSpacing: '-0.01em' }}>30-Day Money-Back Guarantee</div>
                  <div style={{ fontSize: 11, color: '#555', marginTop: 2 }}>No questions. Full refund within 30 days.</div>
                </div>
              </div>

              <h2 className="ax-font-display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--ax-white)', margin: 0 }}>
                NO RISK.<br />
                <span style={{ color: 'var(--ax-red)' }}>ALL</span><br />
                UPSIDE.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', marginBottom: 48 }}>
                Start your 14-day free trial today. No credit card required. Full platform access on day one. If AXIOM doesn't transform your operations within 30 days, we'll refund every dollar.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link href="/pricing" className="ax-btn-primary" style={{ textDecoration: 'none', padding: '20px 40px', fontSize: 14, textAlign: 'center' }}>
                  Start Free Trial — No Card Needed →
                </Link>
                <Link href="/case-studies" className="ax-btn-ghost" style={{ textDecoration: 'none', padding: '20px 40px', fontSize: 14, textAlign: 'center' }}>
                  See Customer Results First
                </Link>
              </div>
              <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
                {['14-day free trial', 'No credit card', 'Cancel anytime'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ax-aqua)' }} />
                    <span style={{ fontSize: 11, color: '#555' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
