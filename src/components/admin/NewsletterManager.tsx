import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Download, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribeDate: string;
  status: "active" | "unsubscribed";
  source: string;
}

const NewsletterManager = () => {
  const { toast } = useToast();
  const [subscribers] = useState<NewsletterSubscriber[]>([
    {
      id: "1",
      email: "jan.kowalski@example.com",
      subscribeDate: "2024-01-15",
      status: "active",
      source: "Footer"
    },
    {
      id: "2", 
      email: "anna.nowak@example.com",
      subscribeDate: "2024-01-20",
      status: "active",
      source: "Contact Form"
    },
    {
      id: "3",
      email: "piotr.wisniewski@example.com", 
      subscribeDate: "2024-01-25",
      status: "unsubscribed",
      source: "Footer"
    },
    {
      id: "4",
      email: "maria.dabrowska@example.com",
      subscribeDate: "2024-02-01",
      status: "active", 
      source: "Newsletter Popup"
    }
  ]);

  const activeSubscribers = subscribers.filter(sub => sub.status === "active").length;
  const unsubscribed = subscribers.filter(sub => sub.status === "unsubscribed").length;

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Email,Data subskrypcji,Status,Źródło\n"
      + subscribers.map(sub => 
          `${sub.email},${sub.subscribeDate},${sub.status},${sub.source}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Eksport zakończony",
      description: "Lista subskrybentów została wyeksportowana do pliku CSV",
    });
  };

  const handleSendNewsletter = () => {
    toast({
      title: "Newsletter wysłany",
      description: `Newsletter został wysłany do ${activeSubscribers} aktywnych subskrybentów`,
    });
  };

  const getStatusColor = (status: NewsletterSubscriber["status"]) => {
    return status === "active" 
      ? "bg-green-100 text-green-800" 
      : "bg-red-100 text-red-800";
  };

  const getStatusLabel = (status: NewsletterSubscriber["status"]) => {
    return status === "active" ? "Aktywny" : "Wypisany";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-luxury-charcoal">Zarządzanie Newsletter</h2>
        <div className="flex space-x-2">
          <Button onClick={handleSendNewsletter} className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
            <Mail className="h-4 w-4 mr-2" />
            Wyślij Newsletter
          </Button>
          <Button onClick={handleExport} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Eksportuj CSV
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-luxury-gold">{subscribers.length}</div>
            <p className="text-sm text-muted-foreground">Łączna liczba subskrybentów</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">{activeSubscribers}</div>
            <p className="text-sm text-muted-foreground">Aktywni subskrybenci</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">{unsubscribed}</div>
            <p className="text-sm text-muted-foreground">Wypisani</p>
          </CardContent>
        </Card>
      </div>

      {/* Subscribers List */}
      <div className="space-y-3">
        {subscribers.map((subscriber) => (
          <Card key={subscriber.id} className="hover:shadow-elegant transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-luxury-charcoal">{subscriber.email}</span>
                    <Badge className={getStatusColor(subscriber.status)}>
                      {getStatusLabel(subscriber.status)}
                    </Badge>
                    <Badge variant="outline">
                      {subscriber.source}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Subskrypcja: {new Date(subscriber.subscribeDate).toLocaleDateString('pl-PL')}
                  </p>
                </div>
                <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsletterManager;