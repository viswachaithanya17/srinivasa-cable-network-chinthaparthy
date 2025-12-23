import { Tv, Wifi, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Tv,
    title: "TV Cable Channels",
    description: "Enjoy crystal-clear picture quality with our extensive channel lineup",
    features: [
      "200+ channels",
      "HD quality available",
      "Regional & national channels",
      "Sports & entertainment",
      "News channels",
    ],
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Fast and reliable internet for all your browsing, streaming and work needs",
    features: [
      "High-speed connection",
      "Unlimited data plans",
      "Work from home ready",
      "Stream movies & shows",
      "Gaming compatible",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for entertainment and connectivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-3xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-shadow overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
