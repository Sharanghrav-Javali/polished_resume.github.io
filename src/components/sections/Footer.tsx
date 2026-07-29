import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#070707] py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Quote & Brand */}
        <div className="space-y-2 text-center md:text-left">
          <Link to="/" className="font-display text-base font-bold text-white tracking-tight">
            Sharanghrav Javali
          </Link>
          <p className="text-xs italic text-neutral-500 max-w-xs leading-relaxed">
            &ldquo;Building today what I dream of tomorrow.&rdquo;
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-medium text-neutral-500">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/certificates" className="hover:text-white transition-colors">Certificates</Link>
          <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
          <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Social and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4 text-neutral-500">
            <a href="https://github.com/Sharanghrav-Javali" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.linkedin.com/in/sharanghrav-javali-970b63362" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
            <a href="mailto:javalisharanghrav@gmail.com" className="hover:text-white transition-colors">
              <Mail size={15} />
            </a>
          </div>
          <span className="text-[10px] text-neutral-600">
            &copy; {currentYear} Sharanghrav Javali. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
