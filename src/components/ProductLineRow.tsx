import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Lock, Play } from "lucide-react";
import { toast } from "sonner";

export type ProductLineItem = {
  titleEn: string;
  titlePt: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  to?: string;
  params?: Record<string, string>;
  locked?: boolean;
  comingSoon?: boolean;
  requiredPlan?: "Essential" | "Premium" | "Signature";
};

const posterBase =
  "group relative block w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.04] hover:border-gold/70 hover:shadow-[0_28px_60px_-24px_hsl(var(--gold)/0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-[300px]";

function Poster({
  titleEn,
  titlePt,
  description,
  icon: Icon,
  imageUrl,
  locked,
  comingSoon,
  requiredPlan,
}: ProductLineItem) {
  return (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${titleEn} — Speak2Co`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 via-background to-gold/25">
            <Icon className="h-12 w-12 text-gold" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {comingSoon && (
            <span className="rounded-md bg-background/85 px-2 py-1 text-[10px] font-bold tracking-widest text-gold uppercase backdrop-blur">
              Coming Soon
            </span>
          )}
          {locked && requiredPlan && !comingSoon && (
            <span className="flex items-center gap-1 rounded-md bg-background/85 px-2 py-1 text-[10px] font-bold tracking-widest text-gold uppercase backdrop-blur">
              <Lock className="h-3 w-3" /> {requiredPlan}
            </span>
          )}
        </div>

        <div className="absolute right-3 bottom-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-gold text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {locked || comingSoon ? (
            <Lock className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
        </div>
      </div>

      <div className="relative -mt-6 px-4 pb-4">
        <h3 className="text-base font-semibold text-foreground">{titleEn}</h3>
        <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{titlePt}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/70">{description}</p>
      </div>
    </>
  );
}

function PosterCard(item: ProductLineItem) {
  const { to, params, locked, comingSoon, requiredPlan } = item;

  if (comingSoon || locked || !to) {
    const message = comingSoon
      ? `🚀 ${item.titleEn} — Coming Soon${requiredPlan ? ` · ${requiredPlan} Plan` : ""}`
      : requiredPlan
        ? `🔒 Available on ${requiredPlan} Plan — faça upgrade para desbloquear.`
        : "🔒 Upgrade your subscription to unlock this feature.";
    return (
      <button type="button" onClick={() => toast.info(message)} className={`${posterBase} text-left`}>
        <Poster {...item} />
      </button>
    );
  }

  return (
    <Link to={to} {...(params ? { params } : {})} className={posterBase}>
      <Poster {...item} />
    </Link>
  );
}

/** Carrossel estilo catálogo (Netflix) para as linhas de produto. */
export function ProductLineRow({
  titleEn,
  titlePt,
  items,
}: {
  titleEn: string;
  titlePt: string;
  items: ProductLineItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          {titleEn} <span className="text-sm font-normal text-muted-foreground">({titlePt})</span>
        </h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/80 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/80 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pt-2 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <PosterCard key={item.titleEn} {...item} />
        ))}
      </div>
    </section>
  );
}
