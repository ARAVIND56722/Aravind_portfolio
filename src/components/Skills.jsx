import { motion } from 'framer-motion';

const STACK_CATEGORIES = [
  {
    category: "Programming",
    skills: ["Java", "Python", "JavaScript", "DSA", "SQL"],
    delay: 0.1
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    delay: 0.2
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    delay: 0.3
  },
  {
    category: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "NLP"],
    delay: 0.4
  },
  {
    category: "Data Analysis",
    skills: ["Excel", "Power BI", "Tableau", "Data Visualization"],
    delay: 0.5
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Streamlit"],
    delay: 0.6
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "Smart Contracts", "MetaMask", "Ganache", "HardHat", "TestNetworks"],
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
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    "Deep Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    "HardHat": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
    "MetaMask": "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  };
  
  if (icons[skill]) {
    const invert = skill === 'GitHub' || skill === 'Express.js';
    return <img src={icons[skill]} alt={skill} className={`w-8 h-8 md:w-10 md:h-10 mb-3 object-contain opacity-80 group-hover:opacity-100 transition-opacity ${invert ? 'invert' : ''}`} />;
  }

  const customIcons = {
    "DSA": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    "NLP": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line>
      </svg>
    ),
    "Generative AI": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    "Data Visualization": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
      </svg>
    ),
    "Smart Contracts": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><rect x="9" y="13" width="6" height="4" rx="1"></rect><path d="M10 13V11a2 2 0 0 1 4 0v2"></path>
      </svg>
    ),
    "Ganache": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    "TestNetworks": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
        <circle cx="12" cy="12" r="3"></circle><circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="18" r="2"></circle><path d="M5 8v8"></path><path d="M19 8v8"></path><path d="M6.5 6.5l4 4"></path><path d="M17.5 6.5l-4 4"></path><path d="M6.5 17.5l4-4"></path><path d="M17.5 17.5l-4-4"></path>
      </svg>
    ),
    "Excel": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-[#107c41] transition-colors">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h2"></path><path d="M8 17h2"></path><path d="M14 13h2"></path><path d="M14 17h2"></path>
      </svg>
    ),
    "Power BI": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-[#F2C811] transition-colors">
        <rect x="3" y="14" width="4" height="6" rx="1"></rect><rect x="10" y="9" width="4" height="11" rx="1"></rect><rect x="17" y="4" width="4" height="16" rx="1"></rect>
      </svg>
    ),
    "Tableau": (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-[#E97627] transition-colors">
        <circle cx="12" cy="12" r="4"></circle><circle cx="4" cy="12" r="2"></circle><circle cx="20" cy="12" r="2"></circle><circle cx="12" cy="4" r="2"></circle><circle cx="12" cy="20" r="2"></circle><circle cx="6" cy="6" r="1.5"></circle><circle cx="18" cy="18" r="1.5"></circle><circle cx="6" cy="18" r="1.5"></circle><circle cx="18" cy="6" r="1.5"></circle>
      </svg>
    ),
  };

  if (customIcons[skill]) {
    return customIcons[skill];
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-70 group-hover:opacity-100 text-white transition-opacity">
      <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
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
              
              <div className="grid grid-cols-2 gap-4 items-stretch">
                {item.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-card-bg border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-default relative overflow-hidden h-28"
                  >
                    {getIcon(skill)}
                    <span className="text-white/90 font-semibold text-[10px] sm:text-xs tracking-wider text-center z-10 leading-tight px-1">{skill}</span>
                    
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
