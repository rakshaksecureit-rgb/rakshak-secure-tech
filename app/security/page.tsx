"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Database,
  Radar,
  KeyRound,
  Server,
  Eye,
  AlertTriangle,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative px-6 py-24 sm:py-28 md:py-32 lg:py-36">

        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.35em] text-cyan-300">
              SECURITY
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
              Built for
              <span className="block text-cyan-400">
                Mission-Critical Trust
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Our security architecture is designed for government,
              defense, and enterprise-grade systems with strict compliance,
              encryption, and continuous monitoring.
            </p>

            <div className="mt-10 text-sm text-slate-500">
              Security Framework • Updated June 2026
            </div>

          </motion.div>

        </div>

      </section>

      {/* CORE SECURITY GRID */}
      <section className="relative px-6 pb-20 sm:pb-24 lg:pb-28">

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: Lock,
              title: "Encryption Standards",
              desc: "End-to-end encryption for data in transit and at rest using modern cryptographic protocols.",
            },
            {
              icon: Server,
              title: "Secure Infrastructure",
              desc: "Hardened servers with restricted access, firewall layers, and monitored environments.",
            },
            {
              icon: KeyRound,
              title: "Access Control",
              desc: "Role-based access control ensuring least-privilege enforcement across systems.",
            },
            {
              icon: Radar,
              title: "Threat Monitoring",
              desc: "Real-time detection systems for anomalies, breaches, and unauthorized access attempts.",
            },
            {
              icon: Database,
              title: "Data Protection",
              desc: "Secure storage systems with redundancy, backups, and integrity validation.",
            },
            {
              icon: Eye,
              title: "Continuous Auditing",
              desc: "System-wide logging and audit trails for full transparency and accountability.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 sm:p-7 lg:p-8"
              >

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">

                    <Icon size={26} className="text-cyan-300" />

                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* SECURITY ALERT / DISCLOSURE */}
      <section className="relative px-6 pb-28">

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10"
          >

            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="text-red-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Responsible Disclosure
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    We encourage ethical reporting of vulnerabilities.
                    Security researchers can report issues responsibly
                    through our official security channels.
                  </p>
                </div>

              </div>

              <div className="text-sm text-slate-400 md:text-right">
                security@rakshaksecuretech.com
              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}