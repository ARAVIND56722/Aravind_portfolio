import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROJECTS = [
  {
    title: "Autonomous AI Research Agent",
    description: "An intelligent agent capable of conducting autonomous research, gathering information, and synthesizing complex reports using  LLMs.",
    tech: ["Python", "LangChain", "Vector DB", "LLMs", "RAG"],
    color: "from-red-accent/20",
    github: "https://github.com/ARAVIND56722/-Autonomous-AI-Research-Agent",
    demo: "https://autonomous-ai-research-agent.vercel.app/"

  },
  {
    title: "Civic Issue Reporting & Tracking",
    description: "A centralized platform for citizens to report local civic issues, track resolution progress, and engage with municipal authorities.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "cloudinary",],
    color: "from-zinc-500/20",
    github: "https://github.com/ARAVIND56722/civic-issue",
    demo: "https://civic-issue-iota.vercel.app/"
  },
  {
    title: "Food Rescue Platform",
    description: "A community-driven application connecting food donors with NGOs and individuals to minimize food waste and alleviate hunger.",
    tech: ["Python", "React", "Tailwind CSS", "Streamlit", "Rest API"],
    color: "from-white/20",
    github: "https://github.com/ARAVIND56722/food-rescue-platform",
    demo: " https://food-rescue-platform-fpnzackazgwds9q4lmersz.streamlit.app/"
  },
  {
    title: "URL Shortener Pro",
    description: "A scalable URL shortening service with comprehensive analytics, custom aliases, and robust API endpoints.",
    tech: ["JavaScript", "Express", "MongoDB", "Redis"],
    color: "from-red-accent/20",
    github: "https://github.com/ARAVIND56722/shortify",
    demo: "https://shortify-blond.vercel.app"
  },
  {
    title: "ETK Energy Marketplace",
    description: "A peer-to-peer energy trading platform that leverages blockchain technology and ERC-20 tokens to simulate transparent and decentralized energy transactions between users.",
    tech: ["React", "Web3.js", "Node.js", "Solidity", "Ether.js", "ERC-20 Tokens", "Sepolia TestNet", "Samrt contracts"],
    color: "from-zinc-500/20",
    github: "https://github.com/ARAVIND56722/ETK-Energy-Marketplace",

  },
  {
    title: "Supply Chain Traceability",
    description: "A blockchain-based solution ensuring transparency, provenance tracking, and tamper-proof records for supply chains.",
    tech: ["Solidity", "Ethereum", "React", "Truffle"],
    color: "from-white/20",
    github: "https://github.com/ARAVIND56722/blockchain-supply-chain-traceability",

  }
];

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-dark-bg">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        <div className="px-6 md:px-16 mb-12 mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
          >
            03 — PROJECTS
          </motion.h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max pb-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className={`w-[85vw] md:w-[600px] h-[500px] bg-card-bg border border-white/10 hover:border-red-accent hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] transition-all duration-500 rounded-2xl p-10 flex flex-col justify-between relative group overflow-hidden flex-shrink-0`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              <div className="relative z-10 h-full flex flex-col">
                <span className="text-red-accent font-bold text-6xl opacity-20 block mb-4">0{index + 1}</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight group-hover:text-red-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-red-accent hover:border-red-accent text-white transition-all group/icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:scale-110 transition-transform">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.1a5 5 0 0 0-1.53-3.72 4.7 4.7 0 0 0 .1-3.6s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C5.1 2.9 3.9 3.3 3.9 3.3a4.7 4.7 0 0 0 .1 3.6 5 5 0 0 0-1.53 3.72c0 5.56 3.34 6.75 6.48 7.1A4.8 4.8 0 0 0 8 18v4"></path>
                    </svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-red-accent hover:border-red-accent text-white transition-all group/icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:scale-110 transition-transform">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
