import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onScrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToContact }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-teal-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-orange-400/20 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/10 rotate-45 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Excellence
            </span>
          </h1>
        </div>

        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform ambitious ideas into exceptional digital experiences through 
            innovative design, cutting-edge technology, and strategic thinking.
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={onScrollToContact}
              className="group bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 text-white hover:text-teal-400 transition-colors duration-300">
              <div className="w-14 h-14 border-2 border-white group-hover:border-teal-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Play size={20} className="ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
            {[
              { number: '250+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Global Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;