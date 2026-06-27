"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
  const phone = "919602105393";

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2">

      {/* AI FLOATING BUBBLE */}
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#071225]/70 px-3 py-2 backdrop-blur-xl">

        {/* animated thinking dots */}
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-400 [animation-delay:-0.2s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-400 [animation-delay:-0.1s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-400" />
        </div>

        <p className="text-[11px] text-slate-300">
          AI Support Online
        </p>

      </div>

      {/* WHATSAPP CORE NODE */}
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >

        {/* soft energy waves */}
        <span className="absolute inset-0 rounded-full bg-green-500/20 blur-md animate-pulse" />

        {/* ring pulse */}
        <span className="absolute inset-0 rounded-full border border-green-400/30 animate-ping" />

        {/* core button (small node) */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] transition active:scale-90">

          <MessageCircle size={16} className="text-white" />

        </div>

      </a>
    </div>
  );
}