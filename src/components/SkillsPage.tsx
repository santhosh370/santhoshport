import NetworkCanvas from "./NetworkCanvas";
import { motion } from "motion/react";

export default function SkillsPage({ onBack }: { onBack: () => void }) {
  const skills = [
    {
      type: "Software",
      icon: "💻",
      items: [
        { name: "HTML", icon: "html.png" },
        { name: "CSS", icon: "css.png" },
        { name: "JavaScript", icon: "js.png" },
        { name: "C-Program", icon: "c.png" },
        { name: "Java", icon: "java.png" },
        { name: "Spring Boot", icon: "springboot.png" },
        { name: "MongoDB", icon: "mangodb.png" },
        { name: "MySQL", icon: "mysql.png" },
        { name: "GitHub", icon: "github.png" },
        { name: "VS Code", icon: "vscode.png" },
      ],
    },
    {
      type: "Hardware",
      icon: "🛠️",
      items: [
        { name: "Arduino", icon: "arduino.png" },
        { name: "ESP32", icon: "esp32.png" },
        { name: "ESP8266", icon: "esp8266.png" },
        { name: "Raspberry Pi Zero", icon: "ras.png" },
        { name: "Raspberry Pi 4", icon: "ras4.png" },
        { name: "Sensors", icon: "sen.png" },
        { name: "Drones", icon: "dro.png" },
      ],
    },
    {
      type: "OS",
      icon: "🐧",
      items: [
        { name: "Windows", icon: "win.png" },
        { name: "Kali Linux", icon: "kali.png" },
        { name: "Parrot OS", icon: "par.png" },
        { name: "Fedora", icon: "fed.png" },
        { name: "Mint OS", icon: "mint.png" },
        { name: "Zorin OS", icon: "zor.png" },
        { name: "Ubuntu", icon: "ubu.png" },
        { name: "Debian", icon: "deb.png" },
        { name: "Arch", icon: "arch.png" },
        { name: "Garuda OS", icon: "garu.png" },
        { name: "Black Arch", icon: "blackarch.png" },
      ],
    },
  ];

  return (
    <section className="skills-page h-screen overflow-y-auto py-10 px-4 md:py-20 md:px-8 bg-neutral-50">
      <NetworkCanvas />
      
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 text-neutral-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 mt-16 relative z-10 text-neutral-800">My Skills</h1>

      <motion.div 
        className="skills-container flex flex-col gap-12 relative z-10 p-6 md:pb-20 max-w-5xl mx-auto"
      >
        {skills.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-neutral-800">
              <span className="text-3xl">{category.icon}</span>
              {category.type}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.items.map((item, i) => (
                <motion.div key={i} className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.05) + (i * 0.03), duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-lg bg-neutral-50 flex items-center justify-center text-xl text-neutral-500 font-bold overflow-hidden">
                    {item.icon ? (
                      <img src={`/assets/skills/${item.icon}`} alt={item.name} className="w-full h-full object-contain p-1" />
                    ) : (
                      item.name[0]
                    )}
                  </div>
                  <span className="font-medium text-xs text-center text-neutral-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}


