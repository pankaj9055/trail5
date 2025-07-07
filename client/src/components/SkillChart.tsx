import { useEffect, useState } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Technology } from "@/lib/technologies";
import ElectricText from "./ElectricText";

interface SkillChartProps {
  technologies: Technology[];
}

export default function SkillChart({ technologies }: SkillChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <SkillItem key={tech.name} tech={tech} delay={index * 100} isVisible={isVisible} />
      ))}
    </div>
  );
}

interface SkillItemProps {
  tech: Technology;
  delay: number;
  isVisible: boolean;
}

function SkillItem({ tech, delay, isVisible }: SkillItemProps) {
  const [startAnimation, setStartAnimation] = useState(false);
  const animatedValue = useAnimatedCounter(startAnimation ? tech.mastery : 0, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setStartAnimation(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className="p-4 rounded-xl hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${tech.color}`}>
            {tech.icon}
          </span>
          <span className="text-sm font-mono text-white font-bold">
            <ElectricText>{tech.name}</ElectricText>
          </span>
        </div>
        <span className={`font-bold count-up ${tech.color} text-lg`}>
          {animatedValue}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: startAnimation ? `${tech.mastery}%` : '0%',
          }}
        />
      </div>
    </div>
  );
}
