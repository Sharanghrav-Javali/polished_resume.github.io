import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneyRoadmap from '../components/sections/JourneyRoadmap';
import GithubSection from '../components/sections/GithubSection';
import CertificatesSection from '../components/sections/CertificatesSection';
import BlogsSection from '../components/sections/BlogsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

interface RevealSectionProps {
  children: React.ReactNode;
}

function RevealSection({ children }: RevealSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <RevealSection>
        <About />
      </RevealSection>
      <RevealSection>
        <TechStack />
      </RevealSection>
      <RevealSection>
        <ProjectsSection />
      </RevealSection>
      <RevealSection>
        <JourneyRoadmap />
      </RevealSection>
      <RevealSection>
        <GithubSection />
      </RevealSection>
      <RevealSection>
        <CertificatesSection />
      </RevealSection>
      <RevealSection>
        <BlogsSection />
      </RevealSection>
      <RevealSection>
        <ContactSection />
      </RevealSection>
      <Footer />
    </main>
  );
}
