import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Code2, LineChart, Cpu, LayoutGrid, Terminal } from 'lucide-react';

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
  // Dynamic component to render a premium UI preview instead of a placeholder image
  renderPreview: () => React.ReactNode;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'AQI Prediction System',
      desc: 'An AI-based AQI monitoring and forecasting system. Utilizes machine learning algorithms to analyze historical air indices and forecast pollution spikes based on environmental metrics.',
      tags: ['AI/ML', 'Python', 'Pandas', 'Scikit-Learn'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'AI/ML Systems',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4 font-mono text-[10px] text-emerald-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><LineChart size={12} /> aqi_forecast.py</span>
            <span className="rounded bg-emerald-500/10 px-1 py-0.5 text-xs text-emerald-400">MODEL_ACTIVE</span>
          </div>
          <div className="flex-1 py-3 space-y-1.5 text-[9px] text-neutral-400 leading-normal">
            <div>&gt; Loading dataset... done. (14,204 rows)</div>
            <div>&gt; Training Random Forest Regressor... done.</div>
            <div className="text-white font-medium">&gt; Accuracy Score: R² = 0.942, MSE = 12.4</div>
            <div className="text-emerald-400 font-bold">&gt; Prediction next 24h: PM2.5 = 42µg/m³ (GOOD)</div>
          </div>
          <div className="h-6 w-full rounded bg-neutral-900 border border-white/5 overflow-hidden flex">
            <div className="h-full bg-emerald-500/30" style={{ width: '42%' }} />
            <div className="h-full bg-yellow-500/20" style={{ width: '18%' }} />
            <div className="h-full bg-red-500/10" style={{ width: '40%' }} />
          </div>
        </div>
      )
    },
    {
      title: 'AetherDB consensus store',
      desc: 'A lightweight, high-performance distributed key-value store implementing the Raft consensus protocol in Java. Supports replicated logs, heartbeats, and leader elections.',
      tags: ['Java', 'Raft Consensus', 'Distributed Systems', 'gRPC'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'System Infrastructure',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-black p-4 font-mono text-[10px] text-purple-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><Terminal size={12} /> raft_cluster_logs</span>
            <span className="rounded bg-purple-500/10 px-1.5 py-0.5 text-[9px] text-purple-400 uppercase">Replicated</span>
          </div>
          <div className="flex-1 py-3 space-y-1.5 text-[9px] leading-relaxed text-neutral-400">
            <div>[NODE-1] State: LEADER | Term: 4 | Heartbeat broadcast...</div>
            <div className="text-purple-300">[NODE-2] Appended entry (Index=104, Term=4, Val=&ldquo;auth_jwt&rdquo;)</div>
            <div>[NODE-3] Acknowledged replication request (Term=4)</div>
            <div className="text-emerald-400">[CLUSTER] Committing entry index 104 to state machine.</div>
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
      category: 'Web Design',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4 select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1.5"><LayoutGrid size={12} /> Bean & Brew Cafe</span>
            <span>v1.0.0</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-2 space-y-1.5">
            <div className="text-sm font-semibold tracking-tight text-white font-display">Crafted Coffee & Treats</div>
            <div className="text-[10px] text-neutral-500 text-center">Freshly brewed single-origin beans, delivered warm.</div>
            <div className="flex gap-2 pt-1">
              <span className="rounded-full bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 text-[9px] text-amber-300">Espresso</span>
              <span className="rounded-full bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 text-[9px] text-amber-300">Cappuccino</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'VisualPath simulator',
      desc: 'An interactive algorithm visualizer simulating pathfinding routines (Dijkstra, A* Search, BFS, DFS). Features custom obstacle positioning, start/end draggable tags, and grid mazes.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Algorithms & UI',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col bg-neutral-950 p-3 select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1.5"><Code2 size={12} /> path_finder.tsx</span>
            <span className="text-primary-light">Dijkstra</span>
          </div>
          <div className="flex-1 grid grid-cols-6 gap-1 py-3.5">
            {Array.from({ length: 18 }).map((_, idx) => {
              let bg = 'bg-neutral-900 border border-white/5';
              if (idx === 1) bg = 'bg-emerald-500/50 shadow-glow-primary border border-emerald-400/20'; // Start node
              if (idx === 16) bg = 'bg-red-500/50 shadow-glow-secondary border border-red-400/20'; // End node
              if ([7, 8, 13, 14].includes(idx)) bg = 'bg-neutral-800 border border-white/5'; // Obstacle
              if ([2, 3, 9, 10, 15].includes(idx)) bg = 'bg-primary/20 border border-primary/40'; // Explored path
              return <div key={idx} className={`rounded-sm aspect-square ${bg}`} />;
            })}
          </div>
        </div>
      )
    },
    {
      title: 'Nexus API engine',
      desc: 'A RESTful back-end blogging engine featuring JWT authorization, rate-limiting layers, and markdown compilation hooks. Optimized with caching for fast loading speeds.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      github: 'https://github.com/Sharanghrav-Javali',
      category: 'Backend Architecture',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-black p-4 font-mono text-[10px] text-neutral-300">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-neutral-400">
            <span className="flex items-center gap-1.5"><Cpu size={12} /> express_router.js</span>
            <span className="text-emerald-500">200 OK</span>
          </div>
          <div className="flex-1 py-3.5 space-y-2 text-[9px]">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-primary-light">GET /api/v1/posts</span>
              <span className="text-neutral-500">2ms (Redis Cache Hit)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-primary-light">POST /api/v1/posts</span>
              <span className="text-neutral-500">84ms (DB Write Completed)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">GET /api/v1/admin</span>
              <span className="text-red-400 font-bold">401 Unauthorized</span>
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
      category: 'DevOps & Sysops',
      renderPreview: () => (
        <div className="flex h-full w-full flex-col justify-between bg-neutral-950 p-4 font-mono text-[10px] text-sky-400">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5"><LineChart size={12} /> system_stats</span>
            <span className="text-neutral-500">polling: 5s</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2.5 py-1">
            <div className="flex items-center justify-between text-[9px] text-neutral-400">
              <span>CPU Core 1</span>
              <span>24%</span>
            </div>
            <div className="h-1.5 w-full bg-neutral-900 rounded overflow-hidden">
              <div className="h-full bg-sky-500" style={{ width: '24%' }} />
            </div>
            <div className="flex items-center justify-between text-[9px] text-neutral-400">
              <span>RAM (8GB)</span>
              <span>68%</span>
            </div>
            <div className="h-1.5 w-full bg-neutral-900 rounded overflow-hidden">
              <div className="h-full bg-purple-500" style={{ width: '68%' }} />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-12">
        {/* Title */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">My Work</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Featured Projects
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              A curated selection of programs, components, and tools developed during my engineering journey.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <span>Explore all projects</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel group relative flex h-[410px] flex-col justify-between overflow-hidden rounded-xl bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-glow-primary"
            >
              {/* Premium Preview Box */}
              <div className="h-44 border-b border-white/5 overflow-hidden">
                {project.renderPreview()}
              </div>

              {/* Contents */}
              <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-muted">{project.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-primary-light transition-colors capitalize font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags & CTA Buttons */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[#1A1A1A] border border-white/5 px-2 py-0.5 text-[9px] font-medium text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/5 pt-3.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-semibold text-neutral-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-semibold text-neutral-400 hover:text-white transition-colors ml-auto"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
