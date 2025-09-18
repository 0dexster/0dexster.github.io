import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal, ArrowLeft, Crown, Diamond, Sparkles, Award, Car, Wifi, Droplets, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertiesDeluxe = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deluxeProperties = [
    {
      id: 1,
      title: "Royal Penthouse Wawel View",
      location: "Kraków, Stradom",
      price: "25,000,000 PLN",
      beds: 6,
      baths: 5,
      area: 380,
      badge: "PLATINUM",
      description: "Najluksusowszy penthouse w Krakowie z bezpośrednim widokiem na Wawel. Prywatny taras 200m², jacuzzi, sauna, wine cellar.",
      amenities: ["Prywatny taras 200m²", "Jacuzzi z widokiem na Wawel", "Wine cellar", "Prywatna winda", "Concierge 24/7", "Garaż podziemny"],
      yearBuilt: "2023",
      exclusiveFeatures: "Jedyny taki widok w Krakowie"
    },
    {
      id: 2,
      title: "Mansion Zakrzówek Exclusive",
      location: "Kraków, Dębniki",
      price: "18,500,000 PLN",
      beds: 8,
      baths: 6,
      area: 520,
      badge: "DIAMOND",
      description: "Ekskluzywna rezydencja nad Zalewem Zakrzówek. Własna plaża, basen infinity, helilądowisko, spa center.",
      amenities: ["Własna plaża 50m", "Basen infinity", "Helilądowisko", "Spa center", "Kino domowe", "Własny park 5000m²"],
      yearBuilt: "2022",
      exclusiveFeatures: "Jedyna nieruchomość z własną plażą"
    },
    {
      id: 3,
      title: "Art Deco Palace Planty",
      location: "Kraków, Stare Miasto",
      price: "22,000,000 PLN",
      beds: 7,
      baths: 4,
      area: 450,
      badge: "HERITAGE LUXURY",
      description: "Zabytkowy pałac z 1920 roku, pełna renowacja z zachowaniem oryginalnych detali. Prywatny ogród w centrum miasta.",
      amenities: ["Zabytkowe detale", "Prywatny ogród 300m²", "Biblioteka", "Sala balowa", "Kuchnia szefa kuchni", "Apartament służbowy"],
      yearBuilt: "1920 (renowacja 2023)",
      exclusiveFeatures: "Jedyny zachowany pałac Art Deco"
    },
    {
      id: 4,
      title: "Modern Villa Bronowice Elite",
      location: "Kraków, Bronowice",
      price: "12,800,000 PLN",
      beds: 5,
      baths: 4,
      area: 350,
      badge: "SMART LUXURY",
      description: "Ultranowoczesna willa z systemem Smart Home najnowszej generacji. Technologia przyszłości w luksusowym wydaniu.",
      amenities: ["Smart Home AI", "Basen z przeciwprądem", "Sala gimnastyczna", "Biuro z widokiem", "Garaż na 4 auta", "Ogród japoński"],
      yearBuilt: "2024",
      exclusiveFeatures: "Pierwsza willa AI w Krakowie"
    },
    {
      id: 5,
      title: "Skyline Apartment Cracovia Tower",
      location: "Kraków, Centrum",
      price: "8,900,000 PLN",
      beds: 4,
      baths: 3,
      area: 220,
      badge: "SKY LUXURY",
      description: "Apartament na 45. piętrze z panoramicznym widokiem 360° na całe miasto. Najwyższy luksus w chmurach.",
      amenities: ["Widok 360°", "Taras na dachu", "Prywatna winda", "Mini bar", "System audio Bose", "Klimatyzacja VRV"],
      yearBuilt: "2023",
      exclusiveFeatures: "Najwyższy apartament w Krakowie"
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
        <section className="py-16 bg-gradient-to-br from-luxury-gold via-yellow-500 to-amber-600">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/nieruchomosci">
                <Button variant="ghost" className="flex items-center text-luxury-charcoal hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do wszystkich nieruchomości
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Crown className="w-12 h-12 text-luxury-charcoal mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-luxury-charcoal">
                  {t('properties.category.deluxe.title')}<br />
                  {t('properties.category.deluxe.subtitle')}
                </h1>
                <Diamond className="w-12 h-12 text-luxury-charcoal ml-4" />
              </div>
              <p className="text-lg text-luxury-charcoal max-w-2xl mx-auto mb-8 font-medium">
                Kolekcja najluksusowszych nieruchomości w Polsce. Każda z nich to unikat, który definiuje nowy standard luksusu.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Award className="w-8 h-8 text-luxury-charcoal mb-2" />
                  <span className="text-luxury-charcoal font-bold text-sm">Nagradzane projekty</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-luxury-charcoal mb-2" />
                  <span className="text-luxury-charcoal font-bold text-sm">Unikalne materiały</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Crown className="w-8 h-8 text-luxury-charcoal mb-2" />
                  <span className="text-luxury-charcoal font-bold text-sm">Obsługa VIP</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Diamond className="w-8 h-8 text-luxury-charcoal mb-2" />
                  <span className="text-luxury-charcoal font-bold text-sm">Gwarancja jakości</span>
                </div>
              </div>
            </div>

            {/* Search Filters */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-4xl mx-auto border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-luxury-charcoal" />
                  <Input
                    placeholder="Prestiżowa lokalizacja..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-luxury-charcoal placeholder:text-luxury-charcoal/70"
                  />
                </div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-luxury-charcoal">
                    <SelectValue placeholder="Budżet premium" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10000000">Do 10,000,000 PLN</SelectItem>
                    <SelectItem value="10000000-20000000">10-20 mln PLN</SelectItem>
                    <SelectItem value="20000000-30000000">20-30 mln PLN</SelectItem>
                    <SelectItem value="30000000+">Powyżej 30 mln PLN</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-luxury-charcoal">
                    <SelectValue placeholder="Kategoria deluxe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="penthouse">Royal Penthouse</SelectItem>
                    <SelectItem value="mansion">Luxury Mansion</SelectItem>
                    <SelectItem value="palace">Historic Palace</SelectItem>
                    <SelectItem value="villa">Modern Villa</SelectItem>
                    <SelectItem value="skyline">Skyline Apartment</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-luxury-charcoal hover:bg-black text-luxury-gold font-bold" onClick={handleSearch}>
                  <Crown className="mr-2 h-4 w-4" />
                  Szukaj DELUXE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-luxury-charcoal">
                {deluxeProperties.length} ekskluzywnych nieruchomości DELUXE ESTATES
              </h2>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Sortuj według prestiżu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prestige">Poziom prestiżu</SelectItem>
                  <SelectItem value="price-desc">Wartość: od najwyższej</SelectItem>
                  <SelectItem value="area-desc">Powierzchnia: od największej</SelectItem>
                  <SelectItem value="year-desc">Rok budowy: najnowsze</SelectItem>
                  <SelectItem value="location">Lokalizacja premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-96 w-full" />
                    <div className="p-8">
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-8 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-6" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {deluxeProperties.map((property) => (
                <Card key={property.id} className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] bg-gradient-to-br from-white to-luxury-light">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={luxuryApartment} 
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-luxury-gold via-yellow-500 to-amber-500 text-luxury-charcoal font-bold px-4 py-2 text-sm">
                      {property.badge}
                    </Badge>

                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-4xl font-bold tracking-wide">{property.price}</span>
                    </div>

                    <div className="absolute top-6 right-6 flex space-x-2">
                      <Crown className="w-7 h-7 text-luxury-gold" />
                      <Diamond className="w-7 h-7 text-luxury-gold" />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-luxury-gray text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </div>
                      <div className="text-xs text-luxury-gold font-semibold bg-luxury-gold/10 px-2 py-1 rounded">
                        {property.yearBuilt}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-luxury-charcoal mb-4 group-hover:text-luxury-gold transition-colors leading-tight">
                      {property.title}
                    </h3>
                    
                    <p className="text-luxury-gray mb-6 leading-relaxed text-lg">
                      {property.description}
                    </p>

                    <div className="bg-gradient-to-r from-luxury-gold/10 to-amber-500/10 p-4 rounded-lg mb-6">
                      <div className="flex items-center mb-2">
                        <Sparkles className="w-5 h-5 text-luxury-gold mr-2" />
                        <span className="font-bold text-luxury-charcoal">Ekskluzywna cecha:</span>
                      </div>
                      <p className="text-luxury-gray font-medium">{property.exclusiveFeatures}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-luxury-light rounded-lg">
                      <div className="text-center">
                        <Bed className="w-6 h-6 text-luxury-gold mx-auto mb-1" />
                        <span className="font-bold text-luxury-charcoal text-lg">{property.beds}</span>
                        <div className="text-xs text-luxury-gray">sypialnie</div>
                      </div>
                      <div className="text-center">
                        <Bath className="w-6 h-6 text-luxury-gold mx-auto mb-1" />
                        <span className="font-bold text-luxury-charcoal text-lg">{property.baths}</span>
                        <div className="text-xs text-luxury-gray">łazienki</div>
                      </div>
                      <div className="text-center">
                        <Square className="w-6 h-6 text-luxury-gold mx-auto mb-1" />
                        <span className="font-bold text-luxury-charcoal text-lg">{property.area}</span>
                        <div className="text-xs text-luxury-gray">m²</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-luxury-charcoal mb-3 flex items-center">
                        <Diamond className="w-4 h-4 text-luxury-gold mr-2" />
                        Luksusowe udogodnienia:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-sm text-luxury-gray">
                            <Sparkles className="w-3 h-3 text-luxury-gold mr-2 flex-shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Link to={`/nieruchomosci/${property.id}`}>
                        <Button 
                          size="lg"
                          className="w-full bg-gradient-to-r from-luxury-gold via-yellow-500 to-amber-500 text-luxury-charcoal font-bold hover:from-amber-500 hover:to-luxury-gold transition-all duration-300"
                        >
                          <Crown className="w-4 h-4 mr-2" />
                          Szczegóły DELUXE
                        </Button>
                      </Link>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal font-bold"
                      >
                        <Diamond className="w-4 h-4 mr-2" />
                        Prywatne oglądanie
                      </Button>
                    </div>
                  </div>
                </Card>
                ))}
              </div>
            )}

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-luxury-gold/10 to-amber-500/10 rounded-xl p-12 max-w-3xl mx-auto border border-luxury-gold/20">
                <Crown className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-luxury-charcoal mb-4">DELUXE ESTATES Collection</h3>
                <p className="text-luxury-gray mb-8 text-lg leading-relaxed">
                  Każda nieruchomość z kolekcji DELUXE ESTATES to dzieło sztuki architektonicznej. 
                  Oferujemy nie tylko nieruchomości, ale lifestyle'y najwyższej klasy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-luxury-gold to-amber-500 text-luxury-charcoal font-bold hover:from-amber-500 hover:to-luxury-gold px-8 py-4"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Konsultacja DELUXE
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal font-bold px-8 py-4"
                  >
                    <Diamond className="w-5 h-5 mr-2" />
                    Katalog DELUXE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertiesDeluxe;