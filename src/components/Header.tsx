import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange?: (sectionId: string) => void;
}

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Immediately update active section when clicking
      if (onSectionChange) {
        onSectionChange(sectionId);
      }
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                APEX<span className="text-teal-600">STUDIO</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group py-2 px-1 text-sm font-medium transition-colors duration-300 hover:text-teal-600 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  } ${activeSection === item.id ? 'text-teal-600' : ''}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Minimal Menu Panel */}
          <div className="fixed top-24 right-6 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl z-50 md:hidden border border-white/20">
            {/* Navigation */}
            <div className="p-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full text-left py-3 px-4 text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-teal-50 text-teal-600' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-teal-600'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${
                      activeSection === item.id ? 'bg-teal-600' : 'bg-slate-300'
                    }`}></div>
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;