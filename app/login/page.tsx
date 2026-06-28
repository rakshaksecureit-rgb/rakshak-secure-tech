"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Eye,
  EyeOff,
  Cpu,
  ScanFace,
  Camera,
  RadioTower,
  Building2,
  ShieldCheck,
  Fingerprint,
  Binary,
  Network,
  Globe,
  Server,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type TrustBadge = {
  title: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "AI Video Analytics",
    description:
      "Real-time intelligent surveillance powered by advanced AI inference.",
    icon: Camera,
  },
  {
    title: "Facial Recognition",
    description:
      "Enterprise identity verification with high-speed biometric matching.",
    icon: ScanFace,
  },
  {
    title: "Command & Control",
    description:
      "Centralized monitoring with unified situational awareness.",
    icon: Cpu,
  },
  {
    title: "ANPR",
    description:
      "Automatic Number Plate Recognition for secure perimeter monitoring.",
    icon: Binary,
  },
  {
    title: "Drone Detection",
    description:
      "AI-assisted airspace monitoring and threat identification.",
    icon: RadioTower,
  },
  {
    title: "Access Control",
    description:
      "Secure identity-driven authentication across facilities.",
    icon: Fingerprint,
  },
  {
    title: "Perimeter Intrusion Detection",
    description:
      "Continuous intelligent protection across critical boundaries.",
    icon: ShieldCheck,
  },
  {
    title: "Critical Infrastructure Protection",
    description:
      "Resilient cyber-physical security for enterprise environments.",
    icon: Building2,
  },
];

const trustBadges: TrustBadge[] = [
  {
    title: "Zero Trust Architecture",
    icon: Shield,
  },
  {
    title: "256-bit Encryption",
    icon: Lock,
  },
  {
    title: "Enterprise Ready",
    icon: Globe,
  },
  {
    title: "AI Powered",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const backgroundDots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb30,transparent_45%),radial-gradient(circle_at_bottom_right,#06b6d430,transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-40 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[160px]"
      />

      {backgroundDots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{
            opacity: 0.15,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: dot.duration,
            delay: dot.delay,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
          style={{
            left: dot.left,
            top: dot.top,
          }}
        />
      ))}

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <section className="flex w-full items-center px-6 py-14 sm:px-10 lg:w-[55%] lg:px-16 xl:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">
                <Shield className="h-8 w-8" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Rakshak SecureTech
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Protection Through Technology
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Enterprise AI Security Platform
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
                AI Security
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Platform
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Unified enterprise security platform combining AI-powered
                surveillance, intelligent analytics, access management, cyber
                resilience and critical infrastructure protection into one
                secure operational ecosystem for government and enterprise
                environments.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <motion.div
                    key={badge.title}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl"
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm font-medium">
                      {badge.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
                        <motion.div
              variants={fadeUp}
              className="mt-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Enterprise Security
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Trusted by mission-critical environments
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                    Designed for enterprises, government organizations,
                    industrial facilities, smart cities, transportation,
                    defense, and critical infrastructure requiring
                    always-on visibility with intelligent security
                    operations.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <Network className="mx-auto h-8 w-8 text-cyan-300" />
                    <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                      Unified
                    </p>
                    <p className="mt-1 font-semibold">
                      Security Fabric
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <Server className="mx-auto h-8 w-8 text-cyan-300" />
                    <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                      AI Driven
                    </p>
                    <p className="mt-1 font-semibold">
                      Operations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="flex w-full items-center justify-center px-6 py-10 sm:px-10 lg:w-[45%] lg:px-12">
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/10" />

            <div className="relative z-10">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/40">
                <Shield className="h-8 w-8" />
              </div>

              <h2 className="mt-8 text-3xl font-bold">
                Secure Platform Access
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Authorized Employees, Partners & Government Officials
              </p>

              <form
                className="mt-10 space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  window.alert("Authentication Coming Soon");
                }}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <div className="group flex h-14 items-center rounded-2xl border border-white/10 bg-white/5 px-4 transition-all duration-300 focus-within:border-cyan-400/60 focus-within:bg-white/10">
                    <Mail className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-cyan-300" />

                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                  </label>

                  <div className="group flex h-14 items-center rounded-2xl border border-white/10 bg-white/5 px-4 transition-all duration-300 focus-within:border-cyan-400/60 focus-within:bg-white/10">
                    <Lock className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-cyan-300" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      className="text-slate-400 transition-colors hover:text-cyan-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() =>
                      setRemember((previous) => !previous)
                    }
                    className="h-4 w-4 rounded border-cyan-400 bg-transparent accent-cyan-500"
                  />

                  <span className="text-sm text-slate-300">
                    Remember this device
                  </span>
                </label>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50"
                >
                  Access Platform

                  <ArrowRight className="h-5 w-5" />
                </motion.button>

                <Link href="/">
                  <motion.div
                    whileHover={{
                      scale: 1.01,
                    }}
                    className="flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 font-medium transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <ArrowLeft className="h-5 w-5" />

                    Back to Website
                  </motion.div>
                </Link>
                                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />

                    <div>
                      <p className="font-semibold text-cyan-200">
                        Enterprise Protected
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        All platform communications are protected using
                        enterprise-grade encryption, modern security controls,
                        and Zero Trust principles.
                      </p>
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-slate-400">
                  Need Platform Access?
                </p>

                <a
                  href="mailto:admin@rakshaksecuretech.com"
                  className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  <Mail className="h-5 w-5" />
                  admin@rakshaksecuretech.com
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}