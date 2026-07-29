import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, ChevronRight } from 'lucide-react';

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Welcome, fellow developer.',
    'Type "help" for a list of available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const keystrokeBuffer = useRef<string[]>([]);

  // Listen for the sequence "h-e-l-l-o"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
        return;
      }

      // Add to buffer
      keystrokeBuffer.current.push(e.key.toLowerCase());
      if (keystrokeBuffer.current.length > 5) {
        keystrokeBuffer.current.shift();
      }

      const currentWord = keystrokeBuffer.current.join('');
      if (currentWord === 'hello') {
        setIsOpen(true);
        keystrokeBuffer.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Custom trigger from Command Palette
    const handleCustomTrigger = () => {
      setIsOpen(true);
    };
    window.addEventListener('trigger-easter-egg', handleCustomTrigger);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('trigger-easter-egg', handleCustomTrigger);
    };
  }, [isOpen]);

  // Focus terminal input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Auto-scroll to bottom of history
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, `sharanghrav@portfolio:~$ ${inputVal}`];

    switch (cmd) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  about       - Tell me about Sharanghrav',
          '  projects    - List active projects',
          '  skills      - Show current skill stack',
          '  clear       - Clear terminal console history',
          '  sudo rm -rf - Warning: Do not run this command',
          '  exit        - Close this terminal session'
        );
        break;
      case 'about':
        newHistory.push(
          'Sharanghrav Javali is a Computer Science Engineering student',
          'enrolled at Sapthagiri NPS University in Bangalore, India.',
          'Specializes in Java backend systems, full stack development,',
          'and AI integration.'
        );
        break;
      case 'projects':
        newHistory.push(
          'Active Projects:',
          '  - Coffee Shop Website: Responsive coffee menu site (HTML/CSS/JS)',
          '  - AQI Prediction System: AI/ML air quality forecasting system',
          '  - AetherDB: A high-performance distributed key-value store (Java)',
          '  - Sentinel: Real-time system monitoring agent (Python)'
        );
        break;
      case 'skills':
        newHistory.push(
          'Languages : C, Java, Python, C++',
          'Web       : HTML, CSS, JavaScript, React, Node.js, Express',
          'Tools     : Git, GitHub, VS Code, Jupyter Notebook'
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;
      case 'exit':
        setIsOpen(false);
        setInputVal('');
        return;
      case 'sudo rm -rf':
        newHistory.push(
          '💣 COMMAND ERROR: Access denied.',
          'System locked. Just kidding. Do not delete my portfolio!'
        );
        break;
      default:
        newHistory.push(`bash: command not found: ${cmd}. Type "help" for a list of commands.`);
    }

    newHistory.push('');
    setTerminalHistory(newHistory);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[450px] w-full max-w-2xl flex-col rounded-xl border border-primary/20 bg-black shadow-2xl shadow-primary/10 overflow-hidden font-mono text-sm text-neutral-300"
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-[#0d0d0d] px-4 py-3 select-none">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-primary" />
                <span className="text-xs text-neutral-400">guest@sharanghrav-javali-shell: ~</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-neutral-500 hover:bg-white/5 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Terminal History */}
            <div 
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto p-4 space-y-1.5 cursor-text text-xs md:text-sm selection:bg-primary/20"
            >
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {line}
                </div>
              ))}
              <div ref={historyEndRef} />
            </div>

            {/* Terminal Prompt Form */}
            <form 
              onSubmit={handleCommandSubmit}
              className="flex items-center border-t border-white/5 bg-[#0d0d0d] px-4 py-3"
            >
              <ChevronRight size={14} className="mr-2 text-primary" />
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent outline-none border-none text-white font-mono placeholder-neutral-700 text-xs md:text-sm"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
