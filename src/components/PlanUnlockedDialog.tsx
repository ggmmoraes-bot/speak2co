import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAccess } from "@/lib/entitlements";
import { getPlanCatalog } from "@/lib/entitlements.functions";

const STORAGE_KEY = "s2c:last-plan";

/**
 * Detecta a mudança de plano do aluno e comemora com um pop-up
 * listando tudo o que acabou de ser desbloqueado.
 */
export function PlanUnlockedDialog() {
  const { data: access } = useAccess();
  const fetchCatalog = useServerFn(getPlanCatalog);
  const { data: catalog } = useQuery({
    queryKey: ["plan-catalog"],
    queryFn: () => fetchCatalog(),
    staleTime: 300_000,
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!access?.planKey) return;
    let previous: string | null = null;
    try {
      previous = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (previous !== access.planKey) {
      if (previous && access.planKey !== "free") setOpen(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, access.planKey);
      } catch {
        /* armazenamento indisponível */
      }
    }
  }, [access?.planKey]);

  if (!access) return null;

  const unlocked = (catalog?.features ?? []).filter((f) => access.features[f.key] === true);
  const planName = access.plan?.name ?? access.planKey;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-gold/40 bg-card">
        <DialogHeader>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <Sparkles className="h-6 w-6 text-gold" />
          </span>
          <DialogTitle className="mt-4 text-center text-2xl">
            Plano <span className="text-gold">{planName}</span> ativado!
          </DialogTitle>
          <DialogDescription className="text-center">
            Estes recursos acabaram de ser liberados na sua conta:
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-2 grid max-h-72 gap-2 overflow-y-auto pr-1">
          {unlocked.map((feature) => (
            <li
              key={feature.key}
              className="flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/5 p-3"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-semibold text-foreground">{feature.name}</p>
                {feature.description && (
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                )}
              </div>
            </li>
          ))}
          {unlocked.length === 0 && (
            <li className="text-center text-sm text-muted-foreground">
              Seus novos recursos já estão disponíveis no painel.
            </li>
          )}
        </ul>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            Get started
          </Button>
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link to="/assinatura" search={{ simulacao: undefined }} onClick={() => setOpen(false)}>
              Ver meu acesso
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
