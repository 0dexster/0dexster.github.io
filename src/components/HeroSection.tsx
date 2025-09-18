import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-interior-optimized.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 via-luxury-charcoal/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" style={{ contentVisibility: 'auto' }}>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full text-sm font-medium text-luxury-gold mb-4">
            {t('hero.badge')}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">
          {t('hero.title.krakow')}<br />
          <span className="font-bold">{t('hero.title.stare_miasto')}</span><br />
          <span className="text-luxury-gold">{t('hero.title.rynek_glowny')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 text-white/90 max-w-2xl mx-auto" style={{ willChange: 'contents' }}>
          {t('lorem.medium')}
        </p>
        
        <Link to="/konsultacja?category=wycena&source=hero">
          <Button 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4 text-lg group"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm font-medium mb-4">{t('hero.scroll')}</span>
          <div className="w-px h-16 bg-gradient-to-b from-luxury-gold to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-luxury-gold"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </section>
  );
};

export default HeroSection;