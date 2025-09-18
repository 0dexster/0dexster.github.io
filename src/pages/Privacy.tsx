import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-luxury-charcoal">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-luxury-gray">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">{t('privacy.section1.title')}</h2>
              <p className="mb-4">
                {t('lorem.medium')}
              </p>
              <p className="mb-4">
                {t('lorem.short')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">{t('privacy.section2.title')}</h2>
              <p className="mb-4">
                {t('lorem.long')}
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t('lorem.short')}</li>
                <li>{t('lorem.medium')}</li>
                <li>{t('lorem.short')}</li>
                <li>{t('lorem.medium')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">{t('privacy.section3.title')}</h2>
              <p className="mb-4">
                {t('lorem.long')}
              </p>
              <p className="mb-4">
                {t('lorem.medium')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">{t('privacy.section4.title')}</h2>
              <p className="mb-4">
                {t('lorem.short')}
              </p>
              <p className="mb-4">
                {t('lorem.medium')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">{t('privacy.section5.title')}</h2>
              <p className="mb-4">
                {t('lorem.short')} {t('lorem.medium')}
              </p>
              <p className="mb-4">
                <strong>Email:</strong> kontakt@partners-international.pl<br />
                <strong>Telefon:</strong> +48 22 123 45 67<br />
                <strong>Adres:</strong> ul. Hoża 86/24, 00-682 Warszawa
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;