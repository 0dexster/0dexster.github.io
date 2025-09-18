import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Shield, FileText, Calculator, Key, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ForLandlords = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: "Znajdowanie najemców",
      description: "Szybkie znalezienie rzetelnych najemców",
      icon: Users,
      benefits: ["Sprawdzenie zdolności", "Weryfikacja tożsamości", "Referencje z pracy", "Historia najmu"]
    },
    {
      title: "Zarządzanie najmem",
      description: "Kompleksowa obsługa wynajmu",
      icon: Key,
      benefits: ["Inkaso czynszów", "Kontrole okresowe", "Koordynacja napraw", "Dokumentacja"]
    },
    {
      title: "Obsługa prawna",
      description: "Bezpieczeństwo prawne wynajmu",
      icon: Shield,
      benefits: ["Umowy najmu", "Rozliczenia", "Procedury windykacyjne", "Doradztwo prawne"]
    },
    {
      title: "Optymalizacja zysków",
      description: "Maksymalizacja dochodów z wynajmu",
      icon: TrendingUp,
      benefits: ["Analiza rynku", "Optymalna cena", "Strategie promocji", "Sezonowość cen"]
    }
  ];

  const managementOptions = [
    {
      name: "Tylko znajdowanie najemcy",
      price: "Jednorazowo 50% miesięcznego czynszu",
      description: "Znajdziemy i sprawdzimy najemcę",
      features: [
        "Promowanie oferty",
        "Pokazywanie mieszkania", 
        "Sprawdzenie najemcy",
        "Podpisanie umowy",
        "Przekazanie kluczy"
      ],
      popular: false
    },
    {
      name: "Pełne zarządzanie",
      price: "8% miesięcznego czynszu",
      description: "Kompleksowa obsługa wynajmu",
      features: [
        "Wszystko z pakietu podstawowego",
        "Inkaso czynszów",
        "Kontrole okresowe",
        "Koordynacja napraw",
        "Rozliczenia z najemcami", 
        "Raportowanie właścicielowi"
      ],
      popular: true
    },
    {
      name: "Zarządzanie premium",
      price: "12% miesięcznego czynszu", 
      description: "Najwyższy poziom obsługi",
      features: [
        "Wszystko z pełnego zarządzania",
        "Dedykowany opiekun",
        "Monitoring 24/7",
        "Ubezpieczenie od szkód",
        "Gwarancja płatności",
        "Konserwacja prewencyjna"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Rzetelna weryfikacja najemców",
    "Profesjonalne umowy najmu",
    "Regularne inkaso czynszów", 
    "Szybka reakcja na problemy",
    "Optymalne ceny najmu",
    "Pełna dokumentacja",
    "Minimalizacja przestoju",
    "Ochrona prawna"
  ];

  const process = [
    { step: 1, title: "Wycena czynszu", description: "Analiza rynku i optymalna wycena" },
    { step: 2, title: "Przygotowanie oferty", description: "Zdjęcia i opis nieruchomości" },
    { step: 3, title: "Promocja", description: "Publikacja na portalach i w mediach" },
    { step: 4, title: "Pokazywanie", description: "Organizacja prezentacji dla kandydatów" },
    { step: 5, title: "Weryfikacja", description: "Sprawdzenie najemców pod każdym kątem" },
    { step: 6, title: "Finalizacja", description: "Umowa, kaucja i przekazanie kluczy" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('landlords.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('landlords.hero.description')}
            </p>
          </div>

          {/* Key Benefits */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t('landlords.benefits.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="services" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">{t('landlords.services.tab')}</TabsTrigger>
              <TabsTrigger value="packages">{t('landlords.packages.tab')}</TabsTrigger>
              <TabsTrigger value="process">{t('landlords.process.tab')}</TabsTrigger>
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
                        <div className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="packages" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {managementOptions.map((option, index) => (
                  <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                    {option.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Najpopularniejszy
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{option.name}</CardTitle>
                      <div className="text-lg font-bold text-primary">{option.price}</div>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {option.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {feature}
                          </div>
                        ))}
                        <Link to="/kontakt">
                          <Button className="w-full mt-6" variant={option.popular ? "default" : "outline"}>
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
                <h3 className="text-2xl font-semibold text-center">Jak przebiega proces wynajmu?</h3>
                
                <div className="space-y-4">
                  {process.map((phase, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {phase.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{phase.title}</h3>
                            <p className="text-muted-foreground">{phase.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">97%</div>
                <div className="text-sm text-muted-foreground">Zadowolonych właścicieli</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">14 dni</div>
                <div className="text-sm text-muted-foreground">Średni czas znalezienia najemcy</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Zrealizowanych wynajmów</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Terminowych płatności</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">{t('landlords.cta.title')}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('landlords.cta.description')}
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/konsultacja?category=wynajem&source=landlords">
                  <Button size="lg">Bezpłatna wycena czynszu</Button>
                </Link>
                <a href="tel:+48221234567">
                  <Button size="lg" variant="outline">Zadzwoń: +48 22 123 45 67</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForLandlords;