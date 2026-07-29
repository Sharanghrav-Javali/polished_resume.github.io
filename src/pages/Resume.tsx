import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Printer, ExternalLink } from 'lucide-react';
import Footer from '../components/sections/Footer';

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

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 flex flex-col justify-between print:pt-0"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full py-12 space-y-8 print:py-0 print:px-0">
        
        {/* Header Action Row (Hidden during Print) */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 print:hidden select-none">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-white font-display">Interactive Resume</h1>
            <p className="text-xs text-neutral-500">View or print an optimized copy of my credentials.</p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            <Printer size={13} />
            <span>Print / Export PDF</span>
          </button>
        </div>

        {/* The Resume Sheet Container */}
        {/* Under normal screen view, it looks like a premium glass panel sheet. During printing, it resets to flat white/black */}
        <div className="glass-panel p-8 sm:p-12 rounded-xl bg-card space-y-8 print:p-0 print:border-none print:bg-transparent print:shadow-none print:text-black">
          
          {/* Resume Header */}
          <div className="text-center space-y-3.5 print:text-left print:border-b print:border-neutral-300 print:pb-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-display print:text-black print:text-2xl">
              SHARANGHRAV JAVALI
            </h2>
            
            {/* Contact Grid */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 print:justify-start print:text-neutral-700">
              <span className="flex items-center gap-1"><MapPin size={12} /> Bangalore, Karnataka, India</span>
              <span className="hidden sm:inline text-neutral-700 select-none print:inline">|</span>
              <a href="tel:+918088366539" className="flex items-center gap-1 hover:text-white print:text-neutral-700"><Phone size={12} /> 8088366539</a>
              <span className="hidden sm:inline text-neutral-700 select-none print:inline">|</span>
              <a href="mailto:javalisharanghrav@gmail.com" className="flex items-center gap-1 hover:text-white print:text-neutral-700"><Mail size={12} /> javalisharanghrav@gmail.com</a>
            </div>

            {/* Social Rows */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500 pt-1 print:justify-start print:text-neutral-600 print:pt-2">
              <a 
                href="https://www.linkedin.com/in/sharanghrav-javali-970b63362" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white print:text-neutral-600"
              >
                <LinkedinIcon className="h-3 w-3" />
                <span>linkedin.com/in/sharanghrav-javali-970b63362</span>
              </a>
              <span className="hidden sm:inline text-neutral-700 select-none print:inline">|</span>
              <a 
                href="https://github.com/Sharanghrav-Javali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white print:text-neutral-600"
              >
                <GithubIcon className="h-3 w-3" />
                <span>github.com/Sharanghrav-Javali</span>
              </a>
            </div>
          </div>

          {/* Section: Career Objective */}
          <div className="space-y-2.5 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              CAREER OBJECTIVE
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed print:text-neutral-700">
              Self-driven Web Developer with hands-on experience in building real-world applications, including a coffee shop website and an AI-based AQI prediction system. Skilled in developing responsive, user-centric websites and integrating APIs and AI features.
            </p>
          </div>

          {/* Section: Education */}
          <div className="space-y-4 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              EDUCATION
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h4 className="font-bold text-white print:text-black">BE - Computer Science and Engineering</h4>
                  <span className="text-neutral-500 print:text-neutral-600">Sapthagiri NPS University, Bangalore</span>
                </div>
                <span className="font-semibold text-neutral-400 print:text-neutral-700 text-[10px]">Ongoing</span>
              </div>
              <div className="flex justify-between items-start text-xs border-t border-white/5 pt-2.5 print:border-neutral-200">
                <div>
                  <h4 className="font-bold text-white print:text-black">Class XII (Pre-University)</h4>
                  <span className="text-neutral-500 print:text-neutral-600">Vagdevi PU College</span>
                </div>
                <span className="font-bold text-primary-light print:text-neutral-800 font-display">91.66%</span>
              </div>
              <div className="flex justify-between items-start text-xs border-t border-white/5 pt-2.5 print:border-neutral-200">
                <div>
                  <h4 className="font-bold text-white print:text-black">Class X (Secondary School)</h4>
                  <span className="text-neutral-500 print:text-neutral-600">Vagdevi English Medium High School</span>
                </div>
                <span className="font-bold text-primary-light print:text-neutral-800 font-display">97.4%</span>
              </div>
            </div>
          </div>

          {/* Section: Skills */}
          <div className="space-y-3 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-neutral-300 print:text-neutral-800 block">Programming Languages:</span>
                <span className="text-neutral-400 print:text-neutral-700">C, Java, Python, C++</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-neutral-300 print:text-neutral-800 block">Web Core Technologies:</span>
                <span className="text-neutral-400 print:text-neutral-700">HTML, CSS, JavaScript, React, Node.js, Express</span>
              </div>
              <div className="space-y-1 border-t border-white/5 pt-2 sm:border-t-0 sm:pt-0 print:border-neutral-100">
                <span className="font-bold text-neutral-300 print:text-neutral-800 block">Tools & Environments:</span>
                <span className="text-neutral-400 print:text-neutral-700">Git, GitHub, VS Code, MS Office, Jupyter Notebook, Linux</span>
              </div>
              <div className="space-y-1 border-t border-white/5 pt-2 sm:border-t-0 sm:pt-0 print:border-neutral-100">
                <span className="font-bold text-neutral-300 print:text-neutral-800 block">Soft Skills:</span>
                <span className="text-neutral-400 print:text-neutral-700">Communication, Teamwork, Time Management, Critical Thinking</span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-4 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              ACADEMIC PROJECTS
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white print:text-black">Coffee Shop Website</h4>
                  <a 
                    href="https://sharanghrav-javali.github.io/coffee-shop.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] text-primary-light hover:text-white flex items-center gap-0.5 print:text-neutral-700"
                  >
                    <span>Live Page</span>
                    <ExternalLink size={10} className="print:hidden" />
                  </a>
                </div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider print:text-neutral-600">HTML, CSS, JavaScript</div>
                <p className="text-neutral-400 leading-relaxed print:text-neutral-700">
                  Developed a fully responsive web application promoting menu items, client booking reservations, and social integrations. Managed DOM operations and CSS animations.
                </p>
              </div>

              <div className="space-y-1.5 text-xs border-t border-white/5 pt-3.5 print:border-neutral-200">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white print:text-black">AQI Prediction System</h4>
                  <span className="text-[10px] text-accent-muted print:text-neutral-600 uppercase font-semibold">Active Development</span>
                </div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider print:text-neutral-600">AI / Machine Learning, Python</div>
                <p className="text-neutral-400 leading-relaxed print:text-neutral-700">
                  Constructing an AI-based system to poll and model local Air Quality Indices. Implementing regression forecasting algorithms to project environmental warnings.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="space-y-3 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              CERTIFICATIONS
            </h3>
            <ul className="list-disc pl-5 text-xs text-neutral-400 space-y-1.5 print:text-neutral-700">
              <li><strong>JavaScript, Git & GitHub</strong> &bull; LetsUpgrade Academy</li>
              <li><strong>Modern AI, Customer Review Analysis</strong> &bull; Cisco Networking Academy</li>
            </ul>
          </div>

          {/* Section: Extra-Curricular */}
          <div className="space-y-3 print:text-black">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/5 pb-1.5 print:text-neutral-800 print:border-neutral-300">
              EXTRA-CURRICULAR & INTERESTS
            </h3>
            <ul className="list-disc pl-5 text-xs text-neutral-400 space-y-1.5 print:text-neutral-700">
              <li>Active member of <strong>Innovedge</strong> student organization.</li>
              <li>Participated in local coding Hackathons.</li>
              <li><strong>Languages:</strong> Fluent in English, Hindi, and Kannada.</li>
            </ul>
          </div>

        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
