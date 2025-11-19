'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">MetaPulse Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building intelligence that empowers brands to thrive in an AI-first world
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-teal">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    MetaPulse Digital exists to transform how brands leverage AI for growth. We believe the future 
                    of marketing isn't about louder ads or more channels. it's about intelligent systems that 
                    understand intent, predict behavior, and deliver value at the moment of decision.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to build AI-driven brand intelligence that connects automation, insights, and 
                    growth into one unified system. We empower companies to not just participate in the AI 
                    revolution, but to lead it.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm glow-orange">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20">
                      <Lightbulb className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-3xl">Our Approach</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We've built seven specialized AI modules that work together as an intelligent ecosystem:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'BrandSynq™', desc: 'Brand intelligence and positioning' },
                      { name: 'MetaDrive™', desc: 'Automated campaign optimization' },
                      { name: 'MPX™', desc: 'Performance data aggregation' },
                      { name: 'DemoOps™', desc: 'B2B demo automation' },
                      { name: 'Reorder Accelerator™', desc: 'DTC purchase prediction' },
                      { name: 'AEO Engine™', desc: 'Answer Engine Optimization' },
                      { name: 'Lift Ledger™', desc: 'Unified attribution' },
                    ].map((module, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold mb-1">{module.name}</div>
                        <div className="text-sm text-muted-foreground">{module.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Each module is designed to solve a specific challenge, but together they create a 
                    comprehensive AI system that drives measurable growth.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-teal">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Vision Statement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-2xl font-medium italic border-l-4 border-primary pl-6 py-4">
                    "Building intelligence that empowers brands to thrive in an AI-first world."
                  </blockquote>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision a future where every brand has access to enterprise-level AI capabilities. 
                    Where decisions are informed by intelligence, not guesswork. Where growth is driven by 
                    understanding customer intent before they even search.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The future of marketing is Answer Intelligence and MetaPulse Digital is building the 
                    infrastructure to power it.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { label: 'AI Modules', value: '7' },
                  { label: 'Data Points Analyzed', value: '1M+' },
                  { label: 'Brands Powered', value: '100+' },
                  { label: 'Average Growth', value: '3x' },
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-lg bg-card/50 border border-border">
                    <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
