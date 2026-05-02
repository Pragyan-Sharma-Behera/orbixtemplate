import { motion } from "framer-motion";
import { ArrowRight, Calendar, Instagram, Linkedin, Twitter, Dribbble, Mail } from "lucide-react";
import orb from "@/assets/purple-orb.png";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
  { icon: Mail, label: "hello@orbix.studio", href: "mailto:hello@orbix.studio" },
];

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-20 text-center"
        >
          <img
            src={orb}
            alt=""
            aria-hidden
            className="absolute -top-20 -right-20 w-80 opacity-50 animate-float pointer-events-none"
            style={{ filter: "drop-shadow(0 0 80px oklch(0.62 0.26 300 / 0.7))" }}
          />
          <img
            src={orb}
            alt=""
            aria-hidden
            className="absolute -bottom-24 -left-16 w-64 opacity-40 animate-float pointer-events-none"
            style={{ animationDelay: "3s", filter: "drop-shadow(0 0 80px oklch(0.62 0.26 300 / 0.7))" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
              · Let's build
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-semibold leading-[1] text-gradient">
              Have an idea worth orbiting?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Tell us where you want to go. We'll quietly engineer the shortest path there.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@orbix.studio"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-0.5"
              >
                Build a website
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="mailto:hello@orbix.studio"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-all"
              >
                <Calendar size={16} />
                Book a free call
              </a>
            </div>

            <div className="mt-14">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Find us in orbit
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-white/10 transition"
                  >
                    <s.icon size={15} className="text-primary-glow" />
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-primary" />
            <span className="font-display font-semibold text-foreground">ORBIX</span>
            <span>· Studio in orbit since 2017</span>
          </div>
          <div>© {new Date().getFullYear()} ORBIX. All rights reserved.</div>
        </footer>
      </div>
    </section>
  );
}
