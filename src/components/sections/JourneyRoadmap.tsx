import { motion } from 'framer-motion';
import { Play, Code, Network, Brain, Award, Star } from 'lucide-react';

interface RoadmapNode {
  title: string;
  desc: string;
  status: 'completed' | 'current' | 'future';
  icon: React.ComponentType<{ className?: string; size?: number }>;
  term?: string;
}

export default function JourneyRoadmap() {
  const nodes: RoadmapNode[] = [
    {
      title: 'Started Programming',
      desc: 'Discovered passion for logical problem-solving. Learned the fundamentals of C, C++, and procedural coding paradigms.',
      status: 'completed',
      icon: Play,
      term: '2023'
    },
    {
      title: 'Learning Web Development',
      desc: 'Mastered web core layers: HTML5 semantic tags, CSS grid layouts, and Vanilla JavaScript DOM modifications.',
      status: 'completed',
      icon: Code,
      term: '2024'
    },
    {
      title: 'Built Full Stack Projects',
      desc: 'Developed scalable client-server applications. Leveraged Node, Express, MongoDB schemas, and RESTful architectures.',
      status: 'completed',
      icon: Network,
      term: '2024'
    },
    {
      title: 'Learning DSA in Java',
      desc: 'Enhancing algorithmic efficiency. Studying core data structures, graph theory, sorting models, and LeetCode challenges.',
      status: 'current',
      icon: Brain,
      term: 'Ongoing'
    },
    {
      title: 'Preparing for SWE Roles',
      desc: 'Revising Object-Oriented Principles (OOP), Database Systems (RDBMS), Operating Systems, and Mock Interviews.',
      status: 'future',
      icon: Award,
      term: 'Upcoming'
    },
    {
      title: 'Google Software Engineer',
      desc: 'Goal: Join Google as a software engineer to build premium global software products and solve large-scale problems.',
      status: 'future',
      icon: Star,
      term: 'Future Goal'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-16">
        {/* Title */}
        <div className="space-y-3 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">My Journey</h3>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display">
            Education & Roadmap
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto">
            A chronological timeline of my progression and future career goals as a developer.
          </p>
        </div>

        {/* Roadmap Display */}
        <div className="relative mx-auto max-w-4xl px-4 select-none">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-neutral-800 hidden md:block" />
          
          <div className="space-y-12">
            {nodes.map((node, idx) => {
              const NodeIcon = node.icon;
              const isEven = idx % 2 === 0;
              const isFutureGoal = idx === nodes.length - 1;

              return (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-background border-2 border-neutral-800 transition-all group">
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      node.status === 'completed' ? 'bg-primary' : 
                      node.status === 'current' ? 'bg-secondary animate-pulse' : 
                      isFutureGoal ? 'bg-yellow-500 animate-ping' : 'bg-neutral-700'
                    }`} />
                  </div>

                  {/* Left/Right Card Spacer for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Node Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className={`glass-panel p-6 rounded-xl transition-all duration-300 relative ${
                      node.status === 'current' 
                        ? 'border-secondary/30 bg-[#121016]' 
                        : isFutureGoal 
                          ? 'border-yellow-500/20 bg-[#161510] shadow-glow-secondary' 
                          : 'glass-panel-hover'
                    }`}>
                      {/* Ribbon / Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{node.term}</span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold border ${
                          node.status === 'completed' 
                            ? 'bg-primary/5 border-primary/25 text-primary-light' 
                            : node.status === 'current' 
                              ? 'bg-secondary/10 border-secondary/25 text-secondary-light' 
                              : isFutureGoal 
                                ? 'bg-yellow-500/10 border-yellow-500/25 text-yellow-500' 
                                : 'bg-neutral-900 border-white/5 text-neutral-500'
                        }`}>
                          {node.status === 'completed' ? 'Completed' : node.status === 'current' ? 'Current Focus' : 'Target'}
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isFutureGoal ? 'bg-yellow-500/10 text-yellow-500' : 'bg-neutral-900 border border-white/5 text-neutral-400'
                        }`}>
                          <NodeIcon size={16} />
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-sm font-bold text-white font-display">{node.title}</h3>
                          <p className="text-xs text-neutral-500 leading-relaxed">{node.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
