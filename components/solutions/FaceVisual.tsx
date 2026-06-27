"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

/* ----------------------------
   STABLE DATA (OPTIMIZED)
---------------------------- */

const binaryColumns = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${4 + i * 5.2}%`,
  duration: 10 + (i % 6),
  delay: i * 0.4,
}));

const landmarks = [
  { x: "50%", y: "24%" },
  { x: "42%", y: "36%" },
  { x: "58%", y: "36%" },
  { x: "50%", y: "44%" },
  { x: "45%", y: "54%" },
  { x: "55%", y: "54%" },
  { x: "40%", y: "66%" },
  { x: "60%", y: "66%" },
  { x: "50%", y: "76%" },
];

/* ----------------------------
   COMPONENT
---------------------------- */

export default function FaceVisual() {

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + (i % 5),
      })),
    []
  );

  const binaryCache = useMemo(
    () =>
      Array.from({ length: 18 }, () =>
        Array.from({ length: 34 }, () => (Math.random() > 0.5 ? "1" : "0"))
      ),
    []
  );

  return (
    <div className="relative h-[760px] overflow-hidden rounded-[36px] border border-cyan-500/20 bg-[#050C18]">

      {/* =========================
          ENHANCED BACKGROUND (SVG GLOW SYSTEM)
      ========================= */}
      <div className="absolute inset-0">

        {/* deep radial energy field */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#0ea5e9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          <circle cx="50%" cy="50%" r="320" fill="url(#coreGlow)" />
        </svg>

        {/* grid layer upgraded */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />

        {/* rotating energy shell */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="96"
              stroke="#22d3ee"
              strokeOpacity="0.08"
              fill="none"
              strokeWidth="0.6"
            />
            <circle cx="100" cy="100" r="70"
              stroke="#22d3ee"
              strokeOpacity="0.05"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* inner pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
        />
      </div>

      {/* =========================
          FLOATING PARTICLES (SMOOTHER)
      ========================= */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_#22d3ee]"
          style={{ left: `${p.left}%`, top: `${p.top}%`, willChange: "transform" }}
          animate={{
            y: [-25, 25, -25],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
          }}
        />
      ))}

      {/* =========================
          BINARY RAIN (STABLE VISUAL FLOW)
      ========================= */}
      {binaryColumns.map((col, colIndex) => (
        <motion.div
          key={col.id}
          className="absolute top-[-40%] text-[10px] font-mono leading-3 text-cyan-400/20"
          style={{ left: col.left }}
          animate={{ y: ["0%", "180%"] }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            delay: col.delay,
            ease: "linear",
          }}
        >
          {binaryCache[colIndex].map((bit, i) => (
            <div key={i}>{bit}</div>
          ))}
        </motion.div>
      ))}

      {/* =========================
          CENTER ENGINE (UPGRADED RADAR CORE)
      ========================= */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="relative h-[460px] w-[460px]">

          {/* radar SVG system upgraded */}
          <svg className="absolute inset-0 w-full h-full">
            <circle cx="230" cy="230" r="200" stroke="#22d3ee" strokeOpacity="0.07" fill="none" />
            <circle cx="230" cy="230" r="150" stroke="#22d3ee" strokeOpacity="0.10" fill="none" />
            <circle cx="230" cy="230" r="90" stroke="#22d3ee" strokeOpacity="0.16" fill="none" />
          </svg>

          {/* rotating scan shell */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-500/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-cyan-400/20"
          />

          {/* energy core pulse */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
          />

          {/* FACE IMAGE */}
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[230px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

            <Image
              src="/assets/face/person.svg"
              alt=""
              width={170}
              height={240}
              className="opacity-95 select-none"
            />
          </div>

        </div>
      </div>
            {/* =========================
          LANDMARK SYSTEM (UPGRADED BIOMETRIC MESH)
      ========================= */}
      {landmarks.map((p, i) => (
        <motion.div
          key={i}
          style={{
            left: p.x,
            top: p.y,
          }}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_22px_#22d3ee]"
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      {/* CONNECTED LANDMARK MESH (NEW UPGRADE LAYER) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <g stroke="#22d3ee" strokeOpacity="0.12" strokeWidth="1">

          {landmarks.map((p, i) => {
            if (i === landmarks.length - 1) return null;
            const next = landmarks[i + 1];

            return (
              <path
                key={i}
                d={`M ${parseFloat(p.x)} ${parseFloat(p.y)} L ${parseFloat(next.x)} ${parseFloat(next.y)}`}
              />
            );
          })}

        </g>
      </svg>

      {/* =========================
          SCAN BEAM (CINEMATIC UPGRADE)
      ========================= */}
      <motion.div
        animate={{
          y: [-140, 140, -140],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 right-6 top-1/2 h-[10px] rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_40px_#22d3ee]"
      />

      {/* FACE ID ICON */}
      <motion.div
        animate={{
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-4 top-4"
      >
        <Image
          src="/assets/face/face-id.svg"
          alt=""
          width={38}
          height={38}
        />
      </motion.div>

      {/* =========================
          LEFT HUD PANEL (GLOW UPGRADE)
      ========================= */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-8 top-10 w-[230px] rounded-2xl border border-cyan-400/20 bg-black/40 p-5 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.08)]"
      >
        <p className="text-xs tracking-[0.3em] text-cyan-400">
          LIVE ANALYTICS
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Image src="/assets/face/cctv.svg" alt="" width={40} height={40} />

          <div>
            <p className="text-sm font-semibold text-white">Camera Feed</p>
            <p className="text-xs text-cyan-300">ACTIVE</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {[
            ["Detection", "100%"],
            ["Landmarks", "468"],
            ["Face Quality", "98.7%"],
            ["Liveness", "PASS"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{label}</span>
              <span className="text-sm font-semibold text-cyan-300">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* =========================
          RIGHT DATABASE PANEL (ENHANCED DEPTH)
      ========================= */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute right-8 top-10 w-[240px] rounded-2xl border border-cyan-400/20 bg-black/40 p-5 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.08)]"
      >
        <p className="text-xs tracking-[0.3em] text-cyan-400">
          DATABASE MATCH
        </p>

        <div className="mt-6 flex justify-center">
          <Image src="/assets/face/database.svg" alt="" width={62} height={62} />
        </div>

        <div className="mt-6 space-y-4">
          {[
            ["Records", "12.4M"],
            ["Matched", "1 Result"],
            ["Confidence", "99.83%"],
            ["Watchlist", "CLEAR"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{label}</span>
              <span className="text-sm font-semibold text-cyan-300">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* =========================
          AI CHIP (ENERGY PULSE UPGRADE)
      ========================= */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0px rgba(34,211,238,0)",
            "0 0 20px rgba(34,211,238,0.2)",
            "0 0 0px rgba(34,211,238,0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-20 rounded-2xl border border-cyan-400/20 bg-black/40 p-4 backdrop-blur-xl"
      >
        <Image src="/assets/face/ai-chip.svg" alt="" width={52} height={52} />
        <p className="mt-3 text-xs text-cyan-300">AI ENGINE</p>
      </motion.div>

      {/* =========================
          FINGERPRINT MODULE (ENHANCED BREATHING EFFECT)
      ========================= */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-20 rounded-2xl border border-cyan-400/20 bg-black/40 p-4 backdrop-blur-xl"
      >
        <Image
          src="/assets/face/fingerprint.svg"
          alt=""
          width={52}
          height={52}
        />
        <p className="mt-3 text-xs text-cyan-300">BIOMETRIC VERIFIED</p>
      </motion.div>

      {/* =========================
          CONNECTION LINES (ENERGY FLOW UPGRADE)
      ========================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[235px] top-[180px] h-[2px] w-[180px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

        <div className="absolute right-[235px] top-[180px] h-[2px] w-[180px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

        <div className="absolute bottom-[130px] left-[170px] h-[2px] w-[220px] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

        <div className="absolute bottom-[130px] right-[170px] h-[2px] w-[220px] -rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
      </div>

      {/* =========================
          TOP STATUS BAR (IMPROVED GLOW)
      ========================= */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.1)]"
      >
        <span className="text-xs tracking-[0.35em] text-cyan-300">
          FACE RECOGNITION ENGINE ONLINE
        </span>
      </motion.div>

      {/* =========================
          BOTTOM TIMELINE (SMOOTHER PULSE)
      ========================= */}
      <div className="absolute bottom-8 left-1/2 w-[720px] max-w-[90%] -translate-x-1/2">

        <div className="flex items-center justify-between">

          {[
            "CAPTURE",
            "DETECT",
            "LANDMARKS",
            "EMBED",
            "SEARCH",
            "VERIFY",
          ].map((step, index) => (
            <div key={step} className="flex flex-col items-center">

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
              />

              <span className="mt-3 text-[10px] tracking-[0.2em] text-cyan-300">
                {step}
              </span>
            </div>
          ))}

        </div>

        <div className="absolute left-0 right-0 top-[6px] -z-10 h-[2px] bg-cyan-500/20" />
      </div>

      {/* =========================
          MATCH DISPLAY (GLOW BOOST)
      ========================= */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 backdrop-blur-xl"
      >
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] text-emerald-300">
            MATCH CONFIDENCE
          </p>
          <p className="mt-2 text-3xl font-bold text-white">99.83%</p>
        </div>
      </motion.div>

      {/* SIDE STATUS LEFT */}
      <div className="absolute left-8 bottom-36 space-y-3">
        {["EDGE AI ACTIVE", "LIVENESS VERIFIED", "ANTI SPOOF ENABLED"].map(
          (item) => (
            <motion.div
              key={item}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-lg border border-cyan-400/20 bg-black/40 px-4 py-2 text-xs text-cyan-300 backdrop-blur-xl"
            >
              {item}
            </motion.div>
          )
        )}
      </div>

      {/* SIDE STATUS RIGHT */}
      <div className="absolute right-8 bottom-36 space-y-3">
        {["GPU READY", "DATABASE ONLINE", "WATCHLIST CLEAR"].map((item) => (
          <motion.div
            key={item}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-lg border border-cyan-400/20 bg-black/40 px-4 py-2 text-xs text-cyan-300 backdrop-blur-xl"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}