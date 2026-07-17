import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs";
import { GalleryYearView } from "@/components/site/GalleryYearView";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/galeria/")({
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
      />
      <PageBreadcrumbs items={[{ label: "Início", to: "/" }, { label: "Galeria" }]} />
      <GalleryYearView year="2026" />
    </div>
  );
}
