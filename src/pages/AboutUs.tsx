import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Globe, Star, Building, Award, Euro } from "lucide-react";
import realEstateOffice from "@/assets/real-estate-office.jpg";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  const achievements = [
    {
      icon: Trophy,
      number: "500+",
      title: t('about.achievement.transactions'),
      description: t('about.achievement.transactions.desc')
    },
    {
      icon: Euro,
      number: "2.5 mld",
      title: t('about.achievement.value'),
      description: t('about.achievement.value.desc')
    },
    {
      icon: Users,
      number: "98%",
      title: t('about.achievement.satisfaction'), 
      description: t('about.achievement.satisfaction.desc')
    },
    {
      icon: Award,
      number: "15+",
      title: t('about.achievement.awards'),
      description: t('about.achievement.awards.desc')
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Założenie firmy",
      description: "Premium Partners International rozpoczyna działalność na rynku nieruchomości w Krakowie"
    },
    {
      year: "2015", 
      title: "Ekspansja międzynarodowa",
      description: "Nawiązanie współpracy z międzynarodowymi sieciami agencji nieruchomości"
    },
    {
      year: "2018",
      title: "Cyfrowa transformacja", 
      description: "Wdrożenie nowoczesnych technologii VR i wirtualnych wizyt"
    },
    {
      year: "2020",
      title: "Lider rynku premium",
      description: "Uznanie jako lider sprzedaży nieruchomości luksusowych w Małopolsce"
    },
    {
      year: "2024",
      title: "Nowe perspektywy",
      description: "Kontynuujemy innowacje i rozszerzamy portfolio o nowe lokalizacje"
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
                {t('about.hero.title')} <span className="font-bold text-luxury-gold">{t('about.hero.title.span')}</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-4xl mx-auto leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light text-luxury-charcoal mb-6">
                  {t('about.mission.title')} <span className="font-bold text-luxury-gold">{t('about.mission.title.span')}</span>
                </h2>
                <p className="text-luxury-gray leading-relaxed mb-6">
                  {t('about.mission.description.1')}
                </p>
                <p className="text-luxury-gray leading-relaxed">
                  {t('about.mission.description.2')}
                </p>
              </div>
              <div className="relative">
                <img 
                  src={realEstateOffice} 
                  alt="Nasze biuro" 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('about.achievements.title')} <span className="font-bold text-luxury-gold">{t('about.achievements.title.span')}</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                {t('about.achievements.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <div className="text-3xl font-bold text-luxury-gold mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-semibold text-luxury-charcoal mb-2">{achievement.title}</h3>
                  <p className="text-sm text-luxury-gray">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('about.history.title')} <span className="font-bold text-luxury-gold">{t('about.history.title.span')}</span>
              </h2>
              <p className="text-lg text-luxury-gray">
                {t('about.history.description')}
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-luxury-gold/20"></div>

              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:px-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <Badge className="bg-luxury-gold text-luxury-charcoal mr-4 text-lg px-4 py-2">
                            {item.year}
                          </Badge>
                          <h3 className="text-xl font-semibold text-luxury-charcoal">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-luxury-gray leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:block w-4 h-4 bg-luxury-gold rounded-full border-4 border-background shadow-lg z-10"></div>

                    <div className="flex-1 lg:px-8 mt-8 lg:mt-0">
                      {/* Spacer for alternating layout */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                {t('about.values.title')} <span className="font-bold text-luxury-gold">{t('about.values.title.span')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={luxuryApartment} 
                  alt="Luksusowe mieszkanie" 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/30 to-transparent rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{t('about.values.individual.title')}</h3>
                    <p className="text-luxury-gray">
                      {t('about.values.individual.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{t('about.values.portfolio.title')}</h3>
                    <p className="text-luxury-gray">
                      {t('about.values.portfolio.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">{t('about.values.international.title')}</h3>
                    <p className="text-luxury-gray">
                      {t('about.values.international.desc')}
                    </p>
                  </div>
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

export default AboutUs;