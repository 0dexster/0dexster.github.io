import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import krakowCity from "@/assets/krakow-city-optimized.webp";
import warsawCity from "@/assets/warsaw-city-optimized.webp";
import gdanskCity from "@/assets/gdansk-city-optimized.webp";
import poznanCity from "@/assets/poznan-city-optimized.webp";
import wroclawCity from "@/assets/wroclaw-city-optimized.webp";

const FeaturedProperties = () => {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const properties = [
    {
      id: 1,
      titleKey: "property.title.old_town",
      locationKey: "property.location.old_town",
      price: "1,850,000 PLN",
      beds: 3,
      baths: 2,
      area: 95,
      image: luxuryApartment,
      badgeKey: "badge.premium",
      descriptionKey: "property.description.old_town"
    },
    {
      id: 2,
      titleKey: "property.title.kazimierz",
      locationKey: "property.location.kazimierz",
      price: "2,750,000 PLN",
      beds: 4,
      baths: 3,
      area: 140,
      image: krakowCity,
      badgeKey: "badge.exclusive",
      descriptionKey: "property.description.kazimierz"
    },
    {
      id: 3,
      titleKey: "property.title.podgorze", 
      locationKey: "property.location.podgorze",
      price: "3,200,000 PLN",
      beds: 5,
      baths: 4,
      area: 180,
      image: warsawCity,
      badgeKey: "badge.new",
      descriptionKey: "property.description.podgorze"
    },
    {
      id: 4,
      titleKey: "property.title.zablocie",
      locationKey: "property.location.zablocie", 
      price: "1,450,000 PLN",
      beds: 2,
      baths: 2,
      area: 85,
      image: gdanskCity,
      badgeKey: "badge.premium",
      descriptionKey: "property.description.zablocie"
    },
    {
      id: 5,
      titleKey: "property.title.zwierzyniec",
      locationKey: "property.location.zwierzyniec",
      price: "2,100,000 PLN",
      beds: 3,
      baths: 2,
      area: 110,
      image: poznanCity,
      badgeKey: "badge.new",
      descriptionKey: "property.description.zwierzyniec"
    },
    {
      id: 6,
      titleKey: "property.title.bronowice",
      locationKey: "property.location.bronowice",
      price: "4,500,000 PLN",
      beds: 6,
      baths: 5,
      area: 250,
      image: wroclawCity,
      badgeKey: "badge.exclusive",
      descriptionKey: "property.description.bronowice"
    }
  ];

  // Load favorites from cookies
  useEffect(() => {
    const savedFavorites = document.cookie
      .split('; ')
      .find(row => row.startsWith('favorites='))
      ?.split('=')[1];
    
    if (savedFavorites) {
      setFavorites(JSON.parse(decodeURIComponent(savedFavorites)));
    }
  }, []);

  // Save favorites to cookies
  const saveFavoritesToCookies = (newFavorites: number[]) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `favorites=${encodeURIComponent(JSON.stringify(newFavorites))}; expires=${expires.toUTCString()}; path=/`;
  };

  // Toggle favorite
  const toggleFavorite = (propertyId: number) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter(id => id !== propertyId)
      : [...favorites, propertyId];
    
    setFavorites(newFavorites);
    saveFavoritesToCookies(newFavorites);
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-luxury-gray uppercase tracking-wider">
            {t('featured.properties.subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-2 mb-4 text-luxury-charcoal">
            {t('featured.properties.title')}<br />{t('featured.properties.title.span')}
          </h2>
            <p className="text-luxury-gray max-w-2xl mx-auto">
              {t('lorem.medium')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={t(property.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent"></div>
                
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-charcoal font-semibold">
                  {t(property.badgeKey)}
                </Badge>

                {/* Heart Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(property.id);
                  }}
                  aria-label={favorites.includes(property.id) ? "Remove from favorites" : "Add to favorites"}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-white hover:text-red-500'
                    }`} 
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-2xl font-bold">{property.price}</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center text-luxury-gray text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {t(property.locationKey)}
                </div>
                
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors">
                  {t(property.titleKey)}
                </h3>
                
                <p className="text-luxury-gray text-sm mb-4">
                  {t(property.descriptionKey)}
                </p>

                {/* Property Features */}
                <div className="flex items-center justify-between text-sm text-luxury-gray mb-6">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds}
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths}
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.area}m²
                  </div>
                </div>

                <Link to={`/nieruchomosci/${property.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-charcoal group-hover:border-luxury-gold transition-all duration-300"
                  >
                    {t('properties.details')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/nieruchomosci">
            <Button 
              size="lg" 
              className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
            >
              {t('button.view_all_offers')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;