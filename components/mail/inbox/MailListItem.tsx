"use client";

import { Paperclip, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import type { Mail } from "@/lib/mail/types";

interface MailListItemProps {
  mail: Mail;
  selected?: boolean;
  onSelect?: (mail: Mail) => void;
  onToggleStar?: (mail: Mail) => void;
}

export function MailListItem({
  mail,
  selected = false,
  onSelect,
  onToggleStar,
}: MailListItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(mail)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.(mail);
        }
      }}
      className={cn(
        "group flex cursor-pointer items-start gap-4 border-b px-4 py-3 text-left transition-colors outline-none",
        "hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "bg-accent"
          : mail.unread
            ? "bg-muted/30"
            : "bg-background"
      )}
    >
      <button
        type="button"
        aria-label={
          mail.starred ? "Remove Star" : "Add Star"
        }
        onClick={(event) => {
          event.stopPropagation();
          onToggleStar?.(mail);
        }}
        className="mt-0.5 shrink-0 rounded-sm p-1 hover:bg-muted"
      >
        <Star
          className={cn(
            "h-4 w-4 transition-colors",
            mail.starred
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground group-hover:text-foreground"
          )}
        />
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <h4
              className={cn(
                "truncate text-sm",
                mail.unread
                  ? "font-semibold"
                  : "font-medium"
              )}
            >
              {mail.from.name}
            </h4>

            {mail.labels.map((label) => (
              <span
                key={label.id}
                className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium"
              >
                {label.name}
              </span>
            ))}
          </div>

          <span
            className={cn(
              "shrink-0 text-xs",
              mail.unread
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {mail.date}
          </span>
        </div>

        <p
          className={cn(
            "mt-1 truncate text-sm",
            mail.unread && "font-medium"
          )}
        >
          {mail.subject}
        </p>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="truncate text-sm text-muted-foreground">
            {mail.preview}
          </p>

          {mail.attachments.length > 0 && (
            <Paperclip className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
        </div>
      </div>
    </div>
  );
}