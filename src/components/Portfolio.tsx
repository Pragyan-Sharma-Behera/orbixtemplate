import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const work = [
  { img: p1, title: "Nova Analytics", tag: "SaaS · Web", year: "2025" },
  { img: p2, title: "Velour Atelier", tag: "Fashion · Ecommerce", year: "2025" },
  { img: p3, title: "Serenity Studio", tag: "Brand · Identity", year: "2024" },
  { img: p4, title: "Lumen Finance", tag: "Fintech · Mobile", year: "2024" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
              · Selected Work
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
              Work that hums after you close the tab.
            </h2>
          </motion.div>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition flex items-center gap-1"
          >
            Start a project <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass aspect-[4/3]"
            >
              <img
                src={w.img}
                alt={w.title}
                width={1024}
                height={768}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary-glow mb-2">
                      {w.tag} · {w.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold">{w.title}</h3>
                  </div>
                  <div className="h-11 w-11 rounded-full glass-strong flex items-center justify-center group-hover:bg-gradient-primary group-hover:rotate-45 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
