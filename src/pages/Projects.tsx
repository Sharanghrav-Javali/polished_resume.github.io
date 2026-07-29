import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Cpu, LayoutGrid, Terminal, Code2, LineChart } from 'lucide-react';
import Footer from '../components/sections/Footer';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
  renderPreview: () => React.ReactNode;
}

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const projects: Project[] = [
    {
      title: 'AQI Prediction System',
      desc: 'An AI-based AQI monitoring and forecasting system. Utilizes machine learning algorithms to analyze historical air indices and forecast pollution spikes based on environmental metrics.',
      tags: ['AI/ML', 'Python', 'Pandas', 'Scikit-Learn'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'AI/ML',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4 font-mono text-[10px] text-emerald-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><LineChart size={12} /> aqi_forecast.py</span>
            <span className="rounded bg-emerald-500/10 px-1 py-0.5 text-xs text-emerald-400">MODEL_ACTIVE</span>
          </div>
          <div className="flex-1 py-3 text-[9px] text-neutral-400">
            <div>&gt; Loading dataset... done. (14,204 rows)</div>
            <div>&gt; Training Random Forest Regressor... done.</div>
            <div className="text-white font-medium">&gt; Accuracy Score: R² = 0.942, MSE = 12.4</div>
          </div>
        </div>
      )
    },
    {
      title: 'AetherDB consensus store',
      desc: 'A lightweight, high-performance distributed key-value store implementing the Raft consensus protocol in Java. Supports replicated logs, heartbeats, and leader elections.',
      tags: ['Java', 'Raft Consensus', 'Distributed Systems', 'gRPC'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Systems',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-black p-4 font-mono text-[10px] text-purple-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><Terminal size={12} /> raft_cluster_logs</span>
            <span className="text-neutral-500">Replicated</span>
          </div>
          <div className="flex-1 py-3 text-[9px] text-neutral-400 leading-normal">
            <div>[NODE-1] State: LEADER | Term: 4</div>
            <div className="text-purple-300">[NODE-2] Appended entry (Index=104, Term=4)</div>
          </div>
        </div>
      )
    },
    {
      title: 'Coffee Shop Website',
      desc: 'A premium, modern responsive user interface for a coffee shop. Implemented with clean grid layouts, smooth CSS card transitions, and a responsive booking workflow.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      demo: 'https://sharanghrav-javali.github.io/coffee-shop.github.io/',
      github: 'https://github.com/Sharanghrav-Javali/coffee-shop.github.io',
      category: 'Web',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1.5"><LayoutGrid size={12} /> Bean & Brew Cafe</span>
            <span>v1.0.0</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-2 space-y-1">
            <div className="text-xs font-semibold text-white font-display">Crafted Coffee & Treats</div>
          </div>
        </div>
      )
    },
    {
      title: 'VisualPath simulator',
      desc: 'An interactive algorithm visualizer simulating pathfinding routines (Dijkstra, A* Search, BFS, DFS). Features custom obstacle positioning, start/end draggable tags, and grid mazes.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Algorithms',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col bg-neutral-950 p-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1.5"><Code2 size={12} /> path_finder.tsx</span>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1 py-2">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="rounded-sm aspect-square bg-neutral-900 border border-white/5" />
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Nexus API engine',
      desc: 'A RESTful back-end blogging engine featuring JWT authorization, rate-limiting layers, and markdown compilation hooks. Optimized with caching for fast loading speeds.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Backend',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-black p-4 font-mono text-[10px] text-neutral-300">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-neutral-400">
            <span className="flex items-center gap-1.5"><Cpu size={12} /> express_router.js</span>
            <span className="text-emerald-500">200 OK</span>
          </div>
          <div className="flex-1 py-2 space-y-1 text-[9px]">
            <div className="flex justify-between border-b border-white/5 pb-0.5">
              <span className="text-primary-light">GET /api/v1/posts</span>
              <span className="text-neutral-500">2ms</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Sentinel monitoring agent',
      desc: 'A lightweight python monitoring client designed to collect system CPU load, memory utilization, and network logs. Deploys metrics directly to Prometheus nodes.',
      tags: ['Python', 'Prometheus', 'Docker', 'Linux Core'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Systems',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4 font-mono text-[10px] text-sky-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><Cpu size={12} /> system_stats</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2 py-1">
            <div className="h-1.5 w-full bg-neutral-900 rounded overflow-hidden">
              <div className="h-full bg-sky-500" style={{ width: '24%' }} />
            </div>
          </div>
        </div>
      )
    }
  ];

  const categories = ['All', 'Systems', 'AI/ML', 'Web', 'Algorithms', 'Backend'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.desc.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 flex flex-col justify-between"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 space-y-12">
        {/* Title */}
        <div className="space-y-4 text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white font-display">Projects Directory</h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Search and filter through the complete catalogue of tools, compilers, algorithms, and applications I have engineered.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="relative flex items-center w-full md:max-w-xs rounded-lg border border-white/5 bg-[#111111] px-3.5 py-2">
            <Search className="mr-2 text-neutral-500" size={16} />
            <input
              type="text"
              placeholder="Search projects, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-neutral-500 outline-none"
            />
          </div>

          {/* Categories list */}
          <div className="flex flex-wrap gap-1.5 select-none">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-black'
                      : 'border border-white/5 bg-[#111111] text-neutral-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="glass-panel group flex h-[390px] flex-col justify-between overflow-hidden rounded-xl bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-glow-primary"
              >
                {/* Visual Panel */}
                <div className="h-40 border-b border-white/5 overflow-hidden">
                  {project.renderPreview()}
                </div>

                {/* Info Fields */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-accent-muted">{project.category}</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-primary-light transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  {/* Footer CTAs */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded bg-[#1A1A1A] border border-white/5 px-2 py-0.5 text-[8.5px] font-medium text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[9px] font-bold text-neutral-400 hover:text-white transition-colors"
                        >
                          <GithubIcon className="h-3 w-3" />
                          <span>SOURCE CODE</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[9px] font-bold text-neutral-400 hover:text-white transition-colors ml-auto"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
