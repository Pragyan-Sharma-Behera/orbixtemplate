import { createFileRoute } from "@tanstack/react-router";
import { SiteBackground } from "@/components/SiteBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Team } from "@/components/Team";
import { Portfolio } from "@/components/Portfolio";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Team />
        <Portfolio />
        <CTASection />
      </main>
    </div>
  );
}
