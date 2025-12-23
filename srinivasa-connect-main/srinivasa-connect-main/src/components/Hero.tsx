import { Wifi, Tv, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Signal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Serving Chinthaparthi & Nearby Areas</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">Srinivasa</span>
          <br />
          <span className="gradient-text">Cable Network</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          TV Channels & Internet Services You Can Trust
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="gradient" size="lg" asChild>
            <a href="#services">
              <Tv className="w-5 h-5" />
              Explore Services
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Wifi className="w-5 h-5" />
              Contact Us
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
