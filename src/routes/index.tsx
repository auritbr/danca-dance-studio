import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Calendar, MapPin, HeartHandshake, Music, Compass, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IMG, MODALITIES, PROJECTS, NEWS, EVENTS, TESTIMONIALS } from "@/lib/site-data";

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
      <Indicators />
      <AboutSection />
      <Modalities />
      <FeaturedProjects />
      <Impact />
      <Agenda />
      <NewsPreview />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-wine/70 to-graphite/90" />
      </div>
      <div className="container-mc relative py-20 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Ponto de Cultura
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl">
          Movimento que transforma histórias
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
          Dança, formação cultural e oportunidades para fortalecer pessoas, ampliar repertórios e aproximar a comunidade da arte.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/quem-somos" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
            Conheça nosso trabalho <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projetos" className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
            Veja os projetos
          </Link>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80">
          <Sparkles className="h-4 w-4 text-gold" />
          Arte, formação e cidadania por meio da dança.
        </p>
      </div>
    </section>
  );
}

function Indicators() {
  const items = [
    { icon: <Award className="h-5 w-5" />, value: "10", label: "anos de atuação" },
    { icon: <Users className="h-5 w-5" />, value: "300+", label: "participantes atendidos" },
    { icon: <Music className="h-5 w-5" />, value: "20", label: "apresentações realizadas" },
    { icon: <Compass className="h-5 w-5" />, value: "6", label: "modalidades de dança" },
  ];
  return (
    <section className="border-y border-border bg-beige">
      <div className="container-mc grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">{it.icon}</div>
            <div className="min-w-0">
              <div className="font-display text-2xl font-bold text-primary">{it.value}</div>
              <div className="text-xs text-muted-foreground">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const diff = [
    { title: "Formação acessível", desc: "Aulas gratuitas e turmas plurais em diferentes linguagens da dança." },
    { title: "Valorização de talentos", desc: "Apoio à criação, à circulação e ao desenvolvimento artístico." },
    { title: "Atuação comunitária", desc: "Ações culturais em espaços públicos, escolas e territórios da cidade." },
  ];
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img src={IMG.ensemble} alt="Ensaio coletivo do Movimento em Cena" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
          <img src={IMG.duo} alt="Duo em apresentação" className="absolute -bottom-8 -left-4 hidden aspect-square w-40 rounded-xl border-4 border-background object-cover shadow-lg md:block" loading="lazy" />
          <img src={IMG.backstage} alt="Bastidor de apresentação" className="absolute -right-4 top-6 hidden aspect-square w-40 rounded-xl border-4 border-background object-cover shadow-lg md:block" loading="lazy" />
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Sobre o Ponto de Cultura</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-4xl">
            Dança como expressão, formação e transformação
          </h2>
          <p className="mt-5 text-muted-foreground">
            O Movimento em Cena desenvolve ações de formação, criação e circulação artística, promovendo o acesso à dança e
            fortalecendo vínculos entre cultura, educação e comunidade.
          </p>
          <ul className="mt-6 space-y-3">
            {diff.map((d) => (
              <li key={d.title} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-6 shrink-0 rounded-full bg-gold" />
                <div><div className="font-medium text-foreground">{d.title}</div><div className="text-sm text-muted-foreground">{d.desc}</div></div>
              </li>
            ))}
          </ul>
          <Link to="/quem-somos/historia" className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Conheça nossa história <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Modalities() {
  return (
    <section className="bg-secondary">
      <div className="container-mc py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Modalidades</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Encontre seu movimento</h2>
          <p className="mt-3 text-muted-foreground">Conheça algumas das modalidades desenvolvidas em nossas oficinas e atividades formativas.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODALITIES.map((m) => (
            <article key={m.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={m.image} alt={`Aula de ${m.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-graphite/70 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-primary-foreground/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{m.level}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                <div className="mt-3 text-xs text-muted-foreground">Faixa etária: {m.age}</div>
                <Link to="/projetos" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Conheça a modalidade <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Projetos em destaque</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Projetos que colocam a cultura em movimento</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{p.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
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

function Impact() {
  const items = [
    { icon: <HeartHandshake className="h-5 w-5" />, title: "Acesso gratuito à cultura", desc: "Ações formativas abertas à comunidade, com foco em democratizar a dança." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Desenvolvimento artístico", desc: "Formação continuada em técnica, criação e circulação." },
    { icon: <Users className="h-5 w-5" />, title: "Fortalecimento de vínculos", desc: "Encontros que aproximam gerações, famílias e territórios." },
    { icon: <MapPin className="h-5 w-5" />, title: "Ocupação de espaços públicos", desc: "Apresentações e vivências em praças, escolas e centros culturais." },
  ];
  return (
    <section className="relative overflow-hidden bg-graphite text-primary-foreground">
      <img src={IMG.community} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-graphite/85 to-wine/70" />
      <div className="container-mc relative grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">Impacto Social</p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-4xl">Quando a dança chega, novas possibilidades começam</h2>
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

function Agenda() {
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Agenda</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Próximas atividades</h2>
        </div>
        <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver agenda completa →</Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {EVENTS.map((e) => (
          <article key={e.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="grid shrink-0 place-items-center rounded-xl bg-primary p-3 text-primary-foreground">
              <div className="font-display text-lg font-bold leading-none">{e.date.split(" ")[0]}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest">{e.date.split(" ")[1]}</div>
            </div>
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-lilac px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lilac-foreground">{e.category}</span>
              <h3 className="mt-2 font-display text-base font-semibold text-foreground">{e.title}</h3>
              <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.time}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.place}</span>
              </div>
              <Link to="/noticias" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">Ver detalhes <ArrowRight className="h-3 w-3" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsPreview() {
  const [main, ...rest] = NEWS;
  const secondary = rest.slice(0, 3);
  return (
    <section className="bg-beige">
      <div className="container-mc py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Notícias</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Notícias e acontecimentos</h2>
          </div>
          <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver todas as notícias →</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Link to="/noticias/$slug" params={{ slug: main.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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

function GalleryPreview() {
  const years = ["2026", "2025", "2024"];
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Galeria</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Memórias em movimento</h2>
        <p className="mt-3 text-muted-foreground">Registros de aulas, oficinas, apresentações, bastidores e ações comunitárias.</p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {years.map((y) => (
          <Link key={y} to="/galeria/$ano" params={{ ano: y }} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
            {y}
          </Link>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[IMG.workshop, IMG.stage, IMG.rehearsal, IMG.community, IMG.duo, IMG.backstage, IMG.group, IMG.kids].map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img src={src} alt={`Registro fotográfico ${i + 1}`} className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/galeria" className="inline-flex h-11 items-center gap-2 rounded-full border border-primary bg-transparent px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
          Acessar galeria completa <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-secondary">
      <div className="container-mc py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Depoimentos</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Vozes do Movimento em Cena</h2>
          <blockquote className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="font-display text-lg text-foreground md:text-xl">“{t.text}”</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img src={t.image} alt="" className="h-12 w-12 rounded-full object-cover" />
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Depoimento anterior" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:bg-accent">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button key={idx} aria-label={`Ir para depoimento ${idx + 1}`} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-2 bg-muted"}`} />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} aria-label="Próximo depoimento" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:bg-accent">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-mc py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-16">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.stage} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold md:text-4xl">A dança também pode fazer parte da sua história</h2>
          <p className="mt-4 text-primary-foreground/85">Participe das oficinas, acompanhe as atividades ou construa novas parcerias com o Movimento em Cena.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex h-12 items-center rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary hover:bg-primary-foreground/90">Quero participar</Link>
            <Link to="/contato" className="inline-flex h-12 items-center rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">Entre em contato</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
