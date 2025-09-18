import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Building2, Star, Clock, ChevronDown, ChevronUp, Users, Home, Wifi, Car, TreePine, Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const NewInvestments = () => {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };
  
  const newInvestments = [
    {
      name: "Sky Tower Residence",
      location: "Warszawa Wola",
      developer: "Sky Development",
      launchDate: t('investment.dates.january') + " 2024",
      priceFrom: "950,000 PLN",
      completion: "Q3 2025",
      category: t('investment.new.categories.luxury').toLowerCase(),
      features: [
        t('investment.features.taras_widokowy'), 
        t('investment.features.concierge'), 
        t('investment.features.spa'), 
        t('investment.features.parking_podziemny')
      ],
      detailedInfo: {
        apartments: "120 apartamentów od 45m² do 180m²",
        amenities: ["Recepcja 24/7", "Siłownia premium", "Sauna i spa", "Salon biznesowy", "Taras widokowy na 25. piętrze"],
        investment: "Inwestycja klasy premium w sercu Warszawy z widokami na całe miasto",
        completion: "Planowane oddanie do użytku w Q3 2025, sprzedaż już rozpoczęta"
      },
      isNew: true
    },
    {
      name: "Green Valley",
      location: "Kraków Bronowice",
      developer: "Eco Investments",
      launchDate: t('investment.dates.february') + " 2024", 
      priceFrom: "650,000 PLN",
      completion: "Q4 2025",
      category: t('investment.new.categories.eco').toLowerCase(),
      features: [
        t('investment.features.panele_sloneczne'), 
        t('investment.features.zielen_pionowa'), 
        t('investment.features.ladowarki_ev'), 
        t('investment.features.ogrody_spoleczne')
      ],
      detailedInfo: {
        apartments: "85 mieszkań ekologicznych od 38m² do 120m²",
        amenities: ["Stacje ładowania EV", "Ogrody społeczne", "System recyklingu", "Smart home", "Bike sharing"],
        investment: "Pierwszy certyfikowany ekologiczny projekt mieszkaniowy w Bronowicach",
        completion: "Budowa zgodnie z najwyższymi standardami ekologicznymi BREEAM"
      },
      isNew: true
    },
    {
      name: "Business Center Plus",
      location: "Gdańsk Oliwa",
      developer: "Business Properties",
      launchDate: t('investment.dates.march') + " 2024",
      priceFrom: "1,200,000 PLN", 
      completion: "Q2 2025",
      category: t('investment.new.categories.office').toLowerCase(),
      features: [
        t('investment.features.smart_building'), 
        t('investment.features.konferencyjne'), 
        t('investment.features.fitness'), 
        t('investment.features.restauracja')
      ],
      detailedInfo: {
        apartments: "Powierzchnie biurowe od 50m² do 500m²",
        amenities: ["Sale konferencyjne", "Fitness center", "Restauracja", "Parking 200 miejsc", "System klimatyzacji"],
        investment: "Nowoczesne centrum biznesowe w dynamicznie rozwijającej się dzielnicy",
        completion: "Klasa A+ z certyfikatem LEED Gold, gotowe do wynajmu"
      },
      isNew: false
    },
    {
      name: "Platinum Towers",
      location: "Warszawa Śródmieście",
      developer: "Platinum Development",
      launchDate: t('investment.dates.january') + " 2024",
      priceFrom: "1,800,000 PLN",
      completion: "Q1 2026",
      category: t('investment.new.categories.luxury').toLowerCase(),
      features: [
        "Apartamenty penthousy",
        "Prywatne windy",
        "Club lounge",
        "Helipad"
      ],
      detailedInfo: {
        apartments: "45 ekskluzywnych apartamentów od 120m² do 350m²",
        amenities: ["Prywatne windy", "Club lounge", "Helipad", "Concierge 24/7", "Private dining"],
        investment: "Najwyższy standard luksusu w centrum stolicy z unikalnymi penthousy",
        completion: "Limitowana kolekcja apartamentów dla najbardziej wymagających klientów"
      },
      isNew: true
    },
    {
      name: "Diamond Residence",
      location: "Kraków Kazimierz",
      developer: "Diamond Properties",
      launchDate: t('investment.dates.february') + " 2024",
      priceFrom: "2,200,000 PLN",
      completion: "Q3 2025",
      category: t('investment.new.categories.luxury').toLowerCase(),
      features: [
        "Apartamenty premium",
        "Prywatny ogród",
        "Butler service",
        "Galeria sztuki"
      ],
      detailedInfo: {
        apartments: "28 apartamentów premium od 90m² do 200m²",
        amenities: ["Butler service", "Prywatny ogród", "Galeria sztuki", "Wine cellar", "Spa prywatne"],
        investment: "Butikowa inwestycja w sercu Kazimierza z unikatowym designem",
        completion: "Ograniczona liczba apartamentów z indywidualnym wykończeniem"
      },
      isNew: true
    },
    {
      name: "EcoLife Park",
      location: "Wrocław Psie Pole",
      developer: "Green Living",
      launchDate: t('investment.dates.march') + " 2024",
      priceFrom: "580,000 PLN",
      completion: "Q4 2025",
      category: t('investment.new.categories.eco').toLowerCase(),
      features: [
        "Certyfikat BREEAM",
        "Rainwater harvesting",
        "Green rooftops",
        "Bike sharing"
      ],
      detailedInfo: {
        apartments: "150 mieszkań ekologicznych od 32m² do 95m²",
        amenities: ["Bike sharing", "Green rooftops", "Rainwater system", "Solar panels", "EV charging"],
        investment: "Największy projekt ekologiczny w regionie z certyfikatem BREEAM",
        completion: "Nowoczesne technologie energooszczędne i zrównoważony rozwój"
      },
      isNew: true
    }
  ];

  const categories = [
    { id: "wszystkie", label: t('investment.new.categories.all'), count: newInvestments.length },
    { id: "luksusowe", label: t('investment.new.categories.luxury'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).length },
    { id: "ekologiczne", label: t('investment.new.categories.eco'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.eco').toLowerCase()).length },
    { id: "biurowe", label: t('investment.new.categories.office'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.office').toLowerCase()).length }
  ];

  const InvestmentCard = ({ investment, index }: { investment: any, index: number }) => (
    <Card 
      className={`overflow-hidden transition-all duration-500 hover:shadow-xl ${
        expandedCards.has(index) 
          ? 'ring-2 ring-luxury-gold shadow-2xl scale-105' 
          : 'hover:shadow-lg'
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{investment.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {investment.location}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            {investment.isNew && (
              <Badge className="animate-pulse bg-luxury-gold text-luxury-charcoal">
                <Star className="w-3 h-3 mr-1" />
                {t('investment.new.badge.new')}
              </Badge>
            )}
            <Badge variant="outline">{investment.category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-luxury-gray" />
              <span>{investment.developer}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-luxury-gray" />
              <span>{investment.launchDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-luxury-gray" />
              <span>{investment.completion}</span>
            </div>
            <div className="font-medium text-luxury-gold">
              {t('investment.new.price_from')} {investment.priceFrom}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">{t('investment.new.key_features')}</h4>
            <div className="flex flex-wrap gap-1">
              {investment.features.map((feature: string, featureIndex: number) => (
                <Badge key={featureIndex} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Expanded Details */}
          <div className={`overflow-hidden transition-all duration-500 ${
            expandedCards.has(index) 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            {investment.detailedInfo && (
              <div className="space-y-4 pt-4 border-t border-luxury-light animate-fade-in">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="w-4 h-4 text-luxury-gold" />
                      <h5 className="font-medium">Oferta mieszkaniowa</h5>
                    </div>
                    <p className="text-sm text-luxury-gray">{investment.detailedInfo.apartments}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-luxury-gold" />
                      <h5 className="font-medium">Udogodnienia</h5>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {investment.detailedInfo.amenities.map((amenity: string, aIndex: number) => (
                        <Badge key={aIndex} variant="outline" className="text-xs border-luxury-gold/30">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="w-4 h-4 text-luxury-gold" />
                      <h5 className="font-medium">O inwestycji</h5>
                    </div>
                    <p className="text-sm text-luxury-gray">{investment.detailedInfo.investment}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Dumbbell className="w-4 h-4 text-luxury-gold" />
                      <h5 className="font-medium">Status realizacji</h5>
                    </div>
                    <p className="text-sm text-luxury-gray">{investment.detailedInfo.completion}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => toggleCard(index)}
              className="flex-1 bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all"
            >
              {expandedCards.has(index) ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Zwiń szczegóły
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  {t('investment.new.view_details')}
                </>
              )}
            </Button>
            <Link to="/konsultacja?category=inwestycje&source=investment">
              <Button variant="outline" className="hover:bg-luxury-gold hover:text-luxury-charcoal border-luxury-gold/50">
                {t('investment.new.register')}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-luxury-charcoal">
              {t('investment.new.page.title')}
            </h1>
            <p className="text-xl text-luxury-gray">
              {t('investment.new.page.description')}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="hover-scale">
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">{newInvestments.length}</div>
                <div className="text-sm text-luxury-gray">{t('investment.new.stats.new')}</div>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">{newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).length}</div>
                <div className="text-sm text-luxury-gray">{t('investment.new.stats.luxury')}</div>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">8</div>
                <div className="text-sm text-luxury-gray">{t('investment.new.stats.cities')}</div>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-luxury-gold mb-2">2.1M</div>
                <div className="text-sm text-luxury-gray">{t('investment.new.stats.avg_price')}</div>
              </CardContent>
            </Card>
          </div>

          {/* Categories Tabs */}
          <Tabs defaultValue="wszystkie" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 bg-luxury-light">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="flex items-center gap-2 data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-charcoal"
                >
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="wszystkie" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments.map((investment, index) => (
                  <InvestmentCard key={index} investment={investment} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="luksusowe" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments
                  .filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase())
                  .map((investment, index) => (
                    <InvestmentCard 
                      key={index} 
                      investment={investment} 
                      index={newInvestments.indexOf(investment)} 
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="ekologiczne" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments
                  .filter(inv => inv.category === t('investment.new.categories.eco').toLowerCase())
                  .map((investment, index) => (
                    <InvestmentCard 
                      key={index} 
                      investment={investment} 
                      index={newInvestments.indexOf(investment)} 
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="biurowe" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments
                  .filter(inv => inv.category === t('investment.new.categories.office').toLowerCase())
                  .map((investment, index) => (
                    <InvestmentCard 
                      key={index} 
                      investment={investment} 
                      index={newInvestments.indexOf(investment)} 
                    />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-luxury-gold/10 to-luxury-charcoal/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4 text-luxury-charcoal">
                {t('investment.new.cta.title')}
              </h3>
              <p className="text-luxury-gray mb-6">
                {t('investment.new.cta.description')}
              </p>
              <Link to="/konsultacja?category=inwestycje&source=new-investments">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                  {t('investment.new.cta.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewInvestments;