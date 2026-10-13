import Nav from '@/components/Nav';
import Hero from '@/components/Hero2';
import LogoMarquee from '@/components/LogoMarquee';
import ProductShowcase from '@/components/ProductShowcase2';
import WhyItWins from '@/components/WhyItWins2';
import Features from '@/components/Features2';
import CaseStudies from '@/components/CaseStudies2';
import Metrics from '@/components/Metrics2';
import ProductTeaser from '@/components/ProductTeaser';
import FinalCTA from '@/components/FinalCTA2';
import Footer from '@/components/Footer2';



export default function HomePage() {
	return (
		<main id="main-content" tabIndex={-1} style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
			<Nav />
			<Hero />
			<LogoMarquee />
			<ProductShowcase />
			<WhyItWins />
			<Features />
			<CaseStudies />
			<Metrics />
			<ProductTeaser />
			<FinalCTA />
			<Footer />
		</main>
	);
}
