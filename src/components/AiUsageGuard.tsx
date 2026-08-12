import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpgradeScreen } from "@/components/FeatureGate";
import { useAccess, hasFeature, aiMinutesLeft } from "@/lib/entitlements";
import { consumeAiSeconds } from "@/lib/entitlements.functions";

/** Envia o consumo a cada 30s; só conta o tempo realmente usado na tela. */
const TICK_SECONDS = 30;
/** Sem interação nesse intervalo, o cronômetro pausa (aluno ausente). */
const IDLE_SECONDS = 180;

/**
 * Libera o Professor IA conforme o plano e controla o limite diário de minutos
 * dos planos com uso restrito (o tempo é contado enquanto a tela fica aberta).
 */
export function AiUsageGuard({ children }: { children: ReactNode }) {
  const { data: access, isPending } = useAccess();
  const queryClient = useQueryClient();
  const consume = useServerFn(consumeAiSeconds);
  const consumeRef = useRef(consume);
  consumeRef.current = consume;

  const allowed = hasFeature(access, "ai_teacher");
  const limited = allowed && access?.aiDailyMinutes != null;
  const minutesLeft = aiMinutesLeft(access);
  const exhausted = limited && (minutesLeft ?? 0) <= 0;
  const shouldCount = Boolean(limited && !exhausted);

  useEffect(() => {
    if (!shouldCount) return;
    let pending = 0;
    let lastActivity = Date.now();
    const touch = () => {
      lastActivity = Date.now();
    };
    const events = ["pointerdown", "keydown", "input", "scroll"] as const;
    events.forEach((e) => window.addEventListener(e, touch, { passive: true }));

    const flush = async () => {
      if (pending < 1) return;
      const seconds = Math.min(600, Math.round(pending));
      pending = 0;
      try {
        await consumeRef.current({ data: { seconds, featureKey: "ai_teacher" } });
        await queryClient.invalidateQueries({ queryKey: ["my-access"] });
      } catch {
        /* silencioso: não interrompe a conversa */
      }
    };

    const id = window.setInterval(() => {
      const idle = (Date.now() - lastActivity) / 1000 > IDLE_SECONDS;
      if (document.hidden || idle) return;
      pending += TICK_SECONDS;
      void flush();
    }, TICK_SECONDS * 1000);

    return () => {
      window.clearInterval(id);
      events.forEach((e) => window.removeEventListener(e, touch));
      void flush();
    };
  }, [shouldCount, queryClient]);


  if (isPending) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
        Verificando seu plano...
      </div>
    );
  }

  if (!allowed) {
    return (
      <UpgradeScreen
        title="Professor IA disponível nos planos pagos"
        benefit="Converse em inglês com um professor de IA que corrige gramática, pronúncia e adapta tudo ao seu nível."
        requiredPlan="Essential"
      />
    );
  }

  if (exhausted) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Clock className="h-7 w-7 text-gold" />
        </span>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Você usou seus {access?.aiDailyMinutes} minutos de hoje
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Seu limite diário do Professor IA foi atingido. Ele é renovado amanhã — ou libere
          conversas ilimitadas agora mesmo com o plano Premium.
        </p>
        <Button
          asChild
          className="mt-8 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          <Link to="/premium">
            <Sparkles className="mr-2 h-4 w-4" /> Liberar IA ilimitada
          </Link>
        </Button>
      </main>
    );
  }

  return (
    <>
      {limited && (
        <div className="flex items-center justify-center gap-2 border-b border-border bg-gold/10 px-4 py-2 text-xs font-semibold text-gold">
          <Clock className="h-3.5 w-3.5" />
          Restam {minutesLeft} min de Professor IA hoje
          <Link to="/premium" className="underline underline-offset-2">
            liberar ilimitado
          </Link>
        </div>
      )}
      {children}
    </>
  );
}
