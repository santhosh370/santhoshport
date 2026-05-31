import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, Github, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { useEffect, useRef } from "react";

const feats = [
  {
    title: "LeetCode Coding Profile",
    image: "/leet.png",
    description: "250+ problems solved with contest rating analytics, showcasing algorithmic expertise.",
    tags: ["DSA", "Problem Solving", "Competitive Programming"],
    link: "https://leetcode.com/u/santho_0112/",
    linkType: "leetcode"
  },
  {
    title: "CodeChef Profile",
    image: "/code.png",
    description: "Competitive programming profile with contest analytics and solved problems statistics.",
    tags: ["Competitive Programming", "Algorithms", "Data Structures"],
    link: "https://www.codechef.com/users/santho_143",
    linkType: "codechef"
  },
  {
    title: "Amazon ML Summer School",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80",
    description: "4-week Machine Learning apprenticeship program focusing on real-world AI applications.",
    tags: ["Machine Learning", "Data Science", "AI"],
    link: "https://github.com/santhosh370",
    linkType: "github"
  },
  {
    title: "Bus Tracking System",
    image: "/campus.png",
    description: "Real-time student bus monitoring platform using GPS and React dashboard.",
    tags: ["React", "Node.js", "Maps API"],
    link: "https://github.com/santhosh370/campus-navigator.git",
    linkType: "github"
  }
];

const socialLinks = [
  { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
  { icon: <Github size={20} />, url: "https://github.com/santhosh370" },
  { icon: <Twitter size={20} />, url: "https://twitter.com" },
  { icon: <Facebook size={20} />, url: "https://facebook.com" },
  { icon: <Youtube size={20} />, url: "https://youtube.com" }
];

export default function FeatsPage({ onBack }: { onBack: () => void }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.05, 0.1, 0.1, 0.05]);

  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as HTMLDivElement).scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-white font-sans selection:bg-neutral-800 selection:text-white hide-scrollbar"
      ref={containerRef}
    >
      {/* Unique Animated Background Design */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#fafafa]">
        {/* Animated Mesh Gradient Blobs */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/30 blur-[120px]"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-100/30 blur-[120px]"
        />
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-orange-100/20 blur-[120px]"
        />

        {/* Tactile Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale contrast-150 mix-blend-multiply" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Large Background Text with Masking Effect */}
      <motion.h1 
        style={{ opacity: textOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-neutral-900/5 select-none pointer-events-none tracking-tighter"
      >
        FEATURES
      </motion.h1>

      {/* Fixed Vertical Socials */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        <div className="w-[1px] h-20 bg-neutral-200 mx-auto" />
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5, color: "#000" }}
            className="text-neutral-400 transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-20 bg-neutral-200 mx-auto" />
      </div>

      {/* Floating Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-8 left-8 z-50 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-neutral-200 text-neutral-900 hover:bg-white transition-all cursor-pointer shadow-lg"
      >
        <ArrowLeft size={24} />
      </motion.button>

      {/* Card Grid */}
      <main className="relative z-10 pt-32 pb-40 px-6 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black text-neutral-900 tracking-tighter uppercase px-4 inline-block relative">
            Features
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-900" />
          </h2>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          {feats.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#111111] rounded-[16px] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/40 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80';
                  }}
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>

                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-all group/link"
                  >
                    {project.linkType === 'leetcode' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>LeetCode Profile</span>
                      </span>
                    ) : project.linkType === 'codechef' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B4638]" />
                        <span>CodeChef Profile</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Github size={14} />
                        <span>Repository</span>
                      </span>
                    )}
                    <div className="ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                      →
                    </div>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

    </motion.div>
  );
}

