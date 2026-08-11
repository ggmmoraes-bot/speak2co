import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { getFeedbackList } from "@/lib/gisele-data.functions";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/feedback")({
  component: FeedbackPage,
});

const CATEGORY_LABEL: Record<string, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  pronunciation: "Pronunciation",
  fluency: "Fluency",
  strategy: "Strategy",
};

function FeedbackPage() {
  const fetchFn = useServerFn(getFeedbackList);
  const { data, isPending } = useQuery({ queryKey: ["gisele-feedback"], queryFn: () => fetchFn() });

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"Feedback"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          Tudo o que a Gisele observou nas suas sessões, do mais prioritário ao mais recente.
        </p>
      </header>

      {isPending && <Shimmer>Loading feedback…</Shimmer>}

      {data && data.length === 0 && (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Ainda não há feedback. Termine uma sessão de conversa e peça
          <span className="font-semibold text-foreground"> Get feedback</span>.
        </Card>
      )}

      <div className="space-y-3">
        {data?.map((f) => (
          <Card key={f.id} className="space-y-2 p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 text-[11px] font-semibold text-gold">
                {CATEGORY_LABEL[f.category] ?? f.category}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {new Date(f.created_at).toLocaleDateString("pt-BR")} · prioridade {f.priority}
              </span>
            </div>
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">{f.observation}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
