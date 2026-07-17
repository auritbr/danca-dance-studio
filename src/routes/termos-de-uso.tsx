import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Movimento em Cena" },
      { name: "description", content: "Termos de uso do site do Ponto de Cultura Movimento em Cena." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <InternalHero
        eyebrow="Documentos"
        title="Termos de Uso"
        description="Condições gerais de uso do site institucional do Movimento em Cena."
        crumbs={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]}
      />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl text-foreground/90">
          <p>Ao acessar este site, você concorda com os termos e condições descritos neste documento. As informações têm caráter institucional e podem ser atualizadas a qualquer momento.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Uso do conteúdo</h2>
          <p>Os textos, imagens e materiais publicados são de uso institucional e educacional. Qualquer utilização em outros contextos deve ser previamente autorizada.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Responsabilidades</h2>
          <p>Nos empenhamos em manter as informações atualizadas, mas eventuais inconsistências podem ocorrer. Reservamo-nos o direito de alterar conteúdos e funcionalidades.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Contato</h2>
          <p>Em caso de dúvidas, escreva para contato@movimentoemcena.org.br.</p>
        </article>
      </Section>
    </div>
  );
}
