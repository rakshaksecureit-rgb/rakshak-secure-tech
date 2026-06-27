"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  Plane,
  Ship,
  Train,
  Factory,
  RadioTower,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government & Smart Cities",
    badge: "SMART CITY READY",
    desc: "Integrated command centers, public safety infrastructure and city-wide intelligence platforms.",
  },
  {
    icon: Shield,
    title: "Defense & Homeland Security",
    badge: "MISSION CRITICAL",
    desc: "Border monitoring, threat detection and strategic security operations.",
  },
  {
    icon: Plane,
    title: "Airports & Aviation",
    badge: "HIGH SECURITY",
    desc: "Passenger analytics, biometric verification and access control systems.",
  },
  {
    icon: Ship,
    title: "Ports & Logistics",
    badge: "CARGO SECURITY",
    desc: "Cargo inspection, vehicle intelligence and logistics surveillance.",
  },
  {
    icon: Train,
    title: "Railways & Transportation",
    badge: "PUBLIC SAFETY",
    desc: "Passenger security, operational monitoring and transportation analytics.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    badge: "ASSET PROTECTION",
    desc: "Perimeter security, workforce monitoring and facility intelligence.",
  },
  {
    icon: RadioTower,
    title: "Critical Infrastructure",
    badge: "24/7 MONITORING",
    desc: "Power plants, telecom networks and strategic national assets.",
  },
  {
    icon: Building2,
    title: "Enterprise Security",
    badge: "ENTERPRISE GRADE",
    desc: "Corporate campuses, financial institutions and large facilities.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Engineered For
            <span className="block text-cyan-400">
              Mission Critical Sectors
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-400">
            RakshakSecure Tech delivers intelligent security ecosystems
            across governments, defense organizations, transportation
            networks, enterprises and critical infrastructure.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 sm:mt-20 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07]"
              >

                {/* GLOW */}
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* BADGE */}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[9px] sm:text-[10px] tracking-[2px] text-cyan-300">
                    {item.badge}
                  </span>
                </div>

                <div className="relative">

                  {/* ICON */}
                  <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon size={24} className="sm:size-7 text-cyan-300" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
                    {item.desc}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-6 sm:mt-8 flex items-center justify-between">

                    <span className="text-[10px] sm:text-xs tracking-[2px] text-slate-500">
                      INDUSTRY SOLUTION
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                  {/* UNDERLINE EFFECT */}
                  <div className="mt-4 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATS STRIP */}
        <div className="mt-14 sm:mt-16 rounded-2xl sm:rounded-[32px] border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-6 sm:p-8">

          <div className="grid gap-8 text-center sm:grid-cols-3">

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">8+</h3>
              <p className="mt-2 text-sm text-slate-400">Industry Verticals</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">AI</h3>
              <p className="mt-2 text-sm text-slate-400">Unified Intelligence Layer</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-2 text-sm text-slate-400">Operational Readiness</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}