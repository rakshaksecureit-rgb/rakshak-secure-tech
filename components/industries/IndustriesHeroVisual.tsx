"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Train,
  Plane,
  Ship,
  Building2,
  Factory,
  RadioTower,
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Shield, label: "Defense", x: "50%", y: "12%" },
  { icon: Plane, label: "Aviation", x: "80%", y: "25%" },
  { icon: Ship, label: "Ports", x: "88%", y: "50%" },
  { icon: RadioTower, label: "Telecom", x: "80%", y: "75%" },
  { icon: Factory, label: "Industry", x: "50%", y: "88%" },
  { icon: Train, label: "Railways", x: "20%", y: "75%" },
  { icon: Landmark, label: "Government", x: "12%", y: "50%" },
  { icon: Building2, label: "Enterprise", x: "20%", y: "25%" },
];

export default function IndustriesHeroVisual() {
  return (
    <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden rounded-2xl sm:rounded-[36px] border border-cyan-500/20 bg-[#04111f]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:blur-[150px]" />

      </div>

      {/* Rings (hidden on mobile for clean look) */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-center">
        {[420, 300, 180].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-cyan-500/10"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Center Hub */}
      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40" />

          <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700">

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                AI
              </h3>

              <p className="mt-1 sm:mt-2 text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-cyan-100">
                INTELLIGENCE HUB
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Industry Nodes */}
      {industries.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: index * 0.15,
            }}
            className="absolute hidden sm:block"
            style={{
              left: item.x,
              top: item.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-black/60 px-3 py-2 backdrop-blur-xl">

              <Icon size={14} className="text-cyan-300" />

              <span className="text-xs font-medium whitespace-nowrap text-slate-200">
                {item.label}
              </span>

            </div>
          </motion.div>
        );
      })}

      {/* Stats - mobile optimized */}
      <div className="absolute left-3 top-3 sm:left-5 sm:top-5 rounded-lg sm:rounded-xl border border-cyan-500/20 bg-black/60 px-3 sm:px-5 py-2 sm:py-4 backdrop-blur-xl">
        <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-cyan-400">
          INDUSTRIES
        </p>
        <h3 className="text-xl sm:text-3xl font-bold">08+</h3>
      </div>

      <div className="absolute right-3 top-3 sm:right-5 sm:top-5 rounded-lg sm:rounded-xl border border-cyan-500/20 bg-black/60 px-3 sm:px-5 py-2 sm:py-4 backdrop-blur-xl">
        <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-cyan-400">
          COVERAGE
        </p>
        <h3 className="text-sm sm:text-3xl font-bold text-cyan-300">
          PAN INDIA
        </h3>
      </div>

      <div className="absolute left-3 bottom-3 sm:left-5 sm:bottom-5 rounded-lg sm:rounded-xl border border-cyan-500/20 bg-black/60 px-3 sm:px-5 py-2 sm:py-4 backdrop-blur-xl">
        <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-cyan-400">
          DEPLOYMENT
        </p>
        <h3 className="text-xl sm:text-3xl font-bold">100+</h3>
      </div>

      <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 rounded-lg sm:rounded-xl border border-cyan-500/20 bg-black/60 px-3 sm:px-5 py-2 sm:py-4 backdrop-blur-xl">
        <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-cyan-400">
          STATUS
        </p>
        <h3 className="text-sm sm:text-2xl font-bold text-green-400">
          ACTIVE
        </h3>
      </div>

    </div>
  );
}