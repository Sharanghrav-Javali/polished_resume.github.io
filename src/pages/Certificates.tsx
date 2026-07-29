import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar, Key } from 'lucide-react';
import Footer from '../components/sections/Footer';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  desc: string;
  topics: string[];
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      name: 'Modern AI & Customer Review Analysis',
      issuer: 'Cisco Networking Academy',
      date: 'April 2026',
      credentialId: 'CS-AI-9024-11A',
      verifyUrl: 'https://cisco.com',
      desc: 'Comprehensive training on modern AI systems, customer review classification models, neural architectures, and data parsing structures.',
      topics: ['Neural Networks', 'Sentiment Analysis', 'Data Cleaning', 'Python ML']
    },
    {
      name: 'JavaScript, Git & GitHub Suite',
      issuer: 'LetsUpgrade Academy',
      date: 'November 2025',
      credentialId: 'LU-JSGIT-4012A',
      verifyUrl: 'https://letsupgrade.in',
      desc: 'Full-stack fundamentals covering JavaScript DOM triggers, async operations, Git version control branches, and repository release structures.',
      topics: ['JavaScript ES6+', 'Asynchronous JS', 'Version Control', 'GitHub Actions']
    },
    {
      name: 'Java SE Programming Fundamentals',
      issuer: 'Oracle University',
      date: 'June 2025',
      credentialId: 'OR-JASE-88301',
      verifyUrl: 'https://oracle.com',
      desc: 'Standard Edition Java. Deep study on Object-Oriented Principles, polymorphism, inheritance patterns, file handles, and stream arrays.',
      topics: ['Java Core', 'OOP Concepts', 'Exception Handling', 'IO Streams']
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'February 2026',
      credentialId: 'AWS-CCP-9921B',
      verifyUrl: 'https://aws.amazon.com',
      desc: 'Cloud foundation training covering Amazon Web Services global infrastructure, VPC networking, EC2 computing, S3 buckets, and IAM security.',
      topics: ['Cloud Computing', 'AWS Core Services', 'IAM Security', 'Billing & Cost']
    },
    {
      name: 'Distributed Systems Architecture',
      issuer: 'Coursera (Stanford Online)',
      date: 'September 2025',
      credentialId: 'CR-DSA-3304E',
      verifyUrl: 'https://coursera.org',
      desc: 'Systems engineering covering distributed sync protocols, RPC messaging layers, cache coherence, distributed filesystems, and replica logs.',
      topics: ['Raft/Paxos Consensus', 'Distributed Cache', 'RPC Layering', 'Virtual Time']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 flex flex-col justify-between"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 space-y-12">
        {/* Title */}
        <div className="space-y-4 text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white font-display">Credentials & Certifications</h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Verify my technical specializations, accredited program completions, and professional certifications.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover p-6 rounded-xl flex flex-col justify-between h-[360px]"
            >
              <div className="space-y-4">
                {/* Visual mini-certificate mockup */}
                <div className="h-28 rounded-lg bg-neutral-950 border border-white/5 relative overflow-hidden p-3.5 flex flex-col justify-between font-serif select-none">
                  <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-tr from-primary/10 to-secondary/15 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="absolute bottom-2.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary-light">
                    <ShieldCheck size={16} />
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1">
                      <Award size={12} className="text-primary-light" />
                      <span className="text-[7.5px] uppercase tracking-widest font-sans font-semibold text-neutral-500">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="space-y-1 py-1 pr-6">
                    <h4 className="text-[10px] text-white font-bold leading-snug line-clamp-2">{cert.name}</h4>
                  </div>

                  <div className="border-t border-white/5 pt-1.5 flex justify-between items-center text-[5.5px] font-sans font-bold text-neutral-600">
                    <span>ACCREDITED COMPLETION SYSTEM</span>
                    <span className="font-mono text-neutral-500">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[9px] font-bold text-neutral-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {cert.date}</span>
                    <span className="flex items-center gap-1"><Key size={10} /> ID: {cert.credentialId}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-display truncate">{cert.name}</h3>
                  <p className="text-[11px] text-neutral-500 leading-normal line-clamp-2">{cert.desc}</p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1">
                  {cert.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="rounded bg-neutral-900 border border-white/5 px-2 py-0.5 text-[8px] font-semibold text-neutral-400">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-bold text-primary-light hover:text-white transition-colors"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
