import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogArticle {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  slug: string;
}

export default function BlogsSection() {
  const articles: BlogArticle[] = [
    {
      title: 'Implementing Raft Consensus Protocol in Java',
      category: 'System Design',
      date: 'July 2026',
      readTime: '8 min read',
      summary: 'A deep dive into building a replicated key-value state machine using leader election, heartbeat timeouts, and log replication in native Java.',
      slug: 'raft-consensus-java'
    },
    {
      title: 'Asynchronous API Architectures with Node.js and Redis',
      category: 'Backend',
      date: 'May 2026',
      readTime: '6 min read',
      summary: 'How to scale Express backend microservices using Redis for session caching, distributed rate-limiting, and background message queues.',
      slug: 'node-redis-caching'
    },
    {
      title: 'Visualizing pathfinding: Dijkstra vs A* Search',
      category: 'DSA',
      date: 'March 2026',
      readTime: '5 min read',
      summary: 'An exploration of graph traversal heuristics. Comparing time-complexity weight models in grid-based maze path solvers.',
      slug: 'dijkstra-vs-astar'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-12">
        {/* Title */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">Notebook</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Technical Articles & Logs
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              Drafts, engineering notes, and walk-throughs covering system designs and algorithmic structures.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <span>Read all articles</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Notebook Ruled Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover flex h-[300px] flex-col justify-between overflow-hidden rounded-xl bg-card transition-all duration-300 relative select-none"
            >
              {/* Notebook Paper Ruled lines overlay in background */}
              <div className="absolute inset-0 notebook-lines opacity-[0.25] pointer-events-none p-5" />

              {/* Contents */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  {/* Top Stats */}
                  <div className="flex items-center gap-3.5 text-[9px] font-bold text-neutral-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="rounded bg-primary/5 border border-primary/15 px-2 py-0.5 text-[8.5px] font-bold text-primary-light uppercase tracking-wider">{article.category}</span>
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 pt-1 font-display">
                      {article.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Read Button */}
                <Link
                  to={`/blogs#${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light hover:text-white transition-colors group mt-2 self-start"
                >
                  <span>Open Notebook</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
