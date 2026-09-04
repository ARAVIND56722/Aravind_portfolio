import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotate: -10, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      rotate: -2,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-dark-bg">

      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-accent/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Typography Side */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8 flex flex-col pt-20 lg:pt-0"
        >
          <div className="overflow-hidden mb-6">
            <motion.h1 variants={item} className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              ARAVINDHAN AK
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h2 variants={item} className="text-xl md:text-3xl font-sans font-semibold text-red-accent tracking-wide uppercase">
              AI & DATA SCIENCE • AI ENGINEERING • SOFTWARE
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.p variants={item} className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white/90">
              BUILDING INTELLIGENT<br />
              SYSTEMS THAT MATTER.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            AI & Data Science student focused on building intelligent applications, AI agents, data-driven systems and modern software experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-wrap gap-6 font-sans font-bold text-sm tracking-wider"
          >
            <a href="#projects" className="bg-red-accent text-white px-8 py-4 flex items-center gap-2 hover:bg-white hover:text-red-accent transition-colors">
              VIEW MY WORK <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="border border-white/20 text-white px-8 py-4 flex items-center gap-2 hover:border-white transition-colors">
              LET'S CONNECT <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex items-center gap-6 mt-8"
          >
            {[
              {
                name: 'GitHub',
                url: 'https://github.com/ARAVIND56722',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.1a5 5 0 0 0-1.53-3.72 4.7 4.7 0 0 0 .1-3.6s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C5.1 2.9 3.9 3.3 3.9 3.3a4.7 4.7 0 0 0 .1 3.6 5 5 0 0 0-1.53 3.72c0 5.56 3.34 6.75 6.48 7.1A4.8 4.8 0 0 0 8 18v4"></path>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/aravind345/',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )
              },
              {
                name: 'LeetCode',
                url: 'https://leetcode.com/u/T0Bu1UMO3Q/',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-red-accent transition-all duration-300 hover:scale-110 relative group"
              >
                {social.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark-bg border border-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Floating Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
          className="lg:col-span-4 justify-self-center lg:justify-self-end w-full max-w-[340px]"
        >
          <div className="bg-card-bg p-4 rounded-xl border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden group">
            {/* Red glow behind image */}
            <div className="absolute inset-0 bg-red-accent/20 blur-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-full aspect-[4/5] rounded-lg overflow-hidden bg-black mb-4">
              <img
                src="/aravind.png"
                alt="Aravind AK"
                className="w-full h-full object-cover transition-all duration-500"
              />

            </div>

            <div className="relative z-10 flex justify-between items-end">
              <div>
                <p className="text-white font-bold text-lg leading-none mb-1">Aravind AK</p>
                <p className="text-white/50 text-xs font-semibold tracking-wider">INDIA</p>
              </div>
              <div className="text-right">
                <span className="bg-red-accent/10 text-red-accent px-2 py-1 rounded text-xs font-bold border border-red-accent/20">AI & DS</span>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
