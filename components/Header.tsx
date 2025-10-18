import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showSignInMessage, setShowSignInMessage] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 pt-6 sm:pt-8 lg:pt-10 pb-4 header-animate">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#demo" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              Demo
            </a>
            <a href="#faq" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              FAQ
            </a>
            <a href="#waitlist" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              Waitlist
            </a>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <div className="relative group">
              {/* Purple glow effect */}
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <img 
                src="/images/logo.jpg" 
                alt="Enspire Logo" 
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Navigation - Auth Buttons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="px-4 py-2 text-sm text-white hover:text-purple-300 transition-colors font-medium rounded-lg hover:bg-white/5"
                onMouseEnter={() => setShowSignInMessage(true)}
                onMouseLeave={() => setShowSignInMessage(false)}
                onClick={() => setShowSignInMessage(true)}
              >
                Sign in
              </button>
              {showSignInMessage && (
                <div className="absolute top-full right-0 mt-2 w-72 p-4 bg-gray-900/95 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-xl z-20">
                  <p className="text-white text-sm">
                    Server upgrade, please join the waitlist for priority access.
                  </p>
                  <div className="mt-3">
                    <a 
                      href="#waitlist" 
                      className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      Join Waitlist
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a 
              href="#waitlist" 
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Sign up</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-purple-500/20">
          <div className="flex items-center justify-center space-x-6">
            <a href="#features" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#demo" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              Demo
            </a>
            <a href="#faq" className="text-white hover:text-purple-300 transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;