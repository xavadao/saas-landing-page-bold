'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer2';
import CaseStudiesPageContent from '@/components/CaseStudiesPageContent';

export default function CaseStudiesPage() {
  return (
    <main id="main-content" tabIndex={-1} style={{ background: 'var(--ax-black)', color: 'var(--ax-white)', overflowX: 'hidden' }}>
      <Nav />
      <CaseStudiesPageContent />
      <Footer />
    </main>
  );
}
