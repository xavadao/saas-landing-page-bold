import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import ProductPageContent from '@/components/ProductPageContent';

export const metadata = {
	title: 'Product — AXIOM',
	description: 'The operating system for modern teams. Platform depth, workflow engine, AI intelligence layer, and more.',
};

export default function ProductPage() {
	return (
		<main style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
			<Nav />
			<ProductPageContent />
			<Footer />
		</main>
	);
}
