import React, { useState, useEffect } from 'react';

interface NavigationBarProps {
  className?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'features', label: 'Features', icon: '✨' },
    { id: 'social-proof', label: 'Testimonials', icon: '💬' },
    { id: 'info', label: 'How It Works', icon: '⚙️' },
    { id: 'podcast-logos', label: 'Partners', icon: '🤝' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'waitlist', label: 'Join Waitlist', icon: '🚀' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the timeout
      const timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Get all sections
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      // Find which section is currently in view
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="relative">
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
        
        {/* Navigation tabs */}
        <div className="relative flex items-center space-x-1 p-2 rounded-2xl bg-gradient-to-r from-white/5 to-white/10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                relative px-4 py-3 rounded-xl transition-all duration-300 ease-out group
                ${activeSection === section.id 
                  ? 'bg-white/20 text-white shadow-lg scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }
                ${isScrolling ? 'transition-transform duration-75' : 'transition-all duration-300'}
              `}
            >
              {/* Active indicator */}
              {activeSection === section.id && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-pulse"></div>
              )}
              
              {/* Content */}
              <div className="relative flex items-center space-x-2">
                <span className="text-lg">{section.icon}</span>
                <span className="font-medium text-sm hidden md:block">{section.label}</span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-white/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
        
        {/* Floating indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NavigationBar;
