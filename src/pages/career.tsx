import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";
import { Mail, Briefcase, Users, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "roboticist",
    title: "Roboticist Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    description: "Join our team to design and develop innovative robotic solutions. Work on cutting-edge projects that bridge technology with real-world applications.",
    requirements: [
      "Bachelor's degree in Robotics, Mechanical, or Electrical Engineering",
      "3+ years of experience in robotics development",
      "Strong knowledge of ROS and control systems",
      "Experience with CAD software (CATIA, SolidWorks)",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible working hours",
      "Learning and development opportunities",
      "Collaborative and innovative work environment",
    ],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    description: "Develop embedded systems and software solutions for our robotic platforms. Contribute to building software that powers next-generation robots.",
    requirements: [
      "Bachelor's degree in Computer Science or Software Engineering",
      "2+ years of software development experience",
      "Proficiency in C++, Python, or Go",
      "Experience with embedded systems and real-time programming",
      "Knowledge of version control systems (Git)",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Health and wellness programs",
      "Annual performance bonuses",
      "Career growth opportunities",
    ],
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    description: "Design mechanical systems and structures for robotic platforms. Work on innovative mechanical solutions that meet performance and durability requirements.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "3+ years of mechanical design experience",
      "Proficiency in CAD and simulation tools",
      "Knowledge of material science and manufacturing processes",
      "Experience with robotics or autonomous systems",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Professional development courses",
      "Team collaboration and mentorship",
      "Innovation-focused work culture",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product & Strategy",
    location: "Pune, India",
    type: "Full-time",
    description: "Lead product strategy and development for our robotic solutions. Define product vision, roadmap, and drive go-to-market strategies.",
    requirements: [
      "Bachelor's degree in Engineering or Business",
      "5+ years of product management experience",
      "Experience in robotics or tech industry",
      "Strong analytical and communication skills",
      "Track record of successful product launches",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Executive development programs",
      "Flexible work arrangements",
      "Leadership opportunities",
    ],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We inspire, ignite, and innovate. Bridging technology with nature to create novel solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work with a versatile team of talented engineers and creative minds.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description: "Committed to building products with exceptional quality and outstanding customer service.",
  },
  {
    icon: Lightbulb,
    title: "Growth",
    description: "Continuous learning and professional development opportunities.",
  },
];

export default function Career() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-primary/5 to-transparent pt-32">
        <div className="container mx-auto text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animation-fade-in">
            BUILD THE FUTURE WITH US
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animation-fade-in">
            Dream is like a seed, you sow it on the ground, and it grows. We are passionate technologists, designers, and researchers driven by nature and technology. Join our team and help us create innovative robotic solutions that transform industries.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="section-title">WHY JOIN LEOTECHSA?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animation-fade-in flex flex-col items-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-section-light">
        <div className="container mx-auto">
          <h2 className="section-title text-center">OPEN POSITIONS</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animation-fade-in"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-primary/5 transition-colors"
                  onClick={() =>
                    setExpandedJob(expandedJob === job.id ? null : job.id)
                  }
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {job.location}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                {expandedJob === job.id && (
                  <div className="border-t px-6 py-6 bg-background animation-fade-in">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-muted-foreground"
                          >
                            <span className="text-primary mr-3 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        What We Offer:
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start text-muted-foreground"
                          >
                            <span className="text-primary mr-3 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/apply?jobTitle=${encodeURIComponent(job.title)}`}
                      className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center">OUR CULTURE</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animation-slide-right">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Leotechsa, we emphasize ideation and conceptualization. Our team is composed of versatile engineers with excellent domain knowledge and highly skilled, talented creative minds. We combine fundamental study of physics, mathematics, technology, and psychology to create compelling experiences for our clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe in fostering an environment where innovation thrives, collaboration is valued, and every team member contributes to our shared vision. Our primary goal is to create long-term relationships based on understanding client requirements deeply and meeting them with excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <p className="text-foreground">Work on cutting-edge robotic solutions</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <p className="text-foreground">Collaborate with passionate innovators</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <p className="text-foreground">Grow your skills and career</p>
                </div>
              </div>
            </div>
            <div className="animation-slide-left">
              <img
                src="https://leotechsa.com/assets/img/teamsky.png"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto text-center max-w-2xl px-6">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't see a position that matches your profile? We're always looking for talented individuals. Send us your resume and let's explore opportunities together!
          </p>
          <a
            href="mailto:shauryap@leotechsa.com"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Email Your Application
          </a>
          <p className="text-muted-foreground mt-6">
            shauryap@leotechsa.com
          </p>
        </div>
      </section>

      <BackToTop />
      <FooterSection />
    </div>
  );
}
