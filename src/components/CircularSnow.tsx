import { useEffect, useRef } from "react";

export default function CircularSnow() {
  const snowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const snowBg = snowContainerRef.current;
    if (!snowBg) return;

    // Clear any previous snow if this re-runs
    snowBg.innerHTML = '';

    for (let i = 0; i < 200; i++) {
        const snow = document.createElement("div");
        snow.classList.add("snow");
  
        // Varying sizes
        let size = Math.random() * 5 + 1;
  
        snow.style.width = `${size}px`;
        snow.style.height = `${size}px`;
        snow.style.left = `${Math.random() * 100}%`;
        snow.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snow.style.animationDelay = `${Math.random() * 5}s`;
        
        // Ensure visibility
        snow.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        snow.style.backgroundColor = 'white';
  
        snowBg.appendChild(snow);
      }
  }, []);

  return <div ref={snowContainerRef} className="snow-bg circle-mask" />;
}
