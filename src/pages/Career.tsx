import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Euro, Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import realEstateOffice from "@/assets/real-estate-office.jpg";

const Career = () => {
  const { t } = useLanguage();
  
  const jobOffers = [
    {
      id: 1,
      title: "Senior Real Estate Agent",
      location: "Kraków, Stare Miasto",
      type: "Pełny etat",
      salary: "8,000 - 15,000 PLN + prowizja",
      experience: "3+ lat doświadczenia",
      description: "Poszukujemy doświadczonego agenta nieruchomości do obsługi klientów premium. Oferujemy atrakcyjny system prowizyjny i możliwości rozwoju.",
      requirements: [
        "Minimum 3 lata doświadczenia w sprzedaży nieruchomości",
        "Znajomość rynku nieruchomości w Krakowie",
        "Licencja pośrednika w obrocie nieruchomościami",
        "Biegła znajomość języka angielskiego",
        "Umiejętności komunikacyjne i negocjacyjne"
      ]
    },
    {
      id: 2,
      title: "Marketing Specialist",
      location: "Kraków, Kazimierz",
      type: "Pełny etat",
      salary: "6,000 - 10,000 PLN",
      experience: "2+ lat doświadczenia",
      description: "Szukamy kreatywnego specjalisty ds. marketingu do promocji luksusowych nieruchomości w mediach cyfrowych.",
      requirements: [
        "Doświadczenie w marketingu cyfrowym",
        "Znajomość Google Ads i Facebook Ads",
        "Umiejętność tworzenia contentu",
        "Znajomość Adobe Creative Suite",
        "Kreatywność i innowacyjność"
      ]
    },
    {
      id: 3,
      title: "Property Manager",
      location: "Kraków, Podgórze",
      type: "Pełny etat",
      salary: "7,000 - 12,000 PLN",
      experience: "2+ lat doświadczenia",
      description: "Oferujemy stanowisko menedżera nieruchomości odpowiedzialnego za zarządzanie portfolio luksusowych nieruchomości.",
      requirements: [
        "Wykształcenie wyższe techniczne lub ekonomiczne",
        "Doświadczenie w zarządzaniu nieruchomościami",
        "Znajomość przepisów budowlanych",
        "Umiejętności organizacyjne",
        "Znajomość języka angielskiego"
      ]
    }
  ];

  const benefits = [
    {
      icon: Euro,
      title: "Konkurencyjne wynagrodzenie",
      description: "Atrakcyjne pensje plus system prowizyjny za osiągnięte wyniki"
    },
    {
      icon: GraduationCap,
      title: "Rozwój zawodowy",
      description: "Szkolenia, kursy i certyfikacje finansowane przez firmę"
    },
    {
      icon: Users,
      title: "Zespół profesjonalistów",
      description: "Praca z najlepszymi ekspertami w branży nieruchomości"
    },
    {
      icon: Briefcase,
      title: "Stabilność zatrudnienia",
      description: "Długoterminowe kontrakty i możliwość awansu wewnętrznego"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-light text-luxury-charcoal mb-6">
                {t('career.title')} <span className="font-bold text-luxury-gold">{t('career.title.span')}</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
                {t('career.description')}
              </p>
            </div>

            <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={realEstateOffice}
                alt="Nasze biuro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/70 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Rozwijaj się z nami</h3>
                  <p className="text-lg">Twoja kariera w luksusowych nieruchomościach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('career.why.title')} <span className="font-bold text-luxury-gold">{t('career.why.title.span')}</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                Poznaj korzyści pracy w Premium Partners International
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-luxury-charcoal mb-3">{benefit.title}</h3>
                  <p className="text-luxury-gray text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Offers Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('career.positions.title')} <span className="font-bold text-luxury-gold">{t('career.positions.title.span')}</span>
              </h2>
              <p className="text-lg text-luxury-gray">
                Sprawdź dostępne stanowiska w naszej firmie
              </p>
            </div>

            <div className="space-y-8">
              {jobOffers.map((job) => (
                <Card key={job.id} className="p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-luxury-charcoal">{job.title}</h3>
                        <Badge className="bg-luxury-gold text-luxury-charcoal">{job.type}</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-luxury-gray mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Euro className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>

                      <p className="text-luxury-gray mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-luxury-charcoal mb-2">Wymagania:</h4>
                        <ul className="text-sm text-luxury-gray space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:ml-8 mt-4 lg:mt-0">
                      <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                        {t('career.apply')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        Więcej informacji
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                SPONTANICZNA <span className="font-bold text-luxury-gold">APLIKACJA</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto mb-8">
                Nie znalazłeś odpowiedniego stanowiska? Wyślij nam swoje CV, a skontaktujemy się z Tobą, 
                gdy pojawi się oferta dopasowana do Twoich kompetencji.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">
                  {t('career.send_cv')}
                </Button>
                <p className="text-sm text-luxury-gray">
                  Lub napisz do nas: <span className="text-luxury-gold">kariera@premium-partners.pl</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;