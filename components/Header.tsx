import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showSignInMessage, setShowSignInMessage] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 pt-6 sm:pt-8 lg:pt-10 pb-4 header-animate">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Demo
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="/images/logo.jpg" 
                alt="Enspire Logo" 
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Navigation - Auth Buttons */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button 
                className="px-3 py-1.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors font-medium"
                onMouseEnter={() => setShowSignInMessage(true)}
                onMouseLeave={() => setShowSignInMessage(false)}
                onClick={() => setShowSignInMessage(true)}
              >
                Sign in
              </button>
              {showSignInMessage && (
                <div className="absolute top-full right-0 mt-2 w-64 sm:w-72 p-3 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl z-20">
                  <p className="text-white text-xs sm:text-sm">
                    Server upgrade, please join the waitlist for priority access.
                  </p>
                  <div className="mt-2">
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
            <a 
              href="#waitlist" 
              className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign up
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Demo
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;