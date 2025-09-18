import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-luxury-charcoal">
            Regulamin
          </h1>
          
          <div className="prose prose-lg max-w-none text-luxury-gray">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">1. Postanowienia ogólne</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">2. Usługi oferowane przez firmę</h2>
              <p className="mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Pośrednictwo w zakupie i sprzedaży nieruchomości</li>
                <li>Doradztwo inwestycyjne w zakresie nieruchomości</li>
                <li>Wycena nieruchomości</li>
                <li>Obsługa prawna transakcji</li>
                <li>Zarządzanie nieruchomościami</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">3. Obowiązki klienta</h2>
              <p className="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p className="mb-4">
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">4. Odpowiedzialność</h2>
              <p className="mb-4">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
              </p>
              <p className="mb-4">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">5. Reklamacje</h2>
              <p className="mb-4">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <p className="mb-4">
                Reklamacje można składać drogą elektroniczną na adres: reklamacje@partners-international.pl lub pisemnie na adres siedziby firmy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-luxury-charcoal">6. Postanowienia końcowe</h2>
              <p className="mb-4">
                Regulamin wchodzi w życie z dniem publikacji na stronie internetowej. Firma zastrzega sobie prawo do wprowadzania zmian w regulaminie.
              </p>
              <p className="mb-4">
                W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy prawa polskiego.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;