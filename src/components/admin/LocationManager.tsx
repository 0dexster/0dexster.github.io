import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, MapPin, Building2, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Location {
  id: string;
  city: string;
  district: string;
  description: string;
  propertyCount: number;
  averagePrice: string;
  highlights: string[];
  image?: string;
}

const LocationManager = () => {
  const [locations, setLocations] = useState<Location[]>([
    {
      id: "1",
      city: "Warszawa",
      district: "Śródmieście",
      description: "Prestiżowa dzielnica w centrum stolicy z doskonałą infrastrukturą i komunikacją.",
      propertyCount: 15,
      averagePrice: "12,500",
      highlights: ["Metro", "Teatry", "Restauracje", "Biznes"]
    },
    {
      id: "2", 
      city: "Kraków",
      district: "Kazimierz",
      description: "Historyczna dzielnica z unikalnymi kamienicami i bogatą kulturą.",
      propertyCount: 8,
      averagePrice: "9,800",
      highlights: ["Stare Miasto", "Kultura", "Kawiarnie", "Historia"]
    },
    {
      id: "3",
      city: "Gdańsk", 
      district: "Długi Targ",
      description: "Nadmorska lokalizacja z dostępem do plaży i portowych atrakcji.",
      propertyCount: 12,
      averagePrice: "8,900",
      highlights: ["Morze", "Marina", "Stare Miasto", "Port"]
    }
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const [formData, setFormData] = useState({
    city: "",
    district: "",
    description: "",
    propertyCount: 0,
    averagePrice: "",
    highlights: [] as string[],
    image: ""
  });
  const [newHighlight, setNewHighlight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingLocation) {
      setLocations(prev => 
        prev.map(l => 
          l.id === editingLocation.id 
            ? { ...editingLocation, ...formData }
            : l
        )
      );
      setEditingLocation(null);
    } else {
      const newLocation: Location = {
        id: Date.now().toString(),
        ...formData
      };
      setLocations(prev => [...prev, newLocation]);
    }
    
    setFormData({
      city: "",
      district: "",
      description: "",
      propertyCount: 0,
      averagePrice: "",
      highlights: [],
      image: ""
    });
    setIsAddOpen(false);
  };

  const handleEdit = (location: Location) => {
    setEditingLocation(location);
    setFormData({
      city: location.city,
      district: location.district,
      description: location.description,
      propertyCount: location.propertyCount,
      averagePrice: location.averagePrice,
      highlights: location.highlights,
      image: location.image || ""
    });
    setIsAddOpen(true);
  };

  const handleDelete = (id: string) => {
    setLocations(prev => prev.filter(l => l.id !== id));
  };

  const addHighlight = () => {
    if (newHighlight.trim() && !formData.highlights.includes(newHighlight.trim())) {
      setFormData(prev => ({
        ...prev,
        highlights: [...prev.highlights, newHighlight.trim()]
      }));
      setNewHighlight("");
    }
  };

  const removeHighlight = (highlight: string) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter(h => h !== highlight)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-luxury-charcoal">Zarządzanie Lokalizacjami</h2>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
              <Plus className="h-4 w-4 mr-2" />
              Dodaj Lokalizację
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingLocation ? "Edytuj Lokalizację" : "Dodaj Nową Lokalizację"}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Miasto</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    placeholder="np. Warszawa"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="district">Dzielnica/Obszar</Label>
                  <Input
                    id="district"
                    value={formData.district}
                    onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                    placeholder="np. Śródmieście"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Opis lokalizacji</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Opisz charakterystykę lokalizacji, jej zalety i atrakcje..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="propertyCount">Liczba nieruchomości</Label>
                  <Input
                    id="propertyCount"
                    type="number"
                    value={formData.propertyCount}
                    onChange={(e) => setFormData(prev => ({ ...prev, propertyCount: parseInt(e.target.value) || 0 }))}
                    placeholder="0"
                    min="0"
                  />
                </div>
                
                <div>
                  <Label htmlFor="averagePrice">Średnia cena za m² (PLN)</Label>
                  <Input
                    id="averagePrice"
                    value={formData.averagePrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, averagePrice: e.target.value }))}
                    placeholder="np. 12,500"
                  />
                </div>
              </div>
              
              <div>
                <Label>Atrakcje i zalety</Label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      value={newHighlight}
                      onChange={(e) => setNewHighlight(e.target.value)}
                      placeholder="np. Metro, Teatry, Restauracje..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addHighlight();
                        }
                      }}
                    />
                    <Button 
                      type="button" 
                      onClick={addHighlight}
                      variant="outline"
                      size="sm"
                    >
                      Dodaj
                    </Button>
                  </div>
                  
                  {formData.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.highlights.map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeHighlight(highlight)}
                        >
                          {highlight} ×
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="image">URL zdjęcia lokalizacji (opcjonalne)</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
              
              <div className="flex space-x-2 pt-4">
                <Button type="submit" className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                  {editingLocation ? "Zaktualizuj" : "Dodaj"} Lokalizację
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditingLocation(null);
                    setFormData({
                      city: "",
                      district: "",
                      description: "",
                      propertyCount: 0,
                      averagePrice: "",
                      highlights: [],
                      image: ""
                    });
                  }}
                >
                  Anuluj
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {locations.map((location) => (
          <Card key={location.id} className="hover:shadow-elegant transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-luxury-charcoal flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-luxury-gold" />
                    {location.city} - {location.district}
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-1" />
                      {location.propertyCount} nieruchomości
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {location.averagePrice} PLN/m²
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(location)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(location.id)} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-foreground mb-3">{location.description}</p>
              
              {location.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {location.highlights.map((highlight, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-luxury-gold/30 text-luxury-gold text-xs"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationManager;