import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Car, Coffee, Wifi, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import realEstateOffice from "@/assets/real-estate-office.jpg";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";

const Office = () => {
  const { t } = useLanguage();
  
  const officeFeatures = [
    {
      icon: Users,
      title: "Sale konferencyjne",
      description: "Nowoczesne sale do spotkań z klientami wyposażone w najnowsze technologie"
    },
    {
      icon: Coffee,
      title: "Strefa relaksu",
      description: "Komfortowa przestrzeń do rozmów w przyjaznej atmosferze"
    },
    {
      icon: Wifi,
      title: "Nowoczesne technologie",
      description: "VR tours, interaktywne prezentacje i szybki internet"
    },
    {
      icon: Car,
      title: "Parking dla klientów",
      description: "Bezpłatne miejsca parkingowe w centrum miasta"
    }
  ];

  const officeHours = [
    { day: "Poniedziałek - Piątek", hours: "9:00 - 18:00" },
    { day: "Sobota", hours: "10:00 - 15:00" },
    { day: "Niedziela", hours: "Umówione spotkania" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Rynek Główny 1, 31-042 Kraków",
      subtitle: "Stare Miasto, tuż przy Sukiennicach"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+48 12 345 67 89",
      subtitle: "Dostępni 7 dni w tygodniu"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "biuro@premium-partners.pl",
      subtitle: "Odpowiemy w ciągu 2 godzin"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-luxury-charcoal mb-6">
                {t('office.title')} <span className="font-bold text-luxury-gold">{t('office.title.span')}</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-4xl mx-auto leading-relaxed">
                {t('office.description')}
              </p>
            </div>

            {/* Main office image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-2xl mb-12">
              <img 
                src={realEstateOffice}
                alt="Nasze biuro Premium Partners International"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Premium Partners International</h3>
                  <p className="text-lg">Rynek Główny 1, Stare Miasto, Kraków</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                UDOGODNIENIA W <span className="font-bold text-luxury-gold">BIURZE</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                Stworzyliśmy przestrzeń, która sprzyja komfortowym rozmowom i profesjonalnym prezentacjom
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {officeFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-luxury-charcoal mb-3">{feature.title}</h3>
                  <p className="text-luxury-gray text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>

            {/* Office gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <img 
                  src={luxuryApartment} 
                  alt="Sala konferencyjna"
                  className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                />
                <p className="text-center text-luxury-gray text-sm mt-2">Główna sala konferencyjna</p>
              </div>
              <div className="space-y-6">
                <div>
                  <img 
                    src={realEstateOffice} 
                    alt="Strefa recepcji"
                    className="w-full h-36 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-center text-luxury-gray text-sm mt-2">Strefa recepcji</p>
                </div>
                <div>
                  <img 
                    src={luxuryApartment} 
                    alt="Pokój VIP"
                    className="w-full h-36 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-center text-luxury-gray text-sm mt-2">Pokój VIP dla klientów premium</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-light text-luxury-charcoal mb-8">
                  {t('office.contact.title')} <span className="font-bold text-luxury-gold">{t('office.contact.title.span')}</span>
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-luxury-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-luxury-charcoal mb-1">{info.title}</h3>
                          <p className="text-luxury-charcoal font-medium mb-1">{info.content}</p>
                          <p className="text-luxury-gray text-sm">{info.subtitle}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h2 className="text-3xl font-light text-luxury-charcoal mb-8">
                  {t('office.hours.title')} <span className="font-bold text-luxury-gold">{t('office.hours.title.span')}</span>
                </h2>

                <Card className="p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-luxury-gold mr-3" />
                    <h3 className="text-xl font-semibold text-luxury-charcoal">Godziny pracy</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-luxury-light last:border-b-0">
                        <span className="text-luxury-gray">{schedule.day}</span>
                        <span className="text-luxury-charcoal font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-luxury-gold/5">
                  <h4 className="font-semibold text-luxury-charcoal mb-2">Umów wizytę</h4>
                  <p className="text-luxury-gray text-sm mb-4">
                    Chcesz nas odwiedzić? Umów się na spotkanie, aby zapewnić sobie 
                    pełną uwagę naszych ekspertów.
                  </p>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                    {t('office.visit')}
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('office.location.title')} <span className="font-bold text-luxury-gold">{t('office.location.title.span')}</span>
              </h2>
              <p className="text-lg text-luxury-gray">
                Znajdziesz nas w samym sercu Krakowa, przy głównym Rynku
              </p>
            </div>

            <div className="relative h-96 bg-luxury-light rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-luxury-charcoal mb-2">Mapa lokalizacji</h3>
                  <p className="text-luxury-gray">Rynek Główny 1, 31-042 Kraków</p>
                  <Button className="mt-4 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                    Otwórz w Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Office;