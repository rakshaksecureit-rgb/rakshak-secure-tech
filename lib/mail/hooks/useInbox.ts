"use client";

import { useCallback, useEffect, useState } from "react";

import type { Mail } from "../types";
import { inboxService } from "../services/inbox.service";

export function useInbox() {
  const [mails, setMails] = useState<Mail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadInbox = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await inboxService.getInbox();

      setMails(data);
    } catch (error) {
      console.error(error);

      setError("Unable to load your mailbox.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadInbox();
  }, [loadInbox]);

  return {
    mails,
    loading,
    error,
    refresh: loadInbox,
  };
}