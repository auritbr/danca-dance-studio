import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs";
import { IMG, NEWS } from "@/lib/site-data";
import { Facebook, Linkedin, Link as LinkIcon, ArrowRight, X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const CONTENT = `O Movimento em Cena celebra mais um marco em sua trajetória com a realização de atividades que reforçam o compromisso com a formação artística, o acesso à cultura e o fortalecimento da comunidade. As ações desenvolvidas ao longo do período reuniram participantes de diferentes faixas etárias, educadores parceiros e coletivos artísticos da cidade.

Com uma proposta pedagógica que integra técnica, criação e apresentação, o Ponto de Cultura amplia o alcance de seus projetos e consolida-se como referência em ações socioculturais na região.

Ao longo dos encontros, os participantes vivenciaram processos de criação coletiva, laboratórios de movimento e conversas sobre a história e as práticas da dança. As atividades foram realizadas em nossa sede e em espaços parceiros do território.`;

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    // Support base slug + suffixes used in list generation
    const base = params.slug.replace(/-2$|-3$/, "");
    const news = NEWS.find((n) => n.slug === base);
    if (!news) throw notFound();
    return { news };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Notícia não encontrada" }, { name: "robots", content: "noindex" }] };
    const n = loaderData.news;
    return {
      meta: [
        { title: `${n.title} — Movimento em Cena` },
        { name: "description", content: n.excerpt },
        { property: "og:title", content: n.title },
        { property: "og:description", content: n.excerpt },
        { property: "og:image", content: n.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
    };
  },
  component: NewsPage,
});

function NewsPage() {
  const { news } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gallery = [IMG.workshop, IMG.rehearsal, IMG.stage, IMG.community, IMG.duo, IMG.backstage];
  const related = NEWS.filter((n) => n.slug !== news.slug).slice(0, 3);

  const share = (kind: "facebook" | "linkedin" | "whatsapp") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(news.title);
    const links: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      whatsapp: `https://api.whatsapp.com/send?text=${title}%20${url}`,
    };
    window.open(links[kind], "_blank", "noopener,noreferrer");
  };
  const copyLink = async () => {
    if (typeof window === "undefined") return;
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <InternalHero
        eyebrow={news.tag}
        title={news.title}
        description={news.excerpt}
        image={news.image}
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-primary-foreground/80">
          <span>{news.date}</span>
          <span>·</span>
          <span>Por {news.author}</span>
        </div>
      </InternalHero>

      <PageBreadcrumbs items={[{ label: "Início", to: "/" }, { label: "Notícias", to: "/noticias" }, { label: news.title }]} />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            {CONTENT.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            <h2 className="mt-8 font-display text-xl font-semibold text-foreground">Uma programação diversa</h2>
            <p>As atividades incluíram encontros formativos, apresentações públicas e rodas de conversa, aproximando a comunidade dos processos de criação artística.</p>
            <blockquote className="border-l-4 border-gold bg-secondary/60 px-5 py-4 text-foreground">
              “A dança nos convoca a estar presentes — com o corpo, com o outro e com a cidade.”
              <span className="mt-2 block text-xs text-muted-foreground">Coordenação Pedagógica</span>
            </blockquote>
            <h3 className="mt-6 font-display text-lg font-semibold text-foreground">Próximos passos</h3>
            <p>Novos encontros estão previstos para os próximos meses, com abertura de turmas e programação especial para o público em geral.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 border-y border-border py-4">
            <span className="text-sm text-muted-foreground">Compartilhe:</span>
            <button onClick={() => share("facebook")} aria-label="Compartilhar no Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"><Facebook className="h-4 w-4" /></button>
            <button onClick={() => share("linkedin")} aria-label="Compartilhar no LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"><Linkedin className="h-4 w-4" /></button>
            <button onClick={() => share("whatsapp")} aria-label="Compartilhar no WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"><MessageCircle className="h-4 w-4" /></button>
            <button onClick={copyLink} aria-label="Copiar link" className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm hover:bg-accent"><LinkIcon className="h-4 w-4" /> {copied ? "Link copiado com sucesso." : "Copiar link"}</button>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold text-foreground">Galeria da atividade</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
              {gallery.map((src, i) => (
                <button key={i} onClick={() => setLightbox(i)} className="overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-ring">
                  <img src={src} alt={`Registro ${i + 1} da atividade`} className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </article>
      </Section>

      <section className="bg-beige">
        <div className="container-mc py-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">Outras notícias</h2>
            <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">Ver todas as notícias →</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={n.image} alt={n.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-widest text-primary">{n.tag}</div>
                  <h3 className="mt-1 font-display text-sm font-semibold text-foreground group-hover:text-primary">{n.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">Ler notícia <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div role="dialog" aria-modal="true" aria-label="Visualização de imagem" className="fixed inset-0 z-50 bg-black/90">
          <button onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><X className="h-5 w-5" /></button>
          <button onClick={() => setLightbox((v) => (v! - 1 + gallery.length) % gallery.length)} aria-label="Imagem anterior" className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={() => setLightbox((v) => (v! + 1) % gallery.length)} aria-label="Próxima imagem" className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"><ChevronRight className="h-5 w-5" /></button>
          <div className="flex h-full items-center justify-center p-6">
            <figure className="max-h-full max-w-5xl">
              <img src={gallery[lightbox]} alt={`Registro ${lightbox + 1}`} className="max-h-[80vh] w-auto rounded-lg" />
              <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">Imagem {lightbox + 1} de {gallery.length} · Registro fotográfico da atividade</figcaption>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
}
