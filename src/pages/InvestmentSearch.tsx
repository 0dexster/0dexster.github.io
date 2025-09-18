import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Building2, TrendingUp, Star, Users, Briefcase, Zap, Trees, Dumbbell, Coffee, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const InvestmentSearch = () => {
  const { t } = useLanguage();
  
  // Investment data
  const featuredInvestments = [
    {
      name: "Apartamenty Złota 44",
      location: "Warszawa Śródmieście",
      developer: "Złota Development",
      status: "W sprzedaży",
      priceFrom: "1,200,000 PLN",
      completion: "Q4 2024",
      type: "Apartamenty luksusowe"
    },
    {
      name: "Marina Mokotów",
      location: "Warszawa Mokotów", 
      developer: "Marina Development",
      status: "Nowa inwestycja",
      priceFrom: "890,000 PLN",
      completion: "Q2 2025",
      type: "Apartamenty nad wodą"
    },
    {
      name: "Green Office Park",
      location: "Kraków Podgórze",
      developer: "Green Investments",
      status: "W budowie",
      priceFrom: "750,000 PLN", 
      completion: "Q1 2025",
      type: "Biura premium"
    }
  ];

  // Lifestyle data
  const lifestyles = [
    {
      id: "family",
      title: t('lifestyle.family.title'),
      description: t('lifestyle.family.description'),
      icon: Users,
      features: ["Przedszkola w pobliżu", "Parki i place zabaw", "Bezpieczne osiedla", "Sklepy", "Komunikacja"],
      properties: 45,
      priceRange: "650,000 - 1,200,000 PLN"
    },
    {
      id: "business",
      title: t('lifestyle.business.title'),
      description: t('lifestyle.business.description'),
      icon: Briefcase,
      features: ["Centrum biznesowe", "Dobra komunikacja", "Coworking", "Restauracje", "Hotele"],
      properties: 32,
      priceRange: "800,000 - 2,500,000 PLN"
    },
    {
      id: "active",
      title: t('lifestyle.active.title'),
      description: t('lifestyle.active.description'),
      icon: Dumbbell,
      features: ["Siłownie", "Korty tenisowe", "Baseny", "Ścieżki rowerowe", "Parki"],
      properties: 28,
      priceRange: "700,000 - 1,800,000 PLN"
    },
    {
      id: "luxury",
      title: t('lifestyle.luxury.title'),
      description: t('lifestyle.luxury.description'),
      icon: Zap,
      features: ["Concierge", "SPA", "Winiarnie", "Golf", "Ekskluzywne kluby"],
      properties: 18,
      priceRange: "1,500,000 - 5,000,000 PLN"
    },
    {
      id: "eco",
      title: t('lifestyle.eco.title'), 
      description: t('lifestyle.eco.description'),
      icon: Trees,
      features: ["Panele słoneczne", "Ogrody", "Recykling", "EV", "Bio produkty"],
      properties: 22,
      priceRange: "600,000 - 1,400,000 PLN"
    },
    {
      id: "urban",
      title: t('lifestyle.urban.title'),
      description: t('lifestyle.urban.description'),
      icon: Coffee,
      features: ["Kawiarnie", "Teatry", "Galerie", "Kluby", "Transport"],
      properties: 67,
      priceRange: "550,000 - 2,200,000 PLN"
    }
  ];

  // Location data with coordinates for Google Maps
  const locations = [
    {
      city: "Warszawa",
      district: "Śródmieście",
      projectCount: 8,
      priceRange: "800k - 2.5M PLN",
      description: "Centrum biznesowe stolicy",
      featured: true,
      coordinates: { lat: 52.2297, lng: 21.0122 }, // Centrum Warszawy
      googleMapsUrl: "https://maps.google.com/?q=52.2297,21.0122&ll=52.2297,21.0122&z=15"
    },
    {
      city: "Kraków",
      district: "Stare Miasto", 
      projectCount: 5,
      priceRange: "650k - 1.8M PLN", 
      description: "Historyczne centrum Krakowa",
      featured: true,
      coordinates: { lat: 50.0647, lng: 19.9450 }, // Rynek Główny
      googleMapsUrl: "https://maps.google.com/?q=50.0647,19.9450&ll=50.0647,19.9450&z=15"
    },
    {
      city: "Gdańsk",
      district: "Główne Miasto",
      projectCount: 4,
      priceRange: "550k - 1.5M PLN",
      description: "Nadmorskie inwestycje premium",
      featured: false,
      coordinates: { lat: 54.3520, lng: 18.6466 }, // Centrum Gdańska
      googleMapsUrl: "https://maps.google.com/?q=54.3520,18.6466&ll=54.3520,18.6466&z=15"
    },
    {
      city: "Wrocław", 
      district: "Stare Miasto",
      projectCount: 6,
      priceRange: "500k - 1.2M PLN",
      description: "Kulturalne serce Dolnego Śląska",
      featured: false,
      coordinates: { lat: 51.1079, lng: 17.0385 }, // Rynek Wrocław
      googleMapsUrl: "https://maps.google.com/?q=51.1079,17.0385&ll=51.1079,17.0385&z=15"
    },
    {
      city: "Poznań",
      district: "Stary Rynek", 
      projectCount: 3,
      priceRange: "450k - 1M PLN",
      description: "Biznesowa stolica Wielkopolski",
      featured: false,
      coordinates: { lat: 52.4082, lng: 16.9335 }, // Stary Rynek Poznań
      googleMapsUrl: "https://maps.google.com/?q=52.4082,16.9335&ll=52.4082,16.9335&z=15"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-6">
              {t('investment.search.unified.title')}<br />
              <span className="font-bold text-luxury-gold">{t('investment.search.unified.title.span')}</span>
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto mb-8">
              {t('investment.search.unified.description')}
            </p>
          </div>
        </section>

        {/* Search Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="investment" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 bg-luxury-light rounded-lg p-2 h-auto">
                  <TabsTrigger 
                    value="investment" 
                    className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Building2 className="w-6 h-6 mb-2" />
                    <span className="font-semibold">{t('investment.search.unified.tab.investment')}</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="lifestyle"
                    className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Heart className="w-6 h-6 mb-2" />
                    <span className="font-semibold">{t('investment.search.unified.tab.lifestyle')}</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="location"
                    className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <MapPin className="w-6 h-6 mb-2" />
                    <span className="font-semibold">{t('investment.search.unified.tab.location')}</span>
                  </TabsTrigger>
                </TabsList>

                {/* Investment Search Tab */}
                <TabsContent value="investment">
                  <div className="space-y-8">
                    {/* Search Filters */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Search className="w-5 h-5" />
                          {t('investment.search.filters.title')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.search.investment.name')}</label>
                            <Input placeholder={t('investment.search.investment.name.placeholder')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.search.location')}</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('investment.search.location.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="warszawa">{t('investment.search.city.warszawa')}</SelectItem>
                                <SelectItem value="krakow">{t('investment.search.city.krakow')}</SelectItem>
                                <SelectItem value="gdansk">{t('investment.search.city.gdansk')}</SelectItem>
                                <SelectItem value="wroclaw">{t('investment.search.city.wroclaw')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.search.investment.type')}</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('investment.search.type.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="mieszkaniowe">{t('investment.search.type.residential')}</SelectItem>
                                <SelectItem value="biurowe">{t('investment.search.type.office')}</SelectItem>
                                <SelectItem value="handlowe">{t('investment.search.type.commercial')}</SelectItem>
                                <SelectItem value="mieszane">{t('investment.search.type.mixed')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.search.status')}</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('investment.search.status.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sprzedaz">{t('investment.search.status.sale')}</SelectItem>
                                <SelectItem value="budowa">{t('investment.search.status.construction')}</SelectItem>
                                <SelectItem value="planowanie">{t('investment.search.status.planning')}</SelectItem>
                                <SelectItem value="ukonczone">{t('investment.search.status.completed')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mt-4">
                            <Link to="/nieruchomosci">
                              <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                                <Search className="w-4 h-4 mr-2" />
                                {t('investment.search.button')}
                              </Button>
                            </Link>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Investment Results */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold">{t('investment.search.recommended')}</h2>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {featuredInvestments.map((investment, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-xl mb-2">{investment.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {investment.location}
                                  </CardDescription>
                                </div>
                                <Badge variant={investment.status === "Nowa inwestycja" ? "default" : "secondary"}>
                                  {investment.status}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Building2 className="w-4 h-4 text-luxury-gray" />
                                  <span className="text-sm">{investment.developer}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-luxury-gray" />
                                  <span className="text-sm">Od {investment.priceFrom}</span>
                                </div>
                                <div className="text-sm text-luxury-gray">
                                  Typ: {investment.type}
                                </div>
                                <div className="text-sm text-luxury-gray">
                                  Ukończenie: {investment.completion}
                                </div>
                                <Link to="/nieruchomosci">
                                  <Button className="w-full mt-4 bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">{t('investment.new.view_details')}</Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Lifestyle Search Tab */}
                <TabsContent value="lifestyle">
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-light text-luxury-charcoal mb-4">
                        {t('lifestyle.page.title')}
                      </h2>
                      <p className="text-luxury-gray max-w-2xl mx-auto">
                        {t('lifestyle.page.description')}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {lifestyles.map((lifestyle) => {
                        const IconComponent = lifestyle.icon;
                        return (
                          <Card key={lifestyle.id} className="hover:shadow-lg transition-all cursor-pointer group">
                            <CardHeader className="text-center">
                              <div className="mx-auto mb-4 p-3 rounded-full bg-luxury-gold/10 w-fit group-hover:bg-luxury-gold/20 transition-colors">
                                <IconComponent className="w-8 h-8 text-luxury-gold" />
                              </div>
                              <CardTitle className="text-xl">{lifestyle.title}</CardTitle>
                              <CardDescription>{lifestyle.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-sm font-medium mb-2">{t('lifestyle.key_features')}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {lifestyle.features.map((feature, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="text-sm text-luxury-gray">
                                  <p><strong>{lifestyle.properties}</strong> {t('lifestyle.properties_available')}</p>
                                  <p className="text-luxury-gold font-medium">{lifestyle.priceRange}</p>
                                </div>

                                <Link to="/nieruchomosci">
                                  <Button className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">
                                    {t('lifestyle.view_offers')}
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* Location Search Tab */}
                <TabsContent value="location">
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-light text-luxury-charcoal mb-4">
                        {t('investment.location.page.title')}
                      </h2>
                      <p className="text-luxury-gray max-w-2xl mx-auto">
                        {t('investment.location.page.description')}
                      </p>
                    </div>

                    {/* Location Search Bar */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Search className="w-5 h-5" />
                          {t('investment.location.search.title')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.location.city')}</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('investment.location.city.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                {locations.map((location) => (
                                  <SelectItem key={location.city} value={location.city}>
                                    {location.city}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.location.district')}</label>
                            <Input placeholder={t('investment.location.district.placeholder')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">{t('investment.location.radius')}</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('investment.location.radius.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">{t('investment.location.radius.1km')}</SelectItem>
                                <SelectItem value="3">{t('investment.location.radius.3km')}</SelectItem>
                                <SelectItem value="5">{t('investment.location.radius.5km')}</SelectItem>
                                <SelectItem value="10">{t('investment.location.radius.10km')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-end">
                            <Link to="/nieruchomosci">
                              <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                                <Search className="w-4 h-4 mr-2" />
                                {t('investment.location.search.button')}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Featured Locations */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold">{t('investment.location.tabs.featured')}</h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {locations.filter(loc => loc.featured).map((location, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 bg-gradient-to-br from-luxury-gold/20 to-luxury-charcoal/20">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                              <Badge className="absolute top-4 left-4 z-20 bg-luxury-gold text-luxury-charcoal">
                                <Star className="w-3 h-3 mr-1" />
                                {t('investment.location.featured.badge')}
                              </Badge>
                            </div>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-xl">{location.city}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {location.district}
                                  </CardDescription>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {location.projectCount} {t('investment.location.projects.count')}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <p className="text-sm text-luxury-gray">{location.description}</p>
                                
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="text-sm text-luxury-gray">{t('investment.location.price_range')}</div>
                                    <div className="font-semibold text-luxury-gold">{location.priceRange}</div>
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-luxury-gray">
                                    <Building2 className="w-4 h-4" />
                                    <Users className="w-4 h-4" />
                                    <TrendingUp className="w-4 h-4" />
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <Link to="/lokalizacja">
                                    <Button className="flex-1 bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">{t('investment.location.view_projects')}</Button>
                                  </Link>
                                  <Button 
                                    variant="outline" 
                                    onClick={() => window.open(location.googleMapsUrl, '_blank')}
                                    className="hover:bg-luxury-gold hover:text-luxury-charcoal"
                                  >
                                    {t('investment.location.map')}
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* CTA Section */}
              <Card className="mt-12 bg-gradient-to-r from-luxury-gold/10 to-luxury-charcoal/10">
                <CardContent className="text-center py-8">
                  <h3 className="text-2xl font-semibold mb-4 text-luxury-charcoal">
                    {t('investment.search.cta.title')}
                  </h3>
                  <p className="text-luxury-gray mb-6">
                    {t('investment.search.cta.description')}
                  </p>
                  <Link to="/konsultacja?category=inwestycje&source=investment">
                    <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">{t('investment.search.cta.button')}</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentSearch;