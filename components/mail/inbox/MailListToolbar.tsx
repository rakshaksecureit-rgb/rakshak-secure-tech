"use client";

import {
  Archive,
  RefreshCw,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function MailListToolbar() {
  return (
    <div className="flex h-14 items-center justify-between border-b bg-background px-4">

      <div className="flex items-center gap-2">

        <Checkbox />

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
          <Archive className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

      </div>

    </div>
  );
}