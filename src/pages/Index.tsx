import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onKnowMore={scrollToFeatures} />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
