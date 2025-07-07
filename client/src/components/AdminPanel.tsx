import { useState } from "react";
import { Settings, Shield, Lock } from "lucide-react";

export default function AdminPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleClick = () => {
    setShowPanel(!showPanel);
  };

  const handleLogin = () => {
    // Simple demo login
    alert('Admin access granted! ✅\n\nDemo credentials accepted.\nRedirecting to admin dashboard...');
    setShowPanel(false);
  };

  return (
    <>
      <div className="fixed top-5 right-5 z-20">
        <div
          className={`relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isHovered ? 'scale-110 glow-red' : ''
          }`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -inset-2 border-2 border-red-600 rounded-full animate-pulse-glow" />
          <Settings className="w-6 h-6 text-white animate-spin-slow" />
        </div>
      </div>

      {/* Admin Panel Modal */}
      {showPanel && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="glow-border p-8 bg-black/90 backdrop-blur-sm rounded-2xl max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold deep-red mb-2">ADMIN ACCESS</h2>
              <p className="text-gray-400">Secure Authentication Required</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 neon-cyan">Username</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-red-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="admin"
                  defaultValue="admin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 neon-cyan">Password</label>
                <input
                  type="password"
                  className="w-full bg-black/50 border border-red-600/50 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="••••••••"
                  defaultValue="demo123"
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={handleLogin}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>LOGIN</span>
                </button>
                
                <button
                  onClick={() => setShowPanel(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  CANCEL
                </button>
              </div>
            </div>
            
            <div className="text-center mt-4 text-xs text-gray-500">
              Demo Mode: Use admin/demo123
            </div>
          </div>
        </div>
      )}
    </>
  );
}
