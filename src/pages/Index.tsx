import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductSection from "@/components/ProductSection";
import CareerSection from "@/components/CareerSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroVideo />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <CareerSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
};

export default Index;
