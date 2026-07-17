import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InternalHero, Section } from "@/components/site/InternalHero";
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

// Subtle per-area accent styling
function areaAccent(area: string) {
  const a = area.toLowerCase();
  if (a.includes("coorden")) return { ring: "from-primary via-gold to-primary", chip: "bg-primary/10 text-primary border-primary/20" };
  if (a.includes("professor")) return { ring: "from-wine via-lilac to-wine", chip: "bg-lilac/15 text-wine border-wine/20" };
  if (a.includes("produ")) return { ring: "from-graphite via-gold to-graphite", chip: "bg-graphite/10 text-graphite border-graphite/20" };
  if (a.includes("comunic")) return { ring: "from-gold via-primary to-gold", chip: "bg-gold/15 text-graphite border-gold/40" };
  return { ring: "from-primary via-gold to-primary", chip: "bg-primary/10 text-primary border-primary/20" };
}

function Equipe() {
  const [selected, setSelected] = useState<(typeof TEAM)[number] | null>(null);

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Equipe"
        description="Uma equipe multidisciplinar de artistas, educadores e produtores culturais que sustenta cotidianamente o trabalho do Ponto de Cultura."
        image={IMG.group}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => {
            const variant = ornamentForRole(m.role, m.area);
            const accent = areaAccent(m.area);
            return (
              <article
                key={m.name}
                className="group relative flex flex-col rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Outer gradient frame */}
                <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${accent.ring} opacity-40 blur-[1px]`} aria-hidden />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  {/* Top accent stripe */}
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.ring}`} />

                  {/* Photo with cut-corner + decorative overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 88% 100%, 0 100%)" }}
                    />
                    {/* Soft gradient bottom */}
                    <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-graphite/70 to-transparent" />

                    {/* Ornament badge (top-right) */}
                    <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-graphite/40 px-2.5 py-1 backdrop-blur">
                      <DanceOrnament variant={variant} className="h-3 w-14 text-primary-foreground" />
                    </div>

                    {/* Area chip (bottom-left) */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`inline-flex items-center gap-1 rounded-full border ${accent.chip} bg-card/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur`}>
                        {m.area}
                      </span>
                    </div>

                    {/* Decorative background lines behind photo (revealed on hover) */}
                    <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-primary-foreground/20 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.6" />
                      <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>

                  {/* Body */}
                  <div className="relative flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold text-foreground">{m.name}</h3>
                    <div className="mt-0.5 text-sm text-primary">{m.role}</div>
                    <DanceOrnament variant={variant} className="mt-3 h-3 w-16 text-gold" />
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{m.bio}</p>
                    <button
                      onClick={() => setSelected(m)}
                      className="mt-4 self-start text-left text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Conheça a trajetória →
                    </button>
                  </div>
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
