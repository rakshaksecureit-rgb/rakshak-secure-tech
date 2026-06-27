"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Home,
  Info,
  Layers,
  Building2,
  Cpu,
  Phone,
  X,
  ArrowUpRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Solutions", href: "/solutions", icon: Layers },
  { name: "Industries", href: "/industries", icon: Building2 },
  { name: "Tech", href: "/technology", icon: Cpu },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl"
          />

          {/* FULL SCREEN PANEL */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-[#050B18]"
          >

            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_25px_rgba(0,255,255,0.25)]">
                  <Shield size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    RakshakSecure
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-cyan-300">
                    COMMAND INTERFACE
                  </p>
                </div>

              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white active:scale-90 transition"
              >
                <X size={18} />
              </button>

            </div>

            {/* NAV GRID */}
            <div className="flex-1 px-5 py-6 overflow-y-auto">

              <div className="grid grid-cols-2 gap-4">

                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link key={item.name} href={item.href} onClick={onClose}>
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className={`relative flex flex-col items-center justify-center rounded-2xl border p-5 text-center transition-all duration-300 ${
                          isActive
                            ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]"
                            : "border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5"
                        }`}
                      >

                        {/* ACTIVE DOT */}
                        {isActive && (
                          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        )}

                        <Icon
                          size={22}
                          className={`transition ${
                            isActive ? "text-cyan-300" : "text-slate-300"
                          }`}
                        />

                        <span className="mt-3 text-sm font-medium text-white">
                          {item.name}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="absolute right-3 top-3 text-cyan-300 opacity-0 transition group-hover:opacity-100"
                        />

                      </motion.div>
                    </Link>
                  );
                })}

              </div>
            </div>

            {/* 🔥 DOCK BAR (NEXT-LEVEL FEATURE) */}
            <div className="border-t border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3">

              <div className="flex items-center justify-between">

                <Link
                  href="/"
                  onClick={onClose}
                  className="flex flex-col items-center text-xs text-slate-400"
                >
                  <Home size={18} />
                  Home
                </Link>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="relative flex flex-col items-center"
                >
                  <div className="absolute -top-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(0,255,255,0.35)] animate-pulse">
                    <ArrowUpRight size={20} className="text-black" />
                  </div>
                  <span className="mt-6 text-xs text-cyan-300">
                    Action
                  </span>
                </Link>

                <button
                  onClick={onClose}
                  className="flex flex-col items-center text-xs text-slate-400"
                >
                  <X size={18} />
                  Close
                </button>

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}