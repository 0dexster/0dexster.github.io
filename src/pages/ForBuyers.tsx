import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Search, Shield, Home, Calculator, FileText, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ForBuyers = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: "Wyszukiwanie nieruchomości",
      description: "Znajdziemy idealną nieruchomość dla Ciebie",
      icon: Search,
      benefits: ["Dostęp do bazy off-market", "Personalizowane wyszukiwanie", "Analiza lokalizacji", "Prezentacje obiektów"]
    },
    {
      title: "Analiza inwestycyjna",
      description: "Ocena potencjału inwestycyjnego",
      icon: Calculator,
      benefits: ["Analiza ROI", "Prognoza cen", "Koszty utrzymania", "Potencjał wzrostu wartości"]
    },
    {
      title: "Obsługa prawna",
      description: "Bezpieczna realizacja transakcji",
      icon: Shield,
      benefits: ["Sprawdzenie dokumentów", "Due diligence", "Negocjacje warunków", "Akt notarialny"]
    },
    {
      title: "Doradztwo finansowe",
      description: "Pomoc w finansowaniu zakupu",
      icon: FileText,
      benefits: ["Kredyt hipoteczny", "Negocjacja warunków", "Ubezpieczenia", "Optymalizacja kosztów"]
    }
  ];

  const buyerTypes = [
    {
      type: "Pierwszy zakup",
      icon: Home,
      description: "Kupujesz swoją pierwszą nieruchomość?",
      benefits: ["Przewodnik krok po kroku", "Edukacja o rynku", "Pomoc z kredytem", "Program dla młodych"]
    },
    {
      type: "Inwestor",
      icon: Calculator, 
      description: "Szukasz dochodowej inwestycji?",
      benefits: ["Analiza rentowności", "Lokalizacje z potencjałem", "Strategie inwestycyjne", "Portfel nieruchomości"]
    },
    {
      type: "Upgrade mieszkania",
      icon: Heart,
      description: "Chcesz zmienić na większe/lepsze?",
      benefits: ["Jednoczesna sprzedaż i zakup", "Finansowanie pomostowe", "Wycena obecnej", "Płynna wymiana"]
    }
  ];

  const process = [
    { step: 1, title: "Konsultacja", description: "Określenie potrzeb i budżetu" },
    { step: 2, title: "Wyszukiwanie", description: "Dobór nieruchomości według kryteriów" },
    { step: 3, title: "Prezentacje", description: "Organizacja pokazów wybranych obiektów" },
    { step: 4, title: "Analiza", description: "Ocena prawna i finansowa ofert" },
    { step: 5, title: "Negocjacje", description: "Wynegocjowanie najlepszych warunków" },
    { step: 6, title: "Finalizacja", description: "Podpisanie umowy i odbiór kluczy" }
  ];

  const tips = [
    {
      title: "Określ swój budżet",
      description: "Uwzględnij kredyt, własne środki i koszty dodatkowe (notariusz, podatek, remont)."
    },
    {
      title: "Wybierz lokalizację",
      description: "Pomyśl o komunikacji, szkołach, sklepach i planach rozwoju dzielnicy."
    },
    {
      title: "Sprawdź dokumenty",
      description: "Księga wieczysta, pozwolenia, zadłużenia - wszystko musi być w porządku."
    },
    {
      title: "Zbadaj rynek",
      description: "Porównaj ceny podobnych nieruchomości w okolicy, żeby nie przepłacić."
    },
    {
      title: "Planuj długoterminowo",
      description: "Czy nieruchomość będzie odpowiadać Twoim potrzebom za 5-10 lat?"
    },
    {
      title: "Nie bój się negocjować",
      description: "Cena wywoławcza to punkt wyjścia do rozmów, nie ostateczna oferta."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('buyers.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('buyers.hero.description')}
            </p>
          </div>

          {/* Buyer Types */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {buyerTypes.map((buyer, index) => {
              const IconComponent = buyer.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{buyer.type}</CardTitle>
                    <CardDescription>{buyer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {buyer.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <Link to="/kontakt">
                      <Button className="w-full mt-4">Rozpocznij współpracę</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs defaultValue="services" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">Nasze usługi</TabsTrigger>
              <TabsTrigger value="process">Proces zakupu</TabsTrigger>
              <TabsTrigger value="tips">Porady eksperta</TabsTrigger>
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

            <TabsContent value="process" className="mt-6">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-center">Jak przebiega proces zakupu?</h3>
                
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

            <TabsContent value="tips" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Porady eksperta</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tips.map((tip, index) => (
                    <Card key={index}>
                      <CardContent className="py-6">
                        <h4 className="font-semibold mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Pricing */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Koszty dla kupujących</CardTitle>
              <CardDescription>Przejrzysta struktura opłat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">BEZPŁATNIE</div>
                    <div className="font-medium mb-2">Wyszukiwanie</div>
                    <div className="text-sm text-muted-foreground">Znajdowanie i pokazywanie nieruchomości</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">2%</div>
                    <div className="font-medium mb-2">Prowizja sukcesu</div>
                    <div className="text-sm text-muted-foreground">Płatne tylko po zakupie (od ceny nieruchomości)</div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  * Pierwsza konsultacja i wyszukiwanie zawsze bezpłatne. Prowizja tylko po pomyślnym zakupie.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">
                Znajdź swoją wymarzoną nieruchomość
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Umów się na bezpłatną konsultację i rozpocznij poszukiwania idealnej nieruchomości 
                z pomocą naszych ekspertów.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/konsultacja?category=zakup&source=buyers">
                  <Button size="lg">Bezpłatna konsultacja</Button>
                </Link>
                <Link to="/nieruchomosci">
                  <Button size="lg" variant="outline">Zobacz oferty</Button>
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

export default ForBuyers;