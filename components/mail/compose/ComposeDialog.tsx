"use client";

import { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { ComposeEditor } from "./ComposeEditor";
import { ComposeFooter } from "./ComposeFooter";
import { ComposeHeader } from "./ComposeHeader";
import { ComposeRecipients } from "./ComposeRecipients";
import { ComposeSubject } from "./ComposeSubject";

export type ComposeMode =
  | "new"
  | "reply"
  | "replyAll"
  | "forward";

export interface ComposeDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  /**
   * Future Features
   * ----------------
   * Reply
   * Reply All
   * Forward
   * Draft
   * Autosave
   * AI Compose
   */

  mode?: ComposeMode;

  draftId?: string;

  initialTo?: string[];

  initialCc?: string[];

  initialBcc?: string[];

  initialSubject?: string;

  initialBody?: string;
}

export function ComposeDialog({
  open,
  onOpenChange,

  mode = "new",

  draftId,

  initialTo,

  initialCc,

  initialBcc,

  initialSubject,

  initialBody,
}: ComposeDialogProps) {
  /**
   * ==========================================
   * Keyboard Shortcuts
   * ==========================================
   *
   * ESC
   * Close Compose
   *
   * Ctrl/Cmd + Enter
   * Send Mail (placeholder)
   */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      /**
       * ESC
       */

      if (event.key === "Escape") {
        event.preventDefault();

        onOpenChange(false);

        return;
      }

      /**
       * Ctrl/Cmd + Enter
       */

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter"
      ) {
        event.preventDefault();

        /**
         * Future:
         *
         * sendMail()
         */
        console.log("Send mail");
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onOpenChange]);

  /**
   * ==========================================
   * Future
   * ==========================================
   *
   * Load Draft
   * Load Reply
   * Load Forward
   * Load AI Suggestions
   */

  useEffect(() => {
    if (!open) return;

    switch (mode) {
      case "reply":
        break;

      case "replyAll":
        break;

      case "forward":
        break;

      case "new":
      default:
        break;
    }

    void draftId;
    void initialTo;
    void initialCc;
    void initialBcc;
    void initialSubject;
    void initialBody;
  }, [
    open,
    mode,
    draftId,
    initialTo,
    initialCc,
    initialBcc,
    initialSubject,
    initialBody,
  ]);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          flex
          h-[85vh]
          w-[95vw]
          max-h-[900px]
          max-w-5xl
          flex-col
          gap-0
          overflow-hidden
          rounded-xl
          p-0
        "
      >
        {/* Accessibility */}

        <DialogTitle className="sr-only">
          Compose Email
        </DialogTitle>

        <DialogDescription className="sr-only">
          Compose and send an email.
        </DialogDescription>

        {/* Header */}

        <ComposeHeader
          mode={mode}
          onClose={() => onOpenChange(false)}
        />

        {/* Recipients */}

        <ComposeRecipients
          initialTo={initialTo}
          initialCc={initialCc}
          initialBcc={initialBcc}
        />

        {/* Subject */}

        <ComposeSubject
          initialSubject={initialSubject}
        />

        {/* Editor */}

        <ComposeEditor
          initialValue={initialBody}
        />

        {/* Footer */}

        <ComposeFooter mode={mode} />
      </DialogContent>
    </Dialog>
  );
}