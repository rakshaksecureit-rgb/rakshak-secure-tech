"use client";

import { Save, Send, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ComposeAttachmentList } from "./ComposeAttachmentList";
import { ComposeToolbar } from "./ComposeToolbar";

export function ComposeFooter() {
  return (
    <>
      <ComposeAttachmentList />

      <ComposeToolbar />

      <footer className="flex items-center justify-between border-t px-4 py-3">

        <div className="flex gap-2">

          <Button>
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>

          <Button variant="secondary">
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>

        </div>

        <Button
          variant="ghost"
          size="icon"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

      </footer>
    </>
  );
}