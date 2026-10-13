import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import ProductPageContent from '@/components/ProductPageContent';



export default function ProductPage() {
	return (
		<main id="main-content" tabIndex={-1} style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
			<Nav />
			<ProductPageContent />
			<Footer />
		</main>
	);
}
