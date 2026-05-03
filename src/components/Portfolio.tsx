import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Project = {
  name: string;
  url: string;
  domain: string;
  meta: string;
  tagline: string;
};

const projects: Project[] = [
  {
    name: "Dusri Biwi Cafe",
    url: "https://dusribiwicafe.vercel.app",
    domain: "dusribiwicafe.vercel.app",
    meta: "RESTAURANT · WEB · 2025",
    tagline: "Pure-veg cafe & restaurant, Silchar",
  },
  {
    name: "Sagarika Silchar",
    url: "https://sagarika-silchar.vercel.app",
    domain: "sagarika-silchar.vercel.app",
    meta: "HOSPITALITY · WEB · 2025",
    tagline: "Local brand site, Silchar",
  },
  {
    name: "Burnout Cafe",
    url: "https://burnoutcafe.vercel.app",
    domain: "burnoutcafe.vercel.app",
    meta: "CAFE · WEB · 2025",
    tagline: "Cafe & community space",
  },
];

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 800;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative block rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(15, 8, 26, 0.6)",
        border: "1px solid rgba(155, 80, 255, 0.15)",
        boxShadow: "0 0 0 0 rgba(155, 80, 255, 0)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 20px 60px -15px rgba(155, 80, 255, 0.35), 0 0 0 1px rgba(155, 80, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 0 rgba(155, 80, 255, 0)";
      }}
    >
      {/* Atmospheric radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, rgba(192, 132, 252, 0.18), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Browser mockup */}
        <div
          className="relative overflow-hidden rounded-xl border"
          style={{
            borderColor: "rgba(155, 80, 255, 0.18)",
            background: "#0a0612",
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center gap-2 px-3 py-2 border-b"
            style={{
              borderColor: "rgba(155, 80, 255, 0.15)",
              background: "rgba(20, 12, 35, 0.9)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div
                className="text-[10px] px-3 py-1 rounded-full truncate max-w-[70%] text-foreground/60"
                style={{
                  background: "rgba(155, 80, 255, 0.08)",
                  border: "1px solid rgba(155, 80, 255, 0.15)",
                }}
              >
                {project.domain}
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Iframe viewport */}
          <div
            className="relative w-full overflow-hidden bg-[#0a0612]"
            style={{ aspectRatio: `${IFRAME_WIDTH} / ${IFRAME_HEIGHT}` }}
          >
            {!failed ? (
              <iframe
                src={project.url}
                title={project.name}
                loading="lazy"
                onError={() => setFailed(true)}
                scrolling="no"
                className="absolute left-0 top-0 origin-top-left border-0"
                style={{
                  width: `${IFRAME_WIDTH}px`,
                  height: `${IFRAME_HEIGHT}px`,
                  transform: `scale(var(--iframe-scale))`,
                  WebkitTransform: `scale(var(--iframe-scale))`,
                  pointerEvents: "none",
                  // @ts-expect-error custom prop
                  "--iframe-scale": "calc(100cqw / 1280)",
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a0d2e] to-[#0a0612]">
                <div className="text-center px-6">
                  <div className="text-xs uppercase tracking-widest text-[#c084fc] mb-3">
                    Live Preview
                  </div>
                  <div className="font-display text-2xl text-foreground">{project.name}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Meta + name */}
        <div className="pt-5 pr-12 relative">
          <div
            className="text-[10px] uppercase tracking-[0.2em] mb-2"
            style={{ color: "#c084fc" }}
          >
            {project.meta}
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{project.tagline}</p>

          <div
            className="absolute right-1 bottom-1 h-9 w-9 rounded-full flex items-center justify-center transition-all group-hover:rotate-45"
            style={{
              background: "rgba(155, 80, 255, 0.12)",
              border: "1px solid rgba(155, 80, 255, 0.25)",
              color: "#c084fc",
            }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
            · Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
            Live work. Real clients.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            Three shipped sites. Tap any preview to see it live.
          </p>
        </motion.div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ containerType: "inline-size" } as React.CSSProperties}
        >
          {projects.map((p, i) => (
            <div key={p.url} style={{ containerType: "inline-size" } as React.CSSProperties}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1.5 border-b border-primary/30 hover:border-primary pb-1"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  );
}
