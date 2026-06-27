"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- LIVE COUNTER ---------------- */
function useCounter(base: number, speed = 120) {
  const [val, setVal] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setVal((v) => v + Math.random() * 0.3);
    }, speed);

    return () => clearInterval(id);
  }, [speed]);

  return val;
}

const leftFeatures = [
  "Facial Recognition",
  "Crowd Analytics",
  "Behavior Analysis",
];

const rightFeatures = [
  "Threat Intelligence",
  "Command Center Sync",
  "Edge AI Processing",
];

export default function AICore() {
  const intelligence = useCounter(97.4, 600);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-[#050A12] text-white">

      {/* BACKGROUND ENERGY LAYER */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 bg-cyan-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-300 tracking-[0.3em]">
            NEURAL INTELLIGENCE CORE
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl font-bold">
            Living AI Decision Engine
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
            A continuously evolving neural system processing surveillance,
            threats, behavior patterns and predictive intelligence in real time.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-14 sm:mt-20 lg:mt-24 grid items-center gap-10 lg:grid-cols-3">

          {/* LEFT FEATURES */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {leftFeatures.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="h-1 w-0 group-hover:w-12 transition-all duration-500 bg-cyan-400 mb-2" />
                <h3 className="text-cyan-300 font-semibold text-sm sm:text-base">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* CENTER CORE */}
          <div className="relative flex h-[320px] sm:h-[420px] lg:h-[480px] items-center justify-center order-1 lg:order-2">

            {/* ORBIT LAYERS */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute h-[240px] sm:h-[300px] lg:h-[360px] w-[240px] sm:w-[300px] lg:w-[360px] rounded-full border border-cyan-500/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
              className="absolute h-[170px] sm:h-[220px] lg:h-[260px] w-[170px] sm:w-[220px] lg:w-[260px] rounded-full border border-blue-500/20"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute h-[120px] sm:h-[160px] lg:h-[180px] w-[120px] sm:w-[160px] lg:w-[180px] rounded-full border border-cyan-300/20"
            />

            {/* CORE NODE */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="relative flex h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#005BAC] via-cyan-500 to-blue-500 shadow-[0_0_90px_rgba(0,200,255,0.6)]"
            >
              <div className="text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                  AI CORE
                </h3>

                <p className="text-[10px] sm:text-xs tracking-[2px] text-cyan-100 mt-2">
                  ACTIVE NEURAL SYSTEM
                </p>

                <div className="mt-2 text-cyan-200 text-xs sm:text-sm font-bold">
                  {intelligence.toFixed(1)}% INTELLIGENCE
                </div>
              </div>
            </motion.div>

            {/* PULSE RINGS */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute h-28 w-28 sm:h-36 sm:w-36 rounded-full border border-cyan-400/30"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-4 sm:space-y-6 order-3">
            {rightFeatures.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="h-1 w-0 group-hover:w-12 transition-all duration-500 bg-cyan-400 mb-2" />
                <h3 className="text-cyan-300 font-semibold text-sm sm:text-base">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}