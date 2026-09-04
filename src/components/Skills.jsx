import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    category: "Programming",
    skills: ["Java", "Python", "JavaScript"],
    delay: 0.1
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    delay: 0.2
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
    delay: 0.3
  },
  {
    category: "Database",
    skills: ["MongoDB"],
    delay: 0.4
  },
  {
    category: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "Power BI"],
    delay: 0.5
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "Ethereum", "Web3"],
    delay: 0.6
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Streamlit"],
    delay: 0.7
  }
];

const getIcon = (skill) => {
  const icons = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
  };
  
  if (icons[skill]) {
    const invert = skill === 'GitHub' || skill === 'Express.js';
    return <img src={icons[skill]} alt={skill} className={`w-8 h-8 md:w-10 md:h-10 mb-3 object-contain opacity-80 group-hover:opacity-100 transition-opacity ${invert ? 'invert' : ''}`} />;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
};

export default function Stack() {
  return (
    <section id="stack" className="py-32 px-6 md:px-16 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">04 — STACK</h2>
          <div className="w-12 h-1 bg-red-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {STACK_CATEGORIES.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="flex flex-col"
            >
              <h3 className="text-white/60 font-sans font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-red-accent inline-block"></span>
                {item.category}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {item.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-card-bg border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-default relative overflow-hidden"
                  >
                    {getIcon(skill)}
                    <span className="text-white/90 font-semibold text-xs tracking-wider text-center z-10">{skill}</span>
                    
                    {/* Red underline accent on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
