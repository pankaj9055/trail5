import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PortfolioData {
  title: string;
  subtitle: string;
  masteryLevel: string;
  description: string;
}

interface PortfolioContextType {
  portfolioData: PortfolioData;
  telegramId: string;
  updatePortfolioData: (data: PortfolioData) => void;
  updateTelegramId: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    title: "CODE-X",
    subtitle: "FULL STACK DEVELOPER",
    masteryLevel: "97%+",
    description: "We create every type of website - Games, Business Websites, E-commerce Platforms, Professional Applications, and Custom Solutions in a professional way. We turn your dream project into reality with the latest technology and modern design."
  });
  
  const [telegramId, setTelegramId] = useState("Growwithstorm");

  useEffect(() => {
    // Clear old data and use new defaults
    localStorage.removeItem('portfolioData');
    localStorage.removeItem('telegramId');
    
    // Load saved data from localStorage
    const savedPortfolioData = localStorage.getItem('portfolioData');
    const savedTelegramId = localStorage.getItem('telegramId');
    
    if (savedPortfolioData) {
      setPortfolioData(JSON.parse(savedPortfolioData));
    }
    if (savedTelegramId) {
      setTelegramId(savedTelegramId);
    }
  }, []);

  const updatePortfolioData = (data: PortfolioData) => {
    setPortfolioData(data);
    localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  const updateTelegramId = (id: string) => {
    setTelegramId(id);
    localStorage.setItem('telegramId', id);
  };

  return (
    <PortfolioContext.Provider value={{ 
      portfolioData, 
      telegramId, 
      updatePortfolioData, 
      updateTelegramId 
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}