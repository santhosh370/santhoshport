import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';

const allSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-4xl text-white" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-white" /> },
  { name: "JavaScript", icon: <FaJs className="text-4xl text-white" /> },
  { name: "React.js", icon: <FaReact className="text-4xl text-white" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-white" /> },
  { name: "Tailwind CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-10 h-10 object-contain" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-white" /> },
  { name: "GitHub", icon: <FaGithub className="text-4xl text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-4xl text-white" /> },
  { name: "3D Design", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="ThreeJS" className="w-10 h-10 object-contain" /> },
];

export default function ExperiencePage({ onBack }: { onBack: () => void }) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-neutral-950 text-white font-sans overflow-y-auto hide-scrollbar"
    >
      <NetworkCanvas />
      
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 z-50 p-2 md:top-8 md:left-8 md:p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="container mx-auto p-4 md:p-10 mt-8 text-neutral-200 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-10 text-neutral-700 tracking-tighter"
        >
          EXPERIENCE
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-center text-lg md:text-xl text-neutral-300 leading-relaxed p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
        >
          <p>
            I have experience in developing responsive websites and project-based applications. 
            I have worked on company websites, portfolio websites, and academic projects using HTML, CSS, JavaScript, React, Arduino, and Raspberry Pi. 
            I focus on creating user-friendly designs, modern interfaces, and practical solutions for real-world requirements. 
            I have also worked on project guidance, web development, and software solutions for students and clients.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-16 w-full max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-neutral-800"></div>
            <h2 className="text-2xl font-bold text-neutral-400 tracking-widest">SKILLS</h2>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {allSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-3 w-20">
                <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-neutral-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


