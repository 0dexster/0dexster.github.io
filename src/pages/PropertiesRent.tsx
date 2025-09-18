import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertiesRent = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const rentalProperties = [
    {
      id: 1,
      title: "Apartament w Starym Mieście",
      location: "Kraków, Stare Miasto",
      price: "18,500 PLN/mies",
      beds: 3,
      baths: 2,
      area: 95,
      badge: "PREMIUM",
      description: "Luksusowy apartament w sercu Krakowa z widokiem na Sukiennice i Rynek Główny. Wysokie sufity, oryginalne detale architektoniczne.",
      deposit: "37,000 PLN",
      availableFrom: "01.02.2024"
    },
    {
      id: 2,
      title: "Penthouse Kazimierz",
      location: "Kraków, Kazimierz",
      price: "27,500 PLN/mies",
      beds: 4,
      baths: 3,
      area: 140,
      badge: "EKSKLUZYWNE",
      description: "Ekskluzywny penthouse w artystycznej dzielnicy Krakowa. Taras z panoramicznym widokiem, nowoczesne wykończenia.",
      deposit: "55,000 PLN",
      availableFrom: "15.01.2024"
    },
    {
      id: 3,
      title: "Loft Zabłocie",
      location: "Kraków, Zabłocie",
      price: "14,500 PLN/mies",
      beds: 2,
      baths: 2,
      area: 85,
      badge: "DOSTĘPNE",
      description: "Nowoczesny loft w dawnej dzielnicy przemysłowej. Industrialny charakter, wysokie okna, open space.",
      deposit: "29,000 PLN",
      availableFrom: "Natychmiast"
    },
    {
      id: 4,
      title: "Apartament Zwierzyniec",
      location: "Kraków, Zwierzyniec",
      price: "21,000 PLN/mies",
      beds: 3,
      baths: 2,
      area: 110,
      badge: "NOWE",
      description: "Elegancki apartament w spokojnej dzielnicy z zielenią. Balkon z widokiem na park, miejsce parkingowe.",
      deposit: "42,000 PLN",
      availableFrom: "01.03.2024"
    },
    {
      id: 5,
      title: "Mieszkanie Nowa Huta",
      location: "Kraków, Nowa Huta",
      price: "8,900 PLN/mies",
      beds: 2,
      baths: 1,
      area: 68,
      badge: "OKAZJA",
      description: "Mieszkanie po remoncie w dobrze skomunikowanej lokalizacji. Blisko centrum handlowego i komunikacji.",
      deposit: "17,800 PLN",
      availableFrom: "Natychmiast"
    },
    {
      id: 6,
      title: "Studio Podgórze",
      location: "Kraków, Podgórze",
      price: "6,500 PLN/mies",
      beds: 1,
      baths: 1,
      area: 45,
      badge: "STUDENT FRIENDLY",
      description: "Funkcjonalne studio idealne dla studentów. Umeblowane, internet w cenie, blisko uczelni.",
      deposit: "13,000 PLN",
      availableFrom: "Natychmiast"
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
        <section className="py-16 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/nieruchomosci">
                <Button variant="ghost" className="flex items-center text-luxury-gray hover:text-luxury-gold">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do wszystkich nieruchomości
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-4">
                {t('properties.category.rent.title')}<br />
                <span className="font-bold text-luxury-gold">{t('properties.category.rent.subtitle')}</span>
              </h1>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                Wynajmij mieszkanie swoich marzeń w najlepszych lokalizacjach Krakowa. Profesjonalna obsługa najmu od A do Z.
              </p>
            </div>

            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-luxury-gray" />
                  <Input
                    placeholder="Lokalizacja, typ mieszkania..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Zakres cenowy/miesiąc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10000">Do 10,000 PLN</SelectItem>
                    <SelectItem value="10000-20000">10,000-20,000 PLN</SelectItem>
                    <SelectItem value="20000-30000">20,000-30,000 PLN</SelectItem>
                    <SelectItem value="30000+">Powyżej 30,000 PLN</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('search.property.type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">{t('search.property.apartment')}</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="penthouse">{t('search.property.penthouse')}</SelectItem>
                    <SelectItem value="loft">{t('search.property.loft')}</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal" onClick={handleSearch}>
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  {t('properties.search')}
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
                {t('search.found')} {rentalProperties.length} mieszkań do wynajęcia
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={t('search.sort')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">{t('search.sort.price_asc')}</SelectItem>
                  <SelectItem value="price-desc">{t('search.sort.price_desc')}</SelectItem>
                  <SelectItem value="area-asc">{t('search.sort.area_asc')}</SelectItem>
                  <SelectItem value="area-desc">{t('search.sort.area_desc')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-64 w-full" />
                    <div className="p-6">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex justify-between mb-6">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProperties.map((property) => (
                <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={luxuryApartment} 
                      alt={property.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent"></div>
                    
                    <Badge className="absolute top-4 left-4 bg-blue-500 text-white font-semibold">
                      {property.badge}
                    </Badge>

                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-2xl font-bold">{property.price}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-luxury-gray text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors">
                      {property.title}
                    </h3>
                    
                    <p className="text-luxury-gray text-sm mb-4">
                      {property.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-luxury-gray mb-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.beds}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.baths}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.area}m²
                      </div>
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <div className="flex justify-between text-sm text-luxury-gray mb-2">
                        <span>Kaucja:</span>
                        <span className="font-semibold">{property.deposit}</span>
                      </div>
                      <div className="flex items-center text-sm text-luxury-gray">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Dostępne od: {property.availableFrom}</span>
                      </div>
                    </div>

                    <Link to={`/nieruchomosci/${property.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-charcoal group-hover:border-luxury-gold transition-all duration-300"
                      >
                        Zobacz szczegóły najmu
                      </Button>
                    </Link>
                  </div>
                </Card>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 1500);
                }}
              >
                {t('button.load_more')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertiesRent;