'use client';

import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.15) {
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

const STATS = [
	{ value: '3.2×', label: 'Faster time-to-ship', color: 'var(--ax-red)' },
	{ value: '94%', label: 'Forecast accuracy', color: 'var(--ax-aqua)' },
	{ value: '$2.1M', label: 'Avg revenue unlocked', color: 'var(--ax-white)' },
	{ value: '4,200+', label: 'Teams operating on AXIOM', color: 'var(--ax-aqua)' },
];

const FEATURES = [
	{ label: 'Multi-team workspaces', note: 'Unlimited seats' },
	{ label: 'Real-time event pipeline', note: '< 50ms latency' },
	{ label: 'AI anomaly detection', note: 'Always-on' },
	{ label: 'Native CRM integrations', note: '120+ connectors' },
	{ label: 'Audit logs & compliance', note: 'SOC 2 Type II' },
	{ label: 'No-code workflow builder', note: 'Drag + ship' },
	{ label: 'Predictive revenue engine', note: 'Rolling 90-day' },
	{ label: '24/7 dedicated support', note: 'Sub-2hr response' },
];

export default function WhyItWins() {
	const { ref, visible } = useInView(0.1);

	return (
		<section style={{ background: 'var(--ax-black2)', borderTop: '1px solid var(--ax-border)', borderBottom: '1px solid var(--ax-border)' }}>
			<div className="ax-container" ref={ref}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: 0,
						minHeight: 680,
					}}
				>
					{/* Left: Bold stats */}
					<div
						style={{
							padding: '100px 80px 100px 0',
							borderRight: '1px solid var(--ax-border)',
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateX(-32px)',
							transition: 'opacity 0.8s ease, transform 0.8s ease',
						}}
					>
						<div className="ax-tag ax-tag-red" style={{ marginBottom: 32 }}>
							<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-red)', display: 'inline-block' }} />
							Why it wins
						</div>

						<h2
							className="ax-font-display"
							style={{
								fontSize: 'clamp(36px, 4.5vw, 64px)',
								fontWeight: 800,
								lineHeight: 0.95,
								letterSpacing: '-0.03em',
								color: 'var(--ax-white)',
								marginBottom: 56,
							}}
						>
							RUN FASTER.
							<br />
							SHIP{' '}
							<span className="ax-text-gradient-red">SMARTER.</span>
							<br />
							SCALE
							<br />
							CLEANLY.
						</h2>

						{/* Stats grid */}
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
							{STATS.map((s, i) => (
								<div
									key={i}
									style={{
										padding: '28px 24px',
										background: 'var(--ax-black3)',
										border: '1px solid var(--ax-border)',
										opacity: visible ? 1 : 0,
										transform: visible ? 'none' : 'translateY(16px)',
										transition: `opacity 0.6s ease ${200 + i * 80}ms, transform 0.6s ease ${200 + i * 80}ms`,
									}}
								>
									<div
										className="ax-font-display"
										style={{ fontSize: 40, fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: 8 }}
									>
										{s.value}
									</div>
									<div style={{ fontSize: 12, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.4 }}>
										{s.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right: Feature list */}
					<div
						style={{
							padding: '100px 0 100px 80px',
							opacity: visible ? 1 : 0,
							transform: visible ? 'none' : 'translateX(32px)',
							transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
						}}
					>
						<div style={{ marginBottom: 40 }}>
							<p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ax-white2)', maxWidth: 400 }}>
								Built from the ground up for teams that operate at high velocity. Every feature is designed to remove friction, not add it.
							</p>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							{FEATURES.map((feat, i) => (
								<FeatureRow key={i} feat={feat} delay={i * 60} visible={visible} />
							))}
						</div>

						<div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--ax-border)' }}>
							<div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
								<a href="#pricing" className="ax-btn-primary" style={{ fontSize: 13 }}>
									Start Free Trial →
								</a>
								<a href="#case-studies" className="ax-btn-ghost" style={{ fontSize: 13 }}>
									See Case Studies
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeatureRow({ feat, delay, visible }: { feat: { label: string; note: string }; delay: number; visible: boolean }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '16px 0',
				borderBottom: '1px solid var(--ax-border)',
				cursor: 'default',
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(12px)',
				transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
				<div style={{
					width: 20,
					height: 20,
					border: `1px solid ${hovered ? 'var(--ax-aqua)' : 'var(--ax-border2)'}`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexShrink: 0,
					transition: 'border-color 0.2s ease',
				}}>
					<svg width="10" height="8" viewBox="0 0 10 8" fill="none">
						<path d="M1 4L4 7L9 1" stroke={hovered ? 'var(--ax-aqua)' : 'var(--ax-muted)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</div>
				<span
					className="ax-font-display"
					style={{
						fontSize: 14,
						fontWeight: 600,
						color: hovered ? 'var(--ax-white)' : 'var(--ax-white2)',
						letterSpacing: '-0.01em',
						transition: 'color 0.2s ease',
					}}
				>
					{feat.label}
				</span>
			</div>
			<span style={{
				fontSize: 11,
				color: hovered ? 'var(--ax-aqua)' : 'var(--ax-muted)',
				fontFamily: 'var(--font-display)',
				fontWeight: 700,
				letterSpacing: '0.06em',
				textTransform: 'uppercase',
				transition: 'color 0.2s ease',
			}}>
				{feat.note}
			</span>
		</div>
	);
}
