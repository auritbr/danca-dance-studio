import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG } from "@/lib/site-data";

const YEARS = ["2026", "2025", "2024", "2023", "2022"];
const FILTERS = ["Todos", "Oficinas", "Apresentações", "Projetos", "Bastidores", "Ações Comunitárias"];

const PHOTOS_BASE = [
  { src: IMG.workshop, cat: "Oficinas", event: "Oficina de dança contemporânea" },
  { src: IMG.rehearsal, cat: "Oficinas", event: "Ensaio coletivo" },
  { src: IMG.stage, cat: "Apresentações", event: "Mostra Movimento em Cena" },
  { src: IMG.duo, cat: "Apresentações", event: "Apresentação em duo" },
  { src: IMG.group, cat: "Projetos", event: "Encontro de projeto" },
  { src: IMG.kids, cat: "Projetos", event: "Aula com crianças" },
  { src: IMG.backstage, cat: "Bastidores", event: "Bastidores da mostra" },
  { src: IMG.community, cat: "Ações Comunitárias", event: "Ação em praça pública" },
  { src: IMG.seniors, cat: "Ações Comunitárias", event: "Grupo intergeracional" },
  { src: IMG.contemporary, cat: "Apresentações", event: "Cena contemporânea" },
  { src: IMG.jazz, cat: "Oficinas", event: "Oficina de jazz" },
  { src: IMG.urban, cat: "Projetos", event: "Grupo de danças urbanas" },
];

export const Route = createFileRoute("/galeria/$ano")({
  loader: ({ params }) => ({ ano: params.ano }),
  head: ({ params }) => ({
    meta: [
      { title: `Galeria ${params.ano} — Movimento em Cena` },
      { name: "description", content: `Registros fotográficos das atividades, apresentações e ações realizadas em ${params.ano}.` },
      { property: "og:url", content: `/galeria/${params.ano}` },
    ],
    links: [{ rel: "canonical", href: `/galeria/${params.ano}` }],
  }),
  component: GaleriaAno,
});

function GaleriaAno() {
  const { ano } = Route.useLoaderData();
  const [filter, setFilter] = useState("Todos");
  const [open, setOpen] = useState<number | null>(null);
  const photos = PHOTOS_BASE.filter((p) => filter === "Todos" || p.cat === filter);

  return (
    <div>
      <InternalHero
        eyebrow="Registros"
        title={`Galeria ${ano}`}
        description={`Registros das oficinas, apresentações, encontros formativos e ações culturais realizadas ao longo de ${ano}.`}
        image={IMG.stage}
        crumbs={[{ label: "Início", to: "/" }, { label: "Galeria", to: "/galeria" }, { label: ano }]}
      />

      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`h-9 rounded-full border px-3 text-xs font-medium ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}>{f}</button>
            ))}
          </div>
          <label className="text-sm">
            <span className="mr-2 text-muted-foreground">Trocar ano:</span>
            <select
              value={ano}
              onChange={(e) => { window.location.href = `/galeria/${e.target.value}`; }}
              className="h-10 rounded-md border border-input bg-card px-3 text-sm"
              aria-label="Selecionar ano da galeria"
            >
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </label>
        </div>

        {photos.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">Nenhum registro encontrado para este filtro.</div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <figure key={i} className="overflow-hidden rounded-xl">
                <button onClick={() => setOpen(i)} className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-ring">
                  <img src={p.src} alt={p.event} className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </button>
                <figcaption className="p-3 text-xs">
                  <span className="text-primary">{p.cat}</span>
                  <span className="mt-0.5 block text-muted-foreground">{p.event} · {ano}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link to="/galeria" className="inline-flex h-11 items-center rounded-full border border-primary px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Voltar para todos os anos</Link>
        </div>
      </Section>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Visualização de imagem" className="fixed inset-0 z-50 bg-black/90">
          <button onClick={() => setOpen(null)} aria-label="Fechar" className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><X className="h-5 w-5" /></button>
          <button onClick={() => setOpen((v) => (v! - 1 + photos.length) % photos.length)} aria-label="Imagem anterior" className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={() => setOpen((v) => (v! + 1) % photos.length)} aria-label="Próxima imagem" className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><ChevronRight className="h-5 w-5" /></button>
          <div className="flex h-full items-center justify-center p-6">
            <figure className="max-h-full max-w-5xl">
              <img src={photos[open].src} alt={photos[open].event} className="max-h-[80vh] w-auto rounded-lg" />
              <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">{photos[open].event} · {photos[open].cat} · Imagem {open + 1} de {photos.length}</figcaption>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
}
