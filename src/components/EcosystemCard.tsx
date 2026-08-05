import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock, Sparkles, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BrandText } from "@/components/BrandText";

export type EcosystemStatus = "available" | "locked" | "soon";
export type PlanName = "Essential" | "Premium" | "Signature";

export type EcosystemItem = {
  id: string;
  titleEn: string;
  titlePt?: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  to?: string;
  params?: Record<string, string>;
  status: EcosystemStatus;
  /** Planos que liberam o recurso (usado na mensagem do modal). */
  plans?: PlanName[];
  /** Card compacto (Learning Tools). */
  compact?: boolean;
};

const shell =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_50px_-20px_color-mix(in_oklab,var(--gold)_45%,transparent)] focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none";

function planLabel(plans?: PlanName[]) {
  if (!plans?.length) return null;
  return plans.length > 1 ? `${plans.slice(0, -1).join(", ")} and ${plans.at(-1)}` : plans[0];
}

function Badges({ item }: { item: EcosystemItem }) {
  const label = planLabel(item.plans);
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {item.status === "soon" && (
        <span className="badge-gold rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest text-gold uppercase">
          Coming Soon
        </span>
      )}
      {item.status !== "available" && label && (
        <span className="badge-gold flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold text-gold">
          <Lock className="h-3 w-3" /> {label}
        </span>
      )}
      {item.status === "available" && (
        <span className="link-gold flex items-center gap-1 text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1">
          Open <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
}

function Body({ item }: { item: EcosystemItem }) {
  const { icon: Icon, compact } = item;
  const locked = item.status !== "available";
  return (
    <div className={compact ? "flex h-full flex-col p-5" : "flex h-full flex-col p-6"}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/25 via-gold/5 to-primary/30 transition-transform duration-300 group-hover:scale-105 ${
          compact ? "h-11 w-11" : "h-16 w-16"
        }`}
      >
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={`${item.titleEn} logo`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <Icon className={`icon-gold ${compact ? "h-5 w-5" : "h-7 w-7"}`} />
        )}
        {locked && (
          <span className="absolute inset-0 flex items-center justify-center bg-background/65">
            <Lock className="icon-gold h-4 w-4" />
          </span>
        )}
      </span>

      <h3 className={`mt-4 font-semibold text-foreground ${compact ? "text-sm" : "text-lg"}`}>
        <BrandText text={item.titleEn} />
      </h3>
      {item.titlePt && <p className="text-[11px] text-muted-foreground">{item.titlePt}</p>}
      <p
        className={`mt-2 flex-1 leading-relaxed text-foreground/75 ${compact ? "text-xs" : "text-sm"}`}
      >
        {item.description}
      </p>
      <Badges item={item} />
    </div>
  );
}

/** Card do ecossistema: abre a rota quando liberado, ou um modal elegante quando bloqueado. */
export function EcosystemCard({ item }: { item: EcosystemItem }) {
  const [open, setOpen] = useState(false);
  const label = planLabel(item.plans);

  if (item.status === "available" && item.to) {
    return (
      <Link to={item.to} {...(item.params ? { params: item.params } : {})} className={shell}>
        <Body item={item} />
      </Link>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${shell} cursor-pointer`}>
        <Body item={item} />
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
              {item.status === "soon"
                ? "This feature will be available soon."
                : label
                  ? `This feature is available on the ${label} Plan.`
                  : "This feature is not included in your current plan."}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          <DialogFooter className="gap-2 sm:justify-start">
            <Button
              asChild
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Link to="/premium">
                <Sparkles className="mr-2 h-4 w-4" /> See plans
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

/** Seção do hub com título bilíngue e grade responsiva. */
export function EcosystemSection({
  titleEn,
  titlePt,
  items,
  compact,
}: {
  titleEn: string;
  titlePt: string;
  items: EcosystemItem[];
  compact?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        {titleEn} <span className="text-sm font-normal text-muted-foreground">({titlePt})</span>
      </h2>
      <div
        className={`mt-5 grid gap-4 sm:grid-cols-2 ${
          compact ? "lg:grid-cols-4" : "gap-5 lg:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <EcosystemCard key={item.id} item={{ ...item, ...(compact ? { compact } : {}) }} />
        ))}
      </div>
    </section>
  );
}
