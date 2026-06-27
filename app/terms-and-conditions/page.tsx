// app/terms-and-conditions/page.tsx

"use client";

import TermsHero from "@/components/legal/terms/TermsHero";
import TermsSections from "@/components/legal/terms/TermsSections";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <TermsHero />
      <TermsSections />

    </main>
  );
}