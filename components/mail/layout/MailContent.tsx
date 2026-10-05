import { ReactNode } from "react";

interface MailContentProps {
  children: ReactNode;
}

export function MailContent({ children }: MailContentProps) {
  return (
    <div className="h-full overflow-y-auto bg-muted/20">
      {children}
    </div>
  );
}