import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">02 — ABOUT</h2>
            <div className="w-12 h-1 bg-red-accent"></div>
          </motion.div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8 text-white/70 text-lg md:text-2xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My journey into tech started with a deep fascination for data.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I am a Data Science and Artificial Intelligence student driven by the desire to build systems that bridge the gap between complex algorithms and human-centric design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From  <span className="text-white font-bold">LLM Powered systems and AI Agents</span>, to <span className="text-white font-bold">Full-Stack applications  and</span> and<span className="text-white font-bold"> Web3 Technologies,</span>, I focus on transforming ideas into practical products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I believe great technology isn't just about complex algorithms—it's about building intelligent systems that solve real-world problems. <span className="text-red-accent font-bold">Building intelligent systems that matter.</span>
          </motion.p>
        </div>

      </div>
    </section>
  );
}
