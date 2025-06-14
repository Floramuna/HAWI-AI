import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowRight, Brain, Database, Globe, Monitor, Shield, User } from "lucide-react";

const ArchitectureSection = () => {
  const architectureLayers = [
    {
      title: "Frontend Layer",
      subtitle: "React + Tailwind + TypeScript",
      icon: Monitor,
      color: "sky-blue",
      items: ["Chat UI", "Topic Explorer", "Portfolio Simulator", "Learning Dashboard"]
    },
    {
      title: "Backend Canister",
      subtitle: "Motoko Smart Contracts",
      icon: Database,
      color: "royal-purple", 
      items: ["Message History", "Chat Session Logs", "User Preferences", "Learning Progress"]
    },
    {
      title: "LLM Canister",
      subtitle: "On-Chain AI Processing",
      icon: Brain,
      color: "gold",
      items: ["Natural Language Processing", "DeFi Knowledge Base", "Response Generation", "Context Management"]
    },
    {
      title: "Identity Layer",
      subtitle: "Internet Identity (Optional)",
      icon: Shield,
      color: "deep-blue",
      items: ["User Authentication", "Personalization", "Progress Tracking", "Privacy Protection"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-deep-blue to-royal-purple text-white px-4 py-2 text-sm font-semibold mb-6">
            System Architecture
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on <span className="text-royal-purple">Internet Computer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A fully decentralized architecture leveraging ICP's native capabilities for maximum 
            security, performance, and user privacy.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8 text-gold">Component Flow</h3>
            
            <div className="flex flex-col items-center space-y-6">
              {/* User Interface */}
              <div className="bg-sky-blue/20 border border-sky-blue/30 rounded-xl p-4 w-full max-w-sm text-center">
                <User className="w-8 h-8 text-sky-blue mx-auto mb-2" />
                <div className="font-semibold">User Interface (React)</div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-gray-400" />
              
              {/* Backend Canister */}
              <div className="bg-royal-purple/20 border border-royal-purple/30 rounded-xl p-4 w-full max-w-sm text-center">
                <Database className="w-8 h-8 text-royal-purple mx-auto mb-2" />
                <div className="font-semibold">Motoko Backend Canister</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                <div className="text-gold font-semibold">↔</div>
                <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
              </div>
              
              {/* LLM Canister */}
              <div className="bg-gold/20 border border-gold/30 rounded-xl p-4 w-full max-w-sm text-center">
                <Brain className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="font-semibold">LLM Canister</div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-gray-400" />
              
              {/* Storage */}
              <div className="bg-deep-blue/20 border border-deep-blue/30 rounded-xl p-4 w-full max-w-sm text-center">
                <Globe className="w-8 h-8 text-deep-blue mx-auto mb-2" />
                <div className="font-semibold">Chat History Storage</div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-gray-400" />
              
              {/* Display */}
              <div className="bg-emerald-400/20 border border-emerald-400/30 rounded-xl p-4 w-full max-w-sm text-center">
                <Monitor className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="font-semibold">Frontend Display</div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-300">
              <p className="text-lg">All logic and AI processing remains within ICP's ecosystem</p>
            </div>
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureLayers.map((layer, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-royal-purple"
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-xl bg-${layer.color}/10 w-fit group-hover:bg-${layer.color}/20 transition-colors duration-300`}>
                  <layer.icon className={`w-7 h-7 text-${layer.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-royal-purple transition-colors duration-300">
                  {layer.title}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium">{layer.subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {layer.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${layer.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Technology Stack
          </h3>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-sky-blue/10 rounded-xl p-4 mb-4">
                  <Monitor className="w-8 h-8 text-sky-blue mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>React</div>
                  <div>TypeScript</div>
                  <div>Vite</div>
                  <div>Tailwind</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-royal-purple/10 rounded-xl p-4 mb-4">
                  <Database className="w-8 h-8 text-royal-purple mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Motoko</div>
                  <div>dfx</div>
                  <div>LLM Canister</div>
                  <div>ICP</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gold/10 rounded-xl p-4 mb-4">
                  <Shield className="w-8 h-8 text-gold mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Identity</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Internet Identity</div>
                  <div>Optional</div>
                  <div>Personalization</div>
                  <div>Privacy</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-deep-blue/10 rounded-xl p-4 mb-4">
                  <Globe className="w-8 h-8 text-deep-blue mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Hosting</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Internet Computer</div>
                  <div>ICP</div>
                  <div>Decentralized</div>
                  <div>Scalable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
