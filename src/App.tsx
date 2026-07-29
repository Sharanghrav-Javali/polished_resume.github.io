import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import MouseSpotlight from './components/MouseSpotlight';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import CommandPalette from './components/CommandPalette';
import TerminalEasterEgg from './components/TerminalEasterEgg';
import NowLearningWidget from './components/NowLearningWidget';

// Page Imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function AppContent() {
  const location = useLocation();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global key listener for Command Palette (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine if we should render navigation elements (hide on 404/NotFound and during print)
  const isSpecialPage = location.pathname === '/404' || 
                        !['/', '/projects', '/certificates', '/blogs', '/resume', '/contact'].includes(location.pathname);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 select-none pointer-events-none" />

      {/* Global Interactive Enhancements */}
      <MouseSpotlight />
      <ScrollProgress />
      <LoadingScreen />
      <TerminalEasterEgg />
      
      {!isSpecialPage && (
        <>
          <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <NowLearningWidget />
        </>
      )}

      {/* Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />

      {/* Page Routing Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
