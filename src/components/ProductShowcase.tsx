'use client';

import { useRef, useEffect, useState } from 'react';

const CAPABILITIES = [
	{
		tag: 'Automation',
		tagColor: 'ax-tag-red',
		headline: 'Kill the busywork.',
		body: 'Trigger multi-step workflows the moment signals fire. No code. No delays. Just relentless execution.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="var(--ax-red)" strokeWidth="1.5" fill="none"/>
				<path d="M14 8V14L18 16" stroke="var(--ax-red)" strokeWidth="1.5" strokeLinecap="round"/>
			</svg>
		),
		stat: '12× faster',
		statLabel: 'vs. manual ops',
		accentColor: 'var(--ax-red)',
		preview: [
			{ label: 'Lead scored', time: '0ms', status: 'done' },
			{ label: 'CRM updated', time: '12ms', status: 'done' },
			{ label: 'Slack alert sent', time: '28ms', status: 'done' },
			{ label: 'Email triggered', time: '31ms', status: 'live' },
		],
	},
	{
		tag: 'Intelligence',
		tagColor: 'ax-tag-aqua',
		headline: 'See what matters.',
		body: 'Surface anomalies, forecast trajectories, and surface insights before they become problems or missed opportunities.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<circle cx="14" cy="14" r="10" stroke="var(--ax-aqua)" strokeWidth="1.5" fill="none"/>
				<path d="M7 14C7 10.13 10.13 7 14 7" stroke="var(--ax-aqua)" strokeWidth="1.5" strokeLinecap="round"/>
				<circle cx="14" cy="14" r="3" fill="var(--ax-aqua)" opacity="0.5"/>
			</svg>
		),
		stat: '94% accuracy',
		statLabel: 'revenue forecasting',
		accentColor: 'var(--ax-aqua)',
		preview: [
			{ label: 'Churn risk detected', time: 'HIGH', status: 'warn' },
			{ label: 'Upsell window open', time: 'NOW', status: 'live' },
			{ label: 'Forecast updated', time: 'Q4', status: 'done' },
			{ label: 'Alert dispatched', time: '2m ago', status: 'done' },
		],
	},
	{
		tag: 'Collaboration',
		tagColor: 'ax-tag-red',
		headline: 'Ship as one team.',
		body: 'One shared workspace — real-time docs, task streams, and review gates — so nothing slips between teams.',
		icon: (
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
				<circle cx="10" cy="10" r="4" stroke="var(--ax-red)" strokeWidth="1.5" fill="none"/>
				<circle cx="20" cy="14" r="3" stroke="var(--ax-red)" strokeWidth="1.5" fill="none"/>
				<path d="M14 10C16 10 18 11 20 11" stroke="var(--ax-red)" strokeWidth="1.5" strokeLinecap="round"/>
				<path d="M10 14C10 18 12 20 14 22" stroke="var(--ax-red)" strokeWidth="1.5" strokeLinecap="round"/>
			</svg>
		),
		stat: '37%',
		statLabel: 'faster ship cycles',
		accentColor: 'var(--ax-red)',
		preview: [
			{ label: 'PR reviewed', time: '3m', status: 'done' },
			{ label: 'Design approved', time: '8m', status: 'done' },
			{ label: 'Deployment queued', time: 'next', status: 'live' },
			{ label: 'Stakeholders notified', time: 'auto', status: 'done' },
		],
	},
];

function useInView(threshold = 0.2) {
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

export default function ProductShowcase() {
	const { ref, visible } = useInView(0.1);

	return (
		<section id="product" className="ax-section" style={{ background: 'var(--ax-black)', borderTop: '1px solid var(--ax-border)' }}>
			<div className="ax-container">
				{/* Section header */}
				<div
					ref={ref}
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '0 80px',
						alignItems: 'end',
						marginBottom: 80,
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(24px)',
						transition: 'opacity 0.7s ease, transform 0.7s ease',
					}}
				>
					<div>
						<div className="ax-tag ax-tag-aqua" style={{ marginBottom: 24 }}>
							<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-aqua)', display: 'inline-block' }} />
							Product Capabilities
						</div>
						<h2
							className="ax-font-display"
							style={{
								fontSize: 'clamp(40px, 5vw, 72px)',
								fontWeight: 800,
								lineHeight: 0.95,
								letterSpacing: '-0.03em',
								color: 'var(--ax-white)',
							}}
						>
							EVERYTHING
							<br />
							<span className="ax-text-gradient-aqua">IN ONE</span>
							<br />
							ENGINE.
						</h2>
					</div>
					<div style={{ paddingBottom: 8 }}>
						<p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ax-white2)', maxWidth: 400 }}>
							Three core modules. Infinite combinations. Built for teams that refuse to operate at half speed.
						</p>
						<div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
							<a href="#pricing" className="ax-btn-primary">See All Features →</a>
						</div>
					</div>
				</div>

				{/* Capability cards */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
					{CAPABILITIES.map((cap, i) => (
						<CapabilityCard key={i} cap={cap} delay={i * 120} visible={visible} />
					))}
				</div>
			</div>
		</section>
	);
}

function CapabilityCard({
	cap,
	delay,
	visible,
}: {
	cap: (typeof CAPABILITIES)[0];
	delay: number;
	visible: boolean;
}) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="ax-card-hover"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				background: hovered ? 'var(--ax-black2)' : 'var(--ax-black3)',
				border: `1px solid ${hovered ? cap.accentColor : 'var(--ax-border)'}`,
				padding: 36,
				cursor: 'default',
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(40px)',
				transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, background 0.3s ease, border-color 0.3s ease`,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Accent glow */}
			{hovered && (
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: 2,
					background: cap.accentColor,
				}} />
			)}

			{/* Icon */}
			<div style={{ marginBottom: 24 }}>{cap.icon}</div>

			{/* Tag */}
			<div className={`ax-tag ${cap.tagColor}`} style={{ marginBottom: 20 }}>{cap.tag}</div>

			{/* Headline */}
			<h3
				className="ax-font-display"
				style={{
					fontSize: 28,
					fontWeight: 800,
					lineHeight: 1.1,
					letterSpacing: '-0.02em',
					color: 'var(--ax-white)',
					marginBottom: 16,
				}}
			>
				{cap.headline}
			</h3>

			{/* Body */}
			<p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ax-white2)', marginBottom: 32 }}>
				{cap.body}
			</p>

			{/* Mini workflow */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 28 }}>
				{cap.preview.map((step, j) => (
					<div
						key={j}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '7px 10px',
							background: 'var(--ax-black)',
							border: '1px solid var(--ax-border)',
							fontSize: 11,
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<div style={{
								width: 5,
								height: 5,
								borderRadius: '50%',
								background: step.status === 'done' ? cap.accentColor : step.status === 'warn' ? '#F59E0B' : cap.accentColor,
								opacity: step.status === 'live' ? 1 : 0.5,
							}} />
							<span style={{ color: 'var(--ax-white2)' }}>{step.label}</span>
						</div>
						<span style={{
							color: step.status === 'live' ? cap.accentColor : step.status === 'warn' ? '#F59E0B' : 'var(--ax-muted)',
							fontFamily: 'monospace',
							fontWeight: step.status === 'live' ? 700 : 400,
						}}>
							{step.time}
						</span>
					</div>
				))}
			</div>

			{/* Stat */}
			<div style={{ borderTop: '1px solid var(--ax-border)', paddingTop: 20, display: 'flex', alignItems: 'baseline', gap: 8 }}>
				<span
					className="ax-font-display"
					style={{ fontSize: 32, fontWeight: 800, color: cap.accentColor, lineHeight: 1 }}
				>
					{cap.stat}
				</span>
				<span style={{ fontSize: 12, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
					{cap.statLabel}
				</span>
			</div>
		</div>
	);
}
