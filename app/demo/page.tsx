'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, Sparkles, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

type Tenant = 'acme' | 'nova';

interface MetricsData {
  demos: number;
  engagement: number;
  retention: number;
  repeatOrders: number;
  aeoScore: number;
  revenue: number;
}

const initialMetrics: Record<Tenant, MetricsData> = {
  acme: {
    demos: 234,
    engagement: 45,
    retention: 78,
    repeatOrders: 0,
    aeoScore: 82,
    revenue: 89400,
  },
  nova: {
    demos: 0,
    engagement: 38,
    retention: 65,
    repeatOrders: 1247,
    aeoScore: 76,
    revenue: 156800,
  },
};

export default function Demo() {
  const [tenant, setTenant] = useState<Tenant>('acme');
  const [week, setWeek] = useState(1);
  const [metrics, setMetrics] = useState(initialMetrics);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  const simulateWeek = () => {
    setWeek((prev) => prev + 1);
    setAnimateMetrics(true);
    setMetrics((prev) => ({
      ...prev,
      [tenant]: {
        demos: Math.floor(prev[tenant].demos * (1 + Math.random() * 0.15)),
        engagement: Math.min(100, prev[tenant].engagement + Math.floor(Math.random() * 8)),
        retention: Math.min(100, prev[tenant].retention + Math.floor(Math.random() * 5)),
        repeatOrders: Math.floor(prev[tenant].repeatOrders * (1 + Math.random() * 0.12)),
        aeoScore: Math.min(100, prev[tenant].aeoScore + Math.floor(Math.random() * 6)),
        revenue: Math.floor(prev[tenant].revenue * (1 + Math.random() * 0.18)),
      },
    }));
    setTimeout(() => setAnimateMetrics(false), 600);
  };

  const downloadReport = () => {
    toast({
      title: 'Report Generated',
      description: `Week ${week} analytics report for ${tenantName} is being prepared.`,
    });
  };

  const currentMetrics = metrics[tenant];
  const tenantName = tenant === 'acme' ? 'Acme SaaS' : 'Nova DTC';
  const isB2B = tenant === 'acme';

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MPX <span className="text-gradient">Demo Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI-driven marketing intelligence in real-time
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Select Tenant</CardTitle>
                <CardDescription>Switch between B2B SaaS and DTC eCommerce simulations</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setTenant('acme')}
                  variant={tenant === 'acme' ? 'default' : 'outline'}
                  className="flex-1"
                  data-testid="button-tenant-acme"
                >
                  Acme SaaS (B2B)
                </Button>
                <Button
                  onClick={() => setTenant('nova')}
                  variant={tenant === 'nova' ? 'default' : 'outline'}
                  className="flex-1"
                  data-testid="button-tenant-nova"
                >
                  Nova DTC (eCommerce)
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm glow-teal">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Current Week</div>
                    <div className="text-3xl font-bold text-gradient" data-testid="text-week">Week {week}</div>
                    <div className="text-sm text-muted-foreground mt-1">Viewing: {tenantName}</div>
                  </div>
                  <Button onClick={simulateWeek} size="lg" className="group" data-testid="button-simulate">
                    Simulate Week
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isB2B && (
                <motion.div
                  key="demos"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Demos</CardTitle>
                      <Users className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        key={currentMetrics.demos}
                        initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                        animate={{ scale: 1, color: 'inherit' }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold"
                        data-testid="metric-demos"
                      >
                        {currentMetrics.demos.toLocaleString()}
                      </motion.div>
                      <p className="text-xs text-muted-foreground mt-1">
                        <span className="text-primary/70">DemoOps™ module</span> • AI tracking
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {!isB2B && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Repeat Orders</CardTitle>
                      <Target className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        key={currentMetrics.repeatOrders}
                        initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                        animate={{ scale: 1, color: 'inherit' }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold"
                        data-testid="metric-orders"
                      >
                        {currentMetrics.repeatOrders.toLocaleString()}
                      </motion.div>
                      <p className="text-xs text-muted-foreground mt-1">
                        <span className="text-primary/70">Reorder Accelerator™</span> • Lifecycle AI
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <motion.div
                key="engagement"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-secondary" />
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      key={currentMetrics.engagement}
                      initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                      animate={{ scale: 1, color: 'inherit' }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold"
                      data-testid="metric-engagement"
                    >
                      {currentMetrics.engagement}%
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary/70">MPX™ analytics</span> • +{Math.floor(Math.random() * 12)}% vs last period
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                key="retention"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Retention Score</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      key={currentMetrics.retention}
                      initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                      animate={{ scale: 1, color: 'inherit' }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold"
                      data-testid="metric-retention"
                    >
                      {currentMetrics.retention}%
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary/70">MPX™ analytics</span> • Multi-platform tracking
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                key="aeo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AEO AAI Score</CardTitle>
                    <Target className="h-4 w-4 text-secondary" />
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      key={currentMetrics.aeoScore}
                      initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                      animate={{ scale: 1, color: 'inherit' }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold"
                      data-testid="metric-aeo"
                    >
                      {currentMetrics.aeoScore}/100
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-secondary/70">AEO Engine™</span> • Answer Appearance Index
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                key="revenue"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-teal transition-all">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenue Impact</CardTitle>
                    <DollarSign className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      key={currentMetrics.revenue}
                      initial={animateMetrics ? { scale: 1.2, color: '#19B2B8' } : {}}
                      animate={{ scale: 1, color: 'inherit' }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold"
                      data-testid="metric-revenue"
                    >
                      ${(currentMetrics.revenue / 1000).toFixed(1)}K
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary/70">Lift Ledger™</span> • Multi-touch attribution
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm glow-orange">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>Live analysis from MetaPulse AI Engine</CardDescription>
                </div>
                <Button onClick={downloadReport} variant="outline" size="sm" className="gap-2" data-testid="button-download">
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-semibold text-green-400">Trend Detected:</span> {tenantName} showing strong 
                      {isB2B ? ' demo conversion momentum' : ' repeat purchase signals'}. AI recommends increasing 
                      investment in top-performing channels.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-semibold text-orange-400">AEO Opportunity:</span> Answer Engine visibility 
                      is improving. Consider optimizing for {Math.floor(Math.random() * 15) + 5} additional high-intent 
                      query patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
