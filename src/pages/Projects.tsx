import { Navigation } from "@/components/Navigation";
import { Projects as ProjectsComponent } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ProjectsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;