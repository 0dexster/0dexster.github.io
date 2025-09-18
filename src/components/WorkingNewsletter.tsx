import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const WorkingNewsletter = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Błąd",
        description: "Proszę podać adres email",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Błąd",
        description: "Proszę podać prawidłowy adres email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would send this to your backend/database
      console.log("Newsletter subscription:", { email, timestamp: new Date().toISOString() });
      
      toast({
        title: "Dziękujemy!",
        description: "Pomyślnie zapisano Cię do newslettera",
      });
      
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubscribe} className="space-y-3">
      <Input 
        type="email" 
        placeholder={t('footer.newsletter.placeholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        disabled={isLoading}
      />
      <Button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold"
      >
        {isLoading ? "Zapisywanie..." : t('footer.subscribe')}
      </Button>
    </form>
  );
};

export default WorkingNewsletter;