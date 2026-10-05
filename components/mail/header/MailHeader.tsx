"use client";

import { MailHeaderActions } from "./MailHeaderActions";
import { MailSearch } from "./MailSearch";

export function MailHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <MailSearch />

      <MailHeaderActions />
    </header>
  );
}