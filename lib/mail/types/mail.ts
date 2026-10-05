import type { MailAddress } from "./address";
import type { MailAttachment } from "./attachment";
import type { MailFolder } from "./folder";
import type { MailLabel } from "./label";

export interface Mail {
  id: string;

  subject: string;

  preview: string;

  body: string;

  from: MailAddress;

  to: MailAddress[];

  cc?: MailAddress[];

  bcc?: MailAddress[];

  date: string;

  folder: MailFolder;

  labels: MailLabel[];

  attachments: MailAttachment[];

  unread: boolean;

  starred: boolean;

  selected?: boolean;

  threadId?: string;
}