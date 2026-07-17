import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Calendar, HeartHandshake, Music, Compass, DoorOpen, Layers, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DanceOrnament } from "@/components/site/DanceOrnament";
import { IMG, MODALITIES, PROJECTS, NEWS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Movimento em Cena — Ponto de Cultura de dança" },
      { name: "description", content: "Formação em dança, criação artística e ações comunitárias que aproximam pessoas da arte." },
      { property: "og:title", content: "Movimento em Cena — Ponto de Cultura de dança" },
      { property: "og:image", content: IMG.hero },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Modalities />
      <FeaturedProjects />
      <Impact />
      <NewsPreview />
      <GalleryCTA />
      <FinalCTA />
    </div>
  );
}

/* ------------------------------- HERO ---------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={IMG.rehearsal}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
        />
        {/* studio-door light shaft */}
        <div className="absolute inset-y-0 left-1/2 hidden w-[46%] -translate-x-4 md:block">
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-graphite/95 via-graphite/40 to-transparent" />
          <div className="absolute inset-y-0 left-[38%] w-px bg-gold/60 shadow-[0_0_28px_6px_hsl(var(--gold)/0.35)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/30 md:from-graphite/95 md:via-graphite/60 md:to-transparent" />
      </div>

      <div className="container-mc relative grid gap-8 py-20 md:min-h-[560px] md:grid-cols-12 md:items-center md:py-28">
        <div className="md:col-span-7 lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground backdrop-blur">
            <DoorOpen className="h-3.5 w-3.5 text-gold" /> Ponto de Cultura
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-primary-foreground md:text-5xl lg:text-6xl">
            Abra espaço para <span className="italic text-gold">novos movimentos</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Um lugar onde a dança se transforma em formação, expressão, encontro e novas possibilidades para toda a comunidade.
          </p>
          <DanceOrnament variant="flow" className="mt-6 h-3 w-40 text-gold" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
              Conheça nosso trabalho <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projetos" className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              Explore os projetos
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
            <Sparkles className="h-4 w-4 text-gold" />
            Entre, descubra e encontre novas formas de se expressar.
          </p>
        </div>

        {/* Studio-door visual insert */}
        <div className="relative hidden md:col-span-5 md:block lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] border border-primary-foreground/15 bg-gradient-to-b from-primary-foreground/5 to-transparent backdrop-blur-[2px]" />
            <div className="absolute inset-6 overflow-hidden rounded-[1.5rem] border border-gold/40 shadow-2xl">
              <img src={IMG.stage} alt="Entrada de um estúdio de dança iluminado" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
            </div>
            <DanceOrnament variant="spotlight" className="absolute -top-4 left-10 h-16 w-24 text-gold" />
            <DanceOrnament variant="curtain" className="absolute -bottom-4 right-6 h-16 w-16 text-primary-foreground/70" />
            <DanceOrnament variant="steps" className="absolute -left-6 top-1/2 h-4 w-24 -rotate-90 text-gold/80" />
          </div>
        </div>
      </div>

      {/* smooth transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />

      <style>{`
        @keyframes hero-zoom { from { transform: scale(1.06); } to { transform: scale(1); } }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[hero-zoom_18s_ease-out_forwards\\] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------- ABOUT SECTION ---------------------------- */
function AboutSection() {
  const highlights = [
    { icon: <Sparkles className="h-4 w-4" />, title: "Formação artística acessível", text: "Aulas e oficinas abertas à comunidade." },
    { icon: <HeartHandshake className="h-4 w-4" />, title: "Criação e expressão coletiva", text: "Processos que valorizam a autoria dos participantes." },
    { icon: <MapPin className="h-4 w-4" />, title: "Cultura presente na comunidade", text: "Ações em praças, escolas e centros culturais." },
  ];
  return (
    <section className="relative overflow-hidden">
      <DanceOrnament variant="flow" className="pointer-events-none absolute left-[-4rem] top-24 hidden h-24 w-[40rem] text-primary/10 md:block" />
      <div className="container-mc relative py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Sobre o Ponto de Cultura</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Dança que aproxima, <span className="text-primary">forma</span> e transforma
            </h2>
            <p className="mt-5 text-muted-foreground">
              O Movimento em Cena promove formação artística, criação coletiva e circulação cultural por meio da dança,
              ampliando o acesso à arte e fortalecendo vínculos entre pessoas, territórios e comunidade.
            </p>
            <Link to="/quem-somos" className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Conheça quem somos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Editorial image collage */}
          <div className="relative md:col-span-7">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4">
              <img src={IMG.ensemble} alt="Ensaio coletivo" loading="lazy"
                className="col-span-4 row-span-6 h-full w-full rounded-3xl object-cover shadow-lg" />
              <img src={IMG.workshop} alt="Aula em andamento" loading="lazy"
                className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-md" />
              <img src={IMG.community} alt="Ação comunitária" loading="lazy"
                className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-md" />
            </div>
            <DanceOrnament variant="spotlight" className="pointer-events-none absolute -top-6 -right-4 h-16 w-24 text-gold" />
            <DanceOrnament variant="steps" className="pointer-events-none absolute -bottom-4 left-4 h-4 w-40 text-primary/60" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => (
            <div key={h.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-gold to-primary/30" />
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">{h.icon}</span>
                <h3 className="font-display text-sm font-semibold text-foreground">{h.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              <DanceOrnament
                variant={i === 0 ? "barre" : i === 1 ? "flow" : "steps"}
                className="pointer-events-none absolute -right-2 -bottom-2 h-8 w-24 text-primary/10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MODALITIES ----------------------------- */
function Modalities() {
  const flourish = ["barre", "flow", "steps", "rhythm", "spotlight", "curtain"] as const;
  return (
    <section className="relative bg-secondary">
      <DanceOrnament variant="flow" className="pointer-events-none absolute inset-x-0 top-10 mx-auto hidden h-6 w-[60%] text-primary/10 md:block" />
      <div className="container-mc py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Modalidades</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Encontre seu movimento</h2>
          <p className="mt-3 text-muted-foreground">
            Conheça as modalidades que fazem parte das nossas ações formativas e descubra novas possibilidades de expressão por meio da dança.
          </p>
        </div>

        {/* Mobile: horizontal snap-carousel. md+: grid */}
        <div
          role="region"
          aria-label="Modalidades de dança"
          className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {MODALITIES.map((m, i) => (
            <article
              key={m.slug}
              className="group relative flex min-h-[420px] w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl focus-within:shadow-xl md:w-auto md:min-h-[440px]"
            >
              <div className="absolute inset-0">
                <img
                  src={m.image}
                  alt={`Aula de ${m.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/55 to-graphite/10" />
              </div>

              <div className="relative flex h-full flex-col p-5 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-foreground/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {m.level}
                  </span>
                  <DanceOrnament variant={flourish[i % flourish.length]} className="h-6 w-16 text-gold" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{m.name}</h3>

                <div className="mt-auto space-y-3">
                  <p className="text-sm text-primary-foreground/85">{m.desc}</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px] uppercase tracking-widest text-primary-foreground/70">
                    <div>
                      <div className="text-primary-foreground/60">Público</div>
                      <div className="mt-0.5 text-xs font-medium normal-case tracking-normal text-primary-foreground">{m.age}</div>
                    </div>
                    <div>
                      <div className="text-primary-foreground/60">Nível</div>
                      <div className="mt-0.5 text-xs font-medium normal-case tracking-normal text-primary-foreground">{m.level}</div>
                    </div>
                  </div>
                  <Link
                    to="/projetos"
                    aria-label={`Conheça a modalidade ${m.name}`}
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-primary-foreground px-4 text-xs font-semibold text-primary hover:bg-primary-foreground/90"
                  >
                    Conheça <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground md:hidden">Deslize para o lado para ver mais →</p>
      </div>
    </section>
  );
}

/* ---------------------------- FEATURED PROJECTS ------------------------ */
function FeaturedProjects() {
  const ornaments = ["steps", "flow", "spotlight"] as const;
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Projetos em destaque</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Projetos que colocam a cultura em movimento</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <article key={p.slug} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative aspect-[16/11] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{p.category}</span>
              <DanceOrnament variant={ornaments[i % ornaments.length]} className="pointer-events-none absolute bottom-3 right-3 h-8 w-24 text-gold opacity-80" />
            </div>
            <div className="relative flex flex-1 flex-col p-6">
              <span aria-hidden className="absolute inset-x-6 -top-0.5 h-[2px] bg-gradient-to-r from-primary via-gold to-transparent" />
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-4 text-xs text-muted-foreground">Público: {p.audience}</div>
              <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Conheça o projeto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- IMPACT -------------------------------- */
function Impact() {
  const items = [
    { icon: <HeartHandshake className="h-5 w-5" />, title: "Acesso gratuito à cultura", desc: "Ações formativas abertas à comunidade, com foco em democratizar a dança." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Desenvolvimento artístico", desc: "Formação continuada em técnica, criação e circulação." },
    { icon: <Users className="h-5 w-5" />, title: "Fortalecimento de vínculos", desc: "Encontros que aproximam gerações, famílias e territórios." },
    { icon: <Compass className="h-5 w-5" />, title: "Ocupação de espaços públicos", desc: "Apresentações e vivências em praças, escolas e centros culturais." },
  ];
  return (
    <section className="relative overflow-hidden bg-graphite text-primary-foreground">
      <img src={IMG.community} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-graphite/85 to-wine/70" />
      <DanceOrnament variant="flow" className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto h-6 w-[70%] text-gold/40" />
      <div className="container-mc relative grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">Impacto Social</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Quando a dança chega, novas possibilidades começam</h2>
          <p className="mt-4 max-w-lg text-primary-foreground/85">
            Nosso trabalho articula formação artística e ações sociais para fortalecer trajetórias e ampliar o alcance da cultura.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/15 text-gold">{i.icon}</div>
              <h3 className="mt-3 font-display text-base font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- NEWS ---------------------------------- */
function NewsPreview() {
  const [main, ...rest] = NEWS;
  const secondary = rest.slice(0, 3);
  return (
    <section className="bg-beige">
      <div className="container-mc py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Notícias</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Notícias e acontecimentos</h2>
          </div>
          <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver todas as notícias →</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Link to="/noticias/$slug" params={{ slug: main.slug }} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={main.image} alt={main.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{main.tag}</span>
                <span>{main.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground group-hover:text-primary">{main.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{main.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Ler notícia <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            {secondary.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm">
                <img src={n.image} alt={n.title} className="h-24 w-32 shrink-0 rounded-xl object-cover" loading="lazy" />
                <div className="min-w-0 py-1">
                  <div className="flex items-center gap-2 text-[10px] uppercase text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{n.tag}</span>
                    <span>{n.date}</span>
                  </div>
                  <h3 className="mt-1 font-display text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- GALLERY CTA ------------------------------ */
function GalleryCTA() {
  const years = ["2026", "2025", "2024", "2023"];
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary to-background" />
      <DanceOrnament variant="flow" className="pointer-events-none absolute -left-10 top-10 hidden h-20 w-[50rem] text-primary/10 md:block" />
      <div className="container-mc py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Galeria</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Memórias que continuam em movimento</h2>
            <p className="mt-4 text-muted-foreground">
              Aulas, encontros, apresentações e processos criativos registrados ao longo da nossa trajetória.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {years.map((y, i) => (
                <span key={y} className="inline-flex items-center gap-2">
                  <span className="font-display text-base font-semibold text-primary">{y}</span>
                  {i < years.length - 1 && <span className="text-gold">·</span>}
                </span>
              ))}
            </div>
            <Link to="/galeria" className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Conheça nossa galeria <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative md:col-span-7">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
              <img src={IMG.stage} alt="Apresentação em palco" loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-xl" />
              <img src={IMG.duo} alt="Duo em cena" loading="lazy"
                className="absolute -left-4 bottom-6 h-40 w-40 rounded-2xl border-4 border-background object-cover shadow-lg sm:h-48 sm:w-48" />
              <img src={IMG.backstage} alt="Bastidor de apresentação" loading="lazy"
                className="absolute -right-2 -top-4 h-36 w-28 rotate-3 rounded-2xl border-4 border-background object-cover shadow-lg sm:h-44 sm:w-36" />
              <DanceOrnament variant="steps" className="pointer-events-none absolute -bottom-6 right-10 h-5 w-40 text-primary/60" />
              <DanceOrnament variant="spotlight" className="pointer-events-none absolute -top-6 left-16 h-16 w-24 text-gold/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem]">
        <img src={IMG.workshop} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-primary/70" />
        <DanceOrnament variant="curtain" className="pointer-events-none absolute -left-4 top-0 h-40 w-40 text-primary-foreground/25" />
        <DanceOrnament variant="curtain" className="pointer-events-none absolute -right-4 top-0 h-40 w-40 -scale-x-100 text-primary-foreground/25" />
        <DanceOrnament variant="spotlight" className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-24 w-40 text-gold/60" />

        <div className="relative grid gap-8 p-8 text-primary-foreground md:grid-cols-12 md:items-center md:p-14">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] backdrop-blur">
              <Music className="h-3.5 w-3.5 text-gold" /> Próximo movimento
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              Seu próximo movimento pode começar aqui
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/85">
              Participe das atividades, conheça nossos projetos ou construa novas parcerias com o Movimento em Cena.
            </p>
            <DanceOrnament variant="flow" className="mt-5 h-3 w-40 text-gold" />
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link to="/contato" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
              Quero participar <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contato" className="inline-flex h-12 items-center rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              Fale com nossa equipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
