import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Sparkles, BookOpenCheck, ChevronRight } from 'lucide-react';

export default function NowLearningWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  const learningItems = [
    { name: 'Java DSA', desc: 'LeetCode, structures, algos', progress: '85%' },
    { name: 'System Design', desc: 'Scalability, caching, databases', progress: '60%' },
    { name: 'AI Fundamentals', desc: 'LLMs, ML pipelines, integrations', progress: '75%' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans select-none">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 rounded-xl border border-white/10 bg-[#111111]/90 p-5 shadow-2xl backdrop-blur-md"
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Current Status</span>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-[10px] text-accent-muted hover:text-white transition-colors"
              >
                Minimize
              </button>
            </div>

            {/* Mission Card */}
            <div className="mb-5 rounded-lg border border-secondary/15 bg-secondary/5 p-3.5">
              <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-secondary-light">
                <Target size={13} />
                <span>Current Mission</span>
              </div>
              <p className="text-xs text-white leading-relaxed font-medium">
                🎯 Become a Software Engineer at Google.
              </p>
            </div>

            {/* Learning Tracker */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-light">
                <BookOpenCheck size={13} />
                <span>Now Learning</span>
              </div>
              <div className="space-y-2.5">
                {learningItems.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-neutral-200">{item.name}</span>
                      <span className="text-[10px] text-accent-muted">{item.progress}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1 w-full rounded-full bg-neutral-800">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: item.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          // Collapsed Trigger Button
          <motion.button
            layoutId="learning-trigger"
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 rounded-full border border-white/5 bg-[#111111]/80 px-4 py-2.5 text-xs font-medium text-white shadow-lg backdrop-blur-md hover:bg-neutral-800 hover:border-white/10 transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <Target size={13} className="text-secondary group-hover:scale-110 transition-transform" />
            <span>Active Mission & Study</span>
            <ChevronRight size={12} className="text-accent-muted ml-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
