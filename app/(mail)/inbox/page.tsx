"use client";

import { useState } from "react";

import { MailContent } from "@/components/mail/layout";
import { MailList } from "@/components/mail/inbox";
import { MailViewer } from "@/components/mail/viewer";
import { ComposeDialog } from "@/components/mail/compose";

import { useInbox } from "@/lib/mail/hooks/useInbox";

export default function InboxPage() {
  const { mails, loading, error, refresh } = useInbox();

  const [composeOpen, setComposeOpen] = useState(false);

  return (
    <>
      <MailContent>
        <div className="flex h-full">

          <div className="w-[420px] border-r">
            <MailList
              mails={mails}
              loading={loading}
              error={error}
              onRefresh={refresh}
            />
          </div>

          <div className="flex-1">
            <MailViewer />
          </div>

        </div>
      </MailContent>

      <ComposeDialog
        open={composeOpen}
        onOpenChange={setComposeOpen}
      />
    </>
  );
}