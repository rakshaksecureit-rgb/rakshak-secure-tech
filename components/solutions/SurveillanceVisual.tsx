"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function SurveillanceVisual() {
  return (
    <div className="relative h-[380px] md:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/40">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CAMERA GRID (reduced on mobile) */}
      <div className="absolute inset-4 md:inset-6 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg md:rounded-xl border border-cyan-500/10 bg-black/60"
          >

            {/* noise layer */}
            <motion.div
              animate={{ opacity: [0.12, 0.25, 0.12] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="absolute inset-0 bg-cyan-500/5"
            />

            {/* detection box (smaller on mobile) */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute left-[30%] top-[30%] h-6 w-6 md:h-10 md:w-10 border border-cyan-400"
            />

            {/* scan line (slower + smoother) */}
            <motion.div
              animate={{ y: ["0%", "400%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-[2px] bg-cyan-400/60"
            />
          </div>
        ))}
      </div>

      {/* CENTER CORE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full border border-cyan-500/20"
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_80px_cyan]">
            <Eye size={24} />
          </div>
        </motion.div>
      </div>

      {/* AI NODES (reduced density on mobile) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.6, 1], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyan-400"
          style={{
            left: `${15 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 55}%`,
          }}
        />
      ))}

      {/* ALERTS (hidden clutter control on mobile) */}
      {[
        { top: "18%", right: "14%" },
        { top: "68%", right: "20%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden md:block absolute rounded-lg border border-red-500 bg-red-500/10 px-2 py-1 text-[10px] text-red-400"
          style={pos}
        >
          ALERT
        </motion.div>
      ))}

      {/* HUD (clean mobile behavior) */}
      <div className="absolute left-4 top-4 md:left-6 md:top-6 rounded-lg md:rounded-xl border border-cyan-500/20 bg-black/60 p-2 md:p-3 text-[10px] md:text-xs text-cyan-300">
        VIDEO ANALYTICS ACTIVE
      </div>

      <div className="absolute right-4 top-4 md:right-6 md:top-6 rounded-lg md:rounded-xl border border-cyan-500/20 bg-black/60 p-2 md:p-3 text-[10px] md:text-xs text-cyan-300">
        48 CAMERAS ONLINE
      </div>

      <div className="hidden md:block absolute left-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        BEHAVIOR AI RUNNING
      </div>

      <div className="hidden md:block absolute right-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        LIVE THREAT DETECTION
      </div>

    </div>
  );
}