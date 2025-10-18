import React from 'react';

// Company Logo Component
const CompanyLogo: React.FC<{ logo: string }> = ({ logo }) => {
  const renderLogo = () => {
    switch (logo) {
      case 'Apple':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#A6A6A6" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        );
      case 'Microsoft':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#F25022" d="M1 1h10v10H1z"/>
            <path fill="#7FBA00" d="M13 1h10v10H13z"/>
            <path fill="#00A4EF" d="M1 13h10v10H1z"/>
            <path fill="#FFB900" d="M13 13h10v10H13z"/>
          </svg>
        );
      case 'Google':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        );
      case 'Amazon':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#FF9900" d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.047-.224c-.604-3.076-2.408-4.876-5.91-4.876H8.89c-.524 0-.968.382-1.05.9L5.68 19.09h4.48c.524 0 .968-.382 1.05-.9l.89-5.63h1.68c2.57 0 4.578-.543 5.69-1.81 1.01-1.15 1.304-2.42 1.012-4.287z"/>
          </svg>
        );
      case 'NVIDIA':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#76B900" d="M8.5 2h7L24 12l-8.5 10h-7L0 12z"/>
          </svg>
        );
      case 'Tesla':
        return (
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#CC0000" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
      case 'Berkshire':
        return (
          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">BRK</span>
          </div>
        );
      case 'UnitedHealth':
        return (
          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">UHG</span>
          </div>
        );
      case 'JPMorgan':
        return (
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JPM</span>
          </div>
        );
      case 'Visa':
        return (
          <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">VISA</span>
          </div>
        );
      default:
        return <div className="w-12 h-12 bg-gray-500 rounded"></div>;
    }
  };

  return renderLogo();
};

const PodcastLogosSection: React.FC = () => {
  const sp500Companies = [
    { 
      name: 'Apple Inc.', 
      logo: 'Apple',
      description: 'Technology' 
    },
    { 
      name: 'Microsoft', 
      logo: 'Microsoft',
      description: 'Technology' 
    },
    { 
      name: 'Alphabet', 
      logo: 'Google',
      description: 'Technology' 
    },
    { 
      name: 'Amazon', 
      logo: 'Amazon',
      description: 'E-commerce' 
    },
    { 
      name: 'NVIDIA', 
      logo: 'NVIDIA',
      description: 'Technology' 
    },
    { 
      name: 'Tesla', 
      logo: 'Tesla',
      description: 'Automotive' 
    },
    { 
      name: 'Berkshire Hathaway', 
      logo: 'Berkshire',
      description: 'Conglomerate' 
    },
    { 
      name: 'UnitedHealth Group', 
      logo: 'UnitedHealth',
      description: 'Healthcare' 
    },
    { 
      name: 'JPMorgan Chase', 
      logo: 'JPMorgan',
      description: 'Banking' 
    },
    { 
      name: 'Visa', 
      logo: 'Visa',
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
                <CompanyLogo logo={company.logo} />
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
                <CompanyLogo logo={company.logo} />
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
