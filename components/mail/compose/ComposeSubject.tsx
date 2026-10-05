"use client";

import { Input } from "@/components/ui/input";

export function ComposeSubject() {
  return (
    <div className="border-b px-4 py-3">

      <Input
        placeholder="Subject"
        className="border-0 shadow-none focus-visible:ring-0"
      />

    </div>
  );
}