import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, ArrowUp, ArrowDown, Upload, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PhotoManagerProps {
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
}

const PhotoManager = ({ photos, onPhotosChange }: PhotoManagerProps) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // Temporary placeholder images for demo
  const placeholderImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", 
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=400",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400"
  ];

  const addPhoto = (photoUrl: string) => {
    if (photos.length < 30) {
      onPhotosChange([...photos, photoUrl]);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    onPhotosChange(newPhotos);
  };

  const movePhoto = (index: number, direction: "up" | "down") => {
    const newPhotos = [...photos];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < photos.length) {
      [newPhotos[index], newPhotos[targetIndex]] = [newPhotos[targetIndex], newPhotos[index]];
      onPhotosChange(newPhotos);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
            {photos.length}/30 zdjęć
          </Badge>
          {photos.length > 0 && (
            <span className="text-xs text-muted-foreground">
              Przeciągnij aby zmienić kolejność
            </span>
          )}
        </div>
        
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal"
              disabled={photos.length >= 30}
            >
              <Plus className="h-4 w-4 mr-2" />
              Dodaj Zdjęcia
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Dodawanie Zdjęć Nieruchomości</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-luxury-gold/30 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-lg font-medium text-luxury-charcoal mb-2">
                  Przeciągnij i upuść pliki lub kliknij aby wybrać
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Obsługiwane formaty: JPG, PNG, WEBP (max 5MB każdy)
                </p>
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                  <Image className="h-4 w-4 mr-2" />
                  Wybierz Pliki
                </Button>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Lub wybierz z przykładowych zdjęć:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {placeholderImages.map((img, index) => (
                    <Card 
                      key={index}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => {
                        addPhoto(img);
                        setIsUploadOpen(false);
                      }}
                    >
                      <CardContent className="p-2">
                        <img 
                          src={img} 
                          alt={`Przykład ${index + 1}`}
                          className="w-full h-20 object-cover rounded"
                        />
                        <p className="text-xs text-center mt-1">Przykład {index + 1}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {photos.length === 0 ? (
        <div className="text-center p-8 border-2 border-dashed border-muted rounded-lg">
          <Image className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Brak dodanych zdjęć</p>
          <p className="text-xs text-muted-foreground mt-1">
            Dodaj zdjęcia aby zwiększyć atrakcyjność oferty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={photo} 
                    alt={`Zdjęcie ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  
                  {/* Photo controls overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => movePhoto(index, "up")}
                      disabled={index === 0}
                      className="text-white hover:bg-white/20"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => movePhoto(index, "down")}
                      disabled={index === photos.length - 1}
                      className="text-white hover:bg-white/20"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removePhoto(index)}
                      className="text-red-300 hover:bg-red-500/20 hover:text-red-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Photo number badge */}
                  <Badge 
                    className="absolute top-2 left-2 bg-luxury-charcoal/80 text-white"
                  >
                    {index + 1}
                    {index === 0 && " (główne)"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {photos.length > 0 && (
        <div className="text-xs text-muted-foreground p-3 bg-luxury-light rounded-lg">
          <p><strong>Wskazówki:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Pierwsze zdjęcie będzie wyświetlane jako główne w ofercie</li>
            <li>Użyj strzałek aby zmienić kolejność zdjęć</li>
            <li>Maksymalna ilość zdjęć: 30</li>
            <li>Rekomendujemy dodanie zdjęć wszystkich pomieszczeń</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhotoManager;