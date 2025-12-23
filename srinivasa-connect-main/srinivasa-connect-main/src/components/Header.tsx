import { Wifi, Tv } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-bg">
            <Wifi className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground leading-tight">Srinivasa Cable Network</span>
            <span className="text-xs text-muted-foreground">Chinthaparthi</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
