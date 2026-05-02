import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import orb from "@/assets/purple-orb.png";

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10H5.67v8h2.67zM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.41 1.33V10h-2.67v8h2.67v-4.47c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.97 0 1.36.74 1.36 1.81V18h2.68z" />
  </svg>
);
const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const IconTwitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);
const IconDribbble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M8 2.5c4 5 6 10 7 19M21 8c-5 1-13 1-18-1M3 16c5-2 13-2 18 1" />
  </svg>
);

const socials = [
  { icon: IconLinkedIn, label: "LinkedIn", href: "#" },
  { icon: IconInstagram, label: "Instagram", href: "#" },
  { icon: IconTwitter, label: "Twitter / X", href: "#" },
  { icon: IconDribbble, label: "Dribbble", href: "#" },
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
