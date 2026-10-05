import type { Mail } from "@/lib/mail/types";

interface Props {
  mail: Mail;
}

export function MailViewerBody({ mail }: Props) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">

      <article className="whitespace-pre-wrap text-sm leading-7">
        {mail.body}
      </article>

    </div>
  );
}