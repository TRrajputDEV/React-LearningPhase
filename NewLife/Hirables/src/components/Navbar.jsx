import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: "How we work", href: "#how-we-work" },
    { text: "Prepare", href: "#prepare" },
    { text: "Help Center", href: "#help" },
    { text: "Book a consultant", href: "#book" }
  ];

  return (
    <div className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Hirables
              </h3>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative px-4 py-2 group cursor-pointer"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200 relative z-10">
                  {item.text}
                </span>
                <div className={`absolute inset-0 bg-gray-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center ${
                  activeItem === index ? 'scale-100' : ''
                }`}></div>
              </div>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4 p-2 rounded-full hover:bg-yellow-50 cursor-pointer transition-colors duration-200 group">
              <span className="text-xl group-hover:scale-110 transition-transform duration-200 inline-block">☀️</span>
            </div>
          </div>

          {/* Action Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="relative px-6 py-2.5 text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group overflow-hidden">
              <span className="relative z-10">Sign up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            
            <button className="relative px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 group overflow-hidden shadow-lg hover:shadow-xl">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 bg-white border-t border-gray-100">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </div>
              ))}
              
              {/* Theme Toggle in Mobile */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-gray-700 font-medium">Theme</span>
                <div className="p-2 rounded-full hover:bg-yellow-50 cursor-pointer transition-colors duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200 inline-block">☀️</span>
                </div>
              </div>

              {/* Action Buttons in Mobile */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full px-6 py-3 text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                  Sign up
                </button>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 shadow-lg">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
}