"use client";

import { PenSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useMail } from "@/components/mail/providers";

import { MailSidebarFooter } from "./MailSidebarFooter";
import { MailSidebarNav } from "./MailSidebarNav";

export interface MailSidebarProps {
  /**
   * Future
   */
  collapsed?: boolean;

  className?: string;
}

export function MailSidebar({
  collapsed = false,
  className,
}: MailSidebarProps) {
  const { openCompose } = useMail();

  return (
    <aside
      className={[
        "flex h-full flex-col border-r bg-background transition-all duration-200",
        collapsed ? "w-20" : "w-64",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Brand */}

      <div className="border-b px-6 py-5">
        {!collapsed && (
          <>
            <h1 className="text-lg font-bold tracking-tight">
              RakshakSecure
            </h1>

            <p className="text-sm text-muted-foreground">
              Enterprise Mail
            </p>
          </>
        )}
      </div>

      {/* Compose */}

      <div className="p-4">
        <Button
          className="w-full justify-start gap-2"
          onClick={() => openCompose()}
        >
          <PenSquare className="h-4 w-4" />

          {!collapsed && <span>Compose</span>}
        </Button>
      </div>

      {/* Navigation */}

      <ScrollArea className="flex-1">
        <MailSidebarNav collapsed={collapsed} />
      </ScrollArea>

      {/* Footer */}

      <MailSidebarFooter collapsed={collapsed} />
    </aside>
  );
}