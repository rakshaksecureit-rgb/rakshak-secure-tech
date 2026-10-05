export interface MailItem {
  id: string;

  from: string;

  subject: string;

  preview: string;

  date: string;

  unread: boolean;

  starred: boolean;

  hasAttachment: boolean;
}