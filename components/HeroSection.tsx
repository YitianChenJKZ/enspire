import React, { useEffect, useRef, useState } from 'react';

const HeroSection: React.FC = () => {
  const learningSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = learningSectionRef.current;
    if (currentRef) {
      const elementsToAnimate = currentRef.querySelectorAll('.fade-in-up');
      elementsToAnimate.forEach(el => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elementsToAnimate = currentRef.querySelectorAll('.fade-in-up');
        elementsToAnimate.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  // Knowledge network data
  const nodes = [
    // Core Learning & Knowledge
    { id: 'learning', x: 50, y: 30, name: 'Learning', size: 'large' },
    { id: 'knowledge', x: 50, y: 45, name: 'Knowledge', size: 'large' },
    { id: 'education', x: 35, y: 25, name: 'Education', size: 'medium' },
    
    // Technology & Innovation
    { id: 'ai', x: 75, y: 20, name: 'AI & ML', size: 'medium' },
    { id: 'technology', x: 80, y: 35, name: 'Technology', size: 'medium' },
    { id: 'innovation', x: 65, y: 15, name: 'Innovation', size: 'medium' },
    { id: 'automation', x: 85, y: 50, name: 'Automation', size: 'small' },
    { id: 'blockchain', x: 90, y: 25, name: 'Blockchain', size: 'small' },
    
    // Media & Content
    { id: 'podcasts', x: 25, y: 20, name: 'Podcasts', size: 'medium' },
    { id: 'content', x: 20, y: 35, name: 'Content', size: 'medium' },
    { id: 'media', x: 15, y: 25, name: 'Media', size: 'small' },
    { id: 'storytelling', x: 30, y: 45, name: 'Storytelling', size: 'small' },
    
    // Business & Professional
    { id: 'business', x: 35, y: 70, name: 'Business', size: 'medium' },
    { id: 'entrepreneurship', x: 25, y: 75, name: 'Entrepreneurship', size: 'medium' },
    { id: 'leadership', x: 45, y: 75, name: 'Leadership', size: 'medium' },
    { id: 'strategy', x: 55, y: 60, name: 'Strategy', size: 'small' },
    { id: 'marketing', x: 40, y: 60, name: 'Marketing', size: 'small' },
    { id: 'finance', x: 60, y: 70, name: 'Finance', size: 'small' },
    
    // Creative & Design
    { id: 'design', x: 80, y: 50, name: 'Design', size: 'medium' },
    { id: 'creativity', x: 45, y: 60, name: 'Creativity', size: 'small' },
    { id: 'art', x: 75, y: 65, name: 'Art', size: 'small' },
    { id: 'music', x: 70, y: 75, name: 'Music', size: 'small' },
    { id: 'photography', x: 85, y: 70, name: 'Photography', size: 'small' },
    
    // Science & Research
    { id: 'science', x: 20, y: 55, name: 'Science', size: 'medium' },
    { id: 'research', x: 15, y: 40, name: 'Research', size: 'small' },
    { id: 'biology', x: 10, y: 60, name: 'Biology', size: 'small' },
    { id: 'chemistry', x: 25, y: 65, name: 'Chemistry', size: 'small' },
    { id: 'physics', x: 15, y: 70, name: 'Physics', size: 'small' },
    
    // Health & Wellness
    { id: 'health', x: 40, y: 85, name: 'Health', size: 'medium' },
    { id: 'wellness', x: 60, y: 85, name: 'Wellness', size: 'medium' },
    { id: 'nutrition', x: 35, y: 90, name: 'Nutrition', size: 'small' },
    { id: 'fitness', x: 65, y: 90, name: 'Fitness', size: 'small' },
    { id: 'mental-health', x: 50, y: 90, name: 'Mental Health', size: 'small' },
    
    // Psychology & Mind
    { id: 'psychology', x: 65, y: 70, name: 'Psychology', size: 'medium' },
    { id: 'neuroscience', x: 70, y: 60, name: 'Neuroscience', size: 'small' },
    { id: 'cognitive', x: 75, y: 55, name: 'Cognitive Science', size: 'small' },
    { id: 'behavior', x: 60, y: 65, name: 'Behavior', size: 'small' },
    
    // Productivity & Skills
    { id: 'productivity', x: 20, y: 50, name: 'Productivity', size: 'medium' },
    { id: 'time-management', x: 25, y: 55, name: 'Time Management', size: 'small' },
    { id: 'organization', x: 30, y: 50, name: 'Organization', size: 'small' },
    { id: 'planning', x: 35, y: 55, name: 'Planning', size: 'small' },
    
    // Communication & Language
    { id: 'communication', x: 55, y: 40, name: 'Communication', size: 'medium' },
    { id: 'writing', x: 85, y: 40, name: 'Writing', size: 'small' },
    { id: 'public-speaking', x: 50, y: 50, name: 'Public Speaking', size: 'small' },
    { id: 'languages', x: 45, y: 35, name: 'Languages', size: 'small' },
    
    // Data & Analytics
    { id: 'data', x: 70, y: 35, name: 'Data', size: 'small' },
    { id: 'analytics', x: 75, y: 45, name: 'Analytics', size: 'small' },
    { id: 'statistics', x: 80, y: 30, name: 'Statistics', size: 'small' },
    
    // User Experience & Design
    { id: 'ux', x: 30, y: 35, name: 'UX', size: 'small' },
    { id: 'ui', x: 35, y: 30, name: 'UI', size: 'small' },
    { id: 'usability', x: 40, y: 35, name: 'Usability', size: 'small' },
    
    // Social & Cultural
    { id: 'society', x: 50, y: 65, name: 'Society', size: 'medium' },
    { id: 'culture', x: 45, y: 70, name: 'Culture', size: 'small' },
    { id: 'politics', x: 55, y: 75, name: 'Politics', size: 'small' },
    { id: 'history', x: 40, y: 80, name: 'History', size: 'small' },
    
    // Environment & Sustainability
    { id: 'environment', x: 20, y: 80, name: 'Environment', size: 'medium' },
    { id: 'sustainability', x: 25, y: 85, name: 'Sustainability', size: 'small' },
    { id: 'climate', x: 15, y: 85, name: 'Climate', size: 'small' },
    
    // Philosophy & Ethics
    { id: 'philosophy', x: 60, y: 25, name: 'Philosophy', size: 'medium' },
    { id: 'ethics', x: 65, y: 30, name: 'Ethics', size: 'small' },
    { id: 'logic', x: 70, y: 25, name: 'Logic', size: 'small' },
    
    // Personal Development
    { id: 'growth', x: 50, y: 55, name: 'Personal Growth', size: 'medium' },
    { id: 'mindfulness', x: 55, y: 45, name: 'Mindfulness', size: 'small' },
    { id: 'habits', x: 45, y: 45, name: 'Habits', size: 'small' },
    { id: 'goals', x: 50, y: 40, name: 'Goal Setting', size: 'small' }
  ];

  const connections = [
    // Core Learning Connections
    ['learning', 'knowledge'], ['learning', 'education'], ['learning', 'growth'],
    ['knowledge', 'education'], ['knowledge', 'research'], ['knowledge', 'content'],
    
    // Technology Network
    ['ai', 'technology'], ['ai', 'innovation'], ['ai', 'automation'], ['ai', 'data'],
    ['technology', 'innovation'], ['technology', 'automation'], ['technology', 'blockchain'],
    ['innovation', 'automation'], ['innovation', 'blockchain'], ['innovation', 'creativity'],
    
    // Media & Content Network
    ['podcasts', 'content'], ['podcasts', 'media'], ['podcasts', 'storytelling'],
    ['content', 'media'], ['content', 'storytelling'], ['content', 'writing'],
    ['media', 'storytelling'], ['media', 'art'], ['media', 'photography'],
    
    // Business Network
    ['business', 'entrepreneurship'], ['business', 'leadership'], ['business', 'strategy'],
    ['business', 'marketing'], ['business', 'finance'], ['business', 'productivity'],
    ['entrepreneurship', 'leadership'], ['entrepreneurship', 'strategy'], ['entrepreneurship', 'innovation'],
    ['leadership', 'strategy'], ['leadership', 'communication'], ['leadership', 'growth'],
    
    // Creative Network
    ['design', 'creativity'], ['design', 'art'], ['design', 'ux'], ['design', 'ui'],
    ['creativity', 'art'], ['creativity', 'music'], ['creativity', 'storytelling'],
    ['art', 'music'], ['art', 'photography'], ['art', 'culture'],
    
    // Science Network
    ['science', 'research'], ['science', 'biology'], ['science', 'chemistry'], ['science', 'physics'],
    ['research', 'biology'], ['research', 'chemistry'], ['research', 'physics'],
    ['biology', 'chemistry'], ['biology', 'health'], ['chemistry', 'physics'],
    
    // Health Network
    ['health', 'wellness'], ['health', 'nutrition'], ['health', 'fitness'], ['health', 'mental-health'],
    ['wellness', 'nutrition'], ['wellness', 'fitness'], ['wellness', 'mental-health'],
    ['nutrition', 'fitness'], ['fitness', 'mental-health'], ['mental-health', 'psychology'],
    
    // Psychology Network
    ['psychology', 'neuroscience'], ['psychology', 'cognitive'], ['psychology', 'behavior'],
    ['neuroscience', 'cognitive'], ['neuroscience', 'behavior'], ['cognitive', 'behavior'],
    ['psychology', 'mental-health'], ['psychology', 'mindfulness'], ['psychology', 'habits'],
    
    // Productivity Network
    ['productivity', 'time-management'], ['productivity', 'organization'], ['productivity', 'planning'],
    ['time-management', 'organization'], ['time-management', 'planning'], ['organization', 'planning'],
    ['productivity', 'goals'], ['productivity', 'habits'], ['productivity', 'growth'],
    
    // Communication Network
    ['communication', 'writing'], ['communication', 'public-speaking'], ['communication', 'languages'],
    ['writing', 'public-speaking'], ['writing', 'languages'], ['writing', 'storytelling'],
    ['public-speaking', 'languages'], ['public-speaking', 'leadership'], ['public-speaking', 'confidence'],
    
    // Data Network
    ['data', 'analytics'], ['data', 'statistics'], ['data', 'ai'], ['data', 'research'],
    ['analytics', 'statistics'], ['analytics', 'business'], ['analytics', 'marketing'],
    ['statistics', 'research'], ['statistics', 'science'], ['statistics', 'ai'],
    
    // UX/UI Network
    ['ux', 'ui'], ['ux', 'usability'], ['ux', 'design'], ['ux', 'user-research'],
    ['ui', 'usability'], ['ui', 'design'], ['ui', 'visual-design'],
    ['usability', 'user-research'], ['usability', 'accessibility'], ['usability', 'testing'],
    
    // Social Network
    ['society', 'culture'], ['society', 'politics'], ['society', 'history'], ['society', 'philosophy'],
    ['culture', 'politics'], ['culture', 'history'], ['culture', 'art'], ['culture', 'languages'],
    ['politics', 'history'], ['politics', 'philosophy'], ['politics', 'ethics'],
    
    // Environment Network
    ['environment', 'sustainability'], ['environment', 'climate'], ['environment', 'science'],
    ['sustainability', 'climate'], ['sustainability', 'business'], ['sustainability', 'innovation'],
    ['climate', 'science'], ['climate', 'research'], ['climate', 'politics'],
    
    // Philosophy Network
    ['philosophy', 'ethics'], ['philosophy', 'logic'], ['philosophy', 'science'],
    ['ethics', 'logic'], ['ethics', 'business'], ['ethics', 'politics'],
    ['logic', 'science'], ['logic', 'mathematics'], ['logic', 'ai'],
    
    // Personal Development Network
    ['growth', 'mindfulness'], ['growth', 'habits'], ['growth', 'goals'],
    ['mindfulness', 'habits'], ['mindfulness', 'mental-health'], ['mindfulness', 'wellness'],
    ['habits', 'goals'], ['habits', 'productivity'], ['habits', 'behavior'],
    ['goals', 'planning'], ['goals', 'strategy'], ['goals', 'motivation'],
    
    // Cross-Category Connections
    ['learning', 'ai'], ['learning', 'podcasts'], ['learning', 'business'], ['learning', 'science'],
    ['innovation', 'business'], ['innovation', 'science'], ['innovation', 'art'],
    ['creativity', 'business'], ['creativity', 'science'], ['creativity', 'education'],
    ['technology', 'business'], ['technology', 'education'], ['technology', 'health'],
    ['content', 'business'], ['content', 'education'], ['content', 'marketing'],
    ['research', 'business'], ['research', 'education'], ['research', 'health'],
    ['communication', 'business'], ['communication', 'education'], ['communication', 'leadership'],
    ['data', 'business'], ['data', 'science'], ['data', 'health'],
    ['design', 'business'], ['design', 'education'], ['design', 'technology'],
    ['psychology', 'business'], ['psychology', 'education'], ['psychology', 'health'],
    ['productivity', 'business'], ['productivity', 'education'], ['productivity', 'health']
  ];

  const getNodeSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-6 h-6';
      case 'medium': return 'w-4 h-4';
      case 'small': return 'w-3 h-3';
      default: return 'w-4 h-4';
    }
  };

  const getNodeColor = (nodeId: string) => {
    if (hoveredNode === nodeId) {
      return 'bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]';
    }
    if (hoveredNode && connections.some(([a, b]) => 
      (a === hoveredNode && b === nodeId) || (a === nodeId && b === hoveredNode)
    )) {
      return 'bg-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.6)]';
    }
    return 'bg-blue-500';
  };

  const getConnectionOpacity = (nodeA: string, nodeB: string) => {
    if (hoveredNode === nodeA || hoveredNode === nodeB) {
      return 'opacity-100';
    }
    if (hoveredNode && connections.some(([a, b]) => 
      (a === hoveredNode && b === nodeA) || (a === hoveredNode && b === nodeB) ||
      (a === hoveredNode && b === nodeB) || (a === hoveredNode && b === nodeA)
    )) {
      return 'opacity-60';
    }
    return 'opacity-30';
  };

  const getConnectionWidth = (nodeA: string, nodeB: string) => {
    if (hoveredNode === nodeA || hoveredNode === nodeB) {
      return 'stroke-2';
    }
    return 'stroke-1';
  };

  return (
    <section id="hero" className="relative pt-40 pb-24 overflow-hidden">
      {/* Dark blue galaxy background */}
      <div className="absolute inset-0 z-0 bg-[#05091a]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15)_0%,_rgba(5,9,26,0)_60%)]"></div>
      
      {/* Galaxy stars effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero text */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform your
            
            podcasts
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
               into knowledge network
            </span>
            
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Enspire AI brings your notes, takeaways, and communities into one place — and builds neural connections between episodes and brain so it empowers your inspiration.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="#waitlist" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
               Join Waitlist
            </a>
            <a href="#demo" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white hover:text-gray-900 transition-all">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      
      <div id="learning" ref={learningSectionRef} className="container mx-auto px-4 sm:px-6 relative z-10 mt-20 sm:mt-32 md:mt-48">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white fade-in-up text-center px-4">Listening, Learning, Playing. We've got it all covered.</h2>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-gray-300 fade-in-up text-center px-4" style={{ transitionDelay: '0.2s' }}>
          Enspire Brain (eBrain)automatically builds connections between episodes and concepts, giving you a private, explorable network of everything you've absorbed - like a second brain.
        </p>
        
        {/* Interactive Knowledge Network */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="relative max-w-5xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-[#0c1229]/40 border border-gray-700 rounded-2xl overflow-hidden mx-4">
            {/* Network connections */}
            <svg className="absolute inset-0 w-full h-full">
              {connections.map(([nodeA, nodeB], index) => {
                const nodeA_data = nodes.find(n => n.id === nodeA);
                const nodeB_data = nodes.find(n => n.id === nodeB);
                if (!nodeA_data || !nodeB_data) return null;
                
                return (
                  <line
                    key={index}
                    x1={`${nodeA_data.x}%`}
                    y1={`${nodeA_data.y}%`}
                    x2={`${nodeB_data.x}%`}
                    y2={`${nodeB_data.y}%`}
                    stroke="rgba(59, 130, 246, 0.6)"
                    className={`transition-all duration-300 ${getConnectionOpacity(nodeA, nodeB)} ${getConnectionWidth(nodeA, nodeB)}`}
                  />
                );
              })}
            </svg>
            
            {/* Network nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute ${getNodeSize(node.size)} rounded-full ${getNodeColor(node.id)} transition-all duration-300 cursor-pointer transform hover:scale-125`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node label */}
                <div className={`absolute whitespace-nowrap text-white font-medium transition-all duration-300 ${
                  hoveredNode === node.id 
                    ? 'opacity-100 scale-125 text-base font-semibold' 
                    : 'opacity-80 scale-100 text-xs'
                }`}
                style={{
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '8px',
                  textShadow: '0 0 8px rgba(0,0,0,0.8)'
                }}>
                  {node.name}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm mt-4 fade-in-up" style={{ transitionDelay: '0.6s' }}>
          Explore diverse topics from technology to arts, using Enspire AI.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;