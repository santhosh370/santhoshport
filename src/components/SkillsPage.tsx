import NetworkCanvas from "./NetworkCanvas";
import { motion } from "motion/react";

export default function SkillsPage({ onBack }: { onBack: () => void }) {
  // ... skills array omitted for brevity ...
  const skills = [
    {
      title: "Full-Stack",
      icon: "⚡",
      items: [
        { name: "React.js", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "Node.js", logo: "🟢" },
        { name: "Python", logo: "🐍" },
        { name: "Java", logo: "☕" },
      ],
      description: "Building scalable products using modern frameworks and clean architecture."
    },
    {
      title: "AI/ML",
      icon: "🤖",
      items: [
        { name: "OpenAI GPT", logo: "🧠" },
        { name: "RAG Pipelines", logo: "📚" },
        { name: "Voice Models", logo: "🎙️" },
        { name: "Agent AI", logo: "🤖" },
        { name: "Machine Learning", logo: "📈" },
      ],
      description: "Integrating AI technologies into real-world applications and workflows."
    },
    {
      title: "IoT",
      icon: "📡",
      items: [
        { name: "Arduino", logo: "🟦" },
        { name: "ESP32", logo: "📶" },
        { name: "ESP8266", logo: "📡" },
        { name: "Raspberry Pi", logo: "🍓" },
        { name: "Microcontroller", logo: "⚙️" },
      ],
      description: "Designing and developing hardware solutions and embedded systems."
    }
  ];

  return (
    <section className="skills-page py-10 px-4 md:py-20 md:px-8">
      <NetworkCanvas />
      
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 relative z-10 text-neutral-800">My Skills</h1>

      <motion.div 
        className="skills-container flex flex-row items-start overflow-x-auto hide-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible gap-6 md:justify-items-center relative z-10 p-6 md:pb-20 h-auto md:h-auto"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl p-6 rounded-3xl border border-white/50 w-[280px] sm:w-[300px] md:w-full md:max-w-[320px] shadow-2xl shadow-neutral-500/10 flex flex-col flex-shrink-0 snap-center hover:shadow-3xl hover:scale-105 transition-all duration-300 transform-gpu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="skill-logo w-14 h-14 bg-black text-white flex items-center justify-center rounded-2xl text-2xl shrink-0">
                {skill.icon}
              </div>
              <h2 className="text-xl font-bold">
                {skill.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-600 mb-6 flex-grow">{skill.description}</p>
            <ul className="tech-list space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-neutral-100/50 shadow-sm hover:bg-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-md">{item.logo}</span>
                  <span className="font-semibold text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
