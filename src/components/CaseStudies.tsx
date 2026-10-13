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

const CASE_STUDIES = [
	{
		company: 'MERIDIAN',
		industry: 'FinTech — Series C',
		headline: 'From manual chaos to automated clarity.',
		result: 'Eliminated 80% of manual ops work in 6 weeks.',
		stats: [
			{ value: '80%', label: 'Ops work eliminated' },
			{ value: '6wk', label: 'Time to value' },
			{ value: '2.1×', label: 'Revenue per FTE' },
		],
		quote: 'AXIOM replaced four tools and a dedicated ops hire. We shipped features instead of firefighting.',
		author: 'Sarah Tren',
		role: 'CTO, Meridian',
		accentColor: 'var(--ax-aqua)',
		bgPattern: 'linear-gradient(135deg, #0a1628 0%, #080808 100%)',
	},
	{
		company: 'FORZA',
		industry: 'E-commerce — $200M ARR',
		headline: 'Doubled conversion without doubling headcount.',
		result: '+48% conversion rate in the first quarter of use.',
		stats: [
			{ value: '+48%', label: 'Conversion rate' },
			{ value: '$4.2M', label: 'Revenue unlocked' },
			{ value: '3 mo', label: 'Payback period' },
		],
		quote: 'The intelligence layer caught revenue leaks we had no idea existed. It paid for itself in 90 days.',
		author: 'Marco Vettori',
		role: 'VP Revenue, Forza',
		accentColor: 'var(--ax-red)',
		bgPattern: 'linear-gradient(135deg, #1a0808 0%, #080808 100%)',
	},
	{
		company: 'DRIFT LABS',
		industry: 'Developer Tools — 800K users',
		headline: 'Ship velocity tripled. On-call incidents halved.',
		result: '3.4× faster releases, 50% drop in production incidents.',
		stats: [
			{ value: '3.4×', label: 'Release velocity' },
			{ value: '-50%', label: 'Prod incidents' },
			{ value: '99.98%', label: 'Uptime' },
		],
		quote: 'Deployment control + anomaly detection together changed our entire release philosophy.',
		author: 'Yuki Nakamura',
		role: 'Head of Engineering, Drift Labs',
		accentColor: 'var(--ax-aqua)',
		bgPattern: 'linear-gradient(135deg, #021212 0%, #080808 100%)',
	},
];

export default function CaseStudies() {
	const { ref, visible } = useInView(0.05);

	return (
		<section
			id="case-studies"
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
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'space-between',
						marginBottom: 72,
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(24px)',
						transition: 'opacity 0.7s ease, transform 0.7s ease',
					}}
				>
					<div>
						<div className="ax-tag ax-tag-aqua" style={{ marginBottom: 24 }}>
							<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-aqua)', display: 'inline-block' }} />
							Customer Results
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
							RESULTS
							<br />
							<span className="ax-text-gradient-aqua">SPEAK</span>{' '}LOUD.
						</h2>
					</div>
					<p style={{ fontSize: 16, color: 'var(--ax-white2)', maxWidth: 320, lineHeight: 1.7 }}>
						Real teams. Real outcomes. Not curated demos or cherry-picked metrics.
					</p>
				</div>

				{/* Case study cards */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{CASE_STUDIES.map((cs, i) => (
						<CaseStudyCard key={i} cs={cs} index={i} visible={visible} />
					))}
				</div>
			</div>
		</section>
	);
}

function CaseStudyCard({ cs, index, visible }: { cs: typeof CASE_STUDIES[0]; index: number; visible: boolean }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				display: 'grid',
				gridTemplateColumns: '2fr 1fr',
				background: cs.bgPattern,
				border: `1px solid ${hovered ? cs.accentColor : 'var(--ax-border)'}`,
				overflow: 'hidden',
				cursor: 'default',
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(32px)',
				transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms, border-color 0.3s ease`,
				position: 'relative',
			}}
		>
			{/* Accent top strip */}
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				height: hovered ? 2 : 1,
				background: cs.accentColor,
				opacity: hovered ? 1 : 0.3,
				transition: 'height 0.3s ease, opacity 0.3s ease',
			}} />

			{/* Left: Main content */}
			<div style={{ padding: '56px 64px 56px 56px', borderRight: '1px solid var(--ax-border)' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
					<span
						className="ax-font-display"
						style={{
							fontSize: 20,
							fontWeight: 800,
							letterSpacing: '0.08em',
							color: 'var(--ax-white)',
						}}
					>
						{cs.company}
					</span>
					<span style={{ fontSize: 11, color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
						{cs.industry}
					</span>
				</div>

				<h3
					className="ax-font-display"
					style={{
						fontSize: 'clamp(22px, 2.5vw, 36px)',
						fontWeight: 800,
						lineHeight: 1.1,
						letterSpacing: '-0.02em',
						color: 'var(--ax-white)',
						marginBottom: 20,
					}}
				>
					{cs.headline}
				</h3>

				<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
					<div style={{ width: 24, height: 2, background: cs.accentColor }} />
					<p style={{ fontSize: 15, color: cs.accentColor, fontWeight: 600, fontFamily: 'var(--font-display)' }}>
						{cs.result}
					</p>
				</div>

				<blockquote
					style={{
						fontSize: 15,
						lineHeight: 1.7,
						color: 'var(--ax-white2)',
						borderLeft: `2px solid ${cs.accentColor}`,
						paddingLeft: 20,
						marginBottom: 28,
						fontStyle: 'italic',
					}}
				>
					&ldquo;{cs.quote}&rdquo;
				</blockquote>

				<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
					<div style={{
						width: 36,
						height: 36,
						borderRadius: '50%',
						background: cs.accentColor,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<span className="ax-font-display" style={{ fontSize: 14, fontWeight: 800, color: 'var(--ax-black)' }}>
							{cs.author[0]}
						</span>
					</div>
					<div>
						<div className="ax-font-display" style={{ fontSize: 13, fontWeight: 700, color: 'var(--ax-white)' }}>{cs.author}</div>
						<div style={{ fontSize: 11, color: 'var(--ax-muted)' }}>{cs.role}</div>
					</div>
				</div>
			</div>

			{/* Right: Stats */}
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 48px' }}>
				{cs.stats.map((stat, j) => (
					<div
						key={j}
						style={{
							padding: '28px 0',
							borderBottom: j < cs.stats.length - 1 ? '1px solid var(--ax-border)' : 'none',
							textAlign: 'center',
						}}
					>
						<div
							className="ax-font-display"
							style={{
								fontSize: 'clamp(36px, 4vw, 56px)',
								fontWeight: 800,
								color: cs.accentColor,
								lineHeight: 1,
								marginBottom: 8,
							}}
						>
							{stat.value}
						</div>
						<div style={{ fontSize: 11, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
							{stat.label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
