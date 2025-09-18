import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Building2, Star, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const NewInvestments = () => {
  const { t } = useLanguage();
  
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
      isNew: true
    },
    {
      name: "Nature Gardens",
      location: "Poznań Grunwald",
      developer: "Eco Future",
      launchDate: t('investment.dates.january') + " 2024",
      priceFrom: "720,000 PLN",
      completion: "Q2 2026",
      category: t('investment.new.categories.eco').toLowerCase(),
      features: [
        "Pasywny dom",
        "Pompy ciepła",
        "Smart home",
        "Urban farming"
      ],
      isNew: false
    },
    {
      name: "Office Hub Warsaw",
      location: "Warszawa Mokotów",
      developer: "Corporate Spaces",
      launchDate: t('investment.dates.february') + " 2024",
      priceFrom: "890,000 PLN",
      completion: "Q3 2025",
      category: t('investment.new.categories.office').toLowerCase(),
      features: [
        "Class A office",
        "LEED Gold",
        "Flexible spaces",
        "Rooftop terrace"
      ],
      isNew: true
    },
    {
      name: "Tech Tower Kraków",
      location: "Kraków Podgórze",
      developer: "Tech Properties",
      launchDate: t('investment.dates.march') + " 2024",
      priceFrom: "1,100,000 PLN",
      completion: "Q1 2026",
      category: t('investment.new.categories.office').toLowerCase(),
      features: [
        "Innovation hub",
        "High-speed internet",
        "Meeting pods",
        "Wellness center"
      ],
      isNew: false
    }
  ];

  const categories = [
    { id: "wszystkie", label: t('investment.new.categories.all'), count: newInvestments.length },
    { id: "luksusowe", label: t('investment.new.categories.luxury'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).length },
    { id: "ekologiczne", label: t('investment.new.categories.eco'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.eco').toLowerCase()).length },
    { id: "biurowe", label: t('investment.new.categories.office'), count: newInvestments.filter(inv => inv.category === t('investment.new.categories.office').toLowerCase()).length }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('investment.new.page.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('investment.new.page.description')}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">{newInvestments.length}</div>
                <div className="text-sm text-muted-foreground">{t('investment.new.stats.new')}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">{newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).length}</div>
                <div className="text-sm text-muted-foreground">{t('investment.new.stats.luxury')}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">{t('investment.new.stats.cities')}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">2.1M</div>
                <div className="text-sm text-muted-foreground">{t('investment.new.stats.avg_price')}</div>
              </CardContent>
            </Card>
          </div>

          {/* Categories Tabs */}
          <Tabs defaultValue="wszystkie" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="wszystkie" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments.map((investment, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                            <Badge className="animate-pulse">
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
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.developer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.launchDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.completion}</span>
                          </div>
                          <div className="font-medium text-primary">
                            {t('investment.new.price_from')} {investment.priceFrom}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">{t('investment.new.key_features')}</h4>
                          <div className="flex flex-wrap gap-1">
                            {investment.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                          <div className="flex gap-2">
                            <Link to="/nieruchomosci">
                              <Button className="flex-1">{t('investment.new.view_details')}</Button>
                            </Link>
                            <Link to="/konsultacja?category=inwestycje&source=investment">
                              <Button variant="outline">{t('investment.new.register')}</Button>
                            </Link>
                          </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other category tabs would show filtered content */}
            <TabsContent value="luksusowe">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).map((investment, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                            <Badge className="animate-pulse">
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
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.developer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.launchDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.completion}</span>
                          </div>
                          <div className="font-medium text-primary">
                            {t('investment.new.price_from')} {investment.priceFrom}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">{t('investment.new.key_features')}</h4>
                          <div className="flex flex-wrap gap-1">
                            {investment.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Link to="/nieruchomosci">
                            <Button className="flex-1">{t('investment.new.view_details')}</Button>
                          </Link>
                          <Link to="/konsultacja?category=inwestycje&source=investment">
                            <Button variant="outline">{t('investment.new.register')}</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {newInvestments.filter(inv => inv.category === t('investment.new.categories.luxury').toLowerCase()).length === 0 && (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-4">{t('investment.categories.luxury.title')}</h3>
                  <p className="text-muted-foreground">{t('investment.categories.luxury.description')}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="ekologiczne">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments.filter(inv => inv.category === t('investment.new.categories.eco').toLowerCase()).map((investment, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                            <Badge className="animate-pulse">
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
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.developer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.launchDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.completion}</span>
                          </div>
                          <div className="font-medium text-primary">
                            {t('investment.new.price_from')} {investment.priceFrom}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">{t('investment.new.key_features')}</h4>
                          <div className="flex flex-wrap gap-1">
                            {investment.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Link to="/nieruchomosci">
                            <Button className="flex-1">{t('investment.new.view_details')}</Button>
                          </Link>
                          <Link to="/konsultacja?category=inwestycje&source=investment">
                            <Button variant="outline">{t('investment.new.register')}</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {newInvestments.filter(inv => inv.category === t('investment.new.categories.eco').toLowerCase()).length === 0 && (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-4">{t('investment.categories.eco.title')}</h3>
                  <p className="text-muted-foreground">{t('investment.categories.eco.description')}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="biurowe">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newInvestments.filter(inv => inv.category === t('investment.new.categories.office').toLowerCase()).map((investment, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                            <Badge className="animate-pulse">
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
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.developer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.launchDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{investment.completion}</span>
                          </div>
                          <div className="font-medium text-primary">
                            {t('investment.new.price_from')} {investment.priceFrom}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">{t('investment.new.key_features')}</h4>
                          <div className="flex flex-wrap gap-1">
                            {investment.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Link to="/nieruchomosci">
                            <Button className="flex-1">{t('investment.new.view_details')}</Button>
                          </Link>
                          <Link to="/konsultacja?category=inwestycje&source=investment">
                            <Button variant="outline">{t('investment.new.register')}</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {newInvestments.filter(inv => inv.category === t('investment.new.categories.office').toLowerCase()).length === 0 && (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-4">{t('investment.categories.office.title')}</h3>
                  <p className="text-muted-foreground">{t('investment.categories.office.description')}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Newsletter Signup */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">
                {t('investment.new.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('investment.new.cta.description')}
              </p>
              <Link to="/konsultacja?category=inwestycje&source=investment">
                <Button size="lg">{t('investment.new.cta.button')}</Button>
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
