import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-12 flex flex-col justify-between"
    >
      <div className="flex-1 flex items-center justify-center">
        <ContactSection />
      </div>
    </motion.div>
  );
}
