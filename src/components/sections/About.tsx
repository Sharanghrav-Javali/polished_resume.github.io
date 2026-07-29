import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Lightbulb, TrendingUp, Code, Database, Award } from 'lucide-react';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

function StatCard({ value, suffix = '', label, icon: Icon }: StatCardProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1.5; // seconds
    const range = end - start;
    let current = start;
    const increment = end > 100 ? Math.ceil(range / 60) : 1;
    const stepTime = Math.abs(Math.floor((duration * 1000) / (range / increment)));
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="glass-panel glass-panel-hover flex flex-col justify-between rounded-xl p-5 select-none"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-400">{label}</span>
        <Icon className="text-primary-light" size={16} />
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold tracking-tight text-white font-display">
          {count.toLocaleString()}{suffix}
        </span>
      </div>
    </div>
  );
}

export default function About() {
  const timelineItems = [
    {
      title: 'Engineering Student',
      desc: 'Pursuing BE in Computer Science and Engineering at Sapthagiri NPS University, Bangalore.',
      icon: BookOpen,
    },
    {
      title: 'Passionate Problem Solver',
      desc: 'Focused on solving real-world challenges through software solutions and algorithmic thinking.',
      icon: Lightbulb,
    },
    {
      title: 'Learning Every Day',
      desc: 'Consistently expanding expertise in modern system designs, network architecture, and security protocols.',
      icon: TrendingUp,
    },
    {
      title: 'AI, Backend & System Design',
      desc: 'Deep interest in building distributed backend services, caching mechanisms, and integrating LLMs/ML models.',
      icon: Database,
    },
    {
      title: 'Building Projects Consistently',
      desc: 'Turning theoretical knowledge into practical, deployed web applications and developer tools.',
      icon: Code,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        
        {/* Left Column: Timeline */}
        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">About Me</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Developing with Purpose
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              A timeline of my active engagement in computer science, software engineering, and systems development.
            </p>
          </div>

          {/* Timeline Visualization */}
          <div className="relative border-l border-neutral-800 ml-3 pl-6 space-y-8 py-2">
            {timelineItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-800 bg-[#0A0A0A] group-hover:border-primary transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-primary transition-colors" />
                  </span>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ItemIcon size={14} className="text-primary-light" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-3 lg:text-right">
            <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase">By The Numbers</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Development Milestones
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md lg:ml-auto">
              A metric-driven look at projects, contributions, certifications, and active stack items.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard value={6} suffix="+" label="PROJECTS" icon={Code} />
            <StatCard value={12} suffix="+" label="TECHNOLOGIES" icon={Database} />
            <StatCard value={1200} suffix="+" label="GITHUB CONTRIBS" icon={TrendingUp} />
            <StatCard value={5} suffix="+" label="CERTIFICATES" icon={Award} />
          </div>
        </div>

      </div>
    </section>
  );
}
