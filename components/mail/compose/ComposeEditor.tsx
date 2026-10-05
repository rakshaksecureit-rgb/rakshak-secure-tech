"use client";

import { Textarea } from "@/components/ui/textarea";

export function ComposeEditor() {
  return (
    <div className="flex-1 overflow-hidden">
      <Textarea
        placeholder="Write your message..."
        className="h-full resize-none rounded-none border-0 p-5 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}