import React, { useState, useEffect, useRef } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from '../firebase/config';

const testimonials = [
  {
    quote: "I found Enspire from a Reddit thread. Wasn't expecting much, but now I can't live without it. It's not just about taking short notes from episodes I used to just forget about.",
    author: "Alex",
    role: "Product Manager"
  },
  {
    quote: "I signed up out of curiosity. It's not flashy, but it does one thing really well: I actually recall what I listened to.",
    author: "Marcus",
    role: "Startup Founder"
  },
  {
    quote: "This has completely changed my commute. I learn more, remember more, and can actually use the information from the podcasts I love.",
    author: "Sarah",
    role: "UX Designer"
  }
];

const SocialProofSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !userType) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Create a reference to the waitlist node
            const waitlistRef = ref(database, 'waitlist');
            
            // Add new entry
            const newEntryRef = push(waitlistRef);
            await set(newEntryRef, {
                email: email,
                userType: userType,
                timestamp: Date.now(),
                status: 'pending'
            });

            setSubmitStatus('success');
            setEmail('');
            setUserType('');
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);

        } catch (error) {
            console.error('Error submitting to waitlist:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="waitlist" className="py-24 bg-[#05091a] relative" ref={sectionRef}>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15)_0%,_rgba(5,9,26,0)_60%)]"></div>
            <div className="container mx-auto px-6 relative z-10">

                {/* Testimonials */}
                <div id="social-proof" className="text-center mb-32">
                    <div className="fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Turns out we're not the only ones tired of podcast chaos.</h2>
                        <p className="mt-4 text-gray-400">Real feedback from early beta users who found us on Instagram @enspire.lol</p>
                    </div>

                    <div className="max-w-3xl mx-auto mt-12 relative fade-in-up" style={{ transitionDelay: '0.2s' }}>
                         <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out" 
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4 md:px-12">
                                        <div className="border border-gray-700 rounded-lg p-8 bg-[#0c1229]/50">
                                            <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                                            <div className="flex items-center mt-6">
                                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                                                    {testimonial.author.charAt(0)}
                                                </div>
                                                <div className="ml-4 text-left">
                                                    <p className="font-bold text-white">{testimonial.author}</p>
                                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center space-x-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Email Signup */}
                <div className="text-center max-w-xl mx-auto">
                    <div className="fade-in-up">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">Be one of the first to access Enspire.</h2>
                      <p className="mt-4 text-gray-400">Join early to build your eBrain. We are giving away 1000 Enspire Premium 1-year subscriptions to random users on our waitlist.</p>
                    </div>
                    
                    {submitStatus === 'success' ? (
                        <div className="mt-8 p-6 bg-green-900/50 border border-green-700 rounded-lg fade-in-up">
                            <p className="text-green-400 font-semibold">Thank you for joining!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 space-y-4 fade-in-up" style={{ transitionDelay: '0.2s' }}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <select 
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Are you a listener or host?</option>
                                <option value="listener">Listener</option>
                                <option value="host">Host</option>
                            </select>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Joining...' : 'Join waitlist'}
                            </button>
                        </form>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg">
                            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                        </div>
                    )}

                    <a href="#" className="mt-6 inline-block text-sm text-blue-400 hover:text-blue-300 fade-in-up" style={{ transitionDelay: '0.4s' }}>
                        What's in it for you? →
                    </a>
                </div>

            </div>
        </section>
    );
};

export default SocialProofSection;