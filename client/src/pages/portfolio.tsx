import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import RotatingCube from "@/components/RotatingCube";
import SkillChart from "@/components/SkillChart";
import CodeTicker from "@/components/CodeTicker";
import AdminPanel from "@/components/AdminPanel";
import ElectricText from "@/components/ElectricText";
import FlyingWords from "@/components/FlyingWords";
import { technologies } from "@/lib/technologies";
import { usePortfolio } from "@/contexts/PortfolioContext";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { portfolioData, telegramId } = usePortfolio();

  const skillWords = [
    "Python", "TypeScript", "React", "Node.js", 
    "AWS", "Animation", "3D", "CSS"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Background */}
      <div className="matrix-bg" />
      
      {/* Particle Background */}
      <ParticleBackground />
      

      
      {/* Code Ticker */}
      <CodeTicker />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            <ElectricText>{portfolioData.title}</ElectricText>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-4">
            <ElectricText>
              <span className="neon-cyan">{portfolioData.subtitle}</span>
            </ElectricText>
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            <ElectricText>
              Mastery Level: <span className="neon-green font-mono text-2xl">{portfolioData.masteryLevel}</span>
            </ElectricText>
          </p>
        </div>
        
        {/* Central Cube */}
        <div className="mb-16 animate-slide-up">
          <RotatingCube technologies={technologies} />
        </div>
        
        {/* Skills Chart */}
        <div className="w-full max-w-4xl mb-16 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 deep-red">
            <ElectricText>MASTERY LEVELS</ElectricText>
          </h2>
          <SkillChart technologies={technologies} />
        </div>
        
        {/* Status Display */}
        <div className="text-center animate-slide-up mb-16">
          <h3 className="text-2xl md:text-3xl font-bold deep-red mb-6">
            <ElectricText>SYSTEM STATUS</ElectricText>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-mono">
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="neon-green text-2xl">●</span><br />
                <span className="font-bold text-white">Knowledge: </span><span className="neon-green font-bold">97%+</span>
              </ElectricText>
            </div>
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="neon-cyan text-2xl">●</span><br />
                <span className="font-bold text-white">Focus: </span><span className="neon-cyan font-bold">100%</span>
              </ElectricText>
            </div>
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="neon-purple text-2xl">●</span><br />
                <span className="font-bold text-white">Level: </span><span className="neon-purple font-bold">ELITE</span>
              </ElectricText>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center animate-slide-up mb-16 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            <ElectricText>OUR SERVICES</ElectricText>
          </h3>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8 font-bold">
            <ElectricText>
              {portfolioData.description}
            </ElectricText>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="text-2xl">🎮</span><br />
                <span className="neon-yellow font-bold text-xl">Games</span>
              </ElectricText>
            </div>
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="text-2xl">💼</span><br />
                <span className="neon-green font-bold text-xl">Business</span>
              </ElectricText>
            </div>
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="text-2xl">🛒</span><br />
                <span className="neon-pink font-bold text-xl">E-commerce</span>
              </ElectricText>
            </div>
            <div className="p-4 rounded-xl">
              <ElectricText>
                <span className="text-2xl">⚡</span><br />
                <span className="neon-purple font-bold text-xl">Custom</span>
              </ElectricText>
            </div>
          </div>

          <button
            onClick={() => window.open(`https://t.me/${telegramId}`, '_blank')}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 glow-blue"
          >
            <ElectricText>
              📞 BOOK NOW - TELEGRAM
            </ElectricText>
          </button>
          
          <div className="text-center mt-4 text-sm text-gray-400 font-bold">
            Click for instant connection
          </div>
        </div>

        {/* Interactive Skills Section */}
        <div className="text-center animate-slide-up mb-16 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            <ElectricText>MY EXPERTISE</ElectricText>
          </h3>

          <FlyingWords words={skillWords} />
        </div>
      </div>
    </div>
  );
}
