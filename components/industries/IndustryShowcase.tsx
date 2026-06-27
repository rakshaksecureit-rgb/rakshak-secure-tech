"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  Plane,
  Factory,
} from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    subtitle: "Citizen Safety • Command Centers • Urban Intelligence",
    points: [
      "Integrated Command & Control Centers",
      "City Surveillance Networks",
      "Traffic Intelligence Systems",
      "Public Safety Monitoring",
    ],
    stat: "24/7",
  },
  {
    icon: Shield,
    title: "Defense & Homeland Security",
    subtitle: "Border Intelligence • Threat Detection • Surveillance",
    points: [
      "Perimeter Protection Systems",
      "Border Monitoring",
      "Threat Intelligence Analytics",
      "Mission Critical Surveillance",
    ],
    stat: "AI",
  },
  {
    icon: Plane,
    title: "Airports & Transportation",
    subtitle: "Passenger Security • Operations • Monitoring",
    points: [
      "Facial Recognition Systems",
      "Access Control Intelligence",
      "Passenger Flow Analytics",
      "Operational Monitoring",
    ],
    stat: "99%",
  },
  {
    icon: Factory,
    title: "Critical Infrastructure",
    subtitle: "Power • Telecom • Industrial Facilities",
    points: [
      "Facility Protection",
      "Asset Monitoring",
      "Intrusion Detection",
      "Unified Operations Center",
    ],
    stat: "PAN",
  },
];

export default function IndustryShowcase() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
            INDUSTRY SHOWCASE
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Built For
            <span className="block text-cyan-400">
              Mission Critical Sectors
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-400">
            Every industry faces unique operational challenges.
            RakshakSecure Tech delivers specialized intelligence
            ecosystems engineered around those requirements.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 sm:mt-20 space-y-10 sm:space-y-14">

          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >

                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px]" />
                  <div className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-[100px]" />
                </div>

                <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

                  {/* LEFT CONTENT */}
                  <div className="p-6 sm:p-10 lg:p-14">

                    <div className="flex items-start gap-4 sm:gap-5">

                      {/* ICON */}
                      <div className="relative flex h-14 sm:h-20 w-14 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl border border-cyan-500/20 bg-cyan-500/10">

                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <Icon size={30} className="sm:size-[34px] text-cyan-300 relative z-10" />

                      </div>

                      {/* TEXT */}
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold leading-tight">
                          {sector.title}
                        </h3>

                        <p className="mt-2 text-sm sm:text-base text-cyan-400">
                          {sector.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* POINTS */}
                    <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-2">

                      {sector.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/20 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-slate-300 transition hover:border-cyan-500/20"
                        >
                          {point}
                        </div>
                      ))}

                    </div>

                  </div>

                  {/* RIGHT VISUAL */}
                  <div className="relative flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 min-h-[220px] sm:min-h-[300px]">

                    {/* GRID BACKDROP */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* STAT CORE */}
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-36 sm:h-52 w-36 sm:w-52 items-center justify-center rounded-full border border-cyan-500/20"
                    >

                      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

                      <span className="text-4xl sm:text-6xl font-bold text-cyan-400 tracking-tight">
                        {sector.stat}
                      </span>

                    </motion.div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}