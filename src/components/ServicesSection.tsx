const services = [
  {
    title: "AUTONOMOUS ROBOT",
    description: "We design and manufacture autonomous robotic platforms.",
    icon: "https://leotechsa.com/assets/img/autonomous.png",
  },
  {
    title: "AI & VISION",
    description: "Our robot AI driven perception system include machine learning and Computer Vision models.",
    icon: "https://leotechsa.com/assets/img/ai.jpg",
  },
  {
    title: "DRIVES & CONTROLLER",
    description: "Our robot includes state-of-the-art controller modules and drivers handle our robot with accuracy and precision.",
    icon: "https://leotechsa.com/assets/img/drv.png",
  },
  {
    title: "HUMAN-IN-THE-LOOP",
    description: "Our robot fundamentally infuse technology and human interaction.",
    icon: "https://leotechsa.com/assets/img/Huma_in_loop.png",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-light">
      <div className="container mx-auto">
        <h3 className="section-title">TECHNOLOGICAL EXCELLENCE</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card animation-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
                loading="lazy"
                decoding="async"
              />
              <h4 className="font-semibold text-foreground mb-3 text-lg">
                <a href="#" className="hover:text-primary transition-colors">
                  {service.title}
                </a>
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
