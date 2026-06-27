"use client";

import { motion } from "framer-motion";
import ContactHeroVisual from "./ContactHeroVisual";

export default function ContactHero() {
  return (
    <section className="relative flex items-center overflow-hidden py-16 sm:py-20 lg:min-h-[90vh] lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-25%] top-[-20%] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] lg:left-[-10%] lg:top-[-10%] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />

        <div className="absolute right-[-25%] bottom-[-20%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] lg:right-[-10%] lg:bottom-[-10%] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:60px_60px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >

            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] sm:px-5 sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-cyan-300">
              CONTACT RAKSHAK
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">

              Mission Critical

              <span className="block text-cyan-400">
                Conversations
              </span>

              Start Here

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0 lg:mt-8">
              Connect with our security intelligence specialists,
              government project advisors and technology teams
              to explore AI-powered surveillance, command centers
              and critical infrastructure solutions.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

              {[
                "Government Projects",
                "Defense Solutions",
                "Smart Cities",
                "Enterprise Security",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-12">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                  24/7
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Support
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                  PAN
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  India Coverage
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                  AI
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Specialists
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="mx-auto w-full max-w-[650px]">
            <ContactHeroVisual />
          </div>

        </div>

      </div>

    </section>
  );
}