import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Zap } from "lucide-react";

const Login = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      
      if (await client.isAuthenticated()) {
        navigate("/dashboard");
      }
    };
    initAuth();
  }, [navigate]);

  const handleLogin = async () => {
    if (!authClient) return;
    
    setIsLoading(true);
    try {
      await authClient.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          navigate("/dashboard");
        },
        onError: (error) => {
          console.error("Login failed:", error);
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Authentication error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple via-deep-blue to-sky-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-32 h-32 bg-sky-blue/20 rounded-full blur-xl animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gold/30 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center text-white space-y-8 max-w-2xl mx-auto">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Brain className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">
              AI
            </div>
          </div>
          
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold to-sky-blue bg-clip-text text-transparent">
              Welcome to HAWI-AI
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto">
              Your decentralized AI companion for DeFi learning. Secure login with Internet Identity.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Shield className="w-6 h-6 text-sky-blue mb-2 mx-auto" />
              <p className="text-sm">Secure Identity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Brain className="w-6 h-6 text-gold mb-2 mx-auto" />
              <p className="text-sm">AI Learning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Zap className="w-6 h-6 text-sky-blue mb-2 mx-auto" />
              <p className="text-sm">On-Chain</p>
            </div>
          </div>
          
          {/* Login Button */}
          <div className="pt-8">
            <Button 
              onClick={handleLogin}
              disabled={isLoading || !authClient}
              size="lg"
              className="bg-gold text-black hover:bg-gold-light font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? "Connecting..." : "Login with Internet Identity"}
            </Button>
          </div>
          
          <p className="text-sm text-white/60 max-w-md">
            Internet Identity provides secure, anonymous authentication without passwords or personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
