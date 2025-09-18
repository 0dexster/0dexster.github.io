import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal, ArrowLeft, Lock, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertiesOffMarket = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const offMarketProperties = [
    {
      id: 1,
      title: "Ekskluzywny Penthouse na Rynku",
      location: "Kraków, Rynek Główny",
      price: "Na zapytanie",
      beds: 5,
      baths: 4,
      area: 220,
      badge: "TOP SECRET",
      description: "Wyjątkowy penthouse z prywatnym tarasem dachowym i bezpośrednim widokiem na Rynek Główny. Dostępny tylko dla wybranych klientów.",
      exclusivity: "Tylko 3 oglądania miesięcznie",
      features: ["Prywatny taras 150m²", "Klimatyzacja VRV", "Smart Home", "Miejsce w garażu podziemnym"]
    },
    {
      id: 2,
      title: "Willa z Historią - Salwator",
      location: "Kraków, Salwator",
      price: "15,000,000 PLN",
      beds: 8,
      baths: 6,
      area: 450,
      badge: "HERITAGE",
      description: "Zabytkowa willa z XIX wieku w pełni zmodernizowana. Własny park, basen, sauna. Unikat na rynku krakowskim.",
      exclusivity: "Pierwsza oferta na rynku od 50 lat",
      features: ["Własny park 2000m²", "Basen kryty", "Sauna i spa", "Biblioteka z kominkiem", "Garaż na 4 auta"]
    },
    {
      id: 3,
      title: "Loft Artystyczny - Zabłocie",
      location: "Kraków, Zabłocie",
      price: "3,800,000 PLN",
      beds: 3,
      baths: 3,
      area: 180,
      badge: "ARTIST STUDIO",
      description: "Unikatowy loft w dawnej fabryce. Wysokość 5m, okna od podłogi do sufitu. Idealne atelier artystyczne.",
      exclusivity: "Wcześniej mieszkanie znanego artysty",
      features: ["Wysokość 5m", "Okna panoramiczne", "Studio nagrań", "Galeria sztuki"]
    },
    {
      id: 4,
      title: "Apartament Inwestycyjny - Kazimierz",
      location: "Kraków, Kazimierz", 
      price: "2,200,000 PLN",
      beds: 2,
      baths: 2,
      area: 85,
      badge: "INVESTMENT",
      description: "Apartament w sercu Kazimierza z gwarantowanym najmem przez 5 lat. ROI 8% rocznie.",
      exclusivity: "Gwarantowany najemca przez 5 lat",
      features: ["ROI 8% rocznie", "Najemca długoterminowy", "Pełne zarządzanie", "Ubezpieczenie"]
    }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-luxury-charcoal to-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/nieruchomosci">
                <Button variant="ghost" className="flex items-center text-gray-300 hover:text-luxury-gold">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do wszystkich nieruchomości
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-luxury-gold mr-3" />
                <h1 className="text-4xl md:text-6xl font-light text-white">
                  {t('properties.category.off_market.title')}<br />
                  <span className="font-bold text-luxury-gold">{t('properties.category.off_market.subtitle')}</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Ekskluzywne nieruchomości dostępne tylko dla wybranych klientów. Unikatowe oferty, które nie są publicznie dostępne.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center p-4 bg-white/10 rounded-lg">
                  <Eye className="w-6 h-6 text-luxury-gold mr-2" />
                  <span className="text-white font-semibold">Poufne oglądania</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-white/10 rounded-lg">
                  <Star className="w-6 h-6 text-luxury-gold mr-2" />
                  <span className="text-white font-semibold">Tylko VIP klienci</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-white/10 rounded-lg">
                  <Lock className="w-6 h-6 text-luxury-gold mr-2" />
                  <span className="text-white font-semibold">Pełna dyskrecja</span>
                </div>
              </div>
            </div>

            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-luxury-gray" />
                  <Input
                    placeholder="Ekskluzywna lokalizacja..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Budżet inwestycyjny" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5000000">Do 5,000,000 PLN</SelectItem>
                    <SelectItem value="5000000-10000000">5-10 mln PLN</SelectItem>
                    <SelectItem value="10000000-20000000">10-20 mln PLN</SelectItem>
                    <SelectItem value="20000000+">Powyżej 20 mln PLN</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Typ ekskluzywny" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="villa">Willa</SelectItem>
                    <SelectItem value="mansion">Rezydencja</SelectItem>
                    <SelectItem value="investment">Inwestycja</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal" onClick={handleSearch}>
                  <Lock className="mr-2 h-4 w-4" />
                  Szukaj OFF MARKET
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-luxury-charcoal">
                {offMarketProperties.length} ekskluzywnych ofert OFF MARKET
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sortuj według" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exclusivity">Poziom ekskluzywności</SelectItem>
                  <SelectItem value="price-desc">Wartość: od najwyższej</SelectItem>
                  <SelectItem value="area-desc">Powierzchnia: od największej</SelectItem>
                  <SelectItem value="location">Prestiż lokalizacji</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-80 w-full" />
                    <div className="p-8">
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <Skeleton className="h-6 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-6" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {offMarketProperties.map((property) => (
                <Card key={property.id} className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-102">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={luxuryApartment} 
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/90 to-transparent"></div>
                    
                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold px-4 py-2">
                      {property.badge}
                    </Badge>

                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-3xl font-bold">{property.price}</span>
                    </div>

                    <div className="absolute top-6 right-6">
                      <Lock className="w-6 h-6 text-luxury-gold" />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center text-luxury-gray text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors">
                      {property.title}
                    </h3>
                    
                    <p className="text-luxury-gray mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    <div className="bg-luxury-light p-4 rounded-lg mb-6">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-luxury-gold mr-2" />
                        <span className="font-semibold text-luxury-charcoal">Ekskluzywność:</span>
                      </div>
                      <p className="text-sm text-luxury-gray">{property.exclusivity}</p>
                    </div>

                    <div className="flex items-center justify-between text-luxury-gray mb-6">
                      <div className="flex items-center">
                        <Bed className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{property.beds}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{property.baths}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{property.area}m²</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-luxury-charcoal mb-2">Cechy ekskluzywne:</h4>
                      <ul className="text-sm text-luxury-gray space-y-1">
                        {property.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="w-3 h-3 text-luxury-gold mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Zapytaj o dostęp
                    </Button>
                  </div>
                </Card>
                ))}
              </div>
            )}

            <div className="text-center mt-16">
              <div className="bg-luxury-light rounded-lg p-8 max-w-2xl mx-auto">
                <Lock className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">Dostęp do ofert OFF MARKET</h3>
                <p className="text-luxury-gray mb-6">
                  Aby uzyskać dostęp do naszych najbardziej ekskluzywnych ofert, skontaktuj się z naszym doradcą VIP.
                </p>
                <Button 
                  size="lg" 
                  className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                >
                  Umów konsultację VIP
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertiesOffMarket;