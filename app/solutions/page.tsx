import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "AI Security Solutions | Rakshak SecureTech",
  description:
    "Explore AI-powered surveillance, facial recognition, ANPR, drone detection, command & control, perimeter intrusion detection, access control, and enterprise security systems from Rakshak SecureTech.",

  keywords: [
    "AI Surveillance",
    "Facial Recognition",
    "Video Analytics",
    "Access Control",
    "ANPR",
    "Drone Detection",
    "Perimeter Security",
    "Command Center",
    "Smart City Security",
    "Enterprise Security",
    "Defense Technology",
    "Rakshak SecureTech",
  ],

  alternates: {
    canonical: "https://rakshaksecuretech.com/solutions",
  },

  openGraph: {
    title: "AI Security Solutions | Rakshak SecureTech",
    description:
      "Enterprise AI-powered surveillance and intelligent security solutions.",
    url: "https://rakshaksecuretech.com/solutions",
    siteName: "Rakshak SecureTech",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Security Solutions | Rakshak SecureTech",
    description:
      "Enterprise AI-powered surveillance and intelligent security solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SolutionsClient />;
}