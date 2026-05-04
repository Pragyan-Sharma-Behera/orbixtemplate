import { motion } from "framer-motion";
import orb from "@/assets/purple-orb.png";
import { ProjectFormDialog } from "@/components/ProjectFormDialog";

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10H5.67v8h2.67zM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.41 1.33V10h-2.67v8h2.67v-4.47c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.97 0 1.36.74 1.36 1.81V18h2.68z" />
  </svg>
);

const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const IconWhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socials = [
  {
    icon: IconLinkedIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pragyan-sharma-behera-738b9a404?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: IconInstagram,
    label: "Instagram",
    href: "https://share.google/hIsGtW2hctEthBsKV",
  },
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    href: "https://wa.me/917002021780",
  },
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

            <div className="mt-10 flex justify-center">
              <ProjectFormDialog
                triggerClassName="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[oklch(0.55_0.28_295)] to-[oklch(0.72_0.28_305)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_60px_oklch(0.62_0.26_300/0.5)] hover:shadow-[0_0_120px_oklch(0.62_0.26_300/0.6)] transition-all hover:-translate-y-0.5"
              />
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-white/10 transition"
                  >
                    <s.icon className="text-primary-glow" />
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
