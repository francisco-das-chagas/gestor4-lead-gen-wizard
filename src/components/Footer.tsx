import logoGestor from "@/assets/logo-gestor.png";
import logoConnect from "@/assets/logo-connect-academy.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={logoGestor} 
              alt="GESTOR 4.0" 
              className="w-32 h-auto"
            />
            <div className="w-px h-12 bg-border hidden md:block" />
            <img 
              src={logoConnect} 
              alt="Connect Academy" 
              className="w-32 h-auto"
            />
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Connect Academy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
