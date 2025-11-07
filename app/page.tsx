'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AIPanelCarousel from '@/components/AIPanelCarousel';
import ModulesGrid from '@/components/ModulesGrid';
import AboutPreview from '@/components/AboutPreview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />
      <AIPanelCarousel />
      <ModulesGrid />
      <AboutPreview />
      <Footer />
    </div>
  );
}
