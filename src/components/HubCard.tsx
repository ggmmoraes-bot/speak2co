import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { toast } from "sonner";
import { BrandText } from "@/components/BrandText";

export type HubCardProps = {
  titleEn: string;
  titlePt: string;
  description: string;
  icon: LucideIcon;
  /** Arte oficial do produto/recurso (substitui o ícone quando presente). */
  imageUrl?: string;
  to?: string;
  params?: Record<string, string>;
  locked?: boolean;
  comingSoon?: boolean;
  requiredPlan?: "All Access" | "Speak2Hire" | "Speak2Fluency" | "Speak2Travel";
};

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_50px_-20px_color-mix(in_oklab,var(--gold)_45%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";

function Inner({
  titleEn,
  titlePt,
  description,
  icon: Icon,
  imageUrl,
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
      <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/30 via-gold/10 to-primary/30 shadow-[0_10px_30px_-14px_color-mix(in_oklab,var(--gold)_60%,transparent)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_45%,transparent),transparent_60%)] opacity-70"
        />
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={`${titleEn} logo`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {locked && !comingSoon && (
              <span className="absolute inset-0 flex items-center justify-center bg-background/70">
                <Lock className="icon-gold h-5 w-5" />
              </span>
            )}
          </>
        ) : locked && !comingSoon ? (
          <Lock className="icon-gold relative h-6 w-6 opacity-80" />
        ) : (
          <Icon className="icon-gold relative h-7 w-7 drop-shadow-[0_2px_6px_color-mix(in_oklab,var(--gold)_60%,transparent)]" />
        )}
      </span>



      <h3 className="mt-5 text-lg font-semibold text-foreground">
        <BrandText text={titleEn} />
      </h3>
      <p className="text-xs text-muted-foreground">{titlePt}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {comingSoon && (
          <span className="badge-gold rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest text-gold uppercase">
            Coming Soon
          </span>
        )}
        {locked && requiredPlan && (
          <span className="badge-gold flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-gold">
            <Lock className="icon-gold h-3 w-3" /> {requiredPlan} Plan
          </span>
        )}
        {!locked && !comingSoon && (
          <span className="link-gold flex items-center gap-1 text-xs transition-transform duration-300 group-hover:translate-x-1">
            Open <ArrowRight className="icon-gold h-3.5 w-3.5" />
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
