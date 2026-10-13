'use client';

import { useRef, useEffect, useState } from 'react';

const METRICS = [
	{ value: 4200, suffix: '+', label: 'Teams worldwide', color: 'var(--ax-white)', accent: false },
	{ value: 99.98, suffix: '%', label: 'Uptime SLA', color: 'var(--ax-aqua)', accent: true },
	{ value: 2.1, prefix: '$', suffix: 'M', label: 'Avg revenue unlocked / team', color: 'var(--ax-red)', accent: false },
	{ value: 18, suffix: 'ms', label: 'Median response latency', color: 'var(--ax-white)', accent: false },
	{ value: 3.2, suffix: '×', label: 'Faster than alternatives', color: 'var(--ax-aqua)', accent: false },
	{ value: 12, suffix: 'B+', label: 'Events processed monthly', color: 'var(--ax-white)', accent: false },
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

function AnimatedNumber({ value, prefix = '', suffix = '', started }: { value: number; prefix?: string; suffix?: string; started: boolean }) {
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!started) return;
		let start: number | null = null;
		const duration = 1400;
		const step = (timestamp: number) => {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setDisplay(parseFloat((eased * value).toFixed(value < 10 ? 2 : 0)));
			if (progress < 1) requestAnimationFrame(step);
			else setDisplay(value);
		};
		requestAnimationFrame(step);
	}, [started, value]);

	const formatted = value < 10 ? display.toFixed(2) : Math.round(display).toLocaleString();

	return <>{prefix}{formatted}{suffix}</>;
}

export default function Metrics() {
	const { ref, visible } = useInView(0.1);

	return (
		<section
			style={{
				background: 'var(--ax-black2)',
				borderTop: '1px solid var(--ax-border)',
				borderBottom: '1px solid var(--ax-border)',
				padding: '100px 0',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Background decoration */}
			<div style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: 800,
				height: 400,
				background: 'radial-gradient(ellipse, rgba(0,212,200,0.04) 0%, transparent 70%)',
				pointerEvents: 'none',
			}} />

			<div className="ax-container">
				{/* Header */}
				<div
					ref={ref}
					style={{
						textAlign: 'center',
						marginBottom: 80,
						opacity: visible ? 1 : 0,
						transform: visible ? 'none' : 'translateY(24px)',
						transition: 'opacity 0.7s ease, transform 0.7s ease',
					}}
				>
					<div className="ax-tag ax-tag-red" style={{ marginBottom: 24, display: 'inline-flex' }}>
						<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-red)', display: 'inline-block' }} />
						By The Numbers
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
						THE NUMBERS
						<br />
						<span className="ax-text-gradient-aqua">DON&apos;T LIE.</span>
					</h2>
				</div>

				{/* Metrics grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 2,
					}}
				>
					{METRICS.map((metric, i) => (
						<MetricCell key={i} metric={metric} index={i} visible={visible} />
					))}
				</div>
			</div>
		</section>
	);
}

function MetricCell({ metric, index, visible }: { metric: typeof METRICS[0]; index: number; visible: boolean }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				padding: '52px 44px',
				background: hovered ? 'var(--ax-black3)' : 'transparent',
				border: '1px solid var(--ax-border)',
				cursor: 'default',
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(24px)',
				transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, background 0.3s ease`,
				textAlign: 'center',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Top accent strip on hover */}
			<div style={{
				position: 'absolute',
				top: 0,
				left: hovered ? 0 : '100%',
				right: hovered ? 0 : 0,
				height: 2,
				background: metric.color,
				transition: 'left 0.3s ease',
			}} />

			<div
				className="ax-font-display"
				style={{
					fontSize: 'clamp(48px, 5vw, 80px)',
					fontWeight: 800,
					lineHeight: 1,
					color: metric.color,
					letterSpacing: '-0.04em',
					marginBottom: 16,
				}}
			>
				<AnimatedNumber
					value={metric.value}
					prefix={metric.prefix}
					suffix={metric.suffix}
					started={visible}
				/>
			</div>
			<div style={{
				fontSize: 13,
				color: 'var(--ax-muted)',
				textTransform: 'uppercase',
				letterSpacing: '0.1em',
				fontFamily: 'var(--font-display)',
				fontWeight: 600,
				lineHeight: 1.4,
			}}>
				{metric.label}
			</div>
		</div>
	);
}
