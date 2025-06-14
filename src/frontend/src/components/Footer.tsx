import { Brain, Github, Twitter, Globe, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Architecture", href: "#architecture" },
      { name: "Use Cases", href: "#use-cases" },
      { name: "Demo", href: "#demo" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "DeFi Guides", href: "#" },
      { name: "Tutorials", href: "#" }
    ],
    community: [
      { name: "Discord", href: "#" },
      { name: "Telegram", href: "#" },
      { name: "Forums", href: "#" },
      { name: "Blog", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-royal-purple to-sky-blue p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">HAWI-AI</h3>
                <p className="text-gold text-sm">DeFi Knowledge Companion</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your smart, decentralized AI copilot for DeFi learning. Powered by Internet Computer's 
              LLM canisters for maximum privacy and performance.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:col-span-4">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Product</h4>
              <ul className="space-y-3">
                {links.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Resources</h4>
              <ul className="space-y-3">
                {links.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Community</h4>
              <ul className="space-y-3">
                {links.community.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-royal-purple/20 to-sky-blue/20 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-bold">Stay Updated</h4>
            <p className="text-gray-300 max-w-md mx-auto">
              Get the latest updates on HAWI-AI development and DeFi education insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-black hover:bg-gold-light font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 HAWI-AI. All rights reserved. Built on Internet Computer.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
