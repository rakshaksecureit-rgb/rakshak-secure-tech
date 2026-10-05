import type { ReactNode } from "react";

import { MailLayout } from "@/components/mail/layout";
import { MailProvider } from "@/components/mail/providers";

interface LayoutProps {
  children: ReactNode;
}

export default function MailRouteLayout({
  children,
}: LayoutProps) {
  return (
    <MailProvider>
      <MailLayout>
        {children}
      </MailLayout>
    </MailProvider>
  );
}