import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      
      {/* Projects Preview Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore My <span className="text-gradient-animate">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover my work in AI, software engineering, and research—each project 
            representing innovation and technical excellence.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 glow-effect"
            onClick={() => navigate('/projects')}
          >
            <Code className="w-5 h-5 mr-2" />
            View My Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient-animate">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my professional timeline, achievements, and the experiences that 
            have shaped my expertise in technology and AI.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-3"
            onClick={() => navigate('/experience')}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View My Experience
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
