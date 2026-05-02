import { motion } from "framer-motion";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  { img: t1, name: "Liam Cole", role: "Creative Director" },
  { img: t2, name: "Sofia Lin", role: "Lead Designer" },
  { img: t3, name: "Noah Park", role: "Engineering Lead" },
  { img: t4, name: "Ava Reyes", role: "Brand Strategist" },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-widest text-primary-glow mb-6">· The Crew</div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight text-gradient">
            A small team. A long list of believers.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass aspect-[3/4]"
            >
              <img
                src={m.img}
                alt={m.name}
                width={768}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-base md:text-lg font-display font-semibold">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
