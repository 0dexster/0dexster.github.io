import { Input } from "@/components/ui/input";
import WorkingNewsletter from "@/components/WorkingNewsletter";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-luxury-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-luxury-gold rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-luxury-charcoal rounded-sm transform rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light text-luxury-gold">PREMIUM</span>
                <span className="text-lg font-bold">PARTNERS</span>
                <span className="text-xs font-light text-luxury-gold">INTERNATIONAL</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6">
              {t('lorem.medium')}
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://facebook.com/partners-international" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Partners International on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white/60 hover:text-luxury-gold transition-colors hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/partners-international" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Partners International on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white/60 hover:text-luxury-gold transition-colors hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/partners-international" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Partners International on LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white/60 hover:text-luxury-gold transition-colors hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors text-sm">
                  {t('footer.service.sales')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors text-sm">
                  {t('footer.service.rental')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors text-sm">
                  {t('footer.service.investment')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors text-sm">
                  {t('footer.service.legal')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors text-sm">
                  {t('footer.service.valuation')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-luxury-gold" />
                <a href="tel:+48221234567" className="text-white/80 text-sm hover:text-luxury-gold transition-colors">
                  +48 22 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-luxury-gold" />
                <a href="mailto:kontakt@partners-international.pl" className="text-white/80 text-sm hover:text-luxury-gold transition-colors">
                  kontakt@partners-international.pl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-luxury-gold" />
                <a 
                  href="https://maps.google.com/?q=ul.+Hoża+86/24,+00-682+Warszawa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-luxury-gold transition-colors"
                >
                  ul. Hoża 86/24<br />00-682 Warszawa
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-white/80 text-sm mb-4">
              {t('footer.newsletter.description')}
            </p>
            <WorkingNewsletter />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/prywatnosc" className="text-white/60 hover:text-luxury-gold text-sm transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/regulamin" className="text-white/60 hover:text-luxury-gold text-sm transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-luxury-gold text-sm transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;