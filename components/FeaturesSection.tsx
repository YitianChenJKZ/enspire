import React, { useRef, useEffect, useState } from 'react';
import { BrainIcon, ConnectionIcon, SearchIcon } from './Icons';

const AppIcon: React.FC<{ name: string; bgColor: string; children: React.ReactNode }> = ({ name, bgColor, children }) => (
    <div className="flex flex-col items-center space-y-2">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold ${bgColor}`}>
            {children}
        </div>
        <span className="text-xs text-gray-400">{name}</span>
    </div>
);

const FeaturesSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<'without' | 'with'>('with');

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

        const currentRef = sectionRef.current;
        if (currentRef) {
            const elements = currentRef.querySelectorAll('.fade-in-up');
            elements.forEach(el => observer.observe(el));
        }

        return () => {
            if (currentRef) {
                const elements = currentRef.querySelectorAll('.fade-in-up');
                elements.forEach(el => observer.unobserve(el));
            }
        };
    }, []);

    return (
        <section id="features" className="py-24" ref={sectionRef}>
            <div className="container mx-auto px-6">

                {/* Smarter Listening Section */}
                <div id="demo" className="text-center mb-32">
                    <h2 className="text-4xl md:text-5xl font-bold text-white fade-in-up">Let us show you what smarter listening looks like.</h2>
                    <p className="max-w-xl mx-auto mt-4 text-gray-400 fade-in-up" style={{ transitionDelay: '0.2s' }}>This quick demo walks you through how Enspire makes your eBrain – step by step.</p>
                    <div className="fade-in-up mt-12 max-w-5xl mx-auto" style={{ transitionDelay: '0.4s' }}>
                        <div style={{
                          position: 'relative',
                          boxSizing: 'content-box',
                          maxHeight: '80svh',
                          width: '100%',
                          aspectRatio: '0.4601851851851852',
                          padding: '40px 0'
                        }}>
                          <iframe
                            src="https://app.supademo.com/embed/cmekcvyxm007uze0i9p4mywni?embed_v=2&utm_source=embed"
                            loading="lazy"
                            title="Discover personalized AI recommendations in Enspire app"
                            allow="clipboard-write; fullscreen"
                            allowFullScreen
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              border: 0,
                            }}
                          />
                        </div>
                    </div>
                </div>

                {/* 3-Column Features */}
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
                    <div className="text-center md:text-left fade-in-up">
                        <div className="inline-block p-3 rounded-full bg-blue-500/10 ring-1 ring-blue-500/20 mb-4">
                            <BrainIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">You listen. Enspire remembers.</h3>
                        <p className="mt-2 text-gray-400">Capture the moments that spark ideas, rescue key insights, and build a personal memory footprint that actually inspires.</p>
                    </div>
                     <div className="text-center md:text-left fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="inline-block p-3 rounded-full bg-blue-500/10 ring-1 ring-blue-500/20 mb-4">
                            <ConnectionIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Get the podcast you want. Instantly.</h3>
                        <p className="mt-2 text-gray-400">Our proprietary semantic NLP search engine goes much deeper, to connect ideas across episodes – so never miss a beat finding your interests.</p>
                    </div>
                     <div className="text-center md:text-left fade-in-up" style={{ transitionDelay: '0.4s' }}>
                        <div className="inline-block p-3 rounded-full bg-blue-500/10 ring-1 ring-blue-500/20 mb-4">
                            <SearchIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Turn episodes into inspiration, not noise.</h3>
                        <p className="mt-2 text-gray-400">With vector embedding models that build neural link maps and smart recommendations, Enspire transforms podcasts into your personalized knowledge.</p>
                    </div>
                </div>

                {/* Difference Section */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white fade-in-up">See the difference</h2>
                    <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="mt-12 max-w-2xl mx-auto bg-[#0c1229]/80 border border-gray-700 rounded-xl p-8">
                            <div className="flex justify-center space-x-8 mb-8">
                                <button 
                                    onClick={() => setActiveTab('without')}
                                    className={`font-semibold transition-all duration-300 ${
                                        activeTab === 'without' 
                                            ? 'text-white relative after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-red-500' 
                                            : 'text-gray-500 hover:text-gray-300'
                                    }`}
                                >
                                    Without Enspire
                                </button>
                                <button 
                                    onClick={() => setActiveTab('with')}
                                    className={`font-semibold transition-all duration-300 ${
                                        activeTab === 'with' 
                                            ? 'text-white relative after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-blue-500' 
                                            : 'text-gray-500 hover:text-gray-300'
                                    }`}
                                >
                                    With Enspire
                                </button>
                            </div>
                            
                            {/* Content based on active tab */}
                            {activeTab === 'without' ? (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                                        {/* Podcast Apps - Only companies with available logos */}
                                        <AppIcon name="Spotify" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/Spotify_Primary_Logo_RGB_Green.png" 
                                                alt="Spotify" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                        <AppIcon name="Apple" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/Apple-Logo-700x394.png" 
                                                alt="Apple" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                        <AppIcon name="Google" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/google-wordmarks-2x.webp=n-w200-h64-fcrop64=1,00000000ffffffff-rw" 
                                                alt="Google" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                    </div>
                                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                                        {/* Note-taking Apps - Only companies with available logos */}
                                        <AppIcon name="Notes" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/icons8-notes-100.png" 
                                                alt="Notes" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                        <AppIcon name="Evernote" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/Evernote-Logo-700x394.png" 
                                                alt="Evernote" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                        <AppIcon name="Notion" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/Notion-logo.svg.png" 
                                                alt="Notion" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                        <AppIcon name="OneNote" bgColor="bg-transparent">
                                            <img 
                                                src="Company logos/Microsoft_Office_OneNote_(2019–present).svg.png" 
                                                alt="OneNote" 
                                                className="w-10 h-10 object-contain"
                                            />
                                        </AppIcon>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-6">Multiple apps to juggle. Information scattered everywhere.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Enspire Logo with Advanced Animations */}
                                    <div className="flex justify-center">
                                        <div className="relative flex items-center justify-center w-48 h-48">
                                            {/* Floating particles */}
                                            <div className="absolute inset-0">
                                                {/* Particle 1 - Top right */}
                                                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-80 animate-float-1"></div>
                                                {/* Particle 2 - Bottom left */}
                                                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-70 animate-float-2"></div>
                                                {/* Particle 3 - Top left */}
                                                <div className="absolute top-6 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-90 animate-float-3"></div>
                                                {/* Particle 4 - Bottom right */}
                                                <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse opacity-75 animate-float-4"></div>
                                                {/* Particle 5 - Center top */}
                                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-85 animate-float-5"></div>
                                                {/* Particle 6 - Center bottom */}
                                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-80 animate-float-6"></div>
                                            </div>

                                            {/* Orbital rings */}
                                            <div className="absolute inset-0">
                                                {/* Outer orbital ring */}
                                                <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                                                {/* Middle orbital ring */}
                                                <div className="absolute inset-2 border border-purple-500/30 rounded-full animate-spin-reverse"></div>
                                                {/* Inner orbital ring */}
                                                <div className="absolute inset-4 border border-cyan-500/25 rounded-full animate-spin-slow"></div>
                                            </div>

                                            {/* Pulsing energy waves */}
                                            <div className="absolute inset-0">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse-wave-1"></div>
                                                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/8 to-cyan-500/8 animate-pulse-wave-2"></div>
                                                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/6 to-blue-500/6 animate-pulse-wave-3"></div>
                                            </div>

                                            {/* Main logo container with glow effect */}
                                            <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl animate-glow-pulse">
                                                {/* Inner glow */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-2xl blur-sm animate-pulse"></div>
                                                
                                                {/* Logo image */}
                                                <img 
                                                    src="components/logo.jpg" 
                                                    alt="Enspire Logo" 
                                                    className="w-12 h-12 rounded-lg object-cover relative z-10 animate-logo-float"
                                                />
                                                
                                                {/* Sparkle effects */}
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle-1"></div>
                                                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-sparkle-2"></div>
                                            </div>

                                            {/* Connection lines */}
                                            <div className="absolute inset-0">
                                                <svg className="w-full h-full" viewBox="0 0 192 192">
                                                    <defs>
                                                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                                                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                                                        </linearGradient>
                                                    </defs>
                                                    <path 
                                                        d="M96 20 Q 140 60, 140 96 Q 140 132, 96 172 Q 52 132, 52 96 Q 52 60, 96 20" 
                                                        fill="none" 
                                                        stroke="url(#connectionGradient)" 
                                                        strokeWidth="1" 
                                                        className="animate-draw-path"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-gray-500 mt-6">One app. Everything connected. Your personal knowledge network.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;