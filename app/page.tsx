import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { FrameworksRow } from "@/components/sections/FrameworksRow";
import { Hero } from "@/components/sections/Hero";
import { MethodologyStepper } from "@/components/sections/MethodologyStepper";
import { PlatformBento } from "@/components/sections/PlatformBento";
import { ProblemStrip } from "@/components/sections/ProblemStrip";
import { ResearchCards } from "@/components/sections/ResearchCards";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStrip />
      <PlatformBento />
      <ServicesGrid />
      <MethodologyStepper />
      <FrameworksRow />
      <AboutPreview />
      <ResearchCards />
      <FaqSection />
      <FinalCta />
      <ContactSection />
    </main>
  );
}
