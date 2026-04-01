const features = [
  {
    title: 'PRECISION PLANTING',
    description:
      'Automated planting systems with precise seed placement and spacing for optimal crop density and reduced seed waste.',
  },
  {
    title: 'SMART IRRIGATION',
    description:
      'Intelligent water management systems that monitor soil moisture and weather patterns for efficient resource use.',
  },
  {
    title: 'CROP MONITORING',
    description:
      'Real-time surveillance and analysis of crop health using advanced sensors and AI-powered disease detection.',
  },
  {
    title: 'YIELD OPTIMIZATION',
    description:
      'Data-driven insights to maximize productivity per acre through adaptive farming techniques and predictive analytics.',
  },
  {
    title: 'FARM ANALYTICS',
    description:
      'Comprehensive dashboard providing real-time farm data, performance metrics, and actionable recommendations.',
  },
  {
    title: 'AUTONOMOUS OPERATION',
    description:
      'Self-operating systems that work 24/7 with minimal human intervention, maximizing operational efficiency.',
  },
];

const AFeatureSection = () => {
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

export default AFeatureSection;
