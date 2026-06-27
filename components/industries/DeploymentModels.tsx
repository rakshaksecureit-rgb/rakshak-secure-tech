"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Server, Cloud, Cpu, Building2 } from "lucide-react";

type DeploymentModel = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
};

const deployments: DeploymentModel[] = [
  {
    icon: Building2,
    title: "Command Centers",
    subtitle: "Centralized Intelligence Operations",
    desc:
      "Unified monitoring environments integrating surveillance, analytics, alerts and operational decision support.",
  },
  {
    icon: Cpu,
    title: "Edge AI Deployments",
    subtitle: "Intelligence At The Source",
    desc:
      "AI processing directly on cameras, sensors and field devices for ultra-low latency decision making.",
  },
  {
    icon: Server,
    title: "On-Premise Infrastructure",
    subtitle: "Maximum Control & Security",
    desc:
      "Dedicated deployments within secure facilities, government networks and enterprise environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Intelligence Platform",
    subtitle: "Scalable Multi-Site Operations",
    desc:
      "Centralized intelligence platforms capable of monitoring distributed assets across regions and cities.",
  },
];

export default function DeploymentModels() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 sm:px-5 py-1.5 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-cyan-300">
            DEPLOYMENT ARCHITECTURE
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Flexible Deployment
            <span className="block text-cyan-400">
              Models For Every Environment
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-400">
            Whether operating a national command center, industrial facility,
            airport or smart city, Rakshak provides deployment models optimized
            for security, scalability and performance.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-14 sm:mt-20 lg:mt-24">

          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-cyan-400/20 to-transparent" />

          <div className="space-y-12 sm:space-y-16">

            {deployments.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 === 1;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center"
                >

                  {/* CARD */}
                  <div
                    className={`group relative overflow-hidden rounded-2xl sm:rounded-[34px]
                    border border-white/10 bg-white/5 p-6 sm:p-8
                    backdrop-blur-2xl transition-all duration-500
                    hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20
                    ${isReversed ? "lg:order-2" : ""}`}
                  >

                    {/* Glow layers */}
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* Mobile accent line */}
                    <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-400/40 to-transparent lg:hidden" />

                    <div className="relative">

                      {/* ICON */}
                      <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10">

                        {/* pulse glow */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-cyan-400/10 animate-pulse" />

                        <Icon size={24} className="text-cyan-300 relative z-10" />
                      </div>

                      <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-cyan-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 text-slate-400">
                        {item.desc}
                      </p>

                    </div>
                  </div>

                  {/* VISUAL (desktop only) */}
                  <div className="hidden lg:flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 1, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

                      <div className="relative flex h-28 w-28 xl:h-36 xl:w-36 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                        <Icon size={42} className="text-cyan-300" />
                      </div>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}