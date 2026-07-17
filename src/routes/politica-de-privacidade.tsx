import { createFileRoute } from "@tanstack/react-router";
import { InternalHero, Section } from "@/components/site/InternalHero";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Movimento em Cena" },
      { name: "description", content: "Política de Privacidade do Ponto de Cultura Movimento em Cena." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <InternalHero
        eyebrow="Documentos"
        title="Política de Privacidade"
        description="Como coletamos, tratamos e protegemos os dados pessoais dos usuários do site."
        crumbs={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]}
      />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl text-foreground/90">
          <p>Esta Política descreve como o Ponto de Cultura Movimento em Cena trata os dados pessoais coletados no site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
          <h2 className="mt-8 font-display text-xl font-semibold">Dados coletados</h2>
          <p>Coletamos apenas os dados necessários para o atendimento das solicitações de contato, inscrições e comunicação institucional, como nome, e-mail, telefone e mensagem.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Uso dos dados</h2>
          <p>Utilizamos os dados exclusivamente para responder solicitações, enviar comunicações relacionadas às atividades do Ponto de Cultura e cumprir obrigações legais.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Compartilhamento</h2>
          <p>Não comercializamos dados pessoais e apenas compartilhamos informações quando estritamente necessário para viabilizar as ações institucionais.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Direitos do titular</h2>
          <p>Os titulares podem solicitar acesso, correção, exclusão e portabilidade dos dados por meio dos canais de contato.</p>
          <h2 className="mt-6 font-display text-xl font-semibold">Contato</h2>
          <p>Em caso de dúvidas, escreva para contato@movimentoemcena.org.br.</p>
        </article>
      </Section>
    </div>
  );
}
