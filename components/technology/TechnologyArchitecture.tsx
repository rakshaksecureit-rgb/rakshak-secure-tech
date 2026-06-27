"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Cpu,
  Radar,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const flow = [
  { icon: Camera, title: "Camera Network", desc: "CCTV, drones, sensors and surveillance feeds" },
  { icon: Cpu, title: "AI Vision Engine", desc: "Object detection, recognition and tracking" },
  { icon: Radar, title: "Threat Intelligence", desc: "Risk scoring and anomaly detection" },
  { icon: MonitorSmartphone, title: "Command Center", desc: "Centralized monitoring and analytics" },
  { icon: ShieldCheck, title: "Response System", desc: "Automated alerts and security actions" },
];

export default function TechnologyArchitecture() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-[#050A12] text-white">

      {/* BACKGROUND ENERGY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.14),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 text-xs sm:text-sm rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 tracking-[0.25em]">
            SECURITY ARCHITECTURE GRID
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl font-bold">
            Live AI Intelligence Flow System
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base text-slate-400">
            Real-time surveillance data flows through layered AI intelligence systems
            for detection, analysis and response orchestration.
          </p>
        </div>

        {/* DESKTOP FLOW */}
        <div className="relative mt-14 sm:mt-20 hidden lg:block">

          {/* ENERGY PIPE LINE */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-cyan-500/10 overflow-hidden">
            <motion.div
              animate={{ x: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-full w-44 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-sm"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {flow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >

                  {/* glow */}
                  <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                  {/* CARD */}
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition group-hover:border-cyan-400/40">

                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.8, repeat: Infinity }}
                      className="flex justify-center"
                    >
                      <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                        <Icon size={26} className="text-cyan-300" />
                      </div>
                    </motion.div>

                    <h3 className="mt-6 text-center font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-center text-xs sm:text-sm text-slate-400">
                      {item.desc}
                    </p>

                    {/* LIVE DOT */}
                    <div className="mt-5 flex justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_cyan]"
                      />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE FLOW */}
        <div className="mt-14 sm:mt-16 space-y-4 lg:hidden">
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">

                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                  >
                    <Icon size={20} className="text-cyan-300" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}