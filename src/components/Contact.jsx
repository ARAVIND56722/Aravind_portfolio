import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-16 px-6 md:px-16 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-red-accent font-sans font-semibold tracking-widest uppercase text-sm mb-6"
        >
          09 — WHAT'S NEXT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[10vw] font-display font-bold text-white leading-[0.9] tracking-tighter mb-12"
        >
          HAVE AN IDEA?<br />
          <span className="text-white/30 hover:text-white transition-colors duration-500 cursor-default">LET'S BUILD IT.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-24"
        >
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akaravindhan75@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-red-accent transition-colors text-lg font-semibold uppercase tracking-wider">
            <span>EMAIL</span> <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/ARAVIND56722" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-red-accent transition-colors text-lg font-semibold uppercase tracking-wider">
            <span>GITHUB</span> <ArrowUpRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/aravind345/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-red-accent transition-colors text-lg font-semibold uppercase tracking-wider">
            <span>LINKEDIN</span> <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm font-semibold tracking-widest uppercase"
        >
          <p> ARAVIND A K</p>

        </motion.div>

      </div>
    </section>
  );
}
