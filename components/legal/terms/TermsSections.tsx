// components/legal/terms/TermsSections.tsx

"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    items: [
      "By using our services, you agree to these terms",
      "Applies to all enterprise and government users",
      "Compliance with applicable laws required",
    ],
  },
  {
    title: "Services Usage",
    items: [
      "Services must be used for lawful purposes",
      "Unauthorized access is strictly prohibited",
      "System misuse may lead to suspension",
    ],
  },
  {
    title: "User Responsibilities",
    items: [
      "Maintain account security",
      "Provide accurate information",
      "Avoid misuse of platform resources",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "All technology and UI belong to RakshakSecure Tech",
      "Unauthorized reproduction is prohibited",
      "Brand assets are protected",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "We are not liable for indirect damages",
      "Service interruptions may occur",
      "Enterprise systems operate on best-effort basis",
    ],
  },
  {
    title: "Termination",
    items: [
      "Access may be suspended for violations",
      "Misuse of systems leads to termination",
      "We reserve right to refuse service",
    ],
  },
];

export default function TermsSections() {
  return (
    <section className="relative px-6 pb-28">

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 sm:rounded-[30px] lg:rounded-[34px]"
          >

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

            <div className="relative">

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:text-base">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}