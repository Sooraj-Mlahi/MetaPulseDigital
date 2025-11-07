import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MetaPulse Digital Technology Stack | MetaDrive, MPX & AEO Platform',
  description: 'Explore MetaPulse\'s AI technology platform — MetaDrive™, MPX™, BrandSynq™, and more — connecting data, automation, and intelligence into measurable growth.',
  openGraph: {
    title: 'MetaPulse Digital Technology Stack | MetaDrive, MPX & AEO Platform',
    description: 'Explore MetaPulse\'s AI technology platform — MetaDrive™, MPX™, BrandSynq™, and more — connecting data, automation, and intelligence into measurable growth.',
    url: 'https://www.metapulsedigital.com/technology',
    siteName: 'MetaPulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaPulse Digital Technology Stack | MetaDrive, MPX & AEO Platform',
    description: 'Explore MetaPulse\'s AI technology platform — MetaDrive™, MPX™, BrandSynq™, and more — connecting data, automation, and intelligence into measurable growth.',
  },
};

const technologySchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MetaPulse Intelligence Stack",
  "url": "https://www.metapulsedigital.com/technology",
  "brand": {
    "@type": "Organization",
    "name": "MetaPulse Digital"
  },
  "description": "MetaPulse Digital's AI technology platform includes MetaDrive™, MPX™, BrandSynq™, DemoOps™, Reorder Accelerator™, AEO Engine™, and Lift Ledger™ — connecting data, automation, and intelligence into measurable growth.",
  "applicationCategory": "Marketing Automation Software",
  "offers": {
    "@type": "Offer",
    "price": "Request a Demo",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="technology-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologySchema) }}
      />
      {children}
    </>
  );
}
