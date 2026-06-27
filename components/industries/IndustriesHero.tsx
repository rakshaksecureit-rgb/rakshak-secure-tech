"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustriesHeroVisual from "./IndustriesHeroVisual";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:min-h-[85vh] flex items-center">

      {/* Background (UNCHANGED visually) */}
      <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* FIX: mobile stack safety */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >

            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
              INDUSTRY SOLUTIONS
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05]">

              Intelligence Solutions

              <span className="block text-cyan-400">
                For Critical
              </span>

              Industries

            </h1>

            <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-400">
              Empowering governments, enterprises and infrastructure
              operators with AI-driven surveillance, operational
              intelligence and unified command systems engineered
              for mission-critical environments.
            </p>

            {/* Tags (mobile wrap fixed) */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">

              {[
                "Defense",
                "Government",
                "Transportation",
                "Critical Infrastructure",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Stats (mobile safe grid) */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl text-center">
                <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">8+</h3>
                <p className="mt-2 text-sm text-slate-400">Industries</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl text-center">
                <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">100+</h3>
                <p className="mt-2 text-sm text-slate-400">Deployments</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl text-center">
                <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">AI</h3>
                <p className="mt-2 text-sm text-slate-400">Intelligence</p>
              </div>

            </div>

            {/* CTA (mobile fixed stacking only) */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <Link
                href="/solutions"
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black text-center hover:bg-cyan-400"
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white text-center hover:bg-white/10"
              >
                Schedule Consultation
              </Link>

            </div>

          </motion.div>

          {/* RIGHT (unchanged visually, only mobile centering fix) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <IndustriesHeroVisual />
          </motion.div>

        </div>

      </div>

    </section>
  );
}