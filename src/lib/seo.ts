import type { Metadata } from 'next';

export const SITE_URL = "https://vibed-saas-bold.xavainf.com";
export const SITE_NAME = "AXIOM Command Center";

export function pageMetadata(title: string, description: string, pathname = '/'): Metadata {
  const url = new URL(pathname, SITE_URL).href;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: 'website', locale: 'en_US', images: [{ url: `${SITE_URL}/social-preview.jpg`, width: 1200, height: 630, alt: `${SITE_NAME} website demo` }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/social-preview.jpg`] },
  };
}

export const DEMO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: SITE_NAME,
  description: "Explore AXIOM, a bold SaaS website demo with illustrated product modules, sample case studies, and interactive monthly and annual pricing.",
  url: SITE_URL,
  inLanguage: 'en',
  genre: 'Interactive website demonstration',
  creator: { '@type': 'Organization', name: 'XavaInf', url: 'https://xavainf.com' },
};
