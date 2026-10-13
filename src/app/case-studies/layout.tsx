import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Case Studies \u2014 AXIOM SaaS Demo", "Explore fictional AXIOM customer stories and sample outcomes, presented as an editorial SaaS marketing demonstration.", "/case-studies");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
