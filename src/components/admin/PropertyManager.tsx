import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Image, ArrowUp, ArrowDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PhotoManager from "./PhotoManager";

interface Property {
  id: string;
  title: string;
  type: "apartment" | "house" | "villa" | "penthouse" | "loft" | "townhouse" | "studio" | "duplex" | "office" | "retail" | "warehouse" | "industrial" | "land" | "commercial";
  price: string;
  location: string;
  description: string;
  photos: string[];
  status: "active" | "sold" | "reserved";
}

const PropertyManager = () => {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: "1",
      title: "Luksusowy penthouse w centrum Warszawy",
      type: "apartment",
      price: "2,500,000",
      location: "Warszawa, Śródmieście",
      description: "Ekskluzywny penthouse o powierzchni 150 m² z panoramicznym widokiem na miasto.",
      photos: [],
      status: "active"
    },
    {
      id: "2", 
      title: "Nowoczesna willa z ogrodem",
      type: "house",
      price: "1,800,000",
      location: "Konstancin-Jeziorna",
      description: "Piękna willa z dużym ogrodem i basenem, idealna dla rodziny.",
      photos: [],
      status: "active"
    }
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "apartment" as Property["type"],
    price: "",
    location: "",
    description: "",
    photos: [] as string[],
    status: "active" as Property["status"]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProperty) {
      setProperties(prev => 
        prev.map(p => 
          p.id === editingProperty.id 
            ? { ...editingProperty, ...formData }
            : p
        )
      );
      setEditingProperty(null);
    } else {
      const newProperty: Property = {
        id: Date.now().toString(),
        ...formData
      };
      setProperties(prev => [...prev, newProperty]);
    }
    
    setFormData({
      title: "",
      type: "apartment",
      price: "",
      location: "",
      description: "",
      photos: [],
      status: "active"
    });
    setIsAddOpen(false);
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      type: property.type,
      price: property.price,
      location: property.location,
      description: property.description,
      photos: property.photos,
      status: property.status
    });
    setIsAddOpen(true);
  };

  const handleDelete = (id: string) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  const getTypeLabel = (type: Property["type"]) => {
    switch (type) {
      case "apartment": return "Mieszkanie";
      case "house": return "Dom";
      case "villa": return "Willa";
      case "penthouse": return "Penthouse";
      case "loft": return "Loft";
      case "townhouse": return "Szeregowiec";
      case "studio": return "Kawalerka";
      case "duplex": return "Duplex";
      case "office": return "Biuro";
      case "retail": return "Handel";
      case "warehouse": return "Magazyn";
      case "industrial": return "Przemysł";
      case "land": return "Działka";
      case "commercial": return "Inne komercyjne";
      default: return "Nieznany";
    }
  };

  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "sold": return "bg-red-100 text-red-800";
      case "reserved": return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusLabel = (status: Property["status"]) => {
    switch (status) {
      case "active": return "Aktywne";
      case "sold": return "Sprzedane";
      case "reserved": return "Zarezerwowane";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-luxury-charcoal">Zarządzanie Nieruchomościami</h2>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
              <Plus className="h-4 w-4 mr-2" />
              Dodaj Nieruchomość
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProperty ? "Edytuj Nieruchomość" : "Dodaj Nową Nieruchomość"}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Tytuł oferty</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="np. Luksusowy apartament w centrum"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Typ nieruchomości</Label>
                  <Select value={formData.type} onValueChange={(value: Property["type"]) => setFormData(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Mieszkanie</SelectItem>
                      <SelectItem value="house">Dom</SelectItem>
                      <SelectItem value="villa">Willa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="loft">Loft</SelectItem>
                      <SelectItem value="townhouse">Szeregowiec</SelectItem>
                      <SelectItem value="studio">Kawalerka</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="office">Biuro</SelectItem>
                      <SelectItem value="retail">Handel</SelectItem>
                      <SelectItem value="warehouse">Magazyn</SelectItem>
                      <SelectItem value="industrial">Przemysł</SelectItem>
                      <SelectItem value="land">Działka</SelectItem>
                      <SelectItem value="commercial">Inne komercyjne</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="price">Cena (PLN)</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="np. 850,000"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Lokalizacja</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="np. Warszawa, Mokotów"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: Property["status"]) => setFormData(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Aktywne</SelectItem>
                    <SelectItem value="reserved">Zarezerwowane</SelectItem>
                    <SelectItem value="sold">Sprzedane</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description">Opis nieruchomości</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Szczegółowy opis nieruchomości..."
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <Label>Zdjęcia nieruchomości</Label>
                <PhotoManager 
                  photos={formData.photos} 
                  onPhotosChange={(photos) => setFormData(prev => ({ ...prev, photos }))}
                />
              </div>
              
              <div className="flex space-x-2 pt-4">
                <Button type="submit" className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                  {editingProperty ? "Zaktualizuj" : "Dodaj"} Nieruchomość
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditingProperty(null);
                    setFormData({
                      title: "",
                      type: "apartment",
                      price: "",
                      location: "",
                      description: "",
                      photos: [],
                      status: "active"
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
        {properties.map((property) => (
          <Card key={property.id} className="hover:shadow-elegant transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-luxury-charcoal">{property.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="secondary">{getTypeLabel(property.type)}</Badge>
                    <Badge className={getStatusColor(property.status)}>{getStatusLabel(property.status)}</Badge>
                    <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                      {property.price} PLN
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(property)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(property.id)} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
              <p className="text-sm line-clamp-3">{property.description}</p>
              <div className="flex items-center mt-3 text-xs text-muted-foreground">
                <Image className="h-3 w-3 mr-1" />
                {property.photos.length} zdjęć
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyManager;