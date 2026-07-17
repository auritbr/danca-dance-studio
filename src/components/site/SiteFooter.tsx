import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-graphite text-primary-foreground">
      {/* Dance-inspired step line */}
      <div aria-hidden="true" className="h-16 w-full overflow-hidden">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-full w-full text-lilac/40">
          <path d="M0 40 C 200 10, 300 55, 500 30 S 900 5, 1200 35" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <g fill="currentColor">
            {Array.from({ length: 24 }).map((_, i) => (
              <circle key={i} cx={i * 52 + 20} cy={38 + (i % 3) * 4} r="1.6" />
            ))}
          </g>
        </svg>
      </div>

      <div className="container-mc grid gap-10 pb-12 pt-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground text-primary">
              <span className="font-display text-sm font-bold">M</span>
            </div>
            <div>
              <div className="font-display text-sm font-semibold">Movimento em Cena</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/70">Ponto de Cultura</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Dança, formação cultural e ações comunitárias que aproximam pessoas da arte e ampliam repertórios.
          </p>
          <div className="mt-5 flex gap-2">
            <SocialLink href={SITE.socials.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
            <SocialLink href={SITE.socials.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
            <SocialLink href={SITE.socials.youtube} label="YouTube"><Youtube className="h-4 w-4" /></SocialLink>
            <SocialLink href={SITE.socials.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
          </div>
        </div>

        <FooterCol title="Institucional">
          <FooterLink to="/quem-somos">Quem Somos</FooterLink>
          <FooterLink to="/quem-somos/equipe">Equipe</FooterLink>
          <FooterLink to="/quem-somos/transparencia">Transparência</FooterLink>
          <FooterLink to="/noticias">Notícias</FooterLink>
        </FooterCol>

        <FooterCol title="Projetos">
          <FooterLink to="/projetos">Todos os projetos</FooterLink>
          <FooterLink to="/projetos/danca-que-transforma">Dança que Transforma</FooterLink>
          <FooterLink to="/projetos/corpo-ritmo-e-movimento">Corpo, Ritmo e Movimento</FooterLink>
          <FooterLink to="/projetos/palco-aberto">Palco Aberto</FooterLink>
          <FooterLink to="/galeria">Galeria</FooterLink>
        </FooterCol>

        <FooterCol title="Contato">
          <div className="flex gap-2 text-sm text-primary-foreground/80"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{SITE.address}</span></div>
          <div className="flex gap-2 text-sm text-primary-foreground/80"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>{SITE.phone}</span></div>
          <div className="flex gap-2 text-sm text-primary-foreground/80"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><span>{SITE.email}</span></div>
          <div className="flex gap-2 text-sm text-primary-foreground/80"><Clock className="mt-0.5 h-4 w-4 shrink-0" /><span>{SITE.hours}</span></div>
        </FooterCol>
      </div>


      <div className="border-t border-primary-foreground/10">
        <div className="container-mc flex flex-col gap-3 py-5 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {SITE.fullName}. Todos os direitos reservados. CNPJ {SITE.cnpj}.</div>
          <div className="flex flex-wrap gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-primary-foreground">Política de Privacidade</Link>
            <Link to="/politica-de-cookies" className="hover:text-primary-foreground">Política de Cookies</Link>
            <Link to="/termos-de-uso" className="hover:text-primary-foreground">Termos de Uso</Link>
            <Link to="/quem-somos/transparencia" className="hover:text-primary-foreground">Transparência</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-primary-foreground">{title}</h3>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: any; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
      {children}
    </Link>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/90 hover:bg-primary-foreground/10"
    >
      {children}
    </a>
  );
}
