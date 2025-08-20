import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Globe, GraduationCap, Users } from "lucide-react";

export const About = () => {
  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "AI/ML", level: 80, icon: Brain },
    { name: "Research", level: 85, icon: GraduationCap },
    { name: "Teaching", level: 90, icon: Users },
    { name: "Web Development", level: 85, icon: Globe },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Undergraduate at GCTU, Ghana, specializing in AI and software engineering."
    },
    {
      icon: Brain,
      title: "AI Research Enthusiast",
      description: "Aspiring Ph.D. candidate with focus on AI for social good and innovation."
    },
    {
      icon: Users,
      title: "Teacher & Mentor",
      description: "Sharing knowledge through classes, tutorials, and community engagement."
    },
    {
      icon: Globe,
      title: "Global Impact Vision",
      description: "Leveraging computer science to create impactful solutions for communities worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the <span className="text-gradient-animate">Future</span> with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a passionate Computer Science student with a vision to leverage technology 
            for creating meaningful impact in communities and driving global innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My fascination with technology began early, but it was discovering the potential 
                of Artificial Intelligence that truly ignited my passion. As an undergraduate at 
                GCTU, I've dedicated myself to understanding how AI can solve real-world problems.
              </p>
              <p>
                Beyond academics, I'm deeply involved in teaching and community work—from tutoring 
                fellow students in automata theory and OOP to sharing digital skills through my 
                AGT TECH platform. I believe knowledge grows when shared.
              </p>
              <p>
                My ultimate goal is to pursue a Ph.D. in AI research, focusing on applications 
                that can drive positive social change and educational innovation across Africa and beyond.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 group-hover:glow-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="project-card group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};