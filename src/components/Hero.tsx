
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                <img 
                  src="https://my-portfolio-stv7.onrender.com/img/new-me.png" 
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Big Ferd</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and user-centered design.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="p-3 glassmorphism rounded-full hover:scale-110 transition-transform duration-300">
              <Github size={24} className="text-white" />
            </a>
            <a href="#" className="p-3 glassmorphism rounded-full hover:scale-110 transition-transform duration-300">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="#contact" className="p-3 glassmorphism rounded-full hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                 onClick={() => window.open('https://drive.google.com/file/d/1IJVkyHEXYhhJM_oPVUQ1I0QS06WYXt7j/view?usp=sharing', '_blank')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-white/10"
              onClick={() => window.open('https://drive.google.com/file/d/1IJVkyHEXYhhJM_oPVUQ1I0QS06WYXt7j/view?usp=sharing', '_blank')}
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
