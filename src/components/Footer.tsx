import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub' }
  ];

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Digital Strategy', href: '#' }
    ],
    Company: [
      { name: 'About Us', onClick: () => scrollToSection('about') },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', onClick: () => scrollToSection('contact') }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Newsletter', href: '#' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div 
              className="text-3xl font-bold mb-6 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              APEX<span className="text-teal-400">STUDIO</span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Transforming ambitious ideas into exceptional digital experiences through 
              innovative design and cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">Stay Updated</h4>
              <p className="text-slate-300">
                Get the latest insights and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-96">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 transition-colors duration-300"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <p>© 2025 Mutlu Kurt. Licensed under MIT License.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">
                MIT License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;