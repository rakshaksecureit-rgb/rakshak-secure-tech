"use client";

import { motion } from "framer-motion";
import {
  Users,
  Landmark,
  Headphones,
  Handshake,
  ArrowRight,
} from "lucide-react";

const channels = [
  {
    icon: Users,
    title: "Sales Enquiries",
    response: "Response within 24 Hours",
    email: "sales@rakshaksecuretech.com",
    desc: "Product demonstrations, enterprise deployments and solution consultations.",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    response: "Dedicated Project Team",
    email: "government@rakshaksecuretech.com",
    desc: "Smart Cities, Command Centers, Surveillance Networks and Public Safety Projects.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    response: "24/7 Support Desk",
    email: "support@rakshaksecuretech.com",
    desc: "Technical assistance, maintenance support and operational guidance.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    response: "Strategic Collaboration",
    email: "partners@rakshaksecuretech.com",
    desc: "Technology alliances, system integration and channel partnerships.",
  },
];

export default function ContactChannels() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-35%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[90px] sm:left-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:left-[-15%] md:h-[380px] md:w-[380px] md:blur-[140px] lg:left-[-10%] lg:h-[450px] lg:w-[450px] lg:blur-[160px]" />

        <div className="absolute bottom-0 right-[-35%] h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] sm:right-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:right-[-15%] md:h-[380px] md:w-[380px] md:blur-[140px] lg:right-[-10%] lg:h-[450px] lg:w-[450px] lg:blur-[160px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.28em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            CONTACT CHANNELS
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
            Connect With The
            <span className="mt-1 block text-cyan-400">
              Right Team
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            Whether you're planning a nationwide deployment,
            exploring AI security solutions or seeking technical
            assistance, our specialists are ready to help.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-7 lg:mt-20 lg:gap-8">

          {channels.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.07] sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-8"
              >

                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100 sm:h-36 sm:w-36 lg:h-40 lg:w-40" />

                <div className="relative">

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 sm:h-16 sm:w-16">

                      <Icon
                        size={28}
                        className="text-cyan-300 sm:h-7 sm:w-7"
                      />

                    </div>

                    <ArrowRight
                      size={22}
                      className="mt-1 shrink-0 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight sm:mt-6 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-cyan-400 sm:mt-3 sm:text-base">
                    {item.response}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 sm:mt-8 sm:p-5">

                    <p className="text-[10px] tracking-[3px] text-cyan-400 sm:text-xs">
                      CONTACT EMAIL
                    </p>

                    <p className="mt-2 break-all text-sm font-medium text-white sm:text-base">
                      {item.email}
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