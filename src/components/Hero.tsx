import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Database } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,43,226,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center gap-6">
            <Shield className="w-12 h-12 text-primary animate-pulse" />
            <TrendingUp className="w-12 h-12 text-accent" />
            <Database className="w-12 h-12 text-chart-3" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-chart-3">
            Crime Analysis & Prediction
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Harness the power of data to understand crime patterns, predict trends, and make informed decisions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary glow-effect text-lg px-8"
              onClick={() => scrollToSection("dashboard")}
            >
              View Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              onClick={() => scrollToSection("upload")}
            >
              Upload Dataset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
