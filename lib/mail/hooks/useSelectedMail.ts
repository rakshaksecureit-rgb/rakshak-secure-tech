"use client";

import { useState } from "react";
import type { Mail } from "@/lib/mail/types";

export function useSelectedMail(initialMail?: Mail) {
  const [selectedMail, setSelectedMail] = useState<Mail | null>(
    initialMail ?? null
  );

  return {
    selectedMail,
    selectMail: setSelectedMail,
  };
}