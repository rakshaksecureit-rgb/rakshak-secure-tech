import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CapabilityGrid from "@/components/about/CapabilityGrid";
import IndustriesGrid from "@/components/about/IndustriesGrid";
import Certifications from "@/components/about/Certifications";
import WhyRakshak from "@/components/about/WhyRakshak";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://rakshaksecuretech.com"),

  title: "About Rakshak SecureTech | AI Security & Surveillance Company",

  description:
    "Learn about Rakshak SecureTech, an AI-powered security and surveillance technology company delivering intelligent video analytics, facial recognition, command & control, perimeter security, access control, and enterprise defense solutions.",

  keywords: [
    "Rakshak SecureTech",
    "AI Security Company",
    "About Rakshak",
    "AI Surveillance",
    "Video Analytics",
    "Facial Recognition",
    "Enterprise Security",
    "Smart Security",
    "Defense Technology",
    "Perimeter Intrusion Detection",
    "Access Control",
    "Command Center",
    "Critical Infrastructure Security",
    "Security Solutions India",
    "AI Surveillance Company",
  ],

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "About Rakshak SecureTech",
    description:
      "Discover Rakshak SecureTech's vision, mission, leadership, AI innovation and enterprise-grade security technologies.",

    url: "https://rakshaksecuretech.com/about",

    siteName: "Rakshak SecureTech",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rakshak SecureTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Rakshak SecureTech",
    description:
      "AI-powered surveillance, command & control, enterprise security and intelligent defense technologies.",

    images: ["/og-image.jpg"],
  },

  category: "Technology",

  authors: [
    {
      name: "Rakshak SecureTech",
      url: "https://rakshaksecuretech.com",
    },
  ],

  creator: "Rakshak SecureTech",

  publisher: "Rakshak SecureTech",
};

export default function AboutPage() {
  return (
    <>
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rakshak SecureTech",
            url: "https://rakshaksecuretech.com",
            logo: "https://rakshaksecuretech.com/logo.png",
            description:
              "AI-powered surveillance, enterprise security, command & control, facial recognition and intelligent defense solutions.",
            sameAs: [
              "https://www.linkedin.com/",
              "https://www.youtube.com/",
              "https://x.com/",
            ],
          }),
        }}
      />

      <main className="relative overflow-hidden bg-[#071226] text-white">
        {/* Global Background */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

          <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[180px]" />
        </div>

        <AboutHero />

        <CompanyOverview />

        <MissionVision />

        <LeadershipTeam />

        <CapabilityGrid />

        <IndustriesGrid />

        <Certifications />

        <WhyRakshak />

        <AboutCTA />
      </main>
    </>
  );
}