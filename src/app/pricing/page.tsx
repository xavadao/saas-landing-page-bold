'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import PricingPageContent from '@/components/PricingPageContent';

export default function PricingPage() {
  return (
    <main id="main-content" tabIndex={-1} style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
      <Nav />
      <PricingPageContent />
      <Footer />
    </main>
  );
}
