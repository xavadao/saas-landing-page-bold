'use client';

const LOGOS = [
	{ name: 'Vercel', symbol: '▲', color: 'var(--ax-white2)' },
	{ name: 'Stripe', symbol: '◈', color: 'var(--ax-aqua)' },
	{ name: 'Linear', symbol: '◆', color: 'var(--ax-white2)' },
	{ name: 'Figma', symbol: '◉', color: 'var(--ax-red)' },
	{ name: 'Notion', symbol: '□', color: 'var(--ax-white2)' },
	{ name: 'Supabase', symbol: '⬡', color: 'var(--ax-aqua)' },
	{ name: 'Resend', symbol: '◎', color: 'var(--ax-white2)' },
	{ name: 'PlanetScale', symbol: 'PS', color: 'var(--ax-red)' },
	{ name: 'Railway', symbol: '⊞', color: 'var(--ax-white2)' },
	{ name: 'Render', symbol: '◧', color: 'var(--ax-aqua)' },
	{ name: 'Clerk', symbol: '⟐', color: 'var(--ax-white2)' },
	{ name: 'Upstash', symbol: '⌘', color: 'var(--ax-red)' },
];

export default function LogoMarquee() {
	return (
		<section
			style={{
				background: 'var(--ax-black)',
				borderTop: '1px solid var(--ax-border)',
				borderBottom: '1px solid var(--ax-border)',
				padding: '0',
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			{/* Top hairline red */}
			<div style={{ height: 2, background: 'linear-gradient(90deg, var(--ax-red), transparent 60%)', pointerEvents: 'none' }} />
			{/* Editorial header row */}
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 60px 14px', borderBottom: '1px solid var(--ax-border)' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Trusted by</span>
					<div style={{ height: 1, width: 40, background: 'var(--ax-border2)' }} />
					<span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ax-white)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>4,200<span style={{ color: 'var(--ax-red)' }}>+</span> Elite Teams</span>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ax-aqua)', boxShadow: '0 0 6px var(--ax-aqua)' }} />
					<span style={{ fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>All Verified</span>
				</div>
			</div>
			{/* Left fade */}
			<div style={{
				position: 'absolute',
				left: 0,
				top: 0,
				bottom: 0,
				width: 120,
				background: 'linear-gradient(90deg, var(--ax-black2), transparent)',
				zIndex: 10,
				pointerEvents: 'none',
			}} />
			{/* Right fade */}
			<div style={{
				position: 'absolute',
				right: 0,
				top: 0,
				bottom: 0,
				width: 120,
				background: 'linear-gradient(270deg, var(--ax-black2), transparent)',
				zIndex: 10,
				pointerEvents: 'none',
			}} />

			{/* Label */}
			<div style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				zIndex: 20,
				display: 'none',
			}} />

			<div style={{ display: 'flex', alignItems: 'center' }}>
				{/* Scrolling strip - doubled for seamless loop */}
				<div className="animate-marquee" style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
					{[...LOGOS, ...LOGOS].map((logo, i) => (
						<div
							key={i}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 10,
								padding: '0 48px',
								borderRight: '1px solid var(--ax-border)',
								whiteSpace: 'nowrap',
								opacity: 0.45,
								transition: 'opacity 0.2s ease',
								cursor: 'default',
							}}
							onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
							onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
						>
							<span
								className="ax-font-display"
								style={{
									fontSize: 14,
									fontWeight: 800,
									color: 'var(--ax-white2)',
									letterSpacing: '-0.01em',
									lineHeight: 1,
									minWidth: 20,
									textAlign: 'center',
								}}
							>
								{logo.symbol}
							</span>
							<span
								className="ax-font-display"
								style={{
									fontSize: 13,
									fontWeight: 700,
									color: 'var(--ax-white2)',
									letterSpacing: '0.06em',
									textTransform: 'uppercase',
								}}
							>
								{logo.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Trusted by label overlay */}
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: 16,
				marginBottom: -8,
			}}>
				<span style={{
					fontSize: 10,
					color: 'var(--ax-muted)',
					textTransform: 'uppercase',
					letterSpacing: '0.14em',
					fontFamily: 'var(--font-display)',
					fontWeight: 600,
				}}>
					Trusted by teams at
				</span>
			</div>
		</section>
	);
}
