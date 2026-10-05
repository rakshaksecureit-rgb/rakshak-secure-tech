"use client";

import type { Mail } from "@/lib/mail/types";

import { MailViewerActions } from "./MailViewerActions";
import { MailViewerAttachments } from "./MailViewerAttachments";
import { MailViewerBody } from "./MailViewerBody";
import { MailViewerEmpty } from "./MailViewerEmpty";
import { MailViewerHeader } from "./MailViewerHeader";

interface MailViewerProps {
  mail: Mail | null;
}

export function MailViewer({ mail }: MailViewerProps) {
  if (!mail) {
    return <MailViewerEmpty />;
  }

  return (
    <section className="flex h-full flex-col bg-background">

      <MailViewerHeader mail={mail} />

      <MailViewerActions />

      <MailViewerBody mail={mail} />

      <MailViewerAttachments attachments={mail.attachments} />

    </section>
  );
}