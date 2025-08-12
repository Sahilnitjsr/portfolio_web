import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Code className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">Clean Code</h3>
            <p className="text-muted-foreground text-center">
              Writing maintainable, efficient code following best practices and industry standards.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Palette className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">UI/UX Design</h3>
            <p className="text-muted-foreground text-center">
              Creating beautiful, intuitive interfaces that provide exceptional user experiences.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">Performance</h3>
            <p className="text-muted-foreground text-center">
              Optimizing applications for speed, scalability, and outstanding performance.
            </p>
          </Card>
        </div>

        {/* New Education & Internship Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-accent/20 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Education & Experience</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <GraduationCap className="w-10 h-10 text-primary mb-2 mx-auto" />
              <h4 className="text-lg font-semibold">Bachelor of Technology</h4>
              <p className="text-muted-foreground">Computer Science & Engineering</p>
              <p className="mt-1 text-primary font-bold">CGPA: 7.75</p>
              <p className="text-muted-foreground mt-2 text-sm">NIT Jamshedpur</p>
            </div>
            <div>
              <Briefcase className="w-10 h-10 text-primary mb-2 mx-auto" />
              <h4 className="text-lg font-semibold">IT Intern (May - July)</h4>
              <p className="text-muted-foreground font-semibold mb-1">Bosch Global Software Technologies</p>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Developed an intuitive Django-based web application for real-time tracking and management of component inventory in the Sample Shop, as part of a digitalized inventory management system.
              </p>
            </div>
            <div>
              <Zap className="w-10 h-10 text-primary mb-2 mx-auto" />
              <h4 className="text-lg font-semibold">Skills</h4>
              <p className="text-muted-foreground max-w-xs mx-auto">
                C/C++, Javascript,React, Node.js, Django, Python, Database Design
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
