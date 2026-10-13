import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Product \u2014 AXIOM SaaS Demo", "Explore the fictional AXIOM command-center product, interactive modules, workflow illustrations, and sample platform metrics.", "/product");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
