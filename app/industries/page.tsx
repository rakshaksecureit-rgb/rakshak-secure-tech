import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesOverview from "@/components/industries/IndustriesOverview";
import IndustryShowcase from "@/components/industries/IndustryShowcase";
import IndustryGrid from "@/components/industries/IndustryGrid";
import DeploymentModels from "@/components/industries/DeploymentModels";
import IndustriesMetrics from "@/components/industries/IndustriesMetrics";
import WhyIndustriesChooseRakshak from "@/components/industries/WhyIndustriesChooseRakshak";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <main className="relative overflow-hidden bg-[#071226] text-white w-full">

      {/* Background Effects (mobile optimized blur scale) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-30%] top-[-20%] h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] rounded-full bg-cyan-500/5 blur-[120px] sm:blur-[180px]" />
        <div className="absolute right-[-30%] bottom-[-20%] h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] rounded-full bg-blue-500/5 blur-[120px] sm:blur-[180px]" />
      </div>

      {/* Content Wrapper (mobile spacing control) */}
      <div className="relative z-10 flex flex-col w-full">

        <section className="w-full">
          <IndustriesHero />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <IndustriesOverview />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <IndustryShowcase />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <IndustryGrid />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <DeploymentModels />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <IndustriesMetrics />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-0">
          <WhyIndustriesChooseRakshak />
        </section>

        <section className="w-full">
          <IndustriesCTA />
        </section>

      </div>
    </main>
  );
}