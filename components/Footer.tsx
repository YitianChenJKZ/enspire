import React, { useRef, useEffect } from 'react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-purple-500/20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10 fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-3 sm:space-y-4">
            <img src="/images/logo.jpg" alt="Enspire Logo" className="h-12 sm:h-16" />
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs text-center md:text-left">
              "Enspire AI? Can AI pay uni tuition?" — my mum
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-base sm:text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <a href="#features" className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors">Features</a>
              <a href="#social-proof" className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors">Testimonials</a>
              <a href="#faq" className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors">FAQ</a>
              <a href="#waitlist" className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors">Join Waitlist</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-base sm:text-lg">Contact Us</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <a 
                href="mailto:contact@enspire.lol" 
                className="text-sm sm:text-base text-gray-300 hover:text-purple-300 transition-colors flex items-center space-x-2 justify-center md:justify-start"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@enspire.lol</span>
              </a>
              <p className="text-gray-400 text-xs sm:text-sm">Get in touch for support or partnerships</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2025 Enspire. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-xs sm:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-xs sm:text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;