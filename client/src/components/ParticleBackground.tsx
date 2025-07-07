import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles with different colors
    const colors = ['#DC2626', '#00FFFF', '#FF1493', '#00FF00', '#FFFF00', '#8A2BE2'];
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.className = 'absolute w-0.5 h-0.5 rounded-full animate-particle-float';
      particle.style.backgroundColor = color;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
      particle.style.boxShadow = `0 0 8px ${color}`;
      container.appendChild(particle);
    }

    // Create circuit lines with different colors
    const lineColors = ['#DC2626', '#00FFFF', '#FF1493', '#00FF00', '#8A2BE2'];
    for (let i = 0; i < 25; i++) {
      const line = document.createElement('div');
      const color = lineColors[Math.floor(Math.random() * lineColors.length)];
      line.className = 'absolute h-px';
      line.style.width = Math.random() * 250 + 120 + 'px';
      line.style.left = Math.random() * 100 + '%';
      line.style.top = Math.random() * 100 + '%';
      line.style.transform = `rotate(${Math.random() * 360}deg)`;
      line.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
      line.style.boxShadow = `0 0 12px ${color}`;
      line.style.animationDelay = Math.random() * 5 + 's';
      line.style.opacity = '0.7';
      container.appendChild(line);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
