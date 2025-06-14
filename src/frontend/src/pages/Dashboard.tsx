import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";
import ChatInterface from "@/components/ChatInterface";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

const Dashboard = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      
      const authenticated = await client.isAuthenticated();
      if (!authenticated) {
        navigate("/login");
      } else {
        setIsAuthenticated(true);
      }
    };
    initAuth();
  }, [navigate]);

  const handleLogout = async () => {
    if (authClient) {
      await authClient.logout();
      navigate("/");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-royal-purple to-deep-blue flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold mx-auto mb-4"></div>
          <p>Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <TopBar onLogout={handleLogout} />
        <main className="flex-1 overflow-hidden">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
