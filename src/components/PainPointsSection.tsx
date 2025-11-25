import { AlertCircle } from "lucide-react";

const painPoints = [
  "Falta de tempo e organização",
  "Processos desestruturados, dificultando a escala",
  "Dificuldade em precificar e controlar o caixa com precisão",
  "Dependência excessiva do dono",
  "Falta de visão estratégica e baixo uso de tecnologia",
];

export const PainPointsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
            Seu Negócio Está Preso em uma Gestão Caótica?
          </h2>
          
          <div className="grid gap-6">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-destructive/30 hover:border-destructive/50 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-lg text-foreground font-medium">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
