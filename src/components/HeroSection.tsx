import { Button } from '@/components/ui/button'
import logoGestor from '@/assets/logo-gestor.svg'
import AnoAI from '@/components/ui/animated-shader-background'

interface HeroSectionProps {
  onCtaClick: () => void
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    //alinhamento centralizado padrão (sem o pt-32)
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Fundo Animado */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <AnoAI />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/50 to-brand-navy/80 z-0 pointer-events-none" />

      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo (Mantive o ajuste de margem negativa que você gostou) */}
          <div className="flex justify-center animate-fade-in -mb-12 md:-mb-24 relative z-0">
            <img
              src={logoGestor}
              alt="GESTOR 4.0"
              className="w-64 md:w-80 lg:w-[30rem] h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            />
          </div>

          <div className="relative z-10">
            {/* Gatilho */}
            <p
              className="text-brand-gold text-lg md:text-xl font-semibold mb-4 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              A maioria das empresas quebra não por falta de vendas, mas por
              falta de gestão.
            </p>

            {/* Headline */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in drop-shadow-md"
              style={{ animationDelay: '0.4s' }}
            >
              Elimine o Caos da Gestão e Garanta Crescimento Rentável com
              Clareza e Tecnologia
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Descubra em uma{' '}
              <span className="text-brand-gold font-semibold">
                Imersão de 2 dias
              </span>{' '}
              como organizar, digitalizar e rentabilizar o seu negócio com a
              metodologia que usa a Inteligência Artificial ao seu favor.
            </p>

            {/* CORREÇÃO DO BOTÃO:
               - whitespace-normal: Permite quebra de linha no texto
               - h-auto: Altura automática (para caber 2 ou 3 linhas)
               - py-6: Padding vertical generoso
               - leading-tight: Diminui o espaço entre as linhas do texto do botão
               - w-full md:w-auto: Ocupa a largura total no mobile para não vazar
            */}
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fade-in whitespace-normal h-16 py-6 px-8 text-lg leading-tight 
              w-80 md:w-auto "
              style={{ animationDelay: '0.8s' }}
            >
              QUERO FALAR COM UM ESPECIALISTA E SABER MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
