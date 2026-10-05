"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  FileCheck2,
  ShieldCheck,
  X,
  ZoomIn,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Certificate = {
  title: string;
  subtitle: string;
  type: string;
  image?: string;
  pdf?: string;
};

const certificates: Certificate[] = [
  {
    title: "DPIT Certificate",
    subtitle: "Official Registration",
    image: "/certificates/DPIT.webp",
    type: "Certificate",
  },
  {
    title: "Import Export Code",
    subtitle: "IEC Registration",
    image: "/certificates/IEC.webp",
    type: "Registration",
  },
  {
    title: "SAMAR Certificate",
    subtitle: "Official Registration",
    image: "/certificates/SAMAR.webp",
    type: "Certificate",
  },
  {
    title: "UDHYAM Registration",
    subtitle: "MSME Registration",
    pdf: "/certificates/UDHYAM.pdf",
    type: "MSME",
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  /*
   * Lock page scrolling while the certificate viewer is open.
   */
  useEffect(() => {
    if (!selectedCertificate) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCertificate]);

  /*
   * Close viewer with Escape.
   */
  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  /*
   * Prevent casual right-click saving.
   * This is only a deterrent and cannot prevent screenshots
   * or developer tools.
   */
  const preventContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <section
        id="certifications"
        className="relative overflow-hidden border-t border-white/10 bg-[#071226] py-24 sm:py-28 lg:py-32"
      >
        {/* Ambient Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[140px]" />

          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              Certifications & Compliance
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Standards That
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Strengthen Trust
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Our certifications, registrations and compliance credentials
              reflect Rakshak SecureTech&apos;s commitment to professional
              standards, operational integrity and responsible technology
              deployment.
            </p>
          </motion.div>

          {/* Certificate Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((certificate, index) => (
              <motion.button
                key={certificate.title}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left outline-none transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.055] focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              >
                {/* Preview */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-slate-950"
                  onContextMenu={preventContextMenu}
                >
                  {certificate.image ? (
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} - Rakshak SecureTech`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      draggable={false}
                      className="select-none object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
                        <FileCheck2 className="h-8 w-8 text-cyan-300" />
                      </div>

                      <p className="text-sm font-medium text-white">
                        Official Certificate
                      </p>

                      <p className="mt-2 text-xs text-slate-500">
                        Secure document preview
                      </p>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#071226]/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-[#071226]/95 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-950/30">
                      <ZoomIn className="h-4 w-4 text-cyan-300" />
                      View Certificate
                    </span>
                  </div>

                  {/* Document Label */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#071226]/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                    Official Document
                  </div>
                </div>

                {/* Information */}
                <div className="border-t border-white/10 p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      {certificate.type}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition-colors duration-300 group-hover:text-cyan-300" />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {certificate.subtitle}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.18em] text-slate-500"
          >
            <span className="h-px flex-1 bg-white/10" />

            <span>Verified Documentation</span>

            <span className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-5 lg:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedCertificate(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="relative flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071226] shadow-2xl shadow-black/70"
              onContextMenu={preventContextMenu}
            >
              {/* Modal Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#071226]/95 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 sm:h-10 sm:w-10">
                    <ShieldCheck className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white sm:text-base">
                      {selectedCertificate.title}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {selectedCertificate.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close certificate viewer"
                  onClick={() => setSelectedCertificate(null)}
                  className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Document Area */}
              <div
                className="relative min-h-0 flex-1 overflow-hidden bg-[#020817]"
                onContextMenu={preventContextMenu}
              >
                {selectedCertificate.image ? (
                  <div className="flex h-full items-center justify-center overflow-auto p-4 sm:p-8 lg:p-12">
                    <div className="relative">
                      <Image
                        src={selectedCertificate.image}
                        alt={`${selectedCertificate.title} - Rakshak SecureTech`}
                        width={1800}
                        height={1400}
                        draggable={false}
                        priority
                        className="max-h-[calc(94vh-150px)] w-auto max-w-full select-none object-contain shadow-2xl"
                      />

                      {/* Subtle Brand Watermark */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="rotate-[-24deg] select-none text-4xl font-semibold tracking-[0.35em] text-white/[0.035] sm:text-6xl lg:text-7xl">
                          RAKSHAK
                        </span>
                      </div>
                    </div>
                  </div>
                ) : selectedCertificate.pdf ? (
                  /*
                   * PDF is rendered inside the modal instead of
                   * opening a separate tab.
                   *
                   * Browser PDF controls are controlled by the
                   * browser itself, so complete download prevention
                   * is not technically possible from client-side JS.
                   */
                  <iframe
                    src={`${selectedCertificate.pdf}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title={`${selectedCertificate.title} - Rakshak SecureTech`}
                    className="h-full w-full border-0"
                    onContextMenu={preventContextMenu}
                  />
                ) : null}

                {/* Viewer Protection Overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4">
                  <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 backdrop-blur-md">
                    Rakshak SecureTech · Official Document
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-[#071226]/95 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-slate-600 sm:text-[10px]">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-500/60" />
                  <span>Verified Documentation</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}