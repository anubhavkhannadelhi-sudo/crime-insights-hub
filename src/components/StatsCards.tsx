import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, Shield } from "lucide-react";

const stats = [
  {
    label: "Total Crimes",
    value: "12,847",
    change: "+12%",
    trend: "up",
    icon: AlertTriangle,
    color: "text-chart-3",
  },
  {
    label: "Solved Cases",
    value: "8,234",
    change: "+8%",
    trend: "up",
    icon: Shield,
    color: "text-chart-4",
  },
  {
    label: "High Risk Areas",
    value: "23",
    change: "-15%",
    trend: "down",
    icon: TrendingDown,
    color: "text-accent",
  },
  {
    label: "Prediction Accuracy",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.label} 
            className="glass-effect p-6 animate-scale-in hover-scale"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className={`text-sm flex items-center gap-1 ${
                  stat.trend === "up" ? "text-chart-4" : "text-accent"
                }`}>
                  {stat.trend === "up" ? "↑" : "↓"} {stat.change}
                </p>
              </div>
              <Icon className={`w-10 h-10 ${stat.color}`} />
            </div>
          </Card>
        );
      })}
    </div>
  );
};
