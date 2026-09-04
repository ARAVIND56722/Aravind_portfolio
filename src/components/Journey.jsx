import { motion } from 'framer-motion';

const MILESTONES = [
  {
    year: "2026",
    title: "Dream Job",
    description: "Aspiring to build impactful products at the intersection of Artificial Intelligence, Generative AI, and Software Engineering.",
    status: "future"
  },
  {
    year: "CURRENT STAGE",
    title: "Building the Future",
    description: "Continuously expanding my skill set, developing side projects, and mastering the intersection of software engineering and data science.",
    status: "current"
  },
  {
    year: "2025",
    title: "Data Analyst at I-BACUS-TECH",
    description: "Analyzed complex datasets to extract actionable business insights, built interactive dashboards, and optimized data workflows.",
    highlights: [
      "Analyzed and interpreted business datasets to identify actionable insights.",
      "Built interactive dashboards and visual reports using Power BI and Excel.",
      "Improved data reporting workflows and presented insights clearly.",
      "Strengthened practical skills in data visualization and business analytics."
    ],
    project: {
      name: "Sales & Operations Dashboard",
      description: "A comprehensive data visualization project providing real-time insights into core business metrics, predicting trends, and identifying operational bottlenecks.",
      github: "https://github.com/ARAVIND56722/PowerBI-Dashboard",
      powerbi: "/dashboard.pdf"
    },
    status: "completed"
  },
  {
    year: "2024",
    title: "Blockchain Technology",
    description: "Awarded for exceptional performance in Blockchain courses and for developing secure, decentralized supply chain applications using Web3.",
    status: "completed"
  },
  {
    year: "2023",
    title: "B.Tech Artificial Intelligence & Data Science",
    description: "Pursuing rigorous coursework in Machine Learning, Generative AI, and Data Science while building a strong foundation in software engineering.",
    status: "completed"
  }
];

export default function Journey() {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">05 — JOURNEY</h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-16 flex flex-col gap-16">
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group w-full"
            >
              {/* Red Timeline Segment (Overlaps Parent Border) */}
              {(item.status === 'completed' || item.status === 'current') && index !== MILESTONES.length - 1 && (
                <div className="absolute top-5 bottom-[-64px] -left-[33px] md:-left-[65px] w-[2px] bg-red-accent z-10 transition-all duration-1000 origin-top"></div>
              )}

              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] md:-left-[73px] top-1 w-4 h-4 rounded-full border-2 z-20 transition-all duration-500 ${
                item.status === 'completed'
                  ? 'bg-red-accent border-red-accent shadow-[0_0_15px_rgba(229,9,20,0.5)] group-hover:shadow-[0_0_20px_rgba(229,9,20,0.8)]'
                  : item.status === 'current'
                    ? 'bg-red-accent border-red-accent shadow-[0_0_20px_rgba(229,9,20,0.8)] animate-pulse'
                    : 'bg-dark-bg border-white/20 group-hover:border-white/40'
              }`}></div>
              
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 w-full lg:items-start transition-opacity duration-500 opacity-100`}>
                {/* Milestone Text */}
                <div className="flex-1">
                  <h3 className={`font-display font-bold text-sm md:text-base mb-2 tracking-widest text-red-accent`}>{item.year}</h3>
                  <h4 className="text-white font-sans font-bold text-2xl md:text-3xl mb-4 group-hover:text-red-accent transition-colors">{item.title}</h4>
                  <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="mt-6 space-y-3 max-w-2xl">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-white/70">
                          <span className="text-red-accent mt-2 text-[10px] font-bold">●</span>
                          <span className="text-base leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Project Showcase Card */}
                {item.project && (
                  <div className="lg:w-[350px] shrink-0 bg-card-bg border border-red-accent/30 rounded-xl p-6 transition-all duration-300 hover:border-red-accent hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 rounded-full blur-3xl -z-10 group-hover/card:bg-red-accent/10 transition-colors"></div>
                    <div className="text-xs font-bold tracking-widest text-red-accent mb-2 uppercase">Internship Project</div>
                    <h5 className="text-white font-bold text-xl mb-3">{item.project.name}</h5>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">{item.project.description}</p>

                    <div className="flex gap-3">
                      <a href={item.project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-red-accent hover:border-red-accent text-white transition-all" title="GitHub Source">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.1a5 5 0 0 0-1.53-3.72 4.7 4.7 0 0 0 .1-3.6s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C5.1 2.9 3.9 3.3 3.9 3.3a4.7 4.7 0 0 0 .1 3.6 5 5 0 0 0-1.53 3.72c0 5.56 3.34 6.75 6.48 7.1A4.8 4.8 0 0 0 8 18v4"></path>
                        </svg>
                      </a>
                      <a href={item.project.powerbi} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-red-accent hover:border-red-accent text-white transition-all flex gap-2 items-center text-sm font-semibold pr-4" title="Power BI Dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                        Dashboard
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
