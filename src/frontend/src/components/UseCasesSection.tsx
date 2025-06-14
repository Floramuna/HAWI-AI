import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Bot, GraduationCap, Lock, PieChart, Users } from "lucide-react";

const UseCasesSection = () => {
  const navigate = useNavigate();
  
    const handleStartLearning = () => {
      navigate("/login");
    };
  const useCases = [
    {
      icon: BookOpen,
      title: "DeFi Education Hub",
      description: "Learn DeFi concepts with friendly, comprehensive explanations tailored to your level",
      features: ["Beginner to advanced content", "Interactive learning", "Real-world examples", "Progress tracking"],
      gradient: "from-sky-blue to-deep-blue",
      iconBg: "bg-sky-blue"
    },
    {
      icon: Bot,
      title: "On-Chain Study Assistant", 
      description: "Perfect companion for Web3 academies and educational institutions",
      features: ["Curriculum integration", "Student progress", "Institutional tools", "Custom content"],
      gradient: "from-royal-purple to-deep-blue",
      iconBg: "bg-royal-purple"
    },
    {
      icon: Lock,
      title: "Secure Knowledge Base",
      description: "Completely decentralized learning environment with maximum privacy",
      features: ["Zero data tracking", "On-chain processing", "Private sessions", "Trustless operation"],
      gradient: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-500"
    },
    {
      icon: PieChart,
      title: "Portfolio Learning Lab",
      description: "Simulated portfolio management for hands-on DeFi strategy education",
      features: ["Risk-free simulation", "Strategy testing", "Performance analysis", "Educational insights"],
      gradient: "from-gold to-orange-500",
      iconBg: "bg-gold"
    },
    {
      icon: GraduationCap,
      title: "Web3 Academy Integration",
      description: "Seamlessly integrate with existing educational platforms and curricula",
      features: ["API compatibility", "Custom branding", "Assessment tools", "Analytics dashboard"],
      gradient: "from-purple-500 to-royal-purple",
      iconBg: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Foster collaborative learning environments for DeFi communities",
      features: ["Group discussions", "Shared insights", "Community challenges", "Peer learning"],
      gradient: "from-blue-500 to-sky-blue",
      iconBg: "bg-blue-500"
    }
  ];

  const benefits = [
    { icon: "🚀", title: "Ultra-fast responses", desc: "ICP's high-performance infrastructure" },
    { icon: "🔒", title: "Complete privacy", desc: "No data leaves the blockchain" },
    { icon: "💰", title: "Cost-effective", desc: "No API fees or subscription costs" },
    { icon: "🌍", title: "Always available", desc: "24/7 uptime on decentralized network" },
    { icon: "🎯", title: "DeFi-focused", desc: "Specialized knowledge for Web3" },
    { icon: "📈", title: "Continuously learning", desc: "Evolving with the DeFi ecosystem" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-gold to-royal-purple text-white px-4 py-2 text-sm font-semibold mb-6">
            Use Cases
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-royal-purple">DeFi Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From individual learners to educational institutions, HAWI-AI serves diverse needs 
            in the decentralized finance ecosystem.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${useCase.gradient} p-1`}>
                <CardContent className="bg-white m-0 p-6 h-full">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <div className={`inline-flex p-4 rounded-xl ${useCase.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {useCase.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-royal-purple to-sky-blue rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-royal-purple via-deep-blue to-sky-blue rounded-3xl p-8 text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-gold">HAWI-AI</span>?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Experience the future of decentralized education with unmatched benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center space-y-3">
                  <div className="text-3xl">{benefit.icon}</div>
                  <h4 className="text-lg font-bold text-gold">{benefit.title}</h4>
                  <p className="text-sm opacity-90">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button 
            onClick={handleStartLearning}
            className="bg-gold text-black hover:bg-gold-light font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Your DeFi Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
