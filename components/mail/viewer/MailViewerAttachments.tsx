import { Paperclip } from "lucide-react";

import type { MailAttachment } from "@/lib/mail/types";

interface Props {
  attachments: MailAttachment[];
}

export function MailViewerAttachments({
  attachments,
}: Props) {
  if (!attachments.length) {
    return null;
  }

  return (
    <div className="border-t px-6 py-4">

      <h3 className="mb-4 font-medium">
        Attachments
      </h3>

      <div className="space-y-2">

        {attachments.map((attachment) => (
          <div
            key={attachment.id}
            className="flex items-center gap-3 rounded-md border p-3"
          >
            <Paperclip className="h-4 w-4" />

            <div>

              <p className="text-sm font-medium">
                {attachment.fileName}
              </p>

              <p className="text-xs text-muted-foreground">
                {Math.round(attachment.size / 1024)} KB
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}