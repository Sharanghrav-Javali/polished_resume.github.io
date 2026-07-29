import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Mail } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [typedCode, setTypedCode] = useState('');
  const codeSnippet = `// Active: Learning DSA in Java\nclass BinarySearch {\n    public int search(int[] nums, int target) {\n        int left = 0;\n        int right = nums.length - 1;\n        \n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n        return -1; // Target not found\n    }\n}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode((prev) => prev + codeSnippet[index]);
      index++;
      if (index >= codeSnippet.length) {
        clearInterval(interval);
        // Reset typing after a delay to loop
        setTimeout(() => {
          setTypedCode('');
          index = 0;
        }, 5000);
      }
    }, 25); // Typing speed

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };


  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-40 select-none pointer-events-none" />

      {/* Cyber Grid Drift Effect */}
      <div className="absolute inset-0 bg-cyber-grid bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none animate-grid-drift" />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Column: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary-light">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for Collaborations</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wider text-accent-muted uppercase">Hi, I&apos;m</h2>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-display">
              Sharanghrav Javali
            </h1>
            <p className="text-lg font-medium text-neutral-400 font-display">
              Computer Science Engineering Student &bull; Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="max-w-md text-sm leading-relaxed text-neutral-500">
            Passionate about building scalable backend services, optimizing data structures, and designing clean interfaces. Focused on AI, Backend Engineering, and System Design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/projects"
              className="flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-neutral-200"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/resume"
              className="flex items-center gap-1.5 rounded-lg border border-accent-gray bg-[#111111]/80 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-900"
            >
              Download Resume
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 rounded-lg border border-transparent bg-primary/10 hover:bg-primary/20 px-5 py-2.5 text-xs font-semibold text-primary-light transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 text-neutral-500">
            <a href="https://github.com/Sharanghrav-Javali" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/sharanghrav-javali-970b63362" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href="mailto:javalisharanghrav@gmail.com" className="hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative mx-auto w-full max-w-lg lg:ml-auto"
        >
          {/* Ambient Glow behind Terminal */}
          <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-15 blur-xl pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative rounded-xl border border-white/5 bg-[#111111]/90 shadow-2xl backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-[#161616]/40 px-4 py-3 select-none">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-primary-light" />
                <span className="font-mono text-xs text-neutral-400">BinarySearch.java</span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Code Field */}
            <div className="h-80 overflow-y-auto p-5 font-mono text-[11px] md:text-xs leading-relaxed text-neutral-300">
              <pre className="whitespace-pre">
                <code>
                  {typedCode}
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 bg-primary animate-pulse" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
