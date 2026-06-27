"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Building2,
  Shield,
  Users,
  Radio,
} from "lucide-react";

const nodes = [
  {
    icon: Building2,
    title: "Government Projects",
    x: "20%",
    y: "22%",
  },
  {
    icon: Shield,
    title: "Defense",
    x: "80%",
    y: "22%",
  },
  {
    icon: Users,
    title: "Sales",
    x: "18%",
    y: "76%",
  },
  {
    icon: Headphones,
    title: "Support",
    x: "82%",
    y: "76%",
  },
];

export default function ContactHeroVisual() {
  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-cyan-500/20 bg-[#04101d]">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px] lg:blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]" />

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">

        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="22%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="22%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="18%"
          y2="76%"
          stroke="rgba(0,255,255,.25)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="82%"
          y2="76%"
          stroke="rgba(0,255,255,.25)"
        />

      </svg>

      {/* Center Hub */}
      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-50" />

          <div className="relative flex h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_60px_rgba(0,255,255,.35)]">

            <Radio
              className="text-white"
              size={28}
            />

            <Radio
              className="hidden sm:block text-white"
              size={40}
            />

            <Radio
              className="hidden lg:block text-white"
              size={60}
            />

          </div>

        </motion.div>

      </div>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.title}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
            }}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-black/50 px-2.5 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4 backdrop-blur-xl">

              <div className="flex items-center gap-2 sm:gap-3">

                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-500/10">

                  <Icon
                    size={16}
                    className="text-cyan-300 sm:hidden"
                  />

                  <Icon
                    size={18}
                    className="hidden sm:block text-cyan-300"
                  />

                </div>

                <span className="max-w-[80px] sm:max-w-none text-[10px] sm:text-xs lg:text-sm font-medium leading-tight text-white">
                  {node.title}
                </span>

              </div>

            </div>
          </motion.div>
        );
      })}

      {/* Network Status */}
      <div className="absolute left-3 top-3 sm:left-5 sm:top-5 lg:left-6 lg:top-6 rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-black/50 p-3 sm:p-4 lg:p-5 backdrop-blur-xl">

        <p className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-cyan-400">
          NETWORK STATUS
        </p>

        <h3 className="mt-1 sm:mt-2 text-lg sm:text-2xl lg:text-3xl font-bold text-green-400">
          ONLINE
        </h3>

      </div>

      {/* Response Time */}
      <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 lg:right-6 lg:bottom-6 rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-black/50 p-3 sm:p-4 lg:p-5 backdrop-blur-xl">

        <p className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-cyan-400">
          RESPONSE TIME
        </p>

        <h3 className="mt-1 sm:mt-2 text-lg sm:text-2xl lg:text-3xl font-bold text-cyan-300">
          &lt; 24 HRS
        </h3>

      </div>

    </div>
  );
}