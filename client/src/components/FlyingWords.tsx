import React from 'react';
import ElectricText from './ElectricText';

interface FlyingWordsProps {
  words: string[];
}

const FlyingWords: React.FC<FlyingWordsProps> = ({ words }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        {words.map((word, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-8 md:p-12 rounded-xl"
            style={{
              animationDelay: `${index * 0.3}s`
            }}
          >
            <ElectricText>
              <span className={`text-2xl md:text-3xl lg:text-4xl font-bold neon-${['cyan', 'green', 'pink', 'purple', 'yellow', 'blue', 'orange', 'cyan'][index % 8]}`}>
                {word}
              </span>
            </ElectricText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlyingWords;