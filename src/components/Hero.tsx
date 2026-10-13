'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = gridRef.current;
		if (!el) return;
		const handleMouse = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;
			el.style.backgroundPosition = `${x * 0.3}px ${y * 0.3}px`;
		};
		window.addEventListener('mousemove', handleMouse);
		return () => window.removeEventListener('mousemove', handleMouse);
	}, []);

	return (
		<section
			style={{
				position: 'relative',
				minHeight: '100vh',
				background: 'var(--ax-black)',
				display: 'flex',
				alignItems: 'stretch',
				overflow: 'hidden',
			}}
		>
			{/* Grid background */}
			<div
				ref={gridRef}
				className="ax-grid-bg"
				style={{
					position: 'absolute',
					inset: 0,
					pointerEvents: 'none',
				}}
			/>

			{/* Red glow orb top-right */}
			<div style={{
				position: 'absolute',
				top: '-10%',
				right: '-5%',
				width: 600,
				height: 600,
				background: 'radial-gradient(circle, rgba(232,25,44,0.12) 0%, transparent 70%)',
				pointerEvents: 'none',
			}} />

			{/* Aqua glow orb bottom-left */}
			<div style={{
				position: 'absolute',
				bottom: '-10%',
				left: '-5%',
				width: 500,
				height: 500,
				background: 'radial-gradient(circle, rgba(0,212,200,0.08) 0%, transparent 70%)',
				pointerEvents: 'none',
			}} />

			{/* Scan line */}
			<div className="scan-line" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} />

			{/* Content */}
			<div
				className="ax-container"
				style={{
					position: 'relative',
					zIndex: 10,
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 0,
					alignItems: 'center',
					minHeight: '100vh',
					paddingTop: 100,
					paddingBottom: 60,
				}}
			>
				{/* Left: Typography */}
				<div style={{ paddingRight: 48 }}>
					{/* Tag */}
					<div className="animate-fade-in" style={{ marginBottom: 32, animationDelay: '0.1s', opacity: 0 }}>
						<span className="ax-tag ax-tag-aqua">
							<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-aqua)', display: 'inline-block' }} />
							v2.0 Now Live — Command Center Edition
						</span>
					</div>

					{/* Headline */}
					<h1
						className="ax-font-display"
						style={{
							fontSize: 'clamp(52px, 7vw, 96px)',
							fontWeight: 800,
							lineHeight: 0.92,
							letterSpacing: '-0.03em',
							color: 'var(--ax-white)',
							marginBottom: 0,
						}}
					>
						<div className="animate-slide-left" style={{ opacity: 0, animationDelay: '0.2s' }}>
							BUILD THE
						</div>
						<div className="animate-slide-left" style={{ opacity: 0, animationDelay: '0.32s' }}>
							SYSTEM
						</div>
						<div className="animate-slide-left" style={{ opacity: 0, animationDelay: '0.44s' }}>
							THAT{' '}
							<span className="ax-text-gradient-red">MOVES</span>
						</div>
						<div className="animate-slide-left" style={{ opacity: 0, animationDelay: '0.56s' }}>
							<span style={{ color: 'var(--ax-white2)' }}>BUSINESS.</span>
						</div>
					</h1>

					{/* Accent line */}
					<div
						className="animate-fade-in"
						style={{
							width: 64,
							height: 3,
							background: 'var(--ax-red)',
							margin: '36px 0',
							opacity: 0,
							animationDelay: '0.7s',
						}}
					/>

					{/* Sub copy */}
					<p
						className="animate-fade-up"
						style={{
							fontSize: 18,
							lineHeight: 1.65,
							color: 'var(--ax-white2)',
							maxWidth: 440,
							marginBottom: 48,
							opacity: 0,
							animationDelay: '0.8s',
							fontWeight: 400,
						}}
					>
						The command-center platform built for high-growth teams. Run faster. Ship smarter. Scale cleanly — without the complexity.
					</p>

					{/* CTAs */}
					<div
						className="animate-fade-up"
						style={{
							display: 'flex',
							gap: 16,
							flexWrap: 'wrap',
							opacity: 0,
							animationDelay: '0.95s',
						}}
					>
						<a href="#pricing" className="ax-btn-primary" style={{ fontSize: 14 }}>
							Start Free →
						</a>
						<a href="#product" className="ax-btn-ghost" style={{ fontSize: 14 }}>
							See It In Action ↓
						</a>
					</div>

					{/* Social proof */}
					<div
						className="animate-fade-in"
						style={{
							marginTop: 52,
							display: 'flex',
							alignItems: 'center',
							gap: 16,
							opacity: 0,
							animationDelay: '1.1s',
						}}
					>
						<div style={{ display: 'flex' }}>
							{['#E8192C','#00D4C8','#888580','#F0EDE8','#E8192C'].map((color, i) => (
								<div
									key={i}
									style={{
										width: 32,
										height: 32,
										borderRadius: '50%',
										background: color,
										border: '2px solid var(--ax-black)',
										marginLeft: i === 0 ? 0 : -10,
										opacity: 0.85,
									}}
								/>
							))}
						</div>
						<div>
							<div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ax-white)', fontFamily: 'var(--font-display)' }}>
								4,200+ teams
							</div>
							<div style={{ fontSize: 11, color: 'var(--ax-muted)', letterSpacing: '0.04em' }}>
								already running on AXIOM
							</div>
						</div>
						<div style={{ width: 1, height: 32, background: 'var(--ax-border2)' }} />
						<div style={{ display: 'flex', gap: 2 }}>
							{[1,2,3,4,5].map(i => (
								<svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--ax-red)" xmlns="http://www.w3.org/2000/svg">
									<path d="M7 1l1.545 3.09L12 4.635l-2.5 2.43.59 3.435L7 8.845l-3.09 1.655.59-3.435L2 4.635l3.455-.545z"/>
								</svg>
							))}
						</div>
						<span style={{ fontSize: 12, color: 'var(--ax-white2)', fontWeight: 600 }}>4.9/5</span>
					</div>
				</div>

				{/* Right: Product UI */}
				<div
					className="animate-slide-right"
					style={{
						position: 'relative',
						opacity: 0,
						animationDelay: '0.4s',
					}}
				>
					<HeroProductUI />
				</div>
			</div>

			{/* Bottom divider */}
			<div style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				height: 1,
				background: 'linear-gradient(90deg, transparent, var(--ax-border2), transparent)',
			}} />

			<style>{`
				@media (max-width: 900px) {
					.hero-grid { grid-template-columns: 1fr !important; }
					.hero-right { display: none !important; }
				}
			`}</style>
		</section>
	);
}

function HeroProductUI() {
	return (
		<div style={{ position: 'relative', height: 580 }}>
			{/* Main dashboard window */}
			<div
				className="animate-border-glow"
				style={{
					position: 'absolute',
					top: 20,
					left: 20,
					right: 0,
					background: 'var(--ax-surface)',
					border: '1px solid var(--ax-border2)',
					overflow: 'hidden',
				}}
			>
				{/* Window chrome */}
				<div style={{
					display: 'flex',
					alignItems: 'center',
					gap: 8,
					padding: '12px 16px',
					borderBottom: '1px solid var(--ax-border)',
					background: 'var(--ax-black2)',
				}}>
					<div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ax-red)', opacity: 0.8 }} />
					<div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', opacity: 0.8 }} />
					<div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', opacity: 0.8 }} />
					<div style={{ flex: 1, background: 'var(--ax-border)', height: 24, borderRadius: 3, marginLeft: 8, display: 'flex', alignItems: 'center', padding: '0 10px' }}>
						<span style={{ fontSize: 10, color: 'var(--ax-muted)', fontFamily: 'monospace' }}>app.axiom.io/dashboard</span>
					</div>
				</div>

				{/* Dashboard content */}
				<div style={{ padding: 20 }}>
					{/* Header row */}
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
						<div>
							<div style={{ fontSize: 11, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Command Center</div>
							<div className="ax-font-display" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ax-white)' }}>Performance Overview</div>
						</div>
						<div style={{ display: 'flex', gap: 8 }}>
							{['Today','7D','30D'].map((t, i) => (
								<div key={t} style={{
									padding: '4px 10px',
									fontSize: 10,
									fontWeight: 700,
									fontFamily: 'var(--font-display)',
									letterSpacing: '0.06em',
									background: i === 1 ? 'var(--ax-red)' : 'var(--ax-border)',
									color: i === 1 ? 'var(--ax-white)' : 'var(--ax-muted)',
									cursor: 'pointer',
								}}>
									{t}
								</div>
							))}
						</div>
					</div>

					{/* Stat cards */}
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
						{[
							{ label: 'Revenue', value: '$2.4M', delta: '+18.3%', color: 'var(--ax-aqua)' },
							{ label: 'Active Users', value: '42,810', delta: '+6.1%', color: 'var(--ax-red)' },
							{ label: 'NPS Score', value: '87', delta: '+4pts', color: '#10B981' },
						].map(stat => (
							<div key={stat.label} style={{
								padding: 14,
								background: 'var(--ax-black3)',
								border: '1px solid var(--ax-border)',
							}}>
								<div style={{ fontSize: 10, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</div>
								<div className="ax-font-display" style={{ fontSize: 20, fontWeight: 800, color: 'var(--ax-white)', marginBottom: 4 }}>{stat.value}</div>
								<div style={{ fontSize: 10, fontWeight: 700, color: stat.color }}>{stat.delta}</div>
							</div>
						))}
					</div>

					{/* Chart */}
					<div style={{ background: 'var(--ax-black3)', border: '1px solid var(--ax-border)', padding: 16, marginBottom: 14 }}>
						<div style={{ fontSize: 10, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Revenue Trend</div>
						<svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
							{/* Grid lines */}
							{[20,40,60].map(y => (
								<line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#252525" strokeWidth="1"/>
							))}
							{/* Area fill */}
							<defs>
								<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stopColor="rgba(0,212,200,0.25)"/>
									<stop offset="100%" stopColor="rgba(0,212,200,0)"/>
								</linearGradient>
							</defs>
							<path
								d="M0,65 L40,58 L80,52 L120,60 L160,45 L200,38 L240,42 L280,28 L320,22 L360,18 L400,12 L400,80 L0,80 Z"
								fill="url(#areaGrad)"
							/>
							{/* Line */}
							<path
								d="M0,65 L40,58 L80,52 L120,60 L160,45 L200,38 L240,42 L280,28 L320,22 L360,18 L400,12"
								fill="none"
								stroke="var(--ax-aqua)"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							{/* Dots */}
							{[[280,28],[320,22],[400,12]].map(([x,y], i) => (
								<circle key={i} cx={x} cy={y} r="3" fill="var(--ax-aqua)"/>
							))}
						</svg>
					</div>

					{/* Activity feed */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
						{[
							{ event: 'Pipeline closed', value: '$84K', color: 'var(--ax-aqua)' },
							{ event: 'New enterprise deal', value: 'Vercel Inc.', color: 'var(--ax-red)' },
							{ event: 'Deployment shipped', value: 'v3.2.1', color: '#10B981' },
						].map(item => (
							<div key={item.event} style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								padding: '8px 10px',
								background: 'var(--ax-black3)',
								border: '1px solid var(--ax-border)',
							}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
									<div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color }} />
									<span style={{ fontSize: 11, color: 'var(--ax-white2)' }}>{item.event}</span>
								</div>
								<span style={{ fontSize: 11, fontWeight: 700, color: item.color, fontFamily: 'var(--font-display)' }}>{item.value}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Floating mini card - top left overlap */}
			<div
				className="animate-float"
				style={{
					position: 'absolute',
					top: 0,
					left: -20,
					background: 'var(--ax-black2)',
					border: '1px solid var(--ax-border2)',
					padding: '12px 16px',
					width: 160,
					zIndex: 10,
				}}
			>
				<div style={{ fontSize: 10, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Ship Velocity</div>
				<div className="ax-font-display" style={{ fontSize: 24, fontWeight: 800, color: 'var(--ax-aqua)' }}>3.2×</div>
				<div style={{ fontSize: 10, color: 'var(--ax-muted)' }}>faster than avg</div>
			</div>

			{/* Floating alert card - bottom left */}
			<div
				style={{
					position: 'absolute',
					bottom: 60,
					left: -30,
					background: 'var(--ax-black2)',
					border: '1px solid var(--ax-red)',
					padding: '10px 14px',
					zIndex: 10,
					display: 'flex',
					alignItems: 'center',
					gap: 10,
				}}
			>
				<div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ax-red)' }} className="animate-pulse-red" />
				<div>
					<div style={{ fontSize: 10, color: 'var(--ax-red)', fontWeight: 700, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Live Signal</div>
					<div style={{ fontSize: 10, color: 'var(--ax-white2)' }}>42 events/sec</div>
				</div>
			</div>
		</div>
	);
}
