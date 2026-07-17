import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "./InternalHero";

/**
 * Compact breadcrumb card, rendered inside the page container immediately
 * below the internal hero. Follows the pattern requested for news pages.
 */
export function PageBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="container-mc -mt-6 md:-mt-8 relative z-10">
      <nav
        aria-label="Navegação estrutural"
        className="rounded-xl border border-border bg-card px-4 py-2.5 shadow-sm"
      >
        <ol className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs md:text-sm">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5 min-w-0">
                {c.to && !isLast ? (
                  <Link
                    to={c.to}
                    className="text-primary hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "block max-w-[16ch] truncate text-foreground/80 md:max-w-[48ch]"
                        : "text-muted-foreground"
                    }
                    title={isLast ? c.label : undefined}
                  >
                    {c.label}
                  </span>
                )}
                {!isLast && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
