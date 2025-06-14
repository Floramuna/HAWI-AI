import { Button } from "@/components/ui/button";
import { Brain, Cpu, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-royal-purple via-deep-blue to-sky-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-32 h-32 bg-sky-blue/20 rounded-full blur-xl animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gold/30 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Brain className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">
              AI
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gold to-sky-blue bg-clip-text text-transparent leading-tight">
              HAWI-AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-blue">
              Your Smart DeFi Knowledge Companion
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Powered by ICP + Motoko + LLM Canisters
            </p>
          </div>
          
          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Cpu className="w-8 h-8 text-gold mb-2" />
              <p className="text-sm font-medium">Fully On-Chain AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Shield className="w-8 h-8 text-sky-blue mb-2" />
              <p className="text-sm font-medium">No External APIs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Zap className="w-8 h-8 text-gold mb-2" />
              <p className="text-sm font-medium">DeFi Learning Made Easy</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              onClick={handleStartLearning}
              size="lg" 
              className="bg-gold text-black hover:bg-gold-light font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Learning DeFi
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
