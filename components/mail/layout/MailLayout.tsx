"use client";

import { ReactNode } from "react";

import { MailSidebar } from "@/components/mail/sidebar";
import { MailHeader } from "@/components/mail/header";
import { ComposeDialog } from "@/components/mail/compose";

import { useMail } from "@/components/mail/providers";

interface MailLayoutProps {
  children: ReactNode;
}

export function MailLayout({
  children,
}: MailLayoutProps) {
  const {
    composeOpen,
    closeCompose,
  } = useMail();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <MailSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <MailHeader />

        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>

      <ComposeDialog
        open={composeOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeCompose();
          }
        }}
      />
    </div>
  );
}