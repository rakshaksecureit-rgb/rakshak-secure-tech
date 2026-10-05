import { Inbox } from "lucide-react";

export function MailEmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
      <Inbox className="h-10 w-10" />

      <h3 className="text-lg font-semibold">
        No emails found
      </h3>

      <p className="text-sm">
        Your mailbox is empty.
      </p>
    </div>
  );
}