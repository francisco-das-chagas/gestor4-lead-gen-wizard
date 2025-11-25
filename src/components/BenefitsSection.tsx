import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Plano de Ação de 90 dias pronto e validado",
  "Modelo de Negócio atualizado conforme a mudança Tributária",
  "Processos organizados, documentados e digitalizados",
  "Clareza sobre crescimento rentável e sustentável",
];

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export const BenefitsSection = ({ onCtaClick }: BenefitsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-card to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Os 4 Resultados Imediatos
          </h2>
          <p className="text-xl text-center text-brand-gold font-semibold mb-12">
            Que Você Leva para a Sua Empresa
          </p>

          <div className="grid gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-background/80 backdrop-blur-sm p-6 rounded-xl border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                </div>
                <p className="text-lg text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-110 whitespace-normal h-16 leading-tight 
              w-80 md:w-auto"
            >
              QUERO TRANSFORMAR MINHA GESTÃO AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};
