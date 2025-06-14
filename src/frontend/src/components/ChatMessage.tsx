import { Brain, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex space-x-3",
      message.isUser ? "justify-end" : "justify-start"
    )}>
      {!message.isUser && (
        <div className="bg-gradient-primary p-2 rounded-full w-8 h-8 flex items-center justify-center">
          <Brain className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-lg p-4",
        message.isUser 
          ? "bg-gradient-primary text-white" 
          : "bg-card border border-border"
      )}>
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className={cn(
          "text-xs mt-2",
          message.isUser ? "text-white/70" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {message.isUser && (
        <div className="bg-muted p-2 rounded-full w-8 h-8 flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
