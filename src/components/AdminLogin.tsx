import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AdminPanel from "./AdminPanel";

const AdminLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsOpen(false);
      setUsername("");
      setPassword("");
      toast({
        title: "Zalogowano pomyślnie",
        description: "Witaj w panelu administracyjnym",
      });
    } else {
      toast({
        title: "Błędne dane logowania",
        description: "Sprawdź login i hasło",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Wylogowano",
      description: "Do zobaczenia!",
    });
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <AdminPanel />
        <Button
          size="sm"
          variant="ghost"
          onClick={handleLogout}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Wyloguj
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4 mr-2" />
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-luxury-charcoal">Panel Administratora</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="admin-username">Login</Label>
            <Input
              id="admin-username"
              type="text"
              placeholder="Wpisz login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="admin-password">Hasło</Label>
            <Input
              id="admin-password"
              type="password"
              placeholder="Wpisz hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
            Zaloguj się
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;