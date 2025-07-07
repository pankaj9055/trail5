import { useState, useRef, useEffect } from "react";
import { Technology } from "@/lib/technologies";

interface RotatingCubeProps {
  technologies: Technology[];
}

export default function RotatingCube({ technologies }: RotatingCubeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setLastMouse({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMouse.x;
    const deltaY = touch.clientY - lastMouse.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastMouse({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - lastMouse.x;
      const deltaY = e.clientY - lastMouse.y;
      
      setRotation(prev => ({
        x: prev.x + deltaY * 0.5,
        y: prev.y + deltaX * 0.5
      }));
      
      setLastMouse({ x: e.clientX, y: e.clientY });
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMouse.x;
      const deltaY = touch.clientY - lastMouse.y;
      
      setRotation(prev => ({
        x: prev.x + deltaY * 0.5,
        y: prev.y + deltaX * 0.5
      }));
      
      setLastMouse({ x: touch.clientX, y: touch.clientY });
    };

    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging, lastMouse]);

  return (
    <div className="perspective-1000 w-80 h-80 flex items-center justify-center">
      <div
        ref={cubeRef}
        className={`cube-container relative w-64 h-64 transform-3d ${
          !isDragging ? 'animate-spin-fast' : ''
        } ${isHovered ? 'animate-pulse' : ''} cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cube faces */}
        <div className="cube-face cube-front">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[0]?.color}`}>{technologies[0]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[0]?.name}</span>
          </div>
        </div>
        
        <div className="cube-face cube-back">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[1]?.color}`}>{technologies[1]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[1]?.name}</span>
          </div>
        </div>
        
        <div className="cube-face cube-right">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[2]?.color}`}>{technologies[2]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[2]?.name}</span>
          </div>
        </div>
        
        <div className="cube-face cube-left">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[3]?.color}`}>{technologies[3]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[3]?.name}</span>
          </div>
        </div>
        
        <div className="cube-face cube-top">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[4]?.color}`}>{technologies[4]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[4]?.name}</span>
          </div>
        </div>
        
        <div className="cube-face cube-bottom">
          <div className="cube-content">
            <span className={`text-3xl ${technologies[5]?.color}`}>{technologies[5]?.icon}</span>
            <span className="ml-3 text-lg font-bold text-white">{technologies[5]?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
