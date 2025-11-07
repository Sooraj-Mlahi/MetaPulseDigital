import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MetaPulse Digital | AI Marketing Intelligence & AEO Systems",
  description: "MetaPulse Digital builds AI systems for marketing automation, analytics, and Answer Engine Optimization (AEO). The future of marketing is Answer Intelligence.",
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "MetaPulse Digital | AI Marketing Intelligence & AEO Systems",
    description: "MetaPulse Digital builds AI systems for marketing automation, analytics, and Answer Engine Optimization (AEO). The future of marketing is Answer Intelligence.",
    url: 'https://www.metapulsedigital.com',
    siteName: 'MetaPulse Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MetaPulse Digital | AI Marketing Intelligence & AEO Systems",
    description: "MetaPulse Digital builds AI systems for marketing automation, analytics, and Answer Engine Optimization (AEO). The future of marketing is Answer Intelligence.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MetaPulse Digital",
  "url": "https://www.metapulsedigital.com",
  "logo": "https://www.metapulsedigital.com/assets/MetaPulse_Styled_Text_Logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/metapulse-digital",
    "https://twitter.com/metapulsedigital",
    "https://www.instagram.com/metapulsedigital"
  ],
  "description": "MetaPulse Digital builds AI systems for marketing intelligence, automation, and Answer Engine Optimization (AEO). The future of marketing is Answer Intelligence.",
  "founder": {
    "@type": "Person",
    "name": "Gabe Freeman"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@metapulsedigital.com",
    "contactType": "customer support"
  },
  "brand": {
    "@type": "Brand",
    "name": "MetaPulse Digital",
    "slogan": "The Future of Marketing is Answer Intelligence"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        
        {GA4_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {LINKEDIN_PARTNER_ID && (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
        )}
        {LINKEDIN_PARTNER_ID && (
          <Script
            src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
