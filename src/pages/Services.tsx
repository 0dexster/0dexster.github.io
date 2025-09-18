import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, Shield, Home, Calculator, FileCheck, Key, HeadphonesIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import consultationService from "@/assets/consultation-service.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const mainServices = [
    {
      icon: Home,
      title: "SPRZEDAŻ NIERUCHOMOŚCI",
      description: "Kompleksowa obsługa sprzedaży Twojej nieruchomości od profesjonalnej wyceny po przekazanie kluczy nowemu właścicielowi",
      features: ["Bezpłatna wycena rynkowa", "Marketing sprzedażowy", "Negocjacje z kupującymi", "Obsługa prawna i notarialna"],
      price: "Prowizja od 3%",
      popular: false,
      timeframe: "30-45 dni"
    },
    {
      icon: Key,
      title: "ZAKUP NIERUCHOMOŚCI", 
      description: "Pomożemy Ci znaleźć i kupić idealną nieruchomość dopasowaną do Twoich potrzeb, budżetu i stylu życia",
      features: ["Poszukiwanie idealnych ofert", "Organizacja oględzin", "Analiza prawna nieruchomości", "Wsparcie w uzyskaniu kredytu"],
      price: "Prowizja od 3%",
      popular: true,
      timeframe: "14-30 dni"
    },
    {
      icon: Calculator,
      title: "WYCENA NIERUCHOMOŚCI",
      description: "Profesjonalna wycena nieruchomości na podstawie aktualnych analiz rynkowych i porównywalnych transakcji",
      features: ["Analiza porównawcza CMA", "Szczegółowy raport pisemny", "Aktualne ceny rynkowe", "Konsultacje eksperckie"],
      price: "Od 500 PLN",
      popular: false,
      timeframe: "3-5 dni"
    },
    {
      icon: TrendingUp,
      title: "DORADZTWO INWESTYCYJNE",
      description: "Ekspertowe doradztwo w zakresie inwestycji w nieruchomości z analizą rentowności i strategii portfela",
      features: ["Analiza ROI i rentowności", "Strategia portfela inwestycji", "Prognozy rynkowe", "Optymalizacja podatkowa"],
      price: "Indywidualnie",
      popular: false,
      timeframe: "Ciągłe wsparcie"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "FIRST CLASS EXPERIENCE",
      subtitle: "Ekskluzywna obsługa VIP dla wymagających klientów",
      description: "Najwyższy poziom obsługi dla wymagających klientów. Dostęp do ekskluzywnych ofert spoza rynku i priorytetowa obsługa przez doświadczonych ekspertów.",
      included: ["Dedykowany senior advisor", "Dostęp 24/7 przez telefon", "Ekskluzywne oferty off-market", "Priorytetowa obsługa we wszystkich sprawach"]
    },
    {
      icon: Globe,
      title: "NIERUCHOMOŚCI ZAGRANICZNE",
      subtitle: "Inwestycje międzynarodowe w Europie", 
      description: "Profesjonalna pomoc w zakupie nieruchomości za granicą. Współpracujemy z zaufanymi partnerami w krajach całej Europy.",
      included: ["Lokalny prawnik w kraju docelowym", "Profesjonalne tłumaczenia dokumentów", "Pełne wsparcie logistyczne", "Analiza podatkowa międzynarodowa"]
    },
    {
      icon: Award,
      title: "ZARZĄDZANIE NAJMEM",
      subtitle: "Pełna obsługa wynajmu nieruchomości inwestycyjnych",
      description: "Kompleksowe zarządzanie Twoją nieruchomością inwestycyjną. Maksymalizuj zyski z najmu przy minimalnym wysiłku z Twojej strony.",
      included: ["Profesjonalne poszukiwanie najemców", "Pełna obsługa prawna najmu", "Regularne kontrole stanu nieruchomości", "Prowadzenie księgowości najmu"]
    },
    {
      icon: Shield,
      title: "UBEZPIECZENIA NIERUCHOMOŚCI",
      subtitle: "Kompleksowa ochrona Twojej inwestycji",
      description: "Kompleksowe ubezpieczenia nieruchomości i odpowiedzialności cywilnej właścicieli. Zabezpiecz swoją inwestycję przed nieprzewidzianymi zdarzeniami.",
      included: ["Ubezpieczenie budynku od ognia i żywiołów", "Odpowiedzialność cywilna właściciela", "Ubezpieczenie najemcy od szkód", "Profesjonalna obsługa szkód"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "KONSULTACJA",
      description: "Bezpłatne spotkanie i analiza Twoich potrzeb"
    },
    {
      step: "02", 
      title: "STRATEGIA",
      description: "Opracowanie indywidualnej strategii działania"
    },
    {
      step: "03",
      title: "REALIZACJA", 
      description: "Profesjonalna realizacja usługi"
    },
    {
      step: "04",
      title: "WSPARCIE",
      description: "Ciągłe wsparcie po zakończeniu transakcji"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={consultationService} 
              alt="Profesjonalne usługi konsultacyjne w zakresie nieruchomości"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-luxury-light/85"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-6">
              {t('services.hero.title')}<br />
              <span className="font-bold text-luxury-gold">{t('services.hero.title.span')}</span>
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto mb-8">
              {t('services.hero.description')}
            </p>
            <Link to="/konsultacja?source=services">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
              >
                BEZPŁATNA KONSULTACJA
              </Button>
            </Link>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('services.main.title')} <span className="font-bold text-luxury-gold">{t('services.main.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('services.main.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${service.popular ? 'ring-2 ring-luxury-gold' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-luxury-gold text-luxury-charcoal font-semibold z-10">
                      POPULARNE
                    </Badge>
                  )}
                  
                  <div className="p-6">
                    <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-luxury-charcoal" />
                    </div>

                    <h3 className="text-lg font-bold text-luxury-charcoal mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-luxury-gray mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                          <span className="text-luxury-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-luxury-light pt-4">
                      <p className="text-luxury-gold font-bold mb-2">{service.price}</p>
                      <p className="text-xs text-luxury-gray mb-4">Czas realizacji: {service.timeframe}</p>
                      <Link to={`/konsultacja?category=${service.title.toLowerCase().includes('sprzedaż') ? 'sprzedaz' : service.title.toLowerCase().includes('zakup') ? 'zakup' : service.title.toLowerCase().includes('wycena') ? 'wycena' : service.title.toLowerCase().includes('doradztwo') ? 'inwestycje' : 'wycena'}&source=services`}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-charcoal group-hover:border-luxury-gold transition-all duration-300"
                        >
                          DOWIEDZ SIĘ WIĘCEJ
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('services.additional.title')} <span className="font-bold text-luxury-gold">{t('services.additional.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('services.additional.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="group p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-luxury-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-luxury-charcoal" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-luxury-charcoal mb-1">
                        {service.title}
                      </h3>
                      <p className="text-luxury-gold font-semibold mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-luxury-gray mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.included.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                            <span className="text-luxury-charcoal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('services.process.title')} <span className="font-bold text-luxury-gold">{t('services.process.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('services.process.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-luxury-charcoal">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-luxury-light transform -translate-x-1/2"></div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-luxury-charcoal mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-luxury-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-luxury-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  {t('services.support.title')} <span className="font-bold text-luxury-gold">{t('services.support.title.span')}</span>
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {t('services.support.description')}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <HeadphonesIcon className="w-6 h-6 text-luxury-gold" />
                    <span>Telefoniczne wsparcie 24/7</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-luxury-gold" />
                    <span>Dedykowany opiekun klienta</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-6 h-6 text-luxury-gold" />
                    <span>Gwarancja jakości usług</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/kontakt">
                    <Button 
                      size="lg" 
                      className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
                    >
                      ZADZWOŃ TERAZ
                    </Button>
                  </Link>
                  <Link to="/kontakt">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                    >
                      NAPISZ DO NAS
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">500+</h3>
                  <p className="text-sm">Zadowolonych klientów</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">98%</h3>
                  <p className="text-sm">Skuteczność sprzedaży</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">15</h3>
                  <p className="text-sm">Lat doświadczenia</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">24/7</h3>
                  <p className="text-sm">Dostępność</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;