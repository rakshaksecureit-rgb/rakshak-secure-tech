import type { MailAddress } from "./address";

export interface ComposeMail {
  to: MailAddress[];

  cc: MailAddress[];

  bcc: MailAddress[];

  subject: string;

  body: string;
}