import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  sender: "user" | "contact";
  originalText: string;
  translatedText: string;
  timestamp: string;
  accuracy: number;
  sentiment: "positive" | "neutral" | "negative";
}

interface ChatMessageProps {
  message: Message;
  userLanguage: string;
}

const ChatMessage = ({ message, userLanguage }: ChatMessageProps) => {
  const { toast } = useToast();
  const isUser = message.sender === "user";

  const playAudio = (text: string) => {
    toast({
      title: "Playing audio",
      description: "Text-to-speech started",
    });
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-500";
      case "negative":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}>
      <div className={`max-w-[70%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-2`}>
        {/* Original Message */}
        <div
          className={`p-4 rounded-2xl ${
            isUser
              ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-br-sm"
              : "bg-card border border-border rounded-bl-sm"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.originalText}</p>
        </div>

        {/* Translation */}
        <div className="flex items-start gap-2 w-full">
          <div className="flex-1 p-3 rounded-lg bg-muted/50 border border-border/50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-muted-foreground">Translation</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {message.accuracy}% accurate
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => playAudio(message.translatedText)}
                >
                  <Volume2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-foreground/90">{message.translatedText}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{message.timestamp}</span>
          <span>•</span>
          <span className={getSentimentColor(message.sentiment)}>
            {message.sentiment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
