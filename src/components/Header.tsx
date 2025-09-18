import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Lazy load admin component since it's rarely used
const AdminLogin = lazy(() => import("@/components/AdminLogin"));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-luxury-gold rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-luxury-charcoal rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light text-luxury-gray">PREMIUM</span>
              <span className="text-lg font-bold text-luxury-charcoal">PARTNERS</span>
              <span className="text-xs font-light text-luxury-gray">INTERNATIONAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/nieruchomosci" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
              {t('nav.properties')}
            </Link>
            <Link to="/transakcja" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
              {t('nav.transaction')}
            </Link>
            <Link to="/lokalizacja" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
              {t('nav.location')}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                  {t('nav.investments')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/inwestycje/szukaj" className="w-full">{t('nav.investments.search')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/inwestycje/nowe" className="w-full">{t('nav.investments.new')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                  {t('nav.services')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/uslugi/marketing" className="w-full">{t('nav.services.marketing')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/uslugi/sprzedajacy" className="w-full">{t('nav.services.sellers')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/uslugi/kupujacy" className="w-full">{t('nav.services.buyers')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/uslugi/wynajmujacy" className="w-full">{t('nav.services.landlords')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/uslugi/najemcy" className="w-full">{t('nav.services.tenants')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                  {t('nav.about')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji" className="w-full">{t('nav.about.us')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji/zespol" className="w-full">{t('nav.about.team')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji/blog" className="w-full">{t('nav.about.blog')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji/kariera" className="w-full">{t('nav.about.career')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji/biuro" className="w-full">{t('nav.about.office')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/o-agencji/w-mediach" className="w-full">{t('nav.about.media')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link to="/kontakt" aria-label="Contact us">
              <Button size="icon" variant="ghost" className="text-foreground hover:text-luxury-gold" aria-label="Contact us">
                <Phone className="h-5 w-5" />
              </Button>
            </Link>
            
            {/* Admin Login Button */}
            <Suspense fallback={<div className="w-8 h-8" />}>
              <AdminLogin />
            </Suspense>
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <button 
                onClick={() => setLanguage('pl')}
                className={`transition-colors ${language === 'pl' ? 'text-luxury-gold' : 'text-luxury-gray hover:text-luxury-gold'}`}
              >
                PL
              </button>
              <span className="text-luxury-gray">|</span>
              <button 
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-luxury-gold' : 'text-luxury-gray hover:text-luxury-gold'}`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/nieruchomosci" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                {t('nav.properties')}
              </Link>
              <Link to="/transakcja" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                {t('nav.transaction')}
              </Link>
              <Link to="/lokalizacja" className="text-sm font-medium text-foreground hover:text-luxury-gold transition-colors">
                {t('nav.location')}
              </Link>
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-sm font-medium text-luxury-gold mb-3">{t('nav.investments')}</div>
                <div className="pl-4 space-y-3">
                  <Link to="/inwestycje/szukaj" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.investments.search')}
                  </Link>
                  <Link to="/inwestycje/nowe" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.investments.new')}
                  </Link>
                </div>
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-sm font-medium text-luxury-gold mb-3">{t('nav.services')}</div>
                <div className="pl-4 space-y-3">
                  <Link to="/uslugi/marketing" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.services.marketing')}
                  </Link>
                  <Link to="/uslugi/sprzedajacy" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.services.sellers')}
                  </Link>
                  <Link to="/uslugi/kupujacy" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.services.buyers')}
                  </Link>
                  <Link to="/uslugi/wynajmujacy" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.services.landlords')}
                  </Link>
                  <Link to="/uslugi/najemcy" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.services.tenants')}
                  </Link>
                </div>
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <div className="text-sm font-medium text-luxury-gold mb-3">{t('nav.about')}</div>
                <div className="pl-4 space-y-3">
                  <Link to="/o-agencji" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.us')}
                  </Link>
                  <Link to="/o-agencji/zespol" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.team')}
                  </Link>
                  <Link to="/o-agencji/blog" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.blog')}
                  </Link>
                  <Link to="/o-agencji/kariera" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.career')}
                  </Link>
                  <Link to="/o-agencji/biuro" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.office')}
                  </Link>
                  <Link to="/o-agencji/w-mediach" className="block text-sm text-foreground hover:text-luxury-gold transition-colors">
                    {t('nav.about.media')}
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <span className="text-sm text-luxury-gray">Language:</span>
                <button 
                  onClick={() => setLanguage('pl')}
                  className={`text-sm transition-colors ${language === 'pl' ? 'text-luxury-gold' : 'text-luxury-gray hover:text-luxury-gold'}`}
                >
                  PL
                </button>
                <span className="text-luxury-gray">|</span>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-sm transition-colors ${language === 'en' ? 'text-luxury-gold' : 'text-luxury-gray hover:text-luxury-gold'}`}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;