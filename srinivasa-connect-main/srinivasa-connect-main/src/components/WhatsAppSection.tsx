import { MessageCircle, Bell, Gift, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappQR from "@/assets/whatsapp-qr.jpeg";

const WhatsAppSection = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/IAxQwOlIoCV8AWSNfufkap";

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-whatsapp/20 mb-8">
            <MessageCircle className="w-10 h-10 text-whatsapp" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay <span className="gradient-text">Connected</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Join our WhatsApp group to get the latest updates, special offers, 
            and service notifications directly on your phone.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bell className="w-4 h-4 text-primary" />
              <span>Service Updates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gift className="w-4 h-4 text-primary" />
              <span>Exclusive Offers</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>Quick Support</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="mb-8 p-6 rounded-2xl bg-card border border-border inline-block">
            <img 
              src={whatsappQR} 
              alt="Scan QR code to join Srinivasa Cable Network WhatsApp group" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg"
            />
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4" />
              <span>Scan with your phone camera</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Or click the button below</p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Group
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
