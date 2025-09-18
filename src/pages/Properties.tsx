import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal, Star, Crown, Building, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import luxuryApartment from "@/assets/luxury-apartment-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const Properties = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    type: "",
    priceMin: "",
    priceMax: "",
    priceRange: "",
    rooms: "",
    area: ""
  });

  const properties = [
    {
      id: 1,
      titleKey: "property.title.old_town",
      locationKey: "property.location.old_town",
      price: "1,850,000 PLN",
      beds: 3,
      baths: 2,
      area: 95,
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
      badgeKey: "badge.exclusive",
      descriptionKey: "property.description.bronowice"
    },
    {
      id: 7,
      titleKey: "property.title.nowa_huta",
      locationKey: "property.location.nowa_huta",
      price: "890,000 PLN",
      beds: 2,
      baths: 1,
      area: 68,
      badgeKey: "badge.opportunity",
      descriptionKey: "property.description.nowa_huta"
    },
    {
      id: 8,
      titleKey: "property.title.salwator",
      locationKey: "property.location.salwator",
      price: "3,850,000 PLN",
      beds: 4,
      baths: 3,
      area: 165,
      badgeKey: "badge.premium",
      descriptionKey: "property.description.salwator"
    }
  ];

  const handleSearch = () => {
    setIsLoading(true);
    console.log("Search with filters:", searchFilters);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-4">
                {t('properties.title')}<br />
                <span className="font-bold text-luxury-gold">{t('properties.title.krakow')}</span>
              </h1>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                {t('lorem.medium')}
              </p>
            </div>

            {/* Enhanced Search Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-luxury-charcoal">{t('search.title')}</h3>
                <Button
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-luxury-gold hover:text-luxury-gold-dark"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {isExpanded ? t('search.collapse') : t('search.filters')}
                </Button>
              </div>
              
              {/* Main Search Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-luxury-gray" />
                  <Input
                    placeholder={t('search.location.placeholder')}
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="pl-10"
                  />
                </div>
                <Select value={searchFilters.type} onValueChange={(value) => setSearchFilters(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('search.property.type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">{t('search.property.apartment')}</SelectItem>
                    <SelectItem value="house">{t('search.property.house')}</SelectItem>
                    <SelectItem value="villa">{t('search.type.select.villa')}</SelectItem>
                    <SelectItem value="penthouse">{t('search.property.penthouse')}</SelectItem>
                    <SelectItem value="loft">{t('search.property.loft')}</SelectItem>
                    <SelectItem value="office">{t('search.type.select.office')}</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={searchFilters.priceRange} onValueChange={(value) => setSearchFilters(prev => ({ ...prev, priceRange: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('search.price.range')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1000000">{t('search.price.up_to_1m')}</SelectItem>
                    <SelectItem value="1000000-2000000">{t('search.price.1m_to_2m')}</SelectItem>
                    <SelectItem value="2000000-3000000">{t('search.price.2m_to_3m')}</SelectItem>
                    <SelectItem value="3000000+">{t('search.price.over_3m')}</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal" onClick={handleSearch}>
                  <Search className="mr-2 h-4 w-4" />
                  {t('properties.search')}
                </Button>
              </div>

              {/* Extended Filters */}
              {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                  <Input
                    placeholder={t('search.price.from')}
                    value={searchFilters.priceMin}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, priceMin: e.target.value }))}
                  />
                  <Input
                    placeholder={t('search.price.to')}
                    value={searchFilters.priceMax}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, priceMax: e.target.value }))}
                  />
                  <Select value={searchFilters.rooms} onValueChange={(value) => setSearchFilters(prev => ({ ...prev, rooms: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('search.rooms.select.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">{t('search.rooms.1')}</SelectItem>
                      <SelectItem value="2">{t('search.rooms.2')}</SelectItem>
                      <SelectItem value="3">{t('search.rooms.3')}</SelectItem>
                      <SelectItem value="4">{t('search.rooms.4plus')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder={t('search.area.placeholder')}
                    value={searchFilters.area}
                    onChange={(e) => setSearchFilters(prev => ({ ...prev, area: e.target.value }))}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Property Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="sale" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-luxury-light rounded-lg p-2 h-auto">
                <TabsTrigger 
                  value="sale" 
                  className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Building className="w-6 h-6 mb-2" />
                  <span className="font-semibold">{t('properties.categories.sale')}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="rent"
                  className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Home className="w-6 h-6 mb-2" />
                  <span className="font-semibold">{t('properties.categories.rent')}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="off-market"
                  className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Star className="w-6 h-6 mb-2" />
                  <span className="font-semibold">{t('properties.categories.off_market')}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="deluxe"
                  className="flex flex-col items-center p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-luxury-gold data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Crown className="w-6 h-6 mb-2" />
                  <span className="font-semibold">{t('properties.categories.deluxe')}</span>
                </TabsTrigger>
              </TabsList>

              {/* Sale Properties */}
              <TabsContent value="sale">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-luxury-charcoal mb-2">
                    {t('properties.category.sale.title')}<br />
                    <span className="font-bold text-luxury-gold">{t('properties.category.sale.subtitle')}</span>
                  </h2>
                  <p className="text-luxury-gray">{t('lorem.medium')}</p>
                </div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg text-luxury-charcoal">
                    {t('search.found')} {properties.length} {t('search.properties')}
                  </span>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder={t('search.sort')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">{t('search.sort.price_asc')}</SelectItem>
                      <SelectItem value="price-desc">{t('search.sort.price_desc')}</SelectItem>
                      <SelectItem value="area-asc">{t('search.sort.area_asc')}</SelectItem>
                      <SelectItem value="area-desc">{t('search.sort.area_desc')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                      <Card key={i} className="overflow-hidden">
                        <Skeleton className="h-64 w-full" />
                        <div className="p-6">
                          <Skeleton className="h-4 w-3/4 mb-2" />
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-4" />
                          <div className="flex justify-between mb-6">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-10 w-full" />
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                    <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={luxuryApartment} 
                          alt={t(property.titleKey)}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent"></div>
                        
                        <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-charcoal font-semibold">
                          {t(property.badgeKey)}
                        </Badge>

                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-2xl font-bold">{property.price}</span>
                        </div>
                      </div>

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
                        </Button>
                      </Link>
                      </div>
                    </Card>
                    ))}
                  </div>
                )}
                
                <div className="text-center mt-12">
                  <Link to="/nieruchomosci/sprzedaz">
                    <Button 
                      size="lg" 
                      className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4 mr-4"
                    >
                      {t('button.view_all_offers')}
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* Rent Properties */}
              <TabsContent value="rent">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-luxury-charcoal mb-2">
                    {t('properties.category.rent.title')}<br />
                    <span className="font-bold text-luxury-gold">{t('properties.category.rent.subtitle')}</span>
                  </h2>
                  <p className="text-luxury-gray">{t('lorem.medium')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {properties.slice(0, 3).map((property) => (
                    <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={luxuryApartment} 
                          alt={t(property.titleKey)}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent"></div>
                        
                        <Badge className="absolute top-4 left-4 bg-blue-500 text-white font-semibold">
                          {t('badge.rent')}
                        </Badge>

                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-2xl font-bold">{Math.floor(parseInt(property.price.replace(/[^\d]/g, '')) / 100)} PLN/mies</span>
                        </div>
                      </div>

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
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Link to="/nieruchomosci/wynajem">
                    <Button 
                      size="lg" 
                      className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                    >
                      {t('button.view_all_offers')}
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* Off Market Properties */}
              <TabsContent value="off-market">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-luxury-charcoal mb-2">
                    {t('properties.category.off_market.title')}<br />
                    <span className="font-bold text-luxury-gold">{t('properties.category.off_market.subtitle')}</span>
                  </h2>
                  <p className="text-luxury-gray">Ekskluzywne oferty dostępne tylko dla wybranych klientów</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {properties.slice(1, 3).map((property) => (
                    <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={luxuryApartment} 
                          alt={t(property.titleKey)}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 to-transparent"></div>
                        
                        <Badge className="absolute top-4 left-4 bg-purple-600 text-white font-semibold">
                          OFF MARKET
                        </Badge>

                        <div className="absolute bottom-6 left-6 text-white">
                          <span className="text-3xl font-bold">{property.price}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-luxury-gray text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {t(property.locationKey)}
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors">
                          {t(property.titleKey)}
                        </h3>
                        
                        <p className="text-luxury-gray mb-6">
                          {t(property.descriptionKey)}
                        </p>

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
                            Zapytaj o ofertę
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Link to="/nieruchomosci/off-market">
                    <Button 
                      size="lg" 
                      className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                    >
                      Zobacz wszystkie oferty OFF MARKET
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* Deluxe Estates */}
              <TabsContent value="deluxe">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-luxury-charcoal mb-2">
                    {t('properties.category.deluxe.title')}<br />
                    <span className="font-bold text-luxury-gold">{t('properties.category.deluxe.subtitle')}</span>
                  </h2>
                  <p className="text-luxury-gray">Najluksusowsze nieruchomości w najbardziej prestiżowych lokalizacjach</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {properties.slice(4, 6).map((property) => (
                    <Card key={property.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-96 overflow-hidden">
                        <img 
                          src={luxuryApartment} 
                          alt={t(property.titleKey)}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 to-transparent"></div>
                        
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-luxury-charcoal font-bold">
                          DELUXE
                        </Badge>

                        <div className="absolute bottom-6 left-6 text-white">
                          <span className="text-4xl font-bold">{property.price}</span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center text-luxury-gray text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {t(property.locationKey)}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-luxury-charcoal mb-4 group-hover:text-luxury-gold transition-colors">
                          {t(property.titleKey)}
                        </h3>
                        
                        <p className="text-luxury-gray mb-6 leading-relaxed">
                          {t(property.descriptionKey)}
                        </p>

                        <div className="flex items-center justify-between text-luxury-gray mb-8">
                          <div className="flex items-center">
                            <Bed className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{property.beds}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{property.baths}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{property.area}m²</span>
                          </div>
                        </div>

                        <Link to={`/nieruchomosci/${property.id}`}>
                          <Button 
                            size="lg"
                            className="w-full bg-gradient-to-r from-luxury-gold to-yellow-500 text-luxury-charcoal font-bold hover:from-yellow-500 hover:to-luxury-gold transition-all duration-300"
                          >
                            Poznaj szczegóły
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Link to="/nieruchomosci/deluxe-estates">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-luxury-gold to-yellow-500 text-luxury-charcoal font-bold hover:from-yellow-500 hover:to-luxury-gold px-8 py-4"
                    >
                      Odkryj kolekcję DELUXE ESTATES
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Properties;