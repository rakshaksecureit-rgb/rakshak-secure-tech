"use client";

import {
  Bold,
  Italic,
  Underline,
  Link2,
  Smile,
  Paperclip,
  Image,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function ComposeToolbar() {
  return (
    <div className="flex items-center gap-1 border-t border-b px-3 py-2">

      <Button variant="ghost" size="icon">
        <Bold className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Italic className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Underline className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Link2 className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Paperclip className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Image className="h-4 w-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <Smile className="h-4 w-4" />
      </Button>

    </div>
  );
}