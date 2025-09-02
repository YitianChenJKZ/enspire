import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showSignInMessage, setShowSignInMessage] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 pt-12 pb-2 header-animate">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Backlight glow effect */}
            <div className="relative">
              <div className="absolute inset-0 w-36 h-36 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-xl opacity-60 animate-pulse"></div>
              <img 
                src="/images/logo.jpg" 
                alt="Enspire Logo" 
                className="relative w-36 h-36 rounded-lg object-cover shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <a href="#waitlist" className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all">
              Sign up →
            </a>
            <div className="relative">
              <button 
                className="px-4 py-2 border border-gray-400 text-gray-300 rounded-lg hover:border-white hover:text-white transition-all"
                onMouseEnter={() => setShowSignInMessage(true)}
                onMouseLeave={() => setShowSignInMessage(false)}
                onClick={() => setShowSignInMessage(true)}
              >
                Sign in
              </button>
              {showSignInMessage && (
                <div className="absolute top-full right-0 mt-2 w-80 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20">
                  <p className="text-white text-sm">
                    Server upgrade, please join the waitlist for priority access.
                  </p>
                  <div className="mt-3">
                    <a 
                      href="#waitlist" 
                      className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                    >
                      Join Waitlist
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;