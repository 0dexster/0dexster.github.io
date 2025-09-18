import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, PieChart, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const InvestmentCalculator = () => {
  const { t } = useLanguage();
  const [propertyPrice, setPropertyPrice] = useState([1500000]);
  const [downPayment, setDownPayment] = useState([300000]);
  const [monthlyRent, setMonthlyRent] = useState([6000]);
  const [expenses, setExpenses] = useState([1200]);
  const [appreciationRate, setAppreciationRate] = useState([4]);
  const [loanTerm, setLoanTerm] = useState([25]);
  const [interestRate, setInterestRate] = useState([6]);

  // Calculations
  const loanAmount = propertyPrice[0] - downPayment[0];
  const monthlyPayment = (loanAmount * (interestRate[0] / 100 / 12)) / 
    (1 - Math.pow(1 + (interestRate[0] / 100 / 12), -(loanTerm[0] * 12)));
  const netMonthlyIncome = monthlyRent[0] - expenses[0] - monthlyPayment;
  const annualNetIncome = netMonthlyIncome * 12;
  const rentYield = (monthlyRent[0] * 12) / propertyPrice[0] * 100;
  const netYield = annualNetIncome / downPayment[0] * 100;
  const futureValue = propertyPrice[0] * Math.pow(1 + appreciationRate[0] / 100, 10);
  const totalReturn = ((futureValue - propertyPrice[0]) + (annualNetIncome * 10)) / downPayment[0] * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-luxury-charcoal">
              Kalkulator Inwestycyjny
            </h1>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
              Sprawdź rentowność swojej inwestycji w nieruchomości. Kalkulator uwzględnia wszystkie kluczowe parametry finansowe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Parameters */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-luxury-charcoal flex items-center">
                <Calculator className="mr-3 h-6 w-6 text-luxury-gold" />
                Parametry nieruchomości
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Cena nieruchomości: {propertyPrice[0].toLocaleString()} PLN</Label>
                  <Slider
                    value={propertyPrice}
                    onValueChange={setPropertyPrice}
                    max={5000000}
                    min={200000}
                    step={50000}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Wkład własny: {downPayment[0].toLocaleString()} PLN</Label>
                  <Slider
                    value={downPayment}
                    onValueChange={setDownPayment}
                    max={propertyPrice[0]}
                    min={propertyPrice[0] * 0.1}
                    step={10000}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Miesięczny czynsz: {monthlyRent[0].toLocaleString()} PLN</Label>
                  <Slider
                    value={monthlyRent}
                    onValueChange={setMonthlyRent}
                    max={20000}
                    min={1000}
                    step={200}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Miesięczne koszty: {expenses[0].toLocaleString()} PLN</Label>
                  <Slider
                    value={expenses}
                    onValueChange={setExpenses}
                    max={5000}
                    min={300}
                    step={100}
                    className="mt-2"
                  />
                  <p className="text-sm text-luxury-gray mt-1">Zarządzanie, ubezpieczenie, podatek, remonty</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium">Oprocentowanie kredytu: {interestRate[0]}%</Label>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      max={12}
                      min={3}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">Okres kredytu: {loanTerm[0]} lat</Label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={35}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Wzrost wartości rocznie: {appreciationRate[0]}%</Label>
                  <Slider
                    value={appreciationRate}
                    onValueChange={setAppreciationRate}
                    max={10}
                    min={0}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Cash Flow */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-luxury-gold" />
                  Miesięczny przepływ gotówki
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Przychód z najmu:</span>
                    <span className="font-semibold text-green-600">+{monthlyRent[0].toLocaleString()} PLN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Rata kredytu:</span>
                    <span className="font-semibold text-red-600">-{monthlyPayment.toLocaleString()} PLN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Koszty miesięczne:</span>
                    <span className="font-semibold text-red-600">-{expenses[0].toLocaleString()} PLN</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-semibold">Przepływ netto:</span>
                    <span className={`font-bold ${netMonthlyIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {netMonthlyIncome >= 0 ? '+' : ''}{netMonthlyIncome.toLocaleString()} PLN
                    </span>
                  </div>
                </div>
              </Card>

              {/* Yield Analysis */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-luxury-gold" />
                  Analiza rentowności
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <p className="text-sm text-luxury-gray mb-1">Rentowność brutto</p>
                    <p className="text-2xl font-bold text-luxury-charcoal">{rentYield.toFixed(1)}%</p>
                  </div>
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <p className="text-sm text-luxury-gray mb-1">Rentowność netto</p>
                    <p className="text-2xl font-bold text-luxury-gold">{netYield.toFixed(1)}%</p>
                  </div>
                </div>
              </Card>

              {/* Long-term Projection */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal flex items-center">
                  <PieChart className="mr-2 h-5 w-5 text-luxury-gold" />
                  Prognoza 10-letnia
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Obecna wartość:</span>
                    <span className="font-semibold">{propertyPrice[0].toLocaleString()} PLN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Wartość po 10 latach:</span>
                    <span className="font-semibold text-luxury-gold">{futureValue.toLocaleString()} PLN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-gray">Łączny dochód z najmu:</span>
                    <span className="font-semibold text-green-600">{(annualNetIncome * 10).toLocaleString()} PLN</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-semibold">Całkowity zwrot z inwestycji:</span>
                    <span className="font-bold text-luxury-gold">{totalReturn.toFixed(0)}%</span>
                  </div>
                </div>
              </Card>

              <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-semibold py-3">
                Zapisz kalkulację
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <Card className="mt-8 p-6 bg-luxury-light">
            <h3 className="text-lg font-semibold mb-3 text-luxury-charcoal">Uwagi do kalkulacji</h3>
            <ul className="text-sm text-luxury-gray space-y-1">
              <li>• Kalkulacja ma charakter orientacyjny i nie stanowi porady finansowej</li>
              <li>• Rzeczywiste wyniki mogą się różnić od prognoz</li>
              <li>• Nie uwzględniono podatków dochodowych i kosztów transakcyjnych</li>
              <li>• Zaleca się konsultację z doradcą finansowym</li>
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentCalculator;