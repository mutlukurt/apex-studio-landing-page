import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, delivering exceptional results that exceed expectations.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication throughout the process.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Our focus is on delivering measurable outcomes that drive your business forward and create lasting impact.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges effectively.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading creative vision with 8+ years in digital design and brand strategy.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Full-stack expert specializing in scalable web applications and modern frameworks.'
    },
    {
      name: 'Emily Thompson',
      role: 'UX Strategist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'User experience advocate with expertise in research, testing, and conversion optimization.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About <span className="text-teal-600">Apex Studio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers, developers, and strategists dedicated to 
            creating digital experiences that make a meaningful impact.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Founded in 2019, Apex Studio emerged from a simple belief: that exceptional digital 
                experiences should be accessible to businesses of all sizes. What started as a small 
                team of creatives has grown into a full-service digital agency.
              </p>
              <p>
                We've had the privilege of working with forward-thinking companies across industries, 
                from innovative startups to established enterprises. Each project teaches us something 
                new and pushes us to raise the bar even higher.
              </p>
              <p>
                Today, we continue to blend creativity with strategy, design with technology, and 
                ambition with execution to deliver solutions that not only look beautiful but 
                drive real business results.
              </p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-teal-600 mx-auto mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-teal-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;