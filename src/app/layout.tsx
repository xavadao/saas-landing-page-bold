import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ExampleCredit } from '@/components/example-credit';
import { DEMO_SCHEMA, SITE_URL, pageMetadata } from '@/lib/seo';
import { Providers } from '@/components/providers';
import './globals.css';



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("AXIOM Command Center \u2014 SaaS Website Demo", "Explore AXIOM, a bold SaaS website demo with illustrated product modules, sample case studies, and interactive monthly and annual pricing."),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
        <noscript><style>{'.reveal,.reveal-left,.reveal-right,.reveal-fade,.fade-up,main [style*=\"opacity:0;\"],main [style$=\"opacity:0\"]{opacity:1!important;transform:none!important;clip-path:none!important;animation:none!important;transition:none!important}'}</style></noscript>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DEMO_SCHEMA).replace(/</g, '\\u003c') }} />
				<Providers>
					{children}
				  <ExampleCredit />
        </Providers>
			</body>
		</html>
	);
}
