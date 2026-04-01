import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroVideo />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <ContactSection />
      <BackToTop />
      <FooterSection />
    </div>
  );
};

export default Index;
