import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProofMarquee />
        <ServicesPreview />
        <WhyChooseUs />
        <ProcessSteps />
        <Portfolio />
        <Testimonials />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
