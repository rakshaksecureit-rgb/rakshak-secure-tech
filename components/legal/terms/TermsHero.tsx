// components/legal/terms/TermsHero.tsx

"use client";

import { motion } from "framer-motion";

export default function TermsHero() {
  return (
    <section className="relative px-6 py-24 sm:py-28 md:py-32 lg:py-36">

      <div className="mx-auto max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
            TERMS & CONDITIONS
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Clear Rules for
            <span className="block text-cyan-400">
              Secure Operations
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            These terms define how RakshakSecure Tech services
            are accessed and used across enterprise and government systems.
          </p>

          <div className="mt-10 text-sm text-slate-500">
            Last Updated: June 2026
          </div>

        </motion.div>

      </div>

    </section>
  );
}