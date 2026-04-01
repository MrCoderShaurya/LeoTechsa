
const AHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://leotechsa.com/assets/img/Agri.png"
          alt="Agriculture Robot"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="section-subtitle mb-4">Precision Farming Solutions</p>
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tight mb-6">
          AGRICULTURE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Advanced Farm Automation for Global Food Security
        </p>
      </div>
    </section>
  );
};

export default AHeroSection;
