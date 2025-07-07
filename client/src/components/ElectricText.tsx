import { useState, ReactNode } from "react";

interface ElectricTextProps {
  children: ReactNode;
  className?: string;
}

export default function ElectricText({ children, className = "" }: ElectricTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`transition-all duration-300 cursor-pointer ${
        isHovered ? 'animate-electric-wave' : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
}
