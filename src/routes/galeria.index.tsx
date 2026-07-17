import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

const YEARS = [
  { year: "2026", cover: IMG.workshop, count: 8 },
  { year: "2025", cover: IMG.rehearsal, count: 12 },
  { year: "2024", cover: IMG.stage, count: 10 },
  { year: "2023", cover: IMG.community, count: 9 },
  { year: "2022", cover: IMG.duo, count: 6 },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Movimento em Cena" },
      { name: "description", content: "Registros fotográficos das atividades, apresentações e ações do Ponto de Cultura, organizados por ano." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <div>
      <InternalHero
        eyebrow="Registros"
        title="Galeria"
        description="Explore os registros fotográficos das ações, apresentações e encontros do Movimento em Cena."
        image={IMG.stage}
        crumbs={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
      />

      <Section eyebrow="Selecione um ano" title="Escolha um ano">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {YEARS.map((y) => (
            <Link key={y.year} to="/galeria/$ano" params={{ ano: y.year }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={y.cover} alt={`Capa da galeria ${y.year}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                  <div className="font-display text-3xl font-bold">{y.year}</div>
                  <div className="text-xs text-primary-foreground/80">{y.count} álbuns fotográficos</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-sm font-semibold text-foreground">Ver registros</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
