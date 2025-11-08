'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Gauge, 
  BarChart3, 
  Calendar, 
  Repeat, 
  Search, 
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

const modules = [
  {
    name: 'BrandSynq™',
    description: 'AI-powered brand intelligence and positioning analysis.',
    icon: Brain,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    features: [
      'Competitive intelligence analysis',
      'Brand positioning insights',
      'Market sentiment tracking',
      'AI-driven brand strategy'
    ]
  },
  {
    name: 'MetaDrive™',
    description: 'Automated campaign optimization and media orchestration.',
    icon: Gauge,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    features: [
      'Multi-channel campaign automation',
      'Real-time performance optimization',
      'Intelligent budget allocation',
      'Cross-platform orchestration'
    ]
  },
  {
    name: 'MPX™',
    description: 'Unified analytics and client experience dashboard.',
    icon: BarChart3,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    features: [
      'Centralized data aggregation',
      'Real-time analytics dashboard',
      'Custom reporting engine',
      'Client performance portal'
    ]
  },
  {
    name: 'DemoOps™',
    description: 'B2B SaaS demo automation and qualification.',
    icon: Calendar,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    features: [
      'Automated demo scheduling',
      'Lead qualification AI',
      'Follow-up automation',
      'Conversion tracking'
    ]
  },
  {
    name: 'Reorder Accelerator™',
    description: 'Predictive DTC re-purchase and automation.',
    icon: Repeat,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    features: [
      'Purchase behavior prediction',
      'Automated reorder triggers',
      'Customer lifecycle optimization',
      'Retention intelligence'
    ]
  },
  {
    name: 'AEO Engine™',
    description: 'Answer Engine Optimization for AI search visibility.',
    icon: Search,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    features: [
      'AI search optimization',
      'Answer snippet targeting',
      'Voice search readiness',
      'SGE & ChatGPT visibility'
    ]
  },
  {
    name: 'Lift Ledger™',
    description: 'Unified attribution and performance measurement layer.',
    icon: TrendingUp,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    features: [
      'Multi-touch attribution',
      'Incrementality measurement',
      'ROI tracking across channels',
      'Performance attribution AI'
    ]
  },
];

export default function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % modules.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length);

  const currentModule = modules[currentIndex];
  const ModuleIcon = currentModule.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary mr-2" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                AI Technology Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient">MetaPulse Intelligence Stack</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seven specialized AI modules that work together to connect data, automation, 
              and intelligence into measurable growth.
            </p>
          </motion.div>

          {/* Carousel Section */}
          <div className="max-w-4xl mx-auto mb-20">
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
                      <div className={`p-4 rounded-xl ${currentModule.bgColor} ${currentModule.borderColor} border glow-teal`}>
                        <ModuleIcon className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-2">{currentModule.name}</CardTitle>
                    <CardDescription className="text-lg text-primary">{currentModule.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      {currentModule.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50 border border-border"
                          data-testid={`feature-${currentIndex}-${idx}`}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button 
                onClick={prev} 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                data-testid="button-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex space-x-2">
                {modules.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                    data-testid={`button-dot-${idx}`}
                  />
                ))}
              </div>
              <Button 
                onClick={next} 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                data-testid="button-next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {modules.map((module, index) => (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-module-${index}`}
                >
                  <Card className={`h-full ${module.borderColor} bg-card/50 backdrop-blur-sm hover:glow-teal hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 group`}>
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl ${module.bgColor} ${module.borderColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <module.icon className={`w-7 h-7 ${module.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{module.name}</CardTitle>
                      <CardDescription className="text-base">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-teal">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">
                    One Unified AI System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Each module is designed to solve a specific challenge in modern marketing. 
                    But together, they create a comprehensive AI ecosystem that drives measurable, 
                    scalable growth.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From brand intelligence to campaign automation, from demo qualification to 
                    attribution tracking — MetaPulse connects every piece of your marketing 
                    infrastructure into one intelligent system.
                  </p>
                  <div className="pt-6">
                    <a 
                      href="/demo" 
                      className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
                      data-testid="link-demo"
                    >
                      View Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
