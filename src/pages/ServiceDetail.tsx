import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Globe, Award, Shield, Phone, Mail, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceDetail = () => {
  const { service } = useParams();
  const { t } = useLanguage();
  
  const serviceData: { [key: string]: any } = {
    "spotkanie": {
      icon: Users,
      title: "WYJĄTKOWE SPOTKANIE",
      subtitle: "DLA KLIENTÓW PARTNERS INTERNATIONAL",
      description: "Oferujemy ekskluzywne spotkania dla naszych najbardziej cenionych klientów. To unikalny program dedykowany osobom poszukującym najwyższej jakości obsługi w zakresie nieruchomości luksusowych.",
      image: "/api/placeholder/800/400",
      features: [
        "Indywidualna konsultacja z ekspertem",
        "Prezentacja ekskluzywnych ofert",
        "Analiza rynku nieruchomości premium",
        "Doradztwo w zakresie inwestycji",
        "Usługi concierge",
        "Dostęp do zamkniętych ofert"
      ],
      benefits: [
        "Priorytetowe traktowanie",
        "Dostęp do najlepszych nieruchomości",
        "Profesjonalne doradztwo",
        "Kompleksowa obsługa transakcji"
      ]
    },
    "zagraniczne": {
      icon: Globe,
      title: "NIERUCHOMOŚCI ZAGRANICZNE",
      subtitle: "INWESTYCJE NA CAŁYM ŚWIECIE",
      description: "Specjalizujemy się w pośrednictwie nieruchomości zagranicznych, oferując inwestycje w najpiękniejszych lokalizacjach na świecie. Nasz międzynarodowy zespół zapewnia profesjonalną obsługę na każdym etapie transakcji.",
      image: "/api/placeholder/800/400",
      features: [
        "Nieruchomości w Europie Zachodniej",
        "Luksusowe wille i apartamenty",
        "Inwestycje w kurortach",
        "Obsługa prawna w wielu krajach",
        "Doradztwo podatkowe",
        "Zarządzanie nieruchomościami"
      ],
      benefits: [
        "Dywersyfikacja portfela",
        "Potencjał wzrostu wartości",
        "Możliwość generowania dochodu",
        "Prestiżowe lokalizacje"
      ]
    },
    "deluxe": {
      icon: Award,
      title: "FIRST CLASS EXPERIENCE",
      subtitle: "TEAM DELUXE",
      description: "Nasz zespół Deluxe składa się z najbardziej doświadczonych specjalistów w branży nieruchomości luksusowych. Oferujemy najwyższy standard obsługi dla najbardziej wymagających klientów.",
      image: "/api/placeholder/800/400",
      features: [
        "Doświadczeni agenci premium",
        "Indywidualne podejście",
        "24/7 dostępność",
        "Prywatne prezentacje nieruchomości",
        "VIP transport",
        "Ekskluzywne wydarzenia"
      ],
      benefits: [
        "Najwyższa jakość usług",
        "Szybkość realizacji",
        "Dyskrecja i profesjonalizm",
        "Dostęp do unikatowych ofert"
      ]
    },
    "sekretne": {
      icon: Shield,
      title: "POZNAJ SEKRETNE OFERTY",
      subtitle: "LUKSUSOWYCH NIERUCHOMOŚCI",
      description: "Mamy dostęp do ekskluzywnych ofert, które nie są dostępne publicznie. To wyjątkowe nieruchomości oferowane tylko naszym zaufanym klientom w ramach programu dostępu premium.",
      image: "/api/placeholder/800/400",
      features: [
        "Oferty spoza rynku publicznego",
        "Nieruchomości VIP",
        "Zamknięte aukcje",
        "Prywatne negocjacje",
        "Pierwszeństwo w rezerwacji",
        "Specjalne warunki finansowania"
      ],
      benefits: [
        "Unikalność ofert",
        "Korzystne ceny",
        "Brak konkurencji",
        "Ekskluzywność lokalizacji"
      ]
    }
  };

  const currentService = serviceData[service || "spotkanie"];
  const Icon = currentService.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót do strony głównej
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <div 
              className="absolute inset-0 bg-luxury-light bg-cover bg-center"
              style={{ backgroundImage: `url(${currentService.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 via-luxury-charcoal/60 to-transparent" />
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <div className="flex items-center mb-4">
                    <Icon className="w-12 h-12 text-luxury-gold mr-4" />
                    <div>
                      <span className="text-sm font-medium text-luxury-gold uppercase tracking-wider block">
                        CZAS AI
                      </span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {currentService.title}
                  </h1>
                  <h2 className="text-xl font-light text-luxury-gold mb-6">
                    {currentService.subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">O usłudze</h2>
                <p className="text-luxury-gray leading-relaxed mb-4">
                  {currentService.description}
                </p>
                <p className="text-luxury-gray leading-relaxed">
                  {t('lorem.long')}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">Co obejmuje usługa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-luxury-gray">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">Korzyści</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.benefits.map((benefit: string, index: number) => (
                    <Card key={index} className="p-4 border-luxury-gold/20">
                      <div className="flex items-center text-luxury-charcoal">
                        <div className="w-3 h-3 bg-luxury-gold rounded-full mr-3 flex-shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal">Zainteresowany?</h3>
                
                <div className="mb-6">
                  <p className="text-luxury-gray text-sm mb-4">
                    Skontaktuj się z naszym ekspertem, aby dowiedzieć się więcej o tej usłudze.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    +48 22 123 45 67
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Wyślij e-mail
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Umów spotkanie
                  </Button>
                </div>

                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold">
                  Zapytaj o szczegóły
                </Button>

                <div className="mt-6 p-4 bg-luxury-light rounded-lg">
                  <p className="text-sm text-luxury-gray text-center">
                    <strong>Bezpłatna konsultacja</strong><br />
                    Skontaktuj się z nami już dziś
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;