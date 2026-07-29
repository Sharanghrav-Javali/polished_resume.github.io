import { useState } from 'react';
import { Mail, MapPin, Phone, FileText, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const socialLinks = [
    { name: 'GitHub', value: 'github.com/Sharanghrav-Javali', url: 'https://github.com/Sharanghrav-Javali', icon: GithubIcon },
    { name: 'LinkedIn', value: 'linkedin.com/in/sharanghrav-j-970b63362', url: 'https://www.linkedin.com/in/sharanghrav-j-970b63362', icon: LinkedinIcon },
    { name: 'Email', value: 'javalisharanghrav@gmail.com', url: 'mailto:javalisharanghrav@gmail.com', icon: Mail },
    { name: 'Phone', value: '+91 80883 66539', url: 'tel:+918088366539', icon: Phone },
    { name: 'Location', value: 'Bangalore, Karnataka, India', url: 'https://maps.google.com/?q=Bangalore', icon: MapPin },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="space-y-16">
        
        {/* Title */}
        <div className="space-y-3 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">Connect</h3>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display">
            Get In Touch
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto">
            Have a question, collaboration proposal, or software requirement? Send a message.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Left Column: Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-xl relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Your Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      disabled={status === 'sending'}
                      className="w-full rounded-lg border border-white/5 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary/40 focus:bg-neutral-900"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      disabled={status === 'sending'}
                      className="w-full rounded-lg border border-white/5 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary/40 focus:bg-neutral-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="form-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ideas, or requirements..."
                    disabled={status === 'sending'}
                    className="w-full rounded-lg border border-white/5 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 outline-none transition-colors focus:border-primary/40 focus:bg-neutral-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full rounded-lg flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-emerald-500 text-white'
                      : status === 'sending'
                        ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-neutral-200'
                  }`}
                >
                  {status === 'success' ? (
                    <>
                      <Check size={14} />
                      <span>Message Dispatched</span>
                    </>
                  ) : status === 'sending' ? (
                    <>
                      <div className="h-3 w-3 animate-spin rounded-full border-2 border-neutral-600 border-t-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 select-none">
            <div className="glass-panel p-6 sm:p-8 rounded-xl space-y-6 flex-1 justify-center flex flex-col">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Connect Directly</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 group rounded-lg p-2 hover:bg-white/5 transition-all"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 border border-white/5 text-neutral-400 group-hover:text-primary-light transition-colors">
                        <LinkIcon size={14} />
                      </span>
                      <div className="space-y-0.5">
                        <span className="block text-[8px] font-bold text-neutral-500 uppercase tracking-wider">{link.name}</span>
                        <span className="block text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">{link.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Call-to-action */}
            <div className="glass-panel p-5 rounded-xl border border-secondary/10 bg-secondary/5 flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-bold text-secondary-light uppercase tracking-wider">Curriculum Vitae</h4>
                <p className="text-xs text-white font-medium font-display">Download clean, formal resume</p>
              </div>
              <Link
                to="/resume"
                className="rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 text-white transition-colors"
                title="View Resume"
              >
                <FileText size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
