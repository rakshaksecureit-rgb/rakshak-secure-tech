"use client";

import { Minus, X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ComposeHeaderProps {
  onClose: () => void;
}

export function ComposeHeader({
  onClose,
}: ComposeHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">

      <h2 className="text-sm font-semibold">
        New Message
      </h2>

      <div className="flex items-center gap-1">

        <Button
          variant="ghost"
          size="icon"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

      </div>

    </header>
  );
}