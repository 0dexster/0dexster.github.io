import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Users,
      title: t('services.special.meeting'),
      subtitle: t('services.special.meeting.subtitle'),
      description: t('lorem.medium'),
      buttonText: t('services.read_more'),
      link: "/uslugi/spotkanie"
    },
    {
      icon: Globe,
      title: t('services.foreign.properties'),
      subtitle: t('services.foreign.properties.subtitle'),
      description: t('lorem.medium'),
      buttonText: t('services.see'),
      link: "/uslugi/zagraniczne"
    },
    {
      icon: Award,
      title: t('services.first.class'),
      subtitle: t('services.first.class.subtitle'),
      description: t('lorem.medium'),
      buttonText: t('services.learn_more'),
      link: "/uslugi/deluxe"
    },
    {
      icon: Shield,
      title: t('services.secret.offers'),
      subtitle: t('services.secret.offers.subtitle'),
      description: t('lorem.medium'),
      buttonText: t('services.learn_more'),
      link: "/uslugi/sekretne"
    }
  ];
  return (
    <section className="py-20 bg-luxury-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative h-96 overflow-hidden border-0 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background with overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-charcoal/90 to-luxury-charcoal/80">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/95 via-luxury-charcoal/70 to-luxury-charcoal/50"></div>
              </div>

              {/* Icon */}
              <div className="absolute top-6 left-6 text-luxury-gold">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-light text-luxury-gold mb-4">
                    {service.subtitle}
                  </h4>
                  <p className="text-sm text-white/80 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="self-start border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 group-hover:translate-y-[-2px]"
                  >
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;