import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold tracking-wider">My Website</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="hover:text-blue-400 transition-colors duration-300">
                            Home
                        </a>
                        <a href="/about" className="hover:text-blue-400 transition-colors duration-300">
                            About
                        </a>
                        <a href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                            Contact
                        </a>
                        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <a href="/" className="block hover:text-blue-400 transition-colors duration-300">
                            Home
                        </a>
                        <a href="/about" className="block hover:text-blue-400 transition-colors duration-300">
                            About
                        </a>
                        <a href="/contact" className="block hover:text-blue-400 transition-colors duration-300">
                            Contact
                        </a>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
