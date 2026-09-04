import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">

        {/* Left: Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-red-accent flex items-center justify-center font-display font-bold text-white tracking-tighter rounded-sm group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="font-sans font-bold text-white tracking-widest uppercase hidden sm:block group-hover:text-red-accent transition-colors">
            Aravind A K
          </span>
        </a>

        {/* Center: Navigation */}
        <div className="hidden lg:flex items-center gap-5 bg-white/5 px-6 py-2 rounded-full border border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors relative ${activeSection === link.href.substring(1) ? 'text-red-accent' : 'text-white/60 hover:text-white'
                }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-accent"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: Resume Button */}
        <div>
          <a
            href="/Aravind_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-red-accent/30 text-red-accent font-semibold text-sm tracking-widest uppercase hover:bg-red-accent hover:text-white transition-all rounded-sm"
          >
            Resume
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
