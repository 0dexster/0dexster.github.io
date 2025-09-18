import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, ArrowLeft, Phone, Mail, Calendar, Camera, Heart, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertyDetails = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  
  // Mock property data - in real app, this would be fetched based on ID
  const property = {
    id: id || "1",
    title: "Luksusowy Apartament w Starym Mieście",
    location: "Kraków, Stare Miasto",
    price: "1,850,000 PLN",
    beds: 3,
    baths: 2,
    area: 95,
    badge: "PREMIUM",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: "Wyjątkowy apartament położony w sercu krakowskiego Starego Miasta, w zabytkowej kamienicy z XV wieku. Nieruchomość została kompleksowo odnowiona z zachowaniem oryginalnego charakteru i stylu. Apartament oferuje niepowtarzalne widoki na Rynek Główny i Wieżę Mariacką.",
    features: [
      "Lokalizacja w centrum Starego Miasta",
      "Widok na Rynek Główny",
      "Zabytkowa kamienica z XV wieku", 
      "Kompletnie odnowiony",
      "Wysokie sufity 3.5m",
      "Oryginalne detale architektoniczne",
      "Miejsce parkingowe w garażu podziemnym",
      "Winda",
      "Ochrona 24h",
      "Klimatyzacja"
    ],
    agent: {
      name: "Anna Kowalska",
      phone: "+48 22 123 45 67",
      email: "anna.kowalska@partners-international.pl",
      image: "/api/placeholder/100/100"
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/nieruchomosci">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do ofert
              </Button>
            </Link>
          </div>

          {/* Property Images Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-luxury-light bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.images[0]})` }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-luxury-gold text-luxury-charcoal font-semibold">
                    {property.badge}
                  </Badge>
                  <Button size="sm" variant="outline" className="bg-background hover:bg-accent text-foreground border-border">
                    <Camera className="h-4 w-4 mr-2" />
                    {property.images.length} zdjęć
                  </Button>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="outline" className="bg-background hover:bg-accent text-foreground border-border">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-background hover:bg-accent text-foreground border-border">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="h-48 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-luxury-light bg-cover bg-center hover:scale-105 transition-transform cursor-pointer"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center text-luxury-gray text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-light mb-4 text-luxury-charcoal">
                  {property.title}
                </h1>
                
                <div className="text-3xl font-bold text-luxury-gold mb-6">
                  {property.price}
                </div>

                {/* Property Features */}
                <div className="flex items-center gap-6 text-luxury-gray mb-8 pb-6 border-b border-luxury-light">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2" />
                    <span className="font-medium">{property.beds} sypialnie</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2" />
                    <span className="font-medium">{property.baths} łazienki</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 mr-2" />
                    <span className="font-medium">{property.area}m²</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">Opis</h2>
                <p className="text-luxury-gray leading-relaxed mb-4">
                  {property.description}
                </p>
                <p className="text-luxury-gray leading-relaxed">
                  {t('lorem.long')}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">Udogodnienia</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-luxury-gray">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal">Skontaktuj się</h3>
                
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-luxury-light bg-cover bg-center mr-4"
                    style={{ backgroundImage: `url(${property.agent.image})` }}
                  />
                  <div>
                    <div className="font-semibold text-luxury-charcoal">{property.agent.name}</div>
                    <div className="text-sm text-luxury-gray">Doradca Premium</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Umów wizytę
                  </Button>
                </div>

                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold">
                  Wyślij zapytanie
                </Button>

                <div className="mt-4 p-4 bg-luxury-light rounded-lg">
                  <p className="text-sm text-luxury-gray text-center">
                    Chcesz otrzymać więcej informacji o tej nieruchomości?
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;