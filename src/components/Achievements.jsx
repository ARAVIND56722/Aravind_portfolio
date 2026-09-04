import { motion } from 'framer-motion';

const ACHIEVEMENTS_MILESTONES = [
  {
    year: "2026",
    title: " 🏆 WINNER — International Hackathon 360°",
    description: "Won for developing “Transparent Blockchain Ledger with Microgrid Energy Sharing,” conducted by EC Learnix Pvt. Ltd. in collaboration with KPR Institute of Engineering and Technology."
  },
  {
    year: "2026",
    title: "🥈 FINALIST — National Level Hackathon CRYPTERA",
    description: "Finalist for developing an NGO Management System at Coimbatore Institute of Technology."
  },
  {
    year: "PARTICIPATION",
    title: "Hackathon Participations",
    highlights: [
      "Participated in the 24-Hour Hackathon for “Citizen Issue Reporting & Tracking System” at KPR Institute of Engineering and Technology.",
      "Participated in hackathons at SNS Institutions, including “Blockchain-Based Supply Chain Management”."
    ]
  },
  {
    year: "EXHIBITION",
    title: "Project Exhibitions",
    highlights: [
      "Showcased an innovative project at the AI/4.0 Solution Expo held at Dr. N.G.P. Institute of Technology.",
      "Presented the “Food Rescue Logistic Platform” at Project Expo 2026, Dr. N.G.P. Institute of Technology."
    ]
  },
  {
    year: "RESEARCH",
    title: "Research Paper Presentations",
    highlights: [
      "Presented a research paper at ICRIT 2026, Grace College of Engineering, Thoothukudi.",
      "Presented a research paper at NCATSM 2026, Karpagam Academy of Higher Education, Coimbatore."
    ]
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">06 — ACHIEVEMENTS</h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-16 flex flex-col gap-16">
          {ACHIEVEMENTS_MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-4 h-4 rounded-full bg-dark-bg border-2 border-red-accent group-hover:bg-red-accent transition-colors duration-300 shadow-[0_0_10px_rgba(229,9,20,0)] group-hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"></div>

              <h3 className="text-red-accent font-display font-bold text-sm md:text-base mb-2 tracking-widest">{item.year}</h3>
              <h4 className="text-white font-sans font-bold text-2xl md:text-3xl mb-4 group-hover:text-red-accent transition-colors">{item.title}</h4>
              {item.description && (
                <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.highlights && (
                <ul className="mt-4 space-y-3 max-w-2xl">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-white/70">
                      <span className="text-red-accent mt-2 text-[10px] font-bold">●</span>
                      <span className="text-base leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
