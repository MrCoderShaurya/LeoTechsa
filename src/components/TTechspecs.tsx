import DImageSlider from "./DImageSlider";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "./ui/button";
const sizeSpecs = [
  { label: 'External Dimensions', value: '990 x 698 x 381 mm (39 x 26.5 x 15.3 in)' },
  { label: 'Weight', value: '80 kg (176 lbs)' },
  { label: 'Max Payload', value: '100 kg (220 lb)' },
  { label: 'Max. Climb Grade', value: '30°' },
  { label: 'IP Rating', value: 'IP54' },
];

const performanceSpecs = [
  { label: 'Max Speed', value: '2.0 m/s (4.4 mph)' },
  {
    label: 'Run Time (Typical Use)',
    value: (
      <>
        <div>Standard: 8 Hours</div>
        <div>Upgraded: 16 Hours</div>
        <div>Extended: 24 Hours</div>
      </>
    ),
  },
  {
    label: 'User Power',
    value: (
      <>
        <div>12 V @ 10 A</div>
        <div>24 V @ 5 A</div>
        <div>VBAT @ 5 A</div>
        <div>VBAT @ 40 A (Optional)</div>
      </>
    ),
  },
  { label: 'ROS Compatibility', value: 'ROS 2 Jazzy' },
];

const TechSpecsSection = () => {
  const specsRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 15;

  // === COLORS ===
  const GREEN = [22, 163, 74]; // Tailwind green-600
  const DARK = [17, 24, 39];
  const GRAY = [120, 120, 120];

  // ===== HEADER BAND =====
  pdf.setFillColor(34,139,34); // Tailwind green-600
  pdf.rect(0, 0, pageWidth, 38, "F");

  // Logo
  try {
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.src = "https://leotechsa.com/assets/img/Defence.png";
    await new Promise((res, rej) => {
      logo.onload = res;
      logo.onerror = rej;
    });
    pdf.addImage(logo, "PNG", margin, 8, 28, 18);
  } catch {}

  // Title
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(20);
  pdf.text("TECHNICAL SPECIFICATIONS", pageWidth / 2, 20, {
    align: "center",
  });

  pdf.setFontSize(10);
  pdf.text("UNMANNED GROUND VEHICLE", pageWidth / 2, 28, {
    align: "center",
  });

  pdf.setTextColor(0, 0, 0);

  let y = 50;

  // ===== SECTION TITLE =====
  const section = (title: string) => {
    pdf.setFontSize(13);
    pdf.setFont(undefined, "bold");
    pdf.setTextColor(34,139,34);
    pdf.text(title, margin, y);
    y += 4;
    pdf.setDrawColor(34,139,34);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 8;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "normal");
  };

  // ===== SPEC ROW =====
  const row = (label: string, value: string) => {
    pdf.setFontSize(10);
    pdf.text(label, margin, y);
    pdf.setFont(undefined, "bold");
    pdf.text(value, pageWidth - margin, y, { align: "right" });
    pdf.setFont(undefined, "normal");
    y += 7;
  };

  // ===== SIZE & WEIGHT =====
  section("SIZE AND WEIGHT");

  row("External Dimensions (L × W × H)", "990 × 698 × 381 mm");
  row("Weight", "80 kg");
  row("Max Payload", "100 kg");
  row("Ground Clearance", "130 mm");
  row("IP Rating", "IP54");

  y += 6;

  // ===== SPEED & PERFORMANCE =====
  section("SPEED AND PERFORMANCE");

  row("Max Speed", "2.0 m/s (4.4 mph)");
  row("Max Climb Grade", "30°");
  row("Run Time (Standard)", "8 Hours");
  row("Run Time (Upgraded)", "16 Hours");
  row("Run Time (Extended)", "24 Hours");

  y += 6;

  // ===== BATTERY & POWER =====
  section("BATTERY AND POWER SYSTEM");

  row("User Power", "12 V @ 10 A");
  row("Aux Power", "24 V @ 5 A");
  row("VBAT Output", "5 A / 40 A (Optional)");

  y += 6;

  // ===== SOFTWARE =====
  section("SOFTWARE & INTERFACING");

  row("ROS Compatibility", "ROS 2 Jazzy");
  row("Communication", "Ethernet, USB, Wi-Fi");
  row("Feedback", "Battery, Diagnostics, Encoders");

  // ===== FOOTER =====
  pdf.setFontSize(9);
  pdf.setTextColor(120,120,120);
  pdf.text(
    "© LEOTECHSA Defence Systems | Confidential Technical Datasheet",
    pageWidth / 2,
    290,
    { align: "center" }
  );

  pdf.save("Leotech_TUGV_Technical_Datasheet.pdf");
};
  return (
    <section id="specs" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-semibold tracking-wide">TECH SPECS</h2>
          <Button type="button" onClick={handleDownload}>
            Download Specs
          </Button>
        </div>

        {/* Technical drawings */}
        <div className="mb-20">
          <DImageSlider />
        </div>

        {/* Specs */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Size & Weight */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-8">
              Size and Weight
            </h3>

            <div className="space-y-6">
              {sizeSpecs.map((spec, i) => (
                <div key={i}>
                  <div className="flex justify-between gap-6 text-sm">
                    <span className="text-neutral-600">{spec.label}</span>
                    <span className="text-neutral-900 text-right">
                      {spec.value}
                    </span>
                  </div>
                  <div className="border-b border-neutral-300 mt-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Speed & Performance */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-8">
              Speed and Performance
            </h3>

            <div className="space-y-6">
              {performanceSpecs.map((spec, i) => (
                <div key={i}>
                  <div className="flex justify-between gap-6 text-sm">
                    <span className="text-neutral-600">{spec.label}</span>
                    <span className="text-neutral-900 text-right space-y-1">
                      {spec.value}
                    </span>
                  </div>
                  <div className="border-b border-neutral-300 mt-6" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechSpecsSection;
