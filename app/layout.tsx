import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rakshaksecuretech.com"),

  title: {
    default:
      "Rakshak SecureTech | AI Powered Security & Surveillance Solutions",
    template: "%s | Rakshak SecureTech",
  },

  description:
    "Rakshak SecureTech delivers AI-powered surveillance, facial recognition, command & control centers, perimeter intrusion detection, access control, drone detection, ANPR and enterprise security solutions for governments, enterprises and critical infrastructure.",

  applicationName: "Rakshak SecureTech",

  keywords: [
    "AI Security",
    "AI Surveillance",
    "Video Analytics",
    "Facial Recognition",
    "Enterprise Security",
    "Government Security",
    "Command Center",
    "Smart Surveillance",
    "Access Control",
    "Perimeter Intrusion Detection",
    "Drone Detection",
    "ANPR",
    "Critical Infrastructure Security",
    "Computer Vision",
    "Threat Intelligence",
    "Security Solutions",
    "Cyber Physical Security",
    "Defense Technology",
    "Rakshak SecureTech",
  ],

  authors: [
    {
      name: "Rakshak SecureTech",
      url: "https://rakshaksecuretech.com",
    },
  ],

  creator: "Rakshak SecureTech",

  publisher: "Rakshak SecureTech",

  category: "Technology",

  alternates: {
    canonical: "/",
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
    title:
      "Rakshak SecureTech | AI Powered Security & Surveillance Solutions",

    description:
      "Enterprise AI-powered surveillance, facial recognition, command centers, access control and intelligent security solutions.",

    url: "https://rakshaksecuretech.com",

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

    title:
      "Rakshak SecureTech | AI Powered Security & Surveillance Solutions",

    description:
      "Enterprise AI-powered surveillance, facial recognition, command centers and intelligent security systems.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-[#070B18] text-white antialiased">

        {/* Structured Data */}
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
                "AI-powered surveillance, intelligent security, command & control, facial recognition and enterprise protection systems.",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.youtube.com/",
                "https://x.com/",
              ],
            }),
          }}
        />

        {/* GLOBAL BACKGROUND GRID */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        {/* LEFT GLOW */}
        <div className="fixed -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        {/* RIGHT GLOW */}
        <div className="fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* APP SHELL */}
        <div className="relative z-10 flex min-h-screen flex-col">

          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

        <WhatsappFloat />

      </body>
    </html>
  );
}