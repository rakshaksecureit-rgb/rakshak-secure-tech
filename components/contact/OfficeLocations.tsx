"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Globe2,
  RadioTower,
  ArrowUpRight,
} from "lucide-react";

const locations = [
  {
    icon: Building2,
    title: "Corporate Headquarters",
    city: "New Delhi NCR",
    description:
      "Strategic leadership, government liaisoning, project management and national operations.",
    tag: "HQ",
  },
  {
    icon: RadioTower,
    title: "Operations & Support",
    city: "Pan India Network",
    description:
      "Technical deployment teams, surveillance integration specialists and support operations.",
    tag: "24/7",
  },
  {
    icon: Globe2,
    title: "Project Coverage",
    city: "Nationwide",
    description:
      "Supporting Smart Cities, Defense Installations, Critical Infrastructure and Enterprise Security.",
    tag: "ACTIVE",
  },
];

export default function OfficeLocations() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-35%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[90px] sm:left-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:left-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:left-[-10%] lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

        <div className="absolute bottom-0 right-[-35%] h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] sm:right-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:right-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:right-[-10%] lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.28em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            LOCATIONS & OPERATIONS
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">

            National Presence

            <span className="mt-1 block text-cyan-400">
              Strategic Reach
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:mt-8 md:text-lg">
            RakshakSecure Tech supports government,
            defense, transportation and enterprise
            deployments through a growing national
            operations network.
          </p>

        </div>

        {/* Main Section */}

        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-10">

          {/* Left Big Command Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:rounded-[34px] md:p-8 lg:rounded-[40px] lg:p-10"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

            <div className="relative">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 sm:h-16 sm:w-16">

                  <MapPin
                    size={28}
                    className="text-cyan-300 sm:h-[30px] sm:w-[30px]"
                  />

                </div>

                <div>

                  <p className="text-[10px] tracking-[3px] text-cyan-400 sm:text-xs sm:tracking-[4px]">
                    COMMAND CENTER
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                    National Operations Hub
                  </h3>

                </div>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-6">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <h4 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                    24/7
                  </h4>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    Monitoring Support
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <h4 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                    PAN
                  </h4>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    India Coverage
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6 sm:col-span-2 md:col-span-1">
                  <h4 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                    AI
                  </h4>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    Driven Operations
                  </p>
                </div>

              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/10 bg-black/20 p-5 sm:mt-10 sm:rounded-3xl sm:p-6 md:p-8">

                <p className="text-[10px] tracking-[3px] text-cyan-400 sm:text-xs sm:tracking-[4px]">
                  DEPLOYMENT READINESS
                </p>

                <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10 sm:mt-6 sm:h-3">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-400 sm:text-sm">

                  <span>Operational Capacity</span>

                  <span>92%</span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Cards */}

          <div className="space-y-5 sm:space-y-6">

            {locations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07] sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-7"
                >

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 sm:h-32 sm:w-32" />

                  <div className="relative">

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 sm:h-14 sm:w-14">

                        <Icon
                          size={22}
                          className="text-cyan-300 sm:h-6 sm:w-6"
                        />

                      </div>

                      <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] text-cyan-300 sm:text-xs">
                        {item.tag}
                      </span>

                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-tight sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-cyan-400 sm:text-base">
                      {item.city}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                      {item.description}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="mt-5 text-cyan-300 sm:mt-6"
                    />

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