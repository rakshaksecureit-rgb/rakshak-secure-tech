import type { Mail } from "@/lib/mail/types";

interface Props {
  mail: Mail;
}

export function MailViewerHeader({ mail }: Props) {
  return (
    <header className="border-b px-6 py-5">

      <h1 className="text-2xl font-semibold">
        {mail.subject}
      </h1>

      <div className="mt-5 flex items-start justify-between">

        <div>
          <p className="font-semibold">
            {mail.from.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {mail.from.email}
          </p>
        </div>

        <span className="text-sm text-muted-foreground">
          {mail.date}
        </span>

      </div>

    </header>
  );
}