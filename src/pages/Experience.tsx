import { Navigation } from "@/components/Navigation";
import { Experience as ExperienceComponent } from "@/components/Experience";
import { Footer } from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ExperienceComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;