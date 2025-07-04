import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-purple-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Hafthap Ali M
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-purple-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://hafthapali.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${
                isScrolled 
                  ? 'text-purple-600 hover:text-purple-700' 
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              <ExternalLink size={16} />
              <span>Portfolio</span>
            </a>
            <button className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10 flex items-center space-x-2">
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                <span>Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl shadow-xl">
            <nav className="py-4 space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 rounded-lg mx-2"
                >
                  {item}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="https://hafthapali.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Portfolio</span>
                </a>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                  <Download size={16} />
                  <span>Resume</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;