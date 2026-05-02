import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "ORBIX rebuilt our site in six weeks and our pipeline doubled the next quarter. They treat brand like physics — every detail has weight.",
    name: "Mara Cheng",
    role: "CEO, Nova Analytics",
  },
  {
    text: "The most thoughtful studio we've worked with. They sweat the millisecond, and you can feel it everywhere on the page.",
    name: "Daniel Okafor",
    role: "Head of Marketing, Lumen",
  },
  {
    text: "Beautiful, performant, and shipped on time. They made us look like the best version of ourselves.",
    name: "Isabel Rivas",
    role: "Founder, Velour Atelier",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
            · Voices in Orbit
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
            Kind words from kind humans.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-3xl p-7 flex flex-col gap-6 hover:border-primary/30 transition"
            >
              <Quote size={26} className="text-primary-glow" />
              <blockquote className="text-foreground/90 leading-relaxed text-[15px]">
                {q.text}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-white/5">
                <div className="font-medium">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].flatMap((_, j) =>
              ["NOVA", "VELOUR", "LUMEN", "SERENITY", "ATLAS", "PRISM", "ECHO", "ORBIT"].map(
                (n) => (
                  <span
                    key={`${j}-${n}`}
                    className="text-2xl md:text-4xl font-display font-semibold text-foreground/20 tracking-widest"
                  >
                    {n}
                  </span>
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
