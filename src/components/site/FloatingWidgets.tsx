import { useEffect, useState } from "react";
import { Cookie, Accessibility, MessageCircle, X, Minus, Plus, Contrast, Eye, Underline, Focus, BookOpen, Pause, RotateCcw } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Panel = null | "cookies" | "access" | "vlibras";

export function FloatingWidgets() {
  const [panel, setPanel] = useState<Panel>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("mc-cookies")) setShowBanner(true);
  }, []);

  const savePrefs = (prefs: { analytics: boolean; personalization: boolean }) => {
    localStorage.setItem("mc-cookies", JSON.stringify({ necessary: true, ...prefs }));
    setShowBanner(false);
    setPanel(null);
  };

  return (
    <>
      {/* Left column: cookies + accessibility */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
        <FloatBtn label="Preferências de cookies" onClick={() => setPanel("cookies")}>
          <Cookie className="h-5 w-5" />
        </FloatBtn>
        <FloatBtn label="Recursos de acessibilidade" onClick={() => setPanel("access")}>
          <Accessibility className="h-5 w-5" />
        </FloatBtn>
        <FloatBtn label="Tradução em Libras (VLibras)" onClick={() => setPanel("vlibras")}>
          <Hand className="h-5 w-5" />
        </FloatBtn>
      </div>

      {/* Right column: WhatsApp */}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        className="group fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-graphite px-3 py-1.5 text-xs text-primary-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Fale conosco pelo WhatsApp
        </span>
      </a>

      {showBanner && (
        <div role="region" aria-label="Aviso de cookies" className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl">
          <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-foreground">
                Utilizamos cookies para melhorar sua experiência. Você pode aceitar todos ou personalizar suas preferências. Saiba mais na nossa Política de Cookies.
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setPanel("cookies")} className="h-10 rounded-md border border-input px-4 text-sm">Preferências</button>
                <button onClick={() => savePrefs({ analytics: false, personalization: false })} className="h-10 rounded-md border border-input px-4 text-sm">Recusar opcionais</button>
                <button onClick={() => savePrefs({ analytics: true, personalization: true })} className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Aceitar todos</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {panel === "cookies" && <CookiePanel onClose={() => setPanel(null)} onSave={savePrefs} />}
      {panel === "access" && <AccessibilityPanel onClose={() => setPanel(null)} />}
      {panel === "vlibras" && <VLibrasPanel onClose={() => setPanel(null)} />}
    </>
  );
}

function FloatBtn({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

function Sheet({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-card p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
          <button onClick={onClose} aria-label="Fechar" className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function CookiePanel({ onClose, onSave }: { onClose: () => void; onSave: (p: { analytics: boolean; personalization: boolean }) => void }) {
  const [analytics, setAnalytics] = useState(true);
  const [personalization, setPersonalization] = useState(true);
  return (
    <Sheet title="Preferências de cookies" onClose={onClose}>
      <p className="text-sm text-muted-foreground">Escolha como podemos utilizar cookies durante sua navegação.</p>
      <div className="mt-5 space-y-3">
        <CookieRow title="Necessários" desc="Essenciais para o funcionamento do site." checked disabled />
        <CookieRow title="Analíticos" desc="Ajudam a entender como o site é usado." checked={analytics} onChange={setAnalytics} />
        <CookieRow title="Personalização" desc="Guardam preferências e melhoram a experiência." checked={personalization} onChange={setPersonalization} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <button onClick={() => onSave({ analytics: true, personalization: true })} className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Aceitar todos</button>
        <button onClick={() => onSave({ analytics: false, personalization: false })} className="h-10 rounded-md border border-input px-4 text-sm">Recusar opcionais</button>
        <button onClick={() => onSave({ analytics, personalization })} className="h-10 rounded-md border border-input px-4 text-sm">Salvar preferências</button>
      </div>
      <a href="/politica-de-cookies" className="mt-4 inline-block text-sm text-primary underline">Ver Política de Cookies</a>
    </Sheet>
  );
}

function CookieRow({ title, desc, checked, disabled, onChange }: { title: string; desc: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  return (
    <label className={cn("flex items-start justify-between gap-3 rounded-lg border border-border p-3", disabled && "opacity-70")}>
      <span>
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground">{desc}</span>
      </span>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange?.(e.target.checked)} className="mt-1 h-5 w-5 accent-primary" />
    </label>
  );
}

function AccessibilityPanel({ onClose }: { onClose: () => void }) {
  const toggle = (cls: string) => document.documentElement.classList.toggle(cls);
  const set = (cls: string, on: boolean) => document.documentElement.classList.toggle(cls, on);
  const [fontStep, setFontStep] = useState(0);
  useEffect(() => {
    set("mc-large-font", fontStep === 1);
    set("mc-xl-font", fontStep === 2);
  }, [fontStep]);

  const reset = () => {
    ["mc-large-font", "mc-xl-font", "mc-high-contrast", "mc-grayscale", "mc-underline-links", "mc-focus-highlight", "mc-reading-mode", "mc-no-motion"].forEach((c) => set(c, false));
    setFontStep(0);
  };

  return (
    <Sheet title="Acessibilidade" onClose={onClose}>
      <p className="text-sm text-muted-foreground">Ajuste a experiência de acordo com suas necessidades. As preferências valem para esta sessão.</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <AccBtn onClick={() => setFontStep((s) => Math.min(2, s + 1))} icon={<Plus className="h-4 w-4" />}>Aumentar fonte</AccBtn>
        <AccBtn onClick={() => setFontStep((s) => Math.max(0, s - 1))} icon={<Minus className="h-4 w-4" />}>Diminuir fonte</AccBtn>
        <AccBtn onClick={() => toggle("mc-high-contrast")} icon={<Contrast className="h-4 w-4" />}>Alto contraste</AccBtn>
        <AccBtn onClick={() => toggle("mc-grayscale")} icon={<Eye className="h-4 w-4" />}>Escala de cinza</AccBtn>
        <AccBtn onClick={() => toggle("mc-underline-links")} icon={<Underline className="h-4 w-4" />}>Sublinhar links</AccBtn>
        <AccBtn onClick={() => toggle("mc-focus-highlight")} icon={<Focus className="h-4 w-4" />}>Destacar foco</AccBtn>
        <AccBtn onClick={() => toggle("mc-reading-mode")} icon={<BookOpen className="h-4 w-4" />}>Modo de leitura</AccBtn>
        <AccBtn onClick={() => toggle("mc-no-motion")} icon={<Pause className="h-4 w-4" />}>Pausar animações</AccBtn>
      </div>
      <button onClick={reset} className="mt-5 inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm">
        <RotateCcw className="h-4 w-4" /> Restaurar configurações
      </button>
    </Sheet>
  );
}

function AccBtn({ icon, children, onClick }: { icon: React.ReactNode; children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-start gap-2 rounded-md border border-border bg-background px-3 py-3 text-left text-sm font-medium hover:bg-accent">
      <span className="text-primary">{icon}</span>
      <span>{children}</span>
    </button>
  );
}

function VLibrasPanel({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Tradução em Libras" onClose={onClose}>
      <p className="text-sm text-muted-foreground">
        Nosso site oferece integração com o VLibras, tradutor da comunicação digital para a Língua Brasileira de Sinais.
      </p>
      <div className="mt-4 rounded-lg border border-border bg-secondary p-4">
        <p className="text-sm text-secondary-foreground">
          Para acionar a tradução em Libras, ative o widget oficial do Governo Federal. Em publicações oficiais, o widget será
          carregado automaticamente e ficará disponível neste botão sem sobrepor os demais recursos fixos.
        </p>
      </div>
      <button onClick={onClose} className="mt-5 h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Entendi</button>
    </Sheet>
  );
}
