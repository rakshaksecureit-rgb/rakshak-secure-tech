"use client";

import { useContext } from "react";

import { MailContext } from "./MailProvider";

export function useMail() {
  const context = useContext(MailContext);

  if (!context) {
    throw new Error("useMail must be used inside MailProvider");
  }

  return context;
}