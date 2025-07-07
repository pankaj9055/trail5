import { useEffect, useState } from "react";

const codeLines = [
  { text: "// CODE-X Developer Profile", color: "text-purple-400" },
  { text: "const codeX = {", color: "text-white" },
  { text: "  javascript: 97,", color: "text-yellow-400" },
  { text: "  typescript: 96,", color: "text-blue-400" },
  { text: "  react: 98,", color: "text-cyan-400" },
  { text: "  nextjs: 95,", color: "text-white" },
  { text: "  python: 93,", color: "text-green-400" },
  { text: "  docker: 92,", color: "text-blue-400" },
  { text: "  aws: 91,", color: "text-orange-400" },
  { text: "  mongodb: 93,", color: "text-green-400" },
  { text: "  postgresql: 92,", color: "text-blue-400" },
  { text: "  graphql: 89,", color: "text-pink-400" },
  { text: "};", color: "text-white" },
  { text: "", color: "text-white" },
  { text: "function eliteStatus() {", color: "text-green-400" },
  { text: "  return Object.values(codeX)", color: "text-blue-400" },
  { text: "    .every(skill => skill > 88);", color: "text-blue-400" },
  { text: "}", color: "text-green-400" },
  { text: "", color: "text-white" },
  { text: "// 🔥 Elite Level Achieved", color: "text-orange-400" },
  { text: "console.log('⚡ CODE-X READY');", color: "text-yellow-400" },
  { text: "", color: "text-white" },
  { text: "export default EliteDeveloper;", color: "text-cyan-400" },
];

export default function CodeTicker() {
  const [currentLines, setCurrentLines] = useState(codeLines);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLines(prev => [...prev.slice(1), prev[0]]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed right-4 top-1/4 w-72 h-3/5 overflow-hidden border border-red-600 rounded-2xl font-mono text-sm p-5 z-10 hidden lg:block">
      <div className="animate-code-flow">
        {currentLines.map((line, index) => (
          <div key={index} className={`${line.color} mb-2 whitespace-nowrap font-bold`}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
