import { motion } from "motion/react";
import { ArrowLeft, Github } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";

const projects = [
  { title: "Campus Navigation Dashboard", description: "QR-based navigation system using Raspberry Pi with voice guidance and interactive campus maps.", image: "/campus.png", githubLink: "https://github.com/santhosh370/campus-navigator.git" },
  { title: "Chat Application UI", description: "Scalable real-time messaging platform with secure user authentication and instant notification features.", image: "/chat.png", githubLink: "https://github.com/santhosh370/chatify-app.git" },
  { title: "Railway Safety Hardware", description: "IoT-based hardware system for real-time track monitoring and train collision avoidance.", image: "/train.png", githubLink: "https://github.com/santhosh370/train-project.git" },
  { title: "Mining Safety Robot", description: "Autonomous robot designed for gas detection and hazard monitoring in dangerous mining environments.", image: "/coal.png", githubLink: "https://github.com/santhosh370/coal-miners.git" },
  { title: "Smart Blind Stick", description: "Assistive device incorporating ultrasonic sensors and feedback mechanisms to aid navigation for visually impaired individuals.", image: "/blind.png", githubLink: "https://github.com/santhosh370/blind-shoe.git" },
  { title: "Portfolio Homepage", description: "Modern, high-performance personal portfolio website built with React and Tailwind CSS.", image: "/port.png", githubLink: "https://github.com/santhosh370/Portfolio-app.git" },
];

export default function ProjectsPage({ onBack }: { onBack: () => void }) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-neutral-950 text-white font-sans overflow-hidden"
    >
      <NetworkCanvas />
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-[60] p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors shadow-xl"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Heading */}
      <h1 className="fixed top-8 md:top-12 left-0 right-0 text-center text-2xl md:text-4xl font-bold text-white/40 z-40 tracking-[0.3em] font-sans pointer-events-none uppercase">PROJECTS</h1>
      
      {/* Decorative Text */}
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-neutral-800/10 select-none pointer-events-none uppercase italic">WORK</h1>
      <p className="fixed bottom-6 right-6 md:bottom-8 md:right-8 text-xl md:text-2xl font-light text-neutral-700 select-none pointer-events-none animate-pulse">Swipe.</p>

      {/* Project Carousel */}
      <div className="flex items-center h-full w-full overflow-hidden">
        <div 
          className="flex gap-6 md:gap-10 overflow-x-auto px-10 md:px-[calc(50vw-160px)] snap-x snap-mandatory hide-scrollbar w-full py-20"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="snap-center w-[290px] md:w-[320px] h-[420px] md:h-[480px] flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] md:rounded-[45px] overflow-hidden flex flex-col hover:border-white/30 transition-all duration-500 group shadow-2xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-2/5 md:h-1/2 object-cover" />
              <div className="p-5 md:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{project.title}</h2>
                  <p className="text-neutral-400 text-xs md:text-sm line-clamp-4">{project.description}</p>
                </div>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
