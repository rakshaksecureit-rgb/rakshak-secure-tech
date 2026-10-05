export interface MailAttachment {
  id: string;

  fileName: string;

  mimeType: string;

  size: number;

  downloadUrl?: string;

  inline?: boolean;
}