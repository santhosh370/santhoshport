import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Github, Twitter, Facebook, Youtube, ArrowLeft } from "lucide-react";

export default function AboutPage({ onBack }: { onBack: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [avatarClicked, setAvatarClicked] = useState(false);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const isMobile = width < 768;
    const nodeCount = isMobile ? 50 : 100;

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#00eaff";
        ctx.strokeStyle = "rgba(0, 234, 255, 0.3)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00eaff";

        nodes.forEach(node => {
            // Slight depth parallax if mouse is present
            const speedFactor = isMobile ? 1 : (1 + (Math.hypot(node.x - mouse.current.x, node.y - mouse.current.y) < 200 ? 1 : 0));
            node.x += node.vx * speedFactor;
            node.y += node.vy * speedFactor;
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < nodes.length; i++) {
            // Connect to neighbors
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
            // Connect to mouse if not mobile
            if (!isMobile) {
                const dist = Math.hypot(nodes[i].x - mouse.current.x, nodes[i].y - mouse.current.y);
                if (dist < 200) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 234, 255, ${0.5 + (1 - dist / 200) * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.current.x, mouse.current.y);
                    ctx.stroke();
                }
            }
        }
        ctx.shadowBlur = 0;
        requestAnimationFrame(animate);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    if (!isMobile) window.addEventListener("mousemove", handleMouseMove);
    
    animate();
    return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleAvatarClick = () => {
    // Subtle action if needed
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white text-neutral-900 font-sans overflow-y-auto hide-scrollbar"
    >
      {/* Real Canvas Neural Background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-[-1] w-full h-full pointer-events-none" />
      
      {/* FIXED Back Button */}
      <button 
        onClick={onBack} 
        className="fixed top-5 left-5 z-50 p-3 rounded-full bg-white/50 backdrop-blur-sm border border-neutral-200 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
        aria-label="Go back"
      >
        <ArrowLeft size={20} strokeWidth={1.5} className="text-neutral-700" />
      </button>

      {/* Vertical Social Icons */}
      <div className="fixed left-3 top-[50%] -translate-y-[50%] z-20 hidden md:flex flex-col gap-6">
        {[
          { Icon: Linkedin, link: 'https://www.linkedin.com/in/santhosh-kumar-r-6b78172ba/' },
          { Icon: Github, link: 'https://github.com/santhosh370' },
          { Icon: Twitter, link: 'https://x.com/' },
          { Icon: Facebook, link: 'https://www.facebook.com/' },
          { Icon: Youtube, link: 'https://www.youtube.com/' },
        ].map(({ Icon, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Icon size={24} className="hover:text-blue-600 transition-all cursor-pointer text-neutral-500" />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-6 md:p-16 z-10 w-full min-h-screen pt-20 md:pl-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-1"
          >
            <span className="text-blue-600 font-semibold tracking-widest text-sm uppercase">ABOUT</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-neutral-900">Hi, I'm Santhosh</h2>
            <p className="text-lg md:text-xl text-neutral-600 font-medium mb-6">Full Stack Developer | AI Enthusiast</p>
            <p className="text-neutral-600 leading-[1.7] max-w-[500px] mb-4">
              Hi, I'm Santhosh — a Full Stack Developer and AI enthusiast. I specialize in building clean, scalable web applications with a strong focus on user experience and performance.
            </p>
            <p className="text-neutral-600 leading-[1.7] max-w-[500px] mb-8">
              I enjoy turning complex ideas into simple, elegant solutions. I'm constantly learning new technologies and exploring innovative ways to improve digital experiences.
            </p>
          </motion.div>

          {/* Right side Image with Float Animation */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center"
          >
            <motion.div
              className="cursor-pointer"
              onClick={handleAvatarClick}
            >
              <img src="/san.png" alt="Santhosh" className="w-[280px] md:w-[360px] h-auto object-cover rounded-2xl shadow-xl" />
            </motion.div>

            {/* Name Popup Animation Removed */}
          </motion.div>
        </div>
      </div>
      
      {/* Socials placeholder - removed bottom socials */}
    </motion.div>
  );
}
