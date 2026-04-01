import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import AHeroSection from "@/components/Aherosection";
import AOverviewSection from "@/components/Aoverview";
import AFeatureSection from "@/components/Afeaturesection";
import ASpecsSection from "@/components/ASpecsection";

export default function agriculture() {
  return (
    <div className="min-h-screen">
      <Header />
      <AHeroSection />
      <AOverviewSection />
      <AFeatureSection />
      <ASpecsSection />
      <FooterSection />
    </div>
  );
}