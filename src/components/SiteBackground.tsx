import { motion } from "framer-motion";
import silkBg from "@/assets/purple-silk-bg.jpg";

const silk = {
  animate: {
    x: [0, -40, 20, -30, 0],
    y: [0, 30, -20, 35, 0],
    scale: [1.15, 1.22, 1.17, 1.2, 1.15],
    rotate: [0, 1.5, -1, 1, 0],
  },
  transition: {
    duration: 28,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const orb1 = {
  animate: {
    x: ["58%", "50%", "65%", "55%", "58%"],
    y: ["8%", "22%", "4%", "18%", "8%"],
    scale: [1, 1.25, 0.9, 1.15, 1],
    opacity: [0.38, 0.55, 0.35, 0.5, 0.38],
  },
  transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
};

const orb2 = {
  animate: {
    x: ["3%", "16%", "1%", "12%", "3%"],
    y: ["58%", "46%", "68%", "52%", "58%"],
    scale: [1, 0.8, 1.3, 0.95, 1],
    opacity: [0.28, 0.42, 0.25, 0.38, 0.28],
  },
  transition: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 },
};

const orb3 = {
  animate: {
    x: ["30%", "40%", "25%", "38%", "30%"],
    y: ["75%", "65%", "80%", "70%", "75%"],
    scale: [0.9, 1.2, 0.85, 1.1, 0.9],
    opacity: [0.2, 0.35, 0.18, 0.3, 0.2],
  },
  transition: { duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 },
};

const shimmer = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  },
  transition: { duration: 12, repeat: Infinity, ease: "linear" },
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
        className="absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.26 300 / 0.7), transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={orb1.animate}
        transition={orb1.transition}
      />

      {/* Glow orb 2 — bottom left */}
      <motion.div
        className="absolute h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.28 295 / 0.65), transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={orb2.animate}
        transition={orb2.transition}
      />

      {/* Glow orb 3 — bottom center, accent */}
      <motion.div
        className="absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
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
