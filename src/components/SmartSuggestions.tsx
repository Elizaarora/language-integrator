import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const SmartSuggestions = () => {
  const suggestions = [
    { text: "नमस्ते, आप कैसे हैं?", category: "greeting" },
    { text: "मुझे समझ नहीं आया", category: "clarification" },
    { text: "क्या आप दोहरा सकते हैं?", category: "request" },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-accent" />
        Smart Suggestions
      </h3>
      
      <div className="space-y-2">
        {suggestions.map((suggestion, idx) => (
          <div 
            key={idx}
            className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors border border-border/50"
          >
            <p className="text-sm mb-1">{suggestion.text}</p>
            <Badge variant="secondary" className="text-xs">
              {suggestion.category}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SmartSuggestions;
