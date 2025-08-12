import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [

     {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 95 },
        { name: "Python", level: 90 }, 
        { name: "JavaScript", level: 95 },
        
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 92 },
        { name: "Github", level: 95 },
        { name: "Figma", level: 85 },
      ]
    }
  ];

  const techStack = [
   "C/C++","Python", "React", "Node.js", "TypeScript", "Express.js", "MongoDB", "SQL", 
    "Tailwind CSS", "Next.js", "Git", "Github",  "REST APIs",
    "JavaScript", "HTML/CSS", "Figma"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-accent/20 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <Card className="p-8 bg-gradient-card border-accent/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;