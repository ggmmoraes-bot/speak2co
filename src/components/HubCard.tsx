import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { toast } from "sonner";

export type HubCardProps = {
  titleEn: string;
  titlePt: string;
  description: string;
  icon: LucideIcon;
  to?: string;
  params?: Record<string, string>;
  locked?: boolean;
  comingSoon?: boolean;
  requiredPlan?: "Essential" | "Premium" | "Signature";
};

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_50px_-20px_hsl(var(--gold)/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";

function Inner({
  titleEn,
  titlePt,
  description,
  icon: Icon,
  locked,
  comingSoon,
  requiredPlan,
}: HubCardProps) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 transition-transform duration-300 group-hover:scale-105">
        {locked && !comingSoon ? (
          <Lock className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Icon className="h-5 w-5 text-gold" />
        )}
      </span>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{titleEn}</h3>
      <p className="text-xs text-muted-foreground">{titlePt}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {comingSoon && (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-foreground/80 uppercase">
            Coming Soon
          </span>
        )}
        {locked && requiredPlan && (
          <span className="flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold">
            <Lock className="h-3 w-3" /> {requiredPlan} Plan
          </span>
        )}
        {!locked && !comingSoon && (
          <span className="flex items-center gap-1 text-xs font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
            Open <ArrowRight className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </>
  );
}

/** Cartão do hub da Home: aberto, bloqueado por plano ou Coming Soon. */
export function HubCard(props: HubCardProps) {
  const { to, params, locked, comingSoon, requiredPlan } = props;

  if (comingSoon || locked || !to) {
    const message = comingSoon
      ? `🚀 ${props.titleEn} — Coming Soon${requiredPlan ? ` · ${requiredPlan} Plan` : ""}`
      : requiredPlan
        ? `🔒 Available on ${requiredPlan} Plan — faça upgrade para desbloquear.`
        : "🔒 Upgrade your subscription to unlock this feature.";
    return (
      <button
        type="button"
        onClick={() => toast.info(message)}
        className={`${cardBase} cursor-pointer opacity-90`}
      >
        <Inner {...props} />
      </button>
    );
  }

  return (
    <Link to={to} {...(params ? { params } : {})} className={cardBase}>
      <Inner {...props} />
    </Link>
  );
}

/** Cabeçalho de seção com título em inglês e tradução em português. */
export function HubSection({
  titleEn,
  titlePt,
  children,
}: {
  titleEn: string;
  titlePt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        {titleEn} <span className="text-sm font-normal text-muted-foreground">({titlePt})</span>
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}
