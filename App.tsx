
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SocialProofSection from './components/SocialProofSection';
import InfoSection from './components/InfoSection';
import PodcastLogosSection from './components/PodcastLogosSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  console.log('App component rendering...');
  
  return (
    <div className="bg-[#05091a] text-gray-300 font-sans antialiased overflow-x-hidden min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SocialProofSection />
        <InfoSection />
        <PodcastLogosSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
