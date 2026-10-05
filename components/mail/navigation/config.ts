import {
  Archive,
  Inbox,
  Send,
  Settings,
  ShieldAlert,
  Trash2,
  FileText,
  LucideIcon,
} from "lucide-react";

export interface MailNavigationItem {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
}

export const mailNavigation: MailNavigationItem[] = [
  {
    id: "inbox",
    title: "Inbox",
    href: "/inbox",
    icon: Inbox,
  },
  {
    id: "sent",
    title: "Sent",
    href: "/sent",
    icon: Send,
  },
  {
    id: "drafts",
    title: "Drafts",
    href: "/drafts",
    icon: FileText,
  },
  {
    id: "archive",
    title: "Archive",
    href: "/archive",
    icon: Archive,
  },
  {
    id: "spam",
    title: "Spam",
    href: "/spam",
    icon: ShieldAlert,
  },
  {
    id: "trash",
    title: "Trash",
    href: "/trash",
    icon: Trash2,
  },
  {
    id: "settings",
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];