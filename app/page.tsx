import Hero from "@/components/Hero";
import KeywordsTicker from "@/components/home/KeywordsTicker";
import ServicesPreview from "@/components/home/ServicesPreview";
import SystemShowcase from "@/components/home/SystemShowcase";
import ResultsSection from "@/components/home/ResultsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <KeywordsTicker />
      <ServicesPreview />
      <SystemShowcase />
      <ResultsSection />
      <CtaSection />
    </>
  );
}
