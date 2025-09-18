import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Cookies = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-luxury-charcoal">
            Polityka Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-luxury-gray">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">1. Czym są pliki cookies?</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pliki cookies to małe pliki tekstowe, które są przechowywane na Twoim urządzeniu podczas odwiedzania naszej strony internetowej.
              </p>
              <p className="mb-4">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">2. Rodzaje używanych cookies</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-luxury-charcoal">Cookies niezbędne</h3>
                <p className="mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Te pliki są niezbędne do prawidłowego funkcjonowania strony.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-luxury-charcoal">Cookies analityczne</h3>
                <p className="mb-4">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pomagają nam analizować ruch na stronie.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-luxury-charcoal">Cookies marketingowe</h3>
                <p className="mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Służą do wyświetlania spersonalizowanych reklam.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">3. Zarządzanie plikami cookies</h2>
              <p className="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Możesz zarządzać ustawieniami cookies w swojej przeglądarce</li>
                <li>Możesz wyłączyć cookies, ale może to wpłynąć na funkcjonalność strony</li>
                <li>Niektóre cookies są niezbędne do działania strony</li>
                <li>Możesz usunąć cookies w każdej chwili</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">4. Cookies stron trzecich</h2>
              <p className="mb-4">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
              </p>
              <p className="mb-4">
                Na naszej stronie mogą być osadzone treści od zewnętrznych dostawców, takich jak Google Analytics, które mogą używać własnych plików cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">5. Kontakt w sprawie cookies</h2>
              <p className="mb-4">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <p className="mb-4">
                Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> cookies@partners-international.pl<br />
                <strong>Telefon:</strong> +48 22 123 45 67
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;