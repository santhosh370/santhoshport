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
        className="fixed top-8 left-8 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Heading */}
      <h1 className="fixed top-8 left-0 right-0 text-center text-3xl md:text-4xl font-bold text-white/50 z-40 tracking-widest pointer-events-none">PROJECTS</h1>
      
      {/* Decorative Text */}
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-neutral-800/20 select-none pointer-events-none">WORK</h1>
      <p className="fixed bottom-8 right-8 text-2xl font-light text-neutral-600 select-none pointer-events-none">Swipe.</p>

      {/* Project Carousel */}
      <div className="flex items-center justify-center h-full w-full">
        <motion.div 
          className="flex gap-8 overflow-x-auto px-[calc(50vw-160px)] snap-x snap-mandatory hide-scrollbar"
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="snap-center w-[320px] h-[450px] flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-1/2 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-neutral-300 text-sm">{project.description}</p>
                </div>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
