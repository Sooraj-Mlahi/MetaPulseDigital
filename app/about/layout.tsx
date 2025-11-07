import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About MetaPulse Digital | AI-Driven Marketing Technology Company',
  description: 'Learn how MetaPulse Digital merges automation, data, and AI to create intelligent marketing systems that scale brands in the AI-powered era.',
  openGraph: {
    title: 'About MetaPulse Digital | AI-Driven Marketing Technology Company',
    description: 'Learn how MetaPulse Digital merges automation, data, and AI to create intelligent marketing systems that scale brands in the AI-powered era.',
    url: 'https://www.metapulsedigital.com/about',
    siteName: 'MetaPulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MetaPulse Digital | AI-Driven Marketing Technology Company',
    description: 'Learn how MetaPulse Digital merges automation, data, and AI to create intelligent marketing systems that scale brands in the AI-powered era.',
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://www.metapulsedigital.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "MetaPulse Digital",
    "foundingDate": "2022",
    "description": "MetaPulse Digital merges AI, automation, and data orchestration to build the infrastructure for intelligent marketing.",
    "mission": "To empower brands with AI-first systems that make marketing measurable, adaptive, and intelligent.",
    "keywords": [
      "AI marketing company",
      "marketing intelligence platform",
      "automation and analytics",
      "Answer Engine Optimization"
    ]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
