import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import DHeroSection from "@/components/Dherosection";
import DOverviewSection from "@/components/Doverview";
import DFeaturesSection from "@/components/Dfeaturesection";
import DSpecsSection from "@/components/DSpecsection";

export default function defence() {
  return (
    <div className="min-h-screen">
      <Header />
      <DHeroSection />
      <DOverviewSection />
      <DFeaturesSection />
      <DSpecsSection />
      <FooterSection />
    </div>
  );
}