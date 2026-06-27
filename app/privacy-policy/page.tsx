import PrivacyHero from "@/components/legal/privacy/PrivacyHero";
import PrivacySections from "@/components/legal/privacy/PrivacySections";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071226] text-white">

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <PrivacyHero />

      <PrivacySections />

    </main>
  );
}