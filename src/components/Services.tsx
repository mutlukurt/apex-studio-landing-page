import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Smartphone, Zap, Globe, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps', 'API Integration']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that engage users and drive conversions through thoughtful design and user research.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional performance across iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Optimization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites and applications optimized for speed, SEO, and user engagement.',
      features: ['Core Web Vitals', 'SEO Optimization', 'Caching Strategies', 'CDN Implementation']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that align technology with your business objectives.',
      features: ['Market Analysis', 'Technology Roadmap', 'Growth Planning', 'Competitive Analysis']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Maintenance',
      description: 'Robust security implementation and ongoing maintenance to keep your digital assets protected and updated.',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring', 'Backup Solutions']
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your brand 
            and drive measurable results in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-500 transform hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8">
            Ready to transform your digital presence?
          </p>
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;