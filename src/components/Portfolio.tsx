import { motion } from "framer-motion";

const portfolioProjects = [
  {
    img: "/sagarikasilchar.jpeg",
    url: "https://sagarika-silchar.vercel.app",
    alt: "Sagarika Silchar",
  },
  {
    img: "/orbix mockup.jpeg",
    url: "https://orbix-neon.vercel.app",
    alt: "Orbix",
  },
  {
    img: "/burnout mockup.jpeg",
    url: "https://burnoutcafe.vercel.app",
    alt: "Burnout Cafe",
  },
];

const conceptProjects = [
  {
    img: "/denta flow mockup.jpeg",
    url: "https://denta-flow-swart.vercel.app",
    alt: "Denta Flow",
  },
  {
    img: "/dusribiwi.jpeg",
    url: "https://dusribiwicafe.vercel.app",
    alt: "Dusri Biwi",
  },
  {
    img: "/taraknath mockup.jpeg",
    url: "https://taraknath-bakery-reborn.app",
    alt: "Taraknath",
  },
];

function ImageCard({
  img,
  url,
  alt,
  index,
}: {
  img: string;
  url: string;
  alt: string;
  index: number;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
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
      <img
        src={img}
        alt={alt}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </motion.a>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Portfolio */}
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
        </motion.div>

        <div className="flex flex-col gap-6">
          {portfolioProjects.map((p, i) => (
            <ImageCard key={p.url} {...p} index={i} />
          ))}
        </div>

        {/* Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mt-28 mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
            · Concepts
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
            Concepts & Experiments.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {conceptProjects.map((p, i) => (
            <ImageCard key={p.url} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
