import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata("Pricing \u2014 AXIOM SaaS Demo", "Compare sample AXIOM plans and switch between monthly and annual prices. This demonstration does not process payments or provision accounts.", "/pricing");

export default function PageLayout({ children }: { children: ReactNode }) {
  return children;
}
