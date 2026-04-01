import { useState } from "react";

const tabs = [
  {
    id: "foundation",
    title: "FOUNDATION",
    content: "Located in Pune, Leotechsa Robotics Pvt. Ltd. founded in the year 2018. At Leotechsa, we emphasis on the concept of ideation and conceptualization. We are committed to providing our clients with innovative solutions, designed and built with exceptional quality, and backed by outstanding customer service.",
    image: "https://leotechsa.com/assets/img/office.png",
  },
  {
    id: "vision",
    title: "VISION",
    content: "Leotechsa Robotics is a Pune Based Company, founded in 2018, our vision is to create the most compelling robotic company, to find best compatibility of robotics in human race, our technology and products are human-centric.",
    image: "https://leotechsa.com/assets/img/Vision.png",
  },
  {
    id: "values",
    title: "CORE VALUES",
    content: '"We Inspire, Ignite and Innovate", Bridging technology to the nature, we work on new notions, We combine the elements of fundamental study of physics, mathematics, technology and even psychology to create a whole new art experience for our client and customer.\nOur primary goal is to create a long term relationship with our clients and customers. We understand client requirement in deep and put complete efforts to meet those requirement.',
    image: "https://leotechsa.com/assets/img/Corevalue.png",
  },
  {
    id: "team",
    title: "TEAM",
    content: "We have versatile team of engineers with excellent domain knowledge and highly skilled, talented and creative team to build the product that our clients dreamed of.\n\nVikram is Founder & Technical Director: Vikram has past 16 years of Experience, previously he worked with Honeywell Automation, He comes from Computer Engineering background, also completed masters degree (MS) from BITS Pilani.",
    image: "https://leotechsa.com/assets/img/teamsky.png",
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("foundation");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <h3 className="section-title">ABOUT US</h3>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${
                activeTab === tab.id ? "tab-button-active" : "tab-button-inactive"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className="grid lg:grid-cols-2 gap-8 items-center animation-fade-in" key={activeContent.id}>
            <div className="order-2 lg:order-1 animation-slide-right">
              {activeContent.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="order-1 lg:order-2 flex justify-center animation-slide-left">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="max-w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
