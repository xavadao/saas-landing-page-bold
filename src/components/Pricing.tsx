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

const PLANS = [
	{
		name: 'LAUNCH',
		price: '49',
		period: '/mo',
		description: 'For small teams shipping fast. All the essentials, zero friction.',
		highlight: false,
		tag: null,
		ctaLabel: 'Start Free',
		ctaClass: 'ax-btn-ghost',
		features: [
			'Up to 5 team members',
			'10 active workflows',
			'1M events / month',
			'Standard integrations (40+)',
			'7-day data retention',
			'Community support',
		],
		notIncluded: ['AI anomaly detection', 'Revenue intelligence', 'Dedicated support'],
	},
	{
		name: 'COMMAND',
		price: '249',
		period: '/mo',
		description: 'The full engine. Built for teams that operate at high velocity.',
		highlight: true,
		tag: 'Most Popular',
		ctaLabel: 'Start Command →',
		ctaClass: 'ax-btn-primary',
		features: [
			'Up to 25 team members',
			'Unlimited workflows',
			'50M events / month',
			'All integrations (120+)',
			'90-day data retention',
			'AI anomaly detection',
			'Revenue intelligence',
			'Priority support — 4hr',
		],
		notIncluded: ['Dedicated CSM', 'Custom SLA'],
	},
	{
		name: 'ENTERPRISE',
		price: 'Custom',
		period: '',
		description: 'For organizations that need control, compliance, and scale.',
		highlight: false,
		tag: 'Custom Contract',
		ctaLabel: 'Talk To Sales →',
		ctaClass: 'ax-btn-aqua',
		features: [
			'Unlimited team members',
			'Unlimited everything',
			'Unlimited event volume',
			'Custom integrations & APIs',
			'Unlimited data retention',
			'SOC 2 Type II compliant',
			'SSO / SAML / SCIM',
			'Dedicated CSM',
			'Custom SLA & uptime',
			'On-prem option available',
		],
		notIncluded: [],
	},
];

export default function Pricing() {
	const { ref, visible } = useInView(0.05);
	const [annual, setAnnual] = useState(true);

	return (
		<section
			id="pricing"
			style={{
				background: 'var(--ax-black)',
				borderTop: '1px solid var(--ax-border)',
				padding: '120px 0',
			}}
		>
			<div className="ax-container">
				{/* Header */}
				<div
					ref={ref}
					style={{
						textAlign: 'center',
						marginBottom: 72,
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(24px)',
						transition: 'opacity 0.7s ease, transform 0.7s ease',
					}}
				>
					<div className="ax-tag ax-tag-aqua" style={{ marginBottom: 24, display: 'inline-flex' }}>
						<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-aqua)', display: 'inline-block' }} />
						Pricing
					</div>
					<h2
						className="ax-font-display"
						style={{
							fontSize: 'clamp(40px, 5vw, 72px)',
							fontWeight: 800,
							lineHeight: 0.95,
							letterSpacing: '-0.03em',
							color: 'var(--ax-white)',
							marginBottom: 32,
						}}
					>
						SIMPLE.
						<br />
						<span className="ax-text-gradient-red">HONEST.</span>{' '}PRICING.
					</h2>
					<p style={{ fontSize: 17, color: 'var(--ax-white2)', maxWidth: 420, margin: '0 auto 36px' }}>
						No surprise bills. No feature gates designed to frustrate you. Pick the plan that fits.
					</p>

					{/* Toggle */}
					<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '6px 6px', background: 'var(--ax-black2)', border: '1px solid var(--ax-border)' }}>
						<button
							onClick={() => setAnnual(true)}
							className="ax-font-display"
							style={{
								padding: '8px 20px',
								fontSize: 12,
								fontWeight: 700,
								letterSpacing: '0.06em',
								textTransform: 'uppercase',
								background: annual ? 'var(--ax-red)' : 'transparent',
								color: annual ? 'var(--ax-white)' : 'var(--ax-muted)',
								border: 'none',
								cursor: 'pointer',
								transition: 'background 0.2s ease, color 0.2s ease',
							}}
						>
							Annual <span style={{ color: annual ? 'rgba(255,255,255,0.6)' : 'var(--ax-aqua)', fontSize: 10 }}>save 20%</span>
						</button>
						<button
							onClick={() => setAnnual(false)}
							className="ax-font-display"
							style={{
								padding: '8px 20px',
								fontSize: 12,
								fontWeight: 700,
								letterSpacing: '0.06em',
								textTransform: 'uppercase',
								background: !annual ? 'var(--ax-red)' : 'transparent',
								color: !annual ? 'var(--ax-white)' : 'var(--ax-muted)',
								border: 'none',
								cursor: 'pointer',
								transition: 'background 0.2s ease, color 0.2s ease',
							}}
						>
							Monthly
						</button>
					</div>
				</div>

				{/* Cards */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 2,
						alignItems: 'start',
					}}
				>
					{PLANS.map((plan, i) => (
						<PricingCard key={i} plan={plan} index={i} visible={visible} annual={annual} />
					))}
				</div>

				{/* Bottom note */}
				<div style={{ textAlign: 'center', marginTop: 52 }}>
					<p style={{ fontSize: 13, color: 'var(--ax-muted)' }}>
						All plans include a 14-day free trial. No credit card required. Cancel anytime.
					</p>
				</div>
			</div>
		</section>
	);
}

function PricingCard({ plan, index, visible, annual }: { plan: typeof PLANS[0]; index: number; visible: boolean; annual: boolean }) {
	const [hovered, setHovered] = useState(false);

	const displayPrice = plan.price === 'Custom'
		? 'Custom'
		: annual
			? String(Math.round(Number(plan.price) * 0.8))
			: plan.price;

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				background: plan.highlight ? 'var(--ax-black2)' : 'var(--ax-black3)',
				border: `1px solid ${plan.highlight ? 'var(--ax-red)' : hovered ? 'var(--ax-border2)' : 'var(--ax-border)'}`,
				padding: '44px 40px',
				position: 'relative',
				opacity: visible ? 1 : 0,
				transform: visible ? (plan.highlight ? 'translateY(-8px)' : 'none') : 'translateY(32px)',
				transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms, border-color 0.3s ease`,
				cursor: 'default',
			}}
		>
			{/* Top bar for highlighted */}
			{plan.highlight && (
				<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--ax-red)' }} />
			)}

			{/* Tag */}
			{plan.tag && (
				<div
					className={`ax-tag ${plan.highlight ? 'ax-tag-red' : 'ax-tag-aqua'}`}
					style={{ marginBottom: 24 }}
				>
					{plan.tag}
				</div>
			)}

			{/* Plan name */}
			<div
				className="ax-font-display"
				style={{
					fontSize: 13,
					fontWeight: 800,
					letterSpacing: '0.14em',
					color: plan.highlight ? 'var(--ax-red)' : 'var(--ax-muted)',
					marginBottom: 16,
					textTransform: 'uppercase',
				}}
			>
				{plan.name}
			</div>

			{/* Price */}
			<div style={{ marginBottom: 4 }}>
				<span
					className="ax-font-display"
					style={{
						fontSize: plan.price === 'Custom' ? 40 : 56,
						fontWeight: 800,
						color: 'var(--ax-white)',
						lineHeight: 1,
						letterSpacing: '-0.04em',
					}}
				>
					{plan.price !== 'Custom' && <span style={{ fontSize: 24, verticalAlign: 'top', marginTop: 12, display: 'inline-block' }}>$</span>}
					{displayPrice}
				</span>
				{plan.period && (
					<span style={{ fontSize: 14, color: 'var(--ax-muted)', marginLeft: 4 }}>{plan.period}</span>
				)}
			</div>

			{annual && plan.price !== 'Custom' && (
				<div style={{ fontSize: 11, color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 20 }}>
					Billed annually — save 20%
				</div>
			)}

			<p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ax-white2)', marginBottom: 36, marginTop: plan.price !== 'Custom' ? 16 : 0 }}>
				{plan.description}
			</p>

			{/* CTA */}
			<a
				href="#"
				className={plan.ctaClass}
				style={{
					display: 'block',
					textAlign: 'center',
					width: '100%',
					marginBottom: 36,
					fontSize: 13,
					padding: '13px 24px',
				}}
			>
				{plan.ctaLabel}
			</a>

			{/* Divider */}
			<div style={{ height: 1, background: 'var(--ax-border)', marginBottom: 28 }} />

			{/* Features */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
				{plan.features.map((feat, j) => (
					<div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
							<path d="M2 7L5.5 10.5L12 3.5" stroke={plan.highlight ? 'var(--ax-red)' : 'var(--ax-aqua)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<span style={{ fontSize: 13, color: 'var(--ax-white2)', lineHeight: 1.5 }}>{feat}</span>
					</div>
				))}
				{plan.notIncluded.map((feat, j) => (
					<div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, opacity: 0.4 }}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
							<path d="M3 11L11 3M3 3L11 11" stroke="var(--ax-muted)" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
						<span style={{ fontSize: 13, color: 'var(--ax-muted)', lineHeight: 1.5 }}>{feat}</span>
					</div>
				))}
			</div>
		</div>
	);
}
