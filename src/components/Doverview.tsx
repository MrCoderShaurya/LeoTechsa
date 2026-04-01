const DOverviewSection = () => {
  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title mb-6">Defense Solutions</h2>
            <p className="section-subtitle mb-8">Professional Service Robots</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Defense robots are professional service robots deployed by military and security 
              operations worldwide. Our advanced robotic platforms are engineered for reliability, 
              precision, and mission-critical performance in the most demanding environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Built with advanced sensors, secure communications, and autonomous capabilities, 
              our defense robots enhance operational effectiveness while protecting personnel. 
              From reconnaissance to payload delivery, our systems deliver uncompromising performance.
            </p>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://leotechsa.com/assets/img/Defence.png"
              alt="Defense Overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DOverviewSection;
