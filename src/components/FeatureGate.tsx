import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccess, hasFeature, type FeatureKey } from "@/lib/entitlements";

type Props = {
  feature: FeatureKey;
  title: string;
  benefit: string;
  requiredPlan?: string;
  children: ReactNode;
};

export function UpgradeScreen({
  title,
  benefit,
  requiredPlan,
}: {
  title: string;
  benefit: string;
  requiredPlan?: string;
}) {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
        <Lock className="h-7 w-7 text-gold" />
      </span>
      <h1 className="mt-6 text-3xl font-bold text-foreground">{title}</h1>
      <p className="mt-3 max-w-lg text-muted-foreground">{benefit}</p>
      {requiredPlan && (
        <p className="mt-4 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
          Disponível no plano {requiredPlan}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90">
          <Link to="/premium">
            <Sparkles className="mr-2 h-4 w-4" /> Fazer upgrade agora
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/painel">Voltar ao painel</Link>
        </Button>
      </div>
    </main>
  );
}

/** Bloqueia o conteúdo quando o plano do aluno não inclui o recurso. */
export function FeatureGate({ feature, title, benefit, requiredPlan, children }: Props) {
  const { data: access, isPending } = useAccess();

  if (isPending) {
    return (
      <div className="flex flex-1 items-center justify-center p-12 text-sm text-muted-foreground">
        Verificando seu plano...
      </div>
    );
  }

  if (!hasFeature(access, feature)) {
    return <UpgradeScreen title={title} benefit={benefit} {...(requiredPlan ? { requiredPlan } : {})} />;
  }

  return <>{children}</>;
}
