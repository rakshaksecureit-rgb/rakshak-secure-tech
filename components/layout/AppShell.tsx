"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPortal =
    pathname.startsWith("/login") ||
    pathname.startsWith("/portal") ||
    pathname.startsWith("/dashboard");

  return (
    <>
      {!isPortal && <Header />}

      <main className="flex-1">{children}</main>

      {!isPortal && <Footer />}

      {!isPortal && <WhatsappFloat />}
    </>
  );
}