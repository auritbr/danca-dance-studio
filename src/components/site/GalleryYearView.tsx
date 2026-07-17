import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMG } from "@/lib/site-data";
import { DanceOrnament } from "./DanceOrnament";

export const GALLERY_YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"] as const;

type Photo = { src: string; caption: string };
type Album = { title: string; date: string; description?: string; photos: Photo[] };
type YearData = { title: string; albums: Album[] };

const CATALOG: Record<string, YearData> = {
  "2026": {
    title: "Mostra de Dança e Cultura — Encerramento das Oficinas",
    albums: [
      {
        title: "Mostra de Dança e Cultura",
        date: "Março de 2026",
        description: "Encerramento coletivo das oficinas com apresentações no Teatro Municipal.",
        photos: [
          { src: IMG.stage, caption: "Abertura da mostra" },
          { src: IMG.duo, caption: "Apresentação em duo" },
          { src: IMG.contemporary, caption: "Cena contemporânea" },
          { src: IMG.backstage, caption: "Bastidores" },
        ],
      },
      {
        title: "Oficina de Balé",
        date: "Fevereiro de 2026",
        photos: [
          { src: IMG.ballet, caption: "Barra e postura" },
          { src: IMG.workshop, caption: "Aula coletiva" },
          { src: IMG.rehearsal, caption: "Ensaio de repertório" },
        ],
      },
      {
        title: "Festival Corpo em Movimento",
        date: "Janeiro de 2026",
        photos: [
          { src: IMG.group, caption: "Grupo em cena" },
          { src: IMG.jazz, caption: "Oficina de jazz" },
          { src: IMG.community, caption: "Ocupação em praça" },
        ],
      },
      {
        title: "Apresentação de Danças Urbanas",
        date: "Janeiro de 2026",
        photos: [
          { src: IMG.urban, caption: "Cypher de abertura" },
          { src: IMG.brazilian, caption: "Ritmos brasileiros" },
        ],
      },
    ],
  },
  "2025": {
    title: "Um ano de formação e circulação",
    albums: [
      {
        title: "Palco Aberto — Circulação",
        date: "Outubro de 2025",
        photos: [
          { src: IMG.stage, caption: "Apresentação em teatro parceiro" },
          { src: IMG.duo, caption: "Duo autoral" },
          { src: IMG.backstage, caption: "Preparação nos bastidores" },
        ],
      },
      {
        title: "Oficinas de Contemporâneo",
        date: "Julho de 2025",
        photos: [
          { src: IMG.contemporary, caption: "Laboratório de movimento" },
          { src: IMG.rehearsal, caption: "Ensaio de criação" },
          { src: IMG.workshop, caption: "Roda de escuta" },
        ],
      },
      {
        title: "Ações comunitárias",
        date: "Abril de 2025",
        photos: [
          { src: IMG.community, caption: "Ação em praça pública" },
          { src: IMG.seniors, caption: "Grupo intergeracional" },
          { src: IMG.kids, caption: "Aula com crianças" },
        ],
      },
    ],
  },
  "2024": {
    title: "Ponto de Cultura oficialmente reconhecido",
    albums: [
      {
        title: "Certificação como Ponto de Cultura",
        date: "Setembro de 2024",
        photos: [
          { src: IMG.group, caption: "Cerimônia de certificação" },
          { src: IMG.stage, caption: "Apresentação especial" },
        ],
      },
      {
        title: "Mostra anual",
        date: "Novembro de 2024",
        photos: [
          { src: IMG.jazz, caption: "Jazz Dance" },
          { src: IMG.ballet, caption: "Balé — sequência clássica" },
          { src: IMG.duo, caption: "Encontro coreográfico" },
        ],
      },
    ],
  },
  "2023": {
    title: "Expansão dos projetos formativos",
    albums: [
      {
        title: "Corpo, Ritmo e Movimento",
        date: "Agosto de 2023",
        photos: [
          { src: IMG.rehearsal, caption: "Consciência corporal" },
          { src: IMG.contemporary, caption: "Improvisação" },
          { src: IMG.community, caption: "Encontro comunitário" },
        ],
      },
    ],
  },
  "2022": {
    title: "Palco Aberto — primeiras temporadas",
    albums: [
      {
        title: "Circulação de espetáculos",
        date: "2022",
        photos: [
          { src: IMG.stage, caption: "Espetáculo autoral" },
          { src: IMG.duo, caption: "Cena de duo" },
          { src: IMG.backstage, caption: "Preparação" },
        ],
      },
    ],
  },
  "2021": {
    title: "Ações remotas e híbridas",
    albums: [
      {
        title: "Aulas virtuais",
        date: "2021",
        photos: [
          { src: IMG.workshop, caption: "Aula por videoconferência" },
          { src: IMG.rehearsal, caption: "Estúdio de gravação" },
        ],
      },
    ],
  },
  "2020": {
    title: "Reinvenção diante da pandemia",
    albums: [
      {
        title: "Registros de casa",
        date: "2020",
        photos: [
          { src: IMG.contemporary, caption: "Prática domiciliar" },
          { src: IMG.kids, caption: "Aula com crianças" },
        ],
      },
    ],
  },
  "2019": {
    title: "Ampliação da equipe pedagógica",
    albums: [
      {
        title: "Formação de educadores",
        date: "2019",
        photos: [
          { src: IMG.group, caption: "Encontro pedagógico" },
          { src: IMG.workshop, caption: "Laboratório coletivo" },
        ],
      },
    ],
  },
  "2018": {
    title: "Novas parcerias com escolas",
    albums: [
      {
        title: "Programa nas escolas",
        date: "2018",
        photos: [
          { src: IMG.kids, caption: "Aula em escola pública" },
          { src: IMG.community, caption: "Encontro cultural" },
        ],
      },
    ],
  },
  "2017": {
    title: "Consolidação da sede cultural",
    albums: [
      {
        title: "Nova sede",
        date: "2017",
        photos: [
          { src: IMG.stage, caption: "Inauguração" },
          { src: IMG.workshop, caption: "Primeiras oficinas" },
        ],
      },
    ],
  },
  "2016": {
    title: "Primeiros passos",
    albums: [
      {
        title: "Fundação",
        date: "2016",
        photos: [
          { src: IMG.group, caption: "Encontro fundador" },
          { src: IMG.rehearsal, caption: "Primeiro ensaio" },
        ],
      },
    ],
  },
};

export function GalleryYearView({ year }: { year: string }) {
  const data = CATALOG[year] ?? CATALOG["2026"];
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ album: number; photo: number } | null>(null);
  const active = lightbox ? data.albums[lightbox.album] : null;

  const goYear = (y: string) => {
    if (y === year) return;
    navigate({ to: "/galeria/$ano", params: { ano: y } });
  };

  return (
    <section className="container-mc py-10 md:py-14">
      {/* Year selector */}
      <div className="relative">
        <div
          role="tablist"
          aria-label="Selecionar ano da galeria"
          className="flex gap-2 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin]"
        >
          {GALLERY_YEARS.map((y) => {
            const isActive = y === year;
            return (
              <button
                key={y}
                role="tab"
                aria-selected={isActive}
                aria-label={`Ver galeria de ${y}`}
                onClick={() => goYear(y)}
                className={
                  "shrink-0 h-10 min-w-[68px] rounded-full px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
                  (isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-foreground hover:border-primary hover:text-primary")
                }
              >
                {y}
              </button>
            );
          })}
        </div>
        {/* Fade hint on mobile */}
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-10 w-10 bg-gradient-to-l from-background to-transparent md:hidden" />
      </div>

      {/* Year title with dance ornament */}
      <div className="mt-8">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">Ano {year}</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">{data.title}</h2>
        <DanceOrnament variant="flow" className="mt-3 h-4 w-32 text-primary" />
      </div>

      {/* Albums */}
      <div className="mt-8 space-y-12">
        {data.albums.map((album, ai) => (
          <article key={ai}>
            <header className="flex flex-col gap-1 border-l-2 border-gold pl-4 md:flex-row md:items-end md:justify-between md:border-l-0 md:border-b md:border-border md:pb-3 md:pl-0">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">{album.title}</h3>
                {album.description && <p className="mt-1 text-sm text-muted-foreground">{album.description}</p>}
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">{album.date}</span>
            </header>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {album.photos.map((p, pi) => (
                <button
                  key={pi}
                  onClick={() => setLightbox({ album: ai, photo: pi })}
                  className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Abrir imagem: ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-[11px] text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {p.caption}
                  </span>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && active && (
        <div role="dialog" aria-modal="true" aria-label="Visualização de imagem" className="fixed inset-0 z-50 bg-black/90">
          <button onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v ? { ...v, photo: (v.photo - 1 + active.photos.length) % active.photos.length } : v))}
            aria-label="Imagem anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLightbox((v) => (v ? { ...v, photo: (v.photo + 1) % active.photos.length } : v))}
            aria-label="Próxima imagem"
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="flex h-full items-center justify-center p-6">
            <figure className="max-h-full max-w-5xl">
              <img src={active.photos[lightbox.photo].src} alt={active.photos[lightbox.photo].caption} className="max-h-[80vh] w-auto rounded-lg" />
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {active.title} · {active.photos[lightbox.photo].caption} · Imagem {lightbox.photo + 1} de {active.photos.length}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}
