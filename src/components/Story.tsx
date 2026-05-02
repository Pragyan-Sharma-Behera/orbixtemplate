import { motion } from "framer-motion";
import { Sparkles, Rocket, Compass, Layers } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Strategy", text: "We chart the trajectory before lifting a finger to design." },
  { icon: Layers, title: "Design", text: "Brand systems and interfaces engineered to feel inevitable." },
  { icon: Rocket, title: "Build", text: "Cinematic websites, fast as light and twice as sharp." },
  { icon: Sparkles, title: "Grow", text: "Optimize, iterate, compound — we stay long after launch." },
];

export function Story() {
  return (
    <section id="story" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">
              · Our Story
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
              Born from late nights and bigger questions.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              ORBIX started in 2017 as a two-person studio with a stubborn idea: that the
              websites most agencies ship are forgettable. We build the opposite — sites that
              feel like a feature film opening.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we are a small constellation of strategists, designers and engineers
              orbiting around one principle: details are the difference between a brand and a
              memory.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition">
                  <p.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
