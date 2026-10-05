"use client";

import { Input } from "@/components/ui/input";

export function ComposeRecipients() {
  return (
    <div className="space-y-0 border-b">

      <div className="flex items-center gap-3 px-4 py-3">
        <span className="w-14 text-sm text-muted-foreground">
          To
        </span>

        <Input
          placeholder="Recipients"
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <span className="w-14 text-sm text-muted-foreground">
          Cc
        </span>

        <Input
          placeholder="Cc"
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <span className="w-14 text-sm text-muted-foreground">
          Bcc
        </span>

        <Input
          placeholder="Bcc"
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>

    </div>
  );
}