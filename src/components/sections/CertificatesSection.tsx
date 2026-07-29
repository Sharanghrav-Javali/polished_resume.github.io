import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
}

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates: Certificate[] = [
    {
      name: 'Modern AI & Customer Review Analysis',
      issuer: 'Cisco Networking Academy',
      date: 'April 2026',
      credentialId: 'CS-AI-9024-11A',
      verifyUrl: 'https://cisco.com',
      badgeColor: 'from-[#00b4d8] to-[#0077b6]'
    },
    {
      name: 'JavaScript, Git & GitHub Suite',
      issuer: 'LetsUpgrade Academy',
      date: 'November 2025',
      credentialId: 'LU-JSGIT-4012A',
      verifyUrl: 'https://letsupgrade.in',
      badgeColor: 'from-amber-400 to-amber-600'
    },
    {
      name: 'Java SE Programming Fundamentals',
      issuer: 'Oracle University',
      date: 'June 2025',
      credentialId: 'OR-JASE-88301',
      verifyUrl: 'https://oracle.com',
      badgeColor: 'from-[#e34c26] to-[#f06529]'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'February 2026',
      credentialId: 'AWS-CCP-9921B',
      verifyUrl: 'https://aws.amazon.com',
      badgeColor: 'from-orange-400 to-[#ff9900]'
    },
    {
      name: 'Distributed Systems Architecture',
      issuer: 'Coursera (Stanford Online)',
      date: 'September 2025',
      credentialId: 'CR-DSA-3304E',
      verifyUrl: 'https://coursera.org',
      badgeColor: 'from-[#8B5CF6] to-[#6D28D9]'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-12">
        {/* Title */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">Achievements</h3>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Verifiable Certificates
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
              Professional training credentials, technical skill evaluations, and specialization programs.
            </p>
          </div>
          
          {/* Scroll Controls & Navigation Link */}
          <div className="flex items-center gap-4">
            <Link
              to="/certificates"
              className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              All Certificates
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="rounded-full border border-white/5 bg-[#111111] p-2 text-neutral-400 hover:border-white/10 hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="rounded-full border border-white/5 bg-[#111111] p-2 text-neutral-400 hover:border-white/10 hover:text-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Certificates Slider Shelf */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-[320px] sm:w-[360px] shrink-0 snap-start"
            >
              <div className="glass-panel glass-panel-hover flex h-[270px] flex-col justify-between p-5 rounded-xl">
                {/* Custom Vector Certificate Preview */}
                <div className="h-28 rounded-lg bg-neutral-950 border border-white/5 relative overflow-hidden p-3.5 flex flex-col justify-between font-serif select-none">
                  {/* Glowing background gradient ring */}
                  <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-tr from-primary/10 to-secondary/15 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Badge Seal */}
                  <div className="absolute bottom-2.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary-light">
                    <ShieldCheck size={18} />
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1">
                      <Award size={13} className="text-primary-light" />
                      <span className="text-[7.5px] uppercase tracking-widest font-sans font-semibold text-neutral-500">{cert.issuer}</span>
                    </div>
                    <span className="text-[6.5px] font-sans font-semibold text-neutral-600 uppercase tracking-wider">{cert.date}</span>
                  </div>

                  <div className="space-y-1 py-1 pr-6">
                    <h4 className="text-[10px] text-white font-bold leading-snug line-clamp-2">{cert.name}</h4>
                  </div>

                  <div className="border-t border-white/5 pt-1.5 flex justify-between items-center text-[6px] font-sans font-bold text-neutral-600">
                    <span>VERIFIED CERTIFICATE OF COMPLETION</span>
                    <span className="font-mono text-neutral-500">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Info & Verify Button */}
                <div className="space-y-3.5 pt-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{cert.issuer}</span>
                    <h3 className="text-xs font-bold text-white tracking-tight leading-snug line-clamp-1 font-display">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[9px] text-neutral-500">ID: {cert.credentialId}</span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] font-semibold text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
