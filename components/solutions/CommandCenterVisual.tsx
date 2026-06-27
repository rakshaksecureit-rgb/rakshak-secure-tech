"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Activity,
  Shield,
  Radar,
} from "lucide-react";

export default function CommandCenterVisual() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">

      {/* ENERGY FIELD BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)]" />

      {/* GRID DEPTH */}
      <div className="absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />

      {/* SCAN WAVE */}
      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[120px] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent blur-sm"
      />

      {/* CENTER CORE SYSTEM */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* OUTER RINGS */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute h-[260px] w-[260px] rounded-full border border-cyan-500/10"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute h-[180px] w-[180px] rounded-full border border-cyan-500/20"
        />

        {/* CORE NODE */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 40px rgba(0,255,255,0.3)",
              "0 0 120px rgba(0,255,255,0.6)",
              "0 0 40px rgba(0,255,255,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600"
        >
          <MonitorSmartphone size={34} />

          {/* INNER PULSE */}
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-cyan-400"
          />
        </motion.div>
      </div>

      {/* NODE SYSTEM (SMART POSITIONS) */}
      {[
        { top: "18%", left: "20%", icon: Shield, color: "cyan" },
        { top: "18%", right: "20%", icon: Radar, color: "cyan" },
        { bottom: "18%", left: "20%", icon: Activity, color: "blue" },
        { bottom: "18%", right: "20%", icon: Shield, color: "cyan" },
      ].map((node, i) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -6, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
            className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 backdrop-blur"
            style={node}
          >
            <Icon size={22} />
          </motion.div>
        );
      })}

      {/* CONNECTION NETWORK */}
      <svg className="absolute inset-0 h-full w-full opacity-30">
        {[
          ["50%", "50%", "20%", "18%"],
          ["50%", "50%", "80%", "18%"],
          ["50%", "50%", "20%", "82%"],
          ["50%", "50%", "80%", "82%"],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="cyan"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>

      {/* DATA STREAMS (MORE LIFE) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["100%", "-100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i * 0.1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-[2px] h-16 bg-cyan-400/30 blur-[1px]"
          style={{ left: `${8 + i * 7}%` }}
        />
      ))}

      {/* STATUS HUD (UPGRADED VISUAL FEEL) */}
      <div className="absolute left-6 top-6 rounded-xl border border-cyan-500/20 bg-black/50 p-4 backdrop-blur">
        <p className="text-[10px] text-slate-400">ACTIVE NODES</p>
        <p className="text-xl font-bold text-cyan-300">128</p>
      </div>

      <div className="absolute right-6 top-6 rounded-xl border border-cyan-500/20 bg-black/50 p-4">
        <p className="text-[10px] text-slate-400">INCIDENTS</p>
        <p className="text-xl font-bold text-green-400">0</p>
      </div>

      <div className="absolute left-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/50 p-4">
        <p className="text-[10px] text-slate-400">SYSTEM HEALTH</p>
        <p className="text-xl font-bold text-cyan-300">99.9%</p>
      </div>

      <div className="absolute right-6 bottom-6 rounded-xl border border-cyan-500/20 bg-black/50 p-4">
        <p className="text-[10px] text-slate-400">RESPONSE TIME</p>
        <p className="text-xl font-bold text-cyan-300">0.8s</p>
      </div>

      {/* TOP STATUS BAR */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-cyan-500/20 bg-black/50 px-4 py-2 text-xs text-cyan-300"
      >
        COMMAND CENTER • LIVE AI SURVEILLANCE ACTIVE
      </motion.div>

      {/* PULSE FIELD */}
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2, 1], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
          style={{
            left: `${6 + (i % 8) * 11}%`,
            top: `${20 + Math.floor(i / 8) * 55}%`,
          }}
        />
      ))}
    </div>
  );
}