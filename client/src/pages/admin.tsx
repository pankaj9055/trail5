import { useState } from "react";
import React from "react";
import { Shield, Lock, Settings, Users, BarChart3, Database, Edit, Save } from "lucide-react";
import ElectricText from "@/components/ElectricText";
import { usePortfolio } from "@/contexts/PortfolioContext";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  
  const { portfolioData, telegramId, updatePortfolioData, updateTelegramId } = usePortfolio();
  const [tempPortfolioData, setTempPortfolioData] = useState(portfolioData);
  const [tempTelegramId, setTempTelegramId] = useState(telegramId);

  // Initialize temp values when context changes
  React.useEffect(() => {
    setTempPortfolioData(portfolioData);
    setTempTelegramId(telegramId);
  }, [portfolioData, telegramId]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "demo123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleSaveSettings = () => {
    updatePortfolioData(tempPortfolioData);
    updateTelegramId(tempTelegramId);
    alert('Settings saved successfully! ✅');
    setEditMode(false);
  };

  const handleEditMode = () => {
    if (!editMode) {
      setTempPortfolioData(portfolioData);
      setTempTelegramId(telegramId);
    }
    setEditMode(!editMode);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Matrix Background */}
        <div className="matrix-bg" />
        
        <div className="relative z-10 max-w-md w-full mx-4">
          <div className="p-8 rounded-2xl border border-red-600/50 bg-black/90 backdrop-blur-sm">
            <div className="text-center mb-6">
              <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold deep-red mb-2">
                <ElectricText>ADMIN ACCESS</ElectricText>
              </h1>
              <p className="text-gray-400">Secure Authentication Required</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 neon-cyan">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/50 border border-red-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter username"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 neon-cyan">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-red-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>LOGIN</span>
              </button>
            </form>
            

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Background */}
      <div className="matrix-bg" />
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            <ElectricText>ADMIN DASHBOARD</ElectricText>
          </h1>
          <p className="text-xl text-gray-300">
            <ElectricText>Welcome back, Administrator</ElectricText>
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Portfolio Editor */}
          <div className="p-6 rounded-xl border border-blue-500/30 hover:scale-105 transition-all duration-300 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Edit className="w-8 h-8 neon-blue" />
                <h3 className="text-xl font-bold text-white">
                  <ElectricText>Portfolio Editor</ElectricText>
                </h3>
              </div>
              <button
                onClick={handleEditMode}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {editMode ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            {editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 neon-cyan">Title</label>
                  <input
                    type="text"
                    value={tempPortfolioData.title}
                    onChange={(e) => setTempPortfolioData({...tempPortfolioData, title: e.target.value})}
                    className="w-full bg-black/50 border border-blue-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 neon-cyan">Subtitle</label>
                  <input
                    type="text"
                    value={tempPortfolioData.subtitle}
                    onChange={(e) => setTempPortfolioData({...tempPortfolioData, subtitle: e.target.value})}
                    className="w-full bg-black/50 border border-blue-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 neon-cyan">Mastery Level</label>
                  <input
                    type="text"
                    value={tempPortfolioData.masteryLevel}
                    onChange={(e) => setTempPortfolioData({...tempPortfolioData, masteryLevel: e.target.value})}
                    className="w-full bg-black/50 border border-blue-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 neon-cyan">Services Description</label>
                  <textarea
                    value={tempPortfolioData.description}
                    onChange={(e) => setTempPortfolioData({...tempPortfolioData, description: e.target.value})}
                    rows={4}
                    className="w-full bg-black/50 border border-blue-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 neon-cyan">Telegram ID</label>
                  <input
                    type="text"
                    value={tempTelegramId}
                    onChange={(e) => setTempTelegramId(e.target.value)}
                    className="w-full bg-black/50 border border-blue-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="yourusername"
                  />
                </div>
                <button
                  onClick={handleSaveSettings}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Title:</span>
                  <span className="neon-blue font-bold">{portfolioData.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtitle:</span>
                  <span className="neon-blue font-bold">{portfolioData.subtitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mastery:</span>
                  <span className="neon-blue font-bold">{portfolioData.masteryLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Telegram:</span>
                  <span className="neon-blue font-bold">@{telegramId}</span>
                </div>
              </div>
            )}
          </div>

          {/* System Status */}
          <div className="p-6 rounded-xl border border-green-500/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-8 h-8 neon-green" />
              <h3 className="text-xl font-bold text-white">
                <ElectricText>System Status</ElectricText>
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Server:</span>
                <span className="neon-green font-bold">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Database:</span>
                <span className="neon-green font-bold">CONNECTED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security:</span>
                <span className="neon-green font-bold">SECURE</span>
              </div>
            </div>
          </div>

          {/* User Management */}
          <div className="p-6 rounded-xl border border-cyan-500/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 neon-cyan" />
              <h3 className="text-xl font-bold text-white">
                <ElectricText>User Management</ElectricText>
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Users:</span>
                <span className="neon-cyan font-bold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Today:</span>
                <span className="neon-cyan font-bold">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">New Signups:</span>
                <span className="neon-cyan font-bold">12</span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="p-6 rounded-xl border border-purple-500/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-8 h-8 neon-purple" />
              <h3 className="text-xl font-bold text-white">
                <ElectricText>Analytics</ElectricText>
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Page Views:</span>
                <span className="neon-purple font-bold">45,682</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bounce Rate:</span>
                <span className="neon-purple font-bold">23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Conversion:</span>
                <span className="neon-purple font-bold">7.8%</span>
              </div>
            </div>
          </div>

          {/* Database Stats */}
          <div className="p-6 rounded-xl border border-yellow-500/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-8 h-8 neon-yellow" />
              <h3 className="text-xl font-bold text-white">
                <ElectricText>Database</ElectricText>
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Storage Used:</span>
                <span className="neon-yellow font-bold">2.4 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Queries/sec:</span>
                <span className="neon-yellow font-bold">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime:</span>
                <span className="neon-yellow font-bold">99.9%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 rounded-xl border border-pink-500/30 hover:scale-105 transition-all duration-300 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              <ElectricText>Quick Actions</ElectricText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                Backup Database
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                Clear Cache
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                Security Scan
              </button>
            </div>
          </div>

        </div>

        {/* Logout Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <ElectricText>LOGOUT</ElectricText>
          </button>
        </div>
      </div>
    </div>
  );
}