import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Features \u2014 AXIOM SaaS Demo", "Browse illustrated automation, intelligence, analytics, and collaboration features in the AXIOM SaaS website demo.", "/features");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
