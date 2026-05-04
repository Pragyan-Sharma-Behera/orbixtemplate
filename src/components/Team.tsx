import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import pragyan from "@/assets/team-pragyan.png";
import aniket from "@/assets/team-aniket.png";
import debarpan from "@/assets/team-debarpan.png";
import biswarup from "@/assets/team-biswarup.png";

type Member = {
  img: string;
  eyebrow: string;
  name: string;
  bio: string;
  cta: string;
  taglineMain: string;
  taglineAccent: string;
  glow: string;
};

const members: Member[] = [
  {
    img: pragyan,
    eyebrow: "Meet the Founder",
    name: "Pragyan Sharma Behera",
    bio: "Pragyan founded ORBIX with one mission: to build websites that actually convert. From positioning to launch, every project is led with a single principle — details are the difference between a brand and a memory.",
    cta: "Work with Pragyan",
    taglineMain: "FOUNDER",
    taglineAccent: "CEO",
    glow: "oklch(0.62 0.26 300 / 0.55)",
  },
  {
    img: aniket,
    eyebrow: "Meet the Sales Director",
    name: "Aniket Srivastava",
    bio: "Aniket leads sales at ORBIX — the first conversation, the scoping, and the close. He makes sure the brief matches the build before a single pixel is drawn, so projects ship right the first time.",
    cta: "Work with Aniket",
    taglineMain: "SALES",
    taglineAccent: "DIRECTOR",
    glow: "oklch(0.7 0.24 340 / 0.55)",
  },
  {
    img: debarpan,
    eyebrow: "Meet the Creative Director",
    name: "Debarpan Das",
    bio: "Debarpan owns the creative vision at ORBIX — turning strategy into interfaces that feel inevitable. Every brand system, every screen, every detail is filtered through a single question: does it earn its place?",
    cta: "Work with Debarpan",
    taglineMain: "CREATIVE",
    taglineAccent: "DIRECTOR",
    glow: "oklch(0.6 0.25 280 / 0.55)",
  },
  {
    img: biswarup,
    eyebrow: "Meet the Social Lead",
    name: "Biswarup Das",
    bio: "Biswarup runs the conversation outside the website — the content, the cadence, the audience-building work that turns a launch into momentum. Brands don't just go live, they get heard.",
    cta: "Work with Biswarup",
    taglineMain: "SOCIAL",
    taglineAccent: "MEDIA",
    glow: "oklch(0.65 0.26 315 / 0.55)",
  },
];

export function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const goNext = () => goTo((active + 1) % members.length);

  return (
    <section id="team" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary-glow mb-6">· The Crew</div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
            The people behind the work.
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-16">
        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {members.map((m) => (
            <article
              key={m.name}
              className="relative shrink-0 w-full snap-center px-6 py-12 md:py-20"
              aria-label={m.name}
            >
              {/* Per-panel glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-[420px] w-[720px] max-w-[120%] rounded-full blur-3xl opacity-80"
                style={{ background: `radial-gradient(closest-side, ${m.glow}, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 max-w-4xl mx-auto">
                {/* Left: portrait */}
                <div className="flex items-center gap-5 shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="relative h-[200px] w-[200px] md:h-[240px] md:w-[240px] rounded-full p-[2px]"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.72 0.28 305), oklch(0.55 0.28 295))",
                        boxShadow:
                          "0 0 0 6px oklch(0.62 0.26 300 / 0.15), 0 30px 60px -20px oklch(0.62 0.26 300 / 0.7)",
                      }}
                    >
                      <div className="h-full w-full rounded-full overflow-hidden bg-background">
                        <img
                          src={m.img}
                          alt={m.name}
                          width={480}
                          height={480}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right: text + arrow, right-aligned */}
                <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-primary-glow">
                    {m.eyebrow}
                  </div>

                  <h3 className="mt-3 font-display font-bold uppercase text-[26px] md:text-[36px] tracking-tight leading-none text-foreground">
                    {m.name}
                  </h3>

                  <p
                    className="mt-5 max-w-[360px] text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {m.bio}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary-glow underline underline-offset-4 decoration-primary/60 hover:decoration-primary-glow transition"
                  >
                    {m.cta} <ArrowRight size={14} />
                  </a>

                  <div className="mt-8 font-display uppercase tracking-[0.35em] text-xs md:text-sm text-foreground/80">
                    {m.taglineMain}{" "}
                    <span className="text-primary-glow">·</span>{" "}
                    <span className="text-primary-glow">{m.taglineAccent}</span>
                  </div>

                  <button
                    onClick={goNext}
                    aria-label="Next member"
                    className="mt-8 h-12 w-12 flex items-center justify-center rounded-full glass border border-primary/20 hover:bg-white/10 hover:border-primary-glow transition-all group shrink-0"
                  >
                    <ChevronRight
                      size={20}
                      className="text-primary-glow group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-7 bg-primary-glow shadow-glow"
                  : "w-2 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
