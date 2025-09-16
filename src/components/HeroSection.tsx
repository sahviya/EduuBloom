import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroLogo from "@/assets/edubloom-logo-new.png";

interface HeroSectionProps {
  onKnowMore: () => void;
}

export const HeroSection = ({ onKnowMore }: HeroSectionProps) => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/20 via-background to-cyan-blue/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-leaf rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-brain rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 shadow-glow">
              <img 
                src={heroLogo} 
                alt="EduBloom Logo" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EduBloom
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-teal-light mb-8 font-medium">
            "The classroom that knows you."
          </p>
          
          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ask doubts to peers and get instant replies. Connect with fellow learners, 
              track your progress, and master any subject with collaborative support 
              that helps you grow faster.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => navigate("/auth")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={onKnowMore}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};