'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import FeaturesPageContent from '@/components/FeaturesPageContent';

export default function FeaturesPage() {
  return (
    <main id="main-content" tabIndex={-1} style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
      <Nav />
      <FeaturesPageContent />
      <Footer />
    </main>
  );
}
