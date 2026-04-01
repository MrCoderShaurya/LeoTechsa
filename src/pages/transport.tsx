import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Therosection from "@/components/Therosection";
import Toverview from "@/components/Toverview";
import TFeatureSection from "@/components/Tfeaturesection";
import TTechspecs from "@/components/TTechspecs";

export default function transport() {
  return (
    <div className="min-h-screen">
      <Header />
      <Therosection />
      <Toverview />
      <TFeatureSection />
      <TTechspecs />
      <FooterSection />
    </div>
  );
}