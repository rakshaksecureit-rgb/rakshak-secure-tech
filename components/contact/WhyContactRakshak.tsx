"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock3,
  MapPinned,
  BrainCircuit,
  Users,
  Building2,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Government Ready",
    desc: "Solutions designed for government agencies, public safety networks and strategic infrastructure.",
  },
  {
    icon: Clock3,
    title: "24/7 Response",
    desc: "Dedicated teams supporting mission-critical deployments and operational environments.",
  },
  {
    icon: MapPinned,
    title: "Pan India Coverage",
    desc: "Supporting projects across multiple states, cities and enterprise locations.",
  },
  {
    icon: BrainCircuit,
    title: "AI Specialists",
    desc: "Experts in surveillance analytics, command systems and intelligent automation.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Project managers, deployment engineers and support professionals working together.",
  },
  {
    icon: Building2,
    title: "Enterprise Scale",
    desc: "Built for organizations requiring secure, scalable and future-ready platforms.",
  },
];

export default function WhyContactRakshak() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-20%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[90px] sm:left-[5%] sm:h-80 sm:w-80 sm:blur-[110px] md:left-[15%] md:h-[340px] md:w-[340px] md:blur-[140px] lg:left-1/4 lg:h-[400px] lg:w-[400px] lg:blur-[160px]" />

        <div className="absolute bottom-0 right-[-20%] h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] sm:right-[5%] sm:h-80 sm:w-80 sm:blur-[110px] md:right-[15%] md:h-[340px] md:w-[340px] md:blur-[140px] lg:right-1/4 lg:h-[400px] lg:w-[400px] lg:blur-[160px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.28em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            WHY CONTACT RAKSHAK
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">

            Trusted Partner For

            <span className="mt-1 block text-cyan-400">
              Mission Critical Projects
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:mt-8 md:text-lg">
            From smart city deployments to enterprise security
            ecosystems, RakshakSecure Tech delivers intelligence,
            expertise and execution capabilities at scale.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 md:mt-16 md:grid-cols-4 md:gap-6">

          {[
            ["24/7", "Support Operations"],
            ["PAN", "India Coverage"],
            ["AI", "Driven Intelligence"],
            ["100%", "Commitment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:rounded-3xl sm:p-6"
            >
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl lg:text-5xl">
                {value}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-400 sm:mt-3 sm:text-sm lg:text-base">
                {label}
              </p>
            </div>
          ))}

        </div>

        {/* Reasons */}

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:gap-7 xl:grid-cols-3 xl:gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.07] sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-8"
              >

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 sm:h-36 sm:w-36 lg:h-40 lg:w-40" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 sm:h-16 sm:w-16">

                    <Icon
                      size={28}
                      className="text-cyan-300 sm:h-7 sm:w-7"
                    />

                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight sm:mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}