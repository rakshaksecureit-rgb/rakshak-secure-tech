"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { mailNavigation } from "../config/navigation";

interface MailSidebarNavProps {
  collapsed?: boolean;
}

export function MailSidebarNav({
  collapsed = false,
}: MailSidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col gap-1 px-3 py-2"
      aria-label="Mail Navigation"
    >
      {mailNavigation.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center rounded-lg transition-all duration-200",

              collapsed
                ? "justify-center px-2 py-3"
                : "gap-3 px-3 py-2",

              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",

              item.disabled &&
                "pointer-events-none opacity-50"
            )}
          >
            <Icon
              className={cn(
                "h-5 w-5 shrink-0",
                active && "scale-105"
              )}
            />

            {!collapsed && (
              <>
                <span className="flex-1 truncate">
                  {item.title}
                </span>

                {item.badge != null && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold",

                      active
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </Link>
        );
      })}
    </nav>
  );
}