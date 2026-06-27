"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP STRIP (IMPROVED VISIBILITY) */}
      <div className="relative border-b border-cyan-400/10 bg-gradient-to-r from-black via-[#06121f] to-black backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-[11px] font-medium tracking-[0.3em] text-cyan-300/90">
          <span className="animate-pulse text-cyan-400">●</span>
          <span className="mx-2">
            GOVERNMENT GRADE SECURITY SYSTEM • AI MONITORING ACTIVE • PAN INDIA NETWORK
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B14]/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">

          {/* LOGO SECTION (FIXED VISIBILITY + PREMIUM GLOW) */}
          <Link href="/" className="group flex items-center gap-4">

           <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl
                bg-white
                border border-gray-200
                shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                transition-transform duration-300 group-hover:scale-105">

  {/* soft inner highlight (very subtle premium feel) */}
  <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white to-gray-100 opacity-80" />

  <Image
    src="/logo.png"
    alt="Rakshak Logo"
    width={60}
    height={60}
    className="relative z- object-contain"
    priority
  />
</div>
            {/* BRAND */}
            <div>
              <h2 className="text-[16px] font-bold tracking-wide text-white">
                RAKSHAKSECURE{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
                   TECH
                </span>
              </h2>

              <p className="text-[8px] tracking-[0.35em] text-slate-400">
                PROTECTION THROUGH TECHNLOGY 
              </p>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            {["Home", "About", "Solutions", "Industries", "Technology", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute -top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              )
            )}
          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-3">

            {/* CTA (MORE PREMIUM + LESS HARSH) */}
            <Link
              href="/contact"
              className="hidden relative overflow-hidden rounded-xl
                         bg-gradient-to-r from-[#0077B6] via-cyan-500 to-[#00E5FF]
                         px-5 py-3 text-sm font-semibold text-white
                         shadow-[0_0_45px_rgba(0,255,255,0.25)]
                         transition-all duration-300
                         hover:scale-105 hover:shadow-[0_0_70px_rgba(0,255,255,0.4)]
                         md:block"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 hover:translate-x-full" />
              <span className="relative z-10 tracking-wide">
                REQUEST DEMO
              </span>
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="relative rounded-xl border border-cyan-400/20
                         bg-white/5 p-3 text-white
                         transition hover:border-cyan-300/40 hover:bg-cyan-500/10 md:hidden"
            >
              <span className="absolute inset-0 rounded-xl animate-pulse border border-cyan-400/10" />
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}