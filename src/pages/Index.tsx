import { ProgressBar } from "@/components/ProgressBar";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/Hero";
import { DeficiencyConsequences } from "@/components/DeficiencyConsequences";
import { WhyItWorks } from "@/components/WhyItWorks";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Bonus } from "@/components/Bonus";
import { FAQ } from "@/components/FAQ";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <StickyCTA />
      <Hero />
      <DeficiencyConsequences />
      <WhyItWorks />
      <HowItWorks />
      <Testimonials />
      <Bonus />
      <FAQ />
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;
