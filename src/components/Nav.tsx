'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
	{ label: 'Product', href: '/product' },
	{ label: 'Features', href: '/features' },
	{ label: 'Case Studies', href: '/case-studies' },
	{ label: 'Pricing', href: '/pricing' },
];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	}, []);


  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const toggle = document.getElementById('axiom-menu-toggle');
    const links = [...document.querySelectorAll<HTMLAnchorElement>('#axiom-mobile-menu a')];
    const focusable = [toggle, ...links].filter((element): element is HTMLElement => element instanceof HTMLElement);
    links[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
      if (event.key !== 'Tab' || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      if (toggle?.isConnected) toggle.focus();
    };
  }, [mobileOpen]);

	return (
		<nav
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 100,
				transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
				background: scrolled ? 'rgba(8,8,8,0.95)' : 'rgba(8,8,8,0.2)',
				backdropFilter: 'blur(20px)',
				borderBottom: scrolled ? '1px solid #252525' : '1px solid rgba(255,255,255,0.04)',
			}}
		>
			<div className="ax-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
				{/* Logo */}
				<Link href="/" className="ax-font-display" style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ax-white)', textDecoration: 'none' }}>
					AX<span style={{ color: 'var(--ax-red)' }}>I</span>OM
				</Link>

				{/* Desktop links */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="nav-links">
					{NAV_LINKS.map(({ label, href }) => {
						const isActive = pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className="ax-font-display"
								style={{
									fontSize: 13,
									fontWeight: 600,
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
									color: isActive ? 'var(--ax-white)' : 'var(--ax-white2)',
									textDecoration: 'none',
									transition: 'color 0.2s ease',
									borderBottom: isActive ? '1px solid var(--ax-red)' : '1px solid transparent',
									paddingBottom: 2,
								}}
							>
								{label}
							</Link>
						);
					})}
				</div>

				{/* CTA */}
				<div className="ax-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<Link href="/pricing" className="ax-btn-ghost" style={{ padding: '10px 24px', fontSize: 12, textDecoration: 'none' }}>
						Sign In
					</Link>
					<Link href="/pricing" className="ax-btn-primary" style={{ padding: '10px 24px', fontSize: 12, textDecoration: 'none' }}>
						Get Started →
					</Link>
				</div>

				{/* Mobile toggle */}
				<button
					className="nav-mobile-btn"
					onClick={() => setMobileOpen(!mobileOpen)}
					style={{ background: 'none', border: 'none', color: 'var(--ax-white)', cursor: 'pointer', padding: 8, display: 'none' }}
					id="axiom-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="axiom-mobile-menu"
          type="button"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						{mobileOpen ? (
							<>
								<line x1="18" y1="6" x2="6" y2="18"/>
								<line x1="6" y1="6" x2="18" y2="18"/>
							</>
						) : (
							<>
								<line x1="3" y1="8" x2="21" y2="8"/>
								<line x1="3" y1="16" x2="21" y2="16"/>
							</>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div id="axiom-mobile-menu" className="ax-mobile-menu" style={{ background: 'rgba(8,8,8,0.98)', borderTop: '1px solid #252525', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
					{NAV_LINKS.map(({ label, href }) => (
						<Link
							key={href}
							href={href}
							onClick={() => setMobileOpen(false)}
							className="ax-font-display"
							style={{
								fontSize: 14,
								fontWeight: 600,
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								color: pathname === href ? 'var(--ax-white)' : 'var(--ax-white2)',
								textDecoration: 'none',
							}}
						>
							{label}
						</Link>
					))}
					<Link href="/pricing" className="ax-btn-primary" style={{ textAlign: 'center', padding: '12px 24px', fontSize: 12, textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
						Get Started →
					</Link>
				</div>
			)}

			<style>{`
				@media (max-width: 900px) {
					.nav-links, .ax-nav-actions { display: none !important; }
					.nav-mobile-btn { display: flex !important; }
				}
			`}</style>
		</nav>
	);
}
