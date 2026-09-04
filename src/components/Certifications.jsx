import { motion } from 'framer-motion';

const CERTIFICATIONS = [
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    year: "2025"
  },
  {
    title: "Data Analytics",
    issuer: "NoviTech R&D Private Limited",
    year: "2025"
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    year: "2026"
  },
  {
    title: "Generative AI with AWS",
    issuer: "Analytics Vidhya",
    year: "2026"
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "2026"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 md:px-16 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">07 — CERTIFICATIONS</h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg border border-red-accent/30 rounded-xl p-8 transition-all duration-300 hover:border-red-accent hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] group relative overflow-hidden flex flex-col justify-between min-h-[200px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-red-accent/10 transition-colors"></div>
              
              <div>
                <div className="text-xs font-bold tracking-widest text-red-accent mb-4 uppercase">{cert.year}</div>
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-4 group-hover:text-red-accent transition-colors leading-tight">
                  {cert.title}
                </h3>
              </div>
              
              <div className="text-white/60 font-semibold tracking-wide uppercase text-sm mt-auto">
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
