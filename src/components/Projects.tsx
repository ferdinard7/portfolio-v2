
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://res.cloudinary.com/dljbovogk/image/upload/v1751257012/Ecommerce_gydocn_q0okv1.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Restaurant Ordering meal App',
      description: 'A restuarant web application, with ordering features.',
      image: 'https://res.cloudinary.com/dljbovogk/image/upload/v1750685257/nad_af1fld_foutba.png',
      technologies: ['React', 'node.js', 'expressjs', 'Socket.io', 'Paystack API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Social Chatty Application',
      description: 'A responsive Chat Application for friends and family to be connected with one another, multiple APIs were integrated and also microservices architectures',
      image: 'https://res.cloudinary.com/dljbovogk/image/upload/v1750686139/Screenshot_111_ltacfk.png',      
      technologies: ['React.js', 'Node.js', 'Tailwind', 'Socket.io', 'Redis', 'Microservices Arhitectures'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Saas Application',
      description: 'A Saas application that helps content creators, influencer and business people add value to their content by providing them with a platform to create and manage their content effectively, and also add clickable links in their videos to generate and increase conversion rate',
      image: 'https://res.cloudinary.com/dljbovogk/image/upload/v1750686841/Screenshot_112_laxpvd.png',
      technologies: ['Supabase', 'React', 'Open AI API', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 flex-1"
                  onClick={() => window.location.href = '#contact'}
                  >
                    View Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-600 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '#contact'}
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-white hover:bg-white/10"
            onClick={() => window.location.href = '#contact'}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
