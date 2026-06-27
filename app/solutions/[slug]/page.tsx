"use client";

import { notFound, useParams } from "next/navigation";
import { solutions } from "@/lib/solutions";
import { visualRegistry } from "@/lib/visualRegistry";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SolutionSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return notFound();

  const Visual = visualRegistry[solution.slug]?.component;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">

      {/* ENERGY BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-15%] top-[-15%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[200px] animate-pulse" />
        <div className="absolute right-[-15%] bottom-[-15%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[200px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* BACK BUTTON */}
      <div className="relative z-10 px-6 pt-6">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
            <solution.icon size={34} className="text-cyan-300" />
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            {solution.heroTitle}
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            {solution.heroSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {solution.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🔥 LIVE SYSTEM VISUAL (MAIN WOW BLOCK) */}
      <section className="relative z-10 mt-14 flex justify-center px-6">
        <div className="w-full max-w-6xl h-[520px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          {Visual && <Visual />}
        </div>
      </section>

      {/* PIPELINE (ANIMATED FLOW) */}
      <section className="relative z-10 mt-16 px-6">
        <h2 className="text-center text-xl font-bold text-cyan-300">
          LIVE PROCESS FLOW
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {solution.pipeline.map((step, i) => (
            <motion.div
              key={step}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="flex items-center gap-3"
            >
              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                {step}
              </div>

              {i !== solution.pipeline.length - 1 && (
                <div className="h-[2px] w-10 bg-cyan-500/30" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mt-20 grid grid-cols-3 gap-4 px-6 text-center">
        {Object.entries(solution.stats).map(([key, value]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-xs uppercase text-slate-400">{key}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-300">
              {value}
            </p>
          </motion.div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mt-20 px-6">
        <h2 className="text-center text-2xl font-bold">
          Core Intelligence Modules
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
          {solution.features.map((f) => (
            <motion.div
              key={f}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <p className="mt-4 text-slate-300">{f}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="relative z-10 mt-20 px-6 pb-24">
        <h2 className="text-center text-2xl font-bold text-cyan-300">
          SYSTEM ARCHITECTURE
        </h2>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {solution.layers.map((layer) => (
            <div
              key={layer}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-300"
            >
              {layer}
            </div>
          ))}
        </div>

        {/* DEPLOYMENTS */}
        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {solution.deployments.map((d) => (
            <span
              key={d}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {d}
            </span>
          ))}
        </div>

        {/* BENEFITS */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-2">
          {solution.benefits.map((b) => (
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-cyan-200">
              {b}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}