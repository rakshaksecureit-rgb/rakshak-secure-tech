"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { solutions } from "@/lib/solutions";

export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white">

      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[-20%] h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[220px]" />
        <div className="absolute right-[-20%] bottom-[-20%] h-[900px] w-[900px] rounded-full bg-blue-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:90px_90px] opacity-30" />
      </div>

      {/* HERO */}
      <section className="relative py-28 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            <Sparkles size={14} />
            SECURITY ECOSYSTEM
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Intelligence Driven
            <span className="block text-cyan-400">
              Defense Systems
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Modular AI-powered intelligence systems for surveillance, mobility,
            borders, logistics and command operations.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className="relative mx-auto max-w-7xl px-5 pb-28">
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/solutions/${item.slug}`}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_100px_rgba(0,255,255,0.10)]">

                    {/* glow effect */}
                    <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* icon */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon size={26} className="text-cyan-300" />
                    </div>

                    {/* title */}
                    <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>

                    {/* desc */}
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* features */}
                    <div className="mt-5 space-y-2 text-xs text-slate-500">
                      {item.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-7 flex items-center gap-2 text-cyan-300 font-semibold">
                      Explore System
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>

                    {/* underline */}
                    <div className="mt-5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ENTERPRISE STRIP */}
      <section className="relative mx-auto max-w-7xl px-5 pb-28">
        <div className="rounded-[34px] border border-white/10 bg-gradient-to-r from-[#071226] via-[#0B1F3D] to-[#102C58] p-10 md:p-14">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Unified Intelligence Architecture
              </h2>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Each system operates independently or integrates into a centralized
                command layer for full operational intelligence and coordination.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["99.7%", "Accuracy"],
                ["24/7", "Monitoring"],
                ["360°", "Coverage"],
                ["AI", "Decision Layer"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-cyan-400">{a}</h3>
                  <p className="text-sm text-slate-400 mt-2">{b}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}