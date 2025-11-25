import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isFormalized: '',
    revenue: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.isFormalized ||
      !formData.revenue
    ) {
      toast.error('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // --- CONFIGURAÇÃO DO WHATSAPP ---
    // 1. COLOQUE SEU NÚMERO AQUI (formato: 55 + DDD + NUMERO, sem traços ou espaços)
    const phoneCompany = '558893832512'

    // 2. Traduzindo o valor do faturamento para ficar bonito na mensagem
    const revenueMap: Record<string, string> = {
      'below-50k': 'Abaixo de R$ 50.000',
      '50k-100k': 'Entre R$ 50.000 e R$ 100.000',
      'above-100k': 'Acima de R$ 100.000'
    }

    const revenueText = revenueMap[formData.revenue] || formData.revenue
    const formalizedText = formData.isFormalized === 'sim' ? 'Sim' : 'Não'

    // 3. Criando a mensagem formatada
    // O \n cria uma quebra de linha. Os asteriscos (*) deixam o texto em negrito no WhatsApp.
    const message = `*🚀 NOVO LEAD DO SITE - GESTOR 4.0*
    
👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🏢 *Empresa Formalizada?* ${formalizedText}
💰 *Faturamento:* ${revenueText}

--------------------------------
Gostaria de saber mais sobre a Imersão!`

    // 4. Codificando a URL e abrindo o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneCompany}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')

    toast.success('Redirecionando para o WhatsApp...')

    // Resetar o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      isFormalized: '',
      revenue: ''
    })
  }

  return (
    <section
      id="formulario"
      className="py-20 bg-gradient-to-br from-card to-secondary relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O Primeiro Passo para Transformar Gestão em Resultado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deixe seus dados abaixo e finalize seu cadastro diretamente com
              nosso time no WhatsApp.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-brand-gold/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-brand-gold text-foreground"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-foreground font-semibold"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-brand-gold text-foreground"
                  required
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-foreground font-semibold"
                >
                  Telefone (WhatsApp) *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-secondary/50 border-border focus:border-brand-gold text-foreground"
                  required
                />
              </div>

              {/* Empresa Formalizada */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  Sua empresa já está formalizada? *
                </Label>
                <RadioGroup
                  value={formData.isFormalized}
                  onValueChange={value =>
                    setFormData({ ...formData, isFormalized: value })
                  }
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="sim" />
                    <Label
                      htmlFor="sim"
                      className="text-foreground cursor-pointer"
                    >
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="nao" />
                    <Label
                      htmlFor="nao"
                      className="text-foreground cursor-pointer"
                    >
                      Não
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Faturamento */}
              <div className="space-y-2">
                <Label
                  htmlFor="revenue"
                  className="text-foreground font-semibold"
                >
                  Qual o faturamento mensal aproximado? *
                </Label>
                <Select
                  value={formData.revenue}
                  onValueChange={value =>
                    setFormData({ ...formData, revenue: value })
                  }
                >
                  <SelectTrigger className="bg-secondary/50 border-border focus:border-brand-gold text-foreground">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-50k">
                      Abaixo de R$ 50.000
                    </SelectItem>
                    <SelectItem value="50k-100k">
                      R$ 50.000 a R$ 100.000
                    </SelectItem>
                    <SelectItem value="above-100k">
                      Acima de R$ 100.000
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                // ADICIONEI: md:mx-auto md:flex
                // ISSO FAZ: No desktop, ele ganha margens automáticas (centraliza)
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-lg py-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 whitespace-normal h-auto px-8 leading-tight md:w-auto md:mx-auto md:flex"
              >
                QUERO FALAR COM UM ESPECIALISTA AGORA!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
