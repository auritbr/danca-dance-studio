import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FileDown,
  Eye,
  ChevronDown,
  FileText,
  ClipboardList,
  FolderOpen,
  Wallet,
  Handshake,
  Award,
  StickyNote,
  CalendarDays,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import { InternalHero } from "@/components/site/InternalHero";
import { DanceOrnament } from "@/components/site/DanceOrnament";
import { DOCUMENTS } from "@/lib/site-data";

const CATEGORIES: { key: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "Estatuto", label: "Documentos oficiais e institucionais", icon: FileText },
  { key: "Relatórios de atividades", label: "Relatórios de atividades", icon: ClipboardList },
  { key: "Prestação de contas", label: "Portfólios e prestações de contas", icon: FolderOpen },
  { key: "Relatórios financeiros", label: "Relatórios financeiros", icon: Wallet },
  { key: "Parcerias", label: "Parcerias e termos de colaboração", icon: Handshake },
  { key: "Certificados", label: "Certificados e reconhecimentos", icon: Award },
  { key: "Atas", label: "Atas e registros administrativos", icon: StickyNote },
  { key: "Planos de trabalho", label: "Planos de trabalho", icon: CalendarDays },
  { key: "Editais", label: "Editais e resultados", icon: Megaphone },
];

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Movimento em Cena" },
      { name: "description", content: "Documentos institucionais, prestações de contas, relatórios e informações públicas do Ponto de Cultura." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

function Transparencia() {
  const [open, setOpen] = useState<string | null>("Estatuto");

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Transparência"
        description="Compromisso público com a prestação de contas, o acesso à informação e a boa governança."
        image={undefined}
      />

      {/* Header centered — narrow container */}
      <section className="mx-auto max-w-3xl px-4 pt-14">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Transparência
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">Transparência institucional</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Acesse documentos, relatórios, certificados, prestações de contas e registros institucionais, organizados por categoria para facilitar a consulta pública.
          </p>
          <DanceOrnament variant="flow" className="mx-auto mt-4 h-4 w-32 text-primary" />
        </div>
      </section>

      {/* Accordions — narrow container */}
      <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <div className="space-y-3">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const docs = DOCUMENTS.filter((d) => d.category === key);
            const isOpen = open === key;
            return (
              <div key={key} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : key)}
                  aria-expanded={isOpen}
                  aria-controls={`cat-${key}`}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-semibold text-foreground md:text-base">{label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {docs.length} {docs.length === 1 ? "documento" : "documentos"}
                    </span>
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div id={`cat-${key}`} className="border-t border-border bg-background/40 px-4 py-4">
                    {docs.length === 0 ? (
                      <p className="py-4 text-center text-sm text-muted-foreground">Nenhum documento nesta categoria.</p>
                    ) : (
                      <ul className="grid gap-3">
                        {docs.map((d) => (
                          <li key={d.name} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="min-w-0">
                              <div className="font-medium text-foreground">{d.name}</div>
                              <div className="mt-1 text-xs text-muted-foreground">{d.year} · {d.date} · {d.format} · {d.size}</div>
                            </div>
                            <div className="flex gap-2">
                              <button aria-label={`Visualizar ${d.name}`} className="inline-flex items-center justify-center gap-1 rounded-md border border-input px-3 py-2 text-xs font-medium hover:bg-accent">
                                <Eye className="h-3.5 w-3.5" /> Visualizar
                              </button>
                              <button aria-label={`Baixar ${d.name}`} className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                                <FileDown className="h-3.5 w-3.5" /> Baixar
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA — sober, institutional */}
      <section className="mx-auto max-w-3xl px-4 pb-14 md:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          <DanceOrnament variant="flow" className="pointer-events-none absolute -right-8 -top-6 h-16 w-64 text-primary/10" />
          <DanceOrnament variant="steps" className="pointer-events-none absolute -left-4 bottom-4 h-4 w-40 text-gold/40" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-primary">
                <FileText className="h-4 w-4" />
                <span className="font-display text-[11px] uppercase tracking-[0.28em]">Contato institucional</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                Transparência também se constrói com diálogo
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Caso não encontre o documento ou a informação que procura, entre em contato com nossa equipe.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:shrink-0">
              <Link to="/contato" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Solicitar informação
              </Link>
              <Link to="/contato" className="inline-flex h-11 items-center rounded-full border border-primary/40 px-5 text-sm font-semibold text-primary hover:bg-primary/10">
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
