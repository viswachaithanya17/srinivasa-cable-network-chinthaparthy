import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/IAxQwOlIoCV8AWSNfufkap";

  return (
    <section id="contact" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions or need support? We're here to help!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl gradient-card border border-border card-shadow mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Our Location</h3>
                <p className="text-muted-foreground">
                  Chinthaparthi
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl gradient-card border border-border card-shadow text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/20 mb-6">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Contact Us on WhatsApp</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Reach out to us for new connections, service inquiries, or support. 
              We're committed to providing you with the best service experience.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
