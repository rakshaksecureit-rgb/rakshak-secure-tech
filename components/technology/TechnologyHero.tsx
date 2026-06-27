"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

export default function TechnologyHeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#050A16] text-white">

      {/* SUBTLE GRID */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* DEPTH GLOWS */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-300">
              <Cpu size={16} />
              AI Intelligence Layer
            </div>

            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Data
              <br />
              <span className="text-cyan-400">Neural Core</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed">
              Multi-layer AI architecture transforming surveillance,
              sensors, drones and live intelligence into a unified
              decision ecosystem.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="group flex items-center justify-center gap-2 rounded-xl bg-[#005BAC] px-6 sm:px-7 py-3 sm:py-4 font-semibold transition hover:scale-[1.03] active:scale-95">
                Explore Layer
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-xl border border-white/10 px-6 sm:px-7 py-3 sm:py-4 hover:bg-white/5 transition">
                Documentation
              </button>

            </div>

            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <span>✓ Neural Processing</span>
              <span>✓ Data Fusion</span>
              <span>✓ Live Intelligence</span>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">

            {/* ENERGY CORE GLOW BASE */}
            <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/5 blur-3xl" />

            {/* CENTRAL SPINE */}
            <motion.div
              animate={{ scaleY: [1, 1.08, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute w-[2px] h-[320px] sm:h-[380px] lg:h-[420px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70"
            />

            {/* FLOATING NODES (smoother orbit feel) */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.8 + i * 0.2,
                  repeat: Infinity,
                }}
                className="absolute h-2.5 w-2.5 rotate-45 bg-cyan-400 shadow-[0_0_20px_cyan]"
                style={{
                  top: `${18 + i * 11}%`,
                  left: i % 2 === 0 ? "32%" : "68%",
                }}
              />
            ))}

            {/* CONNECTION LINES (cleaner + softer) */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <motion.path
                d="M80,120 C200,60 320,180 420,120"
                stroke="cyan"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.path
                d="M90,320 C220,220 320,360 420,280"
                stroke="cyan"
                strokeWidth="1"
                fill="none"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 5.5, repeat: Infinity }}
              />
            </svg>

            {/* CORE NODE (premium depth) */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005BAC] via-cyan-500 to-blue-500 shadow-[0_0_120px_rgba(0,200,255,0.55)]"
            >
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold tracking-tight">
                  AI MATRIX
                </div>
                <div className="text-[10px] sm:text-xs tracking-[3px] text-cyan-100 mt-2">
                  PROCESSING LAYER
                </div>
              </div>
            </motion.div>

            {/* FLOATING LABELS (desktop only, cleaner UX) */}
            <motion.div className="hidden sm:block absolute left-2 top-20 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Vision Engine
            </motion.div>

            <motion.div className="hidden sm:block absolute right-2 top-28 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Threat Layer
            </motion.div>

            <motion.div className="hidden sm:block absolute bottom-20 left-10 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Data Fusion
            </motion.div>

            <motion.div className="hidden sm:block absolute bottom-16 right-10 text-xs px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur">
              Response AI
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}