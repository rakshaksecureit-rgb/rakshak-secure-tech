"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

export default function VehicleVisual() {
  return (
    <div className="relative h-[380px] md:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/40">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HIGHWAY LANES (slightly softer + responsive positioning feel) */}
      <div className="absolute left-0 right-0 top-[38%] md:top-[35%] h-[1px] md:h-[2px] bg-white/10" />
      <div className="absolute left-0 right-0 top-[52%] md:top-[50%] h-[1px] md:h-[2px] bg-white/10" />
      <div className="absolute left-0 right-0 top-[66%] md:top-[65%] h-[1px] md:h-[2px] bg-white/10" />

      {/* MOVING VEHICLES */}
      {[0, 1, 2].map((lane) => (
        <motion.div
          key={lane}
          animate={{ x: ["-10%", "110%"] }}
          transition={{
            duration: 5 + lane,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            top: `${38 + lane * 14}%`,
          }}
        >
          <div className="flex items-center gap-2 rounded-md md:rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2 md:px-3 py-1.5 md:py-2">
            <Car size={14} className="text-cyan-400 md:size-[16px]" />
            <span className="text-[10px] md:text-xs text-cyan-300 tracking-wide">
              MH01AB{lane + 245}
            </span>
          </div>
        </motion.div>
      ))}

      {/* TRACKING NODES (reduced density on mobile) */}
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
            left: `${12 + (i % 4) * 20}%`,
            top: `${18 + Math.floor(i / 4) * 50}%`,
          }}
        />
      ))}

      {/* CENTRAL AI ENGINE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full border border-cyan-500/30"
        >
          <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_80px_cyan]">
            <Car size={22} />
          </div>
        </motion.div>
      </div>

      {/* HUD */}
      <div className="absolute left-4 top-4 md:left-8 md:top-8 rounded-lg md:rounded-xl border border-cyan-500/20 bg-black/60 p-2 md:p-3 text-[10px] md:text-xs text-cyan-300">
        ANPR ACTIVE
      </div>

      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 rounded-lg md:rounded-xl border border-cyan-500/20 bg-black/60 p-2 md:p-3 text-[10px] md:text-xs text-cyan-300">
        LIVE TRACKING
      </div>

    </div>
  );
}