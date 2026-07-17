import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, PROJECTS, MODALITIES } from "@/lib/site-data";
import { ArrowRight, Calendar, Users, MapPin, Target, ClipboardList, Sparkles } from "lucide-react";

const DETAILS: Record<string, {
  objectives: string[];
  justification: string;
  methodology: string;
  modalities?: string[];
  activities?: string[];
  schedule: string[];
  results: string[];
  indicators: string[];
  places: string;
  extra?: React.ReactNode;
}> = {
  "danca-que-transforma": {
    objectives: [
      "Ampliar o acesso à formação em dança para crianças, adolescentes e jovens",
      "Fortalecer o desenvolvimento artístico e a autoestima dos participantes",
      "Estimular a criação coletiva e a apresentação pública das produções",
    ],
    justification: "A dança é uma ferramenta potente de formação, expressão e pertencimento, especialmente em contextos onde o acesso à cultura ainda é desigual.",
    methodology: "Turmas regulares por faixa etária e linguagem, com encontros semanais, laboratórios de criação e apresentações periódicas.",
    modalities: ["Balé", "Jazz", "Dança Contemporânea", "Danças Urbanas"],
    schedule: ["Fevereiro — abertura das turmas", "Maio — encontro formativo", "Agosto — laboratório de criação", "Novembro — mostra de encerramento"],
    results: ["Ampliação do número de participantes atendidos", "Novos processos criativos concluídos", "Fortalecimento de vínculos comunitários"],
    indicators: ["Número de participantes atendidos", "Frequência média nas atividades", "Número de apresentações públicas"],
    places: "Sede do Ponto de Cultura e escolas parceiras",
  },
  "corpo-ritmo-e-movimento": {
    objectives: [
      "Promover a consciência corporal por meio da dança",
      "Estimular a criatividade e a expressão artística intergeracional",
      "Ampliar o repertório rítmico e cultural dos participantes",
    ],
    justification: "As oficinas atendem a demanda por atividades formativas que integrem gerações e valorizem o corpo como território de aprendizado.",
    methodology: "Encontros semanais que articulam preparação corporal, improvisação, musicalidade e criação coletiva.",
    activities: ["Preparação corporal", "Criação coreográfica", "Percepção rítmica", "Experimentação de movimentos", "Rodas de conversa", "Apresentações internas"],
    schedule: ["Março — turmas de preparação corporal", "Junho — laboratório de criação", "Setembro — apresentações internas", "Dezembro — encontro intergeracional"],
    results: ["Participantes com maior consciência corporal", "Produção de pequenas cenas coletivas", "Diálogo intergeracional fortalecido"],
    indicators: ["Adesão e permanência nas turmas", "Registro das apresentações internas", "Avaliações qualitativas dos participantes"],
    places: "Sede do Ponto de Cultura e centros comunitários parceiros",
  },
  "palco-aberto": {
    objectives: [
      "Ampliar a circulação de espetáculos e artistas locais",
      "Ocupar espaços públicos com apresentações artísticas",
      "Fortalecer intercâmbios entre grupos e coletivos de dança",
    ],
    justification: "A circulação artística é fundamental para o desenvolvimento profissional dos artistas e para aproximar a comunidade da produção cultural.",
    methodology: "Programação regular de apresentações, mostras e intercâmbios em teatros, praças e centros culturais.",
    schedule: ["Janeiro — abertura da temporada", "Abril — mostra Palco Aberto", "Agosto — intercâmbio com grupos parceiros", "Novembro — apresentações comunitárias"],
    results: ["Novas apresentações públicas realizadas", "Novos grupos apresentados", "Ampliação de público"],
    indicators: ["Número de apresentações", "Público estimado", "Grupos participantes"],
    places: "Teatros, praças e centros culturais da cidade",
    extra: (
      <Section eyebrow="Agenda" title="Próximas apresentações">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { date: "10 abr", title: "Mostra Palco Aberto", place: "Teatro Municipal" },
            { date: "17 mai", title: "Ocupação Cênica na Praça Central", place: "Praça Central" },
            { date: "22 jun", title: "Intercâmbio com grupos convidados", place: "Centro Cultural do Bairro" },
          ].map((e) => (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="text-[10px] uppercase tracking-widest text-primary">{e.date}</div>
              <h3 className="mt-1 font-display text-base font-semibold text-foreground">{e.title}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{e.place}</div>
            </article>
          ))}
        </div>
      </Section>
    ),
  },
};

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Movimento em Cena` },
        { name: "description", content: p.summary },
        { property: "og:title", content: p.title },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/projetos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const d = DETAILS[project.slug];
  return (
    <div>
      <InternalHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.image}
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: project.title }]}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-4">
          <Meta icon={<Calendar className="h-4 w-4" />} label="Período" value={project.period} />
          <Meta icon={<Users className="h-4 w-4" />} label="Público" value={project.audience} />
          <Meta icon={<MapPin className="h-4 w-4" />} label="Locais" value={d.places} />
          <Meta icon={<Sparkles className="h-4 w-4" />} label="Status" value={project.status} />
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="container-mc grid gap-10 py-14 md:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground"><Target className="h-5 w-5 text-primary" /> Objetivos</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {d.objectives.map((o) => <li key={o} className="flex gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{o}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground"><ClipboardList className="h-5 w-5 text-primary" /> Justificativa e metodologia</h2>
            <p className="mt-4 text-sm text-muted-foreground">{d.justification}</p>
            <p className="mt-3 text-sm text-muted-foreground">{d.methodology}</p>
          </div>
        </div>
      </section>

      {d.modalities && (
        <Section eyebrow="Modalidades" title="Linguagens desenvolvidas">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.modalities.map((m) => {
              const mod = MODALITIES.find((x) => x.name === m);
              return (
                <div key={m} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  {mod && <img src={mod.image} alt={m} className="aspect-[4/3] w-full object-cover" loading="lazy" />}
                  <div className="p-4 font-display text-sm font-semibold text-foreground">{m}</div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {d.activities && (
        <Section eyebrow="Grade de atividades" title="O que acontece nas oficinas">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.activities.map((a) => (
              <div key={a} className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground">{a}</div>
            ))}
          </div>
        </Section>
      )}

      <section className="bg-beige">
        <div className="container-mc grid gap-10 py-14 md:grid-cols-3">
          <Card title="Cronograma" items={d.schedule} />
          <Card title="Resultados esperados" items={d.results} />
          <Card title="Indicadores" items={d.indicators} />
        </div>
      </section>

      {d.extra}

      <Section eyebrow="Registros" title="Galeria do projeto">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[IMG.workshop, IMG.rehearsal, IMG.duo, IMG.group, IMG.backstage, IMG.stage, IMG.community, IMG.kids].map((src, i) => (
            <img key={i} src={src} alt={`Registro do projeto ${i + 1}`} className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
          ))}
        </div>
      </Section>


      <section className="bg-primary text-primary-foreground">
        <div className="container-mc py-14 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Quer participar deste projeto?</h2>
          <p className="mt-3 text-primary-foreground/85">Entre em contato para saber mais sobre inscrições, parcerias e apoios.</p>
          <Link to="/contato" className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
            Fale com a equipe <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">{icon}{label}</div>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => <li key={it} className="flex gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{it}</li>)}
      </ul>
    </div>
  );
}
