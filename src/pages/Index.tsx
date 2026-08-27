import { ProgressBar } from "@/components/ProgressBar";
import { StickyCTA } from "@/components/StickyCTA";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { DeficiencyConsequences } from "@/components/DeficiencyConsequences";
import { WhyItWorks } from "@/components/WhyItWorks";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";
import { Bonus } from "@/components/Bonus";
import { FAQ } from "@/components/FAQ";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <SiteHeader />
      <StickyCTA />
      <Hero />
      <Reveal>
        <ProductShowcase />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <DeficiencyConsequences />
      </Reveal>
      <Reveal>
        <WhyItWorks />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Bonus />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Trust />
      </Reveal>
      <Footer />
    </div>
  );
};

export default Index;
