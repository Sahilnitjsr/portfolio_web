import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-md py-12 px-4 border-t border-accent/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground">
              Passionate full-stack developer creating innovative digital solutions 
              with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-accent/20 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Your Name © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;