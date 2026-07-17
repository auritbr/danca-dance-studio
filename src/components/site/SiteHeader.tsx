import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSub(null);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background/70 backdrop-blur"
      )}
    >
      <div className="container-mc flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2 min-w-0" aria-label={SITE.fullName}>
          <LogoMark />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-sm font-semibold text-primary">Movimento em Cena</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Ponto de Cultura</div>
          </div>
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            if (!item.children) {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contato"
            className="hidden md:inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Inscreva-se
          </Link>
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav aria-label="Menu móvel" className="container-mc py-4 flex flex-col gap-1">
            {NAV.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = mobileSub === item.label;
              return (
                <div key={item.label} className="rounded-md">
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                    onClick={() => setMobileSub(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="ml-2 border-l border-border pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contato"
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Inscreva-se
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
        <path d="M8 26 C 12 18, 14 14, 20 10 M 20 10 l -3 -1 M 20 10 l -1 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="22" cy="7" r="2" fill="currentColor" />
        <path d="M10 26 Q 16 22 24 24" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
