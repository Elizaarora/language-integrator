import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, Award, Shield } from "lucide-react";

const SessionStats = () => {
  const stats = [
    { label: "Messages", value: "42", icon: MessageCircle, color: "text-primary" },
    { label: "Duration", value: "23m", icon: Clock, color: "text-accent" },
    { label: "Accuracy", value: "97%", icon: Award, color: "text-secondary" },
    { label: "Privacy", value: "E2E", icon: Shield, color: "text-green-500" },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4">Session Stats</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className="p-3 rounded-lg bg-muted/50 border border-border/50"
          >
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className={`h-3 w-3 ${stat.color}`} />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SessionStats;
