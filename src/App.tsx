import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

// Lazy load non-critical components
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

// Essential pages (loaded immediately)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages
const Properties = lazy(() => import("./pages/Properties"));
const PropertiesSale = lazy(() => import("./pages/PropertiesSale"));
const PropertiesRent = lazy(() => import("./pages/PropertiesRent"));
const PropertiesOffMarket = lazy(() => import("./pages/PropertiesOffMarket"));
const PropertiesDeluxe = lazy(() => import("./pages/PropertiesDeluxe"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Location = lazy(() => import("./pages/Location"));
const Investment = lazy(() => import("./pages/Investment"));
const Services = lazy(() => import("./pages/Services"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Consultation = lazy(() => import("./pages/Consultation"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Blog = lazy(() => import("./pages/Blog"));
const Career = lazy(() => import("./pages/Career"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Team = lazy(() => import("./pages/Team"));
const Office = lazy(() => import("./pages/Office"));
const Media = lazy(() => import("./pages/Media"));
const InvestmentSearch = lazy(() => import("./pages/InvestmentSearch"));
const NewInvestments = lazy(() => import("./pages/NewInvestments"));
const MarketingService = lazy(() => import("./pages/MarketingService"));
const ForSellers = lazy(() => import("./pages/ForSellers"));
const ForBuyers = lazy(() => import("./pages/ForBuyers"));
const ForLandlords = lazy(() => import("./pages/ForLandlords"));
const ForTenants = lazy(() => import("./pages/ForTenants"));

// Optimize QueryClient instantiation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading component for lazy loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nieruchomosci" element={<Properties />} />
            <Route path="/nieruchomosci/:id" element={<PropertyDetails />} />
            <Route path="/nieruchomosci/sprzedaz" element={<PropertiesSale />} />
            <Route path="/nieruchomosci/wynajem" element={<PropertiesRent />} />
            <Route path="/nieruchomosci/off-market" element={<PropertiesOffMarket />} />
            <Route path="/nieruchomosci/deluxe-estates" element={<PropertiesDeluxe />} />
            <Route path="/transakcja" element={<Transaction />} />
            <Route path="/lokalizacja" element={<Location />} />
            <Route path="/inwestycja" element={<Investment />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/uslugi/spotkanie" element={<ServiceDetail />} />
            <Route path="/uslugi/zagraniczne" element={<ServiceDetail />} />
            <Route path="/uslugi/deluxe" element={<ServiceDetail />} />
            <Route path="/uslugi/sekretne" element={<ServiceDetail />} />
            <Route path="/uslugi/:service" element={<ServiceDetail />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/konsultacja" element={<Consultation />} />
            <Route path="/kalkulator" element={<Calculator />} />
            <Route path="/prywatnosc" element={<Privacy />} />
            <Route path="/regulamin" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/o-agencji" element={<AboutUs />} />
            <Route path="/o-agencji/blog" element={<Blog />} />
            <Route path="/o-agencji/kariera" element={<Career />} />
            <Route path="/o-agencji/zespol" element={<Team />} />
            <Route path="/o-agencji/biuro" element={<Office />} />
            <Route path="/o-agencji/w-mediach" element={<Media />} />
            
            {/* New Investment Routes */}
            <Route path="/inwestycje/szukaj" element={<InvestmentSearch />} />
            <Route path="/inwestycje/nowe" element={<NewInvestments />} />
            
            {/* New Service Routes */}
            <Route path="/uslugi/marketing" element={<MarketingService />} />
            <Route path="/uslugi/sprzedajacy" element={<ForSellers />} />
            <Route path="/uslugi/kupujacy" element={<ForBuyers />} />
            <Route path="/uslugi/wynajmujacy" element={<ForLandlords />} />
            <Route path="/uslugi/najemcy" element={<ForTenants />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
