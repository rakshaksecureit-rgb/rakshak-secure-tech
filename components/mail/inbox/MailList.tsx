"use client";

import { Button } from "@/components/ui/button";

import type { Mail } from "@/lib/mail/types";

import { MailEmptyState } from "./MailEmptyState";
import { MailListItem } from "./MailListItem";
import { MailListToolbar } from "./MailListToolbar";

interface MailListProps {
  mails: Mail[];

  loading?: boolean;

  error?: string | null;

  selectedMailId?: string;

  onRefresh?: () => void;

  onSelectMail?: (mail: Mail) => void;

  onToggleStar?: (mail: Mail) => void;
}

export function MailList({
  mails,
  loading = false,
  error = null,
  selectedMailId,
  onRefresh,
  onSelectMail,
  onToggleStar,
}: MailListProps) {
  if (loading) {
    return (
      <section className="flex h-full items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium">
            Loading mailbox...
          </p>

          <p className="text-xs text-muted-foreground">
            Fetching your latest emails.
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-full items-center justify-center">
        <div className="space-y-4 text-center">

          <h3 className="text-lg font-semibold">
            Unable to load mailbox
          </h3>

          <p className="text-sm text-muted-foreground">
            {error}
          </p>

          {onRefresh && (
            <Button onClick={onRefresh}>
              Retry
            </Button>
          )}

        </div>
      </section>
    );
  }

  if (mails.length === 0) {
    return <MailEmptyState />;
  }

  return (
    <section className="flex h-full flex-col overflow-hidden">

      <MailListToolbar />

      <div className="flex-1 overflow-y-auto">

        {mails.map((mail) => (
          <MailListItem
            key={mail.id}
            mail={mail}
            selected={selectedMailId === mail.id}
            onSelect={onSelectMail}
            onToggleStar={onToggleStar}
          />
        ))}

      </div>

    </section>
  );
}