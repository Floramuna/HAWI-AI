// Sidebar.tsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Brain,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Settings,
  HelpCircle,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get active route from current location
  const currentPath = location.pathname;

  const menuItems = [
    { icon: MessageCircle, label: "Chat", route: "/chat" },
    { icon: BarChart, label: "Charting", route: "/charting" },
    { icon: BookOpen, label: "Learning Paths", route: "/learning-paths" },
    { icon: TrendingUp, label: "Portfolio", route: "/portfolio" },
    { icon: HelpCircle, label: "Glossary", route: "/glossary" },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  const handleQuickStart = () => {
    navigate("/chat");
    // You can add logic here to show example questions in the chat
  };

  const exampleQuestions = [
    "What is yield farming?",
    "Explain liquidity pools",
    "How do I assess DeFi risks?",
    "What are the benefits of staking?",
  ];

  return (
    <div
      className={cn(
        "bg-card border-r border-border transition-all duration-300 h-full flex flex-col",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          {isOpen && (
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HAWI-AI
              </h1>
              <p className="text-xs text-muted-foreground">DeFi Companion</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const isActive = currentPath.startsWith(item.route);
            return (
              <Button
                key={item.label}
                variant={isActive ? "default" : "ghost"}
                onClick={() => handleNavigation(item.route)}
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  !isOpen && "px-2",
                  isActive && "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg",
                  !isActive && "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {isOpen && <span className="ml-3">{item.label}</span>}
              </Button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        {isOpen && (
          <div className="mt-auto p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-200/20">
            <div className="flex items-center mb-2">
              <Lightbulb className="w-4 h-4 mr-2 text-blue-600" />
              <h3 className="font-medium text-sm">Quick Start</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Try these example questions:
            </p>
            <div className="space-y-2 mb-3">
              {exampleQuestions.map((question, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="w-full text-xs border-blue-200 text-blue-600 hover:bg-blue-50 text-left justify-start truncate"
                  onClick={() => {
                    navigate("/chat");
                    // You would typically pass the question to your chat component here
                    // For example: setInitialQuestion(question);
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;