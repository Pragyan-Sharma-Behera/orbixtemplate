import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import orb from "@/assets/purple-orb.png";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Floating 3D orbs */}
      <motion.img
        src={orb}
        alt=""
        aria-hidden
        className="absolute left-[5%] top-[20%] w-48 md:w-72 opacity-80 animate-float pointer-events-none"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y + scrollY * 0.2}px)`,
          filter: "drop-shadow(0 0 60px oklch(0.62 0.26 300 / 0.6))",
        }}
      />
      <motion.img
        src={orb}
        alt=""
        aria-hidden
        className="absolute right-[3%] top-[55%] w-40 md:w-64 opacity-70 animate-float pointer-events-none"
        style={{
          transform: `translate(${-mouse.x}px, ${-mouse.y + scrollY * 0.15}px)`,
          animationDelay: "2s",
          filter: "drop-shadow(0 0 60px oklch(0.62 0.26 300 / 0.6))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-foreground/70 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
          A studio for brands that need to convert
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-display font-semibold leading-[0.95] tracking-tight"
        >
          <span className="text-gradient">Websites that turn</span>
          <br />
          <span className="text-gradient">visitors into customers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          ORBIX designs and builds high-performing websites for ambitious businesses — from
          local brands to funded startups. Fast, custom, conversion-focused. Launched in 14 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-0.5"
          >
            See our work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all"
          >
            <Calendar size={16} />
            Book a free call
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 grid grid-cols-3 gap-px rounded-2xl glass overflow-hidden max-w-3xl mx-auto"
        >
          {[
            { k: "120+", v: "Businesses outreached" },
            { k: "14 days", v: "Average launch time" },
            { k: "100%", v: "Custom-coded, no templates" },
          ].map((s) => (
            <div key={s.v} className="p-6 bg-background/20">
              <div className="text-2xl md:text-3xl font-display font-semibold text-gradient">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
