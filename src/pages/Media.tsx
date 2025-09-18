import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Play, Download, ExternalLink, Award, Newspaper, Radio, Tv, Mail } from "lucide-react";
import realEstateOffice from "@/assets/real-estate-office.jpg";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import krakowCity from "@/assets/krakow-city-optimized.webp";

const Media = () => {
  const mediaAppearances = [
    {
      id: 1,
      type: "TV",
      title: "Rynek nieruchomości luksusowych w Krakowie - wywiad z CEO",
      media: "TVN24 Biznes",
      date: "15 marca 2024",
      description: "Anna Kowalska, CEO Premium Partners International, omawia trendy na rynku nieruchomości premium w pierwszym kwartale 2024 roku.",
      image: realEstateOffice,
      duration: "12 min",
      category: "Wywiad",
      link: "#"
    },
    {
      id: 2,
      type: "Radio",
      title: "Inwestowanie w nieruchomości - porady ekspertów",
      media: "RMF FM Business",
      date: "10 marca 2024",
      description: "Marek Nowak, senior agent, udziela praktycznych porad dla osób planujących inwestycje w nieruchomości w centrum Krakowa.",
      image: luxuryApartment,
      duration: "25 min",
      category: "Podcast",
      link: "#"
    },
    {
      id: 3,
      type: "Press",
      title: "Premium Partners International wyróżnione jako Agencja Roku",
      media: "Dziennik Gazeta Prawna",
      date: "5 marca 2024",
      description: "Artykuł o przyznaniu naszej firmie prestiżowej nagrody 'Agencja Nieruchomości Roku 2024' przez Polską Federację Rynku Nieruchomości.",
      image: krakowCity,
      duration: "Artykuł",
      category: "Nagroda",
      link: "#"
    },
    {
      id: 4,
      type: "TV",
      title: "Luksusowe apartamenty w zabytkowych kamienicach",
      media: "Polsat News",
      date: "28 lutego 2024",
      description: "Reportaż o renowacji i adaptacji zabytkowych kamienic na luksusowe apartamenty z udziałem naszych ekspertów.",
      image: luxuryApartment,
      duration: "8 min",
      category: "Reportaż",
      link: "#"
    },
    {
      id: 5,
      type: "Press",
      title: "Analiza: Ceny nieruchomości w Krakowie rosną najwolniej w Polsce",
      media: "Puls Biznesu",
      date: "20 lutego 2024",
      description: "Tomasz Kowalczyk komentuje najnowsze dane GUS dotyczące zmian cen nieruchomości w największych polskich miastach.",
      image: krakowCity,
      duration: "Artykuł",
      category: "Analiza",
      link: "#"
    },
    {
      id: 6,
      type: "Radio",
      title: "Home staging - jak przygotować mieszkanie do sprzedaży",
      media: "Radio Kraków",
      date: "15 lutego 2024",
      description: "Katarzyna Wiśniewska dzieli się praktycznymi wskazówkami dotyczącymi przygotowania nieruchomości do prezentacji.",
      image: realEstateOffice,
      duration: "20 min",
      category: "Poradnik",
      link: "#"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Agencja Nieruchomości Roku",
      organization: "Polska Federacja Rynku Nieruchomości",
      description: "Wyróżnienie za najwyższą jakość obsługi klientów premium"
    },
    {
      year: "2023",
      title: "Lider Sprzedaży Luxury",
      organization: "Real Estate Awards",
      description: "Pierwsze miejsce w kategorii sprzedaży nieruchomości luksusowych"
    },
    {
      year: "2023",
      title: "Innovator of the Year",
      organization: "PropTech Poland",
      description: "Za wdrożenie technologii VR w prezentacji nieruchomości"
    },
    {
      year: "2022",
      title: "Customer Choice Award",
      organization: "Nieruchomości.pl",
      description: "Nagroda przyznana przez klientów za najlepszą obsługę"
    }
  ];

  const getMediaIcon = (type: string) => {
    switch (type) {
      case "TV": return Tv;
      case "Radio": return Radio;
      case "Press": return Newspaper;
      default: return Newspaper;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-luxury-charcoal mb-6">
                W <span className="font-bold text-luxury-gold">MEDIACH</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-4xl mx-auto leading-relaxed">
                Premium Partners International regularnie wypowiada się w mediach na temat trendów 
                i zmian na rynku nieruchomości. Nasze ekspertyzy są cytowane w wiodących publikacjach 
                branżowych oraz programach telewizyjnych i radiowych.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Media */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                NAJNOWSZE <span className="font-bold text-luxury-gold">WYSTĄPIENIA</span>
              </h2>
            </div>

            {/* Featured item */}
            <div className="mb-16">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={mediaAppearances[0].image}
                      alt={mediaAppearances[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-luxury-charcoal/40 flex items-center justify-center">
                      <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal">
                        <Play className="mr-2 h-5 w-5" />
                        Obejrzyj wywiad
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                      LIVE
                    </Badge>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Tv className="w-5 h-5 text-luxury-gold mr-2" />
                      <span className="text-luxury-gold font-medium">{mediaAppearances[0].media}</span>
                      <span className="mx-2 text-luxury-gray">•</span>
                      <span className="text-luxury-gray">{mediaAppearances[0].date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">
                      {mediaAppearances[0].title}
                    </h3>
                    <p className="text-luxury-gray mb-6 leading-relaxed">
                      {mediaAppearances[0].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{mediaAppearances[0].category}</Badge>
                        <span className="text-sm text-luxury-gray">{mediaAppearances[0].duration}</span>
                      </div>
                      <Button variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Zobacz więcej
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Media grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAppearances.slice(1).map((item) => {
                const IconComponent = getMediaIcon(item.type);
                return (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent" />
                      <IconComponent className="absolute top-4 left-4 w-6 h-6 text-white" />
                      {item.type === "TV" && (
                        <Button 
                          size="sm" 
                          className="absolute bottom-4 right-4 bg-primary/20 hover:bg-primary/30 text-primary-foreground border-primary/30"
                          variant="outline"
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-luxury-gray mb-3">
                        <span className="text-luxury-gold font-medium">{item.media}</span>
                        <span className="mx-2">•</span>
                        <CalendarDays className="w-3 h-3 mr-1" />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-luxury-charcoal mb-3 line-clamp-2 group-hover:text-luxury-gold transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-luxury-gray text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                          <span className="text-xs text-luxury-gray">{item.duration}</span>
                        </div>
                        <Button size="sm" variant="ghost" className="text-luxury-gold hover:text-luxury-charcoal hover:bg-luxury-gold">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                NAGRODY I <span className="font-bold text-luxury-gold">WYRÓŻNIENIA</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                Nasze sukcesy docenione przez branżę i klientów
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-luxury-gold text-luxury-charcoal mr-3">{award.year}</Badge>
                        <span className="text-sm text-luxury-gray">{award.organization}</span>
                      </div>
                      <h3 className="text-xl font-bold text-luxury-charcoal mb-3">
                        {award.title}
                      </h3>
                      <p className="text-luxury-gray">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-luxury-charcoal mb-4">
                MATERIAŁY <span className="font-bold text-luxury-gold">PRASOWE</span>
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto mb-8">
                Pobierz nasze logo, zdjęcia i informacje o firmie do publikacji
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">
                  <Download className="mr-2 h-5 w-5" />
                  Pobierz Press Kit
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Kontakt dla mediów
                </Button>
              </div>

              <p className="text-sm text-luxury-gray mt-4">
                Kontakt prasowy: <span className="text-luxury-gold">media@premium-partners.pl</span> | 
                Tel: <span className="text-luxury-gold">+48 12 345 67 90</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;