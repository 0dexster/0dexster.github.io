import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Camera, Coffee, Train, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import krakowAerial from "@/assets/krakow-aerial.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t } = useLanguage();
  
  const districts = [
    {
      nameKey: "location.district.stare_miasto.name",
      descriptionKey: "location.district.stare_miasto.description",
      propertiesKey: "location.district.stare_miasto.properties",
      avgPrice: "18,500 PLN/m²",
      rating: 4.9,
      highlightKeys: [
        "location.district.stare_miasto.highlight.1",
        "location.district.stare_miasto.highlight.2", 
        "location.district.stare_miasto.highlight.3",
        "location.district.stare_miasto.highlight.4"
      ],
      image: "bg-gradient-to-br from-amber-600 to-orange-800",
      growth: "+12.5%"
    },
    {
      nameKey: "location.district.kazimierz.name",
      descriptionKey: "location.district.kazimierz.description",
      propertiesKey: "location.district.kazimierz.properties",
      avgPrice: "16,200 PLN/m²",
      rating: 4.8,
      highlightKeys: [
        "location.district.kazimierz.highlight.1",
        "location.district.kazimierz.highlight.2",
        "location.district.kazimierz.highlight.3", 
        "location.district.kazimierz.highlight.4"
      ],
      image: "bg-gradient-to-br from-purple-600 to-indigo-800",
      growth: "+9.8%"
    },
    {
      nameKey: "location.district.podgorze.name",
      descriptionKey: "location.district.podgorze.description",
      propertiesKey: "location.district.podgorze.properties",
      avgPrice: "14,800 PLN/m²", 
      rating: 4.6,
      highlightKeys: [
        "location.district.podgorze.highlight.1",
        "location.district.podgorze.highlight.2",
        "location.district.podgorze.highlight.3",
        "location.district.podgorze.highlight.4"
      ],
      image: "bg-gradient-to-br from-teal-600 to-cyan-800",
      growth: "+15.2%"
    },
    {
      nameKey: "location.district.zwierzyniec.name",
      descriptionKey: "location.district.zwierzyniec.description",
      propertiesKey: "location.district.zwierzyniec.properties",
      avgPrice: "17,900 PLN/m²",
      rating: 4.7,
      highlightKeys: [
        "location.district.zwierzyniec.highlight.1",
        "location.district.zwierzyniec.highlight.2",
        "location.district.zwierzyniec.highlight.3",
        "location.district.zwierzyniec.highlight.4"
      ],
      image: "bg-gradient-to-br from-green-600 to-emerald-800",
      growth: "+7.3%"
    },
    {
      nameKey: "location.district.zablocie.name",
      descriptionKey: "location.district.zablocie.description",
      propertiesKey: "location.district.zablocie.properties",
      avgPrice: "15,600 PLN/m²",
      rating: 4.5,
      highlightKeys: [
        "location.district.zablocie.highlight.1",
        "location.district.zablocie.highlight.2",
        "location.district.zablocie.highlight.3",
        "location.district.zablocie.highlight.4"
      ],
      image: "bg-gradient-to-br from-slate-600 to-gray-800",
      growth: "+11.7%"
    },
    {
      nameKey: "location.district.bronowice.name",
      descriptionKey: "location.district.bronowice.description",
      propertiesKey: "location.district.bronowice.properties",
      avgPrice: "13,200 PLN/m²",
      rating: 4.4,
      highlightKeys: [
        "location.district.bronowice.highlight.1",
        "location.district.bronowice.highlight.2",
        "location.district.bronowice.highlight.3",
        "location.district.bronowice.highlight.4"
      ],
      image: "bg-gradient-to-br from-blue-600 to-indigo-800",
      growth: "+6.9%"
    },
    {
      nameKey: "location.district.grzegorzki.name",
      descriptionKey: "location.district.grzegorzki.description",
      propertiesKey: "location.district.grzegorzki.properties",
      avgPrice: "12,800 PLN/m²",
      rating: 4.3,
      highlightKeys: [
        "location.district.grzegorzki.highlight.1",
        "location.district.grzegorzki.highlight.2",
        "location.district.grzegorzki.highlight.3",
        "location.district.grzegorzki.highlight.4"
      ],
      image: "bg-gradient-to-br from-red-600 to-pink-800",
      growth: "+13.4%"
    },
    {
      nameKey: "location.district.pradnik.name",
      descriptionKey: "location.district.pradnik.description",
      propertiesKey: "location.district.pradnik.properties",
      avgPrice: "11,500 PLN/m²",
      rating: 4.2,
      highlightKeys: [
        "location.district.pradnik.highlight.1",
        "location.district.pradnik.highlight.2",
        "location.district.pradnik.highlight.3",
        "location.district.pradnik.highlight.4"
      ],
      image: "bg-gradient-to-br from-yellow-600 to-orange-800",
      growth: "+8.1%"
    }
  ];

  const amenities = [
    { icon: Train, name: t('location.amenities.transport'), score: 9.2 },
    { icon: Coffee, name: t('location.amenities.cafes'), score: 9.5 },
    { icon: Utensils, name: t('location.amenities.restaurants'), score: 9.4 },
    { icon: Camera, name: t('location.amenities.culture'), score: 9.8 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={krakowAerial} 
              alt="Widok z lotu ptaka na Kraków"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-luxury-light/85"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-6">
              {t('location.hero.title')}<br />
              <span className="font-bold text-luxury-gold">{t('location.hero.title.span')}</span>
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto mb-8">
              {t('location.hero.description')}
            </p>
          </div>
        </section>

        {/* City Amenities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-luxury-charcoal mb-4">
                {t('location.amenities.title')} <span className="font-bold text-luxury-gold">{t('location.amenities.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('location.amenities.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {amenities.map((amenity, index) => (
                <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <amenity.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-luxury-charcoal mb-2">{amenity.name}</h3>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-luxury-gold mr-1" />
                    <span className="font-bold text-luxury-gold">{amenity.score}</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/nieruchomosci">
                    <Button 
                      size="lg" 
                      className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                    >
                      {t('location.button.see_all_attractions')}
                    </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Districts Grid */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('location.districts.title')} <span className="font-bold text-luxury-gold">{t('location.districts.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('location.districts.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {districts.map((district, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* District Image */}
                  <div className={`relative h-48 ${district.image}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-charcoal font-semibold">
                      {t(district.propertiesKey)}
                    </Badge>

                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{t(district.nameKey)}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-luxury-gold mr-1" />
                        <span className="text-sm">{district.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* District Details */}
                  <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-luxury-gray text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          Kraków
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-luxury-gold block">{district.avgPrice}</span>
                          <span className="text-xs text-green-600">+{district.growth} r/r</span>
                        </div>
                      </div>
                    
                    <p className="text-luxury-gray text-sm mb-4 leading-relaxed">
                      {t(district.descriptionKey)}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-luxury-charcoal mb-2 uppercase tracking-wide">
                        {t('location.districts.attractions')}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {district.highlightKeys.map((highlightKey, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {t(highlightKey)}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to="/nieruchomosci">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-charcoal group-hover:border-luxury-gold transition-all duration-300"
                      >
                        {t('location.button.see_offers')}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Potential */}
        <section className="py-20 bg-luxury-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  {t('location.investment.title')}<br />
                  <span className="font-bold text-luxury-gold">{t('location.investment.title.span')}</span>
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {t('location.investment.description')}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span>{t('location.investment.growth')}</span>
                    <span className="text-luxury-gold font-bold">+8.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t('location.investment.yield')}</span>
                    <span className="text-luxury-gold font-bold">5.2% - 7.1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t('location.investment.demand')}</span>
                    <span className="text-luxury-gold font-bold">{t('location.investment.demand.high')}</span>
                  </div>
                </div>

                <Link to="/kalkulator">
                  <Button 
                    size="lg" 
                    className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
                  >
                    {t('location.analysis')}
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">800k+</h3>
                  <p className="text-sm">{t('location.investment.residents')}</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">200k+</h3>
                  <p className="text-sm">{t('location.investment.students')}</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">15M+</h3>
                  <p className="text-sm">{t('location.investment.tourists')}</p>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">50+</h3>
                  <p className="text-sm">{t('location.investment.companies')}</p>
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

export default Location;