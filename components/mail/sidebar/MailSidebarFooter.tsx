"use client";

import Link from "next/link";

import {
  CircleHelp,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface MailSidebarFooterProps {
  collapsed?: boolean;
}

export function MailSidebarFooter({
  collapsed = false,
}: MailSidebarFooterProps) {
  return (
    <footer className="border-t p-3">

      <div className="space-y-1">

        <Link
          href="/settings"
          className={cn(
            "flex items-center rounded-lg text-sm font-medium transition-colors",
            collapsed
              ? "justify-center px-2 py-3"
              : "gap-3 px-3 py-2",
            "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />

          {!collapsed && (
            <span>Settings</span>
          )}
        </Link>

        <Link
          href="/help"
          className={cn(
            "flex items-center rounded-lg text-sm font-medium transition-colors",
            collapsed
              ? "justify-center px-2 py-3"
              : "gap-3 px-3 py-2",
            "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <CircleHelp className="h-5 w-5 shrink-0" />

          {!collapsed && (
            <span>Help</span>
          )}
        </Link>

      </div>

    </footer>
  );
}