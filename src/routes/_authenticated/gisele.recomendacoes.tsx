import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { getRecommendations, updateRecommendationStatus } from "@/lib/gisele-data.functions";

export const Route = createFileRoute("/_authenticated/gisele/recomendacoes")({
  component: RecommendationsPage,
});

const TYPE_LABEL: Record<string, string> = {
  practice: "Practice",
  lesson: "Lesson",
  review: "Review",
  mission: "Mission",
};

function RecommendationsPage() {
  const queryClient = useQueryClient();
  const fetchFn = useServerFn(getRecommendations);
  const updateFn = useServerFn(updateRecommendationStatus);

  const { data, isPending } = useQuery({
    queryKey: ["gisele-recommendations"],
    queryFn: () => fetchFn(),
  });

  async function setStatus(id: string, status: "done" | "dismissed") {
    try {
      await updateFn({ data: { id, status } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-recommendations"] });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível atualizar.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Recommendations</h1>
        <p className="text-sm italic text-muted-foreground">
          Próximos passos sugeridos pela Gisele ao final de cada sessão.
        </p>
      </header>

      {isPending && <Shimmer>Loading recommendations…</Shimmer>}

      {data && data.length === 0 && (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Ainda não há recomendações. Elas aparecem quando você pede o feedback de uma sessão.
        </Card>
      )}

      <div className="space-y-3">
        {data?.map((r) => (
          <Card
            key={r.id}
            className={`flex flex-wrap items-center gap-3 p-4 ${
              r.status !== "pending" ? "opacity-60" : ""
            }`}
          >
            <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 text-[11px] font-semibold text-gold">
              {TYPE_LABEL[r.type] ?? r.type}
            </span>
            <p className="flex-1 text-sm text-muted-foreground">{r.content}</p>
            {r.status === "pending" ? (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1 rounded-full text-xs"
                  onClick={() => setStatus(r.id, "done")}
                >
                  <Check className="h-3.5 w-3.5" /> Done
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-1 rounded-full text-xs"
                  onClick={() => setStatus(r.id, "dismissed")}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : (
              <span className="text-[11px] uppercase text-muted-foreground">{r.status}</span>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}
