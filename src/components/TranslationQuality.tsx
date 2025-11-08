import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, Target } from "lucide-react";

const TranslationQuality = () => {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-primary" />
        Translation Quality
      </h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Accuracy</span>
            <span className="text-sm font-semibold text-primary">97%</span>
          </div>
          <Progress value={97} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Speed
            </span>
            <span className="text-sm font-semibold text-accent">0.8s</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Target className="h-3 w-3" />
              Context Match
            </span>
            <span className="text-sm font-semibold text-secondary">95%</span>
          </div>
          <Progress value={95} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default TranslationQuality;
