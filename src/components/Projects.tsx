import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "HealthTech Web Application",
    description:
      "A comprehensive healthcare platform featuring medicine recommendations, doctor registration and suggestions, skin disease prediction, pneumonia detection from X-rays, a medical chatbot, and mental health assessment.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "Express.js",
      "MongoDB",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // You can replace this with your own screenshot URL
    githubUrl: "https://github.com/harshitnitjsr/MEDTECHWEBAPP_ML_Final.git", 
  },
  {
    title: "Evently - Event Management System",
    description:
      "Next.js and MongoDB based event management platform with features including event registration, ticket sales, real-time analytics, event and venue recommendations using SERP API and Random Forest models.",
    technologies: [
      "Next.js",
      "Tailwind css",
      "Node.js",
      "MongoDB",
      "React",
      "REST APIs",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop", // Replace with your own screenshot if you want
    githubUrl: "https://github.com/dilipnitjsr/real-time-event-management-pwa.git",
  },
];


  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
    
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;