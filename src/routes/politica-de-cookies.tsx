import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Movimento em Cena" },
      { name: "description", content: "Como utilizamos cookies para melhorar sua experiência de navegação." },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <InternalHero
        eyebrow="Documentos"
        title="Política de Cookies"
        description="Entenda como utilizamos cookies e como você pode gerenciar suas preferências."
        crumbs={[{ label: "Início", to: "/" }, { label: "Política de Cookies" }]}
      />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl text-foreground/90">
          <p>Utilizamos cookies para melhorar a experiência de navegação, entender o uso do site e personalizar conteúdos. Você pode gerenciar suas preferências a qualquer momento pelo botão de cookies.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Tipos de cookies</h2>
          <ul>
            <li><strong>Necessários:</strong> essenciais para o funcionamento do site.</li>
            <li><strong>Analíticos:</strong> ajudam a entender como o site é utilizado.</li>
            <li><strong>Personalização:</strong> guardam preferências e melhoram a experiência.</li>
          </ul>
          <h2 className="mt-6 font-display text-xl font-semibold">Gerenciar preferências</h2>
          <p>Você pode aceitar todos os cookies, recusar os opcionais ou personalizar as opções por meio do painel disponível no canto inferior esquerdo do site.</p>
        </article>
      </Section>
    </div>
  );
}
