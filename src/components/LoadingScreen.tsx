import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const steps = [
    { text: 'sharanghrav@javali:~# init portfolio', delay: 100 },
    { text: 'Loading packages (React, Vite, Tailwind)...', delay: 400 },
    { text: 'Configuring custom theme components... Done.', delay: 350 },
    { text: 'Checking connection to GitHub API... Connected.', delay: 300 },
    { text: 'Mounting experience and projects...', delay: 250 },
    { text: 'Ready. Launching developer space...', delay: 200 }
  ];

  useEffect(() => {
    let currentStep = 0;
    const runSteps = () => {
      if (currentStep < steps.length) {
        setLoadingStep(currentStep + 1);
        const timer = setTimeout(() => {
          currentStep++;
          runSteps();
        }, steps[currentStep].delay);
        return () => clearTimeout(timer);
      } else {
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
        }, 600);
        return () => clearTimeout(finishTimer);
      }
    };
    
    runSteps();
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-4 font-mono select-none"
        >
          {/* Subtle grid background for the loader */}
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
          
          <div className="w-full max-w-lg rounded-lg border border-accent-gray bg-card/60 p-6 shadow-premium backdrop-blur-xl">
            {/* Terminal Window Header */}
            <div className="mb-4 flex items-center gap-1.5 border-b border-accent-gray pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-accent-muted">system_boot.sh</span>
            </div>

            {/* Terminal Outputs */}
            <div className="space-y-2 text-xs md:text-sm">
              {steps.map((step, idx) => {
                const isVisible = loadingStep > idx;
                const isCurrent = loadingStep === idx + 1;
                
                if (!isVisible) return null;

                return (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-primary select-none">&gt;</span>
                    <span className={idx === 0 ? 'text-white font-semibold' : 'text-neutral-300'}>
                      {step.text}
                      {isCurrent && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="ml-1 inline-block h-4 w-2 bg-primary"
                        />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-accent-muted">
              Pressing <kbd className="rounded border border-accent-gray bg-card px-1.5 py-0.5 text-[10px]">Ctrl + K</kbd> anywhere triggers Command Palette
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
