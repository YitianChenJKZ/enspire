import React, { useState, useRef, useEffect } from 'react';

type Tab = 'listeners' | 'hosts' | 'advertisers';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>{children}</span>
    </li>
);

const ListenersContent: React.FC = () => (
    <div>
        <h3 className="text-3xl font-bold text-white mb-6">Listeners are lost.</h3>
        <p className="text-gray-400 mb-8">Podcasts are rich. Your tools shouldn't be this scattered. You listen on Spotify, jot notes in Notion or Apple Notes, text links to friends... No wonder you forget.</p>
        <div className="border-t border-gray-700 pt-8">
            <h4 className="font-bold text-white mb-4">Enspire brings everything into one focused space – your second brain.</h4>
            <ul className="space-y-4 text-gray-300">
                <CheckListItem>What Enspire Fixes: Enspire gives tools the respect they deserve – with tools for thinking, classification, and memory - built to inspire.</CheckListItem>
                <CheckListItem>Scattered bookmarks, links, and notes. Enspire keeps everything in one place, directly connected to the audio by our powerful nodal network.</CheckListItem>
                <CheckListItem>Forgetting what you hear. Enspire helps you connect what you've learned across episodes - through personalized key takeaways. It's your Podcast Brain – augmented by AI.</CheckListItem>
            </ul>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
             <ul className="space-y-4 text-gray-300 grid md:grid-cols-2 gap-x-8 gap-y-4">
                <CheckListItem>Free listening with superpowers - artificial augmented intelligence (AAI)</CheckListItem>
                <CheckListItem>Smarter search to find the idea, not the title</CheckListItem>
                <CheckListItem>Smart follow-ups to go deeper</CheckListItem>
                <CheckListItem>Smart recommendations based on your engagement</CheckListItem>
                <CheckListItem>See listener comments exactly where they happened</CheckListItem>
                <CheckListItem>See what your friends think, and respond</CheckListItem>
                <CheckListItem>A connected knowledge base of everything you've learned</CheckListItem>
             </ul>
        </div>
        <div className="mt-12 text-center">
             <button className="py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
                Join as a Listener
            </button>
        </div>
    </div>
);

const HostsContent: React.FC = () => (
     <div>
        <h3 className="text-3xl font-bold text-white mb-6">Hosts are are miles away from listeners.</h3>
        <p className="text-gray-400 mb-8">Podcast analytics never work. Enspire gives you the tools to understand what resonates with listeners with AI summarized timestamped comments and create content that truly lands.</p>
        <div className="border-t border-gray-700 pt-8">
            <h4 className="font-bold text-white mb-4">Enspire builds a multi-modal link between you and your listeners.</h4>
            <ul className="space-y-4 text-gray-300">
                <CheckListItem>What Enspire Fixes: Never run out of podcast inspirations. Ever. Enspire deploys the same semantic vector engine to recommend what users want to listen.</CheckListItem>
                <CheckListItem>Understand what parts of your episodes spark the most conversation and inspiration with timestamped comments and reactions.</CheckListItem>
                <CheckListItem>Engage directly with your fans, answer questions, and get real-time feedback.</CheckListItem>
            </ul>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
             <ul className="space-y-4 text-gray-300 grid md:grid-cols-2 gap-x-8 gap-y-4">
                <CheckListItem>Powerful analytics on listener engagement</CheckListItem>
                <CheckListItem>Direct community interaction tools</CheckListItem>
                <CheckListItem>Timestamped feedback and questions</CheckListItem>
                <CheckListItem>Automatic podcast chaptering</CheckListItem>
                <CheckListItem>Monetization opportunities through direct engagement</CheckListItem>
                <CheckListItem>Create a richer, more interactive user experience</CheckListItem>
             </ul>
        </div>
        <div className="mt-12 text-center">
             <button className="py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
                Join as a Host
            </button>
        </div>
    </div>
);

const AdvertisersContent: React.FC = () => (
     <div>
        <h3 className="text-3xl font-bold text-white mb-6">Advertisers are left guessing.</h3>
        <p className="text-gray-400 mb-8">Stop guessing if your message is hitting home. Enspire injects ads at critical moments to people who actually need them, backed by our powerful vector database, to help you maximize real impact.</p>
        <div className="border-t border-gray-700 pt-8">
            <h4 className="font-bold text-white mb-4">We don't sell pillows in the middle of a conversation about AI.</h4>
            <ul className="space-y-4 text-gray-300">
                <CheckListItem>What Enspire Fixes: Traditional podcast advertising relies on gambling and burning cash. We provide insight into direct listener interest and intent.</CheckListItem>
                <CheckListItem>Place your message not just in a podcast, but within specific topics, comments, and listener behaviors, powered by our semantic search.</CheckListItem>
                <CheckListItem>Predict listener mindset - Match content to what they’re thinking and feeling in real time</CheckListItem>
            </ul>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
             <ul className="space-y-4 text-gray-300 grid md:grid-cols-2 gap-x-8 gap-y-4">
                <CheckListItem>Contextual, topic-based ad placement</CheckListItem>
                <CheckListItem>Detailed engagement and sentiment analytics</CheckListItem>
                <CheckListItem>Measure brand lift and recall with precision</CheckListItem>
                <CheckListItem>Reach listeners at their moment of peak interest</CheckListItem>
                <CheckListItem>Transparent reporting and ROI measurement</CheckListItem>
                <CheckListItem>Partner with hosts who genuinely align with your brand</CheckListItem>
             </ul>
        </div>
         <div className="mt-12 text-center">
             <button className="py-3 px-8 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
                Join as an Advertiser
            </button>
        </div>
    </div>
);


const InfoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('listeners');
    const [isContentVisible, setIsContentVisible] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);

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

    const handleTabClick = (tab: Tab) => {
        if (tab !== activeTab) {
            setIsContentVisible(false);
            setTimeout(() => {
                setActiveTab(tab);
                setIsContentVisible(true);
            }, 300); // match transition duration
        }
    };
    
    const renderContent = () => {
        switch (activeTab) {
            case 'listeners':
                return <ListenersContent />;
            case 'hosts':
                return <HostsContent />;
            case 'advertisers':
                return <AdvertisersContent />;
            default:
                return null;
        }
    };

    const TabButton: React.FC<{ tab: Tab, children: React.ReactNode }> = ({ tab, children }) => (
        <button
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeTab === tab ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
            }`}
        >
            {children}
        </button>
    );

    return (
        <section id="info" className="py-24" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center space-x-2 md:space-x-4 p-1 bg-gray-800/50 rounded-full max-w-sm mx-auto mb-16 fade-in-up">
                    <TabButton tab="listeners">Listeners</TabButton>
                    <TabButton tab="hosts">Hosts</TabButton>
                    <TabButton tab="advertisers">Advertisers</TabButton>
                </div>

                <div className="max-w-4xl mx-auto fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    <div className={`transition-opacity duration-300 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;