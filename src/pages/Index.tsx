import { Hero } from "@/components/Hero";
import { StatsCards } from "@/components/StatsCards";
import { CrimeCharts } from "@/components/CrimeCharts";
import { DataUpload } from "@/components/DataUpload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="dashboard" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Live Crime Analytics
          </h2>
          
          <StatsCards />
          <CrimeCharts />
        </div>
      </section>

      <DataUpload />

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Crime Analysis & Prediction Platform • Built with data-driven insights
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
