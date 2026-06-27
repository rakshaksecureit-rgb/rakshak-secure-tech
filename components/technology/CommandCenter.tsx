"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Shield,
  AlertTriangle,
  Camera,
  Eye,
  Radar,
  Video,
} from "lucide-react";

/* ---------------- LIVE COUNTER ---------------- */
function useCounter(base: number, speed = 60) {
  const [val, setVal] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 2));
    }, speed);
    return () => clearInterval(id);
  }, [speed]);

  return val;
}

/* ---------------- DATA ---------------- */

const alerts = [
  "CRITICAL: Drone breach in RED ZONE-7",
  "HIGH: Face match detected",
  "MEDIUM: Crowd anomaly detected",
  "INFO: AI model rebalanced",
];

const cameras = [
  "Gate A - MAIN FEED",
  "North Perimeter",
  "Parking Grid",
  "Control Room",
];

const drones = [
  { top: "20%", left: "20%" },
  { top: "35%", left: "70%" },
  { top: "60%", left: "40%" },
  { top: "75%", left: "75%" },
];

export default function CommandCenterV6() {
  const threats = useCounter(7);
  const camerasOnline = useCounter(2451, 180);
  const targets = useCounter(142, 300);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-[#040812] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-red-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 text-xs sm:text-sm rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 tracking-[0.25em]">
            COMMAND INTELLIGENCE GRID
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl font-bold">
            Military AI Surveillance Command Room
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base text-slate-400">
            Real-time drone tracking, CCTV fusion, predictive threat AI,
            and autonomous defense coordination system.
          </p>
        </div>

        {/* ALERT BAR */}
        <div className="mt-10 overflow-hidden rounded-xl border border-red-500/20 bg-black/60">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap px-6 py-3 text-xs sm:text-sm text-red-300"
          >
            {alerts.concat(alerts).map((a, i) => (
              <span key={i} className="flex items-center gap-2">
                <AlertTriangle size={14} /> {a}
              </span>
            ))}
          </motion.div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 sm:mt-16 lg:mt-20 grid gap-6 lg:grid-cols-3">

          {/* LEFT METRICS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {[
              {
                icon: Shield,
                label: "System Integrity",
                value: "98.4%",
                color: "text-cyan-400",
              },
              {
                icon: AlertTriangle,
                label: "Active Threats",
                value: threats,
                color: "text-red-400",
              },
              {
                icon: Camera,
                label: "Cameras Online",
                value: camerasOnline,
                color: "text-cyan-300",
              },
              {
                icon: Eye,
                label: "Targets Tracked",
                value: targets,
                color: "text-yellow-300",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <Icon className="text-cyan-400" size={18} />
                  <p className="text-xs text-slate-400 mt-2">
                    {item.label}
                  </p>
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </h3>
                </div>
              );
            })}

          </div>

          {/* CENTER RADAR */}
          <div className="lg:col-span-2 relative">

            <div className="relative h-[420px] sm:h-[520px] lg:h-[650px] rounded-[28px] sm:rounded-[36px] border border-cyan-500/20 bg-black/70 overflow-hidden">

              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />

              {/* SCAN */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-[260px] sm:h-[360px] w-[260px] sm:w-[360px] rounded-full border border-cyan-500/20" />
              </motion.div>

              {/* RADAR RINGS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[200px] sm:h-[280px] w-[200px] sm:w-[280px] rounded-full border border-cyan-400/20" />
                <div className="h-[120px] sm:h-[200px] w-[120px] sm:w-[200px] rounded-full border border-cyan-400/20" />
              </div>

              {/* DRONES */}
              {drones.map((d, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                  className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_cyan]"
                  style={{ top: d.top, left: d.left }}
                />
              ))}

              {/* CENTER CORE */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 shadow-[0_0_100px_rgba(0,200,255,0.7)] flex items-center justify-center"
                >
                  <Radar size={28} className="sm:size-10" />
                </motion.div>
              </div>

              {/* CCTV FEEDS (mobile hidden) */}
              <div className="hidden sm:block absolute left-4 bottom-4 space-y-2">
                {cameras.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-white/10 bg-black/60"
                  >
                    <Video size={12} className="text-cyan-400" />
                    {c}
                    <span className="ml-auto text-green-400 animate-pulse">
                      LIVE
                    </span>
                  </div>
                ))}
              </div>

              {/* HUD */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 border border-red-500/20 p-2 sm:p-3 rounded-xl text-xs">
                <p className="text-red-300">STATUS</p>
                <p className="text-red-400 font-bold animate-pulse">
                  ACTIVE DEFENSE
                </p>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 border border-cyan-500/20 p-2 sm:p-3 rounded-xl text-xs">
                <p className="text-cyan-300">NETWORK</p>
                <p className="text-cyan-400 font-bold">STABLE</p>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 border border-yellow-500/20 p-2 sm:p-3 rounded-xl text-xs">
                <p className="text-yellow-300">TARGETS</p>
                <p className="text-yellow-400 font-bold">LOCKED</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}