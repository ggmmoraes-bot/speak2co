import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, Mic, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { AltHeading } from "@/components/AltHeading";
import { getSessionDetail } from "@/lib/gisele-data.functions";

export const Route = createFileRoute("/_authenticated/gisele/historico/$sessionId")({
  component: SessionDetailPage,
  head: () => ({
    meta: [
      { title: "Session review | GiseleAI — Speak2Co" },
      {
        name: "description",
        content:
          "Review your GiseleAI voice session: full transcript, soft corrections and your estimated CEFR level.",
      },
      { property: "og:title", content: "Session review | GiseleAI — Speak2Co" },
      {
        property: "og:description",
        content: "Transcript, soft corrections and estimated level from your GiseleAI voice session.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function SessionDetailPage() {
  const { sessionId } = Route.useParams();
  const fetchFn = useServerFn(getSessionDetail);
  const { data, isPending } = useQuery({
    queryKey: ["gisele-session-detail", sessionId],
    queryFn: () => fetchFn({ data: { sessionId } }),
  });

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <Link
        to="/gisele/historico"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to history
      </Link>

      <header className="space-y-1">
        <h1 className="text-2xl font-bold">
          <AltHeading text={"Session review"} />
        </h1>
        <p className="text-sm italic text-muted-foreground">
          Revisão da sessão: transcrição, correções suaves e nível estimado.
        </p>
      </header>

      {isPending && <Shimmer>Loading session…</Shimmer>}

      {data === null && (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Sessão não encontrada.
        </Card>
      )}

      {data && (
        <>
          <Card className="space-y-3 p-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1 font-semibold text-foreground">
                {data.session_type === "voice" ? <Mic className="h-4 w-4 text-gold" /> : null}
                {data.session_type === "voice" ? "Voice session" : "Session"}
              </span>
              <span>{new Date(data.created_at).toLocaleString("pt-BR")}</span>
              <span>{data.minutes} min</span>
              <span>{data.transcript.length} turns</span>
              {data.estimated_level && (
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-semibold text-gold">
                  Estimated level: {data.estimated_level}
                </span>
              )}
            </div>
            {data.summary && (
              <p className="whitespace-pre-line text-sm text-muted-foreground">{data.summary}</p>
            )}
          </Card>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">
              <AltHeading text={"Soft corrections"} />
            </h2>
            {data.soft_corrections.length === 0 ? (
              <Card className="p-5 text-sm text-muted-foreground">
                No corrections saved for this session yet.
                <span className="block italic">
                  Encerre a sessão com “End session” para gerar as correções.
                </span>
              </Card>
            ) : (
              data.soft_corrections.map((c, i) => (
                <Card key={i} className="space-y-1 p-4">
                  <p className="text-xs text-muted-foreground line-through">{c.original}</p>
                  <p className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {c.better}
                  </p>
                  <p className="text-xs italic text-muted-foreground">{c.why}</p>
                </Card>
              ))
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">
              <AltHeading text={"Full transcript"} />
            </h2>
            <Card className="space-y-3 p-5">
              {data.transcript.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Nenhuma transcrição salva para esta sessão.
                </p>
              ) : (
                data.transcript.map((t, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                      {t.role === "student" ? "You" : "Gisele"}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </div>
                ))
              )}
            </Card>
          </section>
        </>
      )}
    </main>
  );
}
