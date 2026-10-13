'use client';

const LINKS = {
  Product: ['Dashboard', 'Automation', 'Intelligence', 'Integrations', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact', 'Partners'],
  Developers: ['Docs', 'API Reference', 'SDKs', 'Status', 'GitHub', 'Open Source'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ax-black)', borderTop: '1px solid var(--ax-border)', position: 'relative', overflow: 'hidden' }}>
      {/* Top accent line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, var(--ax-red), var(--ax-aqua) 50%, transparent)' }} />

      {/* Main footer grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 0, borderBottom: '1px solid var(--ax-border)' }}>

        {/* Brand column */}
        <div style={{ padding: '64px 60px', borderRight: '1px solid var(--ax-border)' }}>
          {/* Logo */}
          <div className="ax-font-display" style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>
            AX<span style={{ color: 'var(--ax-red)' }}>I</span>OM
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ax-white2)', maxWidth: 280, marginBottom: 32 }}>
            The operating system for high-growth teams. Run faster. Ship smarter. Scale cleanly.
          </p>

          {/* Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', border: '1px solid var(--ax-border2)', background: 'rgba(0,212,200,0.04)', marginBottom: 28, width: 'fit-content' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ax-aqua)', boxShadow: '0 0 8px var(--ax-aqua)', animation: 'pulseRed 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>All systems operational</span>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'X', href: '#' },
              { label: 'GH', href: '#' },
              { label: 'LN', href: '#' },
              { label: 'YT', href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--ax-border2)', background: 'transparent',
                  fontSize: 10, fontWeight: 800, color: 'var(--ax-muted)', fontFamily: 'var(--font-display)',
                  transition: 'border-color 0.2s, color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--ax-aqua)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-aqua)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--ax-border2)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-muted)'; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([category, links]) => (
          <div key={category} style={{ padding: '64px 36px', borderRight: category !== 'Legal' ? '1px solid var(--ax-border)' : 'none' }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', marginBottom: 24 }}>
              {category}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ fontSize: 13, color: 'var(--ax-white2)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-white)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ax-white2)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 60px', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="ax-micro-label">© 2024 AXIOM SYSTEMS INC.</span>
          <div style={{ width: 1, height: 12, background: 'var(--ax-border2)' }} />
          <span className="ax-micro-label">ALL RIGHTS RESERVED</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="ax-micro-label">BUILD.247.PROD</span>
          <div style={{ width: 1, height: 12, background: 'var(--ax-border2)' }} />
          <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)' }}>v2.4.1</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 3, height: 3, background: 'var(--ax-aqua)', borderRadius: '50%' }} />
            <span className="ax-micro-label" style={{ color: 'var(--ax-aqua)' }}>LIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
