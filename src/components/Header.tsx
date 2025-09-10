import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
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
                  className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group ${
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
        <div className="fixed inset-0 bg-slate-900 z-40 md:hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="text-2xl font-bold text-white">
              APEX<span className="text-teal-400">STUDIO</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-teal-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <div className="p-6">
            <nav className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-4 text-xl font-medium transition-colors border-b border-slate-700/50 ${
                    activeSection === item.id 
                      ? 'text-teal-400' 
                      : 'text-white hover:text-teal-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="mt-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-full w-full bg-slate-900 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="text-2xl font-bold text-white">
            APEX<span className="text-teal-400">STUDIO</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:text-teal-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <nav className="space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={\`block w-full text-left py-4 text-xl font-medium transition-colors border-b border-slate-700/50 ${
                  activeSection === item.id 
                    ? 'text-teal-400' 
                    : 'text-white hover:text-teal-400'
                }`}
                style={{ animationDelay: \`${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;