import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Zap, ShoppingCart, Search, BarChart } from 'lucide-react';

const panels = [
  {
    id: 1,
    icon: Zap,
    title: 'AI DemoOps',
    subtitle: 'B2B SaaS Intelligence',
    description: 'Automate demo scheduling, qualification, and follow-up workflows with AI-powered insights.',
    features: ['Auto-qualification', 'Smart scheduling', 'Demo analytics', 'Lead scoring'],
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'Reorder Accelerator',
    subtitle: 'DTC eCommerce AI',
    description: 'Predict and accelerate repeat purchases with intelligent timing and personalized messaging.',
    features: ['Churn prediction', 'Timing optimization', 'SMS automation', 'Loyalty insights'],
  },
  {
    id: 3,
    icon: Search,
    title: 'AEO Visibility Engine',
    subtitle: 'Answer Engine Optimization',
    description: 'Optimize your brand for AI search engines and voice assistants to dominate answer intelligence.',
    features: ['AI search ranking', 'Voice optimization', 'Featured snippets', 'Answer analysis'],
  },
  {
    id: 4,
    icon: BarChart,
    title: 'Lift Ledger™',
    subtitle: 'Measurement Layer',
    description: 'Attribution and incrementality measurement across all channels in one unified dashboard.',
    features: ['Multi-touch attribution', 'Incrementality testing', 'ROI tracking', 'Unified reporting'],
  },
];

const AIPanelCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % panels.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + panels.length) % panels.length);

  const currentPanel = panels[currentIndex];
  const Icon = currentPanel.icon;

  return (
    <section className="py-20 relative" id="technology">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Technology Panels</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four specialized AI systems working together to power your growth
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-teal">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/20 glow-teal">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-2">{currentPanel.title}</CardTitle>
                  <CardDescription className="text-lg text-primary">{currentPanel.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-lg text-muted-foreground">{currentPanel.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {currentPanel.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50 border border-border"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button onClick={prev} variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex space-x-2">
              {panels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button onClick={next} variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPanelCarousel;
