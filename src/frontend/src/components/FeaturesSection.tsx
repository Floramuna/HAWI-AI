import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Bot, MessageCircle, PieChart, Shield } from "lucide-react";

const FeaturesSection = () => {
  const navigate = useNavigate();
  const handleStartLearning = () => {
    navigate("/login");
  };
  const features = [
    {
      icon: MessageCircle,
      title: "DeFi Chat Assistant",
      description: "Ask about tokens, protocols, risks, and concepts in natural language",
      details: ["Token analysis", "Protocol explanations", "Risk assessments", "Concept clarification"],
      color: "sky-blue",
      bgColor: "bg-sky-blue/10",
      borderColor: "border-sky-blue/30"
    },
    {
      icon: Bot,
      title: "On-Chain LLM",
      description: "Powered by Internet Computer LLM canister for maximum decentralization",
      details: ["ICP-native processing", "No external dependencies", "Ultra-low latency", "High performance"],
      color: "royal-purple",
      bgColor: "bg-royal-purple/10", 
      borderColor: "border-royal-purple/30"
    },
    {
      icon: BookOpen,
      title: "Smart Learning Mode",
      description: "Topic cards with curated AI-generated lessons tailored to your level",
      details: ["Personalized content", "Progressive difficulty", "Interactive cards", "Curated lessons"],
      color: "gold",
      bgColor: "bg-gold/10",
      borderColor: "border-gold/30"
    },
    {
      icon: PieChart,
      title: "Portfolio Companion",
      description: "Educational insights based on wallet data and portfolio simulation",
      details: ["Wallet analysis", "Portfolio insights", "Strategy suggestions", "Risk evaluation"],
      color: "deep-blue",
      bgColor: "bg-deep-blue/10",
      borderColor: "border-deep-blue/30"
    },
    {
      icon: Shield,
      title: "Private & Cost-Efficient",
      description: "No external API costs, tracking, or privacy concerns",
      details: ["Zero API costs", "Complete privacy", "No data tracking", "Fully autonomous"],
      color: "emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-royal-purple to-deep-blue text-white px-4 py-2 text-sm font-semibold mb-6">
            Key Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-royal-purple">DeFi Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to master DeFi, powered by cutting-edge on-chain AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${feature.bgColor} ${feature.borderColor} border-2 overflow-hidden`}
            >
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-3">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-${feature.color} to-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-royal-purple transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-${feature.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-royal-purple via-deep-blue to-sky-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to revolutionize your <span className="text-gold">DeFi learning</span>?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join the future of decentralized education with HAWI-AI's innovative on-chain learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
              onClick={handleStartLearning}
              className="bg-gold text-black hover:bg-gold-light font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button 
              onClick={handleStartLearning}
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
