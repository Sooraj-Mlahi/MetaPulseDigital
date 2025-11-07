import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetaPulse Demo | See AI Marketing Intelligence in Action',
  description: 'Experience MetaPulse Digital\'s AI-powered marketing intelligence platform. Explore interactive demos of our MetaDrive™, MPX™, and other intelligent marketing modules.',
  openGraph: {
    title: 'MetaPulse Demo | See AI Marketing Intelligence in Action',
    description: 'Experience MetaPulse Digital\'s AI-powered marketing intelligence platform. Explore interactive demos of our MetaDrive™, MPX™, and other intelligent marketing modules.',
    url: 'https://www.metapulsedigital.com/demo',
    siteName: 'MetaPulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaPulse Demo | See AI Marketing Intelligence in Action',
    description: 'Experience MetaPulse Digital\'s AI-powered marketing intelligence platform. Explore interactive demos of our MetaDrive™, MPX™, and other intelligent marketing modules.',
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
