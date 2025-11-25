import { Target, Zap } from "lucide-react";
import logoConnect from "@/assets/logo-connect-academy.png";

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Logo Connect Academy */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoConnect} 
              alt="Connect Academy" 
              className="w-48 md:w-56 h-auto"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
            A Metodologia Connect Academy com Suporte de IA
          </h2>
          
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            GESTOR 4.0 é um programa prático de 2 dias focado em estruturar sua empresa para a Alta Performance. Você terá acesso imediato à única metodologia que combina:
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Método Comprovado */}
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Método Comprovado
              </h3>
              <p className="text-muted-foreground text-lg">
                Para organizar, digitalizar e rentabilizar seu negócio de forma sistemática e sustentável.
              </p>
            </div>

            {/* Tecnologia com IA */}
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tecnologia com IA
              </h3>
              <p className="text-muted-foreground text-lg">
                Suporte de Inteligência Artificial exclusiva para acelerar seus processos e decisões estratégicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
