import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, TEAM } from "@/lib/site-data";
import { X } from "lucide-react";

const FILTERS = ["Todos", "Coordenação", "Professores", "Produção", "Administrativo", "Comunicação"];

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
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<(typeof TEAM)[number] | null>(null);
  const list = filter === "Todos" ? TEAM : TEAM.filter((t) => t.area === filter);

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Equipe"
        description="Uma equipe multidisciplinar de artistas, educadores e produtores culturais."
        image={IMG.group}
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
      />

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-10 rounded-full border px-4 text-sm font-medium transition ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <p className="text-muted-foreground">Nenhum profissional encontrado nesta área.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((m) => (
              <article key={m.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[10px] uppercase tracking-widest text-primary">{m.area}</div>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground">{m.name}</h3>
                  <div className="mt-0.5 text-sm text-muted-foreground">{m.role}</div>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{m.bio}</p>
                  <button onClick={() => setSelected(m)} className="mt-4 text-left text-sm font-semibold text-primary hover:underline">
                    Conheça a trajetória →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
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
              <div className="mt-4 text-[10px] uppercase tracking-widest text-primary">{selected.area}</div>
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
