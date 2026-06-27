"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Landmark,
  RadioTower,
  Send,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-35%] top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[90px] sm:left-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:left-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:left-0 lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

        <div className="absolute bottom-0 right-[-35%] h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] sm:right-[-25%] sm:h-80 sm:w-80 sm:blur-[110px] md:right-[-15%] md:h-[420px] md:w-[420px] md:blur-[150px] lg:right-0 lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >

            <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[10px] tracking-[0.28em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
              PROJECT ENQUIRY
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">

              Let's Discuss

              <span className="mt-1 block text-cyan-400">
                Your Requirements
              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Whether you are planning a Smart City,
              Surveillance Network, Command Center,
              Critical Infrastructure Project or Enterprise
              Security Deployment, our team is ready to help.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">

              {[
                {
                  icon: Landmark,
                  title: "Government Projects",
                },
                {
                  icon: Shield,
                  title: "Defense & Homeland Security",
                },
                {
                  icon: RadioTower,
                  title: "Critical Infrastructure",
                },
                {
                  icon: Building2,
                  title: "Enterprise Security",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20 sm:gap-4 sm:p-5"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-12 sm:w-12">

                      <Icon
                        size={22}
                        className="text-cyan-300"
                      />

                    </div>

                    <h3 className="text-sm font-medium leading-6 sm:text-base">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:p-8 lg:rounded-[36px]"
          >

            <form className="space-y-5 sm:space-y-6">

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

                <input
                  type="text"
                  placeholder="Organization"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base"
                />

              </div>

              <select className="h-13 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm outline-none transition focus:border-cyan-400 sm:h-14 sm:px-5 sm:text-base">

                <option>
                  Select Industry
                </option>

                <option>
                  Government
                </option>

                <option>
                  Defense
                </option>

                <option>
                  Smart City
                </option>

                <option>
                  Infrastructure
                </option>

                <option>
                  Enterprise
                </option>

              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project requirements..."
                className="min-h-[170px] w-full resize-y rounded-2xl border border-white/10 bg-black/20 p-4 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:min-h-[190px] sm:p-5 sm:text-base"
              />

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 sm:h-14 sm:text-base"
              >

                Submit Enquiry

                <Send size={18} />

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}