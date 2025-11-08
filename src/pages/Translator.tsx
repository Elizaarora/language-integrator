import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, Video, History, FileText, Sparkles, Mic, Zap, 
  Globe, Volume2, Send, Settings, TrendingUp, Clock, Target,
  Brain, Shield, Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ChatMessage from "@/components/ChatMessage";
import TranslationQuality from "@/components/TranslationQuality";
import SmartSuggestions from "@/components/SmartSuggestions";
import SessionStats from "@/components/SessionStats";

const indianLanguages = [
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
];

const Translator = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [userLanguage, setUserLanguage] = useState("hi");
  const [contactLanguage] = useState("bn");
  const [messages] = useState<Array<{
    id: number;
    sender: "user" | "contact";
    originalText: string;
    translatedText: string;
    timestamp: string;
    accuracy: number;
    sentiment: "positive" | "neutral" | "negative";
  }>>([
    {
      id: 1,
      sender: "contact" as const,
      originalText: "হ্যালো! আপনি কেমন আছেন?",
      translatedText: "Hello! How are you?",
      timestamp: "10:30 AM",
      accuracy: 98,
      sentiment: "positive" as const
    },
    {
      id: 2,
      sender: "user" as const,
      originalText: "मैं अच्छा हूँ, धन्यवाद!",
      translatedText: "আমি ভালো আছি, ধন্যবাদ!",
      timestamp: "10:31 AM",
      accuracy: 96,
      sentiment: "positive" as const
    },
    {
      id: 3,
      sender: "contact" as const,
      originalText: "আজ আবহাওয়া খুব সুন্দর।",
      translatedText: "Today the weather is very nice.",
      timestamp: "10:32 AM",
      accuracy: 97,
      sentiment: "neutral" as const
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      toast({
        title: "Message sent",
        description: "Translation in progress...",
      });
      setMessage("");
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording stopped" : "Recording started",
      description: isRecording ? "Processing audio..." : "Speak now",
    });
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-background via-background to-primary/5">
      {/* Left Sidebar */}
      <div className="w-72 border-r border-border bg-card/50 backdrop-blur-sm flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Language Bridge
          </h2>
        </div>

        <ScrollArea className="flex-1 p-4">
          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-3" size="sm">
                <MessageCircle className="h-4 w-4" />
                <span>New Chat</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" size="sm">
                <Video className="h-4 w-4" />
                <span>Video Call</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" size="sm">
                <History className="h-4 w-4" />
                <span>History</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3" size="sm">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </Button>
            </div>
          </div>

          {/* AI Features */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              AI Features
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg bg-primary/10">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm">AI Context</span>
                </div>
                <Badge variant="secondary" className="text-xs">ON</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                <div className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  <span className="text-sm">Accent Adapt</span>
                </div>
                <Badge variant="outline" className="text-xs">OFF</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-accent/10">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm">Fast Mode</span>
                </div>
                <Badge variant="secondary" className="text-xs">ON</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Cultural Tips</span>
                </div>
                <Badge variant="outline" className="text-xs">OFF</Badge>
              </div>
            </div>
          </div>

          {/* Recent Chats */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Recent Chats
            </h3>
            <div className="space-y-2">
              {["Rahul Sharma", "Priya Patel", "Amit Kumar"].map((name, idx) => (
                <div key={idx} className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{name}</p>
                      <p className="text-xs text-muted-foreground truncate">Last message...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Center Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b border-border bg-card/80 backdrop-blur-sm flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-semibold">
              R
            </div>
            <div>
              <h3 className="font-semibold">Rahul Sharma</h3>
              <p className="text-xs text-muted-foreground">
                Speaking {indianLanguages.find(l => l.code === contactLanguage)?.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} userLanguage={userLanguage} />
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border bg-card/80 backdrop-blur-sm p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Select value={userLanguage} onValueChange={setUserLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {indianLanguages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name} ({lang.native})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Badge variant="outline" className="gap-2">
                <Sparkles className="h-3 w-3" />
                AI Enhanced
              </Badge>
            </div>
            
            <div className="flex items-center gap-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Type in ${indianLanguages.find(l => l.code === userLanguage)?.name}...`}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button 
                variant={isRecording ? "destructive" : "outline"} 
                size="icon"
                onClick={toggleRecording}
                className={isRecording ? "animate-pulse" : ""}
              >
                <Mic className="h-5 w-5" />
              </Button>
              <Button 
                size="icon"
                onClick={handleSend}
                className="gradient-primary"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l border-border bg-card/50 backdrop-blur-sm flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Insights
          </h2>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            <TranslationQuality />
            <SmartSuggestions />
            <SessionStats />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Translator;
