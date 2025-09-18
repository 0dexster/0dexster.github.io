import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, CheckCircle, Phone, MapPin, ArrowLeft, Home } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useSearchParams, Link } from "react-router-dom";

const Consultation = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Get context from URL parameters
  const categoryParam = searchParams.get('category');
  const sourceParam = searchParams.get('source');
  const propertyParam = searchParams.get('property');

  const timeSlots = [
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const consultationTypes = [
    { value: "wycena", label: "Bezpłatna wycena nieruchomości", duration: "45 min", color: "bg-blue-500" },
    { value: "sprzedaz", label: "Konsultacja sprzedażowa", duration: "60 min", color: "bg-green-500" },
    { value: "zakup", label: "Pomoc w zakupie nieruchomości", duration: "45 min", color: "bg-purple-500" },
    { value: "inwestycje", label: "Doradztwo inwestycyjne", duration: "60 min", color: "bg-orange-500" },
    { value: "finansowanie", label: "Doradztwo finansowe i kredytowe", duration: "30 min", color: "bg-teal-500" },
    { value: "prawne", label: "Konsultacje prawne", duration: "45 min", color: "bg-red-500" },
    { value: "wynajem", label: "Doradztwo najmu nieruchomości", duration: "45 min", color: "bg-indigo-500" },
    { value: "marketing", label: "Marketing nieruchomości", duration: "30 min", color: "bg-pink-500" },
    { value: "transakcja", label: "Proces transakcji", duration: "60 min", color: "bg-yellow-500" }
  ];

  // Auto-select consultation type based on URL parameters
  useEffect(() => {
    if (categoryParam && !consultationType) {
      const validCategory = consultationTypes.find(type => type.value === categoryParam);
      if (validCategory) {
        setConsultationType(categoryParam);
      }
    }
  }, [categoryParam, consultationType]);

  // Generate contextual message based on source
  useEffect(() => {
    if (sourceParam && !formData.message) {
      let contextMessage = "";
      
      switch (sourceParam) {
        case 'transaction':
          contextMessage = "Przyszedłem ze strony procesu transakcji. Interesuje mnie pomoc w przeprowadzeniu transakcji.";
          break;
        case 'investment':
          contextMessage = "Przyszedłem ze strony inwestycji. Chciałbym dowiedzieć się więcej o możliwościach inwestycyjnych.";
          break;
        case 'sellers':
          contextMessage = "Przyszedłem ze strony dla sprzedających. Rozważam sprzedaż mojej nieruchomości.";
          break;
        case 'buyers':
          contextMessage = "Przyszedłem ze strony dla kupujących. Szukam pomocy w zakupie nieruchomości.";
          break;
        case 'landlords':
          contextMessage = "Przyszedłem ze strony dla wynajmujących. Interesuje mnie wynajem mojej nieruchomości.";
          break;
        case 'tenants':
          contextMessage = "Przyszedłem ze strony dla najemców. Szukam nieruchomości do wynajęcia.";
          break;
        case 'marketing':
          contextMessage = "Przyszedłem ze strony usług marketingowych. Interesuje mnie promocja nieruchomości.";
          break;
        case 'hero':
          contextMessage = "Przyszedłem ze strony głównej. Chciałbym dowiedzieć się więcej o Państwa usługach.";
          break;
        case 'services':
          contextMessage = "Przyszedłem ze strony usług. Interesuje mnie szczegółowa konsultacja.";
          break;
        case 'properties':
          contextMessage = propertyParam ? 
            `Przyszedłem ze strony nieruchomości. Interesuje mnie nieruchomość ID: ${propertyParam}` :
            "Przyszedłem ze strony nieruchomości. Szukam pomocy w znalezieniu odpowiedniej nieruchomości.";
          break;
        default:
          contextMessage = "Chciałbym umówić konsultację w sprawie nieruchomości.";
      }
      
      setFormData(prev => ({ ...prev, message: contextMessage }));
    }
  }, [sourceParam, propertyParam, formData.message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !consultationType) {
      toast.error("Proszę wypełnić wszystkie wymagane pola");
      return;
    }
    
    toast.success("Spotkanie zostało zarezerwowane! Potwierdzenie wyślemy na e-mail.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedDate(undefined);
    setSelectedTime("");
    setConsultationType("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Get breadcrumb info based on source
  const getBreadcrumbInfo = () => {
    const sourceMap = {
      'transaction': { label: 'Proces transakcji', path: '/transakcja' },
      'investment': { label: 'Inwestycje', path: '/inwestycja' },
      'sellers': { label: 'Dla sprzedających', path: '/uslugi/sprzedajacy' },
      'buyers': { label: 'Dla kupujących', path: '/uslugi/kupujacy' },
      'landlords': { label: 'Dla wynajmujących', path: '/uslugi/wynajmujacy' },
      'tenants': { label: 'Dla najemców', path: '/uslugi/najemcy' },
      'marketing': { label: 'Marketing', path: '/uslugi/marketing' },
      'hero': { label: 'Strona główna', path: '/' },
      'services': { label: 'Usługi', path: '/uslugi' },
      'properties': { label: 'Nieruchomości', path: '/nieruchomosci' }
    };
    
    return sourceMap[sourceParam as keyof typeof sourceMap];
  };

  const breadcrumbInfo = getBreadcrumbInfo();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          {breadcrumbInfo && (
            <nav className="flex items-center space-x-2 text-sm text-luxury-gray mb-8">
              <Link to="/" className="hover:text-luxury-gold transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Strona główna
              </Link>
              <span>/</span>
              <Link to={breadcrumbInfo.path} className="hover:text-luxury-gold transition-colors">
                {breadcrumbInfo.label}
              </Link>
              <span>/</span>
              <span className="text-luxury-charcoal font-medium">Konsultacja</span>
            </nav>
          )}

          {/* Back button */}
          {breadcrumbInfo && (
            <Link 
              to={breadcrumbInfo.path} 
              className="inline-flex items-center text-luxury-gray hover:text-luxury-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do: {breadcrumbInfo.label}
            </Link>
          )}

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-luxury-charcoal">
              Umów bezpłatną konsultację
              {categoryParam && (
                <span className="block text-3xl md:text-4xl text-luxury-gold font-semibold mt-2">
                  {consultationTypes.find(type => type.value === categoryParam)?.label}
                </span>
              )}
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
              Skorzystaj z fachowego doradztwa naszych ekspertów. Pierwsza konsultacja jest całkowicie bezpłatna i bez zobowiązań.
            </p>
            {sourceParam && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full">
                <span className="text-sm text-luxury-charcoal">
                  Konsultacja z kontekstem: <strong>{breadcrumbInfo?.label || 'Ogólna'}</strong>
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Consultation Types */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-luxury-charcoal mb-4">Rodzaje konsultacji</h2>
              {consultationTypes.map((type) => (
                <Card 
                  key={type.value}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    consultationType === type.value 
                      ? 'border-luxury-gold bg-luxury-gold/5' 
                      : 'hover:border-luxury-gold/50'
                  }`}
                  onClick={() => setConsultationType(type.value)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`w-3 h-3 rounded-full ${type.color} mr-2`}></div>
                        {consultationType === type.value && (
                          <CheckCircle className="h-5 w-5 text-luxury-gold mr-2" />
                        )}
                        <h3 className="font-semibold text-luxury-charcoal">{type.label}</h3>
                      </div>
                      <div className="flex items-center text-sm text-luxury-gray">
                        <Clock className="h-4 w-4 mr-1" />
                        {type.duration}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="p-6 bg-luxury-light">
                <h3 className="font-semibold text-luxury-charcoal mb-3">Co otrzymasz?</h3>
                <ul className="space-y-2 text-sm text-luxury-gray">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    Profesjonalną analizę Twojej sytuacji
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    Konkretny plan działania
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    Bezpłatne materiały informacyjne
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-luxury-gold mr-2" />
                    Brak zobowiązań do współpracy
                  </li>
                </ul>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-luxury-charcoal">Wybierz termin spotkania</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div>
                      <Label className="text-base font-medium">Data spotkania *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left mt-2"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP", { locale: pl }) : "Wybierz datę"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <Label className="text-base font-medium">Godzina *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Wybierz godzinę" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Adres e-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Dodatkowe informacje
                      {sourceParam && <span className="text-sm text-luxury-gray ml-2">(Automatycznie uzupełnione na podstawie kontekstu)</span>}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1"
                      placeholder="Opisz swoją sytuację lub zadaj pytanie..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold py-3"
                  >
                    Zarezerwuj spotkanie
                  </Button>
                </form>

                {/* Contact Options */}
                <div className="mt-8 pt-6 border-t border-luxury-light">
                  <h3 className="font-semibold text-luxury-charcoal mb-4">Lub skontaktuj się bezpośrednio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      +48 22 123 45 67
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MapPin className="mr-2 h-4 w-4" />
                      ul. Hoża 86/24, Warszawa
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;