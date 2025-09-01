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
    <footer ref={footerRef} className="border-t border-gray-800 fade-in-up">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start space-y-4">
            <img src="components/logo.jpg" alt="Enspire Logo" className="h-16" />
            <p className="text-sm text-gray-500 max-w-xs">
              "Enspire AI? Can AI pay uni tuition?" — my mum
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#social-proof" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">Join Waitlist</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:contact@enspire.lol" 
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@enspire.lol</span>
              </a>
              <p className="text-gray-400 text-sm">Get in touch for support or partnerships</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Enspire. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;