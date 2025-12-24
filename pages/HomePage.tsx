import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SocialProofSection from '../components/SocialProofSection';
import InfoSection from '../components/InfoSection';
import PodcastLogosSection from '../components/PodcastLogosSection';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <InfoSection />
      <PodcastLogosSection />
      <FAQSection />
    </>
  );
};

export default HomePage;
