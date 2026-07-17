import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { InternalHero, Section } from "@/components/site/InternalHero";
import { IMG, SITE } from "@/lib/site-data";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, Users, MapPinned, Radio, Handshake } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Informe um assunto").max(120),
  reason: z.string().min(1, "Selecione um motivo"),
  message: z.string().trim().min(10, "Escreva uma mensagem com pelo menos 10 caracteres").max(1500),
  consent: z.boolean().refine((v) => v === true, { message: "É necessário aceitar a Política de Privacidade" }),
});

const REASONS = ["Inscrições", "Projetos", "Apresentações", "Parcerias", "Imprensa", "Voluntariado", "Outros"];

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Movimento em Cena" },
      { name: "description", content: "Fale com a equipe do Ponto de Cultura Movimento em Cena." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      reason: String(fd.get("reason") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setSuccess(false);
      return;
    }
    setErrors({});
    setSuccess(true);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div>
      <InternalHero
        eyebrow="Fale conosco"
        title="Contato"
        description="Envie sua mensagem, tire dúvidas sobre inscrições, projetos e parcerias, ou proponha uma colaboração."
        image={IMG.duo}
        crumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Formulário de contato</h2>
            {success && (
              <div role="status" className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
                Mensagem enviada com sucesso. Nossa equipe entrará em contato assim que possível.
              </div>
            )}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Nome completo" error={errors.name} required>
                <input id="name" name="name" type="text" className="input" />
              </Field>
              <Field id="email" label="E-mail" error={errors.email} required>
                <input id="email" name="email" type="email" className="input" />
              </Field>
              <Field id="phone" label="Telefone (opcional)" error={errors.phone}>
                <input id="phone" name="phone" type="tel" className="input" />
              </Field>
              <Field id="reason" label="Motivo do contato" error={errors.reason} required>
                <select id="reason" name="reason" className="input" defaultValue="">
                  <option value="" disabled>Selecione um motivo</option>
                  {REASONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>
              <Field id="subject" label="Assunto" error={errors.subject} required className="sm:col-span-2">
                <input id="subject" name="subject" type="text" className="input" />
              </Field>
              <Field id="message" label="Mensagem" error={errors.message} required className="sm:col-span-2">
                <textarea id="message" name="message" rows={5} className="input resize-y" />
              </Field>
            </div>
            <label className="mt-4 flex items-start gap-2 text-sm">
              <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-primary" />
              <span className="text-muted-foreground">
                Li e concordo com a <a href="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</a>.
              </span>
            </label>
            {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent}</p>}
            <button type="submit" className="mt-6 inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Enviar mensagem</button>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-base font-semibold text-foreground">Informações institucionais</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {SITE.address}</li>
                <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> {SITE.phone}</li>
                <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> {SITE.email}</li>
                <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /> {SITE.hours}</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a href={SITE.socials.instagram} aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent"><Instagram className="h-4 w-4" /></a>
                <a href={SITE.socials.facebook} aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent"><Facebook className="h-4 w-4" /></a>
                <a href={SITE.socials.youtube} aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent"><Youtube className="h-4 w-4" /></a>
              </div>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white">WhatsApp direto</a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                title="Localização Movimento em Cena"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6501%2C-23.5546%2C-46.6301%2C-23.5346&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="container-mc grid gap-4 py-14 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Users className="h-5 w-5" />, title: "Fale com a equipe", text: "Tire dúvidas sobre inscrições, oficinas e projetos." },
            { icon: <MapPinned className="h-5 w-5" />, title: "Visite nosso espaço", text: "Agende uma visita à nossa sede e conheça as turmas." },
            { icon: <Radio className="h-5 w-5" />, title: "Acompanhe as redes", text: "Novidades diárias no Instagram, Facebook e YouTube." },
            { icon: <Handshake className="h-5 w-5" />, title: "Proponha uma parceria", text: "Estamos abertos a colaborações institucionais e culturais." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">{c.icon}</div>
              <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`.input{height:2.75rem;width:100%;border-radius:.5rem;border:1px solid hsl(var(--input));background:var(--background);padding:0 .75rem;font-size:.875rem;color:var(--foreground)}textarea.input{height:auto;padding:.6rem .75rem}.input:focus{outline:2px solid var(--ring);outline-offset:0}`}</style>
    </div>
  );
}

function Field({ id, label, error, required, className = "", children }: { id: string; label: string; error?: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}{required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p id={`${id}-error`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
