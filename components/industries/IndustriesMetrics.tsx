"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "99.7%",
    label: "Recognition Accuracy",
    desc: "AI-powered identification and verification systems.",
  },
  {
    value: "24/7",
    label: "Continuous Monitoring",
    desc: "Real-time surveillance and operational awareness.",
  },
  {
    value: "360°",
    label: "Operational Visibility",
    desc: "Unified command and intelligence ecosystem.",
  },
  {
    value: "AI",
    label: "Decision Intelligence",
    desc: "Automated insights and response workflows.",
  },
];

export default function IndustriesMetrics() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-[400px] sm:h-[500px] w-[400px] sm:w-[500px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] sm:h-[500px] w-[400px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-cyan-300">
            PERFORMANCE METRICS
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Intelligence Measured By
            <span className="block text-cyan-400">
              Operational Outcomes
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-400">
            Every Rakshak deployment is engineered for accuracy,
            visibility and operational efficiency across mission-critical environments.
          </p>
        </div>

        {/* MAIN PANEL */}
        <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden relative">

          {/* inner glow layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative p-6 sm:p-8 lg:p-10 text-center border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 overflow-hidden"
              >

                {/* MOBILE DIVIDER GLOW */}
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent sm:hidden" />

                {/* HOVER GLOW DEPTH */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                </div>

                {/* CONTENT */}
                <div className="relative">

                  {/* VALUE */}
                  <motion.h3
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 tracking-tight"
                  >
                    {item.value}
                  </motion.h3>

                  {/* LABEL */}
                  <h4 className="mt-5 text-base sm:text-lg font-semibold text-white">
                    {item.label}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400 max-w-xs mx-auto">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 p-6 sm:p-8 text-center"
        >
          <p className="text-sm sm:text-lg leading-relaxed text-slate-300">
            Designed for Governments, Defense Organizations,
            Smart Cities, Critical Infrastructure, Airports,
            Transportation Networks and Enterprise Security Operations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}