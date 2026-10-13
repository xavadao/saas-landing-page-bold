'use client';

import { useRef, useEffect, useState } from 'react';

const PANELS = [
	{
		number: '01',
		title: 'Command Center',
		headline: 'YOUR ENTIRE\nOPERATION.\nONE SCREEN.',
		body: 'Pull live data from every tool, team, and system into a single pane of glass. No more tab-switching. No more context loss.',
		accentColor: 'var(--ax-aqua)',
		ui: <CommandCenterUI />,
	},
	{
		number: '02',
		title: 'Workflow Engine',
		headline: 'AUTOMATE\nTHE SYSTEM.\nNOT YOURSELF.',
		body: 'Design multi-step automations in minutes. Branch on conditions. Scale to millions of events. Ship without writing a line.',
		accentColor: 'var(--ax-red)',
		ui: <WorkflowEngineUI />,
	},
	{
		number: '03',
		title: 'Revenue Intelligence',
		headline: 'SEE THE\nMONEY\nMOVING.',
		body: 'Track pipeline health, churn signals, and expansion opportunities in real time. React before revenue slips.',
		accentColor: 'var(--ax-aqua)',
		ui: <RevenueUI />,
	},
	{
		number: '04',
		title: 'Deployment Control',
		headline: 'SHIP IT.\nFAST AND\nCLEAN.',
		body: 'Progressive rollouts, instant rollbacks, per-environment gates. Deliver with confidence at any scale.',
		accentColor: 'var(--ax-red)',
		ui: <DeploymentUI />,
	},
];

function CommandCenterUI() {
	return (
		<div style={{ padding: 24, background: 'var(--ax-black2)', border: '1px solid var(--ax-border)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
				<div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ax-aqua)' }} />
				<span style={{ fontSize: 10, color: 'var(--ax-aqua)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Live</span>
			</div>
			{[
				{ label: 'Active pipelines', val: '142', color: 'var(--ax-aqua)' },
				{ label: 'Events / sec', val: '8,420', color: 'var(--ax-white)' },
				{ label: 'Avg response time', val: '18ms', color: '#10B981' },
				{ label: 'Error rate', val: '0.02%', color: 'var(--ax-white2)' },
			].map(item => (
				<div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'var(--ax-black3)', border: '1px solid var(--ax-border)' }}>
					<span style={{ fontSize: 11, color: 'var(--ax-muted)' }}>{item.label}</span>
					<span className="ax-font-display" style={{ fontSize: 14, fontWeight: 700, color: item.color }}>{item.val}</span>
				</div>
			))}
			<div style={{ flex: 1, background: 'var(--ax-black3)', border: '1px solid var(--ax-border)', padding: 12, marginTop: 4 }}>
				<div style={{ fontSize: 9, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Activity Stream</div>
				{['Pipeline closed — $84K', 'Workflow triggered — Onboarding', 'Alert resolved — DB latency', 'New deal — Vercel Inc.'].map((event, i) => (
					<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
						<div style={{ width: 4, height: 4, borderRadius: '50%', background: i % 2 === 0 ? 'var(--ax-aqua)' : 'var(--ax-red)', flexShrink: 0 }} />
						<span style={{ fontSize: 10, color: 'var(--ax-white2)' }}>{event}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function WorkflowEngineUI() {
	return (
		<div style={{ padding: 24, background: 'var(--ax-black2)', border: '1px solid var(--ax-border)', height: '100%' }}>
			<div style={{ fontSize: 9, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Workflow — Lead Qualification</div>
			{[
				{ label: 'Trigger: Form Submit', icon: '⬡', color: 'var(--ax-aqua)' },
				{ label: 'Score: Lead Quality AI', icon: '◆', color: 'var(--ax-aqua)' },
				{ label: 'Branch: Score > 80?', icon: '⬢', color: '#F59E0B', isDecision: true },
				{ label: 'Yes → CRM Update + Email', icon: '✓', color: 'var(--ax-aqua)' },
				{ label: 'No → Nurture Sequence', icon: '↺', color: 'var(--ax-red)' },
			].map((node, i) => (
				<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
					{i > 0 && (
						<div style={{ marginLeft: node.isDecision ? 16 : 16, width: 1, height: 16, background: 'var(--ax-border2)', marginBottom: 0, alignSelf: 'start', marginTop: -4 }} />
					)}
					{i > 0 && <div style={{ position: 'absolute', opacity: 0 }} />}
					<div style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						padding: '8px 12px',
						background: 'var(--ax-black3)',
						border: `1px solid ${node.color === '#F59E0B' ? '#F59E0B40' : 'var(--ax-border)'}`,
						flex: 1,
						marginLeft: i > 2 ? 20 : 0,
					}}>
						<span style={{ fontSize: 12, color: node.color }}>{node.icon}</span>
						<span style={{ fontSize: 11, color: 'var(--ax-white2)' }}>{node.label}</span>
					</div>
				</div>
			))}
			<div style={{ marginTop: 20, padding: 12, background: 'var(--ax-black3)', border: '1px solid var(--ax-border)', display: 'flex', justifyContent: 'space-between' }}>
				<span style={{ fontSize: 10, color: 'var(--ax-muted)' }}>Runs this month</span>
				<span className="ax-font-display" style={{ fontSize: 12, fontWeight: 700, color: 'var(--ax-red)' }}>48,210</span>
			</div>
		</div>
	);
}

function RevenueUI() {
	return (
		<div style={{ padding: 24, background: 'var(--ax-black2)', border: '1px solid var(--ax-border)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
				<span style={{ fontSize: 10, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pipeline Health</span>
				<span className="ax-tag ax-tag-aqua" style={{ fontSize: 9, padding: '2px 8px' }}>Q4 2024</span>
			</div>
			{[
				{ stage: 'Prospecting', count: 84, value: '$1.2M', pct: 85 },
				{ stage: 'Qualified', count: 42, value: '$840K', pct: 60 },
				{ stage: 'Proposal', count: 18, value: '$620K', pct: 40 },
				{ stage: 'Closed Won', count: 12, value: '$380K', pct: 25 },
			].map((row) => (
				<div key={row.stage}>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
						<span style={{ fontSize: 10, color: 'var(--ax-white2)' }}>{row.stage}</span>
						<span className="ax-font-display" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ax-aqua)' }}>{row.value}</span>
					</div>
					<div style={{ height: 4, background: 'var(--ax-border)', position: 'relative' }}>
						<div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${row.pct}%`, background: 'var(--ax-aqua)', opacity: 0.8 }} />
					</div>
				</div>
			))}
			<div style={{ marginTop: 8, padding: '12px', background: 'var(--ax-black3)', border: '1px solid var(--ax-border)' }}>
				<div style={{ fontSize: 9, color: 'var(--ax-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>AI Forecast</div>
				<div className="ax-font-display" style={{ fontSize: 24, fontWeight: 800, color: 'var(--ax-aqua)' }}>$2.4M <span style={{ fontSize: 12, color: 'var(--ax-muted)' }}>by Dec 31</span></div>
			</div>
		</div>
	);
}

function DeploymentUI() {
	return (
		<div style={{ padding: 24, background: 'var(--ax-black2)', border: '1px solid var(--ax-border)', height: '100%', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', gap: 8 }}>
			<div style={{ fontSize: 9, color: 'var(--ax-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Deploy — v3.2.1 → Production</div>
			{[
				{ step: 'Build', status: 'PASS', time: '42s', color: '#10B981' },
				{ step: 'Unit tests', status: 'PASS', time: '18s', color: '#10B981' },
				{ step: 'E2E tests', status: 'PASS', time: '2m 14s', color: '#10B981' },
				{ step: 'Canary rollout 5%', status: 'LIVE', time: '1m 02s', color: 'var(--ax-aqua)' },
				{ step: 'Health check', status: 'OK', time: '28s', color: '#10B981' },
				{ step: 'Full rollout 100%', status: '...', time: 'pending', color: 'var(--ax-red)' },
			].map((row, i) => (
				<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 10px', background: 'var(--ax-black3)', border: '1px solid var(--ax-border)' }}>
					<span style={{ fontSize: 10, color: row.color, fontWeight: 700, minWidth: 36 }}>{row.status}</span>
					<span style={{ fontSize: 10, color: 'var(--ax-white2)', flex: 1 }}>{row.step}</span>
					<span style={{ fontSize: 9, color: 'var(--ax-muted)' }}>{row.time}</span>
				</div>
			))}
			<div style={{ padding: '10px', background: 'var(--ax-red-dim)', border: '1px solid var(--ax-red)', marginTop: 4 }}>
				<span style={{ fontSize: 10, color: 'var(--ax-red)', fontWeight: 700 }}>⬡ ROLLOUT IN PROGRESS</span>
			</div>
		</div>
	);
}

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

export default function Features() {
	return (
		<section id="features" className="ax-section" style={{ background: 'var(--ax-black)', borderTop: '1px solid var(--ax-border)' }}>
			<div className="ax-container">
				{/* Header */}
				<div style={{ marginBottom: 80, textAlign: 'center' }}>
					<div className="ax-tag ax-tag-red" style={{ marginBottom: 24, display: 'inline-flex' }}>
						<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ax-red)', display: 'inline-block' }} />
						Feature Deep-Dive
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
						BUILT FOR
						<br />
						<span className="ax-text-gradient-red">SERIOUS</span>{' '}TEAMS.
					</h2>
				</div>

				{/* Feature panels */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{PANELS.map((panel, i) => (
						<FeaturePanel key={i} panel={panel} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}

function FeaturePanel({ panel, index }: { panel: typeof PANELS[0]; index: number }) {
	const { ref, visible } = useInView(0.15);
	const isEven = index % 2 === 0;

	return (
		<div
			ref={ref}
			style={{
				display: 'grid',
				gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
				gap: 2,
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(40px)',
				transition: 'opacity 0.8s ease, transform 0.8s ease',
			}}
		>
			{/* Text panel */}
			<div
				style={{
					padding: '72px 56px',
					background: 'var(--ax-black3)',
					border: '1px solid var(--ax-border)',
					order: isEven ? 0 : 1,
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
					<span
						className="ax-font-display"
						style={{
							fontSize: 13,
							fontWeight: 800,
							color: panel.accentColor,
							letterSpacing: '0.12em',
						}}
					>
						{panel.number}
					</span>
					<div style={{ flex: 1, height: 1, background: 'var(--ax-border)' }} />
					<span className="ax-tag" style={{ borderColor: panel.accentColor, color: panel.accentColor, background: 'transparent' }}>
						{panel.title}
					</span>
				</div>

				<h3
					className="ax-font-display"
					style={{
						fontSize: 'clamp(32px, 3.5vw, 52px)',
						fontWeight: 800,
						lineHeight: 0.95,
						letterSpacing: '-0.03em',
						color: 'var(--ax-white)',
						marginBottom: 28,
						whiteSpace: 'pre-line',
					}}
				>
					{panel.headline}
				</h3>

				<p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ax-white2)', maxWidth: 380 }}>
					{panel.body}
				</p>

				<div
					style={{
						marginTop: 40,
						width: 48,
						height: 3,
						background: panel.accentColor,
					}}
				/>
			</div>

			{/* UI panel */}
			<div
				style={{
					background: 'var(--ax-black2)',
					border: '1px solid var(--ax-border)',
					padding: 32,
					order: isEven ? 1 : 0,
					minHeight: 380,
				}}
			>
				{panel.ui}
			</div>
		</div>
	);
}
