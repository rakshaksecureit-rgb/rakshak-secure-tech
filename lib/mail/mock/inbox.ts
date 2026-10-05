import type { Mail } from "../types";

export const inboxMock: Mail[] = [
  {
    id: "1",

    subject: "Welcome to RakshakSecure Mail",

    preview:
      "Your enterprise mailbox has been created successfully.",

    body:
      "Welcome to RakshakSecure Mail.\n\nThis mailbox is ready to use.\n\nThanks,\nRakshakSecure Team",

    from: {
      name: "OpenAI",
      email: "team@openai.com",
    },

    to: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
    ],

    cc: [],

    bcc: [],

    date: "10:20 AM",

    folder: "inbox",

    labels: [
      {
        id: "welcome",
        name: "Welcome",
      },
    ],

    attachments: [],

    unread: true,

    starred: true,
  },

  {
    id: "2",

    subject: "Security Alert",

    preview:
      "A new login was detected.",

    body:
      "A new login was detected from a new device.",

    from: {
      name: "GitHub",
      email: "noreply@github.com",
    },

    to: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
    ],

    cc: [],

    bcc: [],

    date: "Yesterday",

    folder: "inbox",

    labels: [],

    attachments: [
      {
        id: "1",

        fileName: "security-report.pdf",

        mimeType: "application/pdf",

        size: 352000,
      },
    ],

    unread: false,

    starred: false,
  },
];