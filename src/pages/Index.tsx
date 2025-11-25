import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ContentSection } from "@/components/ContentSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("formulario");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} />
      <main className="pt-20">
        <HeroSection onCtaClick={scrollToForm} />
        <PainPointsSection />
        <SolutionSection />
        <ContentSection />
        <BenefitsSection onCtaClick={scrollToForm} />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
