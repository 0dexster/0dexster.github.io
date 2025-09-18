import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, TrendingUp, Shield, Clock, Calculator, FileText, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ForSellers = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: "Wycena nieruchomości",
      description: "Bezpłatna profesjonalna wycena",
      icon: Calculator,
      benefits: ["Analiza rynkowa", "Raport wyceny", "Strategia cenowa", "Porównanie konkurencji"]
    },
    {
      title: "Przygotowanie dokumentacji",
      description: "Kompletna obsługa prawna",
      icon: FileText,
      benefits: ["Przegląd dokumentów", "Księgi wieczyste", "Zaświadczenia", "Pełnomocnictwa"]
    },
    {
      title: "Marketing i promocja",
      description: "Skuteczna promocja nieruchomości",
      icon: TrendingUp,
      benefits: ["Sesja fotograficzna", "Portale internetowe", "Media społecznościowe", "Materiały reklamowe"]
    },
    {
      title: "Obsługa transakcji",
      description: "Pełne wsparcie podczas sprzedaży",
      icon: Shield,
      benefits: ["Negocjacje cenowe", "Umowa przedwstępna", "Akt notarialny", "Odbiór kluczy"]
    }
  ];

  const process = [
    { step: 1, title: "Bezpłatna wycena", time: "1 dzień", description: "Spotkanie u Ciebie w domu" },
    { step: 2, title: "Umowa z agentem", time: "1 dzień", description: "Podpisanie umowy pośrednictwa" },
    { step: 3, title: "Przygotowanie", time: "3-5 dni", description: "Dokumenty i materiały marketingowe" },
    { step: 4, title: "Promocja", time: "Od zaraz", description: "Publikacja i promocja oferty" },
    { step: 5, title: "Prezentacje", time: "Bieżąco", description: "Organizacja pokazów nieruchomości" },
    { step: 6, title: "Finalizacja", time: "1-2 tygodni", description: "Podpisanie umowy i odbiór" }
  ];

  const testimonials = [
    {
      name: "Anna Kowalska",
      location: "Warszawa",
      text: "Dzięki profesjonalnemu podejściu sprzedałam mieszkanie 20% powyżej pierwotnej wyceny. Polecam!",
      rating: 5
    },
    {
      name: "Marek Nowak", 
      location: "Kraków",
      text: "Cały proces sprzedaży przebiegł bez problemów. Agenci byli bardzo pomocni i doświadczeni.",
      rating: 5
    },
    {
      name: "Ewa Wiśniewska",
      location: "Gdańsk", 
      text: "Sprzedaż w 3 tygodnie! Nie spodziewałam się tak szybkiego efektu. Bardzo dziękuję!",
      rating: 5
    }
  ];

  const benefits = [
    "Oszczędność czasu - my zajmujemy się wszystkim",
    "Profesjonalny marketing zwiększający wartość",
    "Doświadczeni negocjatorzy",
    "Pełna obsługa prawna",
    "Bezpieczeństwo transakcji",
    "Brak ukrytych kosztów"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('sellers.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('sellers.hero.description')}
            </p>
          </div>

          {/* Key Benefits */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Dlaczego warto z nami współpracować?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <TabsTrigger value="services">Nasze usługi</TabsTrigger>
              <TabsTrigger value="process">Proces sprzedaży</TabsTrigger>
              <TabsTrigger value="testimonials">Opinie klientów</TabsTrigger>
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
                <h3 className="text-2xl font-semibold text-center">Jak przebiega proces sprzedaży?</h3>
                
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
                          <div className="text-right">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {phase.time}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">Co mówią nasi klienci?</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="py-6">
                        <div className="space-y-4">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-sm italic">"{testimonial.text}"</p>
                          <div className="border-t pt-4">
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
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
              <CardTitle className="text-2xl">Transparentne prowizje</CardTitle>
              <CardDescription>Płacisz tylko za sukces - po sprzedaży nieruchomości</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">3%</div>
                    <div className="font-medium mb-2">Mieszkania</div>
                    <div className="text-sm text-muted-foreground">od wartości transakcji</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">4%</div>
                    <div className="font-medium mb-2">Domy</div>
                    <div className="text-sm text-muted-foreground">od wartości transakcji</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">5%</div>
                    <div className="font-medium mb-2">Działki</div>
                    <div className="text-sm text-muted-foreground">od wartości transakcji</div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  * Prowizja płatna tylko po pomyślnej sprzedaży. Bez ukrytych kosztów.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">
                Gotowy na sprzedaż swojej nieruchomości?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Umów się na bezpłatną wycenę i konsultację. Przekonaj się, jak możemy pomóc 
                Ci sprzedać nieruchomość szybko i po najlepszej cenie.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/konsultacja?category=wycena&source=sellers">
                  <Button size="lg">Bezpłatna wycena</Button>
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

export default ForSellers;