import { Button } from "@/components/ui/button";
import logoConnect from "@/assets/logo-connect-academy.png";

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img 
            src={logoConnect} 
            alt="Connect Academy" 
            className="w-32 md:w-40 h-auto"
          />
          
          <Button
            onClick={onCtaClick}
            variant="default"
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold hidden md:inline-flex"
          >
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </header>
  );
};
