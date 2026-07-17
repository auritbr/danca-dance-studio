import { createFileRoute } from "@tanstack/react-router";
import { InternalHero } from "@/components/site/InternalHero";
import { GalleryYearView } from "@/components/site/GalleryYearView";
import { IMG } from "@/lib/site-data";

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
  return (
    <div>
      <InternalHero
        eyebrow="Registros"
        title={`Galeria ${ano}`}
        description={`Registros das oficinas, apresentações, encontros formativos e ações culturais realizadas ao longo de ${ano}.`}
        image={IMG.stage}
      />
      <GalleryYearView year={ano} />
    </div>
  );
}

