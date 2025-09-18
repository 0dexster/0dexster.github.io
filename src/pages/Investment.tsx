import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, PieChart, Calculator, Shield, Globe, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import investmentCharts from "@/assets/investment-charts.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Investment = () => {
  const { t } = useLanguage();
  
  const investmentTypes = [
    {
      icon: Building,
      title: "APARTAMENTY POD WYNAJEM",
      subtitle: "Stały dochód pasywny z najmu krótko i długoterminowego",
      expectedReturn: "5.2% - 7.1%",
      minInvestment: "500,000 PLN",
      riskLevel: "Niskie",
      description: "Inwestycja w apartamenty w centrum Krakowa z gwarantowanym popytem na wynajem. Idealne dla Airbnb oraz najmu długoterminowego.",
      features: ["Wysoki popyt całoroczny", "Stabilny dochód miesięczny", "Aprecjacja wartości 8-12% rocznie"]
    },
    {
      icon: TrendingUp,
      title: "NIERUCHOMOŚCI PREMIUM",
      subtitle: "Długoterminowa aprecjacja kapitału w ekskluzywnych lokalizacjach",
      expectedReturn: "8.5% - 12.3%",
      minInvestment: "1,500,000 PLN", 
      riskLevel: "Średnie",
      description: "Luksusowe nieruchomości w ekskluzywnych lokalizacjach z potencjałem znacznego wzrostu wartości. Portfolio dla wymagających inwestorów.",
      features: ["Ekskluzywne lokalizacje w centrum", "Wysokiej jakości wykończenia premium", "Prestiżowe adresy z historią"]
    },
    {
      icon: Globe,
      title: "PROJEKTY DEWELOPERSKIE",
      subtitle: "Inwestycje na etapie budowy z rabatami przedsprzedażowymi",
      expectedReturn: "15% - 25%",
      minInvestment: "300,000 PLN",
      riskLevel: "Wysokie", 
      description: "Uczestnictwo w projektach deweloperskich od podstaw z możliwością wysokich zysków. Ceny przedsprzedażowe nawet 30% poniżej rynku.",
      features: ["Ceny przedsprzedażowe z rabatem", "Wysoki potencjał zysku krótkoterminowego", "Nowoczesne technologie i materiały"]
    }
  ];

  const portfolioSuggestions = [
    {
      name: "KONSERWATYWNY",
      allocation: [
        { type: "Apartamenty centrum", percentage: 60, color: "bg-blue-500" },
        { type: "Lokale użytkowe", percentage: 30, color: "bg-green-500" },
        { type: "Fundusze REIT", percentage: 10, color: "bg-yellow-500" }
      ],
      expectedReturn: "5-7% rocznie",
      riskLevel: "Niskie ryzyko",
      description: "Portfel dla inwestorów preferujących bezpieczeństwo i stały dochód",
      minAmount: "300,000 PLN"
    },
    {
      name: "ZBALANSOWANY", 
      allocation: [
        { type: "Apartamenty premium", percentage: 40, color: "bg-purple-500" },
        { type: "Projekty deweloperskie", percentage: 35, color: "bg-orange-500" },
        { type: "Nieruchomości komercyjne", percentage: 25, color: "bg-teal-500" }
      ],
      expectedReturn: "8-12% rocznie",
      riskLevel: "Średnie ryzyko",
      description: "Optymalny balans między bezpieczeństwem a potencjałem wzrostu",
      minAmount: "500,000 PLN"
    },
    {
      name: "AGRESYWNY",
      allocation: [
        { type: "Projekty deweloperskie", percentage: 50, color: "bg-red-500" },
        { type: "Nieruchomości premium", percentage: 30, color: "bg-indigo-500" },
        { type: "Inwestycje zagraniczne", percentage: 20, color: "bg-pink-500" }
      ],
      expectedReturn: "12-20% rocznie",
      riskLevel: "Wysokie ryzyko", 
      description: "Dla doświadczonych inwestorów szukających maksymalnych zwrotów",
      minAmount: "800,000 PLN"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={investmentCharts} 
              alt="Inwestycje w nieruchomości - wykresy i analizy"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-luxury-light/85"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-6">
              {t('investment.hero.title')}<br />
              <span className="font-bold text-luxury-gold">{t('investment.hero.title.span')}</span>
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto mb-8">
              {t('investment.hero.description')}
            </p>
                <Link to="/kalkulator">
                  <Button 
                    size="lg" 
                    className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
                  >
                    {t('button.analyze_portfolio')}
                  </Button>
                </Link>
          </div>
        </section>

        {/* Investment Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('investment.types.title')} <span className="font-bold text-luxury-gold">{t('investment.types.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('investment.types.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentTypes.map((investment, index) => (
                <Card key={index} className="group relative h-auto overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="p-8">
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
                        <investment.icon className="w-6 h-6 text-luxury-charcoal" />
                      </div>
                      <Badge className={`${
                        investment.riskLevel === 'Niskie' ? 'bg-green-100 text-green-800' :
                        investment.riskLevel === 'Średnie' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {investment.riskLevel} ryzyko
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-luxury-charcoal mb-2">
                      {investment.title}
                    </h3>
                    <p className="text-luxury-gold font-semibold mb-4">
                      {investment.subtitle}
                    </p>

                    {/* Key Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-luxury-gray">Zwrot z inwestycji:</span>
                        <span className="font-semibold text-luxury-charcoal">{investment.expectedReturn}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-luxury-gray">Minimalna kwota:</span>
                        <span className="font-semibold text-luxury-charcoal">{investment.minInvestment}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-luxury-gray mb-6 leading-relaxed">
                      {investment.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {investment.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                          <span className="text-luxury-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/konsultacja?category=inwestycje&source=investment">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-charcoal group-hover:border-luxury-gold transition-all duration-300"
                      >
                        DOWIEDZ SIĘ WIĘCEJ
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Suggestions */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('investment.portfolios.title')} <span className="font-bold text-luxury-gold">{t('investment.portfolios.title.span')}</span>
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('investment.portfolios.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioSuggestions.map((portfolio, index) => (
                <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-luxury-charcoal mb-2">
                      PORTFEL {portfolio.name}
                    </h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-luxury-gold font-semibold">{portfolio.expectedReturn}</p>
                      <p className="text-sm text-luxury-gray">{portfolio.riskLevel}</p>
                      <p className="text-xs text-luxury-charcoal">{portfolio.description}</p>
                      <p className="text-xs font-semibold text-luxury-gold">Min: {portfolio.minAmount}</p>
                    </div>
                  </div>

                  {/* Allocation Chart */}
                  <div className="mb-6">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex mb-4">
                      {portfolio.allocation.map((item, idx) => (
                        <div 
                          key={idx}
                          className={`${item.color} h-full`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="space-y-2">
                      {portfolio.allocation.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                            <span className="text-luxury-charcoal">{item.type}</span>
                          </div>
                          <span className="font-semibold text-luxury-gray">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/konsultacja?category=inwestycje&source=investment">
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-luxury-gold hover:text-luxury-charcoal hover:border-luxury-gold transition-all duration-300"
                    >
                      WYBIERZ PORTFEL
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Calculator */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-6">
                  {t('investment.calculator.title')}<br />
                  <span className="font-bold text-luxury-gold">{t('investment.calculator.title.span')}</span>
                </h2>
                <p className="text-luxury-gray mb-8 leading-relaxed">
                  {t('investment.calculator.description')}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <Calculator className="w-6 h-6 text-luxury-gold" />
                    <span className="text-luxury-charcoal">Precyzyjne wyceny rynkowe</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PieChart className="w-6 h-6 text-luxury-gold" />
                    <span className="text-luxury-charcoal">Analiza rentowności</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-luxury-gold" />
                    <span className="text-luxury-charcoal">Ocena ryzyka inwestycyjnego</span>
                  </div>
                </div>

                <Link to="/kalkulator">
                  <Button 
                    size="lg" 
                    className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                  >
                    URUCHOM KALKULATOR
                  </Button>
                </Link>
              </div>

              <Card className="p-8 bg-luxury-light">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">
                    PRZYKŁADOWA KALKULACJA
                  </h3>
                  <p className="text-luxury-gray">Apartament 80m² w Starym Mieście</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white">
                    <span className="text-luxury-charcoal">Koszt zakupu:</span>
                    <span className="font-bold text-luxury-charcoal">1,480,000 PLN</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white">
                    <span className="text-luxury-charcoal">Miesięczny czynsz:</span>
                    <span className="font-bold text-luxury-charcoal">7,200 PLN</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white">
                    <span className="text-luxury-charcoal">Roczny dochód:</span>
                    <span className="font-bold text-luxury-charcoal">86,400 PLN</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white">
                    <span className="text-luxury-charcoal">Rentowność brutto:</span>
                    <span className="font-bold text-luxury-gold">5.8%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-luxury-charcoal">Rentowność netto:</span>
                    <span className="font-bold text-luxury-gold">4.9%</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-luxury-gold/10 rounded-lg">
                  <p className="text-sm text-luxury-charcoal text-center">
                    <strong>Prognoza 5-letnia:</strong> Łączny zwrot z inwestycji wynosi około 
                    <span className="text-luxury-gold font-bold"> 47% </span>
                    uwzględniając dochody z najmu i wzrost wartości nieruchomości.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-luxury-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t('investment.start')} <span className="font-bold text-luxury-gold">{t('investment.start.adventure')}</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Skontaktuj się z naszymi ekspertami i otrzymaj spersonalizowaną strategię inwestycyjną
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/konsultacja?category=inwestycje&source=investment">
                <Button 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
                >
                  BEZPŁATNA KONSULTACJA
                </Button>
              </Link>
              <Link to="/kalkulator">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                >
                  POBIERZ RAPORT RYNKOWY
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Investment;