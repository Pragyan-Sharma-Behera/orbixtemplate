import { createFileRoute } from "@tanstack/react-router";
import { SiteBackground } from "@/components/SiteBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Team } from "@/components/Team";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORBIX — A digital agency built in orbit" },
      {
        name: "description",
        content:
          "ORBIX is a creative studio crafting cinematic websites, identities and digital experiences for ambitious brands.",
      },
      { property: "og:title", content: "ORBIX — A digital agency built in orbit" },
      {
        property: "og:description",
        content:
          "Cinematic websites and brand identities for ambitious teams. Build a website or book a free call.",
      },
    ],
  }),
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
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}
