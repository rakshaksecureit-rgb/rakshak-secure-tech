export interface MailItem {
  id: string;

  from: string;
  fromEmail: string;

  subject: string;
  preview: string;
  body: string;

  date: string;

  unread: boolean;
  starred: boolean;
 hasAttachment: boolean;
}