import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CriticalAreasSection from "@/components/CriticalAreasSection";
import ProcessSection from "@/components/ProcessSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CriticalAreasSection />
        <ProcessSection />
        <DeliverablesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
