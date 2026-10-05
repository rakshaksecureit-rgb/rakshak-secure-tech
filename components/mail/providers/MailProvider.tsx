"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { MailItem } from "@/lib/mail/types";
import { inboxService } from "@/lib/mail/services/inbox.service";

export type ComposeMode =
  | "new"
  | "reply"
  | "replyAll"
  | "forward";

interface MailContextValue {
  // Mail State
  mails: MailItem[];
  selectedMail: MailItem | null;

  loading: boolean;
  error: string | null;

  // Compose State
  composeOpen: boolean;
  composeMode: ComposeMode;

  // Mail Actions
  selectMail: (mail: MailItem) => void;
  refresh: () => Promise<void>;

  // Compose Actions
  openCompose: (mode?: ComposeMode) => void;
  closeCompose: () => void;
  toggleCompose: () => void;
}

export const MailContext =
  createContext<MailContextValue | null>(null);

interface Props {
  children: ReactNode;
}

export function MailProvider({ children }: Props) {
  // ==========================
  // Mail State
  // ==========================

  const [mails, setMails] = useState<MailItem[]>([]);

  const [selectedMail, setSelectedMail] =
    useState<MailItem | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  // ==========================
  // Compose State
  // ==========================

  const [composeOpen, setComposeOpen] =
    useState(false);

  const [composeMode, setComposeMode] =
    useState<ComposeMode>("new");

  // ==========================
  // Mail Actions
  // ==========================

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const inbox = await inboxService.getInbox();

      setMails(inbox);

      setSelectedMail((previous) => {
        if (previous) return previous;

        return inbox.length > 0 ? inbox[0] : null;
      });
    } catch {
      setError("Unable to load mailbox.");
    } finally {
      setLoading(false);
    }
  }, []);

  const selectMail = useCallback((mail: MailItem) => {
    setSelectedMail(mail);
  }, []);

  // ==========================
  // Compose Actions
  // ==========================

  const openCompose = useCallback(
    (mode: ComposeMode = "new") => {
      setComposeMode(mode);
      setComposeOpen(true);
    },
    []
  );

  const closeCompose = useCallback(() => {
    setComposeOpen(false);
  }, []);

  const toggleCompose = useCallback(() => {
    setComposeOpen((previous) => !previous);
  }, []);

  // ==========================
  // Initial Load
  // ==========================

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ==========================
  // Context Value
  // ==========================

  const value = useMemo(
    () => ({
      mails,
      selectedMail,

      loading,
      error,

      composeOpen,
      composeMode,

      selectMail,

      refresh,

      openCompose,
      closeCompose,
      toggleCompose,
    }),
    [
      mails,
      selectedMail,

      loading,
      error,

      composeOpen,
      composeMode,

      selectMail,

      refresh,

      openCompose,
      closeCompose,
      toggleCompose,
    ]
  );

  return (
    <MailContext.Provider value={value}>
      {children}
    </MailContext.Provider>
  );
}