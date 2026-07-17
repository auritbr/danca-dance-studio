import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs";
import { IMG, TEAM } from "@/lib/site-data";
import { X } from "lucide-react";
import { DanceOrnament, ornamentForRole } from "@/components/site/DanceOrnament";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Movimento em Cena" },
      { name: "description", content: "Conheça a equipe de coordenação, professores, produção e comunicação do Movimento em Cena." },
      { property: "og:url", content: "/quem-somos/equipe" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
  component: Equipe,
});

function Equipe() {
  const [selected, setSelected] = useState<(typeof TEAM)[number] | null>(null);

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Equipe"
        description="Uma equipe multidisciplinar de artistas, educadores e produtores culturais."
        image={IMG.group}
      />
      <PageBreadcrumbs items={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => {
            const variant = ornamentForRole(m.role, m.area);
            return (
              <article
                key={m.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Gold accent stripe */}
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-gold to-primary/40" />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                  {/* Corner ornament */}
                  <DanceOrnament
                    variant={variant}
                    className="pointer-events-none absolute right-2 top-2 h-6 w-16 text-gold drop-shadow transition-transform duration-500 group-hover:translate-x-[-2px]"
                  />
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="relative flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
                    <span>{m.area}</span>
                    <DanceOrnament variant={variant} className="h-3 w-10 text-primary/60" />
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground">{m.name}</h3>
                  <div className="mt-0.5 text-sm text-muted-foreground">{m.role}</div>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{m.bio}</p>
                  <button
                    onClick={() => setSelected(m)}
                    className="mt-4 text-left text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Conheça a trajetória →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {selected && (
        <div role="dialog" aria-modal="true" aria-label={selected.name} className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card p-6 shadow-2xl">
              <button onClick={() => setSelected(null)} aria-label="Fechar" className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent">
                <X className="h-5 w-5" />
              </button>
              <img src={selected.image} alt={selected.name} className="aspect-[4/3] w-full rounded-xl object-cover" />
              <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
                <span>{selected.area}</span>
                <DanceOrnament variant={ornamentForRole(selected.role, selected.area)} className="h-3 w-12 text-primary/60" />
              </div>
              <h2 className="mt-1 font-display text-xl font-semibold text-foreground">{selected.name}</h2>
              <p className="text-sm text-muted-foreground">{selected.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{selected.bio}</p>
              <div className="mt-4 grid gap-2 text-sm">
                <div><span className="font-medium text-foreground">Formação:</span> <span className="text-muted-foreground">Graduação e cursos livres na área da dança e educação.</span></div>
                <div><span className="font-medium text-foreground">Experiências:</span> <span className="text-muted-foreground">Projetos formativos, apresentações e articulação comunitária.</span></div>
                <div><span className="font-medium text-foreground">Projetos:</span> <span className="text-muted-foreground">Dança que Transforma, Corpo, Ritmo e Movimento e Palco Aberto.</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
