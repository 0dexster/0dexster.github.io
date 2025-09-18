import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Plus } from "lucide-react";
import PropertyManager from "./admin/PropertyManager";
import LocationManager from "./admin/LocationManager";
import NewsletterManager from "./admin/NewsletterManager";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal">
          <Settings className="h-4 w-4 mr-2" />
          Panel Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-luxury-charcoal flex items-center">
            <Settings className="h-5 w-5 mr-2 text-luxury-gold" />
            Panel Administracyjny - Premium Partners
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="properties" className="h-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="properties">Nieruchomości</TabsTrigger>
            <TabsTrigger value="locations">Lokalizacje</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="settings">Ustawienia</TabsTrigger>
            <TabsTrigger value="analytics">Statystyki</TabsTrigger>
          </TabsList>
          
          <div className="mt-4 h-[70vh] overflow-y-auto">
            <TabsContent value="properties" className="space-y-4">
              <PropertyManager />
            </TabsContent>
            
            <TabsContent value="locations" className="space-y-4">
              <LocationManager />
            </TabsContent>
            
            <TabsContent value="newsletter" className="space-y-4">
              <NewsletterManager />
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <div className="p-6 bg-luxury-light rounded-lg">
                <h3 className="text-lg font-semibold text-luxury-charcoal mb-4">Ustawienia Globalne</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-luxury-gold/20 rounded-lg">
                    <h4 className="font-medium mb-2">Kontakt i Dane Firmy</h4>
                    <p className="text-sm text-muted-foreground">Zarządzaj danymi kontaktowymi, numerami telefonów, adresami biur</p>
                  </div>
                  <div className="p-4 border border-luxury-gold/20 rounded-lg">
                    <h4 className="font-medium mb-2">Ustawienia SEO</h4>
                    <p className="text-sm text-muted-foreground">Meta opisy, słowa kluczowe, ustawienia dla wyszukiwarek</p>
                  </div>
                  <div className="p-4 border border-luxury-gold/20 rounded-lg">
                    <h4 className="font-medium mb-2">Integracje</h4>
                    <p className="text-sm text-muted-foreground">Google Analytics, Facebook Pixel, inne integracje</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-4">
              <div className="p-6 bg-luxury-light rounded-lg">
                <h3 className="text-lg font-semibold text-luxury-charcoal mb-4">Statystyki i Analizy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-medium text-luxury-charcoal">Odwiedziny strony</h4>
                    <p className="text-2xl font-bold text-luxury-gold">1,234</p>
                    <p className="text-sm text-muted-foreground">W tym miesiącu</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-medium text-luxury-charcoal">Zapytania o nieruchomości</h4>
                    <p className="text-2xl font-bold text-luxury-gold">56</p>
                    <p className="text-sm text-muted-foreground">W tym miesiącu</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-medium text-luxury-charcoal">Najpopularniejsze</h4>
                    <p className="text-sm font-medium text-luxury-charcoal">Apartamenty Warszawa</p>
                    <p className="text-sm text-muted-foreground">127 wyświetleń</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;