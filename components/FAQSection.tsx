import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
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

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQItem[] = [
    {
      question: "What is Enspire AI and how does it work?",
      answer: "Enspire AI is a natural language embedding model that visualises your digital second brain from podcasts and other media sources in the future. It analyzes your interests to recommend the most relevant content, helping you stay inspired. It can also provide personalized system context for other AI services at your approval."
    },
    {
      question: "When can I use Enspire?",
      answer: "Currently, Enspire is in beta and only available to select users on our waitlist. We are rolling out to everyone on a first come, first serve basis."
    },
    {
      question: "What is Enspire Brain (eBrain)?",
      answer: "Enspire Brain (eBrain) is your digital second brain that compiles your interests into a neural network visualization. With a digital copy of your brain, you can use it to experience personalized AI services."
    },
    {
      question: "Can I use Enspire AI for professional development?",
      answer: "Absolutely! Enspire AI is excellent for professional development. It covers topics like business strategy, leadership, entrepreneurship, technology trends, and industry insights. Many professionals use our platform to stay updated with the latest developments in their field and acquire new skills."
    },
    {
      question: "How does the AI personalize content recommendations?",
      answer: "Enspire AI analyzes your listening history, preferences, search queries, and questions asked to build a comprehensive understanding of your listening profile. It then uses vector search algorithms to recommend content that matches your eBrain and interests."
    },
    {
      question: "What types of content does Enspire host?",
      answer: "Enspire currently only supports podcasts. However, we are working on adding more content types in the future."
    },
    {
      question: "Is my data and Enspire Brain (eBrain) private?",
      answer: "Yes, we take privacy very seriously. Your data, preferences, and eBrain are encrypted and stored securely in EU servers under strict GDPR compliance. We never share your personal information with third parties, and you have full control over your data and privacy settings."
    },
    {
      question: "Where can I use Enspire?",
      answer: "We are rolling out Enspire on our web and mobile apps."
    },
    {
      question: "Is Enspire free to use?",
      answer: "Enspire is always free to use. We plan to introduce paid tiers in the future with higher Enspire AI limits and features, such as eBrain storage and access to the Enspire API from other AI services like ChatGPT."
    },
    {
      question: "What makes Enspire different from other social media platforms?",
      answer: "Enspire stands out through its AI-driven media features, such as eBrain visualization, personalized recommendations, and focus on inspiration-driven experiences."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#05091a] to-[#0a0f1f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about Enspire, Enspire AI and eBrain.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a0f1f] border border-gray-800 rounded-lg overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#111827] transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openItems.has(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:contact@enspire.lol"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
