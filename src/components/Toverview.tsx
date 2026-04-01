const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title mb-6">Husky A300</h2>
            <p className="section-subtitle mb-8">Unmanned Ground Vehicle</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Husky is a rugged and customizable mobile robotic platform, designed to 
              accelerate robotics research and streamline the development of robotic 
              solutions in industry. Built with a durable all-metal weatherproof chassis 
              and a powerful drivetrain, Husky is engineered to thrive in the toughest 
              environments, maximizing uptime and productivity in the field.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              With a flexible payload interface for easy integration of sensors and 
              accessories, Husky adapts to your specific needs. It ships with ROS 2 and 
              a suite of documentation, tutorials and demos, allowing you to get started 
              quickly and bring your robotic vision to life.
            </p>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://leotechsa.com/assets/img/Transportation.png"
              alt="Husky A300 Overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
