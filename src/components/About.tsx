
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'I love tackling complex challenges and finding innovative solutions.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience is a priority.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver exceptional results.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience building 
            web applications that solve real-world problems and create meaningful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Started my journey in web development 5 years ago, I've had the privilege of working 
                with startups and established companies, helping them bring their digital visions to life. 
                My expertise spans across modern web technologies, with a focus on React, Node.js, and cloud architecture.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community through writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
