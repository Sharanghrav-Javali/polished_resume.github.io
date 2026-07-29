import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Search, Bookmark } from 'lucide-react';
import Footer from '../components/sections/Footer';

interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: React.ReactNode;
}

export default function Blogs() {
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const articles: Article[] = [
    {
      slug: 'raft-consensus-java',
      title: 'Implementing Raft Consensus Protocol in Java',
      category: 'System Design',
      date: 'July 29, 2026',
      readTime: '8 min read',
      summary: 'A deep dive into building a replicated key-value state machine using leader election, heartbeat timeouts, and log replication in native Java.',
      content: (
        <div className="space-y-6 font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
          <p>
            Distributed systems require consensus protocols to ensure replication consistency across server nodes. <strong>Raft</strong> is a consensus algorithm designed to be easy to understand compared to Paxos. It decomposes consensus into key subproblems: Leader Election, Log Replication, and Safety.
          </p>
          
          <h3 className="text-base font-bold text-white font-display pt-3">1. The Three Node States</h3>
          <p>
            At any given time, a Raft cluster node is in one of three states:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-400">
            <li><strong>Leader:</strong> Handles all client requests, replicates log entries to followers, and sends periodic heartbeats to maintain authority.</li>
            <li><strong>Follower:</strong> Passive agents that respond to RPC requests from leaders and candidates. Transitions to candidate if election timeout expires.</li>
            <li><strong>Candidate:</strong> Temporary state used to elect a new leader. Votes are requested from all peer nodes.</li>
          </ul>

          <h3 className="text-base font-bold text-white font-display pt-3">2. Leader Election Code Structure</h3>
          <p>
            In Java, we can implement the election loop using a scheduled executor service. Here is a simplified candidate trigger routine:
          </p>

          <pre className="rounded-lg bg-black border border-white/5 p-4 font-mono text-[10px] md:text-xs text-primary-light overflow-x-auto leading-normal">
{`public void startElection() {
    this.currentState = State.CANDIDATE;
    this.currentTerm++;
    this.votedFor = this.nodeId; // Vote for self
    int votesReceived = 1;
    
    // Broadcast RequestVote RPCs to peers
    for (Peer peer : peers) {
        RequestVoteArgs args = new RequestVoteArgs(currentTerm, nodeId, lastLogIndex, lastLogTerm);
        peer.sendRequestVoteAsync(args, (reply) -> {
            if (reply.term > currentTerm) {
                stepDown(reply.term); // Step down to follower
                return;
            }
            if (reply.voteGranted && currentState == State.CANDIDATE) {
                votesReceived++;
                if (votesReceived > (peers.size() + 1) / 2) {
                    becomeLeader();
                }
            }
        });
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-white font-display pt-3">3. Conclusion</h3>
          <p>
            Raft guarantees safety by ensuring only candidates with the most up-to-date logs can become leaders. Replicating logs reliably across a majority quorum handles network partitioning and hardware failures seamlessly.
          </p>
        </div>
      )
    },
    {
      slug: 'node-redis-caching',
      title: 'Asynchronous API Architectures with Node.js and Redis',
      category: 'Backend',
      date: 'May 14, 2026',
      readTime: '6 min read',
      summary: 'How to scale Express backend microservices using Redis for session caching, distributed rate-limiting, and background message queues.',
      content: (
        <div className="space-y-6 font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
          <p>
            As system traffic increases, hitting the relational database for every single page request creates database CPU bottlenecks. <strong>Redis</strong> (Remote Dictionary Server) is an open-source in-memory key-value store that acts as a cache, database, and message broker.
          </p>

          <h3 className="text-base font-bold text-white font-display pt-3">1. Cache-Aside Pattern Implementation</h3>
          <p>
            In a cache-aside pattern, the application checks the cache first. If there is a hit, it returns the data immediately. If there is a miss, it fetches data from the database, caches it, and returns it.
          </p>

          <pre className="rounded-lg bg-black border border-white/5 p-4 font-mono text-[10px] md:text-xs text-secondary-light overflow-x-auto leading-normal">
{`const redis = require('redis');
const client = redis.createClient({ url: 'redis://localhost:6379' });

async function getPostById(req, res) {
  const { id } = req.params;
  const cacheKey = \`post:\${id}\`;

  try {
    // 1. Query Redis Cache
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData)); // Cache Hit
    }

    // 2. Query MongoDB on Cache Miss
    const post = await MongoPost.findById(id);
    if (!post) return res.status(404).send('Post not found');

    // 3. Write back to Redis cache with TTL (1 hour)
    await client.setEx(cacheKey, 3600, JSON.stringify(post));

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}`}
          </pre>

          <h3 className="text-base font-bold text-white font-display pt-3">2. Rate Limiting with Redis</h3>
          <p>
            By keeping count of request IP addresses using a sliding window sliding log in Redis, we can block DOS attacks at the middleware layer before the server allocates resources.
          </p>
        </div>
      )
    },
    {
      slug: 'dijkstra-vs-astar',
      title: 'Visualizing pathfinding: Dijkstra vs A* Search',
      category: 'DSA',
      date: 'March 08, 2026',
      readTime: '5 min read',
      summary: 'An exploration of graph traversal heuristics. Comparing time-complexity weight models in grid-based maze path solvers.',
      content: (
        <div className="space-y-6 font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
          <p>
            Pathfinding algorithms are fundamental in network routing, robotic navigation, and coordinate mapping. This article compares two popular weighted search algorithms: <strong>Dijkstra&apos;s Algorithm</strong> and <strong>A* (A-Star) Search</strong>.
          </p>

          <h3 className="text-base font-bold text-white font-display pt-3">1. Dijkstra&apos;s Algorithm (Uniform Cost Search)</h3>
          <p>
            Dijkstra&apos;s algorithm is a greedy search that guarantees the shortest path on a weighted graph. It calculates the cumulative distance from the start node to all nodes, expanding search paths radially. Its main drawback is that it explores in all directions uniformly, regardless of where the target node actually lies.
          </p>

          <h3 className="text-base font-bold text-white font-display pt-3">2. A* Search (Heuristic Traversal)</h3>
          <p>
            A* improves on Dijkstra by using a heuristic function \(h(n)\) to estimate the distance remaining to the target. It minimizes the evaluation function:
          </p>
          <div className="text-center py-3 bg-[#111111] rounded border border-white/5 text-primary-light my-2 font-mono">
            \(f(n) = g(n) + h(n)\)
          </div>
          <p>
            Where \(g(n)\) is the actual cost from start to node \(n\), and \(h(n)\) is the Manhattan or Euclidean heuristic distance to the target. This directs the search path directly towards the target, resulting in far fewer node examinations.
          </p>

          <pre className="rounded-lg bg-black border border-white/5 p-4 font-mono text-[10px] md:text-xs text-primary-light overflow-x-auto leading-normal">
{`// A-Star evaluation heuristic
function calculateHeuristic(node, target) {
  // Manhattan Distance for grid nodes
  const dx = Math.abs(node.x - target.x);
  const dy = Math.abs(node.y - target.y);
  return dx + dy;
}`}
          </pre>
        </div>
      )
    }
  ];

  // Hash route compatibility (scroll/jump directly to article)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const slug = hash.replace('#', '');
      const found = articles.find((a) => a.slug === slug);
      if (found) {
        setActiveArticleSlug(slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [window.location.hash]);

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.summary.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 flex flex-col justify-between"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full py-12 flex-1">
        <AnimatePresence mode="wait">
          {activeArticleSlug ? (
            // READING MODE
            (() => {
              const activeArticle = articles.find((a) => a.slug === activeArticleSlug);
              if (!activeArticle) return null;

              return (
                <motion.article
                  key="reading"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8 select-text"
                >
                  {/* Back button */}
                  <button
                    onClick={() => setActiveArticleSlug(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Notebook</span>
                  </button>

                  {/* Header info */}
                  <div className="space-y-4 border-b border-white/5 pb-6">
                    <span className="rounded bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary-light uppercase tracking-wider">
                      {activeArticle.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
                      {activeArticle.title}
                    </h1>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 font-medium pt-1">
                      <span className="flex items-center gap-1"><Calendar size={13} /> {activeArticle.date}</span>
                      <span className="flex items-center gap-1"><Clock size={13} /> {activeArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Ruled notebook lined paper container */}
                  <div className="relative glass-panel rounded-xl p-6 sm:p-8 overflow-hidden bg-card">
                    <div className="absolute inset-0 notebook-lines opacity-[0.25] pointer-events-none p-6" />
                    <div className="relative z-10">
                      {activeArticle.content}
                    </div>
                  </div>
                </motion.article>
              );
            })()
          ) : (
            // LIST VIEW
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="space-y-4 text-center max-w-xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight text-white font-display">Developer Notebook</h1>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  A journal cataloguing technical designs, core data structures, and computer science tutorials.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative flex items-center w-full max-w-md mx-auto rounded-lg border border-white/5 bg-[#111111] px-4 py-2.5">
                <Search className="mr-2.5 text-neutral-500" size={16} />
                <input
                  type="text"
                  placeholder="Search articles by title, tag, content..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-neutral-500 outline-none"
                />
              </div>

              {/* Articles Stack */}
              <div className="space-y-6 max-w-3xl mx-auto">
                {filteredArticles.map((article) => (
                  <div
                    key={article.slug}
                    onClick={() => setActiveArticleSlug(article.slug)}
                    className="glass-panel glass-panel-hover p-6 rounded-xl relative cursor-pointer group flex flex-col justify-between h-48 select-none"
                  >
                    <div className="absolute inset-0 notebook-lines opacity-[0.18] pointer-events-none p-5" />
                    
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center gap-3 text-[9px] font-bold text-neutral-500 uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Calendar size={11} /> {article.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                      </div>
                      
                      <h3 className="text-base font-bold text-white group-hover:text-primary-light transition-colors font-display">
                        {article.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 pr-6">
                        {article.summary}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-3 mt-3">
                      <span className="rounded bg-neutral-900 border border-white/5 px-2.5 py-0.5 text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-[10px] font-bold text-primary-light group-hover:text-white transition-colors flex items-center gap-1">
                        <span>OPEN JOURNAL</span>
                        <Bookmark size={10} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </motion.div>
  );
}
