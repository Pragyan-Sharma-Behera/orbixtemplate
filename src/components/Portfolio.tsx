import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  url: string;
  img: string;
  meta: string;
  tagline: string;
};

const projects: Project[] = [
  {
    name: "Dusri Biwi Cafe",
    url: "https://dusribiwicafe.vercel.app",
    img: "/dusribiwi.jpeg",
    meta: "RESTAURANT · WEB · 2025",
    tagline: "Pure-veg cafe & restaurant, Silchar",
  },
  {
    name: "Sagarika Silchar",
    url: "https://sagarika-silchar.vercel.app",
    img: "/sagarikasilchar.jpeg",
    meta: "HOSPITALITY · WEB · 2025",
    tagline: "Local brand site, Silchar",
  },
  {
    name: "Burnout Cafe",
    url: "https://burnoutcafe.vercel.app",
    img: "/burnoutcafe.jpeg",
    meta: "CAFE · WEB · 2025",
    tagline: "Cafe & community space",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
        {/* Screenshot image */}
        <div
          className="relative overflow-hidden rounded-xl"
          style={{ border: "1px solid rgba(155, 80, 255, 0.18)" }}
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ aspectRatio: "16/10" }}
            loading="lazy"
          />
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.url} project={p} index={i} />
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
