// components/legal/privacy/PrivacySections.tsx

"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Name, email, phone number",
      "Organization details",
      "Project inquiry data",
      "Website usage analytics",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "Respond to inquiries",
      "Provide technical support",
      "Improve services",
      "Maintain security",
    ],
  },
  {
    title: "Cookies & Tracking",
    items: [
      "Essential website functionality",
      "Performance monitoring",
      "Analytics insights",
    ],
  },
  {
    title: "Data Security",
    items: [
      "End-to-end encryption",
      "Secure infrastructure",
      "Access control systems",
      "Continuous monitoring",
    ],
  },
  {
    title: "Your Rights",
    items: [
      "Access your data",
      "Request corrections",
      "Request deletion",
      "Withdraw consent",
    ],
  },
];

export default function PrivacySections() {
  return (
    <section className="relative px-6 pb-28">

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
          >

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

            <div className="relative">

              <h3 className="text-xl font-bold text-white">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
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