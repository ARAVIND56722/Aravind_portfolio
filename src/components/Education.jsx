import { motion } from 'framer-motion';

const EDUCATION_MILESTONES = [
  {
    year: "PRESENT",
    title: "B.Tech Artificial Intelligence & Data Science",
    description: "Pursuing rigorous coursework in Machine Learning, Generative AI, and Data Science while building a strong foundation in software engineering."
  },
  {
    year: "HONORS",
    title: "Blockchain Technology",
    description: "Awarded for exceptional performance in Blockchain courses and for developing secure, decentralized supply chain applications using Web3."
  },
  {
    year: "Higher Secondary",
    title: "G.R.G. Matriculation Higher Secondary School",
    description: "Completed higher secondary education with a strong foundation in Computer Science, Mathematics, and analytical problem-solving."
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">07 — EDUCATION</h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-16 flex flex-col gap-16">
          {EDUCATION_MILESTONES.map((item, index) => (
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
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
