import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StatBar />
      <MissionSection />
      <ImpactSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
