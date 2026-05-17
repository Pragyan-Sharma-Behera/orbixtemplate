import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pragyan from "@/assets/team-pragyan.png";

export function Team() {
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
        <article className="relative px-6 py-12 md:py-20" aria-label="Pragyan Sharma Behera">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-[420px] w-[720px] max-w-[120%] rounded-full blur-3xl opacity-80"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.62 0.26 300 / 0.55), transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-4xl mx-auto">
            {/* Portrait */}
            <div className="shrink-0">
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
                      src={pragyan}
                      alt="Pragyan Sharma Behera"
                      width={480}
                      height={480}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
              <div className="text-[11px] uppercase tracking-[0.3em] text-primary-glow">
                Meet the Founder
              </div>

              <h3 className="mt-3 font-display font-bold uppercase text-[26px] md:text-[36px] tracking-tight leading-none text-foreground">
                Pragyan Sharma Behera
              </h3>

              <p
                className="mt-5 max-w-[360px] text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Pragyan founded ORBIX with one mission: build websites that actually convert. He
                runs every project end to end — positioning, design, development, and launch — so
                the strategy and the code come from the same hand, never lost in handoffs. A Data
                Science foundation from IIT Madras backs the build with real technical depth. One
                principle drives every decision: details are the difference between a brand and a
                memory.
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary-glow underline underline-offset-4 decoration-primary/60 hover:decoration-primary-glow transition"
              >
                Work with Pragyan <ArrowRight size={14} />
              </a>

              <div className="mt-8 font-display uppercase tracking-[0.35em] text-xs md:text-sm text-foreground/80">
                FOUNDER <span className="text-primary-glow">·</span>{" "}
                <span className="text-primary-glow">CEO</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
