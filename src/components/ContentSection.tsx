import { Users, TrendingUp, DollarSign, FileText } from "lucide-react";

const content = [
  {
    icon: Users,
    title: "Pessoas & Processos",
    description: "Organização, cultura e a criação do seu Mapa de Processos",
  },
  {
    icon: TrendingUp,
    title: "Estratégia & Inovação",
    description: "Novos modelos de negócio com a Reforma Tributária",
  },
  {
    icon: DollarSign,
    title: "Finanças & Controle",
    description: "Gestão com dados e criação do seu Painel de Indicadores",
  },
  {
    icon: FileText,
    title: "Plano de Ação 90 Dias",
    description: "Metas claras e validadas para começar a implementar imediatamente",
  },
];

export const ContentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O Caminho Rápido para a Virada de Chave
            </h2>
            <p className="text-xl text-brand-gold font-semibold">
              Conheça o que será entregue na Imersão de 2 Dias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-brand-gold/50 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.15}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
