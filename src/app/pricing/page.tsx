'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import PricingPageContent from '@/components/PricingPageContent';

export default function PricingPage() {
  return (
    <main style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
      <Nav />
      <PricingPageContent />
      <Footer />
    </main>
  );
}
