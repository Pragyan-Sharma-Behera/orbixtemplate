import { useEffect, useState } from "react";
import silkBg from "@/assets/purple-silk-bg.jpg";

export function SiteBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base black */}
      <div className="absolute inset-0 bg-background" />

      {/* Silk fabric parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${silkBg})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Glow orbs */}
      <div
        className="absolute top-[10%] left-[60%] h-[500px] w-[500px] rounded-full blur-3xl opacity-40 animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.26 300 / 0.6), transparent 70%)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute top-[60%] left-[5%] h-[400px] w-[400px] rounded-full blur-3xl opacity-30 animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.28 295 / 0.6), transparent 70%)",
          transform: `translateY(${scrollY * -0.1}px)`,
          animationDelay: "2s",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
