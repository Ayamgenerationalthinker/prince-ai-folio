import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Database, Globe, Users, BookOpen, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Daily Inspirational Quote App",
      description: "A mobile/web application that delivers personalized daily motivational quotes using AI-generated content and machine learning to understand user preferences.",
      icon: Brain,
      tags: ["AI/ML", "React", "Python", "TensorFlow"],
      category: "AI Project",
      status: "In Development",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Question Bank Management System",
      description: "A comprehensive PHP-based system for educational institutions to manage exam questions efficiently with automated categorization and difficulty assessment.",
      icon: Database,
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Web Development",
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Distributed Systems Research",
      description: "Comprehensive research presentations on mutual exclusion algorithms, process coordination, and group communication protocols in distributed computing environments.",
      icon: Globe,
      tags: ["Research", "Algorithms", "Distributed Systems"],
      category: "Research Work",
      status: "Published",
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Health Pharmacy Website",
      description: "Full-stack web application for pharmacy management including inventory tracking, prescription management, and customer service features.",
      icon: Database,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      status: "Completed",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Examination Malpractice Analysis",
      description: "Research project analyzing patterns in examination malpractice using statistical methods and proposing technology-based prevention solutions.",
      icon: BookOpen,
      tags: ["Research", "Data Analysis", "Python", "Statistics"],
      category: "Research Work",
      status: "Completed",
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Digital Skills Training Platform",
      description: "Educational platform documenting and teaching digital entrepreneurship, affiliate marketing, and emerging technology skills through AGT TECH.",
      icon: TrendingUp,
      tags: ["Education", "React", "Content Creation"],
      category: "Community Project",
      status: "Ongoing",
      links: {
        demo: "#",
        youtube: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Published": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Ongoing": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Projects & Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building <span className="text-gradient-animate">Tomorrow's</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in AI, software engineering, and research—each project 
            representing a step toward creating meaningful technological impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mb-3">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Paper
                    </Button>
                  )}
                  {project.links.youtube && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button size="lg" className="px-8 py-3 glow-effect">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};