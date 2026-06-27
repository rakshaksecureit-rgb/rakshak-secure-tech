"use client";

import { motion } from "framer-motion";
import { rotateSlow, pulse } from "./animations";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* =========================================
          RADIAL ENERGY GLOW
      ========================================= */}

      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#0ea5e9" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle
          cx="50%"
          cy="50%"
          r="320"
          fill="url(#coreGlow)"
        />
      </svg>

      {/* =========================================
          CYBER GRID
      ========================================= */}

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,rgba(34,211,238,0.07)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(34,211,238,0.07)_1px,transparent_1px)]
        bg-[size:42px_42px]
      "
      />

      {/* =========================================
          ROTATING OUTER RING
      ========================================= */}

      <motion.div
        animate={rotateSlow}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.08"
            strokeWidth="0.6"
          />

          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.05"
          />
        </svg>
      </motion.div>

      {/* =========================================
          INNER PULSE RING
      ========================================= */}

      <motion.div
        animate={pulse}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/10
        "
      />

      {/* =========================================
          VIGNETTE
      ========================================= */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]
      "
      />

      {/* =========================================
          TOP LIGHT
      ========================================= */}

      <div
        className="
        absolute
        left-1/2
        top-0
        h-56
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[120px]
      "
      />

      {/* =========================================
          BOTTOM LIGHT
      ========================================= */}

      <div
        className="
        absolute
        bottom-0
        left-1/2
        h-56
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/10
        blur-[120px]
      "
      />

    </div>
  );
}