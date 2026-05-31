import { useState } from "react";
import { Linkedin, Github, Twitter, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AboutPage from "./AboutPage";
import SkillsPage from "./components/SkillsPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage";
import FeatsPage from "./components/FeatsPage";
import HeroBackground from "./components/HeroBackground";
import CircularSnow from "./components/CircularSnow";

export default function App() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [view, setView] = useState<'home' | 'about' | 'skills' | 'experience' | 'projects' | 'feats'>('home');
  const [modal, setModal] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleAvatarClick = () => {
    setShowGreeting(true);
    setTimeout(() => setShowGreeting(false), 3000);
  };

  const openModal = (title: string, content: React.ReactNode) => {
    setActiveItem(title);
    setModal({ title, content });
  };

  return (
    <>
      <AnimatePresence>
        {view === 'about' ? (
          <AboutPage onBack={() => setView('home')} />
        ) : view === 'skills' ? (
          <SkillsPage onBack={() => setView('home')} />
        ) : view === 'experience' ? (
          <ExperiencePage onBack={() => setView('home')} />
        ) : view === 'projects' ? (
          <ProjectsPage onBack={() => setView('home')} />
        ) : view === 'feats' ? (
          <FeatsPage onBack={() => setView('home')} />
        ) : (
          <div className={`main ${active ? "inactive" : ""} relative overflow-hidden`} id="main">
            <HeroBackground />
            <div className="flex flex-col items-center">
              <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                <CircularSnow />
                <svg viewBox="0 0 200 200" className="yin" onClick={() => setActive(true)}>
                  <circle cx="100" cy="100" r="100" fill="black"/>
                  <path d="M100 0 
                          A100 100 0 0 1 100 200
                          A50 50 0 0 0 100 100
                          A50 50 0 0 1 100 0Z" fill="white"/>
                  <circle cx="100" cy="50" r="12" fill="black"/>
                  <circle cx="100" cy="150" r="12" fill="white"/>
                </svg>
              </div>
              <div className="mt-4 text-xs tracking-widest text-neutral-500 animate-pulse">Click Here</div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {view === 'home' && (
        <>
          <div className={`split ${active ? "active" : ""} relative overflow-hidden`} id="split">
            <HeroBackground />
            <div className="back" onClick={() => setActive(false)}>
              <svg viewBox="0 0 24 24">
                <path d="M15 18L9 12L15 6"/>
              </svg>
            </div>
            <div className="left">
              <div className="box">
                <h1>Hi,</h1>
                <h2>I'm Santhosh Kumar</h2>
                <p>
                  A passionate and self-driven developer focused on building modern, responsive, and user-friendly web applications. I enjoy solving real-world problems using clean and efficient code. I am constantly learning new technologies and am always looking for opportunities to contribute to impactful projects. Founder & CEO of Sanlog Innovation.
                </p>
              </div>
            </div>

            <div className="right flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center">
                <img 
                  src="/avatar.png" 
                  alt="avatar" 
                  onClick={handleAvatarClick}
                  className="cursor-pointer"
                />
                {showGreeting && (
                  <div className="absolute -top-12 text-lg font-bold text-blue-600 animate-fade-up">
                    Hi, I'm Santhosh
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="logo">Santhosh Kumar</div>
          <div className={`left-menu text-neutral-900`}>
            <span className={activeItem === "Experience" ? "active" : ""} onClick={() => { setActiveItem("Experience"); setView('experience'); }}>Experience</span>
            <span className={activeItem === "Projects" ? "active" : ""} onClick={() => { setActiveItem("Projects"); setView('projects'); }}>Projects</span>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/santhosh-kumar-r-6b78172ba/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} className="cursor-pointer hover:text-neutral-500" /></a>
            <a href="https://github.com/santhosh370" target="_blank" rel="noopener noreferrer"><Github size={16} className="cursor-pointer hover:text-neutral-500" /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><Twitter size={16} className="cursor-pointer hover:text-neutral-500" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook size={16} className="cursor-pointer hover:text-neutral-500" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><Youtube size={16} className="cursor-pointer hover:text-neutral-500" /></a>
          </div>
          <div className={`right-text cursor-pointer text-neutral-900 ${activeItem === "Feats" ? "active" : ""}`} onClick={() => { setActiveItem("Feats"); setView('feats'); }}>Feats</div>
          <div className={`bottom-left cursor-pointer text-neutral-900 ${activeItem === "About" ? "active" : ""}`} onClick={() => { setActiveItem("About"); setView('about'); }}>About</div>
          <div className={`bottom-right cursor-pointer text-neutral-900 ${activeItem === "Skills" ? "active" : ""}`} onClick={() => { setActiveItem("Skills"); setView('skills'); }}>My Skills</div>
          <div className={`sayhi cursor-pointer text-neutral-900 ${activeItem === "Say hi" ? "active" : ""}`} onClick={() => { setActiveItem("Say hi"); window.location.href = 'mailto:santhoshkumar666768@gmail.com'; }}>Say hi..</div>
        </>
      )}

      <AnimatePresence>
        {modal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" 
            onClick={() => setModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl w-full max-w-[400px] relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setModal(null)}>&times;</button>
              <h2 className="text-2xl font-bold mb-4">{modal.title}</h2>
              <div>{modal.content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
