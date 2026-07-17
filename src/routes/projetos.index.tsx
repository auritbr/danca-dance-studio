import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, PROJECTS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

const FILTERS = ["Todos", "Formação", "Apresentação", "Inclusão", "Ação Comunitária", "Em andamento", "Concluídos"];

const ALL = [
  ...PROJECTS.map((p) => ({ ...p })),
  { slug: "circulacao-cultural", title: "Circulação Cultural", category: "Ação Comunitária", status: "Concluídos", period: "2022 — 2023", audience: "Comunidade em geral", image: IMG.community, summary: "Programa de ocupação artística em praças e centros culturais do território." },
  { slug: "danca-nas-escolas", title: "Dança nas Escolas", category: "Formação", status: "Em andamento", period: "2025 — 2026", audience: "Estudantes do ensino fundamental", image: IMG.kids, summary: "Aulas de dança integradas ao contraturno escolar em unidades públicas parceiras." },
  { slug: "cena-que-inclui", title: "Cena que Inclui", category: "Inclusão", status: "Em andamento", period: "2024 — 2026", audience: "Pessoas idosas e grupos intergeracionais", image: IMG.seniors, summary: "Ações de inclusão pela dança para pessoas idosas e coletivos intergeracionais." },
];

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Movimento em Cena" },
      { name: "description", content: "Conheça os projetos de formação, criação e ação comunitária do Ponto de Cultura." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

function Projetos() {
  const [f, setF] = useState("Todos");
  const list = ALL.filter((p) => f === "Todos" || p.category === f || p.status === f);

  return (
    <div>
      <InternalHero
        eyebrow="Programas e ações"
        title="Projetos"
        description="Formação, criação artística e ações comunitárias que colocam a cultura em movimento."
        image={IMG.workshop}
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
      />

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((x) => (
            <button key={x} onClick={() => setF(x)} className={`h-10 rounded-full border px-4 text-sm font-medium transition ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}>{x}</button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">Nenhum projeto encontrado.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{p.category}</span>
                    <span className="rounded-full bg-primary-foreground/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{p.status}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-3 text-xs text-muted-foreground">Público: {p.audience}</div>
                  <div className="text-xs text-muted-foreground">Período: {p.period}</div>
                  {PROJECTS.some((pr) => pr.slug === p.slug) ? (
                    <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Conheça o projeto <ArrowRight className="h-4 w-4" /></Link>
                  ) : (
                    <span className="mt-4 text-sm text-muted-foreground">Projeto encerrado</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
