'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the <span className="text-gradient">Intelligent Future</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              MetaPulse Digital connects intelligence, automation, and growth in one unified AI system. 
              We're not just optimizing campaigns, we're building the infrastructure for the next 
              generation of marketing intelligence.
            </p>

            <p className="text-lg text-muted-foreground mb-10">
              Our mission is to empower brands with AI-driven insights that transform how they 
              understand, reach, and engage their audiences in an answer first world.
            </p>

            <Link href="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
