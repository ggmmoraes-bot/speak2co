import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import { getSessionHistory } from "@/lib/gisele-data.functions";
import type { GiseleFocus } from "@/lib/gisele.functions";

export const Route = createFileRoute("/_authenticated/gisele/historico")({
  component: HistoryPage,
});

function HistoryPage() {
  const navigate = useNavigate();
  const fetchFn = useServerFn(getSessionHistory);
  const { data, isPending } = useQuery({ queryKey: ["gisele-history"], queryFn: () => fetchFn() });

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">History</h1>
        <p className="text-sm italic text-muted-foreground">
          Todas as suas conversas e sessões com a Gisele.
        </p>
      </header>

      {isPending && <Shimmer>Loading history…</Shimmer>}

      {data && data.length === 0 && (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Nenhuma sessão registrada ainda.
        </Card>
      )}

      <div className="space-y-3">
        {data?.map((s) => {
          const label = FOCUS_LABEL[s.focus as GiseleFocus] ?? FOCUS_LABEL.conversation;
          return (
            <Card
              key={s.id}
              className={`space-y-2 p-4 ${s.thread_id ? "cursor-pointer transition-colors hover:border-gold/50" : ""}`}
              onClick={() =>
                s.thread_id
                  ? navigate({ to: "/gisele/$threadId", params: { threadId: s.thread_id } })
                  : undefined
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MessageSquare className="h-4 w-4 text-gold" />
                  {label.en}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {new Date(s.created_at).toLocaleString("pt-BR")} · {s.minutes} min
                  {s.corrections > 0 ? ` · ${s.corrections} corrections` : ""}
                </span>
              </div>
              {s.summary && <p className="text-xs text-muted-foreground">{s.summary}</p>}
            </Card>
          );
        })}
      </div>
    </main>
  );
}
