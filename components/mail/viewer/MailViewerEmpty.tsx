import { MailOpen } from "lucide-react";

export function MailViewerEmpty() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">

      <MailOpen className="mb-4 h-12 w-12 text-muted-foreground" />

      <h2 className="text-lg font-semibold">
        No email selected
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Select an email to start reading.
      </p>

    </div>
  );
}