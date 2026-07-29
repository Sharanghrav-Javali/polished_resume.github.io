import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 font-mono select-none relative">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 w-full max-w-lg rounded-xl border border-red-500/20 bg-card/60 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
      >
        
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-5 text-red-500">
          <AlertTriangle size={15} />
          <span className="text-xs font-semibold tracking-wider uppercase">FATAL_ERROR: ROUTE_NOT_FOUND</span>
          <div className="ml-auto flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-neutral-800" />
          </div>
        </div>

        {/* Output Log */}
        <div className="space-y-3.5 text-xs text-neutral-300">
          <div className="flex items-start gap-1">
            <span className="text-red-500 font-bold select-none">[404]</span>
            <span>Requested URL: {window.location.pathname}</span>
          </div>
          <div className="flex items-start gap-1">
            <span className="text-neutral-500 font-bold select-none">[LOG]</span>
            <span>Resolving path mapping... Failed. Terminating process stack.</span>
          </div>
          <pre className="rounded bg-black border border-white/5 p-4 text-[10px] text-red-400 leading-normal overflow-x-auto">
{`Stack Trace:
  at PageRouter.resolvePath (Router.ts:104)
  at App.render (App.tsx:28)
  at client.render (main.tsx:8)
Error: The system could not locate index node.`}
          </pre>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/5 pt-6">
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            <Home size={13} />
            <span>Return Home</span>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-accent-gray bg-[#111111] px-4 py-2.5 text-xs font-semibold text-white hover:bg-neutral-900 transition-colors"
          >
            <RefreshCw size={12} />
            <span>Reload Route</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
}
