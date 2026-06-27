"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  slug: string;
};

export default function SolutionVisualCard({ slug }: Props) {
  const mode = useMemo(() => {
    switch (slug) {
      case "facial-recognition":
        return "FACE_SCAN";
      case "vehicle-intelligence":
        return "ANPR_TRACK";
      case "border-intelligence":
        return "RADAR_DEFENSE";
      case "cargo-security":
        return "X_RAY_SCAN";
      case "smart-surveillance":
        return "VIDEO_AI";
      case "command-center":
        return "OPS_GRID";
      default:
        return "GENERIC";
    }
  }, [slug]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ================= FACE SCAN MODE ================= */}
      {mode === "FACE_SCAN" && (
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Face Frame */}
          <div className="relative h-40 w-32 border border-cyan-400/40">
            
            {/* Scan Beam */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1 bg-cyan-400 shadow-[0_0_25px_cyan]"
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Detection Box */}
            <motion.div
              className="absolute left-6 top-10 h-10 w-10 border border-cyan-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* Pulse Nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cyan-400"
              style={{
                top: `${20 + i * 8}%`,
                left: `${15 + (i % 4) * 20}%`,
              }}
              animate={{ scale: [1, 2, 1], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      )}

      {/* ================= VEHICLE MODE ================= */}
      {mode === "ANPR_TRACK" && (
        <div className="absolute inset-0">
          
          {/* Lanes */}
          <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-white/10" />
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />

          {/* Moving Car */}
          <motion.div
            className="absolute top-1/3 flex items-center gap-2 rounded bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🚗 MH12-AX-9921
          </motion.div>

          {/* Scan Flash */}
          <motion.div
            className="absolute top-1/3 h-10 w-1 bg-cyan-400 shadow-[0_0_20px_cyan]"
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      )}

      {/* ================= RADAR MODE ================= */}
      {mode === "RADAR_DEFENSE" && (
        <div className="absolute inset-0 flex items-center justify-center">
          
          <motion.div
            className="h-[280px] w-[280px] rounded-full border border-cyan-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-0 h-[140px] w-[2px] origin-bottom bg-gradient-to-t from-cyan-400 to-transparent" />
          </motion.div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-red-500"
              style={{ top: `${20 + i * 10}%`, left: `${30 + i * 8}%` }}
              animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      )}

      {/* ================= CORE LABEL ================= */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-cyan-300">
        LIVE SYSTEM MODE: {mode}
      </div>
    </div>
  );
}