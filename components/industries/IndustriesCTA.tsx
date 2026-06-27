"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Building2,
  Radar,
  Cpu,
} from "lucide-react";

export default function IndustriesCTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] sm:h-[700px] w-[400px] sm:w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] sm:h-[700px] w-[400px] sm:w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[42px] border border-cyan-500/10 bg-gradient-to-br from-[#08172d] via-[#0a1f3c] to-[#071226]">

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* CENTRAL GLOW */}
          <div className="absolute left-1/2 top-1/2 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="relative p-6 sm:p-10 lg:p-20">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* LEFT CONTENT */}
              <div>

                <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
                  START YOUR PROJECT
                </span>

                <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  Secure The Future
                  <span className="block text-cyan-400">
                    With Intelligent
                  </span>
                  Security Ecosystems
                </h2>

                <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-400">
                  Whether you're building a Smart City, securing Critical Infrastructure,
                  modernizing Government Operations or deploying Enterprise Surveillance,
                  RakshakSecure Tech delivers AI-powered intelligence ecosystems engineered
                  for mission-critical environments.
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-cyan-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-black transition hover:bg-cyan-400"
                  >
                    Request Consultation

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Solutions
                  </Link>

                </div>

              </div>

              {/* RIGHT CARDS */}
              <div className="grid gap-4 sm:gap-5">

                {[
                  {
                    icon: Building2,
                    title: "Government & Smart Cities",
                  },
                  {
                    icon: Shield,
                    title: "Defense & Homeland Security",
                  },
                  {
                    icon: Radar,
                    title: "Critical Infrastructure",
                  },
                  {
                    icon: Cpu,
                    title: "AI Command Platforms",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={{ x: 6 }}
                      className="group flex items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
                    >

                      <div className="relative flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                        {/* subtle glow */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <Icon
                          size={24}
                          className="sm:size-7 text-cyan-300 relative z-10"
                        />

                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs sm:text-sm text-slate-400">
                          Enterprise-grade deployment ready
                        </p>
                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}