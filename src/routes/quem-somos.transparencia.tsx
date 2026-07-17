import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
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
import { InternalHero, Section } from "@/components/site/InternalHero";
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs";
import { DanceOrnament } from "@/components/site/DanceOrnament";
import { DOCUMENTS, SITE } from "@/lib/site-data";

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

const YEARS = ["Todos", "2026", "2025", "2024", "2023"];
const TYPES = ["Todos", "PDF"];

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
  const [q, setQ] = useState("");
  const [year, setYear] = useState("Todos");
  const [type, setType] = useState("Todos");
  const [open, setOpen] = useState<string | null>("Estatuto");

  const filteredAll = useMemo(
    () =>
      DOCUMENTS.filter(
        (d) =>
          (year === "Todos" || d.year === year) &&
          (type === "Todos" || d.format === type) &&
          (q === "" || d.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, year, type],
  );

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Transparência"
        description="Compromisso público com a prestação de contas, o acesso à informação e a boa governança."
        image={undefined}
      />
      <PageBreadcrumbs items={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]} />

      {/* Section header centered */}
      <section className="container-mc pt-10 md:pt-14">
        <div className="mx-auto max-w-2xl text-center">
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

      {/* Filters */}
      <section className="container-mc mt-8">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <label className="relative">
              <span className="sr-only">Buscar documento</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar documento..." className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm" />
            </label>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm" aria-label="Filtrar por ano">
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm" aria-label="Filtrar por tipo de arquivo">
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="container-mc mt-6 md:mt-8">
        <div className="space-y-3">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const docs = filteredAll.filter((d) => d.category === key);
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
                      <p className="py-4 text-center text-sm text-muted-foreground">Nenhum documento nesta categoria com os filtros atuais.</p>
                    ) : (
                      <>
                        {/* Mobile cards */}
                        <ul className="grid gap-3 md:hidden">
                          {docs.map((d) => (
                            <li key={d.name} className="rounded-lg border border-border bg-card p-3">
                              <div className="font-medium text-foreground">{d.name}</div>
                              <div className="mt-1 text-xs text-muted-foreground">{d.year} · {d.date} · {d.format} · {d.size}</div>
                              <div className="mt-3 flex gap-2">
                                <button aria-label={`Visualizar ${d.name}`} className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-input px-3 py-2 text-xs font-medium hover:bg-accent">
                                  <Eye className="h-3.5 w-3.5" /> Visualizar
                                </button>
                                <button aria-label={`Baixar ${d.name}`} className="inline-flex flex-1 items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                                  <FileDown className="h-3.5 w-3.5" /> Baixar
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/* Desktop table */}
                        <table className="hidden w-full text-left text-sm md:table">
                          <thead className="text-xs uppercase tracking-widest text-muted-foreground">
                            <tr>
                              <th className="py-2 pr-3 font-medium">Documento</th>
                              <th className="py-2 pr-3 font-medium">Ano</th>
                              <th className="py-2 pr-3 font-medium">Publicação</th>
                              <th className="py-2 pr-3 font-medium">Formato</th>
                              <th className="py-2 text-right font-medium">Ações</th>
                            </tr>
                          </thead>
                          <tbody>
                            {docs.map((d) => (
                              <tr key={d.name} className="border-t border-border/70">
                                <td className="py-3 pr-3 font-medium text-foreground">{d.name}</td>
                                <td className="py-3 pr-3 text-muted-foreground">{d.year}</td>
                                <td className="py-3 pr-3 text-muted-foreground">{d.date}</td>
                                <td className="py-3 pr-3 text-muted-foreground">{d.format} · {d.size}</td>
                                <td className="py-3 text-right">
                                  <div className="flex justify-end gap-2">
                                    <button aria-label={`Visualizar ${d.name}`} className="inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 text-xs font-medium hover:bg-accent">
                                      <Eye className="h-3.5 w-3.5" /> Visualizar
                                    </button>
                                    <button aria-label={`Baixar ${d.name}`} className="inline-flex h-9 items-center gap-1 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90">
                                      <FileDown className="h-3.5 w-3.5" /> Baixar
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-beige mt-14">
        <div className="container-mc py-14">
          <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">Dados institucionais</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoRow label="Razão social" value={SITE.fullName} />
            <InfoRow label="CNPJ" value={SITE.cnpj} />
            <InfoRow label="Responsável legal" value="Helena Marques" />
            <InfoRow label="Endereço" value={SITE.address} />
            <InfoRow label="Contato" value={`${SITE.email} · ${SITE.phone}`} />
            <InfoRow label="Situação cadastral" value="Ativa" />
            <InfoRow label="Certificações" value="Ponto de Cultura (2024) · Utilidade Pública Municipal" />
          </div>
        </div>
      </section>

      {/* Ensure Section import remains used for tree-shaking-safe build if needed elsewhere */}
      <Section className="hidden"><span /></Section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-[10px] uppercase tracking-widest text-primary">{label}</div>
      <div className="mt-1 text-sm text-foreground">{value}</div>
    </div>
  );
}
