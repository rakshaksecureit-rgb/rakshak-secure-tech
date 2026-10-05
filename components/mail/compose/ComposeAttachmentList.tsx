"use client";

import { Paperclip, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ComposeAttachmentList() {
  const attachments: {
    id: string;
    name: string;
    size: string;
  }[] = [];

  if (!attachments.length) {
    return null;
  }

  return (
    <div className="border-t px-4 py-3">

      <h3 className="mb-3 text-sm font-medium">
        Attachments
      </h3>

      <div className="space-y-2">

        {attachments.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-md border p-2"
          >
            <div className="flex items-center gap-2">

              <Paperclip className="h-4 w-4" />

              <div>

                <p className="text-sm font-medium">
                  {file.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {file.size}
                </p>

              </div>

            </div>

            <Button
              variant="ghost"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>

          </div>
        ))}

      </div>

    </div>
  );
}