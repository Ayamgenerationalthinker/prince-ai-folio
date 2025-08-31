import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Database, Globe, Users, BookOpen, TrendingUp, PenTool, Target, Lightbulb } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "VerifyAI",
      description: "Advanced AI verification platform designed to authenticate and validate AI-generated content, ensuring transparency and trust in AI-driven digital communications.",
      icon: Brain,
      tags: ["AI/ML", "Verification", "Next.js", "TypeScript", "Machine Learning"],
      category: "AI Project",
      status: "Live",
      links: {
        demo: "https://verifyai-ten.vercel.app/"
      }
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Advanced AI-powered customer support chatbot using natural language processing and machine learning to provide intelligent, context-aware responses for enhanced customer service experiences.",
      icon: Brain,
      tags: ["AI/ML", "Python", "NLP", "TensorFlow", "Flask"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O3"
      }
    },
    {
      title: "Stock Price Prediction System",
      description: "Machine learning model for predicting stock prices using historical data analysis, technical indicators, and deep learning algorithms to forecast market trends.",
      icon: TrendingUp,
      tags: ["Python", "Machine Learning", "LSTM", "Pandas", "Matplotlib"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O2"
      }
    },
    {
      title: "Sales Forecasting Model",
      description: "Predictive analytics system for sales forecasting using time series analysis and machine learning to help businesses make data-driven decisions.",
      icon: Database,
      tags: ["Python", "Time Series", "Scikit-learn", "Data Analysis"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O1"
      }
    },
    {
      title: "Mahogany Wellness Pathways",
      description: "Comprehensive health and wellness platform providing personalized wellness tracking, health recommendations, and community support for holistic well-being.",
      icon: Users,
      tags: ["React", "Node.js", "Health Tech", "MongoDB"],
      category: "Web Development",
      status: "In Development",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/mahogany-wellness-pathways",
        demo: "https://www.mahoganyshealthwellness.com/"
      }
    },
    {
      title: "AGT TECH - AI Education Platform",
      description: "Empowering Africa with AI Education, Community & Tech Solutions. A comprehensive platform training 500+ Africans in AI skills with 95% success rate.",
      icon: Brain,
      tags: ["React", "AI Education", "Community", "Next.js", "Tailwind CSS"],
      category: "Education Platform",
      status: "Live",
      links: {
        demo: "https://agt-tech-qyn4.vercel.app/",
        github: "#"
      }
    },
    {
      title: "My AI/ML Journey Blog Post",
      description: "Documenting my path as a Level 300 Computer Science student at Ghana Communication Technology University, sharing insights into AI/ML learning experiences.",
      icon: PenTool,
      tags: ["AI/ML", "Education", "Blog", "Personal Journey"],
      category: "Blog Post",
      status: "Published",
      links: {
        demo: "https://ayamgenerationalth.wixsite.com/agt-tech/post/my-ai-ml-journey-documenting-my-path-as-a-level-300-computer-science-student-at-ghana-communication"
      }
    },
    {
      title: "How I Bombed My First Two Interviews",
      description: "A candid reflection on my first job interview experiences, the lessons learned from failure, and how setbacks became stepping stones to growth.",
      icon: Target,
      tags: ["Career", "Interviews", "Personal Growth", "Lessons"],
      category: "Blog Post", 
      status: "Published",
      links: {
        demo: "https://ayamgenerationalth.wixsite.com/agt-tech/post/how-i-bombed-my-first-two-interviews-and-what-they-taught-me"
      }
    },
    {
      title: "From Two Rejections to Huawei",
      description: "How I turned failure into fuel and secured an opportunity at Huawei after facing rejections. A story of persistence, growth, and preparation.",
      icon: Lightbulb,
      tags: ["Career", "Success Story", "Huawei", "Persistence"],
      category: "Blog Post",
      status: "Published", 
      links: {
        demo: "https://ayamgenerationalth.wixsite.com/agt-tech/post/from-two-rejections-to-huawei-how-i-turned-failure-into-fuel"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Published": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Live": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group h-full flex flex-col">
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
                <CardTitle className="text-lg mb-2 line-clamp-2">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mb-3">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm line-clamp-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 min-h-[60px]">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                 {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.links.github && project.links.github !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.links.github, '_blank')}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && project.links.demo !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.links.demo, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {(project.links as any).youtube && (project.links as any).youtube !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open((project.links as any).youtube, '_blank')}>
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
          <Button size="lg" className="px-8 py-3 glow-effect" onClick={() => window.open('https://github.com/Ayamgenerationalthinker', '_blank')}>
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};