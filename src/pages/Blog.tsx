import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import krakowCity from "@/assets/krakow-city-optimized.webp";
import investmentCharts from "@/assets/investment-charts.jpg";

const Blog = () => {
  const { t } = useLanguage();
  const blogPosts = [
    {
      id: 1,
      title: "Trendy na rynku nieruchomości luksusowych w 2024 roku",
      excerpt: "Analiza najnowszych trendów i kierunków rozwoju rynku nieruchomości premium w Polsce i Europie.",
      image: luxuryApartment,
      author: "Anna Kowalska",
      date: "15 marca 2024",
      readTime: "5 min",
      category: "Trendy",
      featured: true
    },
    {
      id: 2,
      title: "Inwestowanie w nieruchomości w centrum Krakowa - przewodnik",
      excerpt: "Kompletny poradnik dla inwestorów zainteresowanych zakupem nieruchomości w historycznym centrum miasta.",
      image: krakowCity,
      author: "Marek Nowak",
      date: "12 marca 2024",
      readTime: "8 min",
      category: "Inwestycje",
      featured: false
    },
    {
      id: 3,
      title: "Jak przygotować nieruchomość do sprzedaży za najwyższą cenę",
      excerpt: "Praktyczne wskazówki dotyczące home stagingu i przygotowania mieszkania do prezentacji klientom.",
      image: investmentCharts,
      author: "Katarzyna Wiśniewska",
      date: "10 marca 2024",
      readTime: "6 min",
      category: "Porady",
      featured: true
    },
    {
      id: 4,
      title: "Analiza cen nieruchomości w Krakowie - Q1 2024",
      excerpt: "Szczegółowa analiza zmian cen na rynku nieruchomości w Krakowie w pierwszym kwartale 2024 roku.",
      image: luxuryApartment,
      author: "Tomasz Kowalczyk",
      date: "8 marca 2024",
      readTime: "7 min",
      category: "Analiza",
      featured: false
    },
    {
      id: 5,
      title: "Luksusowe penthouse'y - co wpływa na ich wartość?",
      excerpt: "Przegląd czynników determinujących ceny luksusowych mieszkań na najwyższych piętrach.",
      image: krakowCity,
      author: "Robert Zieliński",
      date: "5 marca 2024",
      readTime: "4 min",
      category: "Luksus",
      featured: false
    },
    {
      id: 6,
      title: "Prawo nieruchomości - najważniejsze zmiany w 2024",
      excerpt: "Aktualne informacje o zmianach w przepisach prawnych dotyczących obrotu nieruchomościami.",
      image: investmentCharts,
      author: "Magdalena Król",
      date: "1 marca 2024",
      readTime: "9 min",
      category: "Prawo",
      featured: false
    }
  ];

  const categories = [
    t('blog.categories.all'), 
    t('blog.categories.trends'), 
    t('blog.categories.investments'), 
    t('blog.categories.advice'), 
    t('blog.categories.analysis'), 
    t('blog.categories.luxury'), 
    t('blog.categories.law')
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
                {t('blog.title')} <span className="font-bold text-luxury-gold">{t('blog.title.span')}</span>
              </h1>
              <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
                {t('blog.description')}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-luxury-gold text-luxury-charcoal" : "hover:bg-luxury-gold hover:text-luxury-charcoal"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-luxury-charcoal mb-8">
              {t('blog.featured')} <span className="font-bold text-luxury-gold">{t('blog.featured.articles')}</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-charcoal">
                      {post.category}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-luxury-gray mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-luxury-gray text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button variant="outline" className="group-hover:bg-luxury-gold group-hover:text-luxury-charcoal transition-all">
                      {t('blog.read_more')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-3xl font-light text-luxury-charcoal mb-8">
              {t('blog.all')} <span className="font-bold text-luxury-gold">{t('blog.all.articles')}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-luxury-gold text-luxury-charcoal text-xs">
                      {post.category}
                    </Badge>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center text-xs text-luxury-gray mb-2">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-luxury-gray text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-luxury-gray">{post.author}</span>
                      <Button size="sm" variant="ghost" className="text-luxury-gold hover:text-luxury-charcoal hover:bg-luxury-gold">
                        {t('blog.read')} <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">
                {t('blog.load_more')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;