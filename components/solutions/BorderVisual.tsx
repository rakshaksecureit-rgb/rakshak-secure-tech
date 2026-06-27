"use client";

import { motion } from "framer-motion";
import { Radar } from "lucide-react";

export default function BorderVisual() {
  return (
    <div className="relative h-[380px] md:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/40">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* RADAR RINGS (responsive sizing) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[240px] w-[240px] md:h-[380px] md:w-[380px] rounded-full border border-cyan-500/10" />
        <div className="absolute h-[180px] w-[180px] md:h-[280px] md:w-[280px] rounded-full border border-cyan-500/10" />
        <div className="absolute h-[120px] w-[120px] md:h-[180px] md:w-[180px] rounded-full border border-cyan-500/10" />
      </div>

      {/* RADAR SWEEP */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute h-[240px] w-[240px] md:h-[380px] md:w-[380px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[120px] md:h-[190px] w-[2px] origin-bottom -translate-x-1/2 -translate-y-full bg-gradient-to-t from-cyan-400 to-transparent" />
        </motion.div>
      </div>

      {/* THREAT NODES (scaled for mobile) */}
      {[
        { top: "25%", left: "25%" },
        { top: "30%", left: "70%" },
        { top: "65%", left: "20%" },
        { top: "72%", left: "78%" },
        { top: "48%", left: "82%" },
      ].map((node, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          className="absolute"
          style={node}
        >
          <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500 shadow-[0_0_12px_red]" />
        </motion.div>
      ))}

      {/* SENSOR NODES (slightly reduced density feel) */}
      {[
        { top: "18%", left: "50%" },
        { top: "50%", left: "15%" },
        { top: "50%", left: "85%" },
        { top: "82%", left: "50%" },
      ].map((node, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          className="absolute"
          style={node}
        >
          <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_cyan]" />
        </motion.div>
      ))}

      {/* CONNECTION LINES (lighter on mobile) */}
      <svg className="absolute inset-0 h-full w-full opacity-10 md:opacity-20">
        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="cyan" />
        <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="cyan" />
        <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="cyan" />
        <line x1="50%" y1="50%" x2="78%" y2="72%" stroke="cyan" />
      </svg>

      {/* CORE */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_80px_cyan]"
        >
          <Radar size={26} />
        </motion.div>
      </div>

      {/* HUD (hidden clutter on mobile) */}
      <div className="hidden md:block absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        BORDER GRID ACTIVE
      </div>

      <div className="hidden md:block absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        THREATS DETECTED: 05
      </div>

      <div className="hidden md:block absolute bottom-6 left-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        SATELLITE LINK ONLINE
      </div>

      <div className="hidden md:block absolute bottom-6 right-6 rounded-xl border border-cyan-500/20 bg-black/60 p-3 text-xs text-cyan-300">
        RESPONSE READY
      </div>

    </div>
  );
}