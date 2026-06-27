"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Factory,
  Radar,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Security Intelligence",
    desc: "AI-driven surveillance and threat intelligence platforms engineered for mission-critical operations.",
  },
  {
    icon: Building2,
    title: "Government Solutions",
    desc: "Smart city monitoring, command centers and public safety ecosystems.",
  },
  {
    icon: Factory,
    title: "Infrastructure Protection",
    desc: "Protection for strategic assets, industrial facilities and critical infrastructure.",
  },
  {
    icon: Radar,
    title: "Operational Awareness",
    desc: "Real-time visibility through centralized intelligence platforms.",
  },
];

export default function IndustriesOverview() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
              INDUSTRY EXPERTISE
            </span>

            <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Built For
              <span className="block text-cyan-400">
                High-Stakes
              </span>
              Environments
            </h2>

            <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-400">
              RakshakSecure Tech delivers AI-powered intelligence ecosystems for organizations where security,
              operational continuity and situational awareness are non-negotiable.
            </p>

            {/* TAGS */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">

              {[
                "Defense",
                "Government",
                "Transportation",
                "Critical Infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[36px] border border-cyan-500/20 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

            <div className="relative">

              <div className="flex items-start sm:items-center justify-between gap-4">

                <div>
                  <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[4px] text-cyan-400">
                    DEPLOYMENT NETWORK
                  </p>

                  <h3 className="mt-2 text-xl sm:text-3xl font-bold">
                    Pan India Operations
                  </h3>
                </div>

                <ArrowUpRight className="text-cyan-300 shrink-0" size={24} />

              </div>

              <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">

                {[
                  ["Government", "98% Active Coverage"],
                  ["Defense", "Realtime Monitoring"],
                  ["Transportation", "24/7 Intelligence"],
                  ["Infrastructure", "Critical Protection"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-xl sm:rounded-2xl border border-white/10 bg-black/20 px-4 sm:px-5 py-3 sm:py-4"
                  >
                    <span className="text-sm sm:text-base">{title}</span>
                    <span className="text-xs sm:text-sm text-cyan-300">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-16 sm:mt-20 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["08+", "Industries"],
            ["100+", "Deployments"],
            ["24/7", "Monitoring"],
            ["AI", "Intelligence"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="group relative rounded-2xl sm:rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-cyan-500/10 blur-2xl rounded-full" />
              </div>

              <h3 className="relative text-3xl sm:text-5xl font-bold text-cyan-400">
                {value}
              </h3>

              <p className="relative mt-2 sm:mt-3 text-sm sm:text-base text-slate-400">
                {label}
              </p>

            </div>
          ))}

        </div>

        {/* PILLARS */}
        <div className="mt-20 sm:mt-24">

          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Core Industry Capabilities
            </h3>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">

            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
                >

                  <div className="absolute right-4 top-4 text-5xl sm:text-6xl font-bold text-white/5">
                    0{index + 1}
                  </div>

                  <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                    <Icon size={24} className="sm:size-7 text-cyan-300" />

                  </div>

                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}