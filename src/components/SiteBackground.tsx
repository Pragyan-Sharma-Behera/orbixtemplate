import { motion } from "framer-motion";
import silkBg from "@/assets/purple-silk-bg.jpg";

const silk = {
  animate: {
    x: [0, -70, 40, -55, 20, -40, 0],
    y: [0, 50, -35, 60, -20, 40, 0],
    scale: [1.15, 1.28, 1.18, 1.25, 1.2, 1.26, 1.15],
    rotate: [0, 3, -2, 2.5, -1.5, 2, 0],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const orb1 = {
  animate: {
    x: ["58%", "42%", "68%", "48%", "62%", "38%", "58%"],
    y: ["8%", "28%", "2%", "22%", "6%", "25%", "8%"],
    scale: [1, 1.45, 0.8, 1.3, 0.9, 1.35, 1],
    opacity: [0.45, 0.7, 0.35, 0.65, 0.4, 0.68, 0.45],
  },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
};

const orb2 = {
  animate: {
    x: ["3%", "22%", "-2%", "18%", "5%", "20%", "3%"],
    y: ["58%", "40%", "72%", "45%", "65%", "42%", "58%"],
    scale: [1, 0.7, 1.45, 0.85, 1.3, 0.75, 1],
    opacity: [0.35, 0.55, 0.28, 0.5, 0.32, 0.52, 0.35],
  },
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
};

const orb3 = {
  animate: {
    x: ["30%", "48%", "20%", "44%", "26%", "46%", "30%"],
    y: ["75%", "58%", "85%", "62%", "78%", "60%", "75%"],
    scale: [0.9, 1.4, 0.75, 1.25, 0.85, 1.35, 0.9],
    opacity: [0.25, 0.48, 0.18, 0.42, 0.22, 0.45, 0.25],
  },
  transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
};

const shimmer = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  },
  transition: { duration: 4, repeat: Infinity, ease: "linear" },
};

export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Silk texture — breathing drift */}
      <motion.div
        className="absolute inset-[-25%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${silkBg})`,
          opacity: 0.65,
          willChange: "transform",
        }}
        animate={silk.animate}
        transition={silk.transition}
      />

      {/* Flowing shimmer gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.62 0.26 300 / 0.07) 0%, transparent 40%, oklch(0.55 0.28 295 / 0.09) 70%, transparent 100%)",
          backgroundSize: "300% 300%",
          willChange: "background-position",
        }}
        animate={shimmer.animate}
        transition={shimmer.transition}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/55 to-background" />

      {/* Glow orb 1 — top right */}
      <motion.div
        className="absolute h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.26 300 / 0.7), transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={orb1.animate}
        transition={orb1.transition}
      />

      {/* Glow orb 2 — bottom left */}
      <motion.div
        className="absolute h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.28 295 / 0.65), transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={orb2.animate}
        transition={orb2.transition}
      />

      {/* Glow orb 3 — bottom center, accent */}
      <motion.div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.22 315 / 0.5), transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={orb3.animate}
        transition={orb3.transition}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
