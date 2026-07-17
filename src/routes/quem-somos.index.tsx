import { createFileRoute, Link } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG } from "@/lib/site-data";
import { Sparkles, Users, HeartHandshake, Compass, Music, Award, Heart, Palette } from "lucide-react";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Movimento em Cena" },
      { name: "description", content: "Conheça o Ponto de Cultura Movimento em Cena: missão, visão, valores e áreas de atuação." },
      { property: "og:title", content: "Quem Somos — Movimento em Cena" },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  const values = [
    { icon: <HeartHandshake className="h-5 w-5" />, title: "Acesso à cultura" },
    { icon: <Users className="h-5 w-5" />, title: "Diversidade" },
    { icon: <Heart className="h-5 w-5" />, title: "Respeito" },
    { icon: <Sparkles className="h-5 w-5" />, title: "Inclusão" },
    { icon: <Palette className="h-5 w-5" />, title: "Criação coletiva" },
    { icon: <Award className="h-5 w-5" />, title: "Compromisso social" },
    { icon: <Music className="h-5 w-5" />, title: "Valorização da dança" },
    { icon: <Compass className="h-5 w-5" />, title: "Formação continuada" },
  ];
  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Quem Somos"
        description="Somos um Ponto de Cultura dedicado a democratizar o acesso à dança e fortalecer trajetórias artísticas e comunitárias."
        image={IMG.group}
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
      />

      <Section eyebrow="Apresentação" title="Uma iniciativa cultural comunitária">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>
            O Movimento em Cena atua há dez anos oferecendo formação em dança, criação artística e ações socioculturais.
            Estruturado como Ponto de Cultura, articula parcerias com escolas, secretarias, coletivos e artistas para
            ampliar o alcance da cultura no território.
          </p>
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="container-mc grid gap-6 py-14 md:grid-cols-3">
          {[
            { title: "Missão", text: "Promover o acesso à dança como direito cultural, fortalecendo a formação artística, a criação coletiva e a cidadania." },
            { title: "Visão", text: "Ser reconhecido como uma referência em formação em dança de base comunitária, com atuação sustentável e transformadora." },
            { title: "Valores", text: "Diversidade, respeito, inclusão, criação coletiva, compromisso social e valorização das expressões artísticas." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section eyebrow="Nossos valores" title="O que sustenta nosso trabalho">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">{v.icon}</div>
              <div className="mt-3 font-medium text-foreground">{v.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Áreas de atuação" title="Frentes de trabalho">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Formação artística", text: "Aulas regulares em diferentes linguagens da dança, com acompanhamento pedagógico." },
            { title: "Criação e circulação", text: "Espetáculos, mostras e ocupações artísticas em espaços públicos e culturais." },
            { title: "Ação comunitária", text: "Oficinas em escolas, centros culturais e associações comunitárias." },
            { title: "Formação continuada", text: "Encontros de estudos, residências e trocas com outros grupos e redes." },
          ].map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-beige">
        <div className="container-mc grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <img src={IMG.workshop} alt="Oficina do Movimento em Cena" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
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

      <Section eyebrow="Parceiros e apoiadores" title="Redes que fortalecem o trabalho" intro="Contamos com uma rede de parcerias públicas e privadas que viabilizam nossas ações.">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Secretaria de Cultura", "Instituto Cena Viva", "Fundação Passo", "Rede Cultura Comunitária", "Teatro Municipal", "Escolas Parceiras"].map((p) => (
            <div key={p} className="rounded-xl border border-border bg-card px-5 py-3 font-display text-sm text-muted-foreground">{p}</div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projetos" className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossos projetos
          </Link>
        </div>
      </Section>
    </div>
  );
}
