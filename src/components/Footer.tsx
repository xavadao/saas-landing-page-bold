'use client';

const LINKS = {
	Product: ['Dashboard', 'Automations', 'Intelligence', 'Integrations', 'Changelog', 'Status'],
	Company: ['About', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'],
	Resources: ['Documentation', 'API Reference', 'Guides', 'Community', 'Webinars', 'Open Source'],
	Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance', 'Cookie Settings'],
};

export default function Footer() {
	return (
		<footer
			style={{
				background: 'var(--ax-black2)',
				borderTop: '1px solid var(--ax-border)',
				paddingTop: 80,
			}}
		>
			<div className="ax-container">
				{/* Top grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr',
						gap: '0 60px',
						paddingBottom: 72,
						borderBottom: '1px solid var(--ax-border)',
					}}
				>
					{/* Brand column */}
					<div>
						<div
							className="ax-font-display"
							style={{
								fontSize: 28,
								fontWeight: 800,
								letterSpacing: '-0.02em',
								color: 'var(--ax-white)',
								marginBottom: 20,
							}}
						>
							AX<span style={{ color: 'var(--ax-red)' }}>I</span>OM
						</div>

						<p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ax-muted)', maxWidth: 260, marginBottom: 28 }}>
							The command-center platform for high-growth teams. Run faster. Ship smarter. Scale cleanly.
						</p>

						{/* Social links */}
						<div style={{ display: 'flex', gap: 12 }}>
							{[
								{ label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835-8.164-10.666h6.536l4.268 5.65z' },
								{ label: 'GH', path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.578.688.48A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z' },
								{ label: 'LI', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
							].map(social => (
								<a
									key={social.label}
									href="#"
									style={{
										width: 36,
										height: 36,
										border: '1px solid var(--ax-border)',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										color: 'var(--ax-muted)',
										transition: 'border-color 0.2s ease, color 0.2s ease',
									}}
									onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ax-border2)'; e.currentTarget.style.color = 'var(--ax-white)'; }}
									onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ax-border)'; e.currentTarget.style.color = 'var(--ax-muted)'; }}
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
										<path d={social.path} />
									</svg>
								</a>
							))}
						</div>

						{/* Status indicator */}
						<div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
							<div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} className="animate-pulse-red" />
							<span style={{ fontSize: 11, color: 'var(--ax-muted)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
								All systems operational
							</span>
						</div>
					</div>

					{/* Link columns */}
					{Object.entries(LINKS).map(([category, links]) => (
						<div key={category}>
							<div
								className="ax-font-display"
								style={{
									fontSize: 11,
									fontWeight: 800,
									letterSpacing: '0.12em',
									textTransform: 'uppercase',
									color: 'var(--ax-white)',
									marginBottom: 24,
								}}
							>
								{category}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
								{links.map(link => (
									<a
										key={link}
										href="#"
										style={{
											fontSize: 13,
											color: 'var(--ax-muted)',
											transition: 'color 0.2s ease',
										}}
										onMouseEnter={e => (e.currentTarget.style.color = 'var(--ax-white)')}
										onMouseLeave={e => (e.currentTarget.style.color = 'var(--ax-muted)')}
									>
										{link}
									</a>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Bottom bar */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '28px 0',
						flexWrap: 'wrap',
						gap: 16,
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
						<span style={{ fontSize: 12, color: 'var(--ax-muted)' }}>
							{new Date().getFullYear()} AXIOM Technologies Inc. All rights reserved.
						</span>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ fontSize: 12, color: 'var(--ax-muted)' }}>Built with</span>
						<span style={{ fontSize: 14 }}>♥</span>
						<span style={{ fontSize: 12, color: 'var(--ax-muted)' }}>for teams that refuse to move slow.</span>
					</div>

					<div style={{ display: 'flex', gap: 24 }}>
						{['Privacy', 'Terms', 'Security'].map(item => (
							<a
								key={item}
								href="#"
								style={{ fontSize: 12, color: 'var(--ax-muted)', transition: 'color 0.2s ease' }}
								onMouseEnter={e => (e.currentTarget.style.color = 'var(--ax-white)')}
								onMouseLeave={e => (e.currentTarget.style.color = 'var(--ax-muted)')}
							>
								{item}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
