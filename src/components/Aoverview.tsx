const AOverviewSection = () => {
  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title mb-6">Agriculture Solutions</h2>
            <p className="section-subtitle mb-8">Farm Automation & Precision Farming</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Food security is a global concern with unprecedented rise in demand for food. 
              Precision Agriculture with farm automation is the key solution. Our advanced 
              robotics and automation systems help farmers optimize crop yields while minimizing 
              resource consumption and environmental impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              From autonomous planting and weeding to intelligent crop monitoring and harvesting, 
              our agricultural solutions deliver measurable improvements in productivity and 
              sustainability. Empower your farm with cutting-edge technology.
            </p>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://leotechsa.com/assets/img/Agri.png"
              alt="Agriculture Overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AOverviewSection;
