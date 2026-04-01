const features = [
  {
    title: 'EXCEPTIONAL PERFORMANCE',
    description:
      "Husky's high-powered drivetrain delivers unparalleled performance with a maximum speed of 2 m/s, making it twice as fast as its predecessor. With a robust payload capacity of 100 kg and average runtime of 8 hours — extendable up to 24 hours with an upgraded battery configuration — Husky UGV is designed to excel in demanding environments and lengthy deployments, ensuring your team gets the most out of every day in the field.",
  },
  {
    title: 'RUGGED & ALL-TERRAIN',
    description:
      "Engineered for the toughest environments, Husky features a sturdy aluminum chassis, a weather resistant IP54 rating, and a high-torque drivetrain powered by four in-wheel brushless motors. Whether it's rocky terrain, hills, mud, sand or inclement weather, Husky is up for the challenge.",
  },
  {
    title: 'BUILD & EXPAND',
    description:
      "Designed for versatility, Husky offers a flexible payload interface including a large universal mounting plate and convenient user electrical breakouts, that allow you to effortlessly integrate and power third-party sensors, accessories, and custom payloads. Easily tailor Husky to meet your unique requirements.",
  },
  {
    title: 'EASY TO USE',
    description:
      "Husky comes with ROS 2 installed and configured allowing you to easily leverage the wealth of open-source libraries, tools, and shared knowledge of the ROS community in your robotics development. With comprehensive documentation, step-by-step tutorials, and demos available, you can quickly dive into development.",
  },
  {
    title: 'ENHANCED VISUAL SIGNALS',
    description:
      'Husky now comes equipped with four programmable LED lights — two positioned at the front and two at the back — to enhance user interaction, safety and operational awareness. A 3.70" e-ink display on the back of the platform provides key information such as battery status, charge levels, wifi connectivity and more.',
  },
];

const TFeaturesSection = () => {
  return (
    <section id="features" className="bg-[#e9e9e7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-wide mb-16">
          FEATURES
        </h2>

        {/* Features list */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-[280px_1fr] gap-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {feature.description}
                </p>
              </div>

              {/* Divider */}
              {index !== features.length - 1 && (
                <div className="border-b border-neutral-400 mt-12" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TFeaturesSection;
