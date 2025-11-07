import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact MetaPulse Digital | Get Started with AI Marketing Intelligence',
  description: 'Connect with MetaPulse Digital to learn how our AI-powered marketing intelligence platform can transform your business. Request a demo or consultation today.',
  openGraph: {
    title: 'Contact MetaPulse Digital | Get Started with AI Marketing Intelligence',
    description: 'Connect with MetaPulse Digital to learn how our AI-powered marketing intelligence platform can transform your business. Request a demo or consultation today.',
    url: 'https://www.metapulsedigital.com/contact',
    siteName: 'MetaPulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MetaPulse Digital | Get Started with AI Marketing Intelligence',
    description: 'Connect with MetaPulse Digital to learn how our AI-powered marketing intelligence platform can transform your business. Request a demo or consultation today.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
