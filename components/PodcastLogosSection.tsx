import React from 'react';

const PodcastLogosSection: React.FC = () => {
  const sp500Companies = [
    { 
      name: 'Apple Inc.', 
      logo: '../Company logos 2/Apple_Inc.-Logo.wine.png',
      description: 'Technology' 
    },
    { 
      name: 'Microsoft', 
      logo: '../Company logos 2/icons8-microsoft-48.png',
      description: 'Technology' 
    },
    { 
      name: 'Alphabet', 
      logo: '../Company logos 2/Alphabet-Inc.-Logo.png',
      description: 'Technology' 
    },
    { 
      name: 'Amazon', 
      logo: '../Company logos 2/[CITYPNG.COM]Amazon Official Logo - 3000x3000.png',
      description: 'E-commerce' 
    },
    { 
      name: 'NVIDIA', 
      logo: '../Company logos 2/Nvidia-Logo.wine.png',
      description: 'Technology' 
    },
    { 
      name: 'Tesla', 
      logo: '../Company logos 2/Tesla,_Inc.-Logo.wine.png',
      description: 'Automotive' 
    },
    { 
      name: 'Berkshire Hathaway', 
      logo: '../Company logos 2/BRK-B_BIG.png',
      description: 'Conglomerate' 
    },
    { 
      name: 'UnitedHealth Group', 
      logo: '../Company logos 2/UnitedHealth_Group-Logo.wine.png',
      description: 'Healthcare' 
    },
    { 
      name: 'JPMorgan Chase', 
      logo: '../Company logos 2/JPMorgan_Chase-Logo.wine.png',
      description: 'Banking' 
    },
    { 
      name: 'Visa', 
      logo: '../Company logos 2/Visa_Inc.-Logo.wine.png',
      description: 'Financial Services' 
    }
  ];

  return (
    <section id="podcast-logos" className="py-20 bg-[#0c1229] relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.1)_0%,_rgba(12,18,41,0)_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Creators & Listeners worldwide
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're listening for fun, business, or learning, 
            Enspire helps you remember what matters from every episode. Used by employees at leading companies.
          </p>
        </div>

        {/* Logo Grid - 2 rows of 5 companies */}
        <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto mb-8">
          {sp500Companies.slice(0, 5).map((company, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#1a2332]/50 hover:scale-105"
            >
              <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-3">
                <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-white font-semibold text-center text-sm mb-1">
                {company.name}
              </h3>
              <p className="text-gray-400 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto">
          {sp500Companies.slice(5, 10).map((company, index) => (
            <div 
              key={index + 5}
              className="group flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#1a2332]/50 hover:scale-105"
            >
              <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-3">
                <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-white font-semibold text-center text-sm mb-1">
                {company.name}
              </h3>
              <p className="text-gray-400 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">
            Ready to transform your podcast listening experience?
          </p>
          <a href="#waitlist" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0c1229]">
            Start Listening Smarter
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastLogosSection;
