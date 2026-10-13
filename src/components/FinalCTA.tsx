'use client';

import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.1) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);
	return { ref, visible };
}

export default function FinalCTA() {
	const { ref, visible } = useInView(0.1);

	return (
		<section
			style={{
				background: 'var(--ax-black)',
				borderTop: '1px solid var(--ax-border)',
				minHeight: '80vh',
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Background: animated grid */}
			<div
				className="ax-grid-bg"
				style={{
					position: 'absolute',
					inset: 0,
					opacity: 0.5,
					pointerEvents: 'none',
				}}
			/>

			{/* Red radial glow */}
			<div style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: 900,
				height: 600,
				background: 'radial-gradient(ellipse, rgba(232,25,44,0.12) 0%, transparent 65%)',
				pointerEvents: 'none',
			}} />

			{/* Scan line */}
			<div className="scan-line" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} />

			<div
				ref={ref}
				className="ax-container"
				style={{
					position: 'relative',
					zIndex: 10,
					textAlign: 'center',
					padding: '120px 48px',
				}}
			>
				{/* Tag */}
				<div
					className="animate-fade-in"
					style={{
						marginBottom: 40,
						opacity: visible ? 1 : 0,
						transition: 'opacity 0.6s ease',
					}}
				>
					<span className="ax-tag ax-tag-red">
						<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-red)', display: 'inline-block' }} className="animate-pulse-red" />
						No credit card required
					</span>
				</div>

				{/* Headline */}
				<h2
					className="ax-font-display"
					style={{
						fontSize: 'clamp(56px, 9vw, 128px)',
						fontWeight: 800,
						lineHeight: 0.9,
						letterSpacing: '-0.04em',
						color: 'var(--ax-white)',
						marginBottom: 0,
					}}
				>
					<div
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateY(40px)',
							transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
						}}
					>
						MOVE
					</div>
					<div
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateY(40px)',
							transition: 'opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s',
						}}
					>
						<span className="ax-text-gradient-red">FASTER.</span>
					</div>
					<div
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateY(40px)',
							transition: 'opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s',
						}}
					>
						START
					</div>
					<div
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateY(40px)',
							transition: 'opacity 0.7s ease 0.46s, transform 0.7s ease 0.46s',
							color: 'var(--ax-white2)',
						}}
					>
						TODAY.
					</div>
				</h2>

				{/* Accent line */}
				<div
					style={{
						width: visible ? 80 : 0,
						height: 4,
						background: 'var(--ax-red)',
						margin: '48px auto',
						transition: 'width 0.6s ease 0.6s',
					}}
				/>

				{/* Sub copy */}
				<p
					style={{
						fontSize: 20,
						lineHeight: 1.6,
						color: 'var(--ax-white2)',
						maxWidth: 520,
						margin: '0 auto 56px',
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(20px)',
						transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
					}}
				>
					Join 4,200+ teams already running on AXIOM. Ship your first workflow in under 10 minutes.
				</p>

				{/* CTAs */}
				<div
					style={{
						display: 'flex',
						gap: 20,
						justifyContent: 'center',
						flexWrap: 'wrap',
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(20px)',
						transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
					}}
				>
					<a href="#" className="ax-btn-primary" style={{ fontSize: 16, padding: '18px 48px' }}>
						Start Free — No Card Needed →
					</a>
					<a href="#" className="ax-btn-ghost" style={{ fontSize: 16, padding: '18px 48px' }}>
						Book a Demo
					</a>
				</div>

				{/* Trust signals */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 40,
						marginTop: 64,
						flexWrap: 'wrap',
						opacity: visible ? 0.6 : 0,
						transition: 'opacity 0.7s ease 0.9s',
					}}
				>
					{[
						'SOC 2 Type II',
						'GDPR Compliant',
						'99.98% Uptime SLA',
						'14-day free trial',
					].map(item => (
						<div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
								<path d="M2 6L5 9L10 3" stroke="var(--ax-aqua)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span style={{ fontSize: 12, color: 'var(--ax-white2)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
								{item}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
