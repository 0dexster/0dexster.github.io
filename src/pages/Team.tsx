import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Award, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "Dyrektor Generalny",
      image: luxuryApartment,
      description: "Ekspertka z 15-letnim doświadczeniem w branży nieruchomości luksusowych. Absolwentka SGH, specjalistka w zakresie inwestycji premium.",
      specializations: ["Nieruchomości luksusowe", "Inwestycje komercyjne", "Międzynarodowy rynek"],
      achievements: ["200+ zrealizowanych transakcji", "50 mln PLN wartość sprzedaży", "Certyfikat SIOR"],
      phone: "+48 123 456 789",
      email: "anna.kowalska@premium-partners.pl",
      languages: ["Polski", "Angielski", "Niemiecki"]
    },
    {
      id: 2,
      name: "Marek Nowak",
      position: "Senior Real Estate Agent",
      image: luxuryApartment,
      description: "Specjalista w zakresie apartamentów w centrum Krakowa. Zna każdy zabytek i tajemnicę Starego Miasta jak własną kieszeń.",
      specializations: ["Stare Miasto", "Apartamenty historyczne", "Renowacje"],
      achievements: ["150+ transakcji w Starym Mieście", "Ekspert ds. zabytków", "10 lat w branży"],
      phone: "+48 123 456 790",
      email: "marek.nowak@premium-partners.pl",
      languages: ["Polski", "Angielski", "Rosyjski"]
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      position: "Luxury Property Consultant",
      image: luxuryApartment,
      description: "Konsultantka ds. nieruchomości luksusowych z wykształceniem prawniczym. Specjalizuje się w obsłudze klientów VIP.",
      specializations: ["Penthouse'y", "Villas", "Klienci VIP"],
      achievements: ["Najwyższa sprzedaż w 2023", "Certyfikat Luxury Specialist", "120+ zadowolonych klientów"],
      phone: "+48 123 456 791",
      email: "katarzyna.wisniewska@premium-partners.pl", 
      languages: ["Polski", "Angielski", "Francuski"]
    },
    {
      id: 4,
      name: "Tomasz Kowalczyk",
      position: "Investment Advisor",
      image: luxuryApartment,
      description: "Doradca inwestycyjny z tytułem MBA. Pomaga klientom w podejmowaniu strategicznych decyzji inwestycyjnych.",
      specializations: ["Analiza inwestycyjna", "ROI calculations", "Market research"],
      achievements: ["Analityk roku 2022", "100+ analiz inwestycyjnych", "Certyfikat CFA Level 2"],
      phone: "+48 123 456 792",
      email: "tomasz.kowalczyk@premium-partners.pl",
      languages: ["Polski", "Angielski"]
    },
    {
      id: 5,
      name: "Robert Zieliński",
      position: "Marketing Director",
      image: luxuryApartment,
      description: "Kreator kampanii marketingowych dla nieruchomości premium. Ekspert w zakresie digital marketingu i fotografii nieruchomości.",
      specializations: ["Digital marketing", "Fotografia nieruchomości", "Social media"],
      achievements: ["50+ kampanii marketingowych", "Wzrost sprzedaży o 200%", "Nagroda Marketing Excellence"],
      phone: "+48 123 456 793",
      email: "robert.zielinski@premium-partners.pl",
      languages: ["Polski", "Angielski", "Hiszpański"]
    },
    {
      id: 6,
      name: "Magdalena Król",
      position: "Legal Advisor",
      image: luxuryApartment,
      description: "Radca prawny specjalizujący się w prawie nieruchomości. Zapewnia bezpieczeństwo prawne każdej transakcji.",
      specializations: ["Prawo nieruchomości", "Umowy deweloperskie", "Due diligence"],
      achievements: ["15 lat praktyki prawniczej", "Zero sporów prawnych", "Certyfikat RICS"],
      phone: "+48 123 456 794",
      email: "magdalena.krol@premium-partners.pl",
      languages: ["Polski", "Angielski"]
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
                {t('team.title')} <span className="font-bold text-luxury-gold">{t('team.title.span')}</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-4xl mx-auto leading-relaxed">
                {t('team.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500">
                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 to-transparent" />
                    
                    {/* Name overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-luxury-gold font-medium">{member.position}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <p className="text-luxury-gray text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-luxury-charcoal text-sm mb-2">Specjalizacje:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specializations.map((spec, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-luxury-gold/10 text-luxury-gold text-xs px-2 py-1 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-luxury-charcoal text-sm mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Osiągnięcia:
                      </h4>
                      <ul className="text-xs text-luxury-gray space-y-1">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Star className="w-3 h-3 text-luxury-gold mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-luxury-charcoal text-sm mb-2">Języki:</h4>
                      <p className="text-xs text-luxury-gray">{member.languages.join(", ")}</p>
                    </div>

                    {/* Contact buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Phone className="w-3 h-3 mr-1" />
                        {t('team.contact')}
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <Linkedin className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                SKONTAKTUJ SIĘ Z <span className="font-bold text-luxury-gold">EKSPERTEM</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto mb-8">
                Nasi doradcy są dostępni, aby pomóc Ci znaleźć idealną nieruchomość 
                lub odpowiedzieć na wszystkie pytania dotyczące rynku nieruchomości.
              </p>
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                Umów konsultację
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;