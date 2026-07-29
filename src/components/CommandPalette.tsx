import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Briefcase, Award, BookOpen, Mail, Home, ExternalLink, HelpCircle, Terminal } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Command list
  const commands = [
    { id: 'home', title: 'Go to Home', category: 'Pages', icon: Home, action: () => navigate('/') },
    { id: 'projects', title: 'View Projects', category: 'Pages', icon: Briefcase, action: () => navigate('/projects') },
    { id: 'certificates', title: 'View Certificates', category: 'Pages', icon: Award, action: () => navigate('/certificates') },
    { id: 'blogs', title: 'Read Notebook / Blogs', category: 'Pages', icon: BookOpen, action: () => navigate('/blogs') },
    { id: 'resume', title: 'View Interactive Resume', category: 'Pages', icon: FileText, action: () => navigate('/resume') },
    { id: 'contact', title: 'Contact Section', category: 'Pages', icon: Mail, action: () => navigate('/contact') },
    
    // Quick Actions
    { id: 'github', title: 'Open GitHub Profile', category: 'External Links', icon: ExternalLink, action: () => window.open('https://github.com/Sharanghrav-Javali', '_blank') },
    { id: 'linkedin', title: 'Connect on LinkedIn', category: 'External Links', icon: ExternalLink, action: () => window.open('https://www.linkedin.com/in/sharanghrav-javali-970b63362', '_blank') },
    { id: 'email', title: 'Send Email Directly', category: 'Actions', icon: Mail, action: () => window.open('mailto:javalisharanghrav@gmail.com', '_blank') },
    { id: 'terminal', title: 'Launch Secret Terminal', category: 'Easter Egg', icon: Terminal, action: () => {
      // Simulate typing "hello" by dispatching custom event
      window.dispatchEvent(new CustomEvent('trigger-easter-egg'));
      onClose();
    }},
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setQuery('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Key event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm px-4"
        >
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl"
          >
            {/* Search Input */}
            <div className="relative flex items-center border-b border-white/5 px-4 py-3.5">
              <Search className="mr-3 text-neutral-500" size={18} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search commands, pages, actions..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
              />
              <span className="rounded border border-neutral-800 bg-[#1A1A1A] px-1.5 py-0.5 text-[10px] text-neutral-400">ESC</span>
            </div>

            {/* Command List */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-neutral-500">
                  <HelpCircle size={28} className="mb-2 text-neutral-600" />
                  <p className="text-xs">No commands found for &ldquo;{query}&rdquo;</p>
                </div>
              ) : (
                // Group by Category
                Object.entries(
                  filteredCommands.reduce((acc, cmd) => {
                    if (!acc[cmd.category]) acc[cmd.category] = [];
                    acc[cmd.category].push(cmd);
                    return acc;
                  }, {} as Record<string, typeof filteredCommands>)
                ).map(([category, items]) => (
                  <div key={category}>
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 select-none">
                      {category}
                    </div>
                    <div className="space-y-0.5">
                      {items.map((cmd) => {
                        // Find original index in filtered list
                        const flatIndex = filteredCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = flatIndex === selectedIndex;
                        const Icon = cmd.icon;

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => {
                              cmd.action();
                              onClose();
                            }}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
                              isSelected
                                ? 'bg-primary/10 border border-primary/20 text-white'
                                : 'text-neutral-400 border border-transparent hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={14} className={isSelected ? 'text-primary' : 'text-neutral-500'} />
                              <span>{cmd.title}</span>
                            </div>
                            {isSelected && (
                              <span className="text-[10px] text-primary">⏎ Enter</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
