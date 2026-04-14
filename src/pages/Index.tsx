import HeroSection from "@/components/HeroSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import MethodSection from "@/components/MethodSection";
import ProofSection from "@/components/ProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <ComparisonSection />
    <MethodSection />
    <ShowcaseSection />
    <BenefitsSection />
    <ProofSection />
    <ParaQuemSection />
    <PricingSection />
    <FAQSection />
    <FooterCTA />
  </main>
);

export default Index;
