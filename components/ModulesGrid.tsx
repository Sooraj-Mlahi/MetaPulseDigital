import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  TrendingUp,
  Target,
  Users,
  ShoppingBag,
  MessageSquare,
  BarChart3,
} from 'lucide-react';

const modules = [
  {
    icon: Brain,
    title: 'BrandSynq™',
    description: 'AI-powered brand intelligence and sentiment analysis',
    outcome: 'Understand your brand perception in real-time across all channels.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'MetaDrive™',
    description: 'Automated campaign optimization and performance tracking',
    outcome: 'Maximize ROI with AI-driven campaign adjustments in real-time.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Target,
    title: 'MPX™',
    description: 'Multi-platform experience orchestration and analytics',
    outcome: 'Deliver unified customer experiences across every touchpoint.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'DemoOps™',
    description: 'B2B demo intelligence and qualification automation',
    outcome: 'Increase demo-to-deal velocity through predictive qualification.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: ShoppingBag,
    title: 'Reorder Accelerator™',
    description: 'DTC retention and repeat purchase optimization',
    outcome: 'Drive repeat purchases with AI-powered customer lifecycle intelligence.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'AEO Engine™',
    description: 'Answer Engine Optimization for AI-powered search',
    outcome: "Boost your brand's answer authority across AI and voice platforms.",
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Lift Ledger™',
    description: 'AI-powered attribution and revenue impact measurement',
    outcome: 'Track true marketing impact with AI-powered multi-touch attribution.',
    color: 'from-pink-500 to-rose-500',
  },
];

const ModulesGrid = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative">
              AI Modules Overview
              <motion.span
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl rounded-full -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seven specialized modules working in harmony to drive intelligent growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="perspective-1000"
              >
                <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:glow-teal transition-all group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-base mb-2">
                      {module.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground/80 italic border-t border-primary/10 pt-3 mt-2">
                      {module.outcome}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
