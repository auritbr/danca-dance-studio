import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, TESTIMONIALS } from "@/lib/site-data";

const TIMELINE = [
  { year: "2016", title: "Início das primeiras oficinas", text: "Nasce o grupo com oficinas gratuitas para crianças e jovens em um espaço cedido pela comunidade." },
  { year: "2018", title: "Ampliação das modalidades", text: "Novas linguagens são incorporadas ao repertório formativo, ampliando o alcance das ações." },
  { year: "2020", title: "Atividades em formato remoto", text: "Encontros online e materiais audiovisuais garantem a continuidade das atividades durante a pandemia." },
  { year: "2022", title: "Retomada das apresentações", text: "Volta gradual das aulas presenciais e da circulação artística com protocolos e cuidado coletivo." },
  { year: "2024", title: "Reconhecimento como Ponto de Cultura", text: "Certificação institucional consolida o trabalho e amplia possibilidades de parcerias." },
  { year: "2026", title: "Expansão das ações formativas", text: "Novos projetos, novos territórios atendidos e ampliação da equipe pedagógica." },
];

export const Route = createFileRoute("/quem-somos/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Movimento em Cena" },
      { name: "description", content: "Trajetória, marcos e conquistas do Ponto de Cultura Movimento em Cena." },
      { property: "og:url", content: "/quem-somos/historia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/historia" }],
  }),
  component: Historia,
});

function Historia() {
  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Nossa História"
        description="Uma trajetória construída por muitas mãos, corpos e territórios."
        image={IMG.rehearsal}
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Nossa História" }]}
      />

      <Section eyebrow="Origem" title="De um espaço cedido a um Ponto de Cultura">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>
            O Movimento em Cena nasce em 2016, a partir do desejo de artistas e educadores de oferecer formação em dança
            a crianças e jovens do território. Em uma sala cedida, começaram as primeiras aulas — e, com elas, uma rede
            de trocas que segue crescendo até hoje.
          </p>
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="container-mc py-14 md:py-20">
          <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-3xl">Linha do tempo</h2>
          <ol className="mx-auto mt-10 max-w-3xl space-y-6">
            {TIMELINE.map((t, i) => (
              <li key={t.year} className="relative rounded-2xl border border-border bg-card p-6 pl-8 shadow-sm">
                <span className="absolute left-3 top-6 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                <div className="font-display text-sm font-semibold uppercase tracking-widest text-primary">{t.year}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section eyebrow="Registros" title="Fotografias históricas">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[IMG.workshop, IMG.rehearsal, IMG.stage, IMG.community, IMG.duo, IMG.backstage, IMG.group, IMG.kids].map((src, i) => (
            <img key={i} src={src} alt={`Registro histórico ${i + 1}`} className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
          ))}
        </div>
      </Section>

      <section className="bg-beige">
        <div className="container-mc grid gap-6 py-14 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="font-display text-base text-foreground">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.image} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
