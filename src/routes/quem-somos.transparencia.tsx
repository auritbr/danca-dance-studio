import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, FileDown, Eye } from "lucide-react";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, DOCUMENTS, SITE } from "@/lib/site-data";

const CATS = ["Todas", "Estatuto", "Relatórios de atividades", "Relatórios financeiros", "Prestação de contas", "Parcerias", "Editais", "Certificados", "Atas", "Planos de trabalho"];
const YEARS = ["Todos", "2026", "2025", "2024", "2023"];

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
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");

  const filtered = useMemo(() => {
    return DOCUMENTS.filter((d) => (cat === "Todas" || d.category === cat) && (year === "Todos" || d.year === year) && (q === "" || d.name.toLowerCase().includes(q.toLowerCase())));
  }, [q, cat, year]);

  return (
    <div>
      <InternalHero
        eyebrow="Institucional"
        title="Transparência"
        description="Compromisso público com a prestação de contas, o acesso à informação e a boa governança."
        image={IMG.workshop}
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
      />

      <Section>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <label className="relative">
              <span className="sr-only">Buscar documento</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar documento..." className="h-11 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm" />
            </label>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-11 rounded-md border border-input bg-background px-3 text-sm">
              {CATS.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="h-11 rounded-md border border-input bg-background px-3 text-sm">
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-muted-foreground">Nenhum documento encontrado com os filtros atuais.</div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="p-4">Documento</th>
                  <th className="hidden p-4 md:table-cell">Categoria</th>
                  <th className="hidden p-4 sm:table-cell">Ano</th>
                  <th className="hidden p-4 lg:table-cell">Publicação</th>
                  <th className="hidden p-4 lg:table-cell">Formato</th>
                  <th className="p-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => (
                  <tr key={d.name} className="border-t border-border">
                    <td className="p-4">
                      <div className="font-medium text-foreground">{d.name}</div>
                      <div className="text-xs text-muted-foreground md:hidden">{d.category} · {d.year} · {d.format} · {d.size}</div>
                    </td>
                    <td className="hidden p-4 text-muted-foreground md:table-cell">{d.category}</td>
                    <td className="hidden p-4 text-muted-foreground sm:table-cell">{d.year}</td>
                    <td className="hidden p-4 text-muted-foreground lg:table-cell">{d.date}</td>
                    <td className="hidden p-4 text-muted-foreground lg:table-cell">{d.format} · {d.size}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button aria-label={`Visualizar ${d.name}`} className="inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 text-xs font-medium hover:bg-accent"><Eye className="h-3.5 w-3.5" /> Visualizar</button>
                        <button aria-label={`Baixar ${d.name}`} className="inline-flex h-9 items-center gap-1 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90"><FileDown className="h-3.5 w-3.5" /> Baixar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Section>

      <section className="bg-beige">
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
