import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Globe, TrendingUp, Users, Video, Star, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketingService = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: "Sesja fotograficzna premium",
      description: "Profesjonalne zdjęcia nieruchomości",
      icon: Camera,
      price: "od 800 PLN",
      features: ["20-40 zdjęć HD", "Obróbka RAW", "Drone (opcja)", "24h realizacja"]
    },
    {
      title: "Wirtualne zwiedzanie 3D",
      description: "Interaktywne spacery wirtualne", 
      icon: Globe,
      price: "od 1,200 PLN",
      features: ["Technologia Matterport", "Plan 2D/3D", "VR kompatybilne", "Link udostępniania"]
    },
    {
      title: "Film promocyjny",
      description: "Profesjonalne materiały wideo",
      icon: Video,
      price: "od 1,500 PLN", 
      features: ["Film 4K", "Montaż", "Muzyka", "Materiał z drona"]
    },
    {
      title: "Kampania reklamowa online",
      description: "Promocja w internecie",
      icon: TrendingUp,
      price: "od 2,000 PLN",
      features: ["Facebook/Instagram", "Google Ads", "Targeting", "Raportowanie"]
    }
  ];

  const packages = [
    {
      name: "STARTER",
      price: "1,500 PLN",
      description: "Podstawowy pakiet marketingowy",
      features: [
        "Sesja fotograficzna (20 zdjęć)",
        "Publikacja na głównych portalach", 
        "Media społecznościowe (Facebook)",
        "Podstawowe materiały graficzne"
      ],
      popular: false
    },
    {
      name: "PROFESSIONAL",
      price: "3,500 PLN", 
      description: "Kompleksowa promocja nieruchomości",
      features: [
        "Sesja fotograficzna premium (40 zdjęć)",
        "Wirtualne zwiedzanie 3D",
        "Film promocyjny",
        "Kampania online (Facebook, Instagram)",
        "Landing page nieruchomości",
        "Materiały drukowane"
      ],
      popular: true
    },
    {
      name: "LUXURY",
      price: "6,500 PLN",
      description: "Ekskluzywny marketing dla luksusowych nieruchomości", 
      features: [
        "Wszystko z pakietu Professional",
        "Materiał z drona 4K",
        "Sesja lifestyle'owa",
        "PR w mediach branżowych",
        "Dedykowana strona internetowa",
        "Kampania Google Ads",
        "Personal branding agenta"
      ],
      popular: false
    }
  ];

  const results = [
    { metric: "Średni czas sprzedaży", value: "30% krócej", description: "Dzięki profesjonalnym materiałom" },
    { metric: "Wzrost zainteresowania", value: "+150%", description: "Więcej odsłon i kontaktów" },
    { metric: "Wyższa cena sprzedaży", value: "+8%", description: "Lepsze pozycjonowanie oferty" },
    { metric: "Zadowolenie klientów", value: "98%", description: "Pozytywne opinie właścicieli" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('marketing.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('marketing.hero.description')}
            </p>
          </div>

          {/* Results Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {results.map((result, index) => (
              <Card key={index}>
                <CardContent className="text-center py-6">
                  <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                  <div className="font-medium mb-1">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="services" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">Usługi</TabsTrigger>
              <TabsTrigger value="packages">Pakiety</TabsTrigger>
              <TabsTrigger value="process">Proces</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                <Star className="w-4 h-4 text-primary fill-current" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          <Link to="/kontakt">
                            <Button className="w-full">Zamów usługę</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="packages" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Najpopularniejszy
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-primary fill-current" />
                            {feature}
                          </div>
                        ))}
                        <Link to="/kontakt">
                          <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                            Wybierz pakiet
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-center">Jak przebiega współpraca?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: "Konsultacja", description: "Omówienie potrzeb i dobór odpowiedniego pakietu", icon: Users },
                    { step: 2, title: "Planowanie", description: "Ustalenie harmonogramu i przygotowanie sesji", icon: Target },
                    { step: 3, title: "Realizacja", description: "Profesjonalne wykonanie materiałów marketingowych", icon: Camera },
                    { step: 4, title: "Promocja", description: "Publikacja i prowadzenie kampanii reklamowej", icon: BarChart3 }
                  ].map((phase, index) => {
                    const IconComponent = phase.icon;
                    return (
                      <Card key={index} className="text-center">
                        <CardContent className="py-6">
                          <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div className="text-lg font-semibold mb-2">
                            {phase.step}. {phase.title}
                          </div>
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">
                Gotowy, aby zwiększyć wartość swojej nieruchomości?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Skontaktuj się z nami już dziś i zobacz, jak profesjonalny marketing może 
                przyspieszić sprzedaż i zwiększyć końcową cenę Twojej nieruchomości
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/konsultacja?category=marketing&source=marketing">
                  <Button size="lg">Bezpłatna konsultacja</Button>
                </Link>
                <Link to="/media">
                  <Button size="lg" variant="outline">Zobacz portfolio</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingService;