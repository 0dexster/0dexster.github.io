import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Wiadomość została wysłana! Skontaktujemy się z Tobą w ciągu 24 godzin.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-luxury-charcoal">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              Jesteśmy do Twojej dyspozycji. Skontaktuj się z naszymi ekspertami i otrzymaj profesjonalną pomoc.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-luxury-gold mr-3" />
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Telefon</h3>
                </div>
                <p className="text-luxury-gray mb-2">+48 22 123 45 67</p>
                <p className="text-sm text-luxury-gray">Poniedziałek - Piątek: 9:00 - 18:00</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-luxury-gold mr-3" />
                  <h3 className="text-lg font-semibold text-luxury-charcoal">E-mail</h3>
                </div>
                <p className="text-luxury-gray mb-2">kontakt@partners-international.pl</p>
                <p className="text-sm text-luxury-gray">Odpowiadamy w ciągu 24h</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-luxury-gold mr-3" />
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Adres</h3>
                </div>
                <p className="text-luxury-gray mb-2">ul. Hoża 86/24<br />00-682 Warszawa</p>
                <p className="text-sm text-luxury-gray">Umów wizytę z wyprzedzeniem</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-luxury-gold mr-3" />
                  <h3 className="text-lg font-semibold text-luxury-charcoal">Godziny otwarcia</h3>
                </div>
                <div className="space-y-1 text-sm text-luxury-gray">
                  <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
                  <p>Sobota: 10:00 - 15:00</p>
                  <p>Niedziela: zamknięte</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-luxury-charcoal">Wyślij wiadomość</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Temat</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Wybierz temat" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sprzedaz">Sprzedaż nieruchomości</SelectItem>
                          <SelectItem value="zakup">Zakup nieruchomości</SelectItem>
                          <SelectItem value="wycena">Wycena nieruchomości</SelectItem>
                          <SelectItem value="inwestycje">Doradztwo inwestycyjne</SelectItem>
                          <SelectItem value="wynajem">Zarządzanie najmem</SelectItem>
                          <SelectItem value="inne">Inne</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-1 min-h-32"
                      placeholder="Opisz swoją potrzebę lub zadaj pytanie..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Wyślij wiadomość
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal">Nasza lokalizacja</h3>
            <div className="bg-luxury-light h-96 rounded-lg flex items-center justify-center">
              <p className="text-luxury-gray">Mapa Google Maps - ul. Hoża 86/24, Warszawa</p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;