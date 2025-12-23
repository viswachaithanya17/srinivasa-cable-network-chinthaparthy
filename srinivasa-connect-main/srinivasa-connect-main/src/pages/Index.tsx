import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatsAppSection from "@/components/WhatsAppSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Srinivasa Cable Network - TV Channels & WiFi Services | Chinthaparthi</title>
        <meta 
          name="description" 
          content="Srinivasa Cable Network provides reliable TV cable channels and high-speed WiFi internet services in Chinthaparthi. Customer satisfaction and timely support guaranteed." 
        />
        <meta name="keywords" content="cable network, wifi services, TV channels, internet, Chinthaparthi, Srinivasa Cable" />
        <link rel="canonical" href="https://srinivasacable.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhatsAppSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
