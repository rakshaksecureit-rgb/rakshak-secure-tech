"use client";

import { Bell, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MailHeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
      >
        <Bell className="h-4 w-4" />
      </Button>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
        RS
      </div>
    </div>
  );
}