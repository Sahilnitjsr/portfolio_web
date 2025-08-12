import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-glow">
            Sahil Kumar Das
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in">
           Innovating at the intersection of software development and computer science, leveraging modern technologies to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a href="https://github.com/Sahilnitjsr" className="p-3 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sahil-kumar-das-a3974528a/" className="p-3 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="sahilkumardas96089@gmail.com" className="p-3 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;