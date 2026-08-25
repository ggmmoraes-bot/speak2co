import type { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Lock, Play, Sparkles } from "lucide-react";
import { BrandText } from "@/components/BrandText";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  requiredPlan?: "Free" | "Essential" | "Premium" | "Signature";
};

const posterBase =
  "group relative block w-[72vw] max-w-[290px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_10px_30px_-18px_color-mix(in_oklab,var(--background)_80%,transparent)] transition-all duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.03] hover:border-gold/70 hover:shadow-[0_28px_60px_-24px_color-mix(in_oklab,var(--gold)_55%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-[360px] sm:max-w-none";

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
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-background/60 p-3 sm:p-5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${titleEn} — Speak2Co`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]" 
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 via-background to-gold/25">
            <Icon className="icon-gold h-12 w-12" />
          </div>
        )}

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {comingSoon && (
            <span className="badge-gold rounded-md bg-background/85 px-2 py-1 text-[10px] font-bold tracking-widest text-gold uppercase backdrop-blur">
              Coming Soon
            </span>
          )}
          {locked && requiredPlan && !comingSoon && (
            <span className="badge-gold flex items-center gap-1 rounded-md bg-background/85 px-2 py-1 text-[10px] font-bold tracking-widest text-gold uppercase backdrop-blur">
              <Lock className="icon-gold h-3 w-3" /> {requiredPlan}
            </span>
          )}
        </div>

        <div className="btn-gold absolute right-3 bottom-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {locked || comingSoon ? (
            <Lock className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-4">
        <h3 className="text-base font-semibold text-foreground">
          <BrandText text={titleEn} />
        </h3>
        <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{titlePt}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foreground/70">{description}</p>
      </div>
    </>
  );
}

function PosterCard(item: ProductLineItem) {
  const { to, params, locked, comingSoon, requiredPlan } = item;
  const [open, setOpen] = useState(false);

  if (comingSoon || locked || !to) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`${posterBase} text-left`}
        >
          <Poster {...item} />
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="rounded-3xl border-gold/40 bg-card">
            <DialogHeader>
              <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                <Lock className="h-5 w-5 text-gold" />
              </span>
              <DialogTitle className="text-xl">
                <BrandText text={item.titleEn} />
              </DialogTitle>
              <DialogDescription className="pt-1">
                {comingSoon
                  ? `Em breve na plataforma${requiredPlan ? ` — disponível no plano ${requiredPlan}.` : "."}`
                  : requiredPlan
                    ? `Este recurso é liberado a partir do plano ${requiredPlan}.`
                    : "Este recurso não está incluído no seu plano atual."}
              </DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <DialogFooter className="gap-2 sm:justify-start">
              <Button
                asChild
                className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                <Link to="/premium">
                  <Sparkles className="mr-2 h-4 w-4" /> Ver planos
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full" onClick={() => setOpen(false)}>
                Fechar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
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
  const [atEnd, setAtEnd] = useState(false);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 24);
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
            className="btn-gold-outline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="btn-gold-outline flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-1 pt-2 pr-10 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:pr-1 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <PosterCard key={item.titleEn} {...item} />
          ))}
        </div>

        {/* Indicador mobile: convite para deslizar e descobrir mais produtos */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-end bg-gradient-to-l from-background via-background/70 to-transparent pb-6 transition-opacity duration-300 sm:hidden ${
            atEnd ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-9 w-9 animate-pulse items-center justify-center rounded-full border border-gold/50 bg-background/80 text-gold shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--gold)_70%,transparent)] backdrop-blur">
            <ChevronRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
