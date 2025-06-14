import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Lock, MessageSquare, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Q&A",
      description: "Ask complex DeFi questions in plain English and get expert-level explanations.",
      gradient: "from-sky-blue to-deep-blue"
    },
    {
      icon: TrendingUp,
      title: "Personalized Learning Paths",
      description: "Tailored educational journeys based on your current knowledge and goals.",
      gradient: "from-royal-purple to-deep-blue"
    },
    {
      icon: Bot,
      title: "On-Chain Portfolio Education",
      description: "Learn about DeFi strategies through simulated portfolio management.",
      gradient: "from-gold to-royal-purple"
    },
    {
      icon: Lock,
      title: "Fully Decentralized",
      description: "No OpenAI or third-party APIs — runs natively on the Internet Computer.",
      gradient: "from-deep-blue to-sky-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-royal-purple text-white px-4 py-2 text-sm font-semibold mb-6">
            Our Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-royal-purple">HAWI-AI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A decentralized AI Copilot for DeFi learners, powered entirely by Internet Computer's 
            LLM canisters for maximum privacy, security, and reliability.
          </p>
        </div>

        {/* Main Solution Card */}
        <div className="bg-gradient-to-br from-royal-purple via-deep-blue to-sky-blue rounded-3xl p-1 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-royal-purple to-deep-blue p-3 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Decentralized AI Copilot
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  HAWI-AI leverages the Internet Computer's powerful LLM canisters to provide 
                  intelligent, context-aware assistance for DeFi learning — all without relying 
                  on centralized services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-green-700 font-semibold">✅ On-Chain Processing</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-blue-700 font-semibold">✅ No External APIs</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="text-purple-700 font-semibold">✅ Complete Privacy</div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="text-yellow-700 font-semibold">✅ Cost Efficient</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="text-sky-blue text-sm font-mono">user@hawi-ai:~$</div>
                  <div className="text-white mt-2">What is yield farming and how does it work?</div>
                </div>
                <div className="bg-royal-purple/20 rounded-lg p-4 border border-royal-purple/30">
                  <div className="text-gold text-sm font-semibold mb-2">HAWI-AI Response:</div>
                  <div className="text-gray-300 text-sm">
                    Yield farming is a DeFi strategy where you provide liquidity to protocols 
                    in exchange for rewards. Let me break down the key concepts...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-1`}>
                <CardContent className="bg-white m-0 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
