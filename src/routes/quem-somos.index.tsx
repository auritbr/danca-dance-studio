import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { DanceOrnament, HeroFlourish } from "@/components/site/DanceOrnament";
import { IMG } from "@/lib/site-data";
import {
  Sparkles,
  Users,
  HeartHandshake,
  Compass,
  Music,
  Award,
  Heart,
  Palette,
  Target,
  Eye,
  Leaf,
  BookOpen,
  Theater,
  Handshake,
} from "lucide-react";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Movimento em Cena" },
      { name: "description", content: "Conheça a história, a identidade, missão, visão, valores e áreas de atuação do Ponto de Cultura Movimento em Cena." },
      { property: "og:title", content: "Quem Somos — Movimento em Cena" },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const milestones = [
  { year: "2015", text: "Nascemos como coletivo de dança comunitária em bairros periféricos." },
  { year: "2018", text: "Formalizamos o Ponto de Cultura e ampliamos oficinas em escolas." },
  { year: "2021", text: "Estreamos o programa Dança que Transforma, com bolsas para jovens." },
  { year: "2024", text: "Consolidamos parcerias públicas e a mostra anual Palco Aberto." },
  { year: "2026", text: "Uma década de movimento: rede ativa em toda a região." },
];

const values = [
  { icon: HeartHandshake, title: "Acesso à cultura", text: "A dança é direito, não privilégio." },
  { icon: Users, title: "Diversidade", text: "Corpos, histórias e territórios plurais." },
  { icon: Heart, title: "Respeito", text: "Escuta ativa e cuidado em cada encontro." },
  { icon: Sparkles, title: "Inclusão", text: "Acessibilidade e permanência garantidas." },
  { icon: Palette, title: "Criação coletiva", text: "A obra nasce do encontro entre pessoas." },
  { icon: Award, title: "Compromisso social", text: "Impacto real no cotidiano das comunidades." },
  { icon: Music, title: "Valorização da dança", text: "Técnica, pesquisa e memória artística." },
  { icon: Compass, title: "Formação continuada", text: "Trilhas de desenvolvimento para todos." },
];

const areas = [
  { icon: BookOpen, title: "Formação artística", text: "Aulas regulares em diferentes linguagens da dança, com acompanhamento pedagógico." },
  { icon: Theater, title: "Criação e circulação", text: "Espetáculos, mostras e ocupações artísticas em espaços públicos e culturais." },
  { icon: Handshake, title: "Ação comunitária", text: "Oficinas em escolas, centros culturais e associações comunitárias." },
  { icon: Leaf, title: "Formação continuada", text: "Encontros de estudos, residências e trocas com outros grupos e redes." },
];

function QuemSomos() {
  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Quem Somos"
        description="Somos um Ponto de Cultura dedicado a democratizar o acesso à dança, fortalecendo trajetórias artísticas, formação e vida comunitária há uma década."
        image={IMG.group}
      />

      {/* Presentation */}
      <Section eyebrow="Apresentação" title="Uma iniciativa cultural comunitária">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>
            O Movimento em Cena atua há dez anos oferecendo formação em dança, criação artística e ações socioculturais.
            Estruturado como Ponto de Cultura, articula parcerias com escolas, secretarias, coletivos e artistas para
            ampliar o alcance da cultura no território.
          </p>
          <DanceOrnament variant="flow" className="mx-auto mt-6 h-4 w-40 text-primary" />
        </div>
      </Section>

      {/* Story / Timeline */}
      <section className="relative overflow-hidden bg-beige">
        <HeroFlourish className="pointer-events-none absolute -left-16 top-4 h-56 w-[600px] text-primary/10" />
        <div className="container-mc relative py-14 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Nossa história</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Dez anos em movimento</h2>
            <p className="mt-3 text-muted-foreground">Uma trajetória construída em rede, no diálogo com a comunidade e com a cena artística local.</p>
          </div>
          <ol className="relative mx-auto max-w-3xl border-l-2 border-primary/30 pl-6">
            {milestones.map((m) => (
              <li key={m.year} className="mb-8 last:mb-0">
                <span className="absolute -left-[9px] mt-1 grid h-4 w-4 place-items-center rounded-full bg-primary shadow ring-4 ring-beige" aria-hidden />
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-primary">{m.year}</span>
                  <DanceOrnament variant="steps" className="h-3 w-14 text-gold" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Identity: Mission / Vision / Values */}
      <Section eyebrow="Identidade" title="Missão, visão e valores" intro="Os princípios que orientam nossas decisões, práticas e relações.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Missão", text: "Promover o acesso à dança como direito cultural, fortalecendo a formação artística, a criação coletiva e a cidadania." },
            { icon: Eye, title: "Visão", text: "Ser referência em formação em dança de base comunitária, com atuação sustentável e transformadora." },
            { icon: Sparkles, title: "Valores", text: "Diversidade, respeito, inclusão, criação coletiva, compromisso social e valorização das expressões artísticas." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-gold to-primary/40" />
              <DanceOrnament variant="flow" className="pointer-events-none absolute -right-6 -top-4 h-16 w-40 text-primary/10" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values grid */}
      <section className="bg-secondary">
        <div className="container-mc py-14 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">O que nos sustenta</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Nossos valores no cotidiano</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-center font-display text-base font-semibold text-foreground">{title}</div>
                <p className="mt-1 text-center text-xs text-muted-foreground">{text}</p>
                <DanceOrnament variant="flow" className="mx-auto mt-3 h-3 w-16 text-gold/70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-beige">
        <div className="container-mc grid gap-8 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="relative">
            <img src={IMG.workshop} alt="Oficina do Movimento em Cena" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
            <DanceOrnament variant="curtain" className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 text-primary/70" />
            <DanceOrnament variant="spotlight" className="pointer-events-none absolute -right-4 -bottom-4 h-16 w-16 text-gold" />
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Público atendido e metodologia</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Um trabalho plural e continuado</h2>
            <p className="mt-4 text-muted-foreground">
              Atendemos crianças, adolescentes, jovens, pessoas adultas e idosas com uma metodologia que integra técnica,
              pesquisa de movimento, criação coletiva e diálogo com a cultura local.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• Turmas por linguagem e faixa etária</li>
              <li>• Encontros de criação e apresentação</li>
              <li>• Escuta e diálogo permanente com a comunidade</li>
              <li>• Avaliação contínua dos processos formativos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of action */}
      <Section eyebrow="Áreas de atuação" title="Frentes de trabalho">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              <DanceOrnament variant="flow" className="mt-4 h-3 w-16 text-gold" />
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="container-mc pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img src={IMG.group} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-wine via-primary/85 to-graphite/80" />
          <DanceOrnament variant="curtain" className="pointer-events-none absolute -left-4 top-0 h-36 w-36 text-primary-foreground/25" />
          <DanceOrnament variant="spotlight" className="pointer-events-none absolute right-6 top-0 h-24 w-40 text-gold/70" />
          <DanceOrnament variant="flow" className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto h-6 w-[70%] text-primary-foreground/30" />
          <div className="relative grid gap-6 p-8 text-primary-foreground md:grid-cols-12 md:items-center md:p-14">
            <div className="md:col-span-8">
              <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">Trajetória</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Uma trajetória construída em movimento</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Conheça os projetos que transformam nossa experiência, nossos valores e nossa atuação em ações culturais concretas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link to="/projetos" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
                Conheça os projetos
              </Link>
              <Link to="/contato" className="inline-flex h-11 items-center rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
