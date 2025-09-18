import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Search, Shield, FileText, Calculator, Key, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ForTenants = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: "Wyszukiwanie mieszkań",
      description: "Znajdziemy idealne mieszkanie do wynajmu",
      icon: Search,
      benefits: ["Dostęp do ekskluzywnych ofert", "Personalizowane wyszukiwanie", "Negocjacje ceny", "Prezentacje obiektów"]
    },
    {
      title: "Pomoc w formalnościach",
      description: "Wsparcie w procesie wynajmu",
      icon: FileText,
      benefits: ["Przygotowanie dokumentów", "Analiza umowy najmu", "Doradztwo prawne", "Rozliczenie mediów"]
    },
    {
      title: "Gwarancje i ubezpieczenia",
      description: "Bezpieczeństwo wynajmu",
      icon: Shield,
      benefits: ["Ubezpieczenie mieszkania", "Gwarancja kaucji", "Pomoc w sporach", "Ochrona prawna"]
    },
    {
      title: "Wsparcie podczas najmu",
      description: "Pomoc przez cały okres najmu",
      icon: Users,
      benefits: ["Kontakt z właścicielem", "Koordynacja napraw", "Rozliczenia", "Przedłużenie umowy"]
    }
  ];

  const tenantTypes = [
    {
      type: "Student",
      icon: Home,
      description: "Szukasz mieszkania na studia?",
      benefits: ["Pokoje w akademikach prywatnych", "Mieszkania blisko uczelni", "Współlokatorzy", "Elastyczne umowy"],
      priceRange: "800-1,500 PLN"
    },
    {
      type: "Młody profesjonalista",
      icon: Calculator,
      description: "Pierwsza praca, pierwsze mieszkanie?",
      benefits: ["Studio i kawalerki", "Dobra komunikacja", "Nowoczesne wyposażenie", "Elastyczne warunki"],
      priceRange: "1,500-2,500 PLN"
    },
    {
      type: "Rodzina",
      icon: Users,
      description: "Szukacie mieszkania dla rodziny?",
      benefits: ["2-4 pokojowe mieszkania", "Bezpieczne osiedla", "Przedszkola w pobliżu", "Place zabaw"],
      priceRange: "2,000-4,000 PLN"
    }
  ];

  const tips = [
    {
      title: "Sprawdź swoją zdolność najmu",
      description: "Upewnij się, że Twoje dochody pozwolą na pokrycie czynszu i kosztów utrzymania."
    },
    {
      title: "Przygotuj dokumenty",
      description: "Zaświadczenie o dochodach, referencje z pracy, dokumenty tożsamości."
    },
    {
      title: "Czytaj umowę uważnie",
      description: "Sprawdź wszystkie warunki, koszty dodatkowe i zasady rozwiązania umowy."
    },
    {
      title: "Udokumentuj stan mieszkania", 
      description: "Zrób zdjęcia przed wprowadzeniem, żeby uniknąć problemów z kaucją."
    },
    {
      title: "Sprawdź okolice",
      description: "Komunikacja, sklepy, bezpieczeństwo - odwiedź okolicę o różnych porach."
    },
    {
      title: "Negocjuj warunki",
      description: "Nie bój się rozmawiać o cenie i warunkach najmu, szczególnie przy długich umowach."
    }
  ];

  const process = [
    { step: 1, title: "Określenie potrzeb", description: "Budżet, lokalizacja, wielkość mieszkania" },
    { step: 2, title: "Wyszukiwanie ofert", description: "Dobór mieszkań według Twoich kryteriów" },
    { step: 3, title: "Prezentacje", description: "Pokazywanie wybranych mieszkań" },
    { step: 4, title: "Aplikacja", description: "Złożenie aplikacji najmu" },
    { step: 5, title: "Weryfikacja", description: "Sprawdzenie przez właściciela" },
    { step: 6, title: "Podpisanie umowy", description: "Umowa najmu i wpłata kaucji" }
  ];

  const costs = [
    { item: "Kaucja", amount: "1-3 miesięczne czynsza", description: "Zwracana po zakończeniu najmu" },
    { item: "Czynsz", amount: "Miesięcznie", description: "Płatne z góry do 10 każdego miesiąca" },
    { item: "Media", amount: "100-300 PLN/miesiąc", description: "Prąd, gaz, woda (zależnie od zużycia)" },
    { item: "Internet", amount: "50-100 PLN/miesiąc", description: "Często w cenie czynszu" },
    { item: "Prowizja agencji", amount: "50% miesięcznego czynszu", description: "Jednorazowo za znalezienie mieszkania" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('tenants.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('tenants.hero.description')}
            </p>
          </div>

          {/* Tenant Types */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {tenantTypes.map((tenant, index) => {
              const IconComponent = tenant.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tenant.type}</CardTitle>
                    <CardDescription>{tenant.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {tenant.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-sm text-muted-foreground">Typowy budżet</div>
                        <div className="font-semibold text-primary">{tenant.priceRange}</div>
                      </div>
                      <Link to="/nieruchomosci/wynajem">
                        <Button className="w-full">Znajdź mieszkanie</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs defaultValue="services" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="services">Usługi</TabsTrigger>
              <TabsTrigger value="process">Proces</TabsTrigger>
              <TabsTrigger value="costs">Koszty</TabsTrigger>
              <TabsTrigger value="tips">Porady</TabsTrigger>
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
                <h3 className="text-2xl font-semibold text-center">Jak przebiega proces najmu?</h3>
                
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

            <TabsContent value="costs" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Koszty wynajmu mieszkania</h3>
                
                <div className="space-y-4">
                  {costs.map((cost, index) => (
                    <Card key={index}>
                      <CardContent className="py-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{cost.item}</h4>
                            <p className="text-sm text-muted-foreground">{cost.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">{cost.amount}</div>
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
                <h3 className="text-2xl font-semibold text-center">Porady dla najemców</h3>
                
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

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">
                Gotowy na znalezienie idealnego mieszkania?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Skontaktuj się z nami i rozpocznij poszukiwania swojego wymarzonego mieszkania 
                z pomocą naszych ekspertów.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/kontakt">
                  <Button size="lg">Zacznij poszukiwania</Button>
                </Link>
                <Link to="/nieruchomosci/wynajem">
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

export default ForTenants;