import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, NEWS } from "@/lib/site-data";

const TAGS = ["Todas", "Evento", "Oficina", "Formação", "Ação Social", "Apresentação", "Comunidade", "Institucional"];

// Expand list by repeating to demonstrate pagination
const ALL_NEWS = [
  ...NEWS,
  ...NEWS.map((n) => ({ ...n, slug: n.slug + "-2" })),
  ...NEWS.slice(0, 4).map((n) => ({ ...n, slug: n.slug + "-3" })),
];

const PAGE_SIZE = 6;

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Movimento em Cena" },
      { name: "description", content: "Acompanhe eventos, oficinas, ações e comunicados do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

function Noticias() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Todas");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => ALL_NEWS.filter((n) => (tag === "Todas" || n.tag === tag) && (q === "" || n.title.toLowerCase().includes(q.toLowerCase()))), [q, tag]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <InternalHero
        eyebrow="Comunicação"
        title="Notícias"
        description="Notícias, comunicados e destaques do Movimento em Cena."
        image={IMG.workshop}
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
      />

      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative w-full max-w-sm">
            <span className="sr-only">Buscar notícia</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Buscar notícia..." className="h-11 w-full rounded-full border border-input bg-card pl-9 pr-4 text-sm shadow-sm" />
          </label>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button key={t} onClick={() => { setTag(t); setPage(1); }} className={`h-9 rounded-full border px-3 text-xs font-medium ${tag === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}>{t}</button>
            ))}
          </div>
        </div>

        {pageItems.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">Nenhuma notícia encontrada. Tente outros filtros.</div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((n) => (
              <article key={n.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="block aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{n.tag}</span>
                    <span>{n.date}</span>
                  </div>
                  <h2 className="mt-2 font-display text-base font-semibold text-foreground">
                    <Link to="/noticias/$slug" params={{ slug: n.slug }} className="hover:text-primary">{n.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Ler notícia <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Paginação de notícias" className="mt-10 flex items-center justify-center gap-1">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} aria-label="Página anterior" className="h-10 rounded-md border border-border bg-card px-3 text-sm disabled:opacity-50">Anterior</button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              return (
                <button key={n} onClick={() => setPage(n)} aria-current={n === currentPage ? "page" : undefined} aria-label={`Página ${n}`} className={`h-10 min-w-10 rounded-md border px-3 text-sm ${n === currentPage ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{n}</button>
              );
            })}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} aria-label="Próxima página" className="h-10 rounded-md border border-border bg-card px-3 text-sm disabled:opacity-50">Próxima</button>
          </nav>
        )}
      </Section>
    </div>
  );
}
