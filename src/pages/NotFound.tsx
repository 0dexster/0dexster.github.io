import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-luxury-light">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="h-8 w-8 text-luxury-charcoal" />
          </div>
          <h1 className="text-6xl font-light text-luxury-charcoal mb-4">404</h1>
          <p className="text-xl text-luxury-gray mb-6">Strona nie została znaleziona</p>
          <p className="text-luxury-gray mb-8">
            Przepraszamy, ale szukana strona nie istnieje. 
            Możliwe, że została przeniesiona lub usunięta.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć
          </Button>
          <Button 
            onClick={() => window.location.href = "/"} 
            className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white"
          >
            <Home className="mr-2 h-4 w-4" />
            Strona główna
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
