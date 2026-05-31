import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const snowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const snowBg = snowContainerRef.current;
    if (!snowBg) return;

    // Clear any previous snow if this re-runs
    snowBg.innerHTML = '<div class="glow-container"><div class="glow1"></div><div class="glow2"></div></div>';

    for (let i = 0; i < 200; i++) {
        const snow = document.createElement("div");
        snow.classList.add("snow");
  
        // Increase size variation for depth effect
        let size = Math.random() * 8 + 2;
  
        snow.style.width = `${size}px`;
        snow.style.height = `${size}px`;
        snow.style.left = `${Math.random() * 100}%`;
        snow.style.animationDuration = `${Math.random() * 15 + 10}s`;
        snow.style.animationDelay = `${Math.random() * 10}s`;
        // Enhance opacity variation
        snow.style.opacity = `${Math.random() * 0.6 + 0.2}`;
  
        snowBg.appendChild(snow);
      }
  }, []);

  return <div ref={snowContainerRef} className="snow-bg" />;
}
