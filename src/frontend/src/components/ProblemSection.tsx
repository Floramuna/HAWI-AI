import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: Users,
      title: "DeFi Complexity",
      description: "DeFi is overwhelming for beginners with steep learning curves and technical jargon.",
      color: "text-red-400"
    },
    {
      icon: Clock,
      title: "Scattered Information",
      description: "Information is spread across platforms, often outdated or confusing for learners.",
      color: "text-orange-400"
    },
    {
      icon: DollarSign,
      title: "Centralized AI Risk",
      description: "Existing AI tools rely on centralized APIs with privacy risks, costs, and downtime.",
      color: "text-yellow-400"
    },
    {
      icon: AlertTriangle,
      title: "Lack of Web3 Education",
      description: "No educational assistants tailored specifically to Web3 and DeFi on-chain.",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-royal-purple">HAWI-AI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The DeFi landscape is complex and fragmented. Current solutions fall short of providing 
            accessible, secure, and comprehensive education for Web3 learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-royal-purple bg-white"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gray-100 p-4 rounded-full group-hover:bg-royal-purple/10 transition-colors duration-300">
                    <problem.icon className={`w-8 h-8 ${problem.color} group-hover:text-royal-purple transition-colors duration-300`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-royal-purple transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-royal-purple to-deep-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              It's time for a <span className="text-gold">decentralized solution</span>
            </h3>
            <p className="text-lg opacity-90">
              Enter HAWI-AI: Your trustless, on-chain DeFi learning companion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
