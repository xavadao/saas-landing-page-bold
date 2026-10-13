import type { ReactNode } from 'react';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata = {
	title: 'AXIOM - Build the system that moves business.',
	description: 'The command-center platform for high-growth teams. Run faster. Ship smarter. Scale cleanly.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
