import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, FileText, Key, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import transactionDocs from "@/assets/transaction-documents.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Transaction = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Users,
      number: "01",
      title: t('transaction.step1.title'),
      description: t('transaction.step1.description')
    },
    {
      icon: FileText,
      number: "02", 
      title: t('transaction.step2.title'),
      description: t('transaction.step2.description')
    },
    {
      icon: Shield,
      number: "03",
      title: t('transaction.step3.title'),
      description: t('transaction.step3.description')
    },
    {
      icon: Key,
      number: "04",
      title: t('transaction.step4.title'),
      description: t('transaction.step4.description')
    }
  ];

  const services = [
    t('transaction.services.list.1'),
    t('transaction.services.list.2'),
    t('transaction.services.list.3'), 
    t('transaction.services.list.4'),
    t('transaction.services.list.5'),
    t('transaction.services.list.6'),
    t('transaction.services.list.7'),
    t('transaction.services.list.8'),
    t('transaction.services.list.9'),
    t('transaction.services.list.10'),
    t('transaction.services.list.11'),
    t('transaction.services.list.12')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-light relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={transactionDocs} 
              alt="Proces transakcji nieruchomości"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-luxury-light/80"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light text-luxury-charcoal mb-6">
              {t('transaction.hero.title')}<br />
              <span className="font-bold text-luxury-gold">{t('transaction.hero.title.span')}</span>
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto mb-8">
              {t('transaction.hero.description')}
            </p>
            <Link to="/konsultacja?category=transakcja&source=transaction">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
              >
                {t('transaction.hero.button')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-4">
                {t('transaction.process.title')}
              </h2>
              <p className="text-luxury-gray max-w-2xl mx-auto">
                {t('transaction.process.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-luxury-charcoal" />
                      </div>
                      <span className="absolute -top-2 -right-2 bg-luxury-charcoal text-white text-sm font-bold px-2 py-1 rounded">
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-luxury-charcoal mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-luxury-gray text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-20 bg-luxury-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-luxury-charcoal mb-6">
                  {t('transaction.services.title')}<br />
                  <span className="font-bold text-luxury-gold">{t('transaction.services.title.span')}</span>
                </h2>
                <p className="text-luxury-gray mb-8 leading-relaxed">
                  {t('transaction.services.description')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                      <span className="text-luxury-charcoal">{service}</span>
                    </div>
                  ))}
                </div>

                <Link to="/konsultacja?category=transakcja&source=transaction">
                  <Button 
                    size="lg" 
                    className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal text-white px-8 py-4"
                  >
                    {t('transaction.consultation')}
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <Card className="p-8 bg-white shadow-2xl">
                  <div className="text-center mb-6">
                    <Clock className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-2">
                      {t('transaction.time.title')}
                    </h3>
                    <p className="text-luxury-gray">{t('transaction.time.subtitle')}</p>
                  </div>
                  
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-luxury-light">
                        <span className="text-luxury-charcoal">{t('transaction.time.apartment_sale')}</span>
                        <span className="font-semibold text-luxury-gold">{t('transaction.time.period.30_45_days')}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-luxury-light">
                        <span className="text-luxury-charcoal">{t('transaction.time.apartment_buy')}</span>
                        <span className="font-semibold text-luxury-gold">{t('transaction.time.period.14_30_days')}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-luxury-light">
                        <span className="text-luxury-charcoal">{t('transaction.time.house_sale')}</span>
                        <span className="font-semibold text-luxury-gold">{t('transaction.time.period.45_60_days')}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-luxury-charcoal">{t('transaction.time.premium_investments')}</span>
                        <span className="font-semibold text-luxury-gold">{t('transaction.time.period.60_90_days')}</span>
                      </div>
                    </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-luxury-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {t('transaction.cta.title')} <span className="font-bold text-luxury-gold">{t('transaction.cta.title.span')}</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              {t('transaction.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/konsultacja?category=wycena&source=transaction">
                <Button 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold px-8 py-4"
                >
                  {t('transaction.free_valuation')}
                </Button>
              </Link>
              <Link to="/konsultacja?category=transakcja&source=transaction">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                >
                  {t('transaction.schedule_meeting')}
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

export default Transaction;