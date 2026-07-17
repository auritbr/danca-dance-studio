import type { SVGProps } from "react";

/** Small dance-themed decorative SVG. Purely presentational. */
export function DanceOrnament({
  variant = "flow",
  className,
  ...rest
}: { variant?: "flow" | "steps" | "rhythm" | "spotlight" | "curtain" | "barre" } & SVGProps<SVGSVGElement>) {
  const common = {
    "aria-hidden": true,
    focusable: false as const,
    className,
    ...rest,
  };
  switch (variant) {
    case "steps":
      return (
        <svg viewBox="0 0 80 20" fill="none" {...common}>
          <circle cx="6" cy="10" r="3" fill="currentColor" opacity="0.9" />
          <circle cx="22" cy="10" r="2.4" fill="currentColor" opacity="0.7" />
          <circle cx="38" cy="10" r="1.9" fill="currentColor" opacity="0.55" />
          <circle cx="54" cy="10" r="1.4" fill="currentColor" opacity="0.4" />
          <circle cx="70" cy="10" r="1" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "rhythm":
      return (
        <svg viewBox="0 0 80 20" fill="none" {...common}>
          {[0, 10, 22, 30, 42, 50, 62, 74].map((x, i) => (
            <rect key={i} x={x} y={i % 2 ? 4 : 8} width="4" height={i % 2 ? 12 : 8} rx="1.5" fill="currentColor" opacity={0.5 + (i % 3) * 0.15} />
          ))}
        </svg>
      );
    case "spotlight":
      return (
        <svg viewBox="0 0 80 40" fill="none" {...common}>
          <defs>
            <linearGradient id="dc-spot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M38 0 L2 40 L78 40 Z" fill="url(#dc-spot)" />
        </svg>
      );
    case "curtain":
      return (
        <svg viewBox="0 0 80 60" fill="none" {...common}>
          <path d="M0 0 C 10 20, 6 40, 12 60 L0 60 Z" fill="currentColor" opacity="0.5" />
          <path d="M80 0 C 70 20, 74 40, 68 60 L80 60 Z" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "barre":
      return (
        <svg viewBox="0 0 80 20" fill="none" {...common}>
          <line x1="0" y1="6" x2="80" y2="6" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
          <line x1="10" y1="6" x2="10" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <line x1="70" y1="6" x2="70" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      );
    case "flow":
    default:
      return (
        <svg viewBox="0 0 120 30" fill="none" {...common}>
          <path
            d="M2 22 C 20 4, 40 4, 58 18 S 100 30, 118 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="118" cy="8" r="2" fill="currentColor" />
        </svg>
      );
  }
}

/** Big decorative flourish for hero backgrounds. */
export function HeroFlourish({ className }: { className?: string }) {
  return (
    <svg aria-hidden focusable="false" viewBox="0 0 600 300" className={className} fill="none">
      <path d="M-20 240 C 120 120, 260 300, 400 160 S 640 40, 700 120" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M-20 260 C 140 180, 280 320, 420 200 S 660 80, 720 160" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <circle cx="480" cy="80" r="42" stroke="currentColor" opacity="0.15" />
      <circle cx="120" cy="60" r="18" stroke="currentColor" opacity="0.18" />
      <g opacity="0.35">
        <circle cx="60" cy="270" r="3" fill="currentColor" />
        <circle cx="110" cy="262" r="2.4" fill="currentColor" />
        <circle cx="160" cy="256" r="1.8" fill="currentColor" />
        <circle cx="210" cy="252" r="1.3" fill="currentColor" />
      </g>
    </svg>
  );
}

/** Determine a dance-related ornament from a role/area string. */
export function ornamentForRole(role: string, area: string): "barre" | "flow" | "rhythm" | "curtain" | "spotlight" | "steps" {
  const t = `${role} ${area}`.toLowerCase();
  if (t.includes("balé") || t.includes("bale")) return "barre";
  if (t.includes("contempor")) return "flow";
  if (t.includes("urban") || t.includes("hip")) return "rhythm";
  if (t.includes("produ")) return "curtain";
  if (t.includes("coorden")) return "spotlight";
  if (t.includes("comunic")) return "steps";
  return "flow";
}
