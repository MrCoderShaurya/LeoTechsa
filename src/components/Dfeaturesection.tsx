const features = [
  {
    title: 'AUTONOMOUS SURVEILLANCE',
    description:
      'Advanced AI-powered surveillance capabilities for real-time threat detection and situational awareness.',
  },
  {
    title: 'EXPLOSIVE ORDNANCE DISPOSAL',
    description:
      'Remotely operated robots designed for safe identification and neutralization of explosive hazards.',
  },
  {
    title: 'REMOTE COMBAT SYSTEMS',
    description:
      'UGVs equipped with weapon systems that can be operated from a safe distance, reducing risk to personnel.',
  },
  {
    title: 'ALL-TERRAIN MOBILITY',
    description:
      'Robust platforms capable of navigating challenging terrains including sand, mud, and rocky environments.',
  },
  {
    title: 'LOGISTICS AND SUPPORT',
    description:
      'Autonomous systems for transporting supplies, equipment, and ammunition in hazardous or hard-to-reach areas.',
  },
  {
    title: 'ENHANCED COMMUNICATION',
    description:
      'Secure and reliable communication systems for seamless data transmission between the UGV and the command center.',
  },
];

const DFeaturesSection = () => {
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

export default DFeaturesSection;