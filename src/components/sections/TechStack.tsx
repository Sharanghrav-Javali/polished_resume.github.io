import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Globe, Cpu, Server, Shield, Layers } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Language' | 'Frontend' | 'Backend' | 'Database' | 'Tool';
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string; // for custom glow highlight
}

export default function TechStack() {
  const techStack: TechItem[] = [
    { name: 'Java', category: 'Language', desc: 'OOP, DSA, APIs', icon: Code2, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'Python', category: 'Language', desc: 'Scripting, AI, Web', icon: Cpu, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'JavaScript', category: 'Language', desc: 'Frontend & Backend', icon: Globe, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'C++', category: 'Language', desc: 'Systems Programming', icon: Shield, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'HTML', category: 'Frontend', desc: 'Structure & Semantics', icon: Layers, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'CSS', category: 'Frontend', desc: 'Styling & Layouts', icon: Layers, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'React', category: 'Frontend', desc: 'UI & SPA Development', icon: Code2, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'Node.js', category: 'Backend', desc: 'Runtime Environment', icon: Server, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'Express', category: 'Backend', desc: 'API Framework', icon: Server, color: 'rgba(139, 92, 246, 0.2)' },
    { name: 'MongoDB', category: 'Database', desc: 'Document Storage', icon: Database, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'SQL', category: 'Database', desc: 'Relational Database', icon: Database, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'Git', category: 'Tool', desc: 'Version Control', icon: Terminal, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'GitHub', category: 'Tool', desc: 'Collaborative Dev', icon: Terminal, color: 'rgba(59, 130, 246, 0.2)' },
    { name: 'Linux', category: 'Tool', desc: 'OS & Bash Scripting', icon: Terminal, color: 'rgba(139, 92, 246, 0.2)' },
  ];


  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-12">
        {/* Title */}
        <div className="space-y-3 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">My Stack</h3>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display">
            Engineered Technologies
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto">
            Tools, frameworks, and programming languages I use to construct applications.
          </p>
        </div>

        {/* Categories / Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.map((tech, idx) => {
            const TechIcon = tech.icon;
            
            // Random floating animation offsets to prevent uniform waving
            const randomDelay = idx * 0.1;
            const floatDuration = 5 + (idx % 3);

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: randomDelay }}
                animate={{
                  y: [0, -6, 0],
                }}
                className="group relative"
              >
                {/* Floating motion wrap */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: floatDuration,
                    ease: "easeInOut",
                    delay: randomDelay,
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                  }}
                  className="glass-panel h-full rounded-xl p-5 select-none transition-all duration-300 group-hover:border-primary/30 group-hover:bg-[#151515] group-hover:shadow-glow-primary"
                  style={{
                    // Apply custom radial highlight background on hover
                    background: `radial-gradient(120px circle at 50% 50%, ${tech.color}, transparent 60%)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-primary-light group-hover:text-white transition-colors">
                      <TechIcon size={18} />
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase tracking-wider">{tech.category}</h4>
                      <h3 className="text-sm font-bold text-white mt-0.5">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-3.5 group-hover:text-neutral-400 transition-colors leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
