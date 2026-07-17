import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { HeroFlourish, DanceOrnament } from "./DanceOrnament";

export type Crumb = { label: string; to?: any };

export function InternalHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-graphite text-primary-foreground">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-graphite/85 to-graphite" />
        </div>
      )}
      {/* Dance-themed decorative flourishes */}
      <HeroFlourish className="pointer-events-none absolute -right-16 -top-10 hidden h-[320px] w-[640px] text-gold/60 md:block" />
      <HeroFlourish className="pointer-events-none absolute -left-24 bottom-[-60px] h-[260px] w-[540px] text-lilac/40" />
      <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute right-6 bottom-6 hidden h-24 w-24 text-gold/50 md:block">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
      </svg>
      <div className="container-mc relative py-14 md:py-20">
        {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
        {eyebrow && (
          <div className="mt-4 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gold" />
            <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
          </div>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">{description}</p>
        )}
        <DanceOrnament variant="flow" className="mt-6 h-4 w-40 text-gold/80" />
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}


export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está em" className="text-xs text-primary-foreground/80">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {c.to ? (
              <Link to={c.to} className="hover:text-primary-foreground underline-offset-4 hover:underline">{c.label}</Link>
            ) : (
              <span className="text-primary-foreground/70">{c.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-mc py-14 md:py-20 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {eyebrow && <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>}
          {title && <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">{title}</h2>}
          {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
