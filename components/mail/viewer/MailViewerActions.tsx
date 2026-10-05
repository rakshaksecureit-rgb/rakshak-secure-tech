"use client";

import {
  Archive,
  Forward,
  Reply,
  Star,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function MailViewerActions() {
  return (
    <div className="flex items-center gap-2 border-b px-6 py-3">

      <Button
        variant="ghost"
        size="icon"
      >
        <Reply className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
      >
        <Forward className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
      >
        <Archive className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
      >
        <Star className="h-4 w-4" />
      </Button>

    </div>
  );
}