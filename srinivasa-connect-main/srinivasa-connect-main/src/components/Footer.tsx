import { Wifi, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-bg">
              <Wifi className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Srinivasa Cable Network
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Srinivasa Cable Network  Chinthaparthi. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for our community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
